Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName="src/screens/categorias/perfil/index.js";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require("react");var _react2=_interopRequireDefault(_react);var _reactNative=require("react-native");var _nativeBase=require("native-base");var _styles=require("./styles");var _styles2=_interopRequireDefault(_styles);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var logo=require("../../../assets/background/test-face.jpg");var deviceWidth=_reactNative.Dimensions.get("window").width;var Categorias=function(_Component){_inherits(Categorias,_Component);function Categorias(){_classCallCheck(this,Categorias);return _possibleConstructorReturn(this,(Categorias.__proto__||Object.getPrototypeOf(Categorias)).apply(this,arguments));}_createClass(Categorias,[{key:"render",value:function render(){var _this2=this;var state=this.props.navigation.state;var navigate=this.props.navigation.navigate;return _react2.default.createElement(_nativeBase.Container,{style:_styles2.default.container,__source:{fileName:_jsxFileName,lineNumber:31}},_react2.default.createElement(_nativeBase.Header,{androidStatusBarColor:"#031328",style:_styles2.default.header,__source:{fileName:_jsxFileName,lineNumber:32}},_react2.default.createElement(_nativeBase.Left,{__source:{fileName:_jsxFileName,lineNumber:33}},_react2.default.createElement(_nativeBase.Button,{transparent:true,onPress:function onPress(){return _this2.props.navigation.goBack();},__source:{fileName:_jsxFileName,lineNumber:34}},_react2.default.createElement(_nativeBase.Icon,{style:{color:"#FFFFFF"},name:"arrow-back",__source:{fileName:_jsxFileName,lineNumber:35}}))),_react2.default.createElement(_nativeBase.Body,{__source:{fileName:_jsxFileName,lineNumber:38}},_react2.default.createElement(_nativeBase.Title,{__source:{fileName:_jsxFileName,lineNumber:39}},"Perfil")),_react2.default.createElement(_nativeBase.Right,{__source:{fileName:_jsxFileName,lineNumber:41}})),_react2.default.createElement(_nativeBase.Container,{__source:{fileName:_jsxFileName,lineNumber:43}},_react2.default.createElement(_nativeBase.Card,{style:_styles2.default.mb,__source:{fileName:_jsxFileName,lineNumber:44}},_react2.default.createElement(_nativeBase.CardItem,{bordered:true,__source:{fileName:_jsxFileName,lineNumber:45}},_react2.default.createElement(_nativeBase.Left,{__source:{fileName:_jsxFileName,lineNumber:46}},_react2.default.createElement(_reactNative.Image,{source:logo,style:{alignSelf:"center",height:deviceWidth/2-50,width:deviceWidth/2-50,marginVertical:5,borderRadius:100,borderColor:"#c36712",borderWidth:3},__source:{fileName:_jsxFileName,lineNumber:47}}),_react2.default.createElement(_nativeBase.Body,{__source:{fileName:_jsxFileName,lineNumber:56}},_react2.default.createElement(_nativeBase.Left,{__source:{fileName:_jsxFileName,lineNumber:57}},_react2.default.createElement(_nativeBase.Text,{__source:{fileName:_jsxFileName,lineNumber:58}},state.params.name),_react2.default.createElement(_nativeBase.Text,{note:true,__source:{fileName:_jsxFileName,lineNumber:59}},"April 15, 2016"),_react2.default.createElement(_nativeBase.Icon,{name:"star",style:{fontSize:20,color:'#c36712'},__source:{fileName:_jsxFileName,lineNumber:60}}),_react2.default.createElement(_nativeBase.Text,{style:{fontSize:20,color:'#c36712'},__source:{fileName:_jsxFileName,lineNumber:61}},"Ranking 3"))))),_react2.default.createElement(_nativeBase.CardItem,{__source:{fileName:_jsxFileName,lineNumber:67}},_react2.default.createElement(_nativeBase.Body,{__source:{fileName:_jsxFileName,lineNumber:68}},_react2.default.createElement(_nativeBase.Text,{__source:{fileName:_jsxFileName,lineNumber:69}},"Campeon .... nacional de surf"),_react2.default.createElement(_nativeBase.Text,{__source:{fileName:_jsxFileName,lineNumber:72}},"Inicio a los ocho a\xF1os de edad ...... Lorem ipsum"),_react2.default.createElement(_nativeBase.Text,{__source:{fileName:_jsxFileName,lineNumber:75}},"Ola Favorita: ..adfs.."))))));}}]);return Categorias;}(_react.Component);exports.default=Categorias;