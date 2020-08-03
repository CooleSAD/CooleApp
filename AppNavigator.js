import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator} from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { connect } from "react-redux";
import { View, Text, Button, Icon } from "native-base";

import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignUpScreen";
import HomeScreen from "./src/screens/HomeScreen";
import EventScreen from "./src/screens/EventScreen";
import ProfileScreen from "./src/screens/ProfileScreen"
import EditProfileScreen from "./src/screens/EditProfileScreen"
import MyEventsScreen from "./src/screens/MyEventsScreen"

import CustomDrawer from "./src/components/global/customDrawer";
import Assets from "./src/screens/Assets";


const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
};

const HomeNavigator = ({navigatedEventTitle}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={({ route, navigation }) => ({
          title: "کوله",
          headerTitleStyle: { fontFamily: "IRANSans_bold" },
          headerTitleAlign: "center",
          headerLeft: () => (
            <Button onPress={() => navigation.toggleDrawer()} dark transparent>
              <Icon name="menu" />
            </Button>
          ),
        })}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{
          title: navigatedEventTitle,
          headerTitleStyle: { fontFamily: "IRANSans_bold" },
          headerTitleAlign: "center",
        }}
        name="Event"
        component={EventScreen}
      />
    </Stack.Navigator>
  );
};

const mapStateToHomeNavProps = state => ({
  navigatedEventTitle : state.homeReducer.navigatedEvent
})

const connectedHomeNavigater = connect(mapStateToHomeNavProps, null)(HomeNavigator)

const ProfileNavigator = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen
        options={({ route, navigation }) => ({
          title: "پروفایل من",
          headerTitleStyle: { fontFamily: "IRANSans_bold" },
          headerTitleAlign: "center",
          headerLeft: () => (
            <Button onPress={() => navigation.toggleDrawer()} dark transparent>
              <Icon name="menu" />
            </Button>
          ),
        })}
        name="Profile"
        component={ProfileScreen}
      />
      <Stack.Screen
        options={{
          title: "ویرایش پروفایل",
          headerTitleStyle: { fontFamily: "IRANSans_bold" },
          headerTitleAlign: "center",
        }}
        name="EditProfile"
        component={EditProfileScreen}
      />
    </Stack.Navigator>
  )
}

const MyEventsNavigator = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen
        options={({ route, navigation }) => ({
          title: "رویداد های من",
          headerTitleStyle: { fontFamily: "IRANSans_bold" },
          headerTitleAlign: "center",
          headerLeft: () => (
            <Button onPress={() => navigation.toggleDrawer()} dark transparent>
              <Icon name="menu" />
            </Button>
          ),
        })}
        name="Profile"
        component={MyEventsScreen}
      />
    </Stack.Navigator>
  )
}

const AssetsNavigator = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen
        options={({ route, navigation }) => ({
          title: "اموال",
          headerTitleStyle: { fontFamily: "IRANSans_bold" },
          headerTitleAlign: "center",
          headerLeft: () => (
            <Button onPress={() => navigation.toggleDrawer()} dark transparent>
              <Icon name="menu" />
            </Button>
          ),
        })}
        name="Profile"
        component={Assets}
      />
    </Stack.Navigator>
  )
}

const Drawer = createDrawerNavigator();

const MainNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      initialRouteName="Home"
    >
      <Drawer.Screen
        options={{
          title: "صفحه اصلی",
        }}
        name="HomeNav"
        component={connectedHomeNavigater}
      />
      <Drawer.Screen
        options={{
          title: "پروفایل من",
        }}
        name="ProfileNav"
        component={ProfileNavigator}
      />
      <Drawer.Screen
        options={{
          title: "رویداد‌‌ های من",
        }}
        name="MyEvents"
        component={MyEventsNavigator}
      />
      <Drawer.Screen
        options={{
          title: "اموال",
        }}
        name="Properties" 
        component={AssetsNavigator}
      />
      <Drawer.Screen
        options={{
          title: "نیازمندی ها",
        }}
        name="Needs"
        component={HomeScreen}
      />
    </Drawer.Navigator>
  );
};

const AppNavigator = ({ token }) => {
  let isAuthenticated = token !== "";
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isAuthenticated ? (
          <Stack.Screen
            options={{ headerShown: false }}
            name="MainNavigator"
            component={MainNavigator}
          />
        ) : (
          <Stack.Screen
            options={{ headerShown: false }}
            name="AuthNavigator"
            component={AuthNavigator}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => ({
  token: state.loginReducer.token,
});

export default connect(mapStateToProps, null)(AppNavigator);
