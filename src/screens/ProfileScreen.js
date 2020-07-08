import React, { Component } from "react";
import { View, Container, Thumbnail, Text, Button } from "native-base";

import ListItems from "../components/profile/ListItems";
import { StyleSheet } from "react-native";

class ProfileScreen extends Component {
  render() {
    return (
      <Container style={{ flex: 2 }}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Thumbnail
            large
            source={require("../../assets/img/icons/user_icon.png")}
          />
          <Text
            style={{ fontSize: 14, marginTop: 8, fontFamily: "IRANSans_bold" }}
          >
            admin@admin.com
          </Text>
        </View>
        <View style={{ flex: 2 }}>
          <ListItems />
        </View>
        <View style={{ flex: 0.5 }}>
          <View style={styles.buttonContainer}>
            <Button style={styles.button} info>
              <Text style={styles.buttonText}>تکمیل پروفایل</Text>
            </Button>
          </View>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    justifyContent:'center'
  },
  buttonText: {
    fontSize: 16,
    fontFamily: "IRANSans_bold",
  },
  buttonContainer : {
    width: "40%",
    alignSelf:'center'
  }
});

export default ProfileScreen;
