import React, { Component } from 'react';
import {BackHandler} from 'react-native'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Alert,
  Modal,
  Button,
  Picker,
  StatusBar
} from 'react-native';
import {Header, Icon, Left} from "native-base" ;

import Container from '../components/Container';
import Button2 from '../components/Button';
import Label from '../components/Label';

export default class Login extends Component {
    render() {
        return (
          <Container>
            <StatusBar barStyle="light-content" />
            <Header style={styles.header}
              androidStatusBarColor="#f99993"
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
            </Header>
            <ScrollView style={styles.scroll}>
                <Container>
                    <Button2 onPress={() =>  this.props.navigation.navigate("SecondScreen")}
                        label="My Pokedex"
                        styles={{button: styles.alignRight, label: styles.label}}
                        />
                </Container>
                <Container>
                    <Label text="Username or Email" />
                    <TextInput
                        style={styles.textInput}
                    />
                </Container>
                <Container>
                    <Label text="Password" />
                    <TextInput
                        secureTextEntry={true}
                        style={styles.textInput}
                    />
                </Container>
                <Container>
                    <Button2
                        styles={{button: styles.transparentButton}}
                        onPress={
                            () => this.props.navigation.navigate('DrawerOpen')}
                            title="Open modal"
                        >
                        <View style={styles.inline}>
                            <Text style={[styles.buttonBlueText, styles.buttonBigText]}>  Connect </Text>
                            <Text style={styles.buttonBlueText}>with Facebook</Text>
                        </View>
                    </Button2>
                </Container>
                <Container>
                      <Picker
                        mode="dropdown"
                        selectedValue={this.state.language}
                        onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                        <Picker.Item label="SQL" value="sql" />
                        <Picker.Item label="Ruby on Rails" value="ruby" />
                        <Picker.Item label="VUE" value="vue" />
                        <Picker.Item label="Node" value="Node" />
                      </Picker>
                </Container>
                <View style={styles.footer}>
                    <Container>
                        <Button2
                            label="Sign In"
                            styles={{button: styles.primaryButton, label: styles.buttonWhiteText}}
                            onPress={this.press.bind(this)} />
                    </Container>
                    <Container>
                        <Button2
                            label="CANCEL"
                            styles={{label: styles.buttonBlackText}}
                            onPress={this.press.bind(this)} />
                    </Container>
                </View>
                <Container>
                    <Modal
                          visible={this.state.modalVisible}
                          animationType={'slide'}
                          onRequestClose={() => this.closeModal()}
                        >
                        <View style={styles.modalContainer}>
                            <View style={styles.innerContainer}>
                                <Text>This is content inside of modal component</Text>
                                    <Button
                                    onPress={() => this.closeModal()}
                                    title="Close modal"
                                    >
                                </Button>
                            </View>
                        </View>
                    </Modal>
                </Container>
            </ScrollView>
          </Container>
        );
    }
    press() {
        //execute any code here
        Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [
                {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
        )
    }
    state = {
        modalVisible: false,
      };

    openModal() {
        this.setState({modalVisible:true});
      }

    closeModal() {
        this.setState({modalVisible:false});
      }
    callModal(){
        Modal
    }


}
const styles = StyleSheet.create({
    header:{
      backgroundColor: "#dc4239",
      justifyContent: 'flex-start'
    },
    scroll: {
        backgroundColor: '#FFFFFF',
        padding: 30,
        flexDirection: 'column'
    },
    label: {
        color: '#0d8898',
        fontSize: 20
    },
    alignRight: {
        alignSelf: 'flex-end'
    },
    textInput: {
        height: 40,
        fontSize: 15,
        backgroundColor: '#FFF'
    },
    transparentButton: {
        marginTop: 30,
        borderColor: '#3B5699',
        borderWidth: 2,
        padding: 20
    },
    buttonBlueText: {
        fontSize: 15,
        color: '#3B5699'
    },
    buttonBigText: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    newButton:{
      padding: 4
    },
    inline: {
        flexDirection: 'row'
    },
    buttonWhiteText: {
        fontSize: 15,
        color: '#FFF',
    },
    buttonBlackText: {
        fontSize: 15,
        color: '#595856'
    },
    primaryButton: {
        backgroundColor: '#34A853'
    },
    footer: {
       marginTop: 100
    },
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        // backgroundColor: 'grey',
    },
    innerContainer: {
        alignItems: 'center',
    },
});
