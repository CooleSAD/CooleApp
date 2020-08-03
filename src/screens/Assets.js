import React, {Component} from 'react'
import { Container, Text } from 'native-base';
import ItemsList from '../components/assets/ItemsList'
import { ImageBackground, StyleSheet} from "react-native";

export default class Assets extends Component {
    render() {
        return(
            <Container>
                <ImageBackground
                    source={require("../../assets/img/backgrounds/home.png")}
                    style={styles.backgroundImageStyle}
                >
                    <ItemsList/>

                </ImageBackground>
                
            </Container>
        )
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