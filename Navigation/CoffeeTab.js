import { Icon } from "native-base";
import React from "react";

import { createStackNavigator, createAppContainer } from "react-navigation";

import CoffeeShopList from "../Components/CoffeeList";
import CoffeeShopDetail from "../Components/CoffeeDetail";

const CoffeeShopTab = createStackNavigator(
  {
    CoffeeShopList: CoffeeShopList,
    CoffeeShopDetail: CoffeeShopDetail
  },
  {
    initialRouteName: "CoffeeShopList",
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

export default CoffeeShopTab;
