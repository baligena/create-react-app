/*! For license information please see content---docs-getting-started-8-d-0-4ab.7690bb673a2ba42e433e.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{129:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r),o=a.a.createContext({}),c=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},i=function(e){var t=c(e.components);return a.a.createElement(o.Provider,{value:t},e.children)};var l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),p=c(n),s=r,b=p[i+"."+s]||p[s]||u[s]||o;return n?a.a.createElement(b,Object.assign({},{ref:t},l,{components:n})):a.a.createElement(b,Object.assign({},{ref:t},l))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[l]="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},130:function(e,t,n){"use strict";e.exports=n(131)},131:function(e,t,n){"use strict";var r=n(132),a="function"==typeof Symbol&&Symbol.for,o=a?Symbol.for("react.element"):60103,c=a?Symbol.for("react.portal"):60106,i=a?Symbol.for("react.fragment"):60107,l=a?Symbol.for("react.strict_mode"):60108,u=a?Symbol.for("react.profiler"):60114,p=a?Symbol.for("react.provider"):60109,s=a?Symbol.for("react.context"):60110,b=a?Symbol.for("react.concurrent_mode"):60111,d=a?Symbol.for("react.forward_ref"):60112,f=a?Symbol.for("react.suspense"):60113,m=a?Symbol.for("react.memo"):60115,y=a?Symbol.for("react.lazy"):60116,h="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);!function(e,t,n,r,a,o,c,i){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,r,a,o,c,i],u=0;(e=Error(t.replace(/%s/g,(function(){return l[u++]})))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function v(e,t,n){this.props=e,this.context=t,this.refs=O,this.updater=n||j}function w(){}function N(e,t,n){this.props=e,this.context=t,this.refs=O,this.updater=n||j}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&g("85"),this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=v.prototype;var k=N.prototype=new w;k.constructor=N,r(k,v.prototype),k.isPureReactComponent=!0;var S={current:null},x={current:null},C=Object.prototype.hasOwnProperty,_={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,n){var r=void 0,a={},c=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)C.call(t,r)&&!_.hasOwnProperty(r)&&(a[r]=t[r]);var l=arguments.length-2;if(1===l)a.children=n;else if(1<l){for(var u=Array(l),p=0;p<l;p++)u[p]=arguments[p+2];a.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===a[r]&&(a[r]=l[r]);return{$$typeof:o,type:e,key:c,ref:i,props:a,_owner:x.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var R=/\/+/g,T=[];function $(e,t,n,r){if(T.length){var a=T.pop();return a.result=e,a.keyPrefix=t,a.func=n,a.context=r,a.count=0,a}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function I(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>T.length&&T.push(e)}function A(e,t,n){return null==e?0:function e(t,n,r,a){var i=typeof t;"undefined"!==i&&"boolean"!==i||(t=null);var l=!1;if(null===t)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case o:case c:l=!0}}if(l)return r(a,t,""===n?"."+q(t,0):n),1;if(l=0,n=""===n?".":n+":",Array.isArray(t))for(var u=0;u<t.length;u++){var p=n+q(i=t[u],u);l+=e(i,p,r,a)}else if(null===t||"object"!=typeof t?p=null:p="function"==typeof(p=h&&t[h]||t["@@iterator"])?p:null,"function"==typeof p)for(t=p.call(t),u=0;!(i=t.next()).done;)l+=e(i=i.value,p=n+q(i,u++),r,a);else"object"===i&&g("31","[object Object]"===(r=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":r,"");return l}(e,"",t,n)}function q(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function M(e,t){e.func.call(e.context,t,e.count++)}function Y(e,t,n){var r=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?D(e,r,n,(function(e){return e})):null!=e&&(P(e)&&(e=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(R,"$&/")+"/")+n)),r.push(e))}function D(e,t,n,r,a){var o="";null!=n&&(o=(""+n).replace(R,"$&/")+"/"),A(e,Y,t=$(t,o,r,a)),I(t)}function F(){var e=S.current;return null===e&&g("321"),e}var L={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return D(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;A(e,M,t=$(null,null,t,n)),I(t)},count:function(e){return A(e,(function(){return null}),null)},toArray:function(e){var t=[];return D(e,t,null,(function(e){return e})),t},only:function(e){return P(e)||g("143"),e}},createRef:function(){return{current:null}},Component:v,PureComponent:N,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:p,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:d,render:e}},lazy:function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return F().useCallback(e,t)},useContext:function(e,t){return F().useContext(e,t)},useEffect:function(e,t){return F().useEffect(e,t)},useImperativeHandle:function(e,t,n){return F().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return F().useLayoutEffect(e,t)},useMemo:function(e,t){return F().useMemo(e,t)},useReducer:function(e,t,n){return F().useReducer(e,t,n)},useRef:function(e){return F().useRef(e)},useState:function(e){return F().useState(e)},Fragment:i,StrictMode:l,Suspense:f,createElement:E,cloneElement:function(e,t,n){null==e&&g("267",e);var a=void 0,c=r({},e.props),i=e.key,l=e.ref,u=e._owner;if(null!=t){void 0!==t.ref&&(l=t.ref,u=x.current),void 0!==t.key&&(i=""+t.key);var p=void 0;for(a in e.type&&e.type.defaultProps&&(p=e.type.defaultProps),t)C.call(t,a)&&!_.hasOwnProperty(a)&&(c[a]=void 0===t[a]&&void 0!==p?p[a]:t[a])}if(1===(a=arguments.length-2))c.children=n;else if(1<a){p=Array(a);for(var s=0;s<a;s++)p[s]=arguments[s+2];c.children=p}return{$$typeof:o,type:e.type,key:i,ref:l,props:c,_owner:u}},createFactory:function(e){var t=E.bind(null,e);return t.type=e,t},isValidElement:P,version:"16.8.6",unstable_ConcurrentMode:b,unstable_Profiler:u,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:S,ReactCurrentOwner:x,assign:r}},U={default:L},z=U&&L||U;e.exports=z.default||z},132:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,i,l=c(e),u=1;u<arguments.length;u++){for(var p in n=Object(arguments[u]))a.call(n,p)&&(l[p]=n[p]);if(r){i=r(n);for(var s=0;s<i.length;s++)o.call(n,i[s])&&(l[i[s]]=n[i[s]])}}return l}},91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));n(130);var r=n(129);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c={id:"getting-started",title:"Getting Started"},i=[{value:"Quick Start",id:"quick-start",children:[{value:"Get Started Immediately",id:"get-started-immediately",children:[]}]},{value:"Creating an App",id:"creating-an-app",children:[{value:"npx",id:"npx",children:[]},{value:"npm",id:"npm",children:[]},{value:"Yarn",id:"yarn",children:[]},{value:"Creating a TypeScript app",id:"creating-a-typescript-app",children:[]},{value:"Selecting a package manager",id:"selecting-a-package-manager",children:[]}]},{value:"Output",id:"output",children:[]},{value:"Scripts",id:"scripts",children:[{value:"npm start or yarn start",id:"npm-start-or-yarn-start",children:[]},{value:"npm test or yarn test",id:"npm-test-or-yarn-test",children:[]},{value:"npm run build or yarn build",id:"npm-run-build-or-yarn-build",children:[]}]}],l={rightToc:i},u="wrapper";function p(e){var t=e.components,n=o(e,["components"]);return Object(r.b)(u,a({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Create React App is an officially supported way to create single-page React\napplications. It offers a modern build setup with no configuration."),Object(r.b)("h2",{id:"quick-start"},"Quick Start"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-sh"}),"npx create-react-app my-app\ncd my-app\nnpm start\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"If you've previously installed ",Object(r.b)("inlineCode",{parentName:"p"},"create-react-app")," globally via ",Object(r.b)("inlineCode",{parentName:"p"},"npm install -g create-react-app"),", we recommend you uninstall the package using ",Object(r.b)("inlineCode",{parentName:"p"},"npm uninstall -g create-react-app")," to ensure that ",Object(r.b)("inlineCode",{parentName:"p"},"npx")," always uses the latest version.")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"(",Object(r.b)("a",a({parentName:"em"},{href:"https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b"}),"npx")," comes with npm 5.2+ and higher, see ",Object(r.b)("a",a({parentName:"em"},{href:"https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f"}),"instructions for older npm versions"),")")),Object(r.b)("p",null,"Then open ",Object(r.b)("a",a({parentName:"p"},{href:"http://localhost:3000/"}),"http://localhost:3000/")," to see your app."),Object(r.b)("p",null,"When you’re ready to deploy to production, create a minified bundle with ",Object(r.b)("inlineCode",{parentName:"p"},"npm run build"),"."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"https://cdn.rawgit.com/facebook/create-react-app/27b42ac/screencast.svg",width:"600",alt:"npm start"})),Object(r.b)("h3",{id:"get-started-immediately"},"Get Started Immediately"),Object(r.b)("p",null,"You ",Object(r.b)("strong",{parentName:"p"},"don’t")," need to install or configure tools like Webpack or Babel. They are preconfigured and hidden so that you can focus on the code."),Object(r.b)("p",null,"Just create a project, and you’re good to go."),Object(r.b)("h2",{id:"creating-an-app"},"Creating an App"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"You’ll need to have Node >= 8.10 on your local development machine")," (but it’s not required on the server). You can use ",Object(r.b)("a",a({parentName:"p"},{href:"https://github.com/creationix/nvm#installation"}),"nvm")," (macOS/Linux) or ",Object(r.b)("a",a({parentName:"p"},{href:"https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows"}),"nvm-windows")," to easily switch Node versions between different projects."),Object(r.b)("p",null,"To create a new app, you may choose one of the following methods:"),Object(r.b)("h3",{id:"npx"},"npx"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-sh"}),"npx create-react-app my-app\n")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"(",Object(r.b)("a",a({parentName:"em"},{href:"https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b"}),"npx")," comes with npm 5.2+ and higher, see ",Object(r.b)("a",a({parentName:"em"},{href:"https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f"}),"instructions for older npm versions"),")")),Object(r.b)("h3",{id:"npm"},"npm"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-sh"}),"npm init react-app my-app\n")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"em"},"npm init <initializer>")," is available in npm 6+")),Object(r.b)("h3",{id:"yarn"},"Yarn"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-sh"}),"yarn create react-app my-app\n")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"em"},"yarn create")," is available in Yarn 0.25+")),Object(r.b)("h3",{id:"creating-a-typescript-app"},"Creating a TypeScript app"),Object(r.b)("p",null,"Follow our ",Object(r.b)("a",a({parentName:"p"},{href:"/docs/adding-typescript"}),"Adding TypeScript")," documentation to create a TypeScript app."),Object(r.b)("h3",{id:"selecting-a-package-manager"},"Selecting a package manager"),Object(r.b)("p",null,"When you create a new app, the CLI will use ",Object(r.b)("a",a({parentName:"p"},{href:"https://yarnpkg.com/"}),"Yarn")," to install dependencies (when available). If you have Yarn installed, but would prefer to use npm, you can append --use-npm to the creation command. For example:"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-sh"}),"npx create-react-app my-app --use-npm\n")),Object(r.b)("h2",{id:"output"},"Output"),Object(r.b)("p",null,"Running any of these commands will create a directory called ",Object(r.b)("inlineCode",{parentName:"p"},"my-app")," inside the current folder. Inside that directory, it will generate the initial project structure and install the transitive dependencies:"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{}),"my-app\n├── README.md\n├── node_modules\n├── package.json\n├── .gitignore\n├── public\n│   ├── favicon.ico\n│   ├── index.html\n│   └── manifest.json\n└── src\n    ├── App.css\n    ├── App.js\n    ├── App.test.js\n    ├── index.css\n    ├── index.js\n    ├── logo.svg\n    └── serviceWorker.js\n")),Object(r.b)("p",null,"No configuration or complicated folder structures, just the files you need to build your app. Once the installation is done, you can open your project folder:"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-sh"}),"cd my-app\n")),Object(r.b)("h2",{id:"scripts"},"Scripts"),Object(r.b)("p",null,"Inside the newly created project, you can run some built-in commands:"),Object(r.b)("h3",{id:"npm-start-or-yarn-start"},Object(r.b)("inlineCode",{parentName:"h3"},"npm start")," or ",Object(r.b)("inlineCode",{parentName:"h3"},"yarn start")),Object(r.b)("p",null,"Runs the app in development mode. Open ",Object(r.b)("a",a({parentName:"p"},{href:"http://localhost:3000"}),"http://localhost:3000")," to view it in the browser."),Object(r.b)("p",null,"The page will automatically reload if you make changes to the code. You will see the build errors and lint warnings in the console."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"https://cdn.rawgit.com/marionebl/create-react-app/9f62826/screencast-error.svg",width:"600",alt:"Build errors"})),Object(r.b)("h3",{id:"npm-test-or-yarn-test"},Object(r.b)("inlineCode",{parentName:"h3"},"npm test")," or ",Object(r.b)("inlineCode",{parentName:"h3"},"yarn test")),Object(r.b)("p",null,"Runs the test watcher in an interactive mode. By default, runs tests related to files changed since the last commit."),Object(r.b)("p",null,Object(r.b)("a",a({parentName:"p"},{href:"https://facebook.github.io/create-react-app/docs/running-tests"}),"Read more about testing"),"."),Object(r.b)("h3",{id:"npm-run-build-or-yarn-build"},Object(r.b)("inlineCode",{parentName:"h3"},"npm run build")," or ",Object(r.b)("inlineCode",{parentName:"h3"},"yarn build")),Object(r.b)("p",null,"Builds the app for production to the ",Object(r.b)("inlineCode",{parentName:"p"},"build")," folder. It correctly bundles React in production mode and optimizes the build for the best performance."),Object(r.b)("p",null,"The build is minified and the filenames include the hashes."),Object(r.b)("p",null,"Your app is ready to be deployed."))}p.isMDXComponent=!0}}]);