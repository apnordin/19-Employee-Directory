(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{26:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/carrotDown.f3db4cd2.png"},27:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/carrotUp.16a1c6a8.png"},47:function(e,t,s){},48:function(e,t,s){"use strict";s.r(t);var a=s(0),r=s(1),n=s.n(r),c=s(14),l=s.n(c),o=s(3),i=s(4),d=s(19),h=s(17);var u=function(e){return Object(a.jsxs)("div",{className:"bg-light",children:[Object(a.jsxs)("div",{className:"text-center header mb-2",children:[Object(a.jsx)("h1",{className:"display-4 mb-4",children:"Employee Directory"}),Object(a.jsx)("p",{className:"lead mt-3 mb-1",children:"Click on the arrows to sort by last name. Up sorts alphabetically, down sorts reverse alphabetically."}),Object(a.jsx)("p",{className:"lead",children:"Use the search box to find employees by name."})]}),Object(a.jsx)("div",{className:"input-group",children:Object(a.jsx)("div",{className:"form-outline mb-2 w-15 mx-auto",children:Object(a.jsx)("input",{value:e.search,onChange:e.handleInputChange,type:"search",className:"form-control",placeholder:"Search",id:"employeeName"})})})]})},j=s(18),m=s(26),b=s(27);var p=function(e){return console.log(e.sortState),"asc"===e.sortState&&e.userResults.sort((function(e,t){var s=e.name.last.toLowerCase(),a=t.name.last.toLowerCase();return s<a?-1:s>a?1:0})),"desc"===e.sortState&&e.userResults.sort((function(e,t){var s=e.name.last.toLowerCase(),a=t.name.last.toLowerCase();return s>a?-1:s<a?1:0})),Object(a.jsx)("div",{children:Object(a.jsxs)(j.a,{striped:!0,hover:!0,className:"userTable text-center",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Image"}),Object(a.jsxs)("th",{children:["Name",Object(a.jsx)("input",{type:"image",src:b.default,alt:"up",className:"btn btn-light btn-sm carrot",onClick:e.handleSortAsc}),Object(a.jsx)("input",{type:"image",src:m.default,alt:"down",className:"btn btn-light btn-sm carrot",onClick:e.handleSortDesc})]}),Object(a.jsx)("th",{children:"Phone"}),Object(a.jsx)("th",{children:"Email"}),Object(a.jsx)("th",{children:"DOB"})]})}),Object(a.jsx)("tbody",{children:e.userResults.map((function(e){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:Object(a.jsx)("img",{className:"employeeImg",alt:"employeeImg",src:e.picture.large})}),Object(a.jsxs)("td",{children:[e.name.first," ",e.name.last]}),Object(a.jsx)("td",{children:e.phone}),Object(a.jsx)("td",{children:e.email}),Object(a.jsx)("td",{children:e.dob.date.slice(0,10)})]},e.login.md5)}))})]})})},O=s(16),x=s.n(O),f=function(){return x.a.get("https://randomuser.me/api/?key=8NK1-CZBL-C5CQ-YY49&results=25")},g=s(20),S=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(o.a)(this,s);for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={result:[],search:"",refinedResult:[],rememberedResults:[],sort:""},e.handleInputChange=function(t){var s=new g.a(e.state.rememberedResults,["name.first","name.last"],{caseSensitive:!1}).search(t.target.value);console.log("SEARCH RESULTS: ",s),e.setState({search:s}),e.setState({result:s})},e.handleSortDesc=function(t){e.setState({sort:"desc"}),console.log("STATE SET TO: ",e.state)},e.handleSortAsc=function(t){e.setState({sort:"asc"}),console.log("SET STATE TO: ",e.state)},e}return Object(i.a)(s,[{key:"componentDidMount",value:function(){var e=this;f().then((function(t){e.setState({result:t.data.results}),e.setState({rememberedResults:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(u,{handleInputChange:this.handleInputChange}),Object(a.jsx)(p,{handleSortAsc:this.handleSortAsc,handleSortDesc:this.handleSortDesc,sortState:this.state.sort,userResults:this.state.result})]})}}]),s}(n.a.Component);var y=function(){return Object(a.jsx)(S,{})};s(46),s(47);l.a.render(Object(a.jsx)(y,{}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.50d028d9.chunk.js.map