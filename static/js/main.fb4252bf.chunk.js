(this["webpackJsonpmy-bookings-test"]=this["webpackJsonpmy-bookings-test"]||[]).push([[0],{207:function(e,t,n){e.exports=n(441)},415:function(e,t,n){},416:function(e,t,n){},441:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"getBookings",(function(){return f}));n(208),n(217);var c=n(0),o=n.n(c),r=n(62),i=n.n(r),l=(n(415),n(416),n(203)),s=n(463),u=n(459),m=n(200),d=n.n(m),f=function(){return d.a.get("https://5ba412108da2f20014654cf8.mockapi.io/api/v1/flights").then((function(e){return e.data}))},p=n(465),h=n(462),g=n(461),E=n(93),b=n.n(E);n(436);b.a.locale("en");var v=Object(u.a)({card:{maxWidth:345},media:{height:"100%",minHeight:140,color:"#fff"}}),w=function(e){var t=e.cardData,n=v();return o.a.createElement(p.a,{className:n.card},o.a.createElement(h.a,null,o.a.createElement(g.a,{className:n.media,image:t.thumb,title:"bookings of user"},o.a.createElement("div",null,o.a.createElement("span",null,t.destination),o.a.createElement("span",null,b()(t.outboundDate).format("DD MMM"))))))},k=function(){return window.screen.width<=1024?"column":"row"},x=Object(u.a)({cardSpaces:{padding:"10px 0 0",minWidth:"300px"},container:{padding:"10px 0",display:"flex",flexDirection:k(),justifyContent:"space-between",alignItems:"center"}}),y=function(){var e=x(),t=Object(c.useState)([]),n=Object(l.a)(t,2),r=n[0],i=n[1],u=a.getBookings;Object(c.useEffect)((function(){k(),u().then((function(e){i(e)}))}),[u]);return o.a.createElement(s.a,{className:e.container},r.map((function(t,n){return o.a.createElement("div",{key:n,className:e.cardSpaces},o.a.createElement(w,{cardData:t}))})))};var j=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(y,null))},D=n(201),N=n(53);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(D.a,null,o.a.createElement(N.c,null,o.a.createElement(N.a,{path:"/",exact:!0,component:j}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[207,1,2]]]);
//# sourceMappingURL=main.fb4252bf.chunk.js.map