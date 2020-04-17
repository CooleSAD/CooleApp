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
import { StyleSheet, ImageBackground } from "react-native";

import TextInput from "../components/login/TextInput";
import Button from "../components/login/Button";

export default class LoginScreen extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content contentContainerStyle={styles.content}>
          <Container style={styles.titleContainer}>
            <Text style={{ fontFamily: "IRANSans_bold", fontSize: 28, paddingTop: 90}}>
              {"خوش آمدین!"}
            </Text>
          </Container>
          <Container style={styles.fieldsContainer}>
            <Form>
              <TextInput label="ایمیل" />
              <TextInput label="گذرواژه" />
            </Form>
          </Container>
          <Container style={styles.buttonContainer}>
            <Button textSize={28} title="ورود" />
            <Text>{"ورود به حساب!"}</Text>
            
          </Container>
        </Content>
        <Footer style={styles.footer}>
          <Button title="ثبت نام" />
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    width: "100%",
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
  },
  fieldsContainer: {
    flex: 1,
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
  },
  footer: {
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
});
