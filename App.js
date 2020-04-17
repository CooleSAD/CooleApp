import React, { Component } from "react";
import { AppLoading } from 'expo';
import { Container, Text, Header } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import {I18nManager} from 'react-native'

import LoginScreen from './src/screens/LoginScreen'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    });
    await Font.loadAsync({
      IRANSans : require('./assets/fonts/IRANSansMobile.ttf'),
      IRANSans_bold : require('./assets/fonts/IRANSansMobile_Bold.ttf'),
      IRANSans_medium : require('./assets/fonts/IRANSansMobile_Medium.ttf'),
    })
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Container>
        <LoginScreen/>
      </Container>
    );
  }
}
