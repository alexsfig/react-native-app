import React, { Component } from 'react';
import {BackHandler} from 'react-native'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  ImageBackground,
  StatusBar,
  Image
} from 'react-native';
import {Container,  Header, H1, Icon, Left, Right} from "native-base" ;
import { Grid, Row, Col} from "react-native-easy-grid";
import styles from "./style";

// import Container from '../../components/Container';
import Button2 from '../../components/Button';
import Label from '../../components/Label';
const launchscreenLogo = require("../../assets/background/logo.png");
const launchscreenLogoFesa = require("../../assets/background/logo-fesasurf.png");
const playa = require("../../assets/background/playa.jpg");

export default class Login extends Component {
    render() {
        return (
          <Container>
            <StatusBar barStyle="light-content" />
            <Header style={styles.header}
              androidStatusBarColor="#031328"
              iosBarStyle="light-content">
              <Left>
                <Button2 onPress={() =>  this.props.navigation.navigate("DrawerOpen")}
                  label="My Pokedex"
                  styles={{button: styles.alignRight, button: styles.newButton, label: styles.label}}
                  >
                    <View style={styles.inline}>
                      <Icon name="menu" style={{ color: "#FFFFFF" }}>
                      </Icon>
                    </View>
                </Button2>
              </Left>
              <Right>
                <H1 style={styles.h1}>
                  Swell
                </H1>
              </Right>
            </Header>
            <Grid>
                <Row style={styles.row, {height: 150 , backgroundColor: '#FFFFFF'}}>
                  <Col style={{justifyContent:'center', alignItems: 'center'}} >
                    <ImageBackground source={launchscreenLogo} style={styles.logo}>
                    </ImageBackground>
                  </Col>
                  <Col style={{justifyContent:'center', alignItems: 'center'}}>
                    <ImageBackground source={launchscreenLogoFesa} style={styles.logo2}>
                    </ImageBackground>
                  </Col>
              </Row>
              <Row>
                <Image source={playa} style={styles.drawerCover} />
              </Row>
            </Grid>

          </Container>
        );
    }



}
