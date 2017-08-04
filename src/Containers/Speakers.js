import React from 'react';
import { View } from 'react-native';
import { Container, Text, Content, ListItem, Left, Body, Right, Thumbnail, Card, CardItem } from 'native-base';
import Expo from 'expo';

import { Header } from '../Components/custom-components';
import { gold, blue, skyblue, gray, white } from '../colors.js';
import styled from 'styled-components/native';

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


const ContentWrapper = styled(View)`
    flex-direction: row;
`;

const GroupRight = styled.View`
    margin-left: 20px;
    width: 80%;
`;

const CardWrap = styled(Card)`
    margin-top: 10px;
    margin-left: 20px;
    margin-right: 20px;
`;


const Speaker = (props) => {
    return (
        <CardWrap>
            <CardItem>
                <ContentWrapper>
                    <Thumbnail source={props.image} />
                    <GroupRight>
                        <Text>{props.name}</Text>
                        <Text note>{props.subtitle}</Text>
                    </GroupRight>
                </ContentWrapper>


            </CardItem>

        </CardWrap>
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
