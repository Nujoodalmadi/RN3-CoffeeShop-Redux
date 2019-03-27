import React from "react";
import { createBottomTabNavigator } from "react-navigation";
import { Icon } from "native-base";

import CoffeeTab from "./CoffeeTab";
import OrdersTab from "./OrdersTab";
import ProfileTab from "./Auth";

const BottomNav = createBottomTabNavigator(
  {
    Profile: ProfileTab,
    CoffeeShops: CoffeeTab,
    Orders: OrdersTab
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName = "";
        let iconType = "";
        if (routeName === "Profile") {
          iconName = "home";
          iconType = "AntDesign";
        } else if (routeName === "CoffeeShops") {
          iconName = "cup";
          iconType = "SimpleLineIcons";
        } else if (routeName === "Orders") {
          iconName = "shopping-cart";
          iconType = "Feather";
        }
        return (
          <Icon
            name={iconName}
            type={iconType}
            style={{ color: tintColor, fontSize: 25 }}
          />
        );
      }
    }),
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "#b8cdd0",
      inactiveTintColor: "white",

      style: {
        backgroundColor: "#rgb(20,90,100)"
      }
    }
  }
);

export default BottomNav;
