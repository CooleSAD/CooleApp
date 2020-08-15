import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  List,
  Form,
  View,
  Button,
  Text,
  Separator,
} from "native-base";
import { connect } from "react-redux";
import Modal from "react-native-modal";

import NeedItem from "../components/needs/NeedItem";
import TextInput from "../components/login/TextInput";
import { requestNeeds, requestPostNeed, requestDeleteNeed } from "../utils/requests/needs";
import { StyleSheet } from "react-native";

class NeedsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      needText: "",
      contact: "",
      isModalVisibile: false,
      chosenNeedId: null,
    };
  }

  componentDidMount() {
    console.log(this.props.profile);
    requestNeeds(this.props.token)
      .then((res) => {
        this.setState({ data: res.data });
      })
      .catch((err) => console.warn(err));
  }

  onChangeField = (value, field) => {
    this.setState({ [field]: value });
  };

  onConfirmPress = () => {
    const { needText, contact, data } = this.state;
    requestPostNeed(this.props.token, {
      text: needText,
      contact: contact,
    })
      .then((res) => {
        let newData = [...data];
        newData.unshift(res.data);
        this.setState({ data: newData, needText: '', contact:'' });
      })
      .catch((err) => console.warn(err));
  };

  renderModal = () => {
    return (
      <View style={styles.modal}>
        <Text style={styles.modalText}>
          آیا مایل به حذف این نیازمندی هستید؟
        </Text>
        <View style={styles.modalButtonsContainer}>
          <Button success style={styles.modalButton} onPress={this.onDeleteNeed}>
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
    this.setState({ isModalVisibile: !this.state.isModalVisibile });
  };

  setChosenNeedId = (id) => {
    this.setState({ chosenNeedId: id });
  };

  onDeleteNeed = () => {
    requestDeleteNeed(this.props.token, this.state.chosenNeedId)
    .then((res) => {
      let newData = this.state.data.filter((d) => d.id !== this.state.chosenNeedId)
      this.setState({data : newData, isModalVisibile: false})
    })
    .catch((err) => console.warn(err))
  }

  render() {
    const { needText, contact, isModalVisibile } = this.state;
    return (
      <Container style={{ backgroundColor: "#edffef99" }}>
        <Modal isVisible={isModalVisibile} onBackdropPress={this.toggleModal}>
          {this.renderModal()}
        </Modal>
        <Content>
          <Form style={{ width: "90%", alignSelf: "center", marginBottom: 20 }}>
            <TextInput
              onChangeText={this.onChangeField}
              type="needText"
              label="چه چیزی نیاز دارید؟"
              color="black"
              value={needText}
            />
            <TextInput
              onChangeText={this.onChangeField}
              type="contact"
              label="شماره تماس"
              color="black"
              value={contact}
            />
            <View style={{ marginTop: 10, alignSelf: "flex-start" }}>
              <Button
                onPress={this.onConfirmPress}
                disabled={needText === "" || contact === ""}
                style={{ borderRadius: 20 }}
                info
              >
                <Text style={{ fontFamily: "IRANSans_bold" }}>ثبت درخواست</Text>
              </Button>
            </View>
          </Form>
          <List>
            <Separator bordered>
              <Text style={styles.separatorText}>نیاز های من</Text>
            </Separator>
            {this.state.data
              .filter((d) => d.user === this.props.profile.nickname)
              .map((d) => {
                return (
                  <NeedItem
                    nickname={d.user}
                    item={d.text}
                    avatar_url={d.avatar_url}
                    contact={d.contact}
                    own={true}
                    toggleModal={this.toggleModal}
                    id={d.id}
                    setChosenNeedId={this.setChosenNeedId}
                  />
                );
              })}
            <Separator bordered>
              <Text style={styles.separatorText}>همه نیاز ها</Text>
            </Separator>
            {this.state.data
              .filter((d) => d.user !== this.props.profile.nickname)
              .map((d) => {
                return (
                  <NeedItem
                    nickname={d.user}
                    item={d.text}
                    avatar_url={d.avatar_url}
                    contact={d.contact}
                    own={false}
                  />
                );
              })}
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  separatorText: {
    fontFamily: "IRANSans_medium",
    fontSize: 14,
    marginRight: 10,
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

const mapStateToProps = (state) => ({
  token: state.loginReducer.token,
  profile: state.profileReducer.data,
});

export default connect(mapStateToProps, null)(NeedsScreen);
