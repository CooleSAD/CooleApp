import React, { Component } from "react";
import { Container, Text, View, Button } from "native-base";
import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import PersianJS from "persianjs";
import { connect } from "react-redux";
import Modal from "react-native-modal";

import SquareThumbnail from "../components/event/SquareThumbnail";
import EventFooterItem from "../components/event/EventFooterItem";
import { requestEvent, requestEnrollEvent } from "../utils/requests/events";

function GenderText(gender) {
  if (gender === "M") {
    return "پسران";
  }
  return "دختران";
}

function GenderIcon(gender) {
  if (gender === "M") {
    return "user";
  }
  return "user-female";
}

class EventScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      hasEnrolled: false,
    };
  }

  componentDidMount() {
    const { token } = this.props;
    const { id } = this.props.route.params;
    requestEvent(token, id)
      .then((res) => {
        this.setState({ hasEnrolled: res.data.has_enrolled });
      })
      .catch((err) => console.warn(err));
  }

  enrollEvent = () => {
    const { token } = this.props;
    const { id } = this.props.route.params;
    requestEnrollEvent(token, id)
      .then((res) => {
        if (res.data.success) {
          this.setState({ hasEnrolled: true });
          this.toggleModal();
        } else {
          console.warn("error");
        }
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  notCompletedProfileModal = () => {
    const { navigation } = this.props;
    return (
      <View style={styles.modal}>
        <Text style={styles.modalText}>
          لطفا برای شرکت در رویداد ابتدا پروفایل خود را تکمیل کنید.
        </Text>
        <Button
          info
          style={styles.modalButton}
          onPress={() => {
            this.toggleModal();
            navigation.navigate("ProfileNav");
          }}
        >
          <Text style={styles.modalButtonText}>تکمیل پروفایل</Text>
        </Button>
      </View>
    );
  };

  notAppropriateProfileModal = () => {
    return (
      <View style={styles.modal}>
        <Text style={styles.modalText}>
          امکان شرکت در این رویداد برای شما وجود ندارد.
        </Text>
        <Button danger style={styles.modalButton} onPress={this.toggleModal}>
          <Text style={styles.modalButtonText}>باشه</Text>
        </Button>
      </View>
    );
  };

  confirmEnrollModal = () => {
    return (
      <View style={styles.modal}>
        <Text style={styles.modalText}>
          تمایل خود به شرکت در رویداد را تایید می کنید؟
        </Text>
        <View style={styles.modalButtonsContainer}>
          <Button success style={styles.modalButton} onPress={this.enrollEvent}>
            <Text style={styles.modalButtonText}>بله</Text>
          </Button>
          <Button danger style={styles.modalButton} onPress={this.toggleModal}>
            <Text style={styles.modalButtonText}>خیر</Text>
          </Button>
        </View>
      </View>
    );
  };

  toggleModal = () => {
    const {id} = this.props.route.params
    if (!this.state.hasEnrolled)
      this.setState({ isModalVisible: !this.state.isModalVisible });
    else 
      this.props.navigation.navigate('InEvent', {id})
  };

  renderModal = () => {
    const { isProfileCompleted, gender, route } = this.props;
    if (!isProfileCompleted) {
      return this.notCompletedProfileModal();
    } else {
      if (gender !== route.params.gender)
        return this.notAppropriateProfileModal();
      else return this.confirmEnrollModal();
    }
  };

  getButtonText = () => {
    return this.state.hasEnrolled ? "ورود به رویداد" : "شرکت در رویداد";
  };

  render() {
    const {
      date,
      gender,
      length,
      image_url,
      description,
      coordination_date,
      difficulty_level,
      coordinator,
      coordinator_phone_number,
    } = this.props.route.params;
    return (
      <Container style={{ backgroundColor: "#FAFAFAFF" }}>
        <Modal
          onBackdropPress={this.toggleModal}
          isVisible={this.state.isModalVisible}
        >
          {this.renderModal()}
        </Modal>
        <View style={styles.EventDescription_Image}>
          <ImageBackground source={{ uri: image_url }} style={styles.Image}>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <LinearGradient
                colors={["#FAFAFA00", "#FAFAFA10", "#FAFAFAFF"]}
                style={styles.LinearGradient}
              />
              <View style={styles.EnrollButtonContainer}>
                <Button
                  onPress={this.toggleModal}
                  style={styles.EnrollButton}
                  info
                  //todo
                >
                  <Text style={styles.EnrollButtonText}>
                    {this.getButtonText()}
                  </Text>
                </Button>
              </View>
            </View>
          </ImageBackground>
        </View>

        <View style={styles.EventDescription_Thumbnails}>
          <View style={styles.SquareThumbnail}>
            <SquareThumbnail inputText={date} name="calendar" />
          </View>
          <View style={styles.SquareThumbnail}>
            <SquareThumbnail
              inputText={GenderText(gender)}
              name={GenderIcon(gender)}
            />
          </View>
          <View style={styles.SquareThumbnail}>
            <SquareThumbnail inputText={length} name="clock" />
          </View>
        </View>

        <View style={styles.EventDescription_Text}>
          <Text style={styles.Text}>{description}</Text>
          <Text style={styles.Text}>
            {"\n\n"}
            {"زمان جلسه توجیهی : " + coordination_date}
          </Text>
        </View>

        <View style={styles.EventDescription_FooterThumbnails}>
          <View style={styles.SquareThumbnail}>
            <EventFooterItem
              type="difficulty_level"
              content={difficulty_level}
            />
          </View>
          <View style={styles.SquareThumbnail}>
            <EventFooterItem type="coordinator" content={coordinator} />
          </View>
          <View style={styles.SquareThumbnail}>
            <EventFooterItem
              type="coordinator_phone_number"
              content={PersianJS(coordinator_phone_number)
                .englishNumber()
                .toString()}
            />
          </View>
        </View>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  isProfileCompleted: state.profileReducer.data.is_completed,
  gender: state.profileReducer.data.gender,
  token: state.loginReducer.token,
});

const styles = StyleSheet.create({
  LinearGradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },

  Image: {
    height: "100%",
    width: undefined,
    flex: 1,
  },

  SquareThumbnail: {
    borderWidth: 0.2,
    borderColor: "#6B8E2325",
    flex: 1,
    justifyContent: "center",
  },

  Text: {
    fontSize: 16,
    fontFamily: "IRANSans",
    textAlign: "center",
  },

  EventDescription_Image: {
    flex: 4,
  },

  EventDescription_Thumbnails: {
    padding: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    flex: 1,
  },

  EventDescription_Text: {
    flex: 3,
    alignItems: "center",
    paddingTop: 20,
    width: "80%",
    alignSelf: "center",
  },

  EventDescription_FooterThumbnails: {
    flex: 1.5,
  },

  EnrollButtonContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },

  EnrollButton: {
    marginBottom: 15,
    borderRadius: 20,
  },

  EnrollButtonText: {
    fontSize: 16,
    fontFamily: "IRANSans_bold",
  },

  modal: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },

  modalText: {
    fontFamily: "IRANSans",
    fontSize: 16,
    alignSelf: "center",
    textAlign: "center",
  },

  modalButton: {
    width: "40%",
    borderRadius: 20,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 20,
  },

  modalButtonText: {
    fontSize: 16,
    fontFamily: "IRANSans_bold",
  },

  modalButtonsContainer: {
    flexDirection: "row-reverse",
    width: "80%",
    alignSelf: "center",
    justifyContent: "space-around",
  },
});

export default connect(mapStateToProps, null)(EventScreen);
