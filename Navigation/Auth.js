import { Icon } from "native-base";
import React from "react";

import { createStackNavigator } from "react-navigation";

import Profile from "../Components/Profile";
import Login from "../Components/Login/index";

const AuthStack = createStackNavigator(
  {
    Login: Login,
    Profile: Profile
  },
  {
    initialRouteName: "Login",
    cardStyle: {
      backgroundColor: "rgb(20,90,100)"
    },
    defaultNavigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#rgb(20,90,100)"
      },
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

export default AuthStack;
