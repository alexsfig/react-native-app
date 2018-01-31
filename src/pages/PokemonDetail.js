import React, { Component } from 'react';
import {BackHandler} from 'react-native'
import { ActivityIndicator, ListView, Text, View, StyleSheet, Image, Button, ScrollView} from 'react-native';
 
import Container from '../components/Container';
import Button2 from '../components/Button';
import Label from '../components/Label';
import { H1 } from "native-base";

export default class PokemonDetail extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoading: true
      }
    }
    
    componentDidMount() {
      return fetch(this.state2)
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            isLoading: false,
            dataSource: responseJson,
          }, function() {
            // do something with new state
          });
        })
        .catch((error) => {
        console.error(error);
      });
  }

  render() {

    const {state} = this.props.navigation;
    this.state2 = state.params.url;
    if (this.state.isLoading) {
      return (
        <View style={styles.container, styles.horizontal}>
          <ActivityIndicator  style={styles.activity} size={120} color="#c36712"/>
        </View>
      );
    }

    return (
      <ScrollView style={styles.scroll}>
        <Container  style={styles.container}>
          <H1 style={styles.textCenter}>
            {this.state.dataSource.name.toUpperCase()}
          </H1>
          <View style={ styles.pokemonImages} >
            <Image  source = {{uri: this.state.dataSource.sprites.front_default}} style={ styles.PokemonImage }/>
            <Image  source = {{uri: this.state.dataSource.sprites.back_default}} style={ styles.PokemonImage }/>
          </View>
        </Container>
      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  scroll: {
    padding: 30,
    flexDirection: 'column'
  },
  container: {
    flex: 2,
    justifyContent: 'center'
  },
  pokemonImages: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center' 
  },
  PokemonImage:{
    resizeMode: Image.resizeMode.contain,
    width: 300, 
    height: 300, 
    margin: 0, 
    padding: 0,
    borderColor: '#82450d',
    borderWidth: 1
  },
  activity:{
    marginTop: 100
  },
  textCenter:{
    textAlign: 'center' 
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
})
