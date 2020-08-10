import React, { Component } from "react";
import { Container, Text, View, Button, Picker, Icon } from "native-base";
import ItemsList from "../components/assets/ItemsList";
import { ImageBackground, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import { connect } from "react-redux";

import { requestProperties } from "../utils/requests/properties";

class PropertiesScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCategory: "همه",
      isModalVisible: false,
      data: [],
    };
    this.data_dict = {};
  }

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  renderModal = () => {
    return (
      <View style={styles.modal}>
        <Text style={styles.modalText}>
          رزرو با موفقیت انجام شد. با رفتن به صفحه ی اموال من از طریق دکمه ی
          بالا و سمت راست صفحه، می توانید وضعیت درخواست های خود را ببینید
        </Text>
        <Button info style={styles.modalButton} onPress={this.toggleModal}>
          <Text style={styles.modalButtonText}>باشه</Text>
        </Button>
      </View>
    );
  };

  onValueChange = (value) => {
    this.setState({
      selectedCategory: value,
    });
  };

  formDictData = (data) => {
    this.data_dict["همه"] = [...data];
    data.forEach((element) => {
      if (element.kind in this.data_dict) {
        this.data_dict[element.kind].push(element);
      } else {
        this.data_dict[element.kind] = [];
        this.data_dict[element.kind].push(element);
      }
    });
  };

  componentDidMount() {
    requestProperties(this.props.token)
      .then((res) => {
        this.formDictData(res.data);
        this.setState({ data: res.data });
      })
      .catch((err) => console.warn(err));
  }

  getLabelText = (key) => {
    switch (key) {
      case "Backpack":
        return "کوله";
      case "SleepBag":
        return "کیسه خواب";
      case "Jacket":
        return "کاپشن";
      default:
        return "همه";
    }
  };

  render() {
    return (
      <Container>
        <ImageBackground
          source={require("../../assets/img/backgrounds/home.png")}
          style={styles.backgroundImageStyle}
        >
          <Modal
            isVisible={this.state.isModalVisible}
            onBackdropPress={this.toggleModal}
          >
            {this.renderModal()}
          </Modal>
          <View style={styles.picker}>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              textStyle={{ color: "#5cb85c", fontFamily: "IRANSans" }}
              itemStyle={{
                backgroundColor: "#d3d3d3",
                marginLeft: 0,
                paddingLeft: 10,
              }}
              itemTextStyle={{ color: "#788ad2", fontFamily: "IRANSans" }}
              style={{ fontFamily: "IRANSans" }}
              selectedValue={this.state.selectedCategory}
              onValueChange={this.onValueChange}
              placeholderStyle={{ fontFamily: "IRANSans" }}
            >
              {Object.keys(this.data_dict).map((key) => {
                return (
                  <Picker.Item label={this.getLabelText(key)} value={key} />
                );
              })}
            </Picker>
          </View>

          <View style={styles.itemslist}>
            <ItemsList
              toggleModal={this.toggleModal}
              token={this.props.token}
              data={this.data_dict[this.state.selectedCategory]}
            />
          </View>
        </ImageBackground>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImageStyle: {
    backgroundColor: "transparent",
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
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

  picker: {
    width: undefined,
    justifyContent: "space-between",
    flex: 1,
    backgroundColor: "#00000022",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    marginTop: 5,
  },

  itemslist: {
    flex: 15,
  },
});

const mapStateToProps = (state) => ({
  token: state.loginReducer.token,
});

export default connect(mapStateToProps, null)(PropertiesScreen);
