import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Text,
  Footer,
  View
} from "native-base";
import { StyleSheet, Dimensions } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import validator from 'validator';
import axios from 'axios';

import TextInput from "../components/login/TextInput";
import Button from "../components/login/Button";

export default class SignupScreen extends Component {


  constructor() {
    super()
    this.state = {
      firstName : "",
      lastName : "",
      password : "",
      confirmPassword : "",
      email : "" 
    }
  }


  goToLoginScreen = () => {
    const {navigation} = this.props
    navigation.navigate('Login')
  }


  onChangeField = (value, field) => {
    this.setState({[field] : value})
  }

  checkEmail = () => {
    const {email} = this.state
    return validator.isEmail(email) || email.length == 0
  }

  //todo check password, check confirm password error


  //todo
  // isValid = () => {

  // }


  //

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
                <View style={styles.nameContainer}>
                  <TextInput style={styles.nameField} type='firstName' onChangeText={this.onChangeField} label="نام" />  
                  <TextInput style={styles.nameField} type='lastName' onChangeText={this.onChangeField} label="نام خانوادگی" />
                </View>
                <TextInput type='password' onChangeText={this.onChangeField} password label="گذرواژه" />
                <TextInput type='confirmPassword' onChangeText={this.onChangeField} password label="تکرار گذرواژه" />
                <TextInput error={!this.checkEmail()} type='email' onChangeText={this.onChangeField} label="ایمیل" />
              </Form>
            </Container>
            <Container style={styles.buttonContainer}>
              <Button onPress={this.signup} disabled={false} textSize={28} title="ثبت نام" />
            </Container>
          </Content>
          <Footer style={styles.footer}>
            <Button /*onPress={this.goToLoginScreen}*/ title=" ورود" />
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
  nameContainer : {
    flexDirection : 'row-reverse',
    justifyContent : 'space-between'
  }, 
  nameField : {
    width : '45%'
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
