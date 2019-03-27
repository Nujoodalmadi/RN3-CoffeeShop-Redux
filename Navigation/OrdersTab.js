import { Icon } from "native-base";
import React from "react";

import { createStackNavigator } from "react-navigation";

import Cart from "../Components/CoffeeCart";
import OrderHistory from "../Components/OrderHistory";

const OrdersTab = createStackNavigator(
  {
    Cart: Cart,
    OrderHistory: OrderHistory
  },
  {
    initialRouteName: "Cart",
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

export default OrdersTab;
