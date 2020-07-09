import React, { Component } from "react";
import {
  Container,
  Content,
  Form,
  Text,
  Footer,
  View,
  Toast,
} from "native-base";
import { StyleSheet, Dimensions, ImageBackground } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import validator from "validator";

import TextInput from "../components/login/TextInput";
import Button from "../components/login/Button";
import { requestSignup } from "../utils/requests/signup";

//todo: blur footer

export default class SignupScreen extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
      email: "",
      showToast: false,
    };
  }

  goToLoginScreen = () => {
    const { navigation } = this.props;
    navigation.navigate("Login");
  };

  onChangeField = (value, field) => {
    this.setState({ [field]: value });
  };

  isEmailValid = () => {
    const { email } = this.state;
    return validator.isEmail(email) || email.length == 0;
  };

  isPasswordValid = () => {
    const { password } = this.state;
    return (
      (validator.matches(password, "^(?=.*[a-zA-Z])(?=.*[0-9])") &&
        validator.isAscii(password) &&
        password.length >= 6) ||
      password.length === 0
    ); //must contain numbers and letters, length > 6
  };
  isConfirmPasswordValid = () => {
    const { password, confirmPassword } = this.state;

    return (
      validator.equals(password, confirmPassword) ||
      confirmPassword.length === 0
    );
  };
  isValid = () => {
    const { password } = this.state;
    const { email } = this.state;

    return (
      this.isPasswordValid() &&
      this.isConfirmPasswordValid() &&
      this.isEmailValid() &&
      password.length > 0 &&
      email.length > 0
    );
  };

  signup = () => {
    const {
      email,
      firstName,
      lastName,
      password,
      confirmPassword,
    } = this.state;
    const { navigation } = this.props;
    let data = {
      email: email,
      firstname: firstName,
      lastname: lastName,
      password: password,
      re_password: confirmPassword,
    };
    requestSignup(data)
      .then((res) => {
        navigation.navigate("Login", { hasSignedUp : true });
      })
      .catch((err) => {
        this.showErrorToast();
      });
  };

  showErrorToast = () => {
    Toast.show({
      text: "این ایمیل قبلا در سیستم ثبت شده است!",
      duration: 3000,
      buttonText: "باشه",
      type: "danger",
      textStyle: { fontFamily: "IRANSans", textAlign: "center" },
      buttonStyle: { display: "none" },
    });
  }

  render() {
    return (
      <KeyboardAwareScrollView
        style={styles.keyboardaware}
        keyboardShouldPersistTaps="handled"
      >
        <Container style={styles.container}>
          <ImageBackground
            source={require("../../assets/img/backgrounds/signup.png")}
            style={styles.backgroundImageStyle}
          >
            <Content contentContainerStyle={styles.content}>
              <Container style={styles.titleContainer}>
                <Text
                  style={{
                    fontFamily: "IRANSans_bold",
                    fontSize: 28,
                    color: "#d9d9d9",
                  }}
                >
                  {"ثبت نام کنید!"}
                </Text>
              </Container>
              <Container style={styles.fieldsContainer}>
                <Form>
                  <View style={styles.nameContainer}>
                    <TextInput
                      style={styles.nameField}
                      type="firstName"
                      onChangeText={this.onChangeField}
                      label="نام"
                      color="white"
                      value={this.state.firstName}
                    />
                    <TextInput
                      style={styles.nameField}
                      type="lastName"
                      onChangeText={this.onChangeField}
                      label="نام خانوادگی"
                      color="white"
                      value={this.state.lastName}
                    />
                  </View>
                  <TextInput
                    error={!this.isPasswordValid()}
                    type="password"
                    onChangeText={this.onChangeField}
                    password
                    label="گذرواژه"
                    color="white"
                    value={this.state.password}
                  />
                  <TextInput
                    error={!this.isConfirmPasswordValid()}
                    type="confirmPassword"
                    onChangeText={this.onChangeField}
                    password
                    label="تکرار گذرواژه"
                    color="white"
                    value={this.state.confirmPassword}
                  />
                  <TextInput
                    error={!this.isEmailValid()}
                    type="email"
                    onChangeText={this.onChangeField}
                    label="ایمیل"
                    color="white"
                    value={this.state.email}
                  />
                </Form>
              </Container>
              <Container style={styles.buttonContainer}>
                <Button
                  onPress={this.signup}
                  disabled={!this.isValid()}
                  textSize={28}
                  title="ثبت نام"
                />
              </Container>
            </Content>
            <Footer style={styles.footer}>
              <Button onPress={this.goToLoginScreen} title=" ورود" />
            </Footer>
          </ImageBackground>
        </Container>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  keyboardaware: {
    flex: 1,
    height: Dimensions.get("window").height,
    backgroundColor: "transparent",
  },
  container: {
    backgroundColor: "transparent",
    width: "100%",
    flex: 1,
    height: Dimensions.get("window").height,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    width: "80%",
    alignSelf: "center",
  },
  nameContainer: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  },
  nameField: {
    width: "45%",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent",
    // backgroundColor : 'red'
  },
  fieldsContainer: {
    flex: 2,
    backgroundColor: "transparent",
    // backgroundColor : 'green'
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    // backgroundColor : 'yellow'
  },
  footer: {
    alignItems: "center",
    backgroundColor: "transparent",
  },

  backgroundImageStyle: {
    backgroundColor: "transparent",
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
});
