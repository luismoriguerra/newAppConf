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

`;
// create a component
class JuntaScreen extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Hotel Country Club',
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
                    <ImageWrap source={require('../../img/hotel.jpg')} />    
                </SectionTop>
                <SectionMiddle>
                     <Paragraph>
                     Ubicado en el prestigioso distrito de San Isidro en Lima y rodeado de elegantes embajadas, el Country Club Lima Hotel es un hotel de lujo que personifica la sofisticación y uno de los pocos hoteles reconocidos como Patrimonio Cultural del Perú. Cada detalle ha sido concebido con el lujo en mente; candelabros adornados complementan unos techos altos con vigas de madera y 300 piezas de arte originales - cedidas por el Museo Pedro de Osma - adornan las paredes. Cada una de las 83 privadas habitaciones y suites de lujo son opulentas y acogedoras, y muchas de ellas disponen de delicados baños de mármol y relajantes jacuzzis. Disfrute de unas instalaciones de primera clase, de un restaurante premiado   como el mejor restaurante de hotel por cinco años consecutivos - Premios SUMMUM y poder disfrutar del exclusivo Lima Golf Club, todo en un ambiente de calidez e intimidad. El Country Club Lima Hotel invita al viajero de gustos exigentes a disfrutar de lo mejor que Lima tiene para ofrecer.
                     </Paragraph>

                     <Title>
                         SALAS DE REUNIONES Y EVENTOS
                     </Title>
                     <Paragraph>
                     Construido en 1927, el Country Club Lima Hotel ha sido durante mucho tiempo uno de los más prestigiosos centro de reunión y eventos en Lima, Perú. Hoy en día, la grandiosa arquitectura y elegante interior de inspiración colonial se mantienen, pero se ha llevado a cabo una meticulosa renovación para hacer de este Patrimonio Cultura de Perú la medida perfecta entre sofisticación y modernidad.
                     
                     </Paragraph>
                     <Paragraph>
                     No importa la ocasión, desde importantes reuniones de empresa y modernas bodas a elegantes banquetes y eventos sociales, nuestras salas bellamente decoradas y nuestro servicio impecable le aseguran unos encuentros fuera de lo común con capacidad de hasta trescientos invitados. Deje que el Country Club Lima Hotel le diseñe un evento cinco estrellas, digno del mejor hotel de Lima.
                     
                     </Paragraph>

                </SectionMiddle>
            </Container>
        );
    }
}



//make this component available to the app
export default JuntaScreen;
