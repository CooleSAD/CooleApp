import React, { Component } from "react";
import { View, Container, Thumbnail, Text, Button } from "native-base";
import { StyleSheet } from "react-native";
import { connect } from 'react-redux';

import ListItems from "../components/profile/ListItems";


class ProfileScreen extends Component {
  render() {
    const {data, navigation} = this.props
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
            {data.user}
          </Text>
        </View>
        <View style={{ flex: 2 }}>
          <ListItems data={data}/>
        </View>
        <View style={{ flex: 0.5 }}>
          <View style={styles.buttonContainer}>
            <Button onPress={() => navigation.navigate("EditProfile")} style={styles.button} info>
              <Text style={styles.buttonText}>{data.is_completed ? "ویرایش پروفایل" : "تکمیل پروفایل"}</Text>
            </Button>
          </View>
        </View>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  data : state.profileReducer.data
})

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

export default connect(mapStateToProps, null)(ProfileScreen);
