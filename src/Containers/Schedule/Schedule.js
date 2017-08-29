import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Tabs, Tab } from 'native-base';
import ScheduleList from './ScheduleList.js'
import { Header } from '../../Components/custom-components';
import { gold, blue, skyblue, gray, white } from '../../colors.js';


const styles = {
    tabs: {
         tabBarUnderlineStyle: 
         {
            backgroundColor: white 
        }
    },
    tab: {
        tabStyle: {
            backgroundColor: blue,
        },
        activeTabStyle: {
            backgroundColor: blue,
        },
        textStyle: {
            color: white
        },
        activeTextStyle: {
            color: white
        },
    }

}

const dia1 = [
    {
        id: 100,
        type: 'module',
        text: 'Seminario Avanzado AOSpine Precongreso ASPECIVE—Tumores',
        hour: ''
    },
    {
        id: 2,
        type: 'card',
        text: 'Bienvenida y presentación de los Faculties',
        hour: '09:00- 09:05',
        category: 'Opening remarks',
        author: 'Alfonso Basurco'
    },
    {
        id: 101,
        type: 'module',
        text: 'Módulo I: Metástasis vertebral - Diagnóstico y Pronóstico',
        hour: '09:05 - 10:15'
    },
    {
        id: 3,
        type: 'card',
        text: 'Diagnóstico clínico y radiológico del paciente con tumor metastasico',
        hour: '09:05 - 09:35',
        category: 'Lecture',
        author: 'Jose Estrada Mastache'
    },
    {
        id: 4,
        type: 'card',
        text: 'Cómo estimar el pronóstico?',
        hour: '09:35 -10:05',
        category: 'Lecture',
        author: 'Asdrubal Falavigna'
    },
    {
        id: 5,
        type: 'card',
        text: 'Discusión',
        hour: '10:05 - 10:15',
        category: 'Discusión'
    },
    {
        id: 9,
        type: 'module',
        text: 'BREAK',
        hour: '10:15- 10:40'
    },
    {
        id: 102,
        type: 'module',
        text: 'Módulo II: Metástasis vertebral con implicación epidural: Planificación quirúrgica',
        hour: '10:40 - 12:05'
    },
    {
        id: 10,
        type: 'card',
        hour: '10:40 - 11:20',
        text: 'Decisión de tratamiento en enfermedad metastasica: cirugía de separación',
        category: 'Lecture',
        author: 'Asdrubal Falavigna'
    },
    {
        id: 11, // 11:03	11:15	Ponencia	Tumor metastasico epidural
        type: 'card',
        hour: '11:20 - 11:30',
        text: 'Discusión',
        category: 'Discusión'
    },
    {
        id: 12, // 11:15	11:30	Ponencia	Decisión de tratamiento en enfermedad metastasica
        type: 'card',
        hour: '11:130 - 11:45',
        text: 'Vertebroplastia es una alternativa?',
        category: 'Lecture',
        author: 'Alfonso Basurco'
    },
    {
        //11:30	11:45	Ponencia	Tratamiento quirurgico
        id: 13,
        type: 'card',
        hour: '11:45 - 11:55',
        text: 'Discusión',
        category: 'Discusión'
    },
    {
        // 11:45	12:00	Ponencia	Vertebrectomia, cuando procede
        id: 14,
        type: 'card',
        hour: '11:55 - 12:05',
        text: 'Presentación AOSpine',
        category: 'Lecture',
        author: 'Asdrubal Falavigna'
    },
    {
        id: 18,
        type: 'module',
        text: 'Módulo III: Tumores primarios vertebrales',
        hour: '12:05 - 13:55'
    },
     {
        // 14:00	14:05	Presentacion	Caso clínico 
        id: 19,
        type: 'card',
        text: 'Estatificación local y sistémica de la lesión',
        hour: '12:05 - 12:45',
        category: 'Lecture',
        author: 'Jose Estrada Mastache'
    },
    {
        // 14:05	14:10	Ponencia	Cuadro clinico de tumores primarios
        id: 20,
        type: 'card',
        text: 'Discusión',
        hour: '12:45 - 12:55',
        category: 'Discusión'
    },
    {
        id: 180,
        type: 'module',
        text: 'BREAK',
        hour: '12:55 - 13:20'
    },
    {
        // 14:10	14:25	Ponencia	Estadificación local y sistemica de la lesión
        id: 21,
        type: 'card',
        text: 'Ressection in bloc',
        hour: '13:20 - 13:50',
        category: 'Lecture',
        author: 'Asdrubal Falavigna'
    },
    {
        // 14:25	14:40	Ponencia	Tratamiento quirurgico
        id: 22,
        type: 'card',
        text: 'Discusión',
        hour: '13:50 - 13:55',
        category: 'Discusión'
    },
    
     {
        id: 26,
        type: 'module',
        text: 'Módulo IV: Presentación y discusión de casos',
        hour: '13:55 - 15:00'
    },
     {
        // 16:00	16:04	Presentacion	Caso Clinico
         id: 27,
        type: 'card',
        text: 'Presentación de caso',
        hour: '13:55 - 14:10',
        category: 'Case presentation',
        author: 'Eduardo Laos Plasier'
    },
     {
        // 16:04	16:15	Lecture	Tumores primarios sacros
         id: 28,
        type: 'card',
        text: 'Presentación de caso',
        hour: '14:10 - 14:25',
        category: 'Lecture',
        author: 'Jose Estrada Mastache'
    },
     {
        // 16:15	16:30	Lecture	Cordoma: un reto
         id: 29,
        type: 'card',
        text: 'Presentación de caso',
        hour: '14:25 14:55',
        category: 'Presentacion'
    },
     {
        id: 31,
        type: 'module',
        text: 'CIERRE',
        hour: '16:55	15:00'
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
        id: 101,
        type: 'card',
        text: 'Efectividad de la Microdiscetomía lumbar tubular.',
        category: 'Ponencia',
        author: 'Dra.Quequezana',
        hour: '08:00 - 09:00'
    },
    {
        id: 102,
        type: 'card',
        text: 'Experiencia en instrumentación transpedicular.',
        category: 'Ponencia',
        author: 'Dr.Yaya',
        
    },
    {
        id: 103,
        type: 'card',
        text: 'Disociación Occipitocervica.',
        category: 'Ponencia',
        author: 'Dr.Flores',
         hour: '08:00 - 09:00'
    },
    {
        id: 104,
        type: 'card',
        text: 'Manejo De Fractura De Odontoides.',
        category: 'Ponencia',
        author: 'Dr. laos',
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
       text: 'INAUGURACION OFICIAL',
       hour: '09:00 - 09:30',
       category: 'Ponencia',
       author: 'Dr. Alaba',
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
          text: 'Bases Metodológicas para estructurar la toma de decisiones en cirugía',
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
          text: 'PATOLOGÍA TRAUMÁTICA',
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
          text: 'ALMUERZO LIBRE',
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
          text: 'Escoliosis congénita',
          hour: '14:20 - 14:40',
          category: 'Ponencia',
          author: 'Dr. Cabrejos',
      },
      {
          id: 18,
          type: 'card',
          text: 'Escoliosis severas: manejo quirúrgico.',
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
          text: 'Escoliosis severas: manejo quirúrgico.',
          hour: '17:00 - 18:30',
          category: 'Ponencia',
          author: 'Dr. Pascual',
      },
      {
          id: 28,
          type: 'card',
          text: 'Escoliosis severas: manejo quirúrgico.',
          hour: '17:00 - 18:30',
          category: 'Ponencia',
          author: 'Dr. Cabrejos',
      },
      {
          id: 29,
          type: 'card',
          text: '•	Tratamiento quirúrgico:  Cómo operar Y experiencia en Neurocirugía del Hospital Almenara',
          hour: '17:00 - 18:30',
          category: 'Ponencia',
          author: 'Dr. Laos ',
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
        id: 101,
        type: 'card',
        text: 'Síndrome del segmento adyacente.',
        category: 'Ponencia',
        author: 'Dr. Cristofanetti',
        hour: '08:00 - 09:00'
    },
    {
        id: 102,
        type: 'card',
        text: 'Inestabilidad Atlantoaxial en Paciente con Acondroplasia.',
        category: 'Ponencia',
        author: 'Dr. Flores',
        
    },
    {
        id: 103,
        type: 'card',
        text: 'Experiencia En El Tratamiento De La Escoliosis.',
        category: 'Ponencia',
        author: 'Dr. Urday',
         hour: '08:00 - 09:00'
    },
    {
        id: 104,
        type: 'card',
        text: 'Malformación vascular espinal.',
        category: 'Ponencia',
        author: 'Dr. Cañari',
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
          text: 'Prótesis de anulo en HNP Lumbar.',
          hour: '09:30 - 10:00',
          category: 'Ponencia',
          author: 'Dr. Baabor',
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
          text: 'ALMUERZO LIBRE',
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
          text: 'Mielopatía Espondilotica Cervical',
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
                <Header title={"III Congreso Nacional de \n Cirugia Vertebral 2017"} />
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

