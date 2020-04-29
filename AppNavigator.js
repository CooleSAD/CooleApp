import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignUpScreen";
import HomeScreen from "./src/screens/HomeScreen";
import { View } from "native-base";

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
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        options={{ 
          title: "کوله"}}
        name="Home"
        component={HomeScreen}
      />
    </Drawer.Navigator>
  );
};

const AppNavigator = () => {
  let isAuthenticated = true;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isAuthenticated ? (
          <Stack.Screen
            options={{
              title: "کوله",
              headerTitleStyle: { fontFamily: "IRANSans_bold"},
              headerTitleAlign : 'center'
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

export default AppNavigator;
