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

const deviceWidth = Dimensions.get("window").width;
const logo = require("../../assets/background/logo-fesasurf.png");

const cardImage = require("../../assets/background/drawer-cover.png");


const datas = [
  {
    titulo: "Noticia",
    note: "22 Enero, 2017",
    cardImage: cardImage,
    text: "Lorem ipsum dolor sit amet."
  },
  {
    titulo: "Fechas",
    note: "22 Enero, 2017",
    cardImage: cardImage,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    titulo: "Informacion de Atletas",
    note: "22 Enero, 2017",
    cardImage: cardImage,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
  },
  {
    titulo: "Ranking",
    note: "22 Enero, 2017",
    cardImage: cardImage,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse"
  }
];

class NHCardShowcase extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Header style={styles.header}
          androidStatusBarColor="#031328"
          iosBarStyle="light-content">
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
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
            dataArray={datas}
            renderRow={data =>
              <Card style={styles.mb}>
                <CardItem bordered>
                  <Left>
                    <Body>
                      <Text>{data.title}</Text>
                      <Text note>{ data.note }</Text>
                    </Body>
                  </Left>
                </CardItem>

                <CardItem>
                  <Body>
                    <Image
                      style={{
                        alignSelf: "center",
                        height: 150,
                        resizeMode: "cover",
                        width: deviceWidth / 1.18,
                        marginVertical: 5
                      }}
                      source={cardImage}
                    />
                    <Text>
                      { data.text}
                    </Text>
                  </Body>
                </CardItem>
                <CardItem style={{ paddingVertical: 0 }}>
                  <Left>
                    <Button transparent>
                      <Icon name="logo-github" />
                      <Text>4,923 stars</Text>
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
