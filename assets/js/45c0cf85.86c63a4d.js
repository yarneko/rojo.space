"use strict";(self.webpackChunkrojo_space=self.webpackChunkrojo_space||[]).push([[5279],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return v}});var A=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);t&&(A=A.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,A)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,A,a=function(e,t){if(null==e)return{};var n,A,a={},o=Object.keys(e);for(A=0;A<o.length;A++)n=o[A],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(A=0;A<o.length;A++)n=o[A],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=A.createContext({}),u=function(e){var t=A.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return A.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return A.createElement(A.Fragment,{},t)}},c=A.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(n),v=a,f=c["".concat(l,".").concat(v)]||c[v]||s[v]||o;return n?A.createElement(f,r(r({ref:t},d),{},{components:n})):A.createElement(f,r({ref:t},d))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var u=2;u<o;u++)r[u]=n[u];return A.createElement.apply(null,r)}return A.createElement.apply(null,n)}c.displayName="MDXCreateElement"},58215:function(e,t,n){n.d(t,{Z:function(){return a}});var A=n(67294);function a(e){var t=e.children,n=e.hidden,a=e.className;return A.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return d}});var A=n(87462),a=n(67294),o=n(72389),r=n(5979),i=n(86010),l="tabItem_LplD";function u(e){var t,n,o,u=e.lazy,d=e.block,s=e.defaultValue,c=e.values,v=e.groupId,f=e.className,p=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=c?c:p.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),m=(0,r.lx)(g,(function(e,t){return e.value===t.value}));if(m.length>0)throw new Error('Docusaurus error: Duplicate values "'+m.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===s?s:null!=(t=null!=s?s:null==(n=p.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=p[0])?void 0:o.props.value;if(null!==b&&!g.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=(0,r.UB)(),h=x.tabGroupChoices,y=x.setTabGroupChoices,w=(0,a.useState)(b),N=w[0],X=w[1],T=[],j=(0,r.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var P=h[v];null!=P&&P!==N&&g.some((function(e){return e.value===P}))&&X(P)}var D=function(e){var t=e.currentTarget,n=T.indexOf(t),A=g[n].value;A!==N&&(j(t),X(A),null!=v&&y(v,A))},k=function(e){var t,n=null;switch(e.key){case"ArrowRight":var A=T.indexOf(e.currentTarget)+1;n=T[A]||T[0];break;case"ArrowLeft":var a=T.indexOf(e.currentTarget)-1;n=T[a]||T[T.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},f)},g.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,A.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return T.push(e)},onKeyDown:k,onFocus:D,onClick:D},o,{className:(0,i.Z)("tabs__item",l,null==o?void 0:o.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),u?(0,a.cloneElement)(p.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},p.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function d(e){var t=(0,o.Z)();return a.createElement(u,(0,A.Z)({key:String(t)},e))}},33898:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return p},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return v}});var A=n(87462),a=n(63366),o=(n(67294),n(3905)),r=n(9877),i=n(58215),l=["components"],u={sidebar_position:2,title:"Creating a New Game"},d=void 0,s={unversionedId:"getting-started/new-game",id:"version-v6/getting-started/new-game",title:"Creating a New Game",description:"Creating the Rojo Project",source:"@site/versioned_docs/version-v6/getting-started/new-game.mdx",sourceDirName:"getting-started",slug:"/getting-started/new-game",permalink:"/docs/v6/getting-started/new-game",editUrl:"https://github.com/rojo-rbx/rojo.space/edit/master/versioned_docs/version-v6/getting-started/new-game.mdx",tags:[],version:"v6",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Creating a New Game"},sidebar:"version-v6/tutorialSidebar",previous:{title:"Installation",permalink:"/docs/v6/getting-started/installation"},next:{title:"Porting an Existing Game",permalink:"/docs/v6/getting-started/existing-game"}},c={},v=[{value:"Creating the Rojo Project",id:"creating-the-rojo-project",level:2},{value:"Building Your Place",id:"building-your-place",level:2},{value:"Live-Syncing into Studio",id:"live-syncing-into-studio",level:2},{value:"Uploading Your Place",id:"uploading-your-place",level:2}],f={toc:v};function p(e){var t=e.components,u=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,A.Z)({},f,u,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"creating-the-rojo-project"},"Creating the Rojo Project"),(0,o.kt)("p",null,"Rojo has a built-in command to initialize a new game project."),(0,o.kt)(r.Z,{groupId:"installation-kind",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"vscode",label:"VS Code",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,"Open a new empty folder in VS Code. Your editor should look like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"empty VS Code project",src:n(70674).Z,width:"611",height:"438"})),(0,o.kt)("p",null,"Open your VS Code Command Palette (",(0,o.kt)("inlineCode",{parentName:"p"},"ctrl+shift+P")," on Windows, ",(0,o.kt)("inlineCode",{parentName:"p"},"cmd+shift+P")," on macOS) and type ",(0,o.kt)("inlineCode",{parentName:"p"},"rojo init"),". Run the command that pops up:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"rojo init command",src:n(88011).Z,width:"979",height:"152"})),(0,o.kt)("p",null,"Once it succeeds, you should see a bunch of new files:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"complete rojo project",src:n(21738).Z,width:"790",height:"684"})),(0,o.kt)("p",null,"These are all the files you need to get started with Rojo.")),(0,o.kt)(i.Z,{value:"cli",label:"CLI",mdxType:"TabItem"},(0,o.kt)("p",null,"First, open up a terminal window, like ",(0,o.kt)("inlineCode",{parentName:"p"},"cmd.exe")," on Windows or ",(0,o.kt)("inlineCode",{parentName:"p"},"Terminal.app")," on macOS. Navigate to where you'd like to store your new project and run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"rojo init my-new-game\n")),(0,o.kt)("p",null,"Rojo will create a folder named ",(0,o.kt)("inlineCode",{parentName:"p"},"my-new-game")," if it doesn't already exist and create everything you need to get started."))),(0,o.kt)("h2",{id:"building-your-place"},"Building Your Place"),(0,o.kt)("p",null,"Now that we have a project, one thing we can do is build a Roblox place file for our project. This is a great way to get started with a project quickly with no fuss."),(0,o.kt)(r.Z,{groupId:"installation-kind",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"vscode",label:"VS Code",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,"Open your VS Code Command Palette and type ",(0,o.kt)("inlineCode",{parentName:"p"},"rojo build"),". You'll be prompted to select a project, choose the default one."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"rojo build command",src:n(21677).Z,width:"954",height:"159"}))),(0,o.kt)(i.Z,{value:"cli",label:"CLI",mdxType:"TabItem"},(0,o.kt)("p",null,"All we have to do is run ",(0,o.kt)("inlineCode",{parentName:"p"},"rojo build")," from inside the project's folder:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"rojo build -o build.rbxl\n")))),(0,o.kt)("p",null,"Rojo will create a file named ",(0,o.kt)("inlineCode",{parentName:"p"},"build.rbxl")," that contains your new game!"),(0,o.kt)("p",null,"If you open ",(0,o.kt)("inlineCode",{parentName:"p"},"build.rbxl")," in Roblox Studio now, you should see a baseplate, as well as code in services like ",(0,o.kt)("inlineCode",{parentName:"p"},"ReplicatedStorage"),"."),(0,o.kt)("h2",{id:"live-syncing-into-studio"},"Live-Syncing into Studio"),(0,o.kt)("p",null,"Building a place file is great for starting to work on a game, but for active iteration, you'll want something faster."),(0,o.kt)("p",null,"In Roblox Studio, make sure the Rojo plugin is installed. If you need it, check out ",(0,o.kt)("a",{parentName:"p",href:"/docs/v6/getting-started/installation"},"the installation guide")," to learn how to install it."),(0,o.kt)("p",null,"To expose your project to the plugin, you'll need to start the ",(0,o.kt)("strong",{parentName:"p"},"live sync server"),"."),(0,o.kt)(r.Z,{groupId:"installation-kind",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"vscode",label:"VS Code",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,"Open your VS Code Command Palette, type ",(0,o.kt)("inlineCode",{parentName:"p"},"rojo serve"),", and choose the extension's command."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"rojo serve command",src:n(87554).Z,width:"978",height:"210"})),(0,o.kt)("p",null,"You should see a small popup in the bottom right corner of your screen with a few details."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"rojo serve output",src:n(10839).Z,width:"588",height:"209"}))),(0,o.kt)(i.Z,{value:"cli",label:"CLI",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"rojo serve\n")),(0,o.kt)("p",null,"You should see output like this in your terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ rojo serve\nRojo server listening:\n  Address: localhost\n  Port:    34872\n\nVisit http://localhost:34872/ in your browser for more information\n")))),(0,o.kt)("p",null,"Switch into Roblox Studio and press the ",(0,o.kt)("strong",{parentName:"p"},"Rojo")," plugin toolbar button. A panel should open:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Rojo plugin connection dialog",src:n(7576).Z,width:"470",height:"287"})),(0,o.kt)("p",null,"Press ",(0,o.kt)("strong",{parentName:"p"},"Connect"),"."),(0,o.kt)("p",null,"If all went well, you should now be able to change files in your project directory and watch them sync into Roblox Studio in real time!"),(0,o.kt)("p",null,"You can also visit the URL printed by Rojo to access extra information about the running session."),(0,o.kt)("h2",{id:"uploading-your-place"},"Uploading Your Place"),(0,o.kt)("p",null,"Aimed at teams that want serious levels of automation, Rojo can upload places to Roblox.com automatically."),(0,o.kt)("p",null,"You'll need an existing game on Roblox.com as well as the ",(0,o.kt)("inlineCode",{parentName:"p"},".ROBLOSECURITY")," cookie of an account that has write access to that game."),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"It's recommended that you set up a Roblox account dedicated to deploying your game instead of your personal account in case your security cookie is compromised."))),(0,o.kt)("p",null,"Generating and publishing your game is as simple as:"),(0,o.kt)(r.Z,{groupId:"installation-kind",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"vscode",label:"VS Code",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,"Uploading places is not yet supported in the Rojo VS Code Extension. You can publish your game using Roblox Studio or use the Rojo CLI instead.")),(0,o.kt)(i.Z,{value:"cli",label:"CLI",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'rojo upload --asset_id [PLACE ID] --cookie "[SECURITY COOKIE]"\n')),(0,o.kt)("p",null,"If you are on Windows and have Roblox Studio installed, ",(0,o.kt)("inlineCode",{parentName:"p"},"--cookie")," is optional and will be pulled from your Roblox Studio session if not specified."),(0,o.kt)("p",null,"An example project is available on GitHub that deploys to Roblox.com via GitHub Actions automatically: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Roblox/desert-bus-2077"},"Desert Bus 2077")))))}p.isMDXComponent=!0},7576:function(e,t,n){t.Z=n.p+"assets/images/connect-dialog-eae33ce7b1c9f10d2a5b85891f150720.png"},21677:function(e,t){t.Z="data:image/png;base64,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"},70674:function(e,t,n){t.Z=n.p+"assets/images/empty-project-0e4e7f034cfbd120d04eff0b91435d9a.png"},88011:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA9MAAACYCAYAAADnerp3AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAABXXSURBVHhe7d1LiCT3fcBxXxOMwfhg+XlzwBe/H/LjHpyTDyaYnCTwJQdLGx+CjA82Vg6SVsICg7Ctw2olDAtGaIdg44dgrZUhg7QCCYyWiMCAkGAvG6QIVpgV/NP/6q6eX/373z3dM93TXTWfgQ/arndXz1/Ud6tm9n3f/OY3EwAAALA8MQ0AAAArEtMAAACwIjENAAAAKxLTAAAAsCIxDQAAACsS0wAAALAiMQ0AAAArEtMAAACwIjENAAAAKxLTAAAAsCIxDQAAACsS0wAAALAiMQ3Azrn3iefTtWvPpyfP1efvhHNPpuevXUvPP3Fvff42NMc077zdm558bnK8p3bs59PeaD97j9TmTUyO5drUBj73Zh976fzk9Vq/vx7ZC8c+tvD9LuH83o59XwFQJaYBYNtykD33ZLq3Nm8lIZjLeQtDe1OOiOkmRItjGk2bLr+u81LE9Lrk6L1Wbne0r70ThrCYBugHMQ0A27a2mJ7cda1sa970zVoc002M7p2vzmvscExv8nyKaYB+ENMAZ1AbAuebx13Hj6aOL97H8TOeFu4YNncQyxgZ3wVd+Ehru17z3244je/qHepsp7K/8aO5h8svFxttzI2Ptb5uu0z73g/3u3iflVBs3+fEzLlpou5wfj4f5XlYGJfLqN6BLu9Yl8fevvfiGKrbysvGad1z2/3cKucoWBSk885LLcCb7cRpnfM8OtZHipg+8ffX4vfVUX7mlffbea+j95Ffl/vvno/usQOwHWIa4Axqw2F6wT6NwMNIai7epxf+lXhoIuGIi/pKRE/jqxI/0+0XsdM9lmx8PIuDJxsv132UuFy3Xab7Xo7e5/j1vGOeCdHyPebz8MTkHOR150Tl6spwHimPpXPs5fLhuGbWy/K63fcVH2tuztv0sy3O0Yzx/LlxWDkv3e2PdWK6dp6b2A/7OOn3V7OPOcccNfvpnr9yXzP7btbp7rt8z+1fQvzT5DUA2yGmAc6g9mL8MB7mBVgRHOUFfRE1MyoxUYZMq7O9uEw16CbLdN5DTT2Kuu+/ssxS+4yhOD5/ZTTmc9ZuN/55xlLvZXnl5zv7WR197I3qecjrVs5Na+45mq/53hotN3MOKuel/D7M4vurzZ+J37zdk3x/LfV5VcZUI5y/OfvufK+Ux94Yb+OfvxWnAXDaxDTAGVTGVjWoFgVIEVTN9nIMTUxDoLNOWLYWIjFQ4nqVbTTi8TV/Ptz/4fbnxFzcV22ZZfbZWW/853gOppqwm3Mcrc7x1E2Dc2LutrLmONvPpxbL3eOZfn7lMXS208rrFtOa8xWO76jzXzU+zs5fvlTOy+KYnhOwnc9tJH6+S33WhXnrdMx77+HzmLOdTkw3y4RzG/zLt7vrAXC6xDTAGXSsmG6WmYROvsA/Iv4alVg4DJ+wXBa3Gdebt69FsTM1J2g626wss9Q+43pHRWOeX0ZpMG9/xxaisnqe6sfbBnv3rujimB6vE7Z/1Lk9QieWK+dlmZie2V95DvJ229dLfda1eQs+z8a8z7yI6cq+Z2N6znEAsFViGuAMOl5Mj9fLF/mdi/1FaiEwJw46kR2XmRcuc0Kkqx5z3aCvLLPUPuN6IV7j8lNHzF/qvaym/YybXzJXxOfCyO187pUg7Jybyvy552g5M98HxXnpfnZjMbBrsd1sJ37PxdfH/P6q7qdj3mcezll138V6844PgK0T0wBnUBtah6GwXEw3054bBfWyF/dlxDTG++qESBkMxXpNuHSOd9lIGy/XOYaZOKlv6+h9Fq+bY+6el3uf2CveU5w/Og/xF5DNnKeTat977TzFYx/9OX4WnWMpP6vJ6+n7GL8+DMbJPqfnrThHhfN73fM1s3ztvJTnsXkdjrGc3x5T3E6x3eN9f5XvdWL0/TX9hWwzx1JG+OxYaMbmaLsxwmePb7Tenl9ABrBtYhrgDLr3wtX04p8vdi7OL/75xXT54bDcuYvp6ouX00PTZbLxci9efihMW+Dhy+nFmW1kk+282LqaLsaoqqz30OW4fHGscz2ULjfLjv9bX7ddJk4bW7zP2fWa8xqWnzlPzfs6nH/1QhtM4Xwse26XMD7+2vmPx15+FsXyzfdBOy9/Tnnd8Hl15o/Wze9x+r01/9xmM+drZtn6eel8LqPpzXbieeuc59Exld/La/v+ml1v5vwVn/ns59s9//l7Im/z8Htjdpls2eMDYHPENAArGF/Ub/xCvhNkJ7E45k6miEoA4EwR0wAs7Z4Lz6UXXijuvK3dPenilRfScxfuqcxb1Sh4X3hhIzHdnIsrF9M9lXkAwPCJaRrf+MY3AOY7/8wool8YeSY9WJu/Fg+mZ5p9jDzzYGX+cYy3+cz52rzjefCZyTFu9FwAwHy163lOn5g+o2qDEgAA6J/a9T6bJ6bPmNrgi77+9a8DAAA7qHb9HtWu/9kcMX2G1AZcbZDWfO1rXwMAAE5B7Xq8pnZ9X+sANkNMnxHlIIuDsDaAAQCA3RWv58tr/VoPsH5i+gyIAysOujgY77zzTgAAoAfidXy8vo/X/bUuYL3E9MDFAVVGdByQX/3qVzu+8pWvAAAAO6C8Vo/X8WVUx+v/Wh+wPmJ6wOJAmhfS7YBsB+qXv/zlqi996UsAAMApqF2PZ2VcC+rtEtMDFgfRvJCOAV0O4i9+8YsAAMAWldfoMaznBXXsgFonsB5ieqDiAGr/hmpeSLcDMw/WL3zhCx2f//znAQCALSivzWNczwvq9to/9kCtFzg5MT1QcfAcFdJtRLeD9nOf+xwAALBDYmC3Ub0oqGMP1HqBkxPTAxVDOsb0opBuB+pnP/vZxmc+8xkAAGCL2mvzGNWLgrp2d7rWC5zc+z75yU8mhukTn/jE1Mc//vHGxz72scZHP/rR9JGPfKTxqU/9AwAA0CPttXy+rm+v8dtr/tgBtU5gPcT0gMVBFGM6D7g2pu+4447q4AQAAHZXvo5vY7oNajF9usT0gMVBVMZ0+zdZYhoAAPqnjek2qMX06RPTAxUHUAzpGNN5AIppAADon/ZaPsa0oD5dYnqg4uAR0wAAMCxievvE9EDFwRNjOg+0GNMf/vCHq4MTAADYXfk6PsZ0G9Ri+vSI6YGKg0dMAwDAsIjp7RPTAxUHzzpi+n0//isAAHAKatfjJTG9fWJ6oOLgWVdM1/6hcgAAYH3EdH+I6YGKg0dMAwBAP4jp/hDTAxUHTxnTecCJaQAA2D3Hiek2qMX06RLTAxUHj5gGAIB+ENP9IaYHKg4eMQ0AAP0gpvtDTA9UHDxievOuXbtWnQ4AAKsQ0/0hpgcqDh4xvXliGgCAdRDT/SGmByoOHjG9eWIaAIB1ENP9IaYHKg4eMb15YhoAgHUQ0/0hpgcqDh4xvXliGgCAdRDT/SGmByoOHjG9eWIaAIB1ENP9IaYHKg6eocT0+fPn0/7+fvrRj35Unb+s42znqHXENAAA6yCm+0NMD1QcPGK6S0wDALCrxHR/iOmBioNnKDG9S773ve+lv/zlL01k59diGgCAdRDT/SGmByoOHjG9fmIaAIBNENP9IaYHKg6eTcf0d77znfTb3/52qcem9/b2pnKAPvHEE9N5+c95WisvE9fN4ZoDNodsO62N2nadZR7fLrfTvs7/zeu322pDuVwn/7ldJmqXBQCA4xLT/SGmByoOnk3HdNZGbYzUmjaiY6i20+O6OdD/+Mc/NvKf87QYtPl1juYcvzHI29Attx+V22nXifvK2yyXia/zf/Prdj9iGgCAdRDT/SGmByoOntOI6VYbmTE8oxzNMVqzHMV5+fKOcjm9DNq8rfLu9aLprVpMl3e0y1gu1ynni2kAANZBTPeHmB6oOHhOM6ZbOUxzoJbhXAvdHKTlcll+nafXgracF83bXpxfxnR8nZWxXC5TzhfTAACsg5juDzE9UHHwnHZM51jOcRkfv47zxDQAANSJ6f4Q0wMVB89pxHQblzkq28CsqcV0+Tj3vOll0Na2tWh6q9xO+TorY7lcppwvpgEAWAcx3R9ieqDi4Nl0TOc7wKv+Nu/a9Bir7Z3nuGwZtHl/tV9AVv78c6ncTvk6K2O5XKY9vnbfYhoAgHUQ0/0hpgcqDp5Nx/Qq5sV0Oy9Haat8TLwWvW1Qt+uU82vWEdPttHi87XQAADguMd0fYnqg4uDZpZg+iRyvi34WepvENAAA6yCm+0NMD1QcPEOJ6XynWkwDADBkYro/xPRAxcEzhJguH7veNWIaAIB1ENP9IaYHKg6ePsd0/Jno2j+1tSvENAAA6yCm+0NMD1QcPH2OaQAAOEvEdH+I6YGKg0dMAwBAP4jp/hDTAxUHj5gGAIB+ENP9IaYHKg4eMQ0AAP0gpvtDTA9UHDxiGgAA+kFM94eYHqg4eMQ0AAD0g5juDzE9UHHwrCumAQCAzatdj5fE9PaJ6YGKg2cdMQ0AAOwOMb19Ynqg4uAR0wAAMCxievvE9EDFwSOmAQBgWMT09onpgYqDR0wDAMCwiOntE9MDFQePmAYAgGER09snpgcqDp5lYvrv/vHfAACAHSemd4eYHqg4eMQ0AAAMg5jeHWJ6oOLgEdMAADAMYnp3iOmBioNHTAMAwDCI6d0hpgcqDh4xDQAA63HX1Zvp3Vu3J26myw/Vl9sUMb07xPRAxcEjpgEA4Lh+lR793ZV0193j1xcOUko3XkuXnn0tHbyX0sGz94+Xu/updN9jvwrrbYaY3h1ieqDi4BHTAABwHKOQvn5rVM+jr3dupEs/30tX3m4D+v506c2U3r3+p3TnY6+kg7/lhW6l/d9sNqjF9O4Q0wMVB4+YBgCAVbUhfTtdf+GVdP2dHMv561a68th4mXMvjea/l6fdTgcv76cLzfKbDWoxvTvE9EDFwdOvmN5LH3g8pTueSulDP92rzN+iH9xojuuOp26k99fmR798Lb01+l/p9T9U5lXtpSuj/0G/9fLkPa+8PgAA63Up/f5/Rxdkb76UvpVf3/1UevTlm+mtG6+k+9plfvlSuv76G+nSz8ePen/68fE13LsH++N1NkBM7w4xPVBx8Gw6pt//s3H8zloiOkt3vZY+1K7/s/36MicRtv/BH1TmL3D4Pm+lD9xVX2ZKTAMA9N8jr6Yb6XZ6+enJz0UvNH4EPP3tjfTo5OerN0FM7w4xPVBx8GwvprNVg3rDd6ZPENP1O9P76YPNtCUCe6EipgEA2LL707f+4+l0+c1RIN86SD+ZTn84nbv8atr/66vpF489PF3+u1dvjha8na7/4UK6c7rs+onp3SGmByoOnlOL6cdfS39fTjtOtG7SSWK6ZhrYYhoAYDD+8430bvOz0KOv926nt15/afJo92PpwsHtZlr+p7HG8Tz5+ej8yPfbedrk629vpF/Eba6JmN4dYnqg4uDZRkwfRmYZre2d3KDzOPfh/PLO9N//9FZ3vZmAXeIucS2mi2mdO+3h2A73P74zXb8jP7lr3TymfStd+eVkHyP3vTz5TZCTr2441x7zbtcfz6t9xcfAy+17RBwA4Jj+cCOldw7Soz8+vPPceGj82Pf+r8e/zfuB66N4fvu1dC4uk+9oXzoYXcvdSBc609dDTO8OMT1QcfCcfkwfPqrdeSQ6BPaM6bq1mI7bm9VGcYztuY+IHxHTH3q8DPba9o8T0/vp+uvhLw1mfiZ6UUyXZu9iNyH9zmvhl2GU2wcAYGkniumH07d/I6bPAjE9UHHwnFpMV0yDNQbxwjvYlZiu3uWube/kd6an24rTJneny5hu1p33mPfCGM7KIF4+pi+8PqrkGM451CvLNsvFgAcAYDnHesx7FNrNvzU9+fKY9+CJ6YGKg2dbMX0Yvtm8x7fL6bPLVSN2wfSFjojpaqyvLaZz9Ha/Vo7p/Lek5fTJXejql5gGADi+718Yx3P6v3T5oXb6w+lfL+2nS8/upwceCXeuLx6kd0dLHlx9On3335f57d/HI6Z3h5geqDh4Ti2mJ3d1D6OzHqyrxvRhrPc3ptufZ577WPdSMT2O8ZlHt5tlN/MYEQDAWfbpX48D+a2X4vXrPPenR/9n/Nj3ff5prDNBTA9UHDynHdOdEJ2GZz8e895MTJfhXJt2dEzPf2x7TmQDAHB8d/8p7ef7IfnH65o4vj+de/aNdP3g1fTADyfLXHwlHbx9K11/9un06fz6hy+lg/fG13TN6w0Q07tDTA9UHDynH9MjIVCnvxE7RPGMmSCOd7BjnM+aBnDYfvfud7DumI7vM84rYrgM4fZO9bIxPV5+/t3nZvvF/PtevlHc2QYAYHn3T67BbqX93+2nKzfyz0rna678C8jGy5x7aTR/8rPV7944SL//77z87VFcPyWmzwAxPVBx8GwlpkcO4zPE7Ux8luFbi+mxw8e9WyFqG1u4M92ZHubN3Fnu/rz0Wy+P/oe87J3p5s/1r3g3ehzU4cvPSwMAnNDD6SeTmyDvvvlKOvf98d3qG//11GjeY+nyjdH0639Kd158NR00v3ws/EKyDRHTu0NMD1QcPJuO6fWaH9MAAHD6fpXOPd7eab4/XXpz1Mxv30zXD26mt95L6eDZyS8bu/vp9MDFzYZ0JqZ3h5geqDh4yphug3onY7p6lxgAAHbDXVdvNv8s1tjN8Fu+T0ctpttrfDF9usT0QMXB04+YPrwj3XlcGgAAmBLTu0NMD1QcPP2LaSENAAA1Ynp3iOmBioOnHzENAAAcRUzvDjE9UHHwiGkAABgGMb07xPRAxcETY7oN6jamMzENAAD90MZ0ey3fxnR7rS+mT4+YHqg4eJaJaQAAoD/E9PaJ6QGLAygGdRvTbVDXBicAALC72pCOMS2kT5eYHrA4iMqYjnena4MTAADYXfGutJjeDjE9YHEQxZgu707XBicAALC72mv5NqTF9OkT0wMWB1E7sNqgbv8Gqx2E+W+2ovzbAQEAgO0rr9VjSLcxHa/3YwfUOoH1ENMDFwdSjOlaUNeiGgAA2A3xuj2GdIzpeP1f6wPWR0wPXBxM7QCrBXUZ1QAAwO6J1+9lSGfx+r/WB6yPmD4D4oCKA60dfGVUz1MbzAAAwPrUrsNL8To+Xt/H6/5aF7BeYvoMiIMqiwMui4OxVRu0AADA6atdr5fX9OU1f60LWC8xfUaUg6scfK3aQAUAALavdv2eldf6tR5g/cT0GVIOsqw2GAEAgN1Xu76vdQCbIabPmNqAi2qDFAAA2L7a9XtUu/5nc8T0GVUbfAAAQP/UrvfZPDF9xtUGIwAAsPtq1/ecHjFNR22QAgAA21e7fmd7xDQAAACsSEwDAADAisQ0AAAArEhMAwAAwIrENAAAAKxITAMAAMCKxDQAAACsSEwDAADAisQ0AAAArEhMAwAAwIrENAAAAKxITAMAAMCKxDQAAACsSEwDAADAisQ0AAAArEhMAwAAwIrENAAAAKxITAMAAMCKxDQAAACsSEwDAADAisQ0AAAArEhMAwAAwIrENAAAAKxITAMAAMCKxDQAAACs5JPp/wFCdQBSQKzPywAAAABJRU5ErkJggg=="},21738:function(e,t,n){t.Z=n.p+"assets/images/init-output-656bda13af34931a7797e1f6d4195dd3.png"},87554:function(e,t,n){t.Z=n.p+"assets/images/serve-command-e20888aaa70dc7173c281943b2405dac.png"},10839:function(e,t,n){t.Z=n.p+"assets/images/serve-output-b99e573e02c54df031dc57ead16e071a.png"}}]);