import React, { Component } from "react";
import { Image, ActivityIndicator,  Dimensions, StatusBar, View} from "react-native";
import Config from 'react-native-config'
import Moment from 'moment';
import 'moment/locale/es';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Card,
  CardItem,
  Text,
  Thumbnail,
  Left,
  Right,
  Body,
  List,
} from "native-base";
import styles from "./styles";

const logo = require("../../../assets/background/test-face.jpg");
const deviceWidth = Dimensions.get("window").width;

class Categorias extends Component {
    constructor(props){
      super(props);
      this.id = null;
      this.state ={ isLoading: true}
      this.atleta = null
    }

    componentDidMount(){
      return fetch(Config.API_URL + '/api/v1/atletas/'+this.id)
        .then((response) => response.json())
        .then((responseJson) => {
          this.atleta = responseJson
          this.setState({
            isLoading: false,
            dataSource: responseJson,
          }, function(){

          });

        })
        .catch((error) =>{
          console.error(error);
        });
    }
  render() {
    Moment.locale('es');
    const {state} = this.props.navigation;
    const {navigate} = this.props.navigation;
    this.id = state.params.id;

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator style={styles.activityIndicator}size="large" color="#031328"/>
          <Text>
            Cargando Informacion
          </Text>
        </View>
      )
    }
    return (


      <Container style={styles.container}>
        <Header androidStatusBarColor="#031328" style={styles.header}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon style={{ color: "#FFFFFF" }} name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Informacion de la fecha</Title>
          </Body>
          <Right />
        </Header>
        <Container>
          <Card style={styles.mb}>
            <CardItem bordered>
              <Left>
                <Image source={{ uri: Config.API2_URL + '/upload/files/' + (this.atleta.ruta_foto == '' ? 'default.png' : this.atleta.ruta_foto ) }} style={{
                  alignSelf: "center",
                  height: (deviceWidth / 2)-50,
                  width: (deviceWidth / 2)-50,
                  marginVertical: 5,
                  borderRadius: 200,
                  borderColor: "#c36712",
                  borderWidth: 3
                }} />
                <Body>
                    <Left >
                      <Text>{this.atleta.persona.nombre} {this.atleta.persona.apellido}</Text>
                      <Text note>{ Moment(this.atleta.persona.fecha_nacimiento ).format('d  MMMM, YYYY')}</Text>
                      <Text note>{ Moment().diff(this.atleta.persona.fecha_nacimiento,'years') } Años</Text>
                      <Icon name="star" style={{fontSize: 20, color: '#c36712'}} />
                      <Text style={{fontSize: 20, color: '#c36712'}}>Ranking 3</Text>
                    </Left>
                </Body>
              </Left>
            </CardItem>

            <CardItem>
              <Body style={styles.body}>
                <Text style={styles.title}>
                  Edad de inicio en el surf:
                  <Text style = { styles.content }>
                    &nbsp;{ this.atleta.edad_inicio} años de edad
                  </Text>
                </Text>
                <Text style={styles.title}>
                  Años Practicando:
                  <Text style = { styles.content }>
                    &nbsp;{ this.atleta.anios_practicando} años
                  </Text>
                </Text>
                <Text style={styles.title}>
                  Ola Favorita:
                  <Text style = { styles.content }>
                    &nbsp;{ this.atleta.ola_preferida}
                  </Text>
                </Text>
                <Text style={styles.title}>
                  Lado preferido:
                  <Text style = { styles.content }>
                    &nbsp;{ this.atleta.lado_pie}
                  </Text>
                </Text>
                <Text style={styles.title}>
                  Idiomas:
                  <Text style = { styles.content }>
                    &nbsp;{ this.atleta.idiomas}
                  </Text>
                </Text>
                <Text style={styles.title}>
                  Logros:
                  <Text style = { styles.content }>
                    &nbsp;{ this.atleta.logros}
                  </Text>
                </Text>

                <Text style={styles.title}>
                  Rutina Constancia:
                  <Text style = { styles.content }>
                    &nbsp;{ this.atleta.rutina_constancia}
                  </Text>
                </Text>
              </Body>
            </CardItem>

          </Card>

        </Container>
      </Container>

    )}
  }
export default Categorias;
