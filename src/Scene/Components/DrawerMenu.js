import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux'
import { Image } from "react-native";
import { Container, Content, List, ListItem, Text } from 'native-base';

export default class DrawerMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <Container>
            <Content>
                <List>
                    <ListItem
                        button
                        onPress={() => Actions.home()}>
                        <Text>HOME</Text>
                    </ListItem>
                    <ListItem
                        button
                        onPress={() => Actions.Analyze()}>
                        <Text>ANALYZE MY BILL</Text>
                    </ListItem>
                    <ListItem
                        button
                        onPress={() => Actions.promotion()}>
                        <Text>LIVE CHAT (PRO)</Text>
                    </ListItem>
                    <ListItem
                        button
                        onPress={() => Actions.ReportHistory()}>
                        <Text>REPORT HISTORY (PRO)</Text>
                    </ListItem>
                </List>
            </Content>
        </Container>
    );
  }
}
