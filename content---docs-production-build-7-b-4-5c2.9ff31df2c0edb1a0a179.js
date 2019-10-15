/*! For license information please see content---docs-production-build-7-b-4-5c2.9ff31df2c0edb1a0a179.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));n(130);var r=n(129);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a={id:"production-build",title:"Creating a Production Build"},c=[{value:"Static File Caching",id:"static-file-caching",children:[]},{value:"Profiling",id:"profiling",children:[]}],l={rightToc:c},u="wrapper";function s(e){var t=e.components,n=i(e,["components"]);return Object(r.b)(u,o({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"npm run build")," creates a ",Object(r.b)("inlineCode",{parentName:"p"},"build")," directory with a production build of your app. Inside the ",Object(r.b)("inlineCode",{parentName:"p"},"build/static")," directory will be your JavaScript and CSS files. Each filename inside of ",Object(r.b)("inlineCode",{parentName:"p"},"build/static")," will contain a unique hash of the file contents. This hash in the file name enables ",Object(r.b)("a",o({parentName:"p"},{href:"#static-file-caching"}),"long term caching techniques"),"."),Object(r.b)("p",null,"When running a production build of freshly created Create React App application, there are a number of ",Object(r.b)("inlineCode",{parentName:"p"},".js")," files (called ",Object(r.b)("em",{parentName:"p"},"chunks"),") that are generated and placed in the ",Object(r.b)("inlineCode",{parentName:"p"},"build/static/js")," directory:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"main.[hash].chunk.js")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"This is your ",Object(r.b)("em",{parentName:"li"},"application")," code. ",Object(r.b)("inlineCode",{parentName:"li"},"App.js"),", etc.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"[number].[hash].chunk.js")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"These files can either be ",Object(r.b)("em",{parentName:"li"},"vendor")," code, or ",Object(r.b)("a",o({parentName:"li"},{href:"/docs/code-splitting"}),"code splitting chunks"),". ",Object(r.b)("em",{parentName:"li"},"Vendor")," code includes modules that you've imported from within ",Object(r.b)("inlineCode",{parentName:"li"},"node_modules"),". One of the potential advantages with splitting your ",Object(r.b)("em",{parentName:"li"},"vendor")," and ",Object(r.b)("em",{parentName:"li"},"application")," code is to enable ",Object(r.b)("a",o({parentName:"li"},{href:"#static-file-caching"}),"long term caching techniques")," to improve application loading performance. Since ",Object(r.b)("em",{parentName:"li"},"vendor")," code tends to change less often than the actual ",Object(r.b)("em",{parentName:"li"},"application")," code, the browser will be able to cache them separately, and won't re-download them each time the app code changes.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"runtime-main.[hash].js")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"This is a small chunk of ",Object(r.b)("a",o({parentName:"li"},{href:"https://webpack.js.org/configuration/optimization/#optimization-runtimechunk"}),"webpack runtime")," logic which is used to load and run your application. The contents of this will be embedded in your ",Object(r.b)("inlineCode",{parentName:"li"},"build/index.html")," file by default to save an additional network request. You can opt out of this by specifying ",Object(r.b)("inlineCode",{parentName:"li"},"INLINE_RUNTIME_CHUNK=false")," as documented in our ",Object(r.b)("a",o({parentName:"li"},{href:"/docs/advanced-configuration"}),"advanced configuration"),", which will load this chunk instead of embedding it in your ",Object(r.b)("inlineCode",{parentName:"li"},"index.html"),".")),Object(r.b)("p",null,"If you're using ",Object(r.b)("a",o({parentName:"p"},{href:"/docs/code-splitting"}),"code splitting")," to split up your application, this will create additional chunks in the ",Object(r.b)("inlineCode",{parentName:"p"},"build/static")," folder as well."),Object(r.b)("h2",{id:"static-file-caching"},"Static File Caching"),Object(r.b)("p",null,"Each file inside of the ",Object(r.b)("inlineCode",{parentName:"p"},"build/static")," directory will have a unique hash appended to the filename that is generated based on the contents of the file, which allows you to use ",Object(r.b)("a",o({parentName:"p"},{href:"https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching#invalidating_and_updating_cached_responses"}),"aggressive caching techniques")," to avoid the browser re-downloading your assets if the file contents haven't changed. If the contents of a file changes in a subsequent build, the filename hash that is generated will be different."),Object(r.b)("p",null,"To deliver the best performance to your users, it's best practice to specify a ",Object(r.b)("inlineCode",{parentName:"p"},"Cache-Control")," header for ",Object(r.b)("inlineCode",{parentName:"p"},"index.html"),", as well as the files within ",Object(r.b)("inlineCode",{parentName:"p"},"build/static"),". This header allows you to control the length of time that the browser as well as CDNs will cache your static assets. If you aren't familiar with what ",Object(r.b)("inlineCode",{parentName:"p"},"Cache-Control")," does, see ",Object(r.b)("a",o({parentName:"p"},{href:"https://jakearchibald.com/2016/caching-best-practices/"}),"this article")," for a great introduction."),Object(r.b)("p",null,"Using ",Object(r.b)("inlineCode",{parentName:"p"},"Cache-Control: max-age=31536000")," for your ",Object(r.b)("inlineCode",{parentName:"p"},"build/static")," assets, and ",Object(r.b)("inlineCode",{parentName:"p"},"Cache-Control: no-cache")," for everything else is a safe and effective starting point that ensures your user's browser will always check for an updated ",Object(r.b)("inlineCode",{parentName:"p"},"index.html")," file, and will cache all of the ",Object(r.b)("inlineCode",{parentName:"p"},"build/static")," files for one year. Note that you can use the one year expiration on ",Object(r.b)("inlineCode",{parentName:"p"},"build/static")," safely because the file contents hash is embedded into the filename."),Object(r.b)("h2",{id:"profiling"},"Profiling"),Object(r.b)("p",null,"ReactDOM automatically supports profiling in development mode for v16.5+, but since profiling adds some small\nadditional overhead it is opt-in for production mode. You can opt-in by using the ",Object(r.b)("inlineCode",{parentName:"p"},"--profile")," flag. Use ",Object(r.b)("inlineCode",{parentName:"p"},"npm run build -- --profile")," or ",Object(r.b)("inlineCode",{parentName:"p"},"yarn build --profile")," to enable profiling in the production build. See the ",Object(r.b)("a",o({parentName:"p"},{href:"https://reactjs.org/docs/optimizing-performance.html#profiling-components-with-the-devtools-profiler"}),"React docs")," for details about profiling\nusing the React DevTools."))}s.isMDXComponent=!0},129:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return p}));var r=n(0),o=n.n(r),i=o.a.createContext({}),a=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},c=function(e){var t=a(e.components);return o.a.createElement(i.Provider,{value:t},e.children)};var l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),s=a(n),p=r,f=s[c+"."+p]||s[p]||u[p]||i;return n?o.a.createElement(f,Object.assign({},{ref:t},l,{components:n})):o.a.createElement(f,Object.assign({},{ref:t},l))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=s;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[l]="string"==typeof e?e:r,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},130:function(e,t,n){"use strict";e.exports=n(131)},131:function(e,t,n){"use strict";var r=n(132),o="function"==typeof Symbol&&Symbol.for,i=o?Symbol.for("react.element"):60103,a=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,u=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,f=o?Symbol.for("react.concurrent_mode"):60111,d=o?Symbol.for("react.forward_ref"):60112,b=o?Symbol.for("react.suspense"):60113,h=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116,y="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);!function(e,t,n,r,o,i,a,c){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,r,o,i,a,c],u=0;(e=Error(t.replace(/%s/g,(function(){return l[u++]})))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function v(e,t,n){this.props=e,this.context=t,this.refs=O,this.updater=n||j}function w(){}function C(e,t,n){this.props=e,this.context=t,this.refs=O,this.updater=n||j}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&g("85"),this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=v.prototype;var N=C.prototype=new w;N.constructor=C,r(N,v.prototype),N.isPureReactComponent=!0;var k={current:null},S={current:null},_=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,n){var r=void 0,o={},a=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(a=""+t.key),t)_.call(t,r)&&!x.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var u=Array(l),s=0;s<l;s++)u[s]=arguments[s+2];o.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===o[r]&&(o[r]=l[r]);return{$$typeof:i,type:e,key:a,ref:c,props:o,_owner:S.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var T=/\/+/g,R=[];function $(e,t,n,r){if(R.length){var o=R.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function I(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>R.length&&R.push(e)}function q(e,t,n){return null==e?0:function e(t,n,r,o){var c=typeof t;"undefined"!==c&&"boolean"!==c||(t=null);var l=!1;if(null===t)l=!0;else switch(c){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case i:case a:l=!0}}if(l)return r(o,t,""===n?"."+M(t,0):n),1;if(l=0,n=""===n?".":n+":",Array.isArray(t))for(var u=0;u<t.length;u++){var s=n+M(c=t[u],u);l+=e(c,s,r,o)}else if(null===t||"object"!=typeof t?s=null:s="function"==typeof(s=y&&t[y]||t["@@iterator"])?s:null,"function"==typeof s)for(t=s.call(t),u=0;!(c=t.next()).done;)l+=e(c=c.value,s=n+M(c,u++),r,o);else"object"===c&&g("31","[object Object]"===(r=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":r,"");return l}(e,"",t,n)}function M(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function A(e,t){e.func.call(e.context,t,e.count++)}function U(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?D(e,r,n,(function(e){return e})):null!=e&&(P(e)&&(e=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(T,"$&/")+"/")+n)),r.push(e))}function D(e,t,n,r,o){var i="";null!=n&&(i=(""+n).replace(T,"$&/")+"/"),q(e,U,t=$(t,i,r,o)),I(t)}function F(){var e=k.current;return null===e&&g("321"),e}var L={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return D(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;q(e,A,t=$(null,null,t,n)),I(t)},count:function(e){return q(e,(function(){return null}),null)},toArray:function(e){var t=[];return D(e,t,null,(function(e){return e})),t},only:function(e){return P(e)||g("143"),e}},createRef:function(){return{current:null}},Component:v,PureComponent:C,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:d,render:e}},lazy:function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:h,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return F().useCallback(e,t)},useContext:function(e,t){return F().useContext(e,t)},useEffect:function(e,t){return F().useEffect(e,t)},useImperativeHandle:function(e,t,n){return F().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return F().useLayoutEffect(e,t)},useMemo:function(e,t){return F().useMemo(e,t)},useReducer:function(e,t,n){return F().useReducer(e,t,n)},useRef:function(e){return F().useRef(e)},useState:function(e){return F().useState(e)},Fragment:c,StrictMode:l,Suspense:b,createElement:E,cloneElement:function(e,t,n){null==e&&g("267",e);var o=void 0,a=r({},e.props),c=e.key,l=e.ref,u=e._owner;if(null!=t){void 0!==t.ref&&(l=t.ref,u=S.current),void 0!==t.key&&(c=""+t.key);var s=void 0;for(o in e.type&&e.type.defaultProps&&(s=e.type.defaultProps),t)_.call(t,o)&&!x.hasOwnProperty(o)&&(a[o]=void 0===t[o]&&void 0!==s?s[o]:t[o])}if(1===(o=arguments.length-2))a.children=n;else if(1<o){s=Array(o);for(var p=0;p<o;p++)s[p]=arguments[p+2];a.children=s}return{$$typeof:i,type:e.type,key:c,ref:l,props:a,_owner:u}},createFactory:function(e){var t=E.bind(null,e);return t.type=e,t},isValidElement:P,version:"16.8.6",unstable_ConcurrentMode:f,unstable_Profiler:u,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:k,ReactCurrentOwner:S,assign:r}},z={default:L},V=z&&L||z;e.exports=V.default||V},132:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,c,l=a(e),u=1;u<arguments.length;u++){for(var s in n=Object(arguments[u]))o.call(n,s)&&(l[s]=n[s]);if(r){c=r(n);for(var p=0;p<c.length;p++)i.call(n,c[p])&&(l[c[p]]=n[c[p]])}}return l}}}]);