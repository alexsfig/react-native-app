Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src\\pages\\PokemonDetail.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactNative=require('react-native');var _Container=require('../components/Container');var _Container2=_interopRequireDefault(_Container);var _Button=require('../components/Button');var _Button2=_interopRequireDefault(_Button);var _Label=require('../components/Label');var _Label2=_interopRequireDefault(_Label);var _nativeBase=require('native-base');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var PokemonDetail=function(_Component){_inherits(PokemonDetail,_Component);function PokemonDetail(props){_classCallCheck(this,PokemonDetail);var _this=_possibleConstructorReturn(this,(PokemonDetail.__proto__||Object.getPrototypeOf(PokemonDetail)).call(this,props));_this.state={isLoading:true};return _this;}_createClass(PokemonDetail,[{key:'componentDidMount',value:function componentDidMount(){var _this2=this;return fetch(this.state2).then(function(response){return response.json();}).then(function(responseJson){_this2.setState({isLoading:false,dataSource:responseJson},function(){});}).catch(function(error){console.error(error);});}},{key:'render',value:function render(){var state=this.props.navigation.state;this.state2=state.params.url;if(this.state.isLoading){return _react2.default.createElement(_reactNative.View,{style:(styles.container,styles.horizontal),__source:{fileName:_jsxFileName,lineNumber:40}},_react2.default.createElement(_reactNative.ActivityIndicator,{style:styles.activity,size:120,color:'#c36712',__source:{fileName:_jsxFileName,lineNumber:41}}));}return _react2.default.createElement(_reactNative.ScrollView,{style:styles.scroll,__source:{fileName:_jsxFileName,lineNumber:47}},_react2.default.createElement(_Container2.default,{style:styles.container,__source:{fileName:_jsxFileName,lineNumber:48}},_react2.default.createElement(_nativeBase.H1,{style:styles.textCenter,__source:{fileName:_jsxFileName,lineNumber:49}},this.state.dataSource.name.toUpperCase()),_react2.default.createElement(_reactNative.View,{style:styles.pokemonImages,__source:{fileName:_jsxFileName,lineNumber:52}},_react2.default.createElement(_reactNative.Image,{source:{uri:this.state.dataSource.sprites.front_default},style:styles.PokemonImage,__source:{fileName:_jsxFileName,lineNumber:53}}),_react2.default.createElement(_reactNative.Image,{source:{uri:this.state.dataSource.sprites.back_default},style:styles.PokemonImage,__source:{fileName:_jsxFileName,lineNumber:54}}))));}}]);return PokemonDetail;}(_react.Component);exports.default=PokemonDetail;var styles=_reactNative.StyleSheet.create({scroll:{padding:30,flexDirection:'column'},container:{flex:2,justifyContent:'center'},pokemonImages:{flexDirection:'column',justifyContent:'center',alignItems:'center'},PokemonImage:{resizeMode:_reactNative.Image.resizeMode.contain,width:300,height:300,margin:0,padding:0,borderColor:'#82450d',borderWidth:1},activity:{marginTop:100},textCenter:{textAlign:'center'},horizontal:{flexDirection:'row',justifyContent:'space-around',padding:10}});