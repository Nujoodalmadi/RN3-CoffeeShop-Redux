import React, { Component } from "react";
import {
  Content,
  Left,
  Text,
  Container,
  List,
  ListItem,
  Header,
  Right,
  Icon
} from "native-base";

class OrderHistory extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <List>
            <ListItem selected>
              <Left>
                <Text>Starbucks </Text>
                <Text note>Wed/27/2070</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

export default OrderHistory;
