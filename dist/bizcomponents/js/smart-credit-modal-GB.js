/* version: 1.22.0 */
window.crc=function(e){function t(t){for(var o,i,c=t[0],l=t[1],p=t[2],s=0,h=[];s<c.length;s++)({}).hasOwnProperty.call(r,i=c[s])&&r[i]&&h.push(r[i][0]),r[i]=0;for(o in l)({}).hasOwnProperty.call(l,o)&&(e[o]=l[o]);for(d&&d(t);h.length;)h.shift()();return a.push.apply(a,p||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,c=1;c<n.length;c++)0!==r[n[c]]&&(o=!1);o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={5:0},a=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return{}.hasOwnProperty.call(e,t)},i.p="";var c=("undefined"!=typeof self?self:this).webpackJsonpcrc=("undefined"!=typeof self?self:this).webpackJsonpcrc||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var p=0;p<c.length;p++)t(c[p]);var d=l;return a.push([159,0]),n()}({150:function(e,t,n){(t=n(26)(!1)).push([e.i,".content-wrapper{overflow-y:scroll;-webkit-overflow-scrolling:touch;margin:auto;border-radius:10px;height:100%;width:100vw}.content{padding-top:0;position:relative;z-index:50;background:white}.content-background{min-height:100%;position:relative;width:100%;margin:auto;border-radius:10px;max-width:640px}main{margin:0 auto;height:100%;padding-top:1.5rem;box-sizing:border-box;display:flex;flex-direction:column}.modal-container.loading .content-wrapper{overflow:hidden}.modal-container.loading main>*{filter:blur(3px);opacity:0.6}.top-overlay{position:fixed;height:84px;left:0;right:0}@media (min-width: 640px) and (min-height: 540px){.content-background{min-height:auto;margin:auto;width:100%;height:100%;box-shadow:0px 10px 14px 1px rgba(0,0,0,0.6);display:flex;flex-direction:column}.content{flex:1 1 100%}.content-wrapper{display:flex;justify-content:center;align-items:center}.wrapper{opacity:0;transform:translateY(5%);transition:transform 350ms ease, opacity 250ms ease}.show .wrapper{opacity:1;transform:translateY(0%);transition:transform 350ms ease, opacity 250ms ease}}@media all and (-ms-high-contrast: none), (-ms-high-contrast: active){.content-wrapper{justify-content:flex-start}}@media (max-width: 639px), (max-height: 539px){.content-wrapper{margin-top:84px;height:calc(100% - 84px);scrollbar-width:none}.content-wrapper::-webkit-scrollbar{display:none}.content{min-height:calc(100vh - 84px)}.content-background{box-shadow:1px 21px 34px 2px rgba(0,0,0,0.56);background:white}.overlay-side.left,.overlay-side.right{width:calc((100% - 612px) / 2) !important}.overlay-side.bottom{display:none}}.header-wrapper{background:white;pointer-events:none;overflow:hidden;border-top-right-radius:10px;border-top-left-radius:10px;position:fixed;width:100%;max-width:640px;z-index:51;transform:translate3d(0, 0, 0)}.header-container{background-color:#0070ba;position:relative;overflow:hidden}.header-container h1{font-size:1.5rem;font-weight:bold;color:white}.header-container .header{max-width:500px;margin:auto;z-index:999;display:block;height:auto;padding-top:40px}.header-container .logo{display:inline-block}.header-container .logo img{height:45px;margin-right:9px}.header-container .close{top:5px;right:5px;pointer-events:all}.header-container .close svg{height:40px;width:40px}.header-container .close svg path{stroke:white !important}@media (max-width: 639px), (max-height: 539px){.header-container{text-align:center}.header-container h1{margin:0 auto}.header-container .logo img{height:45px;margin-right:9px}.header-container .close svg{height:35px;width:35px}}.hero-image{background-color:#0070ba;position:fixed;transform:translate3d(0, 0, 0);width:100%;padding:60px 0;top:12rem;max-width:640px}@media (min-width: 640px) and (min-height: 540px){.hero-image{background-color:transparent;height:12rem;top:0;overflow:hidden;padding:0;z-index:51;pointer-events:none}.hero-image .icon{position:absolute;right:3rem;bottom:-1rem}}.content{position:relative;background:transparent;box-sizing:border-box;padding-top:20rem}.content .corner{position:absolute;top:-2rem;left:0;width:100px;height:2rem;overflow:hidden;background-color:white;z-index:51;top:18rem;max-width:640px}.content .corner:after{content:'';position:absolute;background-color:#0070ba;border-bottom-left-radius:100px 30px;bottom:0;left:0;width:100%;height:100%}.content .content-body{padding:0 1rem 1rem;margin:3rem auto 0;max-width:500px}.content h2{text-align:left;font-weight:bold;font-size:19px}.content .divider{border:none;border-bottom:1px dashed #aaa}.content p,.content li{color:#687173}.content .call-to-action{display:flex;width:100%;align-items:center;justify-content:space-between;margin-top:3rem}.content .call-to-action svg{margin:0}.content .call-to-action p{margin-top:0;margin-bottom:0.2rem}.content .call-to-action button{margin-left:1rem;flex:0 1 35%}.content .call-to-action .dark-text{color:#2c2e2f}.content .d-inline-block{display:inline-block}.content main{background:white;padding-top:0}.content .terms li{margin-bottom:0.5rem}@media (min-width: 640px) and (min-height: 540px){.content{padding-top:12rem}.content .corner{top:10rem;position:fixed;transform:translate3d(0, 0, 0);left:auto;width:100%}}@media (max-width: 639px), (max-height: 539px){.content.sticky .corner{width:100%;position:fixed;transform:translate3d(0, 0, 0);top:calc(8rem + 84px);left:auto}.content .content-body{max-width:400px}}\n",""]),e.exports=t},159:function(e,t,n){"use strict";n.r(t),n.d(t,"setupModal",(function(){return b}));var o=n(1),r=n(11),a=n(89),i=n.n(a),c=n(3),l=n(6),p=n(166),d=function(){var e=Object(p.a)("GPL"),t=e.headline,n=e.subHeadline,r=e.terms,a=e.instructions,i=Object(p.b)("GPL").qualifying,c="true"===(null==i?void 0:i.toLowerCase());return Object(o.g)("section",{className:"content-body"},Object(o.g)("div",{className:"description"},Object(o.g)("h2",null,t.singleProduct),Object(o.g)("h3",null,n.pay.start," ",c&&n.pay.amount+" ",n.pay.end," ",n.available.replace(/\.00/g,"")," ",n.apply),Object(o.g)("div",{className:"call-to-action"},Object(o.g)("div",null,Object(o.g)("p",null,Object(o.g)("span",{className:"d-inline-block"},a.title[0]," ",Object(o.g)("b",{className:"dark-text"},a.title[1]))," ",Object(o.g)("span",{className:"d-inline-block"},a.title[2]," ",Object(o.g)("b",{className:"dark-text"},a.title[3])))),Object(o.g)(l.a,{name:"secure"}))),Object(o.g)("hr",{className:"divider"}),Object(o.g)("div",{className:"terms"},Object(o.g)("p",null,r.map((function(e){return Object(o.g)(o.b,null,e,Object(o.g)("br",null))})),"Click"," ",Object(o.g)("a",{href:"https://www.paypal.com/uk/webapps/mpp/paypal-payin3/faq",target:"_blank",rel:"noreferrer noopener"},"here")," ","to learn more about Pay in 3.")))},s=n(49),h=n(161),g=n(12),m=n(13),u=function(){var e=Object(c.i)(),t=Object(c.i)(),n=Object(c.i)(),r=Object(c.j)(!1),a=r[0],i=r[1],p=Object(s.b)(),u=p[0],b=p[1];Object(h.b)((function(t){var o=t.target.scrollTop;0!==o&&(o>=e.current.clientHeight+n.current.clientHeight?a||i(!0):a&&i(!1))}),[a]),Object(c.d)((function(){"CLOSED"===u&&i(!1)}),[u]);var f=["content",a?"sticky":""];return Object(o.g)(m.a,{contentWrapper:t,contentMaxWidth:640},Object(o.g)("div",{className:"top-overlay",onClick:function(){return b("Modal Overlay")}}),Object(o.g)("div",{className:"content-wrapper",ref:t},Object(o.g)("div",{className:"content-background"},Object(o.g)(g.a,{wrapperRef:e},Object(o.g)("h1",null,"Buy now, pay later")),Object(o.g)("div",{className:"hero-image"},Object(o.g)(l.a,{name:"phone-arm"})),Object(o.g)("div",{className:f.join(" ")},Object(o.g)("span",{className:"corner",ref:n}),Object(o.g)("main",{className:"main"},Object(o.g)(d,null))))))};function b(e){Object(o.j)(Object(o.g)(r.a,{serverData:e,styles:i.a._getCss()},Object(o.g)(u,{contentMaxWidth:750,contentMaxHeight:537})),document.body)}},89:function(e,t,n){var o=n(150),r=n(27),a="string"==typeof o?[[e.i,o,""]]:o;(t=e.exports=o.locals||{})._getContent=function(){return a},t._getCss=function(){return""+o},t._insertCss=function(e){return r(a,e)}}});
//# sourceMappingURL=smart-credit-modal-GB.js.map