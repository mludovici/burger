webpackJsonp([1],{150:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function i(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var l=t(0),u=t.n(l),s=t(151),c=t(50),A=t(4),d=t(6),p=t(163),b=t.n(p),h=t(10),g=t(51),m=t(12),f=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),v=function(e){function n(){var e,t,i,l;a(this,n);for(var u=arguments.length,s=Array(u),c=0;c<u;c++)s[c]=arguments[c];return t=i=o(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(s))),i.state={controls:{email:{elementType:"input",elementConfig:{type:"email",placeholder:"Email Address"},value:"",validation:{required:!0,isEmail:!0},validationErrorMessage:"Please enter a valid email.",valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Password"},value:"",validation:{required:!0,minLength:6},validationErrorMessage:"At least 6 characters",valid:!1,touched:!1}},isSignup:!0},i.inputChangedHandler=function(e,n){var t=Object(m.a)(i.state.controls,r({},n,Object(m.a)(i.state.controls[n],{value:e.target.value,valid:i.checkValidity(e.target.value,i.state.controls[n].validation),touched:!0})));i.setState({controls:t})},i.submitHandler=function(e){e.preventDefault(),i.props.onAuth(i.state.controls.email.value,i.state.controls.password.value,i.state.isSignup)},i.switchAuthModeHandler=function(){i.setState(function(e){return{isSignup:!e.isSignup}})},l=t,o(i,l)}return i(n,e),f(n,[{key:"componentDidMount",value:function(){!this.props.buildingBurger&&this.props.authRedirectPath&&this.props.onSetAuthRedirectPath()}},{key:"checkValidity",value:function(e,n){var t=!0;if(!n)return!0;if(n.required&&(t=""!==e.trim()&&t),n.minLength&&(t=e.length>=n.minLength&&t),n.maxLength&&(t=e.length<=n.maxLength&&t),n.isEmail){t=/[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&t}if(n.isNumeric){t=/^\d+$/.test(e)&&t}return t}},{key:"render",value:function(){var e=this,n=[];for(var t in this.state.controls)n.push({id:t,config:this.state.controls[t]});var r=n.map(function(n){return u.a.createElement(s.a,{key:n.id,label:n.config.elementConfig.placeholder,elementType:n.config.elementType,elementConfig:n.config.elementConfig,value:n.config.value,invalid:!n.config.valid,shouldValidate:n.config.validation,touched:n.config.touched,errorMessage:n.config.validationErrorMessage,changed:function(t){return e.inputChangedHandler(t,n.id)}})});this.props.loading&&(r=u.a.createElement(g.a,null));var a=null;this.props.error&&(a=u.a.createElement("p",null,this.props.error.message));var o=null;return this.props.isAuthenticated&&(o=u.a.createElement(d.c,{to:this.props.authRedirectPath})),u.a.createElement("div",{className:b.a.Auth},o,a,u.a.createElement("form",{onSubmit:this.submitHandler},r,u.a.createElement(c.a,{btnType:"Success"},"SUBMIT")),u.a.createElement(c.a,{clicked:this.switchAuthModeHandler,btnType:"Danger"},"SWITCH TO ",this.state.isSignup?"SIGNIN":"SIGNUP"))}}]),n}(l.Component),C=function(e){return{loading:e.auth.loading,error:e.auth.error,isAuthenticated:null!==e.auth.token,buildingBurger:e.burgerBuilder.building,authRedirectPath:e.auth.authRedirectPath}},_=function(e){return{onAuth:function(n,t,r){return e(h.b(n,t,r))},onSetAuthRedirectPath:function(){return e(h.j("/"))}}};n.default=Object(A.b)(C,_)(v)},151:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(152),i=t.n(o),l=function(e){var n=null,t=[i.a.InputElement],r=null;switch(e.invalid&&e.shouldValidate&&e.touched&&(t.push(i.a.Invalid),r=a.a.createElement("p",{className:i.a.ValidationError},"Please enter a valid value for ",e.elementType,"!"),e.errorMessage&&(r=a.a.createElement("p",{className:i.a.ValidationError},"Please enter a valid value for ",e.elementType,"! ",e.errorMessage))),e.elementType){case"input":n=a.a.createElement("input",Object.assign({className:t.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":n=a.a.createElement("textarea",Object.assign({className:t.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":n=a.a.createElement("select",Object.assign({invalid:"false",className:t.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}),e.elementConfig.options.map(function(e){return a.a.createElement("option",{key:e.value,value:e.value},e.displayValue)}));break;default:n=a.a.createElement("input",Object.assign({className:t.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}))}return a.a.createElement("div",{className:i.a.Input},a.a.createElement("label",{className:i.a.Label},e.label),n,r)};n.a=l},152:function(e,n,t){var r=t(153);"string"===typeof r&&(r=[[e.i,r,""]]);var a={};a.transform=void 0;t(147)(r,a);r.locals&&(e.exports=r.locals)},153:function(e,n,t){n=e.exports=t(146)(!0),n.push([e.i,".Input__Input__1VROp{width:100%;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box}.Input__Label__1tOSX{font-weight:700;display:block;margin-bottom:8px}.Input__InputElement__3TB0k{outline:none;border:1px solid #ccc;background-color:#fff;font:inherit;padding:6px 10px;display:block;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.Input__InputElement__3TB0k:focus{outline:none;background-color:#ccc}.Input__Invalid__38X2d{border:1px solid red;background-color:#fda49a}.Input__ValidationError__ukId8{color:red;margin:5px 0}","",{version:3,sources:["C:/Users/ludov/Desktop/Progr/burger-master/src/components/UI/Input/Input.css"],names:[],mappings:"AAAA,qBACI,WAAY,AACZ,aAAc,AACd,8BAA+B,AACvB,qBAAuB,CAElC,AAED,qBACI,gBAAkB,AAClB,cAAe,AACf,iBAAmB,CACtB,AAED,4BACI,aAAc,AACd,sBAAuB,AACvB,sBAAwB,AACxB,aAAc,AACd,iBAAkB,AAClB,cAAe,AACf,WAAY,AACZ,8BAA+B,AACvB,qBAAuB,CAClC,AAED,kCACI,aAAc,AACd,qBAAuB,CAE1B,AAED,uBACI,qBAAsB,AACtB,wBAA0B,CAC7B,AAED,+BACI,UAAW,AACX,YAAc,CACjB",file:"Input.css",sourcesContent:[".Input {\r\n    width: 100%;\r\n    padding: 10px;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n\r\n}\r\n\r\n.Label {\r\n    font-weight: bold;\r\n    display: block;\r\n    margin-bottom: 8px;\r\n}\r\n\r\n.InputElement {\r\n    outline: none;\r\n    border: 1px solid #ccc;\r\n    background-color: white;\r\n    font: inherit;\r\n    padding: 6px 10px;\r\n    display: block;\r\n    width: 100%;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n}\r\n\r\n.InputElement:focus {\r\n    outline: none;\r\n    background-color: #ccc;\r\n\r\n}\r\n\r\n.Invalid {\r\n    border: 1px solid red;\r\n    background-color: #FDA49A;\r\n}\r\n\r\n.ValidationError {\r\n    color: red;\r\n    margin: 5px 0;\r\n}"],sourceRoot:""}]),n.locals={Input:"Input__Input__1VROp",Label:"Input__Label__1tOSX",InputElement:"Input__InputElement__3TB0k",Invalid:"Input__Invalid__38X2d",ValidationError:"Input__ValidationError__ukId8"}},163:function(e,n,t){var r=t(164);"string"===typeof r&&(r=[[e.i,r,""]]);var a={};a.transform=void 0;t(147)(r,a);r.locals&&(e.exports=r.locals)},164:function(e,n,t){n=e.exports=t(146)(!0),n.push([e.i,".Auth__Auth__1TInt{margin:20px auto;width:80%;text-align:center;-webkit-box-shadow:0 2px 3px #ccc;box-shadow:0 2px 3px #ccc;border:1px solid #eee;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box}.Auth__Input__G6tYX{display:block}@media (min-width:600px){.Auth__Auth__1TInt{width:500px}}","",{version:3,sources:["C:/Users/ludov/Desktop/Progr/burger-master/src/containers/Auth/Auth.css"],names:[],mappings:"AAAA,mBACI,iBAAkB,AAClB,UAAW,AACX,kBAAmB,AACnB,kCAAmC,AAC3B,0BAA2B,AACnC,sBAAuB,AACvB,aAAc,AACd,8BAA+B,AACvB,qBAAuB,CAClC,AAED,oBACI,aAAe,CAClB,AAED,yBACI,mBACI,WAAa,CAChB,CACJ",file:"Auth.css",sourcesContent:[".Auth {\r\n    margin: 20px auto;\r\n    width: 80%;\r\n    text-align: center;\r\n    -webkit-box-shadow: 0 2px 3px #ccc;\r\n            box-shadow: 0 2px 3px #ccc;\r\n    border: 1px solid #eee;\r\n    padding: 10px;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n}\r\n\r\n.Input {\r\n    display: block;\r\n}\r\n\r\n@media (min-width: 600px) {\r\n    .Auth {\r\n        width: 500px;\r\n    }\r\n}"],sourceRoot:""}]),n.locals={Auth:"Auth__Auth__1TInt",Input:"Auth__Input__G6tYX"}}});
//# sourceMappingURL=1.2f5f4cd9.chunk.js.map