import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreator from "../../store/actions/cartActions";

// NativeBase Components
import { Text, List, Button } from "native-base";
// Component

import CartItem from "./CartItem";

class CoffeeCart extends Component {
  render() {
    let items = this.props.items;
    let cartItems;
    if (items) {
      cartItems = items.map((item, index) => (
        <CartItem item={item} key={index} />
      ));
    }

    return (
      <List>
        {cartItems}

        <Button onPress={() => this.props.checkoutCart()} full danger>
          <Text>Checkout</Text>
        </Button>

        <Button full danger>
          <Text onPress={() => this.props.navigation.navigate("OrderHistory")}>
            Orders History
          </Text>
        </Button>
      </List>
    );
  }
}

const mapStateToProps = state => ({
  items: state.cartReducer.items
});

const mapDispatchToProps = dispatch => {
  return {
    checkoutCart: () => dispatch(actionCreator.checkoutCart())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoffeeCart);
