import React from 'react';
import { } from 'react-native';
import { Container, Text, Content, List, ListItem, Left, Body, Right, Thumbnail } from 'native-base';
import Expo from 'expo';
import { Header } from '../Components/custom-components';
import { gold, blue, skyblue, gray, white } from '../colors.js';

const SpeakersData = [
    {
        image: require('../img/speakers/cauti.jpg'),
        name: 'Dr. Daniel Cauti De la Cruz',
        subtitle: 'Cirujano Ortopedico - Subespecialidad en columna vertebral'
    },
    {
        image: require('../img/speakers/laos.jpg'),
        name: 'Dr. Eduardo J. Laos Plasier',
        subtitle: 'Medico Neurocirujano'
    },
    {
        image: require('../img/speakers/pascual.jpg'),
        name: 'Dr. Ronald Pascual Valverde.',
        subtitle: 'Medico Cirujano'
    },
]

const Speaker = (props) => {
    return (
        <ListItem avatar>
            <Left>
                <Thumbnail source={props.image} />
            </Left>
            <Body>
                <Text>{props.name}</Text>
                <Text note>{props.subtitle}</Text>
            </Body>
            <Right>
            </Right>
        </ListItem>
    )
}

export default class Speakers extends React.PureComponent {

    watchDetails = () => {
        this.props.navigation.navigate('speaker_details')
    };

    render() {

        return (
            <Container>
                <Content>
                    <Header title="Expositores"></Header>
                    {SpeakersData.map((item, index) => <Speaker key={index} {...item} />)}
                </Content>
            </Container>
        );
    }
}
