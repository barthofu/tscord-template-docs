"use strict";(self.webpackChunktscord_template_docs=self.webpackChunktscord_template_docs||[]).push([[152],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8450:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:3},l="Understand the template",c={unversionedId:"get-started/understand-the-template",id:"get-started/understand-the-template",title:"Understand the template",description:"Before starting to code a bot using this template, you should understand how it works in a more theorical way (yeah we know, not the most entertaining part :P)",source:"@site/docs/get-started/understand-the-template.md",sourceDirName:"get-started",slug:"/get-started/understand-the-template",permalink:"/tscord-template-docs/docs/get-started/understand-the-template",draft:!1,editUrl:"https://github.com/barthofu/tscord-template-docs/tree/main/docs/get-started/understand-the-template.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/tscord-template-docs/docs/get-started/configuration"},next:{title:"Interactions",permalink:"/tscord-template-docs/docs/discord/interactions"}},d={},p=[{value:"Architecture",id:"architecture",level:2},{value:"Presentation layer",id:"presentation-layer",level:3},{value:"Business layer",id:"business-layer",level:3},{value:"Data layer",id:"data-layer",level:3},{value:"Files structure",id:"files-structure",level:2},{value:"Typescript",id:"typescript",level:2},{value:"Discord.ts",id:"discordts",level:3},{value:"Decorators",id:"decorators",level:3},{value:"Coding principles",id:"coding-principles",level:2},{value:"Dependency Injection and Singletons",id:"dependency-injection-and-singletons",level:3}],u={toc:p};function m(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"understand-the-template"},"Understand the template"),(0,o.kt)("p",null,"Before starting to code a bot using this template, you should understand how it works in a more theorical way (yeah we know, not the most entertaining part :P)"),(0,o.kt)("p",null,"Here is a sample of the architecture of TSCord:"),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"TSCord architecture diagram",src:n(8266).Z+"#gh-light-mode-only",width:"1057",height:"283"}),"\n",(0,o.kt)("img",{alt:"TSCord architecture diagram",src:n(48).Z+"#gh-dark-mode-only",width:"1057",height:"283"})),(0,o.kt)("h2",{id:"architecture"},"Architecture"),(0,o.kt)("p",null,"TSCord is following a clear separation of concerns and is built on multiple layers, each having its own scope in the codebase."),(0,o.kt)("h3",{id:"presentation-layer"},"Presentation layer"),(0,o.kt)("p",null,"The first brick in this layered architecture, and the place where all of the flow starts are the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/tscord-template-docs/docs/discord/events"},"Events"))," listeners triggered by interactions on Discord. Theses interactions are then redirected to the correct ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/tscord-template-docs/docs/discord/interactions"},"Handler")),", similar to a ",(0,o.kt)("em",{parentName:"p"},"controller")," in a MVC pattern."),(0,o.kt)("p",null,"We can also trigger our own ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/features/custom-events"},"Custom Events"))," at any time from anywhere in the codebase."),(0,o.kt)("h3",{id:"business-layer"},"Business layer"),(0,o.kt)("p",null,"The business layer includes all the ",(0,o.kt)("em",{parentName:"p"},"logic")," of the application. It is represented by the ",(0,o.kt)("strong",{parentName:"p"},"Services")," and ",(0,o.kt)("strong",{parentName:"p"},"Utility")," classes.\nIndeed, the ",(0,o.kt)("em",{parentName:"p"},"handlers")," should contain the least amount of logic possible."),(0,o.kt)("h3",{id:"data-layer"},"Data layer"),(0,o.kt)("p",null,"Last but not least, the data layer have the responsability of manipulating and persisting data to a database."),(0,o.kt)("p",null,"We are using ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/features/database/orm"},"Mikro-ORM"))," within TSCord so you don't have to worry a lot about this layer, except to write some custom methods on repositories."),(0,o.kt)("h2",{id:"files-structure"},"Files structure"),(0,o.kt)("p",null,"Here is a simplified view of the template structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"tscord-template\n\u251c\u2500\u2500 .env # environments variables\n\u251c\u2500\u2500 package.json # config for npm\n\u251c\u2500\u2500 mikro-orm.config.ts # exports the config of Mikro-ORM for the CLI (/!\\ DO NOT TOUCH /!\\)\n\u251c\u2500\u2500 pm2.config.json # config for PM2\n\u251c\u2500\u2500 tsconfig.json # config for the typescript transcompiler (/!\\ DO NOT TOUCH /!\\)\n\u251c\u2500\u2500 .typesafe-i18n.json # config for the i18n plugin (/!\\ DO NOT TOUCH /!\\)\n\u251c\u2500\u2500 docker-compose.yml # docker-compose config file\n\u251c\u2500\u2500 .docker # dockerfiles\n\u2502   \u2514\u2500 #...\n\u251c\u2500\u2500 .vscode # contains the configs for vscode (e.g: debug)\n\u2502   \u2514\u2500 # ...\n\u251c\u2500\u2500 assets # assets folder\n\u2502   \u2514\u2500 # ...\n\u251c\u2500\u2500 cli # plop CLI code base location\n\u2502   \u2514\u2500 # ...\n\u251c\u2500\u2500 configs # bot's config files\n\u2502   \u2514\u2500 # ...\n\u251c\u2500\u2500 database\n\u2502   \u251c\u2500 db.sqlite # SQLite database location (if SQLite is configured as database for the bot)\n\u2502   \u2514\u2500 migrations # folder where are stored the database migrations\n\u2502       \u2514\u2500 #...\n\u251c\u2500\u2500 configs # log files (info, warn, debug, error)\n\u2502   \u2514\u2500 # ... \n\u2514\u2500\u2500 src # all the source code of the bot!\n    \u251c\u2500 commands # commands handlers (can be nested as wanted)\n    \u2502   \u2514\u2500 #...\n    \u2502       \u2514\u2500 #...\n    \u251c\u2500 entities # entities models definitions (mikro-orm)\n    \u2502   \u2514\u2500 #...\n    \u251c\u2500 events # events and custom events handlers\n    \u2502   \u251c\u2500 triggers # custom events triggers based on discord events\n    \u2502   \u2502   \u2514\u2500 # ...\n    \u2502   \u2514\u2500 #...\n    \u251c\u2500 guards # guards functions (similar to middlewares)\n    \u2502   \u2514\u2500 #...\n    \u251c\u2500 i18n # localization (i18n) system. /!\\ YOU SHOULD NOT TOUCH FILES, ONLY LOCALES FOLDERS\n    \u2502   \u251c\u2500 en\n    \u2502   \u251c\u2500 fr\n    \u2502   \u2514\u2500 #...\n    \u251c\u2500 services # services classes exposing most of the features of the bot\n    \u2502   \u2514\u2500 #...\n    \u251c\u2500 utils # utilities\n    \u2502   \u251c\u2500 functions # utility simple pure functions \n    \u2502   \u2502   \u2514\u2500 #...\n    \u2502   \u251c\u2500 classes # utility classes \n    \u2502   \u2502   \u2514\u2500 #...\n    \u2502   \u251c\u2500 decorators # implementations of decorators \n    \u2502   \u2502   \u2514\u2500 #...\n    \u2502   \u2514\u2500 types # typescript types definitions \n    \u2502       \u2514\u2500 #...\n    \u251c\u2500 client.ts # discordx client config\n    \u2514\u2500 main.ts # main file that starts all the bot logic\n")),(0,o.kt)("h2",{id:"typescript"},"Typescript"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.")),(0,o.kt)("h3",{id:"discordts"},"Discord.ts"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Under the hood, ",(0,o.kt)("em",{parentName:"p"},"TSCord")," uses ",(0,o.kt)("strong",{parentName:"p"},"discord.ts")," that is himself a superset of ",(0,o.kt)("strong",{parentName:"p"},"discord.js"),"."),(0,o.kt)("p",{parentName:"div"},"We ",(0,o.kt)("strong",{parentName:"p"},"HIGHLY")," recommand to check their documentation here: ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://discord-ts.js.org/"},"https://discord-ts.js.org/"))))),(0,o.kt)("h3",{id:"decorators"},"Decorators"),(0,o.kt)("p",null,"A Decorator is a special kind of declaration that can be attached to a class ",(0,o.kt)("em",{parentName:"p"},"declaration"),", ",(0,o.kt)("em",{parentName:"p"},"method"),", ",(0,o.kt)("em",{parentName:"p"},"accessor"),", ",(0,o.kt)("em",{parentName:"p"},"property"),", or ",(0,o.kt)("em",{parentName:"p"},"parameter"),". Decorators use the form @expression , where expression must evaluate to a function that will be called at runtime with information about the decorated declaration."),(0,o.kt)("p",null,"This template and ",(0,o.kt)("strong",{parentName:"p"},"discord.ts")," are using decorators ",(0,o.kt)("em",{parentName:"p"},"a lot"),"."),(0,o.kt)("p",null,"Even if it is not difficult at all to understand and use them, creating ones is quite another thing. Don't hesitate to check the ",(0,o.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/decorators.html"},"official decorators doc")," and take the already existing ones as examples (",(0,o.kt)("inlineCode",{parentName:"p"},"src/utils/decorators"),")."),(0,o.kt)("h2",{id:"coding-principles"},"Coding principles"),(0,o.kt)("p",null,"Here are some code principles the template is using and that you should be aware of."),(0,o.kt)("h3",{id:"dependency-injection-and-singletons"},"Dependency Injection and Singletons"),(0,o.kt)("p",null,"Dependency injection is basically providing the objects that an object needs (its dependencies) instead of having it construct them itself. It's a very useful technique for testing, since it allows dependencies to be mocked or stubbed out."),(0,o.kt)("p",null,"Dependencies can be injected into objects by many means (such as constructor injection or setter injection). One can even use specialized dependency injection frameworks (e.g. Spring) to do that, but they certainly aren't required."),(0,o.kt)("p",null,"In addition of that, you can use the ",(0,o.kt)("a",{parentName:"p",href:"https://sourcemaking.com/design_patterns/singleton"},"Singleton Pattern")," that will instantiate a class only once. Furthermore, this is this single instance that will be passed everywhere in your codebase using Dependency Injection."),(0,o.kt)("p",null,"We are using the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/microsoft/tsyringe"},"tsyringe"))," package to achieve this in this template."),(0,o.kt)("p",null,"Here is a concrete example of how you would use DI:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { singleton, injectable } from 'tsyringe'\n\n@singleton()\nclass LoggerService {\n\n    private uniqueIdentifier = Math.random() * 1000000 // each time this class is instantiated, it will have a merely unique 'uniqueIdentifier' attribute\n\n    public log(message: string) {\n\n        console.log(`[${this.uniqueIdentifier}] ${message}`)\n    }\n}\n\n@injectable()\nclass Foo {\n\n    constructor(\n        private logger: LoggerService\n    ) {}\n\n    public bar() {\n\n        this.logger.log('Hello world!')\n    }\n}\n\nconst foo = new Foo()\nfoo.bar() // -> [175000] Hello World!\n\nconst logger = container.resolve(LoggerService)\nlogger.log('Hello World!') // -> [175000] Hello World!\n\n")),(0,o.kt)("p",null,"Explanations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Thanks to the ",(0,o.kt)("inlineCode",{parentName:"li"},"@singleton")," decorator, the ",(0,o.kt)("inlineCode",{parentName:"li"},"LoggerService")," class will be instantiated ",(0,o.kt)("em",{parentName:"li"},"once")," when your program starts"),(0,o.kt)("li",{parentName:"ul"},"Then, this instance can be injected with 2 methods:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"By passing a parameter to the constructor with the class type of the desired instance (only possible when using the ",(0,o.kt)("inlineCode",{parentName:"li"},"@injectable")," decorator on the class)"),(0,o.kt)("li",{parentName:"ul"},"By using the ",(0,o.kt)("inlineCode",{parentName:"li"},"container.resolve()")," function (so we can get the instance from anywhere in the code, not only from classes)")))),(0,o.kt)("p",null,"You can see that both methods will output ",(0,o.kt)("inlineCode",{parentName:"p"},"175000")," as ",(0,o.kt)("inlineCode",{parentName:"p"},"uniqueIdentifier"),", showing that it is from the same class!"))}m.isMDXComponent=!0},48:function(e,t,n){t.Z=n.p+"assets/images/tscord_architecture_DARK-85b5ceed8fa4c42b3607d824b5f8cc0c.png"},8266:function(e,t,n){t.Z=n.p+"assets/images/tscord_architecture_LIGHT-1a4327c59af42c2307667d4ad300e03f.png"}}]);