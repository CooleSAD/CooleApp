import React, { Component } from "react";
import { Container, Text, View, Button } from "native-base";
import ItemsList from "../components/assets/ItemsList";
import { ImageBackground, StyleSheet } from "react-native";
import Modal from "react-native-modal";

export default class PropertiesScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCategory: "",
      isModalVisible : false
    };
    this.DATA = [
      {
        id: "1",
        title: "کوله",
        image_url: "../../../assets/img/samples/bag1.jpg",
        price: "18000",
      },
      {
        id: "2",
        title: "کوله",
        image_url: "../../../assets/img/samples/bag2.jpg",
        price: "10000",
      },
      {
        id: "3",
        title: "کوله",
        image_url: "../../../assets/img/samples/bag.jpg",
        price: "25000",
      },
      {
        id: "4",
        title: "کوله",
        image_url: "../../../assets/img/samples/stick.jpg",
        price: "30000",
      },
    ];
  }

  toggleModal = () => {
    this.setState({isModalVisible : !this.state.isModalVisible})
  }

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

  render() {
    return (
      <Container>
        <ImageBackground
          source={require("../../assets/img/backgrounds/home.png")}
          style={styles.backgroundImageStyle}
        >
          <Modal isVisible={this.state.isModalVisible} onBackdropPress={this.toggleModal}>{this.renderModal()}</Modal>
          <ItemsList toggleModal={this.toggleModal} data={this.DATA} />
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
});
