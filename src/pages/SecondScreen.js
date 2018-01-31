import React, { Component } from 'react';
import {BackHandler} from 'react-native'
import { ActivityIndicator, ListView, Text, View, StyleSheet, Image, Button } from 'react-native';
import {H1, H4} from  "native-base" 
import Container from '../components/Container';
import Button2 from '../components/Button';
import Label from '../components/Label';

export default class SecondScreen extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoading: true
      };
    }
   
    componentDidMount() {

    return fetch('https://pokeapi.co/api/v2/pokemon/')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson.results),
        }, function() {
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const {navigate} = this.props.navigation;
    if (this.state.isLoading) {
      return (
        <View style={styles.container, styles.horizontal}>
          <ActivityIndicator  style={styles.activity} size={120} color="#c36712"/>
        </View>
      );
    }

    return (
      <View style={{flex: 1}}>
        <H1 style={styles.head}>
          My Pokedex  
        </H1>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={
            (rowData) => 
              <Container style= {{ padding: 20 }}>
                <View style={styles.inline}>
                  <View style={styles.contentLeft, styles.textContainer}>
                    <Text>{rowData.name.toUpperCase()}</Text>
                  </View>
                  <View style={styles.contentRight}>

                    <Button2  
                      onPress={() =>
                        navigate('PokemonDetail', { url: rowData.url })
                      }
                      styles={{button:styles.buttonPokemon}}
                      title="Ver Pokemon"
                    >
                      <View>
                        <Text>
                          Ver Pokemon
                        </Text>
                      </View>

                    </Button2>
                  </View>
                </View>
              </Container>
            }
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  contentRight:{
    justifyContent: 'flex-end' 
  },
  contentLeft: {
    justifyContent: 'flex-start'
  },
  head:{
    justifyContent: 'center',
    padding: 20 
  },
  textContainer: {
   width: 200 
  },
  container: {
    flex: 2,
    justifyContent: 'center'
  },
  activity: {
    marginTop: 100
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  },
  buttonPokemon:{
    borderColor: '#3B5699',
    borderWidth: 2,
    height: 60,
    width: 150,
  },
  inline:{
    flexDirection: 'row',
    justifyContent: 'space-between', 
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 20,
    paddingRight: 20
  }
})
