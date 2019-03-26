import { createStackNavigator, createAppContainer } from "react-navigation";

import CoffeeCart from "../Components/CoffeeCart";
import CoffeeDetail from "../Components/CoffeeDetail";
import CoffeeList from "../Components/CoffeeList";
import HomePage from "../Components/HomePage";
import LoginPage from "../Components/Login";

// two objects as parameters
const navStack = createStackNavigator(
  {
    List: CoffeeList,
    CoffeeShopDetail: CoffeeDetail,
    Cart: CoffeeCart,
    Login: LoginPage
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "rgb(20,90,100)"
      },
      headerTextStyle: {
        fontWeight: "bold"
      }
    },
    cardStyle: {
      backgroundColor: "rgb(20,90,100)"
    }
  }
);

const AppContainer = createAppContainer(navStack);
export default AppContainer;
