import React, { Component } from "react";
import { Image, ActivityIndicator,  Dimensions, StatusBar, View} from "react-native";

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
      return fetch('http://192.168.1.4:5000/api/v1/atletas/'+this.id)
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
                <Image source={{ uri: this.atleta.ruta_foto }} style={{
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
                      <Text note>April 15, 2016</Text>
                      <Icon name="star" style={{fontSize: 20, color: '#c36712'}} />
                      <Text style={{fontSize: 20, color: '#c36712'}}>Ranking 3</Text>
                    </Left>
                </Body>
              </Left>
            </CardItem>

            <CardItem>
              <Body>
                <Text>
                  Campeon .... nacional de surf
                </Text>
                <Text>
                  Inicio a los ocho años de edad ...... Lorem ipsum
                </Text>
                <Text>
                  Ola Favorita: ..adfs..
                </Text>

              </Body>
            </CardItem>

          </Card>

        </Container>
      </Container>

    )}
  }
export default Categorias;
