(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{16:function(t,e,a){t.exports=a(27)},26:function(t,e,a){},27:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),c=a(14),l=a.n(c),i=a(6),o=a(1),m=function(t){var e=t.tabId,a=t.title;return r.a.createElement(i.c,{to:"/tabs/".concat(e),className:"link"},a)},u=function(t){var e=t.tabs,a=t.tabId,n=e.find((function(t){return t.id===a}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Tabs"),e.map((function(t){return r.a.createElement(m,{tabId:t.id,title:t.title,key:t.id})})),r.a.createElement("p",null,n?n.content:""))},s=function(){return r.a.createElement("h1",null,"Home")},b=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],d=(a(26),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.b,{to:"/",className:"link"},"HomePage"),r.a.createElement(i.b,{to:"/tabs",className:"link"},"TabsPage"),r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/",exact:!0,component:s}),r.a.createElement(o.a,{path:"/tabs/:id?",render:function(t){var e=t.match;return r.a.createElement(u,{tabs:b,tabId:e.params.id})}})))});l.a.render(r.a.createElement(i.a,null,r.a.createElement(d,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.4b8d2c7a.chunk.js.map