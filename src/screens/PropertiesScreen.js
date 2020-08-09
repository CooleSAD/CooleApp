import React, { Component } from "react";
import { Container, Text } from "native-base";
import ItemsList from "../components/assets/ItemsList";
import { ImageBackground, StyleSheet } from "react-native";

export default class PropertiesScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCategory : ""
    }
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
    this.DATA_DICT = {}

  }
  

  render() {
    return (
      <Container>
        <ImageBackground
          source={require("../../assets/img/backgrounds/home.png")}
          style={styles.backgroundImageStyle}
        >
          <Button />
          <ItemsList data={this.DATA}/>
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
});
