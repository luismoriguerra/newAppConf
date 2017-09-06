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
        text: 'Evaluación clínico-radiológica de escoliosis del adulto tratada con abordaje combinado',
        link: 'https://docs.google.com/presentation/d/1fraFK834ZRv1iIzvO6FTUTxWC-1bFevE4_1GTNWa3LI/edit?usp=sharing'
    },
   
    {
        text: 'Complicación neurológica postquirúrgica inmediata por agente hemostático        ',
        link: 'https://docs.google.com/presentation/d/1Y5KkjfNBntTOYgAHgnKtksSbfAqqfuMnCICoaRjq4Mk/edit?usp=sharing'
    },
    {
        text: 'Complicación neurológica postquirúrgica inmediata por agente hemostático        ',
        link: 'https://docs.google.com/presentation/d/1O3DrDiGDw3tlJN6Q5-x1yR01TZXAzAXu6gabMbOKaAc/edit?usp=sharing'
    }
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


const Row = ({ text, link, goTo }) => {
    return (
        <TouchableWithoutFeedback onPress={() => goTo(link)}>
            <RowContainer >
                <RowText >{text}</RowText>
            </RowContainer>
        </TouchableWithoutFeedback>

    )
}

export default class Posters extends React.PureComponent {

    goTo = (link) => {
        Linking.openURL(link);
    }

    render() {
        return (
            <Container>
                <Header title="Posters Electrónicos" />
                <Content>
                    {data.map((item, index) => <Row key={index} {...item} goTo={this.goTo} />)}
                </Content>
            </Container>
        );
    }
}
