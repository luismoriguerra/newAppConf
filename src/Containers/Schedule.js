import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Tabs, Tab } from 'native-base';
import ScheduleList from '../Components/ScheduleList.js'
import { Header } from '../Components/custom-components';
import { gold, blue, skyblue, gray, white } from '../colors.js';


const styles = {
    tabs: {
         tabBarUnderlineStyle: 
         {
            backgroundColor: blue 
        }
    },
    tab: {
        tabStyle: {
            backgroundColor: white,
        },
        activeTabStyle: {
            backgroundColor: white,
        },
        textStyle: {
            color: blue
        },
        activeTextStyle: {
            color: blue
        },
    }

}

const dia1 = [
    {
        id: 1,
        type: 'module',
        text: 'Módulo I: Metastasis vertebral',
        hour: '09:00 - 12:30'
    },
    {
        id: 2,
        type: 'card',
        text: 'Caso Clínico',
        hour: '09:00- 09:03',
        category: 'Presentación'
    },
    {
        id: 3,
        type: 'card',
        text: 'Caso clinico de tumor metastasico',
        hour: '09:03- 09:15',
        category: 'Ponencia'
    },
    {
        id: 4,
        type: 'card',
        text: 'Imagenes en metastasis vertebrales',
        hour: '09:15 -09:30',
        category: 'Ponencia'
    },
    {
        id: 5,
        type: 'card',
        text: 'Fractura patologica: diagnostico diferencial',
        hour: '09:30 - 09:45',
        category: 'Ponencia'
    }
    ,
    {
        id: 6,
        type: 'card',
        text: 'Escalas de evaluacion de mestastasis',
        hour: '09:45- 10:00',
        category: 'Ponencia'
    },
    {
        id: 7,
        type: 'card',
        text: 'Inestabilidad de la columna en metastasis',
        hour: '10:00 - 10:15',
        category: 'Ponencia'
    },
    {
        id: 8,
        type: 'card',
        text: 'Solucion del caso clinco',
        hour: '10:15 - 10:30',
        category: 'Discusion'
    },
     {
        id: 9,
        type: 'module',
        text: 'COFFEE BREAK',
        hour: '10:30 - 11:00'
    },
    {
        id: 10,
        type: 'card',
        hour: '11:00 - 11:03',
        text: 'Caso clínico',
        category: 'Presentacion'
    },
    {
        id: 11, // 11:03	11:15	Ponencia	Tumor metastasico epidural
        type: 'card',
        hour: '11:03 - 11:15',
        text: 'Tumor metastasico epidural',
        category: 'Ponencia'
    },
    {
        id: 12, // 11:15	11:30	Ponencia	Decisión de tratamiento en enfermedad metastasica
        type: 'card',
        hour: '11:15 - 11:30',
        text: 'Decisión de tratamiento en enfermedad metastasica',
        category: 'Ponencia'
    },
    {
        //11:30	11:45	Ponencia	Tratamiento quirurgico
        id: 13,
        type: 'card',
        hour: '11:30 - 11:45',
        text: 'Tratamiento quirurgico',
        category: 'Ponencia'
    },
    {
        // 11:45	12:00	Ponencia	Vertebrectomia, cuando procede
        id: 14,
        type: 'card',
        hour: '11:45 - 12:00',
        text: 'Vertebrectomia, cuando procede',
        category: 'Ponencia'
    },
    {
        // 12:00	12:15	Ponencia	Vertebroplastia es una alternativa?
        id: 15,
        type: 'card',
        hour: '12:00 - 12:15',
        text: 'Vertebroplastia es una alternativa?',
        category: 'Ponencia'
    },
    {
        // 12:15	12:30	Discusion 	Resolución del caso clinico
        id: 16,
        type: 'card',
        hour: '12:15 - 12:30',
        text: 'Resolución del caso clinico',
        category: 'Discusion'
    },
     {
        id: 17,
        type: 'module',
        text: 'ALMUERZO',
        hour: '12:30 - 14:00'
    },
    {
        id: 18,
        type: 'module',
        text: 'Módulo III: Tumores primarios vertebrales',
        hour: '14:00 - 17:20'
    },
     {
        // 14:00	14:05	Presentacion	Caso clínico 
        id: 19,
        type: 'card',
        text: 'Caso clínico',
        hour: '14:00 - 14:05',
        category: 'Presentacion'
    },
    {
        // 14:05	14:10	Ponencia	Cuadro clinico de tumores primarios
        id: 20,
        type: 'card',
        text: 'Cuadro clinico de tumores primarios',
        hour: '14:05	14:10',
        category: 'Ponencia'
    },
    {
        // 14:10	14:25	Ponencia	Estadificación local y sistemica de la lesión
        id: 21,
        type: 'card',
        text: 'Estadificación local y sistemica de la lesión',
        hour: '14:10	14:25',
        category: 'Ponencia'
    },
    {
        // 14:25	14:40	Ponencia	Tratamiento quirurgico
        id: 22,
        type: 'card',
        text: 'Tratamiento quirurgico',
        hour: '14:25	14:40',
        category: 'Ponencia'
    },
    {
        // 14:40	14:55	Ponencia	Reconstrucion vertebral
         id: 23,
        type: 'card',
        text: 'Reconstrucion vertebral',
        hour: '14:40	14:55',
        category: 'Ponencia'
    },
    {
        // 14:55	15:10	Ponencia	Resolución del caso clinico
         id: 24,
        type: 'card',
        text: 'Resolución del caso clinico',
        hour: '14:55	15:10',
        category: 'Ponencia'
    },
     {
        // 15:10	15:25	Discusion
         id: 25,
        type: 'card',
        text: 'Discusion',
        hour: '15:10	15:25',
        category: 'Discusion'
    },
     {
        id: 26,
        type: 'module',
        text: 'COFFEE BREAK',
        hour: '15:25	16:00'
    },
     {
        // 16:00	16:04	Presentacion	Caso Clinico
         id: 27,
        type: 'card',
        text: 'Caso Clinico',
        hour: '16:00	16:04',
        category: 'Presentacion'
    },
     {
        // 16:04	16:15	Lecture	Tumores primarios sacros
         id: 28,
        type: 'card',
        text: 'Tumores primarios sacros',
        hour: '16:04	16:15',
        category: 'Lecture'
    },
     {
        // 16:15	16:30	Lecture	Cordoma: un reto
         id: 29,
        type: 'card',
        text: 'Cordoma: un reto',
        hour: '16:15	16:30',
        category: 'Lecture'
    },
     {
        // 16:30	16:45	Discusion	Resolución del caso clinico
         id: 30,
        type: 'card',
        text: 'Resolución del caso clinico',
        hour: '16:30	16:45',
        category: 'Discusion'
    },
     {
        id: 31,
        type: 'module',
        text: 'CIERRE',
        hour: '16:45	17:00'
    },
];

