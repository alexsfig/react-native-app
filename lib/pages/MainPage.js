Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName="src\\pages\\MainPage.js";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require("react");var _react2=_interopRequireDefault(_react);var _reactNative=require("react-native");var _Container=require("../components/Container");var _Container2=_interopRequireDefault(_Container);var _Button=require("../components/Button");var _Button2=_interopRequireDefault(_Button);var _Label=require("../components/Label");var _Label2=_interopRequireDefault(_Label);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var launchscreenBg=require("../assets/background/launchscreen-bg.png");var Home=function(_Component){_inherits(Home,_Component);function Home(){_classCallCheck(this,Home);return _possibleConstructorReturn(this,(Home.__proto__||Object.getPrototypeOf(Home)).apply(this,arguments));}_createClass(Home,[{key:"render",value:function render(){var navigate=this.props.navigation.navigate;return _react2.default.createElement(_reactNative.ImageBackground,{resizeMode:'contain',source:launchscreenBg,style:styles.imageContainer,__source:{fileName:_jsxFileName,lineNumber:19}},_react2.default.createElement(_reactNative.View,{style:styles.logoContainer,__source:{fileName:_jsxFileName,lineNumber:20}}),_react2.default.createElement(_reactNative.View,{style:{alignItems:"center",marginBottom:50,backgroundColor:"transparent"},__source:{fileName:_jsxFileName,lineNumber:22}},_react2.default.createElement(_reactNative.View,{style:{marginTop:8},__source:{fileName:_jsxFileName,lineNumber:29}}),_react2.default.createElement(_reactNative.View,{style:{marginTop:8},__source:{fileName:_jsxFileName,lineNumber:30}})),_react2.default.createElement(_reactNative.View,{style:{marginBottom:80},__source:{fileName:_jsxFileName,lineNumber:32}},_react2.default.createElement(_Button2.default,{style:{backgroundColor:"#6FAF98",alignSelf:"center"},onPress:function onPress(){return navigate("Home");},__source:{fileName:_jsxFileName,lineNumber:33}},_react2.default.createElement(_reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:37}},"Lets Go!"))));}}]);return Home;}(_react.Component);var styles=_reactNative.StyleSheet.create({imageContainer:{flex:1,width:null,height:null},logoContainer:{flex:1,marginTop:6,marginBottom:30},logo:{position:"absolute",left:50,top:60,width:280,height:100},text:{color:"#D8D8D8",bottom:6,marginTop:5}});exports.default=Home;