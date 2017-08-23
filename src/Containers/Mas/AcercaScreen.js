//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { gold, blue, skyblue, gray, white } from '../../colors.js';

const {width, height}  = Dimensions.get('window')

const Container = styled(ScrollView) `
    flex: 1;
    background-color: #fff;
`;

const SectionTop = styled(View) `
    background-color: ${blue};
    display: flex;
    align-items: center;
`;

const SectionMiddle = styled(View) `
    flex: 1;
    align-items: center;
    margin-bottom: 10px;

`;

const SectionTitle = styled(Text) `
    color: #fff;
    font-size: 25px;
`;

const Title = styled(Text) `
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 10px;
    color: ${blue};
    
    `;

const Subtitle = styled(Text) `
    font-size: 20px;
`;

const ImageWrap = styled(Image) `
    width: ${width}px;
   
`;

const Paragraph = styled(Text)`
    margin: 15px;
    font-size: 16px;
    text-align: left;

`;
// create a component
class JuntaScreen extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: ' Lima',
        headerStyle: {
            paddingTop: 20,
            height: 80
        }
    })

    render() {
        // const { params } = this.props.navigation.state;

        return (
            <Container>
                <SectionTop>
                    <ImageWrap source={require('../../img/logo.png')} />    
                </SectionTop>
                <SectionMiddle>
                    <Title>Asociación Peruana de Cirugía Vertebral</Title>
                     <Paragraph>
                     En la ciudad de lima a los trece días del mes de mayo de mil novecientos noventaicuatro, reunidos en la sala de conferencias de la clínica “Ricardo Palma” los especialistas dedicados a la cirugía vertebral, decidieron constituir una agrupación científica denominada “Asociación Peruana de Cirugía Vertebral” – ASPECIVE – con el fin de promover el desarrollo así como fomentar la integración de los especialistas en Ortopedia y Traumatología y neurocirugía.
                     Seguidamente, se eligió la primera junta directiva transitoria conformada por los siguientes miembros:                    
                     </Paragraph>
                    <Paragraph>
                        Pagina web : http://aspecive.com
                    </Paragraph>
                </SectionMiddle>
            </Container>
        );
    }
}



//make this component available to the app
export default JuntaScreen;
