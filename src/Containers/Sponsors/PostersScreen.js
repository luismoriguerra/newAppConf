import React from 'react';
import { View, Image, Dimensions, ScrollView } from 'react-native';
import { Container, Text, Content, List, ListItem, Left, Body, Right, Thumbnail, Card, CardItem } from 'native-base';
import Expo from 'expo';

import { Header } from '../../Components/custom-components';
import { gold, blue, skyblue, gray, white } from '../../colors.js';
import styled from 'styled-components/native';

const { width, height } = Dimensions.get('window');

const data = [
    {
        image: require('../../img/sponsor/sponsor_fractal.png'),
    },
    {
        image: require('../../img/sponsor/sponsor_importek.png'),
    },
    {
        image: require('../../img/sponsor/sponsor-aos.png'),
    },
    {
        image: require('../../img/sponsor/neuroscience.jpeg'),
    },
    {
        image: require('../../img/sponsor/synthes.jpeg'),
    },
    {
        image: require('../../img/sponsor/sponsor-quito.png'),
    },
    {
        image: require('../../img/sponsor/sponsor-resocentro.jpg'),
    },
    {
        image: require('../../img/sponsor/sponsor-cerema.jpg'),
    }
];

const CardWrap = styled(Card) `
    margin-top: 10px;
    margin-left: 20px;
    margin-right: 20px;
`;

const ContentWrapper = styled(View) `
   background-color: #fff;
   margin-top: 10px;
   margin-left: 20px;
   margin-right:20px;
   align-items: center;
`;

const ImageWrap = styled(Image) `
    width: ${width - 60}px;
`;

const Sponsor = (props) => {
    return (
        <ContentWrapper>
            <ImageWrap source={props.image} resizeMode="contain" />
        </ContentWrapper>
    )
}


export default class PostersScreen extends React.Component {

    render() {
        return (
            <Container>
                <Header title="Sponsors" />
                <ScrollView>
                    {data.map((item, index) => {
                        return <Sponsor key={index} {...item} />
                    })}
                </ScrollView>
            </Container>
        );
    }
}
