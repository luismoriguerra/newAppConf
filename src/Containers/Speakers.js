import React from 'react';
import { View, TouchableWithoutFeedback, Text, Image } from 'react-native';
import { Container, Content, Thumbnail } from 'native-base';
import Expo from 'expo';

import { Header } from '../Components/custom-components';
import { gold, blue, skyblue, gray, white } from '../colors.js';
import styled from 'styled-components/native';

const SpeakersData = [
    {
        image: require('../img/speakers/cauti.jpg'),
        shortname: 'Dr. Cauti',
        name: 'Dr. Daniel Cauti De la Cruz',
        subtitle: 'Cirujano Ortopedico',
        bio: ``,
    },
    {
        image: require('../img/speakers/laos.jpg'),
        shortname: 'Dr. Laos',
        name: 'Dr. Eduardo J. Laos Plasier',
        subtitle: 'Medico Neurocirujano'
    },
    {
        image: require('../img/speakers/pascual.jpg'),
        shortname: 'Dr. Pascual',
        name: 'Dr. Ronald Pascual Valverde.',
        subtitle: 'Medico Cirujano'
    },
    {
        image: require('../img/speakers/babor2.png'),   
        shortname: 'Dr. Baabor',
        name: 'Dr. Ronald Pascual Valverde.',
        subtitle: 'Medico Cirujano'
    },
    {
        image: require('../img/speakers/cabrejos.jpg'),
        shortname: 'Dr. Cabrejos',
        name: 'Dr. Ronald Pascual Valverde.',
        subtitle: 'Medico Cirujano'
    },
    {
        image: require('../img/speakers/robles.jpg'),
        shortname: 'Dr. Robles',
        name: 'Dr. Ronald Pascual Valverde.',
        subtitle: 'Medico Cirujano'
    },
    {
        image: require('../img/speakers/vialle.png'),
        shortname: 'Dr. Vialle',
        name: 'Dr. Ronald Pascual Valverde.',
        subtitle: 'Medico Cirujano'
    },
    {
        image: require('../img/speakers/robles.jpg'),
        shortname: 'Dr. Robles',
        name: 'Dr. Ronald Pascual Valverde.',
        subtitle: 'Medico Cirujano'
    },
    {
        image: require('../img/speakers/castelo.jpg'),
        shortname: 'Dr. Castelo',
        name: 'Dr. Ronald Pascual Valverde.',
        subtitle: 'Medico Cirujano'
    }
]


const CircleItem = styled(View) `
   flex-grow:1;
   flex-shrink:1;
   flex-basis: 40%;
   display: flex;
   margin-vertical: 20px;   
   display: flex;
   align-items: center;
   justify-content: center; 
`;

const CircleList = styled(View) `
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
`;

const TextWrap = styled(Text)`
    font-size: 16px;
    margin-top: 10px; 
`;


const ImageWrap = styled(Image) `
    width: 120px;
    height: 120px;
    border-radius: 60px; 
`;

const Speaker = (props) => {
    return (
        <TouchableWithoutFeedback onPress={() => props.goToSpeaker(props)}>
            <CircleItem>
                <ImageWrap source={props.image} />
                <TextWrap>{props.shortname}</TextWrap>
            </CircleItem>
        </TouchableWithoutFeedback>
    )
}

export default class Speakers extends React.PureComponent {

    goToSpeaker = (item) => {
        this.props.navigation.navigate('speaker_details', {item})
    };

    render() {

        return (
            <Container>
                <Content>
                    <Header title="Expositores"></Header>
                    <CircleList>
                        {SpeakersData.map((item, index) => 
                            <Speaker 
                                key={index} 
                                {...item} 
                                goToSpeaker={this.goToSpeaker} 
                            />)}
                    </CircleList>
                </Content>
            </Container>
        );
    }
}
