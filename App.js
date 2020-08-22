import React, { Component } from "react";
import { AppLoading, Notifications } from "expo";
import { Container, Root } from "native-base";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import { Platform } from "react-native";

import AppNavigator from "./AppNavigator";
import cooleApp from "./src/redux/reducers/index";


// Notifications.setNotificationHandler({
//   handleNotification: async () => ({
//     shouldShowAlert: true,
//     shouldPlaySound: false,
//     shouldSetBadge: false,
//   }),
// });

const store = createStore(cooleApp);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      notification : {}
    };
  }

  async componentDidMount() {
    registerForPushNotificationsAsync().then((token) => console.log(token));

    Notifications.addListener(this._handleNotification)

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

  _handleNotification = (notification) => {
    console.log(notification)
    this.setState({ notification: notification });
  };

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

async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = await Notifications.getExpoPushTokenAsync();
  } else {
    alert("Must use physical device for Push Notifications");
  }

  // if (Platform.OS === 'android') {
  //   Notifications.setNotificationChannelAsync('default', {
  //     name: 'default',
  //     importance: Notifications.AndroidImportance.MAX,
  //     vibrationPattern: [0, 250, 250, 250],
  //     lightColor: '#FF231F7C',
  //   });
  // }

  return token;
}
