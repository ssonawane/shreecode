(this.webpackJsonpshreecode=this.webpackJsonpshreecode||[]).push([[0],{22:function(e,a,t){},23:function(e,a,t){},43:function(e,a,t){"use strict";t.r(a);var n=t(2),c=t.n(n),s=t(16),r=t.n(s),l=(t(22),t(23),t(3)),i=t(4),o=t(6),d=t(5),j=t(0),b=function(e){Object(o.a)(t,e);var a=Object(d.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return Object(j.jsx)(c.a.Fragment,{children:Object(j.jsxs)("nav",{className:"navbar sticky-top navbar-expand-lg navbar-dark bg-dark",children:[Object(j.jsx)("a",{className:"navbar-brand",href:"#",style:{fontWeight:"600",fontFamily:"cursive",color:"white"},children:"Shree Code"}),Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(j.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(j.jsx)("li",{className:"nav-item active",children:Object(j.jsxs)("a",{className:"nav-link",href:"#",children:["Home ",Object(j.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(j.jsxs)("li",{className:"nav-item dropdown",children:[Object(j.jsx)("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"React"}),Object(j.jsx)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:Object(j.jsx)("a",{className:"dropdown-item",href:"#",children:"React Interview Questions"})})]}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsxs)("a",{className:"nav-link",href:"#",children:["About Us ",Object(j.jsx)("span",{className:"sr-only",children:"(current)"})]})})]}),Object(j.jsxs)("form",{className:"form-inline my-2 my-lg-0",children:[Object(j.jsx)("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(j.jsx)("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit",children:"Search"})]})]})]})})}}]),t}(c.a.Component),h=t(17),p=t.n(h),u=function(e){Object(o.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(l.a)(this,t),(e=a.call(this)).state={intrvwQues:[]},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.a.get("./data.json").then((function(a){e.setState({intrvwQues:a.data})})).catch((function(e){console.log("error",e)}))}},{key:"render",value:function(){var e=this.state.intrvwQues.map((function(e){return Object(j.jsxs)("div",{className:"card align-top",children:[Object(j.jsx)("div",{className:"",id:"headingThree"+e.id,children:Object(j.jsx)("h5",{className:"mb-0 text-wrap",children:Object(j.jsx)("button",{className:"btn btn-link collapsed text-wrap",type:"button","data-toggle":"collapse","data-target":"#collapseOne"+e.id,"aria-expanded":"false","aria-controls":"collapseOne"+e.id,children:e.question})})}),Object(j.jsx)("div",{id:"collapseOne"+e.id,className:"collapse","aria-labelledby":"heading"+e.id,"data-parent":"#accordionExample",children:Object(j.jsx)("div",{className:"card-body",children:e.answer})})]},e.id)}));return Object(j.jsx)("div",{className:"row justify-content-center",children:Object(j.jsxs)("div",{className:"col-md-6 accordion",id:"accordionExample",children:[e,Object(j.jsx)("br",{})," ",Object(j.jsx)("br",{}),Object(j.jsx)("nav",{"aria-label":"Page navigation example",children:Object(j.jsxs)("ul",{class:"pagination justify-content-center",children:[Object(j.jsx)("li",{class:"page-item disabled",children:Object(j.jsx)("a",{class:"page-link",href:"#",tabindex:"-1",children:"Previous"})}),Object(j.jsx)("li",{class:"page-item",children:Object(j.jsx)("a",{class:"page-link",href:"#",children:"1"})}),Object(j.jsx)("li",{class:"page-item",children:Object(j.jsx)("a",{class:"page-link",href:"#",children:"2"})}),Object(j.jsx)("li",{class:"page-item",children:Object(j.jsx)("a",{class:"page-link",href:"#",children:"3"})}),Object(j.jsx)("li",{class:"page-item",children:Object(j.jsx)("a",{class:"page-link",href:"#",children:"Next"})})]})})]})})}}]),t}(c.a.Component),x=function(e){Object(o.a)(t,e);var a=Object(d.a)(t);function t(){return Object(l.a)(this,t),a.call(this)}return Object(i.a)(t,[{key:"render",value:function(){return Object(j.jsx)(c.a.Fragment,{children:Object(j.jsx)("footer",{class:"bg-dark text-center text-white fixed-bottom",children:Object(j.jsxs)("div",{class:"text-center p-3",style:{backgroundColor:"rgba(0, 0, 0, 0.2)"},children:["\xa9 2021 Copyright :",Object(j.jsx)("a",{class:"text-white",href:"#",children:"\xa0shreecode.co.in"})]})})})}}]),t}(c.a.Component);var O=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(b,{}),Object(j.jsx)("br",{}),Object(j.jsx)(u,{}),Object(j.jsx)("br",{}),Object(j.jsx)(x,{})]})},m=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,44)).then((function(a){var t=a.getCLS,n=a.getFID,c=a.getFCP,s=a.getLCP,r=a.getTTFB;t(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root")),m()}},[[43,1,2]]]);
//# sourceMappingURL=main.052229cb.chunk.js.map