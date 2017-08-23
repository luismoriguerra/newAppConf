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
                    <ImageWrap source={require('../../img/lima.jpg')} />    
                </SectionTop>
                <SectionMiddle>
                    <Title>Patrimonio de la Humanidad</Title>
                     <Paragraph>
                     En el norte está la ciudad de Caral, la civilización más antigua de América, y al sur está el Complejo Arqueológico de Pachacamac. La historia de Lima es anterior a la presencia colonial en el país. El establecimiento del virreinato transformó la ciudad en el principal centro político y administrativo de América del Sur. Durante este período, se construyeron importantes iglesias, monasterios, mansiones y balcones. La llegada de la modernidad no transformó el centro histórico, que es reconocido como Patrimonio de la Humanidad.                     
                     </Paragraph>

                     <Paragraph>
                     Museos con grandes obras de arte, sitios arqueológicos, playas, paseo marítimo, valles, reservas naturales, vida nocturna, la emoción de los deportes de aventura y la exquisita gastronomía dan a la capital de Perú una auténtica personalidad y hacen del turismo en Lima una experiencia única en el país .
                     </Paragraph>

                     <Title>
                         Clima
                     </Title>
                     <Paragraph>
                     El clima de Lima es seco y cálido en las zonas cercanas a la costa. Hay mucha humedad y una falta de lluvia durante todo el año. En las zonas más de 2.500 metros sobre el nivel del mar, la temperatura baja y el clima es frío y húmedo.
                     </Paragraph>
                     <Title>Atracciones de la Ciudad</Title>
                     <Paragraph> Lima Plaza Mayor (Plaza Mayor) </Paragraph>  
                     <Paragraph> Palacio del Gobierno  </Paragraph> 
                     <Paragraph> Iglesia y Convento de San Francisco</Paragraph> 
                     <Paragraph> Casa de la Gastronomía</Paragraph> 
                     <Paragraph> Matías Maestro Cementerio Presbiteriano General</Paragraph> 
                     <Paragraph> Parque de la Muralla (Parque del Muro)</Paragraph> 
                     <Paragraph> Aliaga House</Paragraph> 
                     <Paragraph> Museo de la Inquisición y Congreso</Paragraph> 
                     <Paragraph> Iglesia de San Pedro</Paragraph> 
                     <Paragraph> Torre Tagle Palace</Paragraph> 
                     <Paragraph> Iglesia y Convento de Santo Domingo</Paragraph> 
                     <Paragraph> Iglesia de Las Nazarenas</Paragraph> 
                     <Paragraph> Museo de Arte de Lima</Paragraph> 
                     <Paragraph> Parque de la Exposición</Paragraph> 
                     <Paragraph> Iglesia y Convento de Los Descalzos (La Descalza)</Paragraph> 
                     <Paragraph> Acho Plaza de Toros</Paragraph> 
                     <Paragraph> Parque de la Reserva, Circuito Mágico del Agua,</Paragraph> 
                     <Paragraph> Distrito de Miraflores</Paragraph> 
                     <Paragraph> Parque Zoológico del Parque de las Leyendas (San Miguel)</Paragraph> 

                

                </SectionMiddle>
            </Container>
        );
    }
}



//make this component available to the app
export default JuntaScreen;
