(function(t){function n(n){for(var r,c,o=n[0],l=n[1],s=n[2],p=0,d=[];p<o.length;p++)c=o[p],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(n);while(d.length)d.shift()();return i.push.apply(i,s||[]),e()}function e(){for(var t,n=0;n<i.length;n++){for(var e=i[n],r=!0,o=1;o<e.length;o++){var l=e[o];0!==a[l]&&(r=!1)}r&&(i.splice(n--,1),t=c(c.s=e[0]))}return t}var r={},a={app:0},i=[];function c(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=t,c.c=r,c.d=function(t,n,e){c.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,n){if(1&n&&(t=c(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)c.d(e,r,function(n){return t[n]}.bind(null,r));return e},c.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(n,"a",n),n},c.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},c.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=n,o=o.slice();for(var s=0;s<o.length;s++)n(o[s]);var u=l;i.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";var r=e("85ec"),a=e.n(r);a.a},"1d2c":function(t,n,e){"use strict";var r=e("c9d6"),a=e.n(r);a.a},"1fd8":function(t,n,e){t.exports=e.p+"img/LI-In-Bug.1b18d461.png"},"3a7d":function(t,n,e){},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var r=e("2b0e"),a=e("8c4f"),i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("Navigation"),e("div",{staticClass:"wrapper"},[e("router-view")],1)],1)},c=[],o=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},l=[function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"navbar"},[r("div",{staticClass:"nav-item"},[r("a",{attrs:{href:"https://github.com/Drawserqzez",target:"_blank"}},[r("img",{staticClass:"gh-logo",attrs:{src:e("e02c"),alt:"Github"}})])]),r("div",{staticClass:"nav-item center-item"},[r("a",{staticClass:"nav-header",attrs:{href:"/"}},[t._v("Algot Holton")])]),r("div",{staticClass:"nav-item"},[r("a",{attrs:{href:"https://www.linkedin.com/in/algot-holton"}},[r("img",{staticClass:"li-logo",attrs:{src:e("1fd8"),alt:"LinkedIn"}})])])])}],s={name:"Navigation",components:{}},u=s,p=(e("1d2c"),e("2877")),d=Object(p["a"])(u,o,l,!1,null,"4778acb5",null),A=d.exports,v={name:"App",components:{Navigation:A}},f=v,b=(e("034f"),Object(p["a"])(f,i,c,!1,null,null,null)),h=b.exports,g=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h2",[t._v("Min techstack")]),e("div",{staticClass:"container"},[e("div",{staticClass:"column"},[e("h3",[t._v("Frontend")]),t._l(this.frontEnd,(function(n){return e("div",{key:n.id},[t._v(" "+t._s(n)+" ")])}))],2),e("span",{staticClass:"divider"}),e("div",{staticClass:"column"},[e("h3",[t._v("Backend")]),t._l(t.backEnd,(function(n){return e("div",{key:n.id},[t._v(" "+t._s(n)+" ")])}))],2)])])},m=[],E={Name:"Main",data:function(){return{frontEnd:["Vue.JS","Bootstrap","HTML","CSS","Vanilla JS"],backEnd:[".NET C#","ASP.NET MVC","Blazor","Node.js Express","Python"]}}},M=E,w=(e("c266"),Object(p["a"])(M,g,m,!1,null,null,null)),B=w.exports;r["a"].config.productionTip=!1,r["a"].use(a["a"]);var I=[{path:"/",component:B}],T=new a["a"]({routes:I});new r["a"]({render:function(t){return t(h)},router:T}).$mount("#app")},"85ec":function(t,n,e){},c266:function(t,n,e){"use strict";var r=e("3a7d"),a=e.n(r);a.a},c9d6:function(t,n,e){},e02c:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyQTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyQjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTI4OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTI5OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+m4QGuQAAAyRJREFUeNrEl21ojWEYx895TDPbMNlBK46IUiNmPvHBSUjaqc0H8pF5+aDUKPEBqU2NhRQpX5Rv5jWlDIWlMCv7MMSWsWwmb3tpXub4XXWdPHvc9/Gc41nu+nedc7/8r/99PffLdYdDPsvkwsgkTBwsA/PADJCnzX2gHTwBt8Hl7p537/3whn04XoDZDcpBlk+9P8AFcAghzRkJwPF4zGGw0Y9QS0mAM2AnQj77FqCzrtcwB1Hk81SYojHK4DyGuQ6mhIIrBWB9Xm7ug/6B/nZrBHBegrkFxoVGpnwBMSLR9EcEcC4qb8pP14BWcBcUgewMnF3T34VqhWMFkThLJAalwnENOAKiHpJq1FZgI2AT6HZtuxZwR9GidSHtI30jOrbawxlVX78/AbNfhHlomEUJJI89O2MqeE79T8/nk8nMBm/dK576hZgmA3cp/R4l9/UeSxiHLVIlNm4nFfT0bxyuIj7LHRTKai+zdJobwMKzcZSJb0ePV5PKN+BqAAKE47UlMnERELMM3EdYP/yrd+XYb2mOiYBiQ8OQnoRBlXrl9JZix7D1pHTazu4MoyBcnYamqAjIMTR8G4FT8LuhLsexXYYjICBiqhQBvYb6fLZIJCjPypVvaOoVAW2WcasCnL2Nq82xHJNSqlCeFcDshaPK0twkAhosjZL31QYw+1rlMpWGMArl23SBsZZO58F2tlJXmjOXS+s4WGvpMiBJT/I2PInZ6lIs9/hBsNS1hS6BG0DSqmYEDRlCXQrmy50P1oDRKTSegmNbUsA0zDMwRhPJXeCE3vWLPQMvan6X8AgIa1vcR4AkGZkDR4ejJ1UHpsaVI0g2LInpOsNFUud1rhxSV+fzC9Woz2EZkWQuja7/B+jUrgtIMpy9YCW4n4K41YfzRneW5E1KJTe4B2Zq1Q5EHEtj4U3AfEzR5SVY4l7QYQPJdN2as7RKBF0BPZqqH4VgMAMBL8Byxr7y8zCZiDlnOcEKIPmUpgB5Z2ww5RdOiiRiNajUmWda5IG6WbhsyY2fx6m8gLcoJDJFkH219M3We1+cnda93pfycZpIJEL/s/wSYADmOAwAQgdpBAAAAABJRU5ErkJggg=="}});
//# sourceMappingURL=app.5a69c128.js.map