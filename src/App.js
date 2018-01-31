import React from "react";
import { Root } from "native-base";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import Home from "./screens/home/";
import Header from "./screens/header/";
import Header1 from "./screens/header/1";
import Header2 from "./screens/header/2";
import Header3 from "./screens/header/3";
import Header4 from "./screens/header/4";
import Header5 from "./screens/header/5";
import Header6 from "./screens/header/6";
import Header7 from "./screens/header/7";
import Header8 from "./screens/header/8";
import Homepage from "./screens/homePage";
import SecondScreen from "./pages/SecondScreen/";
import PokemonDetail from "./pages/PokemonDetail/";
import SideBar from "./screens/sidebar";
const Drawer = DrawerNavigator(
  {
    SideBar: { screen: SideBar },
    Homepage: {screen: Homepage},
    Header: { screen: Header },
  },
  {
    initialRouteName: "Homepage",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  },
)
const AppNavigator = StackNavigator(
  {
    Drawer: {
      screen: Drawer
    },
    Home: { screen: Home,  },
    Header1: { screen: Header1 },
    Header2: { screen: Header2 },
    Header3: { screen: Header3 },
    Header4: { screen: Header4 },
    Header5: { screen: Header5 },
    Header6: { screen: Header6 },
    Header7: { screen: Header7 },
    Header8: { screen: Header8 },
    SecondScreen: {screen: SecondScreen},
    PokemonDetail: {screen: PokemonDetail}
  },
  {
    initialRouteName: "Drawer",
    headerMode: "none"
  });

export default () =>
  <Root>
    <AppNavigator />
  </Root>;
