import React, { Component } from "react";
import { Container, Text, View, Button, Picker, Icon } from "native-base";
import ItemsList from "../components/assets/ItemsList";
import { ImageBackground, StyleSheet } from "react-native";
import Modal from "react-native-modal";

export default class PropertiesScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCategory: "",
      isModalVisible: false,
    };
    this.DATA = [
      {
        id: "1",
        title: "کوله",
        type: "کوله",
        image_url: "../../../assets/img/samples/bag1.jpg",
        price: "18000",
      },
      {
        id: "2",
        title: "کوله",
        type: "کوله",
        image_url: "../../../assets/img/samples/bag2.jpg",
        price: "10000",
      },
      {
        id: "3",
        title: "کوله",
        type: "کوله",
        image_url: "../../../assets/img/samples/bag.jpg",
        price: "25000",
      },
      {
        id: "4",
        title: "کوله",
        type: "کوله",
        image_url: "../../../assets/img/samples/stick.jpg",
        price: "30000",
      },
    ];
    this.DATA_DICT = { همه: this.DATA };
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

  onValueChange(value) {
    this.setState({
      selectedCategory: value,
    });
  }

  onMountData() {
    for (var d in this.DATA) {
      if (d.type in this.DATA_DICT) {
        this.DATA_DICT[d.type].push(d);
      } else {
        this.DATA_DICT[d.type] = [d];
      }
    }
  }

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
              placeholder="Select your SIM"
              iosIcon={<Icon name="arrow-down" />}
              placeholder="Select your SIM"
              textStyle={{ color: "#5cb85c" }}
              itemStyle={{
                backgroundColor: "#d3d3d3",
                marginLeft: 0,
                paddingLeft: 10,
              }}
              itemTextStyle={{ color: "#788ad2" }}
              style={{ width: undefined }}
              selectedValue={this.state.selectedCategory}
              onValueChange={this.onValueChange.bind(this)}
            >
              {Object.keys(this.DATA_DICT).map((key) => {
                return <Picker.Item label={key} value={key} />;
              })}
            </Picker>
          </View>

          <View style={styles.itemslist}>
            <ItemsList
              toggleModal={this.toggleModal}
              data={this.DATA_DICT[this.state.selectedCategory]}
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
