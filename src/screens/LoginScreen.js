import React, { Component } from "react";
import { Container, Content, Form, Text, Footer, Toast } from "native-base";
import { StyleSheet, ImageBackground, Dimensions } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import TextInput from "../components/login/TextInput";
import Button from "../components/login/Button";
import { requestLogin } from "../utils/requests/login";

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      showToast: false,
      hasSignedUp : false
    };
  }

  // componentDidUpdate() {
  //   const { route } = this.props;
  //   const { hasSignedUp } = route.params;
  //   if (hasSignedUp) {
  //     Toast.show({
  //       text: "ثبت نام با موفقیت انجام شد لطفا وارد شوید",
  //       duration: 3000,
  //       buttonText: "باشه",
  //       type: "success",
  //       textStyle: { fontFamily: "IRANSans", textAlign: "center" },
  //       buttonStyle: { display: "none" },
  //     });
  //   }
  // }


  onChangeField = (value, field) => {
    this.setState({ [field]: value });
  };

  goToSignupScreen = () => {
    const { navigation } = this.props;
    navigation.navigate("Signup");
  };

  login = () => {
    const { email, password } = this.state;
    let data = { email, password };
    const { navigation } = this.props;

    requestLogin(data)
      .then((res) => {
        console.warn("success");
      })
      .catch((err) => this.showErrorToast());
  };

  showErrorToast = () => {
    Toast.show({
      text: "اطلاعات وارد شده معتبر نمی باشد!",
      duration: 3000,
      buttonText: "باشه",
      type: "danger",
      textStyle: { fontFamily: "IRANSans", textAlign: "center" },
      buttonStyle: { display: "none" },
    });
  };

  render() {
    return (
      <KeyboardAwareScrollView
        style={styles.keyboardaware}
        keyboardShouldPersistTaps="handled"
      >
        <Container style={styles.container}>
          <ImageBackground
            source={require("../../assets/img/backgrounds/login.png")}
            style={styles.backgroundImageStyle}
          >
            <Content contentContainerStyle={styles.content}>
              <Container style={styles.titleContainer}>
                <Text
                  style={{
                    fontFamily: "IRANSans_bold",
                    fontSize: 28,
                    paddingTop: 90,
                    color: "#d9d9d9",
                  }}
                >
                  {"خوش آمدید!"}
                </Text>
              </Container>
              <Container style={styles.fieldsContainer}>
                <Form>
                  <TextInput
                    onChangeText={this.onChangeField}
                    type="email"
                    label="ایمیل"
                  />
                  <TextInput
                    onChangeText={this.onChangeField}
                    type="password"
                    label="گذرواژه"
                  />
                </Form>
              </Container>
              <Container style={styles.buttonContainer}>
                <Button onPress={this.login} textSize={28} title="ورود" />
              </Container>
            </Content>
            <Footer style={styles.footer}>
              <Button onPress={this.goToSignupScreen} title="ثبت نام" />
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
    backgroundColor: "#ffffff",
  },
  container: {
    backgroundColor: "#ffffff",
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
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  fieldsContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
  },
  footer: {
    alignItems: "center",
    backgroundColor: "#ffffff",
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
