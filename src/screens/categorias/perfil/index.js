import React, { Component } from "react";
import { Image, Dimensions, StatusBar } from "react-native";

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
  render() {
    const {state} = this.props.navigation;
    const {navigate} = this.props.navigation;
    return (

      <Container style={styles.container}>
        <Header androidStatusBarColor="#031328" style={styles.header}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon style={{ color: "#FFFFFF" }} name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Perfil</Title>
          </Body>
          <Right />
        </Header>
        <Container>
          <Card style={styles.mb}>
            <CardItem bordered>
              <Left>
                <Image source={ logo } style={{
                  alignSelf: "center",
                  height: (deviceWidth / 2)-50,
                  width: (deviceWidth / 2)-50,
                  marginVertical: 5,
                  borderRadius: 100,
                  borderColor: "#c36712",
                  borderWidth: 3
                }} />
                <Body>
                    <Left >
                      <Text>{state.params.name}</Text>
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
