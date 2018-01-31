Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src\\pages\\SecondScreen.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactNative=require('react-native');var _nativeBase=require('native-base');var _Container=require('../components/Container');var _Container2=_interopRequireDefault(_Container);var _Button=require('../components/Button');var _Button2=_interopRequireDefault(_Button);var _Label=require('../components/Label');var _Label2=_interopRequireDefault(_Label);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var SecondScreen=function(_Component){_inherits(SecondScreen,_Component);function SecondScreen(props){_classCallCheck(this,SecondScreen);var _this=_possibleConstructorReturn(this,(SecondScreen.__proto__||Object.getPrototypeOf(SecondScreen)).call(this,props));_this.state={isLoading:true};return _this;}_createClass(SecondScreen,[{key:'componentDidMount',value:function componentDidMount(){var _this2=this;return fetch('https://pokeapi.co/api/v2/pokemon/').then(function(response){return response.json();}).then(function(responseJson){var ds=new _reactNative.ListView.DataSource({rowHasChanged:function rowHasChanged(r1,r2){return r1!==r2;}});_this2.setState({isLoading:false,dataSource:ds.cloneWithRows(responseJson.results)},function(){});}).catch(function(error){console.error(error);});}},{key:'render',value:function render(){var navigate=this.props.navigation.navigate;if(this.state.isLoading){return _react2.default.createElement(_reactNative.View,{style:(styles.container,styles.horizontal),__source:{fileName:_jsxFileName,lineNumber:39}},_react2.default.createElement(_reactNative.ActivityIndicator,{style:styles.activity,size:120,color:'#c36712',__source:{fileName:_jsxFileName,lineNumber:40}}));}return _react2.default.createElement(_reactNative.View,{style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:46}},_react2.default.createElement(_nativeBase.H1,{style:styles.head,__source:{fileName:_jsxFileName,lineNumber:47}},'My Pokedex'),_react2.default.createElement(_reactNative.ListView,{dataSource:this.state.dataSource,renderRow:function renderRow(rowData){return _react2.default.createElement(_Container2.default,{style:{padding:20},__source:{fileName:_jsxFileName,lineNumber:54}},_react2.default.createElement(_reactNative.View,{style:styles.inline,__source:{fileName:_jsxFileName,lineNumber:55}},_react2.default.createElement(_reactNative.View,{style:(styles.contentLeft,styles.textContainer),__source:{fileName:_jsxFileName,lineNumber:56}},_react2.default.createElement(_reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:57}},rowData.name.toUpperCase())),_react2.default.createElement(_reactNative.View,{style:styles.contentRight,__source:{fileName:_jsxFileName,lineNumber:59}},_react2.default.createElement(_Button2.default,{onPress:function onPress(){return navigate('PokemonDetail',{url:rowData.url});},styles:{button:styles.buttonPokemon},title:'Ver Pokemon',__source:{fileName:_jsxFileName,lineNumber:61}},_react2.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:68}},_react2.default.createElement(_reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:69}},'Ver Pokemon'))))));},__source:{fileName:_jsxFileName,lineNumber:50}}));}}]);return SecondScreen;}(_react.Component);exports.default=SecondScreen;var styles=_reactNative.StyleSheet.create({contentRight:{justifyContent:'flex-end'},contentLeft:{justifyContent:'flex-start'},head:{justifyContent:'center',padding:20},textContainer:{width:200},container:{flex:2,justifyContent:'center'},activity:{marginTop:100},horizontal:{flexDirection:'row',justifyContent:'space-around',padding:10},buttonPokemon:{borderColor:'#3B5699',borderWidth:2,height:60,width:150},inline:{flexDirection:'row',justifyContent:'space-between',marginTop:5,marginBottom:5,paddingLeft:20,paddingRight:20}});