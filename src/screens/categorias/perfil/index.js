import React, { Component } from "react";
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
  ListItem
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
            <Text>
              Perfil de {state.params.name}
            </Text>

        </Container>
      </Container>

    )}
  }
export default Categorias;
