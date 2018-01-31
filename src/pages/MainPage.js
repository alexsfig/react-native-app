import React, { Component } from "react";
import { ImageBackground, View, StyleSheet, StatusBar,
  Text,
  TextInput,
  ScrollView,
  
} from "react-native";
// import { Container, Button, H3, Text } from "native-base";
import Container from '../components/Container';
import Button2 from '../components/Button';
import Label from '../components/Label';

const launchscreenBg = require("../assets/background/launchscreen-bg.png");

class Home extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
        <ImageBackground resizeMode={'contain'} source={launchscreenBg} style={styles.imageContainer}>
          <View style={styles.logoContainer}>
          </View>
          <View
            style={{
              alignItems: "center",
              marginBottom: 50,
              backgroundColor: "transparent"
            }}
          >
            <View style={{ marginTop: 8 }} />
            <View style={{ marginTop: 8 }} />
          </View>
          <View style={{ marginBottom: 80 }}>
            <Button2
              style={{ backgroundColor: "#6FAF98", alignSelf: "center" }}
              onPress={() => navigate("Home")}
            >
              <Text>Lets Go!</Text>
            </Button2>
          </View>
        </ImageBackground>
    );
  }
}
const styles = StyleSheet.create( {
  imageContainer: {
    flex: 1,
    width: null,
    height: null
  },
  logoContainer: {
    flex: 1,
    marginTop: 6,
    marginBottom: 30
  },
  logo: {
    position: "absolute",
    left:  50,
    top: 60,
    width: 280,
    height: 100
  },
  text: {
    color: "#D8D8D8",
    bottom: 6,
    marginTop: 5
  }
});
export default Home;