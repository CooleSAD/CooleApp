import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Text,
  Footer,
} from "native-base";
import { StyleSheet, Dimensions } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import TextInput from "../components/login/TextInput";
import Button from "../components/login/Button";

export default class SignupScreen extends Component {

  goToLoginScreen = () => {
    const {navigation} = this.props
    navigation.navigate('Login')
  }

  render() {
    return (
      <KeyboardAwareScrollView style={styles.keyboardaware} keyboardShouldPersistTaps='handled'>
        <Container style={styles.container}>
          <Content contentContainerStyle={styles.content}>
            <Container style={styles.titleContainer}>
              <Text style={{ fontFamily: "IRANSans_bold", fontSize: 28 }}>
                {"ثبت نام کنید!"}
              </Text>
            </Container>
            <Container style={styles.fieldsContainer}>
              <Form>
                <TextInput label="نام و نام خانوادگی" />
                <TextInput password label="گذرواژه" />
                <TextInput password label="تکرار گذرواژه" />
                <TextInput label="ایمیل" />
              </Form>
            </Container>
            <Container style={styles.buttonContainer}>
              <Button textSize={28} title="ثبت نام" />
            </Container>
          </Content>
          <Footer style={styles.footer}>
            <Button onPress={this.goToLoginScreen} title=" ورود" />
          </Footer>
        </Container>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  keyboardaware : {
    flex : 1,
    height : Dimensions.get('window').height,
    backgroundColor : '#ffffff'
  },
  container: {
    backgroundColor: "#ffffff",
    width: "100%",
    flex : 1,
    height : Dimensions.get('window').height,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    width: "80%",
    alignSelf: "center",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    // backgroundColor : 'red'
  },
  fieldsContainer: {
    flex: 2,
    // backgroundColor : 'green'
  },
  buttonContainer: {
    flex: 1,
    // backgroundColor : 'yellow'
  },
  footer: {
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
});
