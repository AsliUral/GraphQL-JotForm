(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{154:function(e,t,n){},298:function(e,t,n){e.exports=n(501)},303:function(e,t,n){},485:function(e,t,n){},501:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(84),o=n.n(c),l=(n(303),n(15)),i=n(16),u=n(21),s=n(20),p=n(286),m=n(155),d=n.n(m),b=(n(186),n(187),n(124),n(125),n(25)),h=(n(315),n(260)),O=n.n(h),E=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){return Object(l.a)(this,n),t.call(this,e)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{src:this.props.codeJS,style:{position:"absolute",right:"40px",width:"700px"},theme:"ocean"}))}}]),n}(r.a.Component),y=Object(b.connect)((function(e){return{codeJS:e.codeJS}}))(E),f=n(519),j=n(176),v=n(518),g=n(508),C=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){return Object(l.a)(this,n),t.call(this,e)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(j.a,{style:{position:"absolute",right:"40px",width:"700px"}},r.a.createElement(v.a,{active:!0,style:{position:"absolute",right:"40px",width:"700px",height:"700px"}},r.a.createElement(g.a,{style:{position:"absolute",right:"40px",width:"700px"}},"Loading"))))}}]),n}(r.a.Component),S=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){return Object(l.a)(this,n),t.call(this,e)}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{query:this.props.currentQuery},(function(t){var n=t.loading,a=t.error,c=t.data;if(n)return r.a.createElement(C,null);if(a&&console.log(a),c)return e.props.setQueryResult(c),"";e.props.codeGraphql;return""})))}}]),n}(r.a.Component),k=Object(b.connect)((function(e){return{queryText:e.queryText,currentQuery:e.currentQuery}}),(function(e){return{setQueryResult:function(t){return e({type:"SETQUERYRESULT",val:t})}}}))(S),q=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){return Object(l.a)(this,n),t.call(this,e)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,null),r.a.createElement(k,null))}}]),n}(r.a.Component),Q=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){return Object(l.a)(this,n),t.call(this,e)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{mode:"graphqlschema",theme:"dracula",style:{position:"absolute",left:"40px",width:"700px",zIndex:999},value:this.props.codeGraphql,onChange:this.props.onChangecodeGraphql,name:"UNIQUE_ID_OF_DIV",enableSnippets:!0,enableLiveAutocompletion:!0,enableBasicAutocompletion:!0,highlightActiveLine:!0,editorProps:{$blockScrolling:!0},setOptions:{enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!0,wrapBehavioursEnabled:!0}}))}}]),n}(r.a.Component),G=Object(b.connect)((function(e){return{codeGraphql:e.codeGraphql}}),(function(e){return{onChangecodeGraphql:function(t){return e({type:"ONCHANGEGRAPHQL",val:t})}}}))(Q),w=n(517),L=n(71),x=n(114),D=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){return Object(l.a)(this,n),t.call(this,e)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(x.CopyToClipboard,{text:this.props.codeGraphql},r.a.createElement(w.a,{animated:"vertical"},r.a.createElement(w.a.Content,{hidden:!0},"Copy"),r.a.createElement(w.a.Content,{visible:!0},r.a.createElement(L.a,{name:"copy"}))))}}]),n}(r.a.Component),F=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){return Object(l.a)(this,n),t.call(this,e)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{animated:"vertical",onClick:this.props.addMarkQuery},r.a.createElement(w.a.Content,{hidden:!0}," Query Mark "),r.a.createElement(w.a.Content,{visible:!0},r.a.createElement(L.a,{name:"bookmark"}))))}}]),n}(r.a.Component),R=Object(b.connect)((function(e){return{querymark:e.querymark}}),(function(e){return{addMarkQuery:function(){return e({type:"ADDMARKQUERY"})}}}))(F),T=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){return Object(l.a)(this,n),t.call(this,e)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(w.a,{animated:"vertical",onClick:this.props.prettifycodeGraphql},r.a.createElement(w.a.Content,{hidden:!0},"Prettify"),r.a.createElement(w.a.Content,{visible:!0},r.a.createElement(L.a,{name:"leaf"})))}}]),n}(r.a.Component),I=Object(b.connect)(null,(function(e){return{prettifycodeGraphql:function(){return e({type:"PRETTIFYGRAPHQL"})}}}))(T),P=n(511),A=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){return Object(l.a)(this,n),t.call(this,e)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(P.a,{trigger:r.a.createElement(w.a,{animated:"vertical"},r.a.createElement(w.a.Content,{hidden:!0},"History"),r.a.createElement(w.a.Content,{visible:!0},r.a.createElement(L.a,{name:"history"}))),style:{height:"auto",top:"auto",left:"auto",bottom:"auto",right:"auto"}},r.a.createElement(P.a.Header,null,"History of Query"),r.a.createElement(P.a.Content,null,r.a.createElement(P.a.Description,null,this.props.queryHistory.map((function(e){return r.a.createElement("h2",null," ",e,r.a.createElement(x.CopyToClipboard,{text:e},r.a.createElement(w.a,{animated:"vertical"},r.a.createElement(w.a.Content,{hidden:!0},"Copy"),r.a.createElement(w.a.Content,{visible:!0},r.a.createElement(L.a,{name:"copy"})))),r.a.createElement("br",null))}))))))}}]),n}(r.a.Component),_=Object(b.connect)((function(e){return{queryHistory:e.queryHistory}}))(A),N=n(514),H=n(287),U=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){return Object(l.a)(this,n),t.call(this,e)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{header:"If you help , you can check https://graphql.org/",position:"bottom",trigger:r.a.createElement(H.a,{src:"https://semantic-ui.com/images/avatar/small/stevie.jpg",avatar:!0})}))}}]),n}(r.a.Component),B=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){return Object(l.a)(this,n),t.call(this,e)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{animated:"vertical",onClick:this.props.resultOfPlay},r.a.createElement(w.a.Content,{hidden:!0},"Run"),r.a.createElement(w.a.Content,{visible:!0},r.a.createElement(L.a,{name:"play circle outline"}))))}}]),n}(r.a.Component),M=Object(b.connect)(null,(function(e){return{resultOfPlay:function(){return e({type:"RESULTOFPLAY"})}}}))(B),J=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){return Object(l.a)(this,n),t.call(this,e)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(I,null),r.a.createElement(R,null),r.a.createElement(D,null),r.a.createElement(M,null),r.a.createElement(_,null),r.a.createElement(U,null))}}]),n}(r.a.Component),Y=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){return Object(l.a)(this,n),t.call(this,e)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(J,null),r.a.createElement(G,null),r.a.createElement(q,null))}}]),n}(r.a.Component),X=n(26),V=(n(485),n(486),n(111)),z=(n(154),n(164)),K=(window.matchMedia("(min-width: 800px)"),function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){return Object(l.a)(this,n),t.call(this,e)}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,this.props.sidebarOpen?null:r.a.createElement(w.a,{animated:"vertical",className:"toggle-menu",onClick:function(){return e.props.onSetSidebarOpen(!0)},style:{transform:"translate(".concat(this.props.width,"px, 20vh)"),position:"absolute",right:"0"}},r.a.createElement(w.a.Content,{hidden:!0},"Docs"),r.a.createElement(w.a.Content,{visible:!0})))}}]),n}(r.a.Component)),W=Object(b.connect)((function(e){return{sidebarOpen:e.sidebarOpen}}),(function(e){return{onSetSidebarOpen:function(t){return e({type:"ONSETSIDEBAROPEN",val:t})}}}))(K),$=n(516),Z=n(515),ee=n(513),te=(n(488),a.Component,function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).userQuery="name: { type: GraphQLString },email: { type: GraphQLString },time_zone: { type: GraphQLString },account_type: { type: GraphQLString },status: { type: GraphQLString }, loginToGetSubmissions: { type: GraphQLInt }, pdf_designer_group: { type: GraphQLInt },}",a.userFormQuery="id: { type: GraphQLString }, username: { type: GraphQLString },type: { type: GraphQLString },last_submission: { type: GraphQLString },status: { type: GraphQLString },height: { type: GraphQLInt },count: { type: GraphQLInt },",a.userFormContent_User=r.a.createElement("div",null,r.a.createElement($.a,null,a.userFormQuery)),a.user=[{key:"panel-1a",title:"userForm",content:a.userFormContent_User}],a.userContent=r.a.createElement("div",null,"Schema Details",r.a.createElement($.a,null,a.userQuery,r.a.createElement(Z.a.Accordion,{panels:a.user}))),a.userFormContent=r.a.createElement("div",null,"Schema Details",r.a.createElement("div",null,r.a.createElement($.a,null,a.userFormQuery))),a.rootPanels=[{key:"panel-1",title:"user query",content:{content:a.userContent}},{key:"panel-2",title:"userForm query",content:{content:a.userFormContent}}],a.panes=[{menuItem:"Marked Query",render:function(){return r.a.createElement(ee.a.Pane,null,a.props.querymark.map((function(e){return r.a.createElement("div",null,r.a.createElement(D,{text:e}),r.a.createElement("li",null," ",e))})))}},{menuItem:"Schema Details",render:function(){return r.a.createElement(ee.a.Pane,null,r.a.createElement(Z.a,{defaultActiveIndex:0,panels:a.rootPanels,styled:!0}))}}],a}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null," JotForm Query"),this.props.querymark.map((function(e){})),r.a.createElement(ee.a,{panes:this.panes}))}}]),n}(r.a.Component)),ne=Object(b.connect)((function(e){return{querymark:e.querymark}}))(te),ae=(window.matchMedia("(min-width: 800px)"),function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){return Object(l.a)(this,n),t.call(this,e)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.sidebarDocked?r.a.createElement(w.a,{animated:"vertical",onClick:this.props.pinSideBar(!0)},r.a.createElement(w.a.Content,{hidden:!0},"Unpin Sidebar"),r.a.createElement(w.a.Content,{visible:!0},r.a.createElement(L.a,{name:"lock open"}))):r.a.createElement(w.a,{animated:"vertical",onClick:this.props.pinSideBar(!1)},r.a.createElement(w.a.Content,{hidden:!0},"Pin Sidebar"),r.a.createElement(w.a.Content,{visible:!0},r.a.createElement(L.a,{name:"lock"}))),r.a.createElement(ne,null))}}]),n}(r.a.Component)),re=Object(b.connect)((function(e){return{sidebarDocked:e.sidebarDocked}}),(function(e){return{pinSideBar:function(t){return e({type:"PINSIDEBAR",val:t})}}}))(ae),ce=(window.matchMedia("(min-width: 800px)"),function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).onSetSidebarOpen=a.props.onSetSidebarOpen.bind(Object(V.a)(a)),a}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(z.a,{sidebar:r.a.createElement(re,null),open:this.props.sidebarOpen,onSetOpen:this.props.onSetSidebarOpen,pullRight:!0,touch:!0,shadow:!1,docked:this.props.sidebarDocked,styles:{sidebar:{background:"white",width:300}}}),r.a.createElement(W,null))}}]),n}(r.a.Component)),oe=Object(b.connect)((function(e){return{sidebarOpen:e.sidebarOpen,sidebarDocked:e.sidebarDocked}}),(function(e){return{onSetSidebarOpen:function(t){return e({type:"ONSETSIDEBAROPEN",val:t})}}}))(ce),le=new p.a({uri:"/graphql"}),ie=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(X.a,{client:le},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"GraphQL")),r.a.createElement(Y,null),r.a.createElement(oe,null))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ue=n(86),se=n(175),pe=n(30),me=n(174),de=n(285),be=n(87),he=n.n(be);function Oe(){var e=Object(me.a)(["\n                ","\n            "]);return Oe=function(){return e},e}function Ee(){var e=Object(me.a)(["\n        {\n            ","\n        }\n    "]);return Ee=function(){return e},e}n(86),n(25);var ye={codeGraphql:"",codeJS:{},queryText:"",currentQuery:he()(Ee(),"queryText"),queryHistory:[],xPosition:300,querymark:[],sidebarOpen:!1,sidebarDocked:!1},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;return"ONCHANGEGRAPHQL"===t.type?Object(pe.a)(Object(pe.a)({},e),{},{codeGraphql:t.val}):"PRETTIFYGRAPHQL"===t.type?Object(pe.a)(Object(pe.a)({},e),{},{codeGraphql:Object(de.format)(e.codeGraphql)}):"RESULTOFPLAY"===t.type?Object(pe.a)(Object(pe.a)({},e),{},{queryText:e.codeGraphql,currentQuery:he()(Oe(),e.codeGraphql),queryHistory:[].concat(Object(se.a)(e.queryHistory),[e.codeGraphql+" \n"])}):"SETQUERYRESULT"===t.type?Object(pe.a)(Object(pe.a)({},e),{},{codeJS:t.val}):"SETXPOSITION"===t.type?Object(pe.a)(Object(pe.a)({},e),{},{xPosition:t.val}):"ADDMARKQUERY"===t.type?Object(pe.a)(Object(pe.a)({},e),{},{querymark:[].concat(Object(se.a)(e.querymark),[e.codeGraphql+" \n"])}):"ONSETSIDEBAROPEN"===t.type?Object(pe.a)(Object(pe.a)({},e),{},{sidebarOpen:t.val}):"PINSIDEBAR"===t.type?Object(pe.a)(Object(pe.a)({},e),{},{sidebarDocked:t.val}):e},je=Object(ue.createStore)(fe,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());o.a.render(r.a.createElement(b.Provider,{store:je},r.a.createElement(ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[298,1,2]]]);
//# sourceMappingURL=main.883b4ee5.chunk.js.map