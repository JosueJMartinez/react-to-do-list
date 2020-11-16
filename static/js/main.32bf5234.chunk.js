(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],[,,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),s=n(8),o=n.n(s),c=(n(14),n(15),n(1)),r=n(9),l=n(3),u=n(4),m=n(6),p=n(5),h=n(2),d=(n(16),function(t){Object(m.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))).state={content:t.props.content},t.handleDelete=function(e){t.props.deleteItem(t.props.id)},t.handleEditClick=function(e){t.props.otherListItemsFalse(t.props.id)},t.handleEditSubmit=function(e){e.preventDefault(),t.props.editItem({content:t.state.content,id:t.props.id,isOpen:!1,isScratched:t.props.isScratched})},t.handleChange=function(e){t.setState(Object(h.a)({},e.target.name,e.target.value))},t.handleScratch=function(e){t.props.toggleScratch(t.props.id)},t.handleKeyDown=function(e){27===e.keyCode&&(t.props.toggleFormItem(t.props.id),t.setState({content:t.props.content}))},t}return Object(u.a)(n,[{key:"render",value:function(){return i.a.createElement("li",{className:"ListItem",id:this.props.id},this.props.isOpen?i.a.createElement(a.Fragment,null,i.a.createElement("form",{onSubmit:this.handleEditSubmit},i.a.createElement("input",{type:"text",placeholder:"Editing item",value:this.state.content,name:"content",onChange:this.handleChange,onKeyDown:this.handleKeyDown,autoFocus:!0}))):i.a.createElement(a.Fragment,null,i.a.createElement("span",{onClick:this.handleDelete,className:"trash listItemButtons"},i.a.createElement("i",{className:"far fa-trash-alt"})),i.a.createElement("span",{onClick:this.handleEditClick,className:"edit listItemButtons"},i.a.createElement("i",{className:"fas fa-edit"})),i.a.createElement("span",{onClick:this.handleScratch,className:"".concat(this.props.isScratched&&"strike-through"," content")},this.props.content)))}}]),n}(a.Component)),f=n(21),O=(n(17),function(t){Object(m.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))).state={content:""},t.handleSubmit=function(e){e.preventDefault(),t.props.handleItem(t.state),t.setState({content:""})},t.handleChange=function(e){return t.setState(Object(h.a)({},e.target.name,e.target.value))},t.handleKeyDown=function(e){27===e.keyCode&&(t.props.closeNewForm(),t.setState({content:""}))},t}return Object(u.a)(n,[{key:"render",value:function(){return i.a.createElement(a.Fragment,null,this.props.isOpen&&i.a.createElement("form",{className:"NewToDoForm ",onSubmit:this.handleSubmit},i.a.createElement("input",{type:"text",placeholder:"Add new item to do here",value:this.state.content,name:"content",onChange:this.handleChange,onKeyDown:this.handleKeyDown,autoFocus:!0})))}}]),n}(a.Component)),g=(n(18),function(t){Object(m.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))).state={list:[],isOpen:!1},t.addListItem=function(e){t.setState((function(t){return{list:[].concat(Object(r.a)(t.list),[Object(c.a)(Object(c.a)({},e),{},{id:Object(f.a)()})])}}))},t.deleteItem=function(e){t.setState({list:t.state.list.filter((function(t){return t.id!==e})).map((function(t){return Object(c.a)(Object(c.a)({},t),{},{isOpen:!1})}))})},t.editItem=function(e){t.setState({list:t.state.list.map((function(t){return t.id===e.id?e:t}))})},t.toggleScratch=function(e){t.setState({list:t.state.list.map((function(t){return t.id===e?Object(c.a)(Object(c.a)({},t),{},{isScratched:!t.isScratched}):t}))})},t.otherListItemsFalse=function(e){t.setState({list:t.state.list.map((function(t){return t.id!==e?Object(c.a)(Object(c.a)({},t),{},{isOpen:!1}):Object(c.a)(Object(c.a)({},t),{},{isOpen:!0})}))})},t.toggleFormItem=function(e){t.setState({list:t.state.list.map((function(t){return t.id===e?Object(c.a)(Object(c.a)({},t),{},{isOpen:!t.isOpen}):t}))})},t.handleClick=function(e){t.setState({isOpen:!t.state.isOpen})},t.closeNewForm=function(){t.setState({isOpen:!1})},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("ToDoAppList"));t?this.setState({list:t}):this.setState({list:[]})}},{key:"componentDidUpdate",value:function(t,e){localStorage.setItem("ToDoAppList",JSON.stringify(this.state.list))}},{key:"render",value:function(){var t=this,e=this.state.list.map((function(e){return i.a.createElement(d,{content:e.content,id:e.id,key:e.id,deleteItem:t.deleteItem,editItem:t.editItem,otherListItemsFalse:t.otherListItemsFalse,toggleFormItem:t.toggleFormItem,isOpen:e.isOpen,isScratched:e.isScratched,toggleScratch:t.toggleScratch})}));return i.a.createElement("div",{className:"ToDoList"},i.a.createElement("h1",{id:"title"},"To-Do List",i.a.createElement("span",{id:"plus",onClick:this.handleClick},i.a.createElement("i",{className:"fas fa-".concat(this.state.isOpen?"minus":"plus","-square")}))),i.a.createElement(O,{isOpen:this.state.isOpen,handleItem:this.addListItem,closeNewForm:this.closeNewForm}),i.a.createElement("ul",null,e))}}]),n}(a.Component));var S=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[19,1,2]]]);
//# sourceMappingURL=main.32bf5234.chunk.js.map