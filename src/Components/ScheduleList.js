import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Tab, Tabs, List, ListItem  } from 'native-base';

import Row from './Row.js';
import SeparatorRow from './SeparatorRow.js';
import {dia1} from '../data.js';

export default class ScheduleList extends React.PureComponent {

  render() {
    
    return (
     <Container>
        <Content>
            <List>
                {dia1.map((item, index) => 
                    item.type === 'separator' ? 
                        <SeparatorRow key={index} item={item} /> : 
                        <Row key={index} item={item} nav={this.props.nav} />
                )}
            </List>
        </Content>
    </Container>
    );
  }
}

