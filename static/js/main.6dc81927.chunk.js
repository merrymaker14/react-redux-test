(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(n,e,t){n.exports=t.p+"static/media/logo.ee7cd8ed.svg"},32:function(n,e,t){n.exports=t(44)},44:function(n,e,t){"use strict";t.r(e);var r=t(1),a=t.n(r),o=t(14),i=t(16),c=t(4),u=t(5);function s(){var n=Object(c.a)(["\n  @import url('https://fonts.googleapis.com/css?family=Lora:400,700&amp;subset=cyrillic');\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n\n  html {\n    box-sizing: border-box;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    /* font-size: 62.5%; */\n  }\n\n  body {\n    position: relative;\n    min-width: 320px;\n    min-height: 100%;\n    margin: 0;\n    padding: 0;\n    font-size: ",";\n    font-weight: bold;\n    line-height: 1.2;\n    color: ",";\n    font-family: Lora, serif;\n    background-color: ",";\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4 {\n    margin: 0;\n  }\n\n  figure {\n    margin: 0;\n  }\n\n  li {\n    list-style-type: none;\n  }\n\n  img {\n    max-width: 100%;\n    height: auto;\n  }\n\n  a {\n    outline: 0;\n    text-decoration: none;\n    color: ",";\n\n    &:hover {\n      text-decoration: none;\n    }\n  }\n\n  label {\n    user-select: none;\n  }\n\n  input {\n    outline: none;\n  }\n\n  button {\n    cursor: pointer;\n\n    &:disabled {\n      cursor: default;\n    }\n  }\n"]);return s=function(){return n},n}var l=Object(u.a)(s(),"16px","#282c34","#0e0e0e;","#282c34");function f(){var n=Object(c.a)(["\n  0% {\n    transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(19px, 0);\n  }\n"]);return f=function(){return n},n}function d(){var n=Object(c.a)(["\n  0% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(0);\n  }\n"]);return d=function(){return n},n}function p(){var n=Object(c.a)(["\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n  }\n"]);return p=function(){return n},n}function m(){var n=Object(c.a)(["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"]);return m=function(){return n},n}var h=Object(u.c)(m()),b=Object(u.c)(p()),g=Object(u.c)(d()),v=Object(u.c)(f()),x=t(27),j=t.n(x);function w(){var n=Object(c.a)(["\n  width: 100px;\n  height: 100px;\n  animation: "," infinite 20s linear;\n"]);return w=function(){return n},n}function O(){var n=Object(c.a)(["\n  width: 100%;\n  padding-top: ",";\n  padding-bottom: ",";\n  background-color: ",";\n  color: ",";\n  text-align: center;\n"]);return O=function(){return n},n}var E=u.b.header(O(),"8px","24px","#282c34","#fff"),y=u.b.img(w(),h),k=function(){return a.a.createElement(E,null,a.a.createElement(y,{src:j.a,alt:"logo"}),a.a.createElement("h2",null,"React Content Manager"))},S="ADD_USERS_SUCCESS",U="ADD_USERS_FAILURE",z="FETCH_USERS",F=function(n){return{type:S,users:n}},R=function(n){return{type:U,error:n}};function _(){var n=Object(c.a)(["\n  position: relative;\n  width: 64px;\n  height: 64px;\n  margin: 0 auto;\n\n  & div {\n    position: absolute;\n    top: 27px;\n    width: 11px;\n    height: 11px;\n    border-radius: 50%;\n    background-color: ",";\n    animation-timing-function: cubic-bezier(0, 1, 1, 0);\n\n    &:nth-child(1) {\n      left: 6px;\n      animation: "," 0.6s infinite;\n    }\n\n    &:nth-child(2) {\n      left: 6px;\n      animation: "," 0.6s infinite;\n    }\n\n    &:nth-child(3) {\n      left: 26px;\n      animation: "," 0.6s infinite;\n    }\n\n    &:nth-child(4) {\n      left: 45px;\n      animation: "," 0.6s infinite;\n    }\n  }\n"]);return _=function(){return n},n}var C=u.b.div(_(),"#282c34",b,v,v,g),D=function(){return a.a.createElement(C,null,a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null))};function A(){var n=Object(c.a)(["\n  margin: 0 auto;\n  padding: ",";\n  color: ",";\n\n  li {\n    margin-bottom: ",";\n    border: 1px solid ",";\n    padding: ",";\n    background-color: ",";\n  }\n"]);return A=function(){return n},n}var L=u.b.ul(A(),"14px","#282c34","8px","#282c34","8px","#eaeff2"),B=Object(i.b)(function(n){return{users:n.users}},function(n){return{onFetchUsers:function(){return n({type:z})}}})(function(n){var e=n.onFetchUsers,t=n.users;return r.useEffect(function(){0===t.length&&e()},[]),r.createElement(L,null,t.length>0?t.map(function(n){var e=n.id,t=n.name;return r.createElement("li",{key:e},t)}):r.createElement(D,null))});function I(){var n=Object(c.a)(["\n  width: 600px;\n  min-height: 400px;\n  margin-left: 20px;\n  margin0-right: 20px;\n  background-color: ",";\n"]);return I=function(){return n},n}function J(){var n=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n"]);return J=function(){return n},n}var W=u.b.div(J()),H=u.b.div(I(),"#fff"),M=function(){return a.a.createElement(r.Fragment,null,a.a.createElement(l,null),a.a.createElement(W,null,a.a.createElement(H,null,a.a.createElement(k,null),a.a.createElement(B,null))))},N=t(10),T=t(29),$=t(7),q=t.n($),G=t(8),K=t(28),P=q.a.mark(Y),Q=q.a.mark(Z),V=q.a.mark(nn),X=function(){var n=Object(K.a)(q.a.mark(function n(){var e,t,r;return q.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://jsonplaceholder.typicode.com/users");case 2:return e=n.sent,n.next=5,e.json();case 5:return t=n.sent,r=t.map(function(n){return{id:n.id,name:n.name}}),n.abrupt("return",r);case 8:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}();function Y(){var n;return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(G.b)(X);case 3:if(!(n=e.sent)){e.next=9;break}return e.next=7,Object(G.d)(F(n));case 7:e.next=10;break;case 9:console.log("No such document!");case 10:e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(0),e.next=16,Object(G.d)(R(e.t0.message));case 16:case"end":return e.stop()}},P,null,[[0,12]])}function Z(){return q.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(G.e)(z,Y);case 2:case"end":return n.stop()}},Q)}function nn(){return q.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(G.a)([Object(G.c)(Z)]);case 2:case"end":return n.stop()}},V)}var en=q.a.mark(function n(){return q.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=G.a,n.next=3,Object(G.c)(nn);case 3:return n.t1=n.sent,n.t2=[n.t1],n.next=7,(0,n.t0)(n.t2);case 7:case"end":return n.stop()}},n)}),tn=t(21),rn=[];var an="";var on=Object(N.c)({users:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case S:return[].concat(Object(tn.a)(n),Object(tn.a)(e.users));default:return n}},error:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:an,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case U:return e.error;default:return n}}}),cn=Object(T.a)(),un=[cn],sn=[N.a.apply(void 0,un)],ln=N.e.apply(void 0,[on].concat(sn));cn.run(en);var fn=ln;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var dn,pn=document.getElementById("root");dn=M,Object(o.render)(a.a.createElement(i.a,{store:fn},a.a.createElement(dn,null)),pn),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[32,2,1]]]);
//# sourceMappingURL=main.6dc81927.chunk.js.map