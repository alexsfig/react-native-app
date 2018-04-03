import React, { Component } from "react";
import { FlatList, ActivityIndicator, View , Image} from 'react-native';
import {
  Text,
  Container,
  Header,
  Left,
  Thumbnail,
  Button,
  Icon,
  Title,
  H1,
  H3,
  Right,
  Content,
  Body,
  List,
  ListItem,
} from "native-base";
import { Grid, Row, Col} from "react-native-easy-grid";
import styles from "./styles";
const cardImage = require("../../../assets/background/logo2.png");

class Categorias extends Component {

  constructor(props){
    super(props);
    this.id = null;
    this.fecha = null
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('http://192.168.1.4:5000/api/v1/fechas/'+this.id)
      .then((response) => response.json())
      .then((responseJson) => {
        this.fecha = responseJson
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
            <Title>Fechas</Title>
          </Body>
          <Right />
        </Header>

        <Grid>
          <Row style={styles.row, {height: 170, paddingTop: 20, backgroundColor: '#FFFFFF'}}>
            <Content>
              <Left>
                <Thumbnail square small source={cardImage} />
              </Left>
              <Body>
                <H1>
                  {this.state.dataSource.nombre}
                </H1>
                <Text>
                  Fecha: {this.state.dataSource.fecha}
                </Text>
                <Text>
                  Playa: {this.state.dataSource.playa.nombre}
                </Text>
              </Body>
            </Content>
          </Row>
          <Row>
            <List
              dataArray = {this.state.dataSource.circuitos}
              renderRow={
                data =>
              <ListItem button avatar
                onPress={() => navigate('FechaId', {id: data.id})}
              >
                <Left>
                  <Thumbnail square small source={cardImage} />
                </Left>
                <Body>
                  <Text>
                    {data.nombre}
                  </Text>
                  <H3>
                    {data.categoria.nombre_categoria}
                  </H3>

                </Body>
                <Right>
                  <Text>
                    Edad: {data.categoria.edad_min} - {data.categoria.edad_max} Años
                  </Text>

                </Right>

              </ListItem>
            }/>
          </Row>
        </Grid>
      </Container>

    )}
  }
export default Categorias;
