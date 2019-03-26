import React, { Component } from "react";
import { connect } from "react-redux";
// NativeBase Components
import { List, Content, Spinner, Button, Icon } from "native-base";

// Store
import coffeeshops from "./list";

// Component
import CoffeeItem from "./CoffeeItem";

class CoffeeList extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Coffee List",
      headerLeft: null,
      headerRight: (
        <Icon
          name="shopping-cart"
          type="FontAwesome"
          color="white"
          onPress={() => navigation.navigate("Cart")}
        />
      )
    };
  };
  render() {
    const { coffeeShops, loading } = this.props.coffeeReducer;
    let shops;

    if (loading) {
      return <Spinner />;
    }
    shops = coffeeShops.map(coffeeShop => (
      <CoffeeItem coffeeShop={coffeeShop} key={coffeeShop.id} />
    ));

    return (
      <Content>
        <List>{shops}</List>
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  coffeeReducer: state.coffeeReducer
});

export default connect(mapStateToProps)(CoffeeList);
