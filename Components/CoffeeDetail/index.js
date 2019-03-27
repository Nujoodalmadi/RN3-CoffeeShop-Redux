import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreator from "../../store/actions";

// NativeBase Components
import {
  Thumbnail,
  Text,
  Button,
  Left,
  Body,
  Right,
  List,
  ListItem,
  Picker,
  Content,
  Icon
} from "native-base";

// Style
import styles from "./styles";

//List
import coffeeshops from "../CoffeeList/list";
import cartReducer from "../../store/reducers/cartReducer";

class CoffeeDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("coffeeShop").name,

      headerRight: (
        <Button transparent>
          <Text style={{ color: "white", fontSize: 25 }}>
            {this.props.cartReducer.quantity}
            <Icon
              name="shopping-cart"
              type="Feather"
              color="white"
              onPress={() => navigation.navigate("Cart")}
            />
          </Text>
        </Button>
      )
    };
  };
  state = {
    drink: "Cappuccino",
    option: "Small",
    quantity: 1
  };

  changeDrink = value => {
    this.setState({
      drink: value
    });
  };

  changeOption = value => {
    this.setState({
      option: value
    });
  };

  render() {
    const { coffeeShops, loading } = this.props.coffeeReducer;
    const coffeeShop = this.props.navigation.getParam("coffeeShop");

    if (loading) return <Content />;
    // const coffeeshop = coffeeShops[0];
    return (
      <Content>
        <List>
          <ListItem style={styles.top}>
            <Left>
              <Text style={styles.text}>
                {coffeeShop.name + "\n"}
                <Text note>{coffeeShop.location}</Text>
              </Text>
            </Left>
            <Body />
            <Right>
              <Thumbnail bordered source={{ uri: coffeeShop.img }} />
            </Right>
          </ListItem>
          <ListItem style={{ borderBottomWidth: 0 }}>
            <Left>
              <Picker
                note
                mode="dropdown"
                style={{ width: 150 }}
                selectedValue={this.state.drink}
                onValueChange={this.changeDrink}
              >
                <Picker.Item label="Cappuccino" value="Cappuccino" />
                <Picker.Item label="Latte" value="Latte" />
                <Picker.Item label="Espresso" value="Espresso" />
              </Picker>
            </Left>
            <Body>
              <Picker
                note
                mode="dropdown"
                style={{ width: 150 }}
                selectedValue={this.state.option}
                onValueChange={this.changeOption}
              >
                <Picker.Item label="Small" value="Small" />
                <Picker.Item label="Medium" value="Medium" />
                <Picker.Item label="Large" value="Large" />
              </Picker>
            </Body>
          </ListItem>
          <Button onPress={() => this.props.addItem(this.state)} full danger>
            <Text>Add</Text>
          </Button>
        </List>
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  coffeeReducer: state.coffeeReducer,
  cartReducer: state.cartReducer
});

const mapDispatchToProps = dispatch => {
  return { addItem: item => dispatch(actionCreator.addItemToCart(item)) };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoffeeDetail);
