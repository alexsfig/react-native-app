import React, { Component } from "react";
import { FlatList, ActivityIndicator, View , Image} from 'react-native';


import {
  Text,
  Container,
  Header,
  Left,
  Button,
  Icon,
  Title,
  Right,
  Body,
  List,
  ListItem,
} from "native-base";
import styles from "./styles";
const datas = [
  {
    name: "pepe"
  },
  {
    name: "Miguel"
  },
  {
    name: "jose"
  },
  {
    name: "Antonio"
  },
  {
    name: "Pedro"
  },
  {
    name: "Paco"
  }
];

class Categorias extends Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('http://192.168.1.11:5000/api/v1/atletas')
      .then((response) => response.json())
      .then((responseJson) => {

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
            <Title>Atletas</Title>
          </Body>
          <Right />
        </Header>
        <Container>
          <List
            dataArray = {this.state.dataSource}
            renderRow={
                data =>
              <ListItem
                onPress={() => navigate('Perfil', {name: data.persona.nombre, id: data.id})}
                >
                <Image source={{ uri: data.ruta_foto }} style={{width: 50, height: 50}} />
                <Body>
                    <Text>
                        {data.persona.nombre} {data.persona.apellido}
                    </Text>
                </Body>
              </ListItem>
            }/>

        </Container>
      </Container>

    )}
  }
export default Categorias;
