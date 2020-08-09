import React, { Component } from "react";
import { AppLoading } from "expo";
import { Container, Root } from "native-base";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import Constnants from "expo-constants";
import { createStore } from "redux";
import { Provider } from "react-redux";

import AppNavigator from "./AppNavigator";
import cooleApp from "./src/redux/reducers/index";
import HomeScreen from './src/screens/HomeScreen';

const store = createStore(cooleApp);

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
      IRANSans: require("./assets/fonts/IRANSansMobile.ttf"),
      IRANSans_bold: require("./assets/fonts/IRANSansMobile_Bold.ttf"),
      IRANSans_medium: require("./assets/fonts/IRANSansMobile_Medium.ttf"),
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (

      
      <Provider store={store}>
        <Container>
          <Root>
            <AppNavigator />
          </Root>
        </Container>
      </Provider>
      
    );
  }
}
