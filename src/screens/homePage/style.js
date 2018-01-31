const React = require("react-native");
const { Platform, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  drawerCover: {
    height: deviceHeight / 3.5,
    width: deviceWidth,
    marginBottom: 30
  },
    row:{
      padding: 10,
      backgroundColor: '#FFFFFF'
    },
    row2:{
      height: 700,
      backgroundColor: "#e7a73d"
    },
    imageContainer: {
      flex: 1,
      width: null,
      height: null,

    },
    logoContainer: {
      width: null,
      height: null,
      justifyContent: 'center',
      marginTop: 30,
      alignItems: 'center',
    },
    logo: {
      width: 120,
      height: 120
    },
    logo2: {
      width: 160,
      height: 100
    },
    txt:{
      padding: 20
    },
    header:{
      backgroundColor: "#003f90",
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
}
