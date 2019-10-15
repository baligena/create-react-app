/*! For license information please see content---docs-adding-css-resetb-9-a-f67.8351f86155f89856aa54.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{129:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return p}));var r=n(0),o=n.n(r),a=o.a.createContext({}),i=function(e){var t=o.a.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},u=function(e){var t=i(e.components);return o.a.createElement(a.Provider,{value:t},e.children)};var c="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),s=i(n),p=r,f=s[u+"."+p]||s[p]||l[p]||a;return n?o.a.createElement(f,Object.assign({},{ref:t},c,{components:n})):o.a.createElement(f,Object.assign({},{ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=s;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[c]="string"==typeof e?e:r,i[1]=u;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},130:function(e,t,n){"use strict";e.exports=n(131)},131:function(e,t,n){"use strict";var r=n(132),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,u=o?Symbol.for("react.fragment"):60107,c=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,f=o?Symbol.for("react.concurrent_mode"):60111,b=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,y=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116,h="function"==typeof Symbol&&Symbol.iterator;function v(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);!function(e,t,n,r,o,a,i,u){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,o,a,i,u],l=0;(e=Error(t.replace(/%s/g,(function(){return c[l++]})))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j={};function g(e,t,n){this.props=e,this.context=t,this.refs=j,this.updater=n||O}function w(){}function S(e,t,n){this.props=e,this.context=t,this.refs=j,this.updater=n||O}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&v("85"),this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=g.prototype;var x=S.prototype=new w;x.constructor=S,r(x,g.prototype),x.isPureReactComponent=!0;var C={current:null},N={current:null},_=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,n){var r=void 0,o={},i=null,u=null;if(null!=t)for(r in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(i=""+t.key),t)_.call(t,r)&&!k.hasOwnProperty(r)&&(o[r]=t[r]);var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){for(var l=Array(c),s=0;s<c;s++)l[s]=arguments[s+2];o.children=l}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===o[r]&&(o[r]=c[r]);return{$$typeof:a,type:e,key:i,ref:u,props:o,_owner:N.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var R=/\/+/g,$=[];function T(e,t,n,r){if($.length){var o=$.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function A(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>$.length&&$.push(e)}function I(e,t,n){return null==e?0:function e(t,n,r,o){var u=typeof t;"undefined"!==u&&"boolean"!==u||(t=null);var c=!1;if(null===t)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case a:case i:c=!0}}if(c)return r(o,t,""===n?"."+z(t,0):n),1;if(c=0,n=""===n?".":n+":",Array.isArray(t))for(var l=0;l<t.length;l++){var s=n+z(u=t[l],l);c+=e(u,s,r,o)}else if(null===t||"object"!=typeof t?s=null:s="function"==typeof(s=h&&t[h]||t["@@iterator"])?s:null,"function"==typeof s)for(t=s.call(t),l=0;!(u=t.next()).done;)c+=e(u=u.value,s=n+z(u,l++),r,o);else"object"===u&&v("31","[object Object]"===(r=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":r,"");return c}(e,"",t,n)}function z(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function M(e,t){e.func.call(e.context,t,e.count++)}function F(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?q(e,r,n,(function(e){return e})):null!=e&&(P(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(R,"$&/")+"/")+n)),r.push(e))}function q(e,t,n,r,o){var a="";null!=n&&(a=(""+n).replace(R,"$&/")+"/"),I(e,F,t=T(t,a,r,o)),A(t)}function D(){var e=C.current;return null===e&&v("321"),e}var U={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return q(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;I(e,M,t=T(null,null,t,n)),A(t)},count:function(e){return I(e,(function(){return null}),null)},toArray:function(e){var t=[];return q(e,t,null,(function(e){return e})),t},only:function(e){return P(e)||v("143"),e}},createRef:function(){return{current:null}},Component:g,PureComponent:S,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:b,render:e}},lazy:function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:y,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return D().useCallback(e,t)},useContext:function(e,t){return D().useContext(e,t)},useEffect:function(e,t){return D().useEffect(e,t)},useImperativeHandle:function(e,t,n){return D().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return D().useLayoutEffect(e,t)},useMemo:function(e,t){return D().useMemo(e,t)},useReducer:function(e,t,n){return D().useReducer(e,t,n)},useRef:function(e){return D().useRef(e)},useState:function(e){return D().useState(e)},Fragment:u,StrictMode:c,Suspense:d,createElement:E,cloneElement:function(e,t,n){null==e&&v("267",e);var o=void 0,i=r({},e.props),u=e.key,c=e.ref,l=e._owner;if(null!=t){void 0!==t.ref&&(c=t.ref,l=N.current),void 0!==t.key&&(u=""+t.key);var s=void 0;for(o in e.type&&e.type.defaultProps&&(s=e.type.defaultProps),t)_.call(t,o)&&!k.hasOwnProperty(o)&&(i[o]=void 0===t[o]&&void 0!==s?s[o]:t[o])}if(1===(o=arguments.length-2))i.children=n;else if(1<o){s=Array(o);for(var p=0;p<o;p++)s[p]=arguments[p+2];i.children=s}return{$$typeof:a,type:e.type,key:u,ref:c,props:i,_owner:l}},createFactory:function(e){var t=E.bind(null,e);return t.type=e,t},isValidElement:P,version:"16.8.6",unstable_ConcurrentMode:f,unstable_Profiler:l,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:C,ReactCurrentOwner:N,assign:r}},L={default:U},B=L&&U||L;e.exports=B.default||B},132:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,u,c=i(e),l=1;l<arguments.length;l++){for(var s in n=Object(arguments[l]))o.call(n,s)&&(c[s]=n[s]);if(r){u=r(n);for(var p=0;p<u.length;p++)a.call(n,u[p])&&(c[u[p]]=n[u[p]])}}return c}},51:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return s}));n(130);var r=n(129);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i={id:"adding-css-reset",title:"Adding a CSS Reset",sidebar_label:"Adding CSS Reset"},u=[{value:"index.css",id:"indexcss",children:[]},{value:"Browser support",id:"browser-support",children:[]}],c={rightToc:u},l="wrapper";function s(e){var t=e.components,n=a(e,["components"]);return Object(r.b)(l,o({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This project setup uses ",Object(r.b)("a",o({parentName:"p"},{href:"https://github.com/csstools/postcss-normalize"}),"PostCSS Normalize")," for adding a ",Object(r.b)("a",o({parentName:"p"},{href:"https://cssreset.com/what-is-a-css-reset/"}),"CSS Reset"),"."),Object(r.b)("p",null,"To start using it, add ",Object(r.b)("inlineCode",{parentName:"p"},"@import-normalize;")," anywhere in your CSS file(s). You only need to include it once and duplicate imports are automatically removed. Since you only need to include it once, a good place to add it is ",Object(r.b)("inlineCode",{parentName:"p"},"index.css")," or ",Object(r.b)("inlineCode",{parentName:"p"},"App.css"),"."),Object(r.b)("h2",{id:"indexcss"},Object(r.b)("inlineCode",{parentName:"h2"},"index.css")),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-css"}),"@import-normalize; /* bring in normalize.css styles */\n\n/* rest of app styles */\n")),Object(r.b)("p",null,"You can control which parts of ",Object(r.b)("a",o({parentName:"p"},{href:"https://github.com/csstools/normalize.css"}),"normalize.css")," to use via your project's ",Object(r.b)("a",o({parentName:"p"},{href:"http://browserl.ist/"}),"browserslist"),"."),Object(r.b)("p",null,"Results when ",Object(r.b)("a",o({parentName:"p"},{href:"http://browserl.ist/"}),"browserslist")," is ",Object(r.b)("inlineCode",{parentName:"p"},"last 3 versions"),":"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-css"}),"/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n")),Object(r.b)("p",null,"Results when ",Object(r.b)("a",o({parentName:"p"},{href:"http://browserl.ist/"}),"browserslist")," is ",Object(r.b)("inlineCode",{parentName:"p"},"last 2 versions"),":"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-css"}),"/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n")),Object(r.b)("h2",{id:"browser-support"},"Browser support"),Object(r.b)("p",null,"Browser support is dictated by what normalize.css ",Object(r.b)("a",o({parentName:"p"},{href:"https://github.com/csstools/normalize.css#browser-support"}),"supports"),". As of this writing, it includes:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Chrome (last 3)"),Object(r.b)("li",{parentName:"ul"},"Edge (last 3)"),Object(r.b)("li",{parentName:"ul"},"Firefox (last 3)"),Object(r.b)("li",{parentName:"ul"},"Firefox ESR"),Object(r.b)("li",{parentName:"ul"},"Opera (last 3)"),Object(r.b)("li",{parentName:"ul"},"Safari (last 3)"),Object(r.b)("li",{parentName:"ul"},"iOS Safari (last 2)"),Object(r.b)("li",{parentName:"ul"},"Internet Explorer 9+")))}s.isMDXComponent=!0}}]);