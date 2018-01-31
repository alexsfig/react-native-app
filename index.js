// import React from "react";
// import { AppRegistry } from "react-native";
// import MainPage from "./src/pages/MainPage";
// import { StackNavigator } from "react-navigation";
// import App from "./src/pages/App";
// import SecondScreen from "./src/pages/SecondScreen";

// const reactNavigationSample = props => {
//   return <App navigation={props.navigation} />;
// };

// const SimpleApp = StackNavigator({
//   MainPage: { screen: reactNavigationSample },
//   Home: { screen: App },
//   SecondScreen: { screen: SecondScreen, title: "Second Screen" }
// });

// AppRegistry.registerComponent("ReactCalculator", () => SimpleApp);

import { AppRegistry } from "react-native";

import App from "./App";
AppRegistry.registerComponent("Swell", () => App);