(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,n,t){e.exports=t.p+"static/media/coverimg.d87c8778.JPG"},21:function(e,n,t){e.exports=t.p+"static/media/aboutpic.f37a8f7d.JPG"},24:function(e,n,t){e.exports=t(37)},30:function(e,n,t){},31:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(12),c=t.n(i),o=(t(30),t(7)),l=t(8),u=t(10),s=t(9),d=t(11),m=(t(31),t(4)),p=t(5),h=t(18),b=t.n(h);function f(){var e=Object(m.a)(["\n  width:100%;\n  display:flex;\n  flex-direction:column;\n  justify-content:center;\n  align-items:center;\n  background-color:\t#C8C8C8;\n  a{\n    color:black;\n  }\n"]);return f=function(){return e},e}function g(){var e=Object(m.a)(["\n  background-image:url(",");\n  background-position:center;\n  background-size:cover;\n  width:100%;\n  height:100vh;   \n  display:flex;\n  justify-content:center;\n  align-items:center;\n  h1{\n    margin:0;\n    text-align:center;\n    text-shadow: 1px 1px 2px gray;\n  }\n"]);return g=function(){return e},e}var v=p.a.div(g(),b.a),y=p.a.div(f()),E=function(e){function n(){return Object(o.a)(this,n),Object(u.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v,null,r.a.createElement("h1",null,r.a.createElement("span",{style:{display:"block"}},"Brian Trang"),r.a.createElement("span",{style:{display:"block"}},"Brian Trang"))),r.a.createElement(y,null,r.a.createElement("h1",null,"Quick Links"),r.a.createElement("a",{href:"https://github.com/bullettrang"},r.a.createElement("h2",null,r.a.createElement("i",{class:"fab fa-github"})," GITHUB")),r.a.createElement("a",{href:"https://www.linkedin.com/in/btrangcal/"},r.a.createElement("h2",null,r.a.createElement("i",{class:"fab fa-linkedin"})," LinkedIn"))))}}]),n}(a.Component),j=t(21),w=t.n(j);function k(){var e=Object(m.a)(["\n  background-image: linear-gradient(\n    rgba(0, 0, 0, 0.5),\n    rgba(0, 0, 0, 0.5)\n  ),url(",");\n  background-position:center;\n  background-size:cover;\n  width:100%;\n  height:100vh;   \n  display:flex;\n  justify-content:center;\n  align-items:center;\n  h2{\n    color:white;\n    margin:0;\n    text-align:center;\n    text-shadow: 1px 1px 2px black;\n  }\n"]);return k=function(){return e},e}var x=p.a.div(k(),w.a),O=function(e){function n(){return Object(o.a)(this,n),Object(u.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(x,null,r.a.createElement("article",null,r.a.createElement("h2",null,"Hi! I am Brian Trang and you're reading my about page. "),r.a.createElement("h2",null,"I enjoy MMA, learning, rock climbing, shooting, and walking my dogs.")))}}]),n}(a.Component);function C(){var e=Object(m.a)(["\ndisplay: flex;\nflex-flow: row wrap;\njustify-content: flex-end;\nheight:5em;\nbackground: #7395AE;\nposition: fixed; /* Set the navbar to fixed position */\ntop: 0; /* Position the navbar at the top of the page */\nwidth: 100%; /* Full width */\n\na{\n  text-decoration: none;\n  display: block;\n  padding: 2em;\n  color: black;\n}\n"]);return C=function(){return e},e}var B=p.a.div(C());function A(){var e=Object(m.a)(["{\n    position:relative;\n    top:5em;\n    border:1px solid black;\n    padding:1em;\n}"]);return A=function(){return e},e}function G(){var e=Object(m.a)(["\n    width:100%;\n    height:100vh;\n    background:blue;\n    display:flex;\n    justify-content:center;\n    align-items:center;\n    flex-direction:column;\n"]);return G=function(){return e},e}var I=p.a.div(G()),P=p.a.div(A()),H=function(e){function n(){return Object(o.a)(this,n),Object(u.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(I,null,r.a.createElement("h1",null,"My Projects"),r.a.createElement(P,null,r.a.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/_HKAeDvNcGE",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),r.a.createElement("p",null,"Santorini: A Unity Game: Made with C# using the Unity Engine")))}}]),n}(a.Component),J=t(40),M=t(39),T=t(41),U=function(e){function n(){return Object(o.a)(this,n),Object(u.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(J.a,null,r.a.createElement("div",null,r.a.createElement(B,{id:"NavBar"},r.a.createElement(M.a,{to:"/"},"Home"),r.a.createElement(M.a,{to:"/about/"},"About"),r.a.createElement(M.a,{to:"/projects/"},"Portfolio")),r.a.createElement(T.a,{path:"/",exact:!0,component:E}),r.a.createElement(T.a,{path:"/about",component:O}),r.a.createElement(T.a,{path:"/projects/",component:H})))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.804f1898.chunk.js.map