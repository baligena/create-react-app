(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{127:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(129),c=t(20),i=t(148),l=t(135),s=t.n(l),u=t(136),m=t(175),d=t.n(m);function f(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var t=[],a=!0,r=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(a=(c=i.next()).done)&&(t.push(c.value),!n||t.length!==n);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==i.return||i.return()}finally{if(r)throw o}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var p=24;function b(e){var n=e.item,t=e.onItemClick,o=n.items,c=n.href,i=n.label,l=n.type,m=f(Object(a.useState)(n.collapsed),2),d=m[0],p=m[1],h=f(Object(a.useState)(null),2),v=h[0],y=h[1];switch(n.collapsed!==v&&(y(n.collapsed),p(n.collapsed)),l){case"category":return r.a.createElement("li",{className:s()("menu__list-item",{"menu__list-item--collapsed":d}),key:i},r.a.createElement("a",{className:s()("menu__link","menu__link--sublist",{"menu__link--active":!n.collapsed}),href:"#!",onClick:function(){return p(!d)}},i),r.a.createElement("ul",{className:"menu__list"},o.map((function(e){return r.a.createElement(b,{key:e.label,item:e,onItemClick:t})}))));case"link":default:return r.a.createElement("li",{className:"menu__list-item",key:i},r.a.createElement(u.a,{activeClassName:"menu__link--active",className:"menu__link",to:c,onClick:t},i))}}var h=function(e){var n=f(Object(a.useState)(!1),2),t=n[0],o=n[1],c=e.docsSidebars,i=e.location,l=e.sidebar;if(!l)return null;var u=c[l];if(!u)throw new Error('Cannot find the sidebar "'.concat(l,'" in the sidebar config!'));return u.forEach((function(e){return function e(n,t){var a=n.items,r=n.href;switch(n.type){case"category":var o=a.map((function(n){return e(n,t)})).filter((function(e){return e})).length>0;return n.collapsed=!o,o;case"link":default:return r===t.pathname.replace(/\/$/,"")}}(e,i)})),r.a.createElement("div",{className:d.a.sidebar},r.a.createElement("div",{className:s()("menu","menu--responsive",{"menu--show":t})},r.a.createElement("button",{"aria-label":t?"Close Menu":"Open Menu",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){o(!t)}},t?r.a.createElement("span",{className:s()(d.a.sidebarMenuIcon,d.a.sidebarMenuCloseIcon)},"×"):r.a.createElement("svg",{className:d.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:p,width:p,viewBox:"0 0 32 32",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement("ul",{className:"menu__list"},u.map((function(e){return r.a.createElement(b,{key:e.label,item:e,onItemClick:function(){o(!1)}})})))))},v=t(162);t(176);function y(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var E=function(e){return function(n){var t=n.id,a=y(n,["id"]);return r.a.createElement(e,a,r.a.createElement("a",{"aria-hidden":"true",className:"anchor",id:t}),r.a.createElement("a",{"aria-hidden":"true",className:"hash-link",href:"#".concat(t)},"#"),a.children)}},g=t(177),k=t.n(g);function _(){return(_=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var w={code:function(e){var n=e.children;return"string"==typeof n?r.a.createElement(v.a,e):n},a:u.a,pre:function(e){return r.a.createElement("pre",_({className:k.a.mdxCodeBlock},e))},h1:E("h1"),h2:E("h2"),h3:E("h3"),h4:E("h4"),h5:E("h5"),h6:E("h6")},C=t(178),O=t.n(C);n.default=function(e){var n=e.route,t=e.docsMetadata,a=e.location,l=t.permalinkToSidebar,s=t.docsSidebars,u=l[a.pathname.replace(/\/$/,"")];return r.a.createElement(i.a,{noFooter:!0},r.a.createElement("div",{className:O.a.docPage},r.a.createElement("div",{className:O.a.docSidebarContainer},r.a.createElement(h,{docsSidebars:s,location:a,sidebar:u})),r.a.createElement("main",{className:O.a.docMainContainer},r.a.createElement(o.a,{components:w},Object(c.a)(n.routes)))))}},129:function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a),o=r.a.createContext({}),c=function(e){var n=r.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},i=function(e){var n=c(e.components);return r.a.createElement(o.Provider,{value:n},e.children)};var l="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===n.indexOf(a)&&(t[a]=e[a]);return t}(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,d=u[i+"."+m]||u[m]||s[m]||o;return t?r.a.createElement(d,Object.assign({},{ref:n},l,{components:t})):r.a.createElement(d,Object.assign({},{ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[l]="string"==typeof e?e:a,c[1]=i;for(var m=2;m<o;m++)c[m]=t[m];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},175:function(e,n,t){e.exports={sidebar:"sidebar_1kLs",sidebarMenuIcon:"sidebarMenuIcon_2vk4",sidebarMenuCloseIcon:"sidebarMenuCloseIcon_1JRa"}},176:function(e,n,t){},177:function(e,n,t){e.exports={mdxCodeBlock:"mdxCodeBlock_iHAB"}},178:function(e,n,t){e.exports={docPage:"docPage_1kjD",docSidebarContainer:"docSidebarContainer_1cYp",docMainContainer:"docMainContainer_FFX1"}}}]);