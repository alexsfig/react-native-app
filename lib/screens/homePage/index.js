Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src\\screens\\homePage\\index.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactNative=require('react-native');var _nativeBase=require('native-base');var _Container=require('../../components/Container');var _Container2=_interopRequireDefault(_Container);var _Button=require('../../components/Button');var _Button2=_interopRequireDefault(_Button);var _Label=require('../../components/Label');var _Label2=_interopRequireDefault(_Label);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Login=function(_Component){_inherits(Login,_Component);function Login(){var _ref;var _temp,_this,_ret;_classCallCheck(this,Login);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=Login.__proto__||Object.getPrototypeOf(Login)).call.apply(_ref,[this].concat(args))),_this),_this.state={modalVisible:false},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(Login,[{key:'render',value:function render(){var _this2=this;return _react2.default.createElement(_Container2.default,{__source:{fileName:_jsxFileName,lineNumber:24}},_react2.default.createElement(_reactNative.StatusBar,{barStyle:'light-content',__source:{fileName:_jsxFileName,lineNumber:25}}),_react2.default.createElement(_nativeBase.Header,{style:styles.header,androidStatusBarColor:'#f99993',iosBarStyle:'light-content',__source:{fileName:_jsxFileName,lineNumber:26}},_react2.default.createElement(_nativeBase.Left,{__source:{fileName:_jsxFileName,lineNumber:29}},_react2.default.createElement(_Button2.default,{onPress:function onPress(){return _this2.props.navigation.navigate("DrawerOpen");},label:'My Pokedex',styles:{button:styles.alignRight,button:styles.newButton,label:styles.label},__source:{fileName:_jsxFileName,lineNumber:30}},_react2.default.createElement(_reactNative.View,{style:styles.inline,__source:{fileName:_jsxFileName,lineNumber:34}},_react2.default.createElement(_nativeBase.Icon,{name:'menu',style:{color:"#FFFFFF"},__source:{fileName:_jsxFileName,lineNumber:35}}))))),_react2.default.createElement(_Container2.default,{__source:{fileName:_jsxFileName,lineNumber:41}},_react2.default.createElement(_nativeBase.H1,{__source:{fileName:_jsxFileName,lineNumber:42}},'Bienvenido a SWELL aca tendras acceso a toda la informacion del deporte de las olas')));}},{key:'press',value:function press(){_reactNative.Alert.alert('Alert Title','My Alert Msg',[{text:'Ask me later',onPress:function onPress(){return console.log('Ask me later pressed');}},{text:'Cancel',onPress:function onPress(){return console.log('Cancel Pressed');},style:'cancel'},{text:'OK',onPress:function onPress(){return console.log('OK Pressed');}}],{cancelable:false});}},{key:'openModal',value:function openModal(){this.setState({modalVisible:true});}},{key:'closeModal',value:function closeModal(){this.setState({modalVisible:false});}},{key:'callModal',value:function callModal(){_reactNative.Modal;}}]);return Login;}(_react.Component);exports.default=Login;var styles=_reactNative.StyleSheet.create({header:{backgroundColor:"#dc4239",justifyContent:'flex-start'},scroll:{backgroundColor:'#FFFFFF',padding:30,flexDirection:'column'},label:{color:'#0d8898',fontSize:20},alignRight:{alignSelf:'flex-end'},textInput:{height:40,fontSize:15,backgroundColor:'#FFF'},transparentButton:{marginTop:30,borderColor:'#3B5699',borderWidth:2,padding:20},buttonBlueText:{fontSize:15,color:'#3B5699'},buttonBigText:{fontSize:15,fontWeight:'bold'},newButton:{padding:4},inline:{flexDirection:'row'},buttonWhiteText:{fontSize:15,color:'#FFF'},buttonBlackText:{fontSize:15,color:'#595856'},primaryButton:{backgroundColor:'#34A853'},footer:{marginTop:100},container:{flex:1,justifyContent:'center'},modalContainer:{flex:1,justifyContent:'center'},innerContainer:{alignItems:'center'}});