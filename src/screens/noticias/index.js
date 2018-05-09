import React, { Component } from "react";
import { Image, Dimensions, StatusBar, FlatList, ActivityIndicator, View } from 'react-native';
import Config from 'react-native-config'

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
  H2
} from "native-base";
import styles from "./styles";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;
const logo = require("../../assets/background/logo-fesasurf.png");

const cardImage = require("../../assets/background/drawer-cover.png");
import PhotoView from 'react-native-photo-view';
class NHCardShowcase extends Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch(Config.API_URL + '/api/v1/noticias')
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
        <StatusBar barStyle="light-content" />
        <Header style={styles.header}
          androidStatusBarColor="#031328"
          iosBarStyle="light-content">
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon style={{ color: "#FFFFFF" }} name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Noticias</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <List
            dataArray = {this.state.dataSource}
            renderRow={
            data =>
              <Card style={styles.mb}>
                <CardItem bordered>
                  <Body style={{width: "100%"}}>
                    <H2>{data.nombre}</H2>
                    <Text note style={styles.note}>
                      { data.descripcion }
                    </Text>
                  </Body>
                </CardItem>
                <CardItem>
                  <Body>
                    <PhotoView
                      source={{ uri: Config.API2_URL + '/upload/files/noticia/' + (data.ruta_foto == '' ? 'default.png' : data.ruta_foto ) }}
                      minimumZoomScale={1}
                      maximumZoomScale={10}
                      androidScaleType="center"
                      onLoad={() => console.log("Image loaded!")}
                      style={{
                        height: deviceHeight / 1.18,
                        width: deviceWidth / 1.18,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    />
                  </Body>
                </CardItem>
                <CardItem style={{ paddingVertical: 0 }}>
                  <Left>
                    <Button transparent>
                      <Icon name="star" />
                      <Text note>
                        {data.fecha_inicio}
                      </Text>
                    </Button>
                  </Left>
                </CardItem>
              </Card>
            }
            />
        </Content>
      </Container>
    );
  }
}

export default NHCardShowcase;
