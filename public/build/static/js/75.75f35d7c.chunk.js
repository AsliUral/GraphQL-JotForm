(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[75],{1307:function(n,t,e){!function(n){"use strict";n.defineMode("ntriples",(function(){var n=0,t=1,e=2,i=3,r=4,a=5,u=6,s=7,o=8,l=9,c=10,p=11,f=12;function h(h,v){var b,d=h.location;b=d==n&&"<"==v?t:d==n&&"_"==v?e:d==i&&"<"==v?r:d==a&&"<"==v?u:d==a&&"_"==v?s:d==a&&'"'==v?o:d==t&&">"==v||d==e&&" "==v?i:d==r&&">"==v?a:d==u&&">"==v||d==s&&" "==v||d==o&&'"'==v||d==l&&" "==v||d==c&&">"==v?p:d==o&&"@"==v?l:d==o&&"^"==v?c:" "!=v||d!=n&&d!=i&&d!=a&&d!=p?d==p&&"."==v?n:f:d,h.location=b}return{startState:function(){return{location:n,uris:[],anchors:[],bnodes:[],langs:[],types:[]}},token:function(n,t){var e=n.next();if("<"==e){h(t,e);var i="";return n.eatWhile((function(n){return"#"!=n&&">"!=n&&(i+=n,!0)})),t.uris.push(i),n.match("#",!1)||(n.next(),h(t,">")),"variable"}if("#"==e){var r="";return n.eatWhile((function(n){return">"!=n&&" "!=n&&(r+=n,!0)})),t.anchors.push(r),"variable-2"}if(">"==e)return h(t,">"),"variable";if("_"==e){h(t,e);var a="";return n.eatWhile((function(n){return" "!=n&&(a+=n,!0)})),t.bnodes.push(a),n.next(),h(t," "),"builtin"}if('"'==e)return h(t,e),n.eatWhile((function(n){return'"'!=n})),n.next(),"@"!=n.peek()&&"^"!=n.peek()&&h(t,'"'),"string";if("@"==e){h(t,"@");var u="";return n.eatWhile((function(n){return" "!=n&&(u+=n,!0)})),t.langs.push(u),n.next(),h(t," "),"string-2"}if("^"==e){n.next(),h(t,"^");var s="";return n.eatWhile((function(n){return">"!=n&&(s+=n,!0)})),t.types.push(s),n.next(),h(t,">"),"variable"}" "==e&&h(t,e),"."==e&&h(t,e)}}})),n.defineMIME("application/n-triples","ntriples"),n.defineMIME("application/n-quads","ntriples"),n.defineMIME("text/n-triples","ntriples")}(e(51))}}]);
//# sourceMappingURL=75.75f35d7c.chunk.js.map