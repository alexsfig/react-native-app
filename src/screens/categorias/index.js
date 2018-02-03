import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  List,
  ListItem,
  Text,
  Thumbnail,
  Left,
  Right,
  Body,
  Badge
} from "native-base";
import styles from "./styles";

const cardImage = require("../../assets/background/logo.png");

const datas = [
  {
    img: cardImage,
    text: "Master",
    note: "Its time to build a difference . .",
    time: "10"
  },
  {
    img: cardImage,
    text: "Open",
    note: "One needs courage to be happy and smiling all time . . ",
    time: "20"
  },
  {
    img: cardImage,
    text: "Damas",
    note: "Live a life style that matchs your vision",
    time: "60"
  },
  {
    img: cardImage,
    text: "Damas Master",
    note: "Failure is temporary, giving up makes it permanent",
    time: "3"
  },
  {
    img: cardImage,
    text: "Saurabh Sahu",
    note: "The biggest risk is a missed opportunity !!",
    time: "4"
  },
  {
    img: cardImage,
    text: "Groom",
    note: "Wish I had a Time machine . .",
    time: "15"
  }
];

class NHListAvatar extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container style={styles.container}>
        <Header androidStatusBarColor="#031328" style={styles.header}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate("DrawerToggle")}>
              <Icon style={{ color: "#FFFFFF" }} name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Categorias</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem button
                onPress={() => navigate('Atletas', {title: data.text})}
                avatar>
                <Left>
                  <Thumbnail small source={data.img} />
                </Left>
                <Body>
                  <Text>
                    {data.text}
                  </Text>
                  <Text numberOfLines={1} note>
                    {data.note}
                  </Text>
                </Body>
                <Right>
                  <Badge primary style={styles.badge}>
                    <Text style={styles.note} note>
                      {data.time}
                    </Text>
                  </Badge>
                </Right>
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default NHListAvatar;