const dia2 = [
    {
        id: 1,
        type: 'module',
        text: 'Inscripciones',
        hour: '07:00 - 08:00'
    },
    {
        id: 2,
        type: 'module',
        text: 'Temas Libres',
        hour: '08:00 - 09:00'
    },
    {
        id: 3,
        type: 'module',
        text: 'Conferencias Magistrales',
        hour: '09:00 - 10:40'
    },
    {
       // 16:30	16:45	Discusion	Resolución del caso clinico
        id: 4,
       type: 'card',
       text: ' - No data - ',
       hour: '09:00	09:30',
       category: 'Ponencia',
       author: '-',
   },
      {
          id: 5,
          type: 'card',
          text: 'Complicaciones en trauma cervical y como evitarlas',
          hour: '09:30 - 10:00',
          category: 'Ponencia',
          author: 'Dr. Vialle',
      },
      {
          id: 6,
          type: 'card',
          text: 'Bases metodologicas para estructurar la toma de decisiones en cirugia',
          hour: '10:00 - 10:30',
          category: 'Ponencia',
          author: 'Dr. Soriano',
      },
      {
          id: 7,
          type: 'card',
          text: 'Preguntas',
          hour: '10:30 - 10:40',
          category: 'Ponencia',
          author: '',
      },
      {
          id: 8,
          type: 'module',
          text: 'COFFEE BREAK',
          hour: '10:40 - 11:00'
      },
      {
          id: 9,
          type: 'module',
          text: 'PATOLOGIA TRAUMÁTICA',
          hour: '11:00 - 12:30'
      },
      {
          id: 10,
          type: 'card',
          text: 'Facturas de Sacro',
          hour: '11:00 - 11:20',
          category: 'Ponencia',
          author: 'Dr. Vaille',
      },
      {
          id: 11,
          type: 'card',
          text: 'Fracturas en osteoporosis',
          hour: '11:20 - 11:40',
          category: 'Ponencia',
          author: 'Dr. Basurco',
      },
      {
          id: 12,
          type: 'card',
          text: 'Estrategias en el manejo quirúrgico de las fracturas dorsales altas',
          hour: '11:40 - 12:00',
          category: 'Ponencia',
          author: 'Dr. Castelo',
      },
      {
          id: 13,
          type: 'card',
          text: 'Fracturas cervicales altas C1 - C2',
          hour: '12:00 - 12:20',
          category: 'Ponencia',
          author: 'Dr. Vasquez',
      },
      {
          id: 14,
          type: 'card',
          text: 'Preguntas',
          hour: '12:20 - 12:30',
          category: 'Ponencia',
          author: '',
      },
      {
          id: 15,
          type: 'module',
          text: 'ALMUERZO',
          hour: '12:30 - 14:20'
      },
      {
          id: 16,
          type: 'module',
          text: 'DEFORMIDADES',
          hour: '14:20 - 15:50'
      },
      {
          id: 17,
          type: 'card',
          text: 'Escoliosis congenita',
          hour: '14:20 - 14:40',
          category: 'Ponencia',
          author: 'Dr. Cabrejos',
      },
      {
          id: 18,
          type: 'card',
          text: 'Escoliosis severas: manejo quirurgico',
          hour: '14:40 - 15:00',
          category: 'Ponencia',
          author: 'Dr. Cauti',
      },
      {
          id: 19,
          type: 'card',
          text: 'Deformidad degenerativa del adulto',
          hour: '15:00 - 15:20',
          category: 'Ponencia',
          author: 'Dr. Barros',
      },
      {
          id: 20,
          type: 'card',
          text: 'Preguntas',
          hour: '15:20 - 15:30',
          category: 'Ponencia',
          author: '',
      },
      {
          id: 21,
          type: 'module',
          text: 'COFFEE BREAK',
          hour: '15:30 - 15:50'
      },
      {
          id: 22,
          type: 'module',
          text: 'CONFERENCIAS MAGISTRALES',
          hour: '15:50 - 18:30'
      },
      {
          id: 23,
          type: 'card',
          text: 'La importancia del tratamiento en la deformidad del adulto',
          hour: '15:50 - 16:20',
          category: 'Ponencia',
          author: 'Dr. Reis',
      },
      {
          id: 24,
          type: 'card',
          text: 'Planning sagittal imbalance osteotomies',
          hour: '16:20 - 16:50',
          category: 'Ponencia',
          author: 'Dr. Vialle',
      },
      {
          id: 25,
          type: 'card',
          text: 'Preguntas',
          hour: '16:50 - 17:00',
          category: 'Ponencia',
          author: '',
      },
      {
          id: 26,
          type: 'module',
          text: 'SIMPOSIO: Tuberculosis Vertebral',
          hour: '17:00 - 18:30'
      },
      {
          id: 27,
          type: 'card',
          text: 'Tuberculosis espinal',
          hour: '17:00 - 18:30',
          category: 'Ponencia',
          author: 'Dr. Laos',
      },
      {
          id: 28,
          type: 'card',
          text: 'Cirugia en tuberculosis vertebral',
          hour: '17:00 - 18:30',
          category: 'Ponencia',
          author: 'Dr. Pascual',
      },
      {
          id: 29,
          type: 'card',
          text: 'Tuberculosis Vertebral (Mal de Pott.)',
          hour: '17:00 - 18:30',
          category: 'Ponencia',
          author: 'Dr. Cabrejos',
      }
];

