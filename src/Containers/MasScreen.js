import React from 'react';
import {} from 'react-native';
import {Container, Text, Content, List, ListItem, Left, Body, Right, Thumbnail } from 'native-base';
import Expo from 'expo';
import { Header } from '../Components/custom-components';
import { gold, blue, skyblue, gray, white } from '../colors.js';
import styled from 'styled-components/native';

const data = [];

export default class MasScreen extends React.Component {
    
     watchDetails = () => {
        //this.props.navigation.navigate('speaker_details')
    }

  render() {
    return (
        <Container>
                <Content>
                    <ListItem avatar >
                       
                        <Body>
                            <Text>Abut</Text>
                        </Body>
                        
                    </ListItem>
                    <ListItem avatar >
                       
                        <Body>
                            <Text>Sponsors</Text>
                        </Body>
                        
                    </ListItem>
                    <ListItem avatar >
                       
                        <Body>
                            <Text>About App</Text>
                        </Body>
                        
                    </ListItem>
                    <ListItem avatar >
                       
                        <Body>
                            <Text>Pagina web Aspecive</Text>
                        </Body>
                        
                    </ListItem>
                    <ListItem avatar >
                       
                        <Body>
                            <Text>Mapa</Text>
                        </Body>
                        
                    </ListItem>
                    <ListItem avatar >
                       
                        <Body>
                            <Text>Preguntas frecuentes</Text>
                        </Body>
                        
                    </ListItem>
                    <ListItem avatar >
                       
                        <Body>
                            <Text> otros...</Text>
                        </Body>
                        
                    </ListItem>
                </Content>
            </Container>
    );
  }
}
