(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{268:function(e,t,a){e.exports=a(462)},273:function(e,t,a){},459:function(e,t,a){},462:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a.n(n),o=a(235),i=a.n(o),l=(a(273),a(57)),s=a(58),c=a(62),u=a(61),m=a(257),p=a(101),d=a.n(p),h=a(102),g=(a(158),a(159),a(160),a(161),a(474)),b=a(64),E=a(142),y=a(471),f=a(473),v=a(258),_=a(76),C=a.n(_),S=a(475),G=a(143);function q(){var e=Object(E.a)(['\n    query {\n        userForm(apiKey: "e8d6edf1b4b67670c947ede51ba14398") {\n            id\n            username\n            type\n            last_submission\n            status\n            height\n            count\n        }\n    }\n']);return q=function(){return e},e}function O(){var e=Object(E.a)(["\n    query UserQuery {\n        user {\n            name\n            email\n            time_zone\n            account_type\n            status\n            loginToGetSubmissions\n            pdf_designer_group\n        }\n    }\n"]);return O=function(){return e},e}var j=C()(O()),w=C()(q()),A=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;Object(l.a)(this,a);return(n=t.call(this,e)).onChange=function(e){n.setState({codeJS:e})},n.prettify=function(){n.setState({codeJS:Object(h.format)(n.state.codeJS)})},n.play=function(){n.userdata={},n.userformdata={},n.props.codeGraphql.includes("user")&&(console.log("\u0131 am in user"),n.props.codeGraphql.includes("name")&&(n.userdata.name=n.user.name),n.props.codeGraphql.includes("email")&&(n.userdata.email=n.user.email),n.props.codeGraphql.includes("time_zone")&&(n.userdata.time_zone=n.user.time_zone),n.props.codeGraphql.includes("account_type")&&(n.userdata.account_type=n.user.account_type),n.props.codeGraphql.includes("status")&&(n.userdata.status=n.user.status),n.props.codeGraphql.includes("loginToGetSubmissions")&&(n.userdata.loginToGetSubmissions=n.user.loginToGetSubmissions),n.props.codeGraphql.includes("pdf_designer_group")&&(n.userdata.pdf_designer_group=n.user.pdf_designer_group)),n.historyArray.push(n.props.codeGraphql+" \n"),console.log(n.codeJS),n.onChange(""),n.onChange(JSON.stringify(n.userdata))},n.state={codeJS:"",helper:"{ user { name} } ",value:"",copied:!1},n.user={name:"",email:"",time_zone:"",account_type:"",status:"",loginToGetSubmissions:"",pdf_designer_group:""},n.userForm=[],n.userdata={},n.userformdata=[],n.historyArray=[],n}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{animated:"vertical",onClick:this.play},r.a.createElement(g.a.Content,{hidden:!0},"Run"),r.a.createElement(g.a.Content,{visible:!0},r.a.createElement(b.a,{name:"play circle outline"}))),r.a.createElement(y.a,{trigger:r.a.createElement(g.a,{animated:"vertical"},r.a.createElement(g.a.Content,{hidden:!0},"History"),r.a.createElement(g.a.Content,{visible:!0},r.a.createElement(b.a,{name:"history"}))),style:{height:"auto",top:"auto",left:"auto",bottom:"auto",right:"auto"}},r.a.createElement(y.a.Header,null,"History of Query"),r.a.createElement(y.a.Content,null,r.a.createElement(y.a.Description,null,this.historyArray.map((function(e){return r.a.createElement("h2",null," ",e,r.a.createElement(G.CopyToClipboard,{text:e},r.a.createElement(g.a,{animated:"vertical"},r.a.createElement(g.a.Content,{hidden:!0},"Copy"),r.a.createElement(g.a.Content,{visible:!0},r.a.createElement(b.a,{name:"copy"})))),r.a.createElement("br",null))}))))),r.a.createElement(G.CopyToClipboard,{text:this.state.codeJS,style:{position:"absolute",right:"40px"}},r.a.createElement(g.a,{animated:"vertical"},r.a.createElement(g.a.Content,{hidden:!0},"Copy"),r.a.createElement(g.a.Content,{visible:!0},r.a.createElement(b.a,{name:"copy"})))),r.a.createElement(d.a,{mode:"javascript",theme:"dracula",style:{position:"absolute",right:"40px",width:"700px"},value:this.state.codeJS,onChange:this.onChange,name:"UNIQUE_ID_OF_DIV",enableSnippets:!0,enableLiveAutocompletion:!0,enableBasicAutocompletion:!0,highlightActiveLine:!0,editorProps:{$blockScrolling:!0},setOptions:{enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!0,wrapBehavioursEnabled:!0}}),r.a.createElement(S.a,{query:j},(function(t){var a=t.loading,n=t.error,o=t.data;return a?r.a.createElement("h4",null," Loading ..."):(n&&console.log(n),e.user.name=o.user.name,e.user.email=o.user.email,e.user.time_zone=o.user.time_zone,e.user.account_type=o.user.account_type,e.user.status=o.user.status,e.user.loginToGetSubmissions=o.user.loginToGetSubmissions,e.user.pdf_designer_group=o.user.loginToGetSubmissions,r.a.createElement("div",null))})),r.a.createElement(S.a,{query:w},(function(t){var a=t.loading,n=t.error,o=t.data;return a?r.a.createElement("h4",null," Loading ..."):(n&&console.log(n),e.userForm=o.userForm,r.a.createElement("div",null))})),r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{content:this.helper,header:"If you help , you can check https://graphql.org/",position:"bottom",trigger:r.a.createElement(v.a,{src:"https://semantic-ui.com/images/avatar/small/stevie.jpg",avatar:!0})})))}}]),a}(r.a.Component),k=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).onChange=function(e){n.setState({codeGraphql:e})},n.prettify=function(){n.setState({codeGraphql:Object(h.format)(n.state.codeGraphql)})},n.state={codeGraphql:""},n}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{animated:"vertical",onClick:this.prettify},r.a.createElement(g.a.Content,{hidden:!0},"Prettify"),r.a.createElement(g.a.Content,{visible:!0},r.a.createElement(b.a,{name:"leaf"}))),r.a.createElement(d.a,{mode:"graphqlschema",theme:"dracula",style:{position:"absolute",left:"40px",width:"700px"},value:this.state.codeGraphql,onChange:this.onChange,name:"UNIQUE_ID_OF_DIV",enableSnippets:!0,enableLiveAutocompletion:!0,enableBasicAutocompletion:!0,highlightActiveLine:!0,editorProps:{$blockScrolling:!0},setOptions:{enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!0,wrapBehavioursEnabled:!0}}),r.a.createElement(A,{codeGraphql:this.state.codeGraphql}))}}]),a}(r.a.Component),J=a(21),T=(a(459),a(460),new m.a({uri:"/graphql"})),F=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(J.a,{client:T},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"GraphQL")),r.a.createElement(k,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[268,1,2]]]);
//# sourceMappingURL=main.7e2ddc4a.chunk.js.map