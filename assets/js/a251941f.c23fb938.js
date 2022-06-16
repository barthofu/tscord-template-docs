"use strict";(self.webpackChunktscord_template_docs=self.webpackChunktscord_template_docs||[]).push([[221],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=d(r),m=o,f=p["".concat(s,".").concat(m)]||p[m]||l[m]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var d=2;d<i;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4530:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return l}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],c={sidebar_position:2},s="Events",d={unversionedId:"discord/events",id:"discord/events",title:"Events",description:"You can use this decorator to declare methods that will be executed whenever a Discord event is triggered.",source:"@site/docs/discord/events.md",sourceDirName:"discord",slug:"/discord/events",permalink:"/docs/discord/events",draft:!1,editUrl:"https://github.com/barthofu/tscord-template-docs/tree/main/docs/discord/events.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Interactions",permalink:"/docs/discord/interactions"},next:{title:"Guards",permalink:"/docs/discord/guards"}},u={},l=[{value:"For more information, head over to the discord.ts documentation",id:"for-more-information-head-over-to-the-discordts-documentation",level:3}],p={toc:l};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"events"},"Events"),(0,i.kt)("p",null,"You can use this decorator to declare methods that will be executed whenever a Discord event is triggered."),(0,i.kt)("p",null,"Our methods must be decorated with the ",(0,i.kt)("inlineCode",{parentName:"p"},"@On(event: string)")," or ",(0,i.kt)("a",{parentName:"p",href:"https://discord-ts.js.org/docs/decorators/general/once"},"@Once(event: string)")," decorator."),(0,i.kt)("p",null,"It's that simple, when the event is triggered, the method is called:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { Discord, On, Once } from 'discordx'\n\n@Discord()\nclass Example {\n\n  @On('messageCreate')\n  private onMessage() {\n    // ...\n  }\n\n  @Once('ready')\n  private onReady() {\n    // ...\n  }\n}\n")),(0,i.kt)("h3",{id:"for-more-information-head-over-to-the-discordts-documentation"},"For more information, head over to the ",(0,i.kt)("a",{parentName:"h3",href:"https://discord-ts.js.org/docs/decorators/general/on"},"discord.ts documentation")))}m.isMDXComponent=!0}}]);