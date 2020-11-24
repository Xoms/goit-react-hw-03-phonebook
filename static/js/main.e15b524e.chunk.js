(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{24:function(t,e,n){},29:function(t,e,n){},30:function(t,e,n){},31:function(t,e,n){},32:function(t,e,n){},33:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(0),r=n.n(c),o=n(13),s=n.n(o),i=(n(24),n(17)),l=n(2),u=n(3),m=n(7),b=n(6),d=n(4),f=n(5);function j(){var t=Object(d.a)(["\n    margin: 0;\n    padding: 0;\n    font-size: 20px;\n    margin-bottom: 30px;\n"]);return j=function(){return t},t}var h=f.a.h2(j()),p=function(t){var e=t.title;return Object(a.jsx)(h,{className:"title",children:e})};p.defaultProps={};var v=p;function O(){var t=Object(d.a)(["\n    width: 1200px;\n    margin: 0 auto;\n"]);return O=function(){return t},t}var x=f.a.div(O()),g=function(t){var e=t.children;return Object(a.jsx)(x,{children:e})},N=n(35),C=(n(29),function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:"",isExist:!1},t.changeHandler=function(e){var n=e.target;t.setState((function(t){return"contactName"===n.id?{name:n.value}:"contactNumber"===n.id?{number:n.value}:void 0}))},t.submitHandler=function(e){if(e.preventDefault(),t.isContactExists(t.state.name))t.setState({isExist:!0});else{var n=t.makeRecord();t.setState({name:"",number:"",isExist:!1}),t.props.onContactAdd(n)}},t}return Object(u.a)(n,[{key:"isContactExists",value:function(t){return this.props.contacts.some((function(e){return e.name===t}))}},{key:"makeRecord",value:function(){var t=Object(N.a)(),e=this.state;return{id:t,name:e.name,number:e.number}}},{key:"render",value:function(){console.log(this.state);var t=this.state,e=t.name,n=t.number,c=t.isExist;return Object(a.jsxs)("form",{className:"contacts-form",onSubmit:this.submitHandler,children:[Object(a.jsxs)("div",{className:"contacts-form__group",children:[Object(a.jsx)("label",{className:"contacts-form__label",htmlFor:"contactName",children:"Name"}),Object(a.jsx)("input",{className:"contacts-form__input",onChange:this.changeHandler,id:"contactName",value:e})]}),Object(a.jsxs)("div",{className:"contacts-form__group",children:[Object(a.jsx)("label",{className:"contacts-form__label",htmlFor:"contactNumber",children:"Number"}),Object(a.jsx)("input",{className:"contacts-form__input",onChange:this.changeHandler,id:"contactNumber",value:n})]}),Object(a.jsx)("button",{type:"submit",className:"contacts-form__submit-btn",children:"Add contact"}),c&&Object(a.jsx)("span",{className:"err-msg",children:"This person is already in your contacts list"})]})}}]),n}(c.Component)),_=n(11),y=n(18),k=(n(30),function(t){var e=t.name,n=t.number,c=t.onDelete;return Object(a.jsxs)("li",{className:"contacts-list__item",children:[Object(a.jsxs)("span",{className:"contacts-list__item-text",children:[e,": ",n]}),Object(a.jsx)("button",{type:"button",onClick:c,className:"contacts-list__item-btn",children:"Delete"})]})}),S=function(t){var e=t.contacts,n=t.onContactDelete;return Object(a.jsx)("ul",{className:"contacts-list",children:e.map((function(t){var e=t.id,c=Object(y.a)(t,["id"]);return Object(a.jsx)(k,Object(_.a)(Object(_.a)({},c),{},{onDelete:function(){return n(e)}}),e)}))})};S.defaultProps={};var F=S,D=(n(31),function(t){var e=t.onFilter;return Object(a.jsxs)("div",{className:"filter",children:[Object(a.jsx)("label",{htmlFor:"filterInput",className:"filter__label",children:"Find contacts by name"}),Object(a.jsx)("input",{type:"text",id:"filterInput",onChange:e,className:"filter__inpur"})]})}),w=(n(32),function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.onContactAdd=function(e){t.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[e])}}))},t.onContactDelete=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){var n=t.id;return e!==n}))}}))},t.onFilterChange=function(e){var n=e.target;t.setState({filter:n.value})},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("contacts"))||[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}];this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(){localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,c=e.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())}));return Object(a.jsxs)(g,{className:"container feedback",children:[Object(a.jsx)(v,{title:"Phonebook"}),Object(a.jsx)(C,{onContactAdd:this.onContactAdd,contacts:e}),Object(a.jsx)(v,{title:"Contacts"}),Object(a.jsx)(D,{onFilter:this.onFilterChange}),Object(a.jsx)(F,{onContactDelete:this.onContactDelete,contacts:c})]})}}]),n}(c.Component)),A=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),a(t),c(t),r(t),o(t)}))};s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(w,{})}),document.getElementById("root")),A()}},[[33,1,2]]]);
//# sourceMappingURL=main.e15b524e.chunk.js.map