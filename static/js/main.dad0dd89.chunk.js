(this.webpackJsonppwademo=this.webpackJsonppwademo||[]).push([[0],{31:function(e,n,t){e.exports=t(61)},36:function(e,n,t){},37:function(e,n,t){},55:function(e,n,t){},61:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),r=t(26),c=t.n(r),i=(t(36),t(37),t(28)),l=t(6),s=t(9),u=t(10),d=t(11),p=t(12),m=t(27),f=t.n(m),h=function(e){Object(p.a)(t,e);var n=Object(d.a)(t);function t(){var e;Object(s.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=n.call.apply(n,[this].concat(a))).state={data:[],err:""},e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.get("\thttp://dummy.restapiexample.com/api/v1/employees").then((function(n){console.log("response",n.data.data),e.setState({data:n.data.data})})).catch((function(n){console.log("err",n),e.setState({err:n})}))}},{key:"render",value:function(){return a.a.createElement("div",null,"Hello Adamo",a.a.createElement("div",null,this.state.err),a.a.createElement("div",null,this.state.data.map((function(e){}))))}}]),t}(a.a.Component),v=(t(55),[{path:"/employee",name:"EmployeeScreen",component:h},{path:"/",name:"HomeScreen",component:function(e){Object(p.a)(t,e);var n=Object(d.a)(t);function t(){var e;Object(s.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=n.call.apply(n,[this].concat(a))).navigate=function(){e.props.history.push("/employee")},e}return Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("div",null,"HomeScreen"),a.a.createElement("div",null,a.a.createElement("button",{onClick:this.navigate},"Navigate to Employee")))}}]),t}(a.a.Component)}]);var g=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(i.a,{basename:"/"},a.a.createElement(l.c,null,v.map((function(e,n){return a.a.createElement(l.a,{path:e.path,key:n,component:e.component})})))))},w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(g,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/PWADemo",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/PWADemo","/service-worker.js");w?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):y(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):y(n,e)}))}}()}},[[31,1,2]]]);
//# sourceMappingURL=main.dad0dd89.chunk.js.map