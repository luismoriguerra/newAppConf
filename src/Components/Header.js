import React from 'react';
import {} from 'react-native';
import {Container, Text, Header, Left, Button, Icon, Body, Title, Right } from 'native-base';
import styled from 'styled-components';

export default class HeaderSection extends React.Component {

  render() {
    return (
     <Header>
       
        <Body style={{flex: 1, justifyContent: 'center'}}>
            <Title>III Congreso Cirugia Vertebral 2017</Title>
        </Body>
        
     </Header>
    );
  }
}
