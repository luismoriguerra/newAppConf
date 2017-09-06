import React from 'react';
import { View, Text, Dimensions, TouchableWithoutFeedback, Linking } from 'react-native';

import { Container, Content, List, ListItem, Left, Body, Right, Thumbnail } from 'native-base';
import Expo from 'expo';
import { Header } from '../../Components/custom-components';
import { gold, blue, skyblue, gray, white } from '../../colors.js';
import styled from 'styled-components/native';
const { width, height } = Dimensions.get('window');

const data = [
    {
        text: 'Posters Electronicos',
        route: 'Posters'
    },
    {
        text: 'Mapa del congreso',
        link: 'http://aspecive.com/sites/default/files/mapa-fractal.jpeg'
    },
    {
        text: 'Lima, Perú',
        route: 'Ciudad'
    },
    {
        text: 'Hotel Country Club',
        route: 'Hotel'
    },
    
    {
        text: 'Junta Directiva',
        route: 'Junta'
    },
    {
        text: 'Acerca de Aspecive',
        route: 'Acerca'
    },
   
    {
        text: 'Acerca de AOSpine',
        route: 'Aospine'
    },
    
  

];

const RowContainer = styled(View) `
   
    padding: 30px;
    alignItems: center;
    borderBottomColor: #CCC;
    borderBottomWidth: 1px;
    
`;

const RowText = styled(Text) `
    font-size: 20px;
`;


const Row = ({ text, route, goTo, link }) => {
    const config = {
        type: link ? 'link' : 'route',
        path: link ? link : route
    }

    return (
        <TouchableWithoutFeedback onPress={() => goTo(config)}>
            <RowContainer >
                <RowText >{text}</RowText>
            </RowContainer>
        </TouchableWithoutFeedback>

    )
}

export default class MasScreen extends React.PureComponent {

    goTo = (config) => {
        switch (config.type) {
            case 'link':
                Linking.openURL(config.path);
                break;
            case 'route': 
                this.props.navigation.navigate(config.path)
                break;
            default:
                break;
        }
        
    }

    render() {
        return (
            <Container>
                <Header title="Más Opciones" />
                <Content>
                    {data.map((item, index) => <Row key={index} {...item} goTo={this.goTo} />)}
                </Content>
            </Container>
        );
    }
}
