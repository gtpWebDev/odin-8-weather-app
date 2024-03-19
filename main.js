(()=>{"use strict";var n={365:(n,t,e)=>{e.d(t,{A:()=>A});var o=e(354),r=e.n(o),a=e(314),i=e.n(a)()(r());i.push([n.id,":root {\n  --font-hierarchy: Helvetica, Arial, sans-serif, 'Apple Color Emoji',\n    'Segoe UI Emoji', 'Segoe UI Symbol';\n\n  --backGroundColour: #74c3d1;\n  --borderColour: #000000;\n  --lightTextColour: #f8f1e4;\n\n  --lightestColour: rgb(240, 240, 255);\n  --incompleteTask: rgb(210, 182, 214);\n  --completeTask: rgb(233, 220, 235);\n  --midDarkColour: rgb(90, 197, 160);\n  --darkestColour: #003049;\n\n  --lowPrio: rgb(17, 227, 17);\n  --midPrio: rgb(236, 192, 15);\n  --highPrio: rgb(219, 14, 14);\n\n  /* Main container width max of 80% vw and fixed width, centred */\n  --minContentWidth: 1200px;\n  --bodyWidth: min(var(--minContentWidth), 90vw);\n  --bodyWidthMargin: max(calc(0.5 * (100vw - var(--minContentWidth))), 5vw);\n\n  /* Main container height of 90% vh, centred */\n  --bodyHeight: 90vh;\n  --bodyHeightMargin: calc(0.5 * (100vh - var(--bodyHeight)));\n\n  --weatherDaySquareBoxWidth: 120px;\n\n  --header-scaler: 4rem;\n}\n\nhtml {\n  /* set the rem */\n  font-size: 62.5%;\n}\n\nbody {\n  background-color: var(--backGroundColour);\n  font-family: var(--font-hierarchy);\n  font-size: 2rem;\n}\n\np {\n  margin: 0;\n}\n\n#main-container {\n  background-color: var(--lightestColour);\n  width: var(--bodyWidth);\n  height: var(--bodyHeight);\n  margin: var(--bodyHeightMargin) var(--bodyWidthMargin);\n  display: grid;\n  grid-template-columns: 350px 1fr;\n  column-gap: 20px;\n}\n\n#sidebar-container {\n  padding: 40px 25px;\n  background-color: var(--midDarkColour);\n  box-shadow: 0px 6px 20px var(--midDarkColour);\n  display: grid;\n  grid-template-columns: auto;\n  grid-template-rows: repeat(2, auto);\n  align-content: start;\n  row-gap: 80px;\n}\n\n#page-title-container {\n  display: grid;\n  column-gap: 20px;\n  align-items: center;\n  grid-template-columns: auto 1fr;\n}\n\n#page-title-icon {\n  width: 40px;\n}\n\n#page-title-text {\n  font-size: 2.5rem;\n  font-weight: 800;\n}\n\n/* used to avoid input styling adjusting when autocomplete list is visible */\n#location-top-container {\n  position: relative; /* autocomplete list relative to this */\n}\n\n#location-input-container {\n  background-color: var(--lightestColour);\n  border: 2px solid black;\n  display: grid;\n  grid-template-columns: 1fr auto;\n  column-gap: 20px;\n  align-items: center;\n  font-size: 2rem;\n}\n\n#location-input-text {\n  background-color: var(--lightestColour);\n  border: none;\n  padding: 0 10px;\n  /* font-size: 20px; */\n}\n\ninput:focus {\n  outline: none;\n}\n\n#location-input-icon {\n  background-color: var(--lightestColour);\n  width: 40px;\n}\n\n#location-autocomplete {\n}\n\n.autocomplete-invis {\n  visibility: hidden;\n}\n\n.autocomplete-vis {\n  position: absolute;\n  top: 50px;\n  visibility: visible;\n}\n\n#display-container {\n  padding: 50px 30px;\n  display: grid;\n  justify-content: center;\n  align-content: start;\n  grid-template-rows: repeat (2, auto);\n  row-gap: 80px;\n}\n\n#location-display {\n  display: grid;\n  place-items: center;\n  font-size: 3rem;\n}\n\n#daily-weather-display {\n  padding: 30px;\n  display: grid;\n  justify-content: stretch;\n  grid-template-rows: repeat(2, auto);\n  border: 2px solid black;\n}\n\n#today-weather-display {\n  padding: 20px;\n  grid-row: 1;\n  grid-column: 1 / 4;\n  border: 2px solid green;\n  display: grid;\n  place-items: center;\n}\n\n.forecast-day-display {\n  grid-row: 2;\n  width: var(--weatherDaySquareBoxWidth);\n  height: var(--weatherDaySquareBoxWidth);\n  border: 2px solid green;\n  display: grid;\n  place-items: center;\n}\n","",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"AAAA;EACE;uCACqC;;EAErC,2BAA2B;EAC3B,uBAAuB;EACvB,0BAA0B;;EAE1B,oCAAoC;EACpC,oCAAoC;EACpC,kCAAkC;EAClC,kCAAkC;EAClC,wBAAwB;;EAExB,2BAA2B;EAC3B,4BAA4B;EAC5B,4BAA4B;;EAE5B,gEAAgE;EAChE,yBAAyB;EACzB,8CAA8C;EAC9C,yEAAyE;;EAEzE,6CAA6C;EAC7C,kBAAkB;EAClB,2DAA2D;;EAE3D,iCAAiC;;EAEjC,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,yCAAyC;EACzC,kCAAkC;EAClC,eAAe;AACjB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,uCAAuC;EACvC,uBAAuB;EACvB,yBAAyB;EACzB,sDAAsD;EACtD,aAAa;EACb,gCAAgC;EAChC,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,sCAAsC;EACtC,6CAA6C;EAC7C,aAAa;EACb,2BAA2B;EAC3B,mCAAmC;EACnC,oBAAoB;EACpB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,mBAAmB;EACnB,+BAA+B;AACjC;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA,4EAA4E;AAC5E;EACE,kBAAkB,EAAE,uCAAuC;AAC7D;;AAEA;EACE,uCAAuC;EACvC,uBAAuB;EACvB,aAAa;EACb,+BAA+B;EAC/B,gBAAgB;EAChB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,uCAAuC;EACvC,YAAY;EACZ,eAAe;EACf,qBAAqB;AACvB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,uCAAuC;EACvC,WAAW;AACb;;AAEA;AACA;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,oBAAoB;EACpB,oCAAoC;EACpC,aAAa;AACf;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,wBAAwB;EACxB,mCAAmC;EACnC,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,WAAW;EACX,kBAAkB;EAClB,uBAAuB;EACvB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,sCAAsC;EACtC,uCAAuC;EACvC,uBAAuB;EACvB,aAAa;EACb,mBAAmB;AACrB",sourcesContent:[":root {\n  --font-hierarchy: Helvetica, Arial, sans-serif, 'Apple Color Emoji',\n    'Segoe UI Emoji', 'Segoe UI Symbol';\n\n  --backGroundColour: #74c3d1;\n  --borderColour: #000000;\n  --lightTextColour: #f8f1e4;\n\n  --lightestColour: rgb(240, 240, 255);\n  --incompleteTask: rgb(210, 182, 214);\n  --completeTask: rgb(233, 220, 235);\n  --midDarkColour: rgb(90, 197, 160);\n  --darkestColour: #003049;\n\n  --lowPrio: rgb(17, 227, 17);\n  --midPrio: rgb(236, 192, 15);\n  --highPrio: rgb(219, 14, 14);\n\n  /* Main container width max of 80% vw and fixed width, centred */\n  --minContentWidth: 1200px;\n  --bodyWidth: min(var(--minContentWidth), 90vw);\n  --bodyWidthMargin: max(calc(0.5 * (100vw - var(--minContentWidth))), 5vw);\n\n  /* Main container height of 90% vh, centred */\n  --bodyHeight: 90vh;\n  --bodyHeightMargin: calc(0.5 * (100vh - var(--bodyHeight)));\n\n  --weatherDaySquareBoxWidth: 120px;\n\n  --header-scaler: 4rem;\n}\n\nhtml {\n  /* set the rem */\n  font-size: 62.5%;\n}\n\nbody {\n  background-color: var(--backGroundColour);\n  font-family: var(--font-hierarchy);\n  font-size: 2rem;\n}\n\np {\n  margin: 0;\n}\n\n#main-container {\n  background-color: var(--lightestColour);\n  width: var(--bodyWidth);\n  height: var(--bodyHeight);\n  margin: var(--bodyHeightMargin) var(--bodyWidthMargin);\n  display: grid;\n  grid-template-columns: 350px 1fr;\n  column-gap: 20px;\n}\n\n#sidebar-container {\n  padding: 40px 25px;\n  background-color: var(--midDarkColour);\n  box-shadow: 0px 6px 20px var(--midDarkColour);\n  display: grid;\n  grid-template-columns: auto;\n  grid-template-rows: repeat(2, auto);\n  align-content: start;\n  row-gap: 80px;\n}\n\n#page-title-container {\n  display: grid;\n  column-gap: 20px;\n  align-items: center;\n  grid-template-columns: auto 1fr;\n}\n\n#page-title-icon {\n  width: 40px;\n}\n\n#page-title-text {\n  font-size: 2.5rem;\n  font-weight: 800;\n}\n\n/* used to avoid input styling adjusting when autocomplete list is visible */\n#location-top-container {\n  position: relative; /* autocomplete list relative to this */\n}\n\n#location-input-container {\n  background-color: var(--lightestColour);\n  border: 2px solid black;\n  display: grid;\n  grid-template-columns: 1fr auto;\n  column-gap: 20px;\n  align-items: center;\n  font-size: 2rem;\n}\n\n#location-input-text {\n  background-color: var(--lightestColour);\n  border: none;\n  padding: 0 10px;\n  /* font-size: 20px; */\n}\n\ninput:focus {\n  outline: none;\n}\n\n#location-input-icon {\n  background-color: var(--lightestColour);\n  width: 40px;\n}\n\n#location-autocomplete {\n}\n\n.autocomplete-invis {\n  visibility: hidden;\n}\n\n.autocomplete-vis {\n  position: absolute;\n  top: 50px;\n  visibility: visible;\n}\n\n#display-container {\n  padding: 50px 30px;\n  display: grid;\n  justify-content: center;\n  align-content: start;\n  grid-template-rows: repeat (2, auto);\n  row-gap: 80px;\n}\n\n#location-display {\n  display: grid;\n  place-items: center;\n  font-size: 3rem;\n}\n\n#daily-weather-display {\n  padding: 30px;\n  display: grid;\n  justify-content: stretch;\n  grid-template-rows: repeat(2, auto);\n  border: 2px solid black;\n}\n\n#today-weather-display {\n  padding: 20px;\n  grid-row: 1;\n  grid-column: 1 / 4;\n  border: 2px solid green;\n  display: grid;\n  place-items: center;\n}\n\n.forecast-day-display {\n  grid-row: 2;\n  width: var(--weatherDaySquareBoxWidth);\n  height: var(--weatherDaySquareBoxWidth);\n  border: 2px solid green;\n  display: grid;\n  place-items: center;\n}\n"],sourceRoot:""}]);const A=i},314:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",o=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),o&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),o&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var A=0;A<this.length;A++){var c=this[A][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);o&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},354:n=>{n.exports=function(n){var t=n[1],e=n[3];if(!e)return t;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),a="/*# ".concat(r," */");return[t].concat([a]).join("\n")}return[t].join("\n")}},72:n=>{var t=[];function e(n){for(var e=-1,o=0;o<t.length;o++)if(t[o].identifier===n){e=o;break}return e}function o(n,o){for(var a={},i=[],A=0;A<n.length;A++){var c=n[A],l=o.base?c[0]+o.base:c[0],d=a[l]||0,s="".concat(l," ").concat(d);a[l]=d+1;var p=e(s),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(u);else{var C=r(u,o);o.byIndex=A,t.splice(A,0,{identifier:s,updater:C,references:1})}i.push(s)}return i}function r(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var A=e(a[i]);t[A].references--}for(var c=o(n,r),l=0;l<a.length;l++){var d=e(a[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=c}}},659:n=>{var t={};n.exports=function(n,e){var o=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},540:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},56:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var r=void 0!==e.layer;r&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,r&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},113:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function e(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return n[o](a,a.exports,e),a.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&(n=t.currentScript.src),!n)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.nc=void 0,(()=>{var n=e(72),t=e.n(n),o=e(825),r=e.n(o),a=e(659),i=e.n(a),A=e(56),c=e.n(A),l=e(540),d=e.n(l),s=e(113),p=e.n(s),u=e(365),C={};C.styleTagTransform=p(),C.setAttributes=c(),C.insert=i().bind(null,"head"),C.domAPI=r(),C.insertStyleElement=d(),t()(u.A,C),u.A&&u.A.locals&&u.A.locals;let m=[],g={},h={},E=[];const f=e.p+"a3d8e77d0f79f95ade8c.svg",v=e.p+"b555bad3e78b460a9f3c.svg",y=document.querySelector("#location-input-text"),B=document.querySelector("#location-autocomplete");B.addEventListener("click",(async n=>{var t,e,o;await async function(n,t){const e=`https://api.weatherapi.com/v1/forecast.json?key=523c922a8fd8443586f100911241603&q=${n}&days=3`,o=await fetch(e,{mode:"cors"}),r=await o.json();var a,i;i=r.location,g={name:i.name,region:i.region,country:i.country,localtime_unix:i.localtime_epoch,localtime_friendly:i.localtime},a=r.current,h={temp_cent:a.temp_c,temp_fahr:a.temp_f,description:a.condition.text,imageLoc:a.condition.icon,rain_mm:a.precip_mm,rain_inches:a.precip_in,windSpeed_mph:a.wind_mph,windSpeed_kph:a.wind_kph,windDirection:a.wind_degree},E=(n=>{const t=[];return n.forEach(((n,e)=>{t.push({forecastDayIndex:e+1,forecastDate_unix:n.date_epoch,avgTemp_c:n.day.avgtemp_c,maxTemp_c:n.day.maxtemp_c,minTemp_c:n.day.mintemp_c,avgTemp_f:n.day.avgtemp_f,maxTemp_f:n.day.maxtemp_f,minTemp_f:n.day.mintemp_f,description:n.day.condition.text,imageLoc:n.day.condition.icon})})),t})(r.forecast.forecastday)}(n.target.value),o=g,document.querySelector("#location-name").textContent=o.name+", "+o.region,document.querySelector("#location-region").textContent=o.country,document.querySelector("#location-localtime").textContent="Local time: "+o.localtime_friendly,e=h,console.log("todayData",e),document.querySelector("#today-weather-display").textContent=e.temp_cent+"°C",t=E,console.log("forecastData",t),t.forEach(((n,t)=>{document.querySelector(`[data-day-id='${t}']`).textContent=n.avgTemp_c}))})),document.querySelector("#page-title-icon").setAttribute("src",f),document.querySelector("#location-input-icon").setAttribute("src",v),y.addEventListener("input",(async n=>{const t=n.target.value;var e;t.length>=3&&await async function(n){const t=`http://api.weatherapi.com/v1/search.json?key=523c922a8fd8443586f100911241603&q=${n}`,e=await fetch(t,{mode:"cors"});m=await e.json(),console.log("Collected array:"),console.table(m)}(t),e=m,B.innerHTML="",0===e.length?B.setAttribute("class","autocomplete-invis"):(e.forEach((n=>{const t=document.createElement("option"),e=n.name+", "+n.region;t.setAttribute("value",e),t.textContent=e,B.appendChild(t)})),B.setAttribute("class","autocomplete-vis"))}))})()})();
//# sourceMappingURL=main.js.map