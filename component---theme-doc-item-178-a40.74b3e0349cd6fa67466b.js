(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{128:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),i=a(133),c=a.n(i),o=a(138),s=a.n(o),m=a(136);var u=function(e){var t=e.metadata;return r.a.createElement("nav",{className:"pagination-nav"},r.a.createElement("div",{className:"pagination-nav__item"},t.previous&&r.a.createElement(m.a,{className:"pagination-nav__link",to:t.previous.permalink},r.a.createElement("h5",{className:"pagination-nav__link--sublabel"},"Previous"),r.a.createElement("h4",{className:"pagination-nav__link--label"},"« ",t.previous.title))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&r.a.createElement(m.a,{className:"pagination-nav__link",to:t.next.permalink},r.a.createElement("h5",{className:"pagination-nav__link--sublabel"},"Next"),r.a.createElement("h4",{className:"pagination-nav__link--label"},t.next.title," »"))))},d=a(179),v=a.n(d);function f(e){var t=e.headings,a=e.isChild;return t.length?r.a.createElement("ul",{className:a?"":"contents contents__left-border"},t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("a",{href:"#".concat(e.id),className:"contents__link"},e.value),r.a.createElement(f,{isChild:!0,headings:e.children}))}))):null}t.default=function(e){var t=c()().siteConfig,a=(void 0===t?{}:t).url,n=e.metadata,i=e.content,o=n.description,m=n.title,d=n.permalink,p=n.image,E=n.editUrl,g=n.lastUpdatedAt,h=n.lastUpdatedBy;return r.a.createElement("div",null,r.a.createElement(l.a,null,m&&r.a.createElement("title",null,m),o&&r.a.createElement("meta",{name:"description",content:o}),o&&r.a.createElement("meta",{property:"og:description",content:o}),p&&r.a.createElement("meta",{property:"og:image",content:a+s()(p)}),p&&r.a.createElement("meta",{property:"twitter:image",content:a+s()(p)}),p&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for ".concat(m)}),d&&r.a.createElement("meta",{property:"og:url",content:a+d})),r.a.createElement("div",{className:"padding-vert--lg"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:v.a.docItemContainer},r.a.createElement("header",null,r.a.createElement("h1",{className:v.a.docTitle},n.title)),r.a.createElement("article",null,r.a.createElement("div",{className:"markdown"},r.a.createElement(i,null))),(E||g||h)&&r.a.createElement("div",{className:"margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},E&&r.a.createElement("a",{href:E,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},r.a.createElement("g",null,r.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(g||h)&&r.a.createElement("div",{className:"col text--right"},r.a.createElement("em",null,r.a.createElement("small",null,"Last updated"," ",g&&r.a.createElement(r.a.Fragment,null,"on"," ",r.a.createElement("strong",null,new Date(1e3*g).toLocaleDateString()),h&&" "),h&&r.a.createElement(r.a.Fragment,null,"by ",r.a.createElement("strong",null,h)),!1))))),r.a.createElement("div",{className:"margin-vert--lg"},r.a.createElement(u,{metadata:n})))),i.rightToc&&r.a.createElement("div",{className:"col col--3"},r.a.createElement("div",{className:v.a.tableOfContents},r.a.createElement(f,{headings:i.rightToc})))))))}},133:function(e,t,a){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=a(0),l=n(a(19));t.default=function(){return r.useContext(l.default)}},136:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(11);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var c=/^\/(?!\/)/;t.a=function(e){var t,a=e.to,o=e.href,s=a||o,m=c.test(s),u=!1,d="undefined"!=typeof window&&"IntersectionObserver"in window;return Object(n.useEffect)((function(){return!d&&m&&window.docusaurus.prefetch(s),function(){d&&t&&t.disconnect()}}),[s,d,m]),s&&m?r.a.createElement(l.b,i({},e,{onMouseEnter:function(){u||(window.docusaurus.preload(s),u=!0)},innerRef:function(e){var a,n;d&&e&&m&&(a=e,n=function(){window.docusaurus.prefetch(s)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){a===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(a),t.disconnect(),n())}))}))).observe(a))},to:s})):r.a.createElement("a",i({},e,{href:s}))}},138:function(e,t,a){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=n(a(133));t.default=function(e){var t=(r.default().siteConfig||{}).baseUrl,a=void 0===t?"/":t;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?a+e.slice(1):a+e}},179:function(e,t,a){e.exports={docTitle:"docTitle_1vWb",docItemContainer:"docItemContainer_2cwg",tableOfContents:"tableOfContents_TbNY"}}}]);