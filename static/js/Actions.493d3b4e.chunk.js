(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[5],{383:function(e,t,n){"use strict";n.r(t);var a=n(32),r=n(48),o=n(129),i=n(379),c=n(85),l=n(0),s=n.n(l),u=n(1),d=n.n(u);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=Object(l.forwardRef)((function(e,t){var n=e.color,a=void 0===n?"currentColor":n,r=e.size,o=void 0===r?24:r,i=f(e,["color","size"]);return s.a.createElement("svg",p({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),s.a.createElement("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),s.a.createElement("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"}))}));m.propTypes={color:d.a.string,size:d.a.oneOfType([d.a.string,d.a.number])},m.displayName="Bell";var v=m;function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function O(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var h=Object(l.forwardRef)((function(e,t){var n=e.color,a=void 0===n?"currentColor":n,r=e.size,o=void 0===r?24:r,i=O(e,["color","size"]);return s.a.createElement("svg",b({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),s.a.createElement("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"}),s.a.createElement("path",{d:"M18.63 13A17.89 17.89 0 0 1 18 8"}),s.a.createElement("path",{d:"M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"}),s.a.createElement("path",{d:"M18 8a6 6 0 0 0-9.33-5"}),s.a.createElement("line",{x1:"1",y1:"1",x2:"23",y2:"23"}))}));h.propTypes={color:d.a.string,size:d.a.oneOfType([d.a.string,d.a.number])},h.displayName="BellOff";var y=h,g=n(23),w=n(237),j=n(162),E=Object(l.lazy)((function(){return Promise.all([n.e(27),n.e(19)]).then(n.bind(null,375))})),M=Object(l.lazy)((function(){return n.e(20).then(n.bind(null,376))})),k=(t.default=s.a.memo((function(e){var t=e.setDate,n=e.dates,o=Object(l.useState)(!1),i=Object(a.a)(o,2),c=i[0],u=i[1],d=Object(w.a)("newUpdate",!1),p=Object(a.a)(d,2),f=p[0],m=p[1],v=Object(w.a)("lastViewedLog",0),b=Object(a.a)(v,2),O=b[0],h=b[1],y=Object(l.useState)(!1),g=Object(a.a)(y,2),E=g[0],x=g[1],S=Object(j.a)("https://api.covid19india.org/updatelog/log.json",r.d,{revalidateOnFocus:!1}).data;return Object(l.useEffect)((function(){if(void 0!==S){var e=1e3*S.slice().reverse()[0].timestamp;e!==O&&(m(!0),h(e))}}),[O,S,h,m]),s.a.createElement(s.a.Fragment,null,!S&&s.a.createElement("div",{style:{minHeight:"5rem"}}),S&&s.a.createElement(k,{lastViewedLog:O,newUpdate:f,isTimelineMode:E,setIsTimelineMode:x,showUpdates:c,setDate:t,dates:n,setNewUpdate:m,setShowUpdates:u}),c&&s.a.createElement(l.Suspense,{fallback:s.a.createElement("div",null)},s.a.createElement(M,{updates:S})))}),(function(e,t){return!0})),function(e){var t=e.lastViewedLog,n=e.newUpdate,a=e.isTimelineMode,r=e.setIsTimelineMode,u=e.showUpdates,d=e.setDate,p=e.dates,f=e.setNewUpdate,m=e.setShowUpdates,b=Object(l.useMemo)((function(){return s.a.createElement(v,{onClick:function(){m(!u),f(!1)}})}),[f,m,u]),O=Object(l.useMemo)((function(){return s.a.createElement(y,{onClick:function(){m(!u)}})}),[m,u]),h=Object(l.useMemo)((function(){return s.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"-.2 -.2 17 17",width:"16",height:"16"},s.a.createElement("path",{fillRule:"evenodd",d:"M1.643 3.143L.427 1.927A.25.25 0 000 2.104V5.75c0  .138.112.25.25.25h3.646a.25.25 0 00.177-.427L2.715  4.215a6.5 6.5 0 11-1.18 4.458.75.75 0 10-1.493.154  8.001 8.001 0 101.6-5.684zM7.75 4a.75.75 0  01.75.75v2.992l2.028.812a.75.75 0 01-.557  1.392l-2.5-1A.75.75 0 017 8.25v-3.5A.75.75  0 017.75 4z"}))}),[]),w=Object(g.c)({opacity:a?1:0,transform:"perspective(600px) rotateX(".concat(a?180:0,"deg)"),config:{mass:5,tension:500,friction:80}}),j=w.transform,M=w.opacity,k=Object(g.e)(3,{from:{transform:"translate3d(0, 10px, 0)",opacity:0},to:{transform:"translate3d(0, 0px, 0)",opacity:1},config:g.b.stiff});return s.a.createElement(s.a.Fragment,null,s.a.createElement(g.a.div,{className:"actions",style:{opacity:M.interpolate((function(e){return 1-e})),transform:j,pointerEvents:a?"none":""}},s.a.createElement(g.a.h5,{style:k[0]},"".concat(function(e){return Object(o.a)(Object(c.a)(Object(i.a)(e,"T",new Date),"Asia/Kolkata"),"dd MMM, p")}(t)," IST")),!u&&s.a.createElement(g.a.div,{className:"bell-icon",style:k[1]},b,n&&s.a.createElement("div",{className:"indicator"})),u&&O,s.a.createElement(g.a.div,{className:"timeline-icon",onClick:function(){r(!0),u&&m(!u)},style:k[2]},h)),s.a.createElement(g.a.div,{className:"actions timeline",style:{opacity:M,transform:j.interpolate((function(e){return"".concat(e," rotateX(180deg)")})),pointerEvents:a?"":"none"}},a&&s.a.createElement(l.Suspense,{fallback:s.a.createElement("div",null)},s.a.createElement(E,{setIsTimelineMode:r,setDate:d,dates:p}))))})}}]);
//# sourceMappingURL=Actions.493d3b4e.chunk.js.map