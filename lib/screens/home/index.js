Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName="src\\screens\\home\\index.js";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require("react");var _react2=_interopRequireDefault(_react);var _reactNative=require("react-native");var _nativeBase=require("native-base");var _styles=require("./styles");var _styles2=_interopRequireDefault(_styles);var _Container=require("../../components/Container");var _Container2=_interopRequireDefault(_Container);var _Button=require("../../components/Button");var _Button2=_interopRequireDefault(_Button);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var launchscreenBg=require("../../assets/background/launchscreen-bg.png");var launchscreenLogo=require("../../assets/background/logo.png");var Home=function(_Component){_inherits(Home,_Component);function Home(){_classCallCheck(this,Home);return _possibleConstructorReturn(this,(Home.__proto__||Object.getPrototypeOf(Home)).apply(this,arguments));}_createClass(Home,[{key:"render",value:function render(){var navigate=this.props.navigation.navigate;return _react2.default.createElement(_nativeBase.Container,{__source:{fileName:_jsxFileName,lineNumber:16}},_react2.default.createElement(_reactNative.ImageBackground,{source:launchscreenBg,style:_styles2.default.imageContainer,__source:{fileName:_jsxFileName,lineNumber:17}},_react2.default.createElement(_reactNative.View,{style:_styles2.default.logoContainer,__source:{fileName:_jsxFileName,lineNumber:18}},_react2.default.createElement(_reactNative.ImageBackground,{source:launchscreenLogo,style:_styles2.default.logo,__source:{fileName:_jsxFileName,lineNumber:19}})),_react2.default.createElement(_nativeBase.Container,{__source:{fileName:_jsxFileName,lineNumber:22}},_react2.default.createElement(_Button2.default,{styles:{button:_styles2.default.orangeButton},title:"Open modal",onPress:function onPress(){return navigate("Tes");},__source:{fileName:_jsxFileName,lineNumber:23}},_react2.default.createElement(_reactNative.View,{style:_styles2.default.inline,__source:{fileName:_jsxFileName,lineNumber:28}},_react2.default.createElement(_nativeBase.Text,{style:[_styles2.default.buttonBlueText,_styles2.default.buttonBigText],__source:{fileName:_jsxFileName,lineNumber:29}},"  Empezemos "),_react2.default.createElement(_nativeBase.Text,{style:_styles2.default.buttonBlueText,__source:{fileName:_jsxFileName,lineNumber:30}},"!!")))),_react2.default.createElement(_reactNative.View,{style:_styles2.default.footer,__source:{fileName:_jsxFileName,lineNumber:34}},_react2.default.createElement(_nativeBase.H3,{style:_styles2.default.text,__source:{fileName:_jsxFileName,lineNumber:36}},"Bienvenidos a SWELL"),_react2.default.createElement(_reactNative.View,{style:{marginTop:8},__source:{fileName:_jsxFileName,lineNumber:37}}),_react2.default.createElement(_nativeBase.H3,{style:_styles2.default.text,__source:{fileName:_jsxFileName,lineNumber:38}},"Federacion Salvadore\xF1a de SURF"))));}}]);return Home;}(_react.Component);exports.default=Home;