const dia3 = [
    {
        id: 1,
        type: 'module',
        text: 'Entrega de Certificados',
        hour: '07:00 - 08:00'
    },
    {
        id: 2,
        type: 'module',
        text: 'Temas Libres',
        hour: '08:00 - 09:00'
    },
    {
        id: 3,
        type: 'module',
        text: 'Conferencias Magistrales',
        hour: '09:00 - 10:40'
    },
    {
       // 16:30	16:45	Discusion	Resolución del caso clinico
        id: 4,
       type: 'card',
       text: 'Degeneracion adyacente y balance sagital',
       hour: '09:00	09:30',
       category: 'Ponencia',
       author: 'Dr. Vialle',
   },
      {
          id: 5,
          type: 'card',
          text: 'Protesis de anulo en HNP Lumbar',
          hour: '09:30 - 10:00',
          category: 'Ponencia',
          author: 'Dr. Baabor',
      },
    //   {
    //       id: 6,
    //       type: 'card',
    //       text: '',
    //       hour: '10:00 - 10:30',
    //       category: 'Ponencia',
    //       author: '',
    //   },
      {
          id: 7,
          type: 'card',
          text: 'Preguntas',
          hour: '10:30 - 10:40',
          category: 'Ponencia',
          author: '',
      },
      {
          id: 8,
          type: 'module',
          text: 'COFFEE BREAK',
          hour: '10:40 - 11:00'
      },
      {
          id: 9,
          type: 'module',
          text: 'PATOLOGIA DEGENERATIVA LUMBAR',
          hour: '11:00 - 12:30'
      },
      {
          id: 10,
          type: 'card',
          text: 'Manejo de HNP recurrent',
          hour: '11:00 - 11:20',
          category: 'Ponencia',
          author: 'Dr. Laos',
      },
      {
          id: 11,
          type: 'card',
          text: 'Laminoplastia uniportal en stenorraquie degenerativa lumbar',
          hour: '11:20 - 11:40',
          category: 'Ponencia',
          author: 'Dr. Baabor',
      },
      {
          id: 12,
          type: 'card',
          text: 'Instrumentación de columna lumbar en pacientes orteoporoticos',
          hour: '11:40 - 12:00',
          category: 'Ponencia',
          author: 'Dr. Pascual',
      },
      {
          id: 13,
          type: 'card',
          text: 'Hernia discal dorsal',
          hour: '12:00 - 12:20',
          category: 'Ponencia',
          author: 'Dr. Cari',
      },
      {
          id: 14,
          type: 'card',
          text: 'Preguntas',
          hour: '12:20 - 12:30',
          category: 'Ponencia',
          author: '',
      },
      {
          id: 15,
          type: 'module',
          text: 'ALMUERZO',
          hour: '12:30 - 14:20'
      },
      {
          id: 16,
          type: 'module',
          text: 'PATAOLGÍA DEGENERATIVA CERVICAL',
          hour: '14:20 - 15:50'
      },
      {
          id: 17,
          type: 'card',
          text: 'Artroplastia cervical',
          hour: '14:20 - 14:40',
          category: 'Ponencia',
          author: 'Dr. Laos',
      },
      {
          id: 18,
          type: 'card',
          text: 'Mielopatia Espondilotica  Cervical.',
          hour: '14:40 - 15:00',
          category: 'Ponencia',
          author: 'Dr. Vizcarra',
      },
      {
          id: 19,
          type: 'card',
          text: 'Hernia extraforaminal ¿el gran reto diagnóstico y terapéutico?',
          hour: '15:00 - 15:20',
          category: 'Ponencia',
          author: 'Dr. Dittmar',
      },
      {
          id: 20,
          type: 'card',
          text: 'Preguntas',
          hour: '15:20 - 15:30',
          category: 'Ponencia',
          author: '',
      },
      {
          id: 21,
          type: 'module',
          text: 'COFFEE BREAK',
          hour: '15:30 - 15:50'
      },
      {
          id: 22,
          type: 'module',
          text: 'CONFERENCIAS MAGISTRALES',
          hour: '15:50 - 18:30'
      },
      {
          id: 23,
          type: 'card',
          text: 'Foraminotomia anterior en columna cervical',
          hour: '15:50 - 16:20',
          category: 'Ponencia',
          author: 'Dr. Baabor',
      },
      {
          id: 24,
          type: 'card',
          text: 'Imaging algorithm para Trauma cervical.',
          hour: '16:20 - 16:50',
          category: 'Ponencia',
          author: 'Dr. Vialle',
      },
      {
          id: 25,
          type: 'card',
          text: 'Preguntas',
          hour: '16:50 - 17:00',
          category: 'Ponencia',
          author: '',
      },
      
      {
          id: 27,
          type: 'card',
          text: 'Método de tractografia en RMN en casos de mielopatía cervical.',
          hour: '17:00 - 17:30',
          category: 'Ponencia',
          author: 'Dr. Dittmar',
      },
      {
          id: 28,
          type: 'card',
          text: 'Preguntas',
          hour: '18:00 - 18:10',
          category: 'Ponencia',
          author: 'Dr. Pascual',
      },
      {
          id: 29,
          type: 'module',
          text: 'CLAUSURA',
          hour: '18:10 - 18:20'
      }
];

export default class Schedule extends React.PureComponent {

    render() {
        return (
            <Container>
                <Header title="III Congreso Nacional de Cirugia Vertebral 2017" />
                <Tabs {...styles.tabs}>
                    <Tab heading="Jue 7" {...styles.tab}>
                        <ScheduleList nav={this.props.navigation} data={dia1} />
                    </Tab>
                    <Tab heading="Vie 8" {...styles.tab} >
                        <ScheduleList nav={this.props.navigation} data={dia2} />
                    </Tab>
                    <Tab heading="Sab 9"  {...styles.tab}>
                        <ScheduleList nav={this.props.navigation} data={dia3}  />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}

