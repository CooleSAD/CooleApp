import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { connect } from "react-redux";

import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignUpScreen";
import HomeScreen from "./src/screens/HomeScreen";
import { View } from "native-base";
import CustomDrawer from "./src/components/global/customDrawer";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
};

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
        name="Home"
        component={HomeScreen}
      />
      <Drawer.Screen
        options={{
          title: "رویداد‌‌ های من",
        }}
        name="MyEvents"
        component={HomeScreen}
      />
      <Drawer.Screen
        options={{
          title: "اموال",
        }}
        name="Properties"
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
            options={{
              title: "کوله",
              headerTitleStyle: { fontFamily: "IRANSans_bold" },
              headerTitleAlign: "center",
            }}
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
