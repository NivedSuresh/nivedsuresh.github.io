(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9078],{85709:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var i=r(85893),o=r(67294),l=r(97650);function n(e){var t=e.urlOrId,r=e.className,n=e.autoplay,s=e.unmute,a=e.playList,_=(0,o.useRef)(null),u=(0,l.YD)({threshold:.5,onChange:function(e){var t,r;e||(null===(t=_.current)||void 0===t||null===(r=t.contentWindow)||void 0===r||r.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*"))}}).ref,f=t.match(/^((https:\/\/)?www\.)?youtube.com/)?function(e){var t=new URL(e).searchParams.get("v");return"https://www.youtube-nocookie.com/embed/".concat(t)}(t):"https://www.youtube-nocookie.com/embed/".concat(t,"?"),d="".concat(f,"?enablejsapi=1"),c=n?"&autoplay=1":"",m=s?"":"&mute=1",g=a?"&list=".concat(a):"";return(0,i.jsx)("span",{ref:u,children:(0,i.jsx)("iframe",{ref:_,frameBorder:"0","data-test":"youtube-embed",className:r,src:"".concat(d).concat(c).concat(m).concat(g,"&rel=0&version=3")})})}},74961:function(e,t,r){"use strict";r.d(t,{Ab:function(){return c},ZP:function(){return g},eW:function(){return m},zi:function(){return d}});var i=r(26042),o=r(69396),l=r(85893),n=r(94184),s=r.n(n),a=r(28777),_=(r(32341),r(76986)),u=r(62760),f=r.n(u);function d(e,t){for(var r=[],i=0;i<e.length;i+=t)r.push(e.slice(i,i+t));return r}function c(e){var t=e.className,r=e.children;return(0,l.jsx)(g,{className:s()(f().mobile,t),children:r})}function m(e){var t=e.className,r=e.children;return(0,l.jsx)(g,{className:s()(f().desktop,t),children:r})}function g(e){var t,r=e.className,n=e.children,u=1===n.length&&{touchEnabled:!1,dragEnabled:!1};return(0,l.jsxs)(a.sj,(0,o.Z)((0,i.Z)({naturalSlideWidth:1,naturalSlideHeight:1,totalSlides:n.length,isIntrinsicHeight:!0,className:s()(f().sliderContainer,r)},u),{children:[(0,l.jsx)(a.iR,{children:n.map((function(e,r){return(0,l.jsx)(a.Mi,{index:r,children:e},null!==(t=e.key)&&void 0!==t?t:r)}))}),(0,l.jsx)(a.jp,{className:f().carouselButton,children:(0,l.jsx)(_.CarouselArrow,{})}),(0,l.jsx)(a.P1,{className:s()(f().carouselButton,f().right),children:(0,l.jsx)(_.CarouselArrow,{})}),n.length>1&&(0,l.jsx)(a.I5,{className:f().dotGroup})]}))}},77126:function(e,t,r){"use strict";r.d(t,{KI:function(){return c},X2:function(){return m},_t:function(){return g}});var i=r(14924),o=r(26042),l=r(69396),n=r(99534),s=r(828),a=r(85893),_=(r(67294),r(94184)),u=r.n(_),f=r(22459),d=r.n(f),c={row:d().row,rowContainer:d().rowContainer};function m(e){var t=e.children,r=e.className,i=e.containerProps,s=e.innerRef,_=(0,n.Z)(e,["children","className","containerProps","innerRef"]);return(0,a.jsx)("div",(0,l.Z)((0,o.Z)({},_),{className:u()(r,d().row),children:(0,a.jsx)("div",(0,l.Z)((0,o.Z)({},i),{ref:s,className:u()(null===i||void 0===i?void 0:i.className,d().rowContainer),children:t}))}))}function g(e){return Object.entries(e).map((function(e){var t=(0,s.Z)(e,2),r=t[0],i=t[1];return"number"===typeof i?h(r,i):h(r,i.columns,i.offset)})).join(" ")}function h(e,t,r){return u()(d()["".concat(e,"-").concat(t)],(0,i.Z)({},d()["".concat(e,"-offset-").concat(r)],r))}},51222:function(e,t,r){"use strict";var i=r(828),o=r(85893),l=r(9008),n=r.n(l),s=r(11163),a=function(e){var t=(0,i.Z)(e,2),r=t[0],l=t[1];return(0,o.jsx)("meta",{property:"og:".concat(r),content:l},r)},_="supercell.com";function u(e){if("externalUrl"in e)return e.externalUrl;if("url"in e)return"https://".concat(_).concat(e.url);if("src"in e)return"https://".concat(_).concat(e.src);throw new Error("Unknown type of image: ".concat(e))}t.Z=function(e){var t=e.ogProperties,r=e.description,i=e.image,l=e.path,_=(0,s.useRouter)();return(0,o.jsxs)(n(),{children:[(0,o.jsx)("meta",{name:"description",content:r}),Object.entries(t).map(a),(0,o.jsx)("meta",{property:"og:image",content:u(i)}),(0,o.jsx)("meta",{property:"og:description",content:r}),(0,o.jsx)("meta",{property:"og:site_name",content:"Supercell"}),(0,o.jsx)("meta",{property:"og:url",content:"https://supercell.com".concat(l||_.asPath)}),(0,o.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,o.jsx)("meta",{name:"twitter:creator",content:"@supercell"})]})}},18434:function(e,t,r){"use strict";var i=r(828),o=r(85893),l=r(67294),n=r(9008),s=r.n(n),a=r(11163),_=r(54298);t.Z=function(e){var t=e.children,r=e.title,n=e.titleSuffix,u=void 0===n?"Supercell":n,f=(0,a.useRouter)(),d=f.asPath,c=f.isReady,m=f.query,g=r?"".concat(r," \xd7 ").concat(u):"Supercell",h=(0,i.Z)(d.split(/\?|\#/,1),1)[0];return(0,l.useEffect)((function(){c&&(0,_.qX)(g,h,m)}),[c,h,m,g]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s(),{children:[(0,o.jsx)("meta",{property:"st:title",content:r}),(0,o.jsx)("title",{children:g})]}),t]})}},4495:function(e,t,r){"use strict";r.d(t,{Z:function(){return g}});var i=r(14924),o=r(85893),l=r(94184),n=r.n(l),s=r(67294),a=r(76986),_=r(74961),u=r(85709),f=r(68497),d=r.n(f);function c(e){var t,r=e.handlePlayClick,l=e.gameName,s=e.hide,_=e.title,u=e.darkenBackground,f=!_&&!l;return(0,o.jsxs)("div",{className:n()(d().iconAndText,(t={},(0,i.Z)(t,d().hide,s),(0,i.Z)(t,d().darken,u),t)),children:[f||(0,o.jsx)("div",{className:d().emptyBlock}),(0,o.jsx)("button",{onClick:function(){return r(!0)},className:d().iconContainer,children:(0,o.jsx)(a.PlayVideoIcon,{className:d().playVideoIcon})}),f||(0,o.jsxs)("div",{className:d().textContainer,children:[(0,o.jsx)("p",{className:d().title,children:_}),(0,o.jsx)("p",{className:d().gameName,children:l})]})]})}function m(e){var t=e.video,r=t.title,l=t.gameName,a=t.image,_=t.youtubeLink,f=t.unmute,m=t.playList,g=(0,s.useState)(!1),h=g[0],G=g[1],p=(0,s.useState)(!1),b=p[0],v=p[1],y=a;return(0,o.jsxs)("div",{className:d().slide,children:[(0,o.jsx)(c,{handlePlayClick:function(){v(!0),setTimeout((function(){G(!0)}),500)},title:r,gameName:l,darkenBackground:b}),h&&(0,o.jsx)(u.Z,{className:d().youtubeEmbed,urlOrId:_,autoplay:!0,unmute:f,playList:m}),(0,o.jsx)(y,{className:n()(d().bgImage,(0,i.Z)({},d().darken,b))})]},r)}function g(e){var t=e.videos;return(0,o.jsx)(_.ZP,{children:t.map((function(e,t){return(0,o.jsx)(m,{video:e},t)}))})}},62760:function(e){e.exports={sliderContainer:"carousel_sliderContainer__4QVIn",mobile:"carousel_mobile__nKKb4",desktop:"carousel_desktop__9hS1t",dotGroup:"carousel_dotGroup__TWaOL",carouselButton:"carousel_carouselButton__rZimO",right:"carousel_right__mYoYz",white:"carousel_white__TNPgI",showLargeFull:"carousel_showLargeFull__cpJIc"}},22459:function(e){e.exports={row:"Grid_row__MRfTw",rowContainer:"Grid_rowContainer__XoN4O","full-1":"Grid_full-1__doumK","full-2":"Grid_full-2__YFkPg","full-3":"Grid_full-3__LjbtB","full-4":"Grid_full-4__DjlWg","full-5":"Grid_full-5__rZCB6","full-6":"Grid_full-6__6XpGQ","full-7":"Grid_full-7__VgL1X","full-8":"Grid_full-8__7Y8N7","full-9":"Grid_full-9__yLpUc","full-10":"Grid_full-10__vzZqI","full-11":"Grid_full-11__4dasF","full-12":"Grid_full-12__aAA2e","full-13":"Grid_full-13__0hIaf","full-14":"Grid_full-14__undlQ","full-15":"Grid_full-15__xMMWO","full-16":"Grid_full-16__BKs8Q","full-offset-1":"Grid_full-offset-1__Ol7_M","full-offset-2":"Grid_full-offset-2__XSC_U","full-offset-3":"Grid_full-offset-3__8jVXP","full-offset-4":"Grid_full-offset-4__ixxmg","full-offset-5":"Grid_full-offset-5__MW_KH","full-offset-6":"Grid_full-offset-6__Aot6T","full-offset-7":"Grid_full-offset-7__NeSE4","large-1":"Grid_large-1__OW7K0","large-2":"Grid_large-2__JMYdd","large-3":"Grid_large-3__w4Csz","large-4":"Grid_large-4__mhiG6","large-5":"Grid_large-5__eNPNZ","large-6":"Grid_large-6__RYbqu","large-7":"Grid_large-7__s5_rU","large-8":"Grid_large-8__rlqZJ","large-offset-1":"Grid_large-offset-1__IuRIo","large-offset-2":"Grid_large-offset-2__l0tde","large-offset-3":"Grid_large-offset-3__Vv0_l","large-offset-4":"Grid_large-offset-4__NX2GB","large-offset-5":"Grid_large-offset-5__tzOti","large-offset-6":"Grid_large-offset-6__YMIC2","large-offset-7":"Grid_large-offset-7__eBbt_","medium-1":"Grid_medium-1__ZLDFD","medium-2":"Grid_medium-2__S5sqW","medium-3":"Grid_medium-3__ei2rg","medium-4":"Grid_medium-4__8ud8X","medium-5":"Grid_medium-5__xDKgt","medium-6":"Grid_medium-6__2bL5G","medium-7":"Grid_medium-7__yZUL9","medium-8":"Grid_medium-8__Xozki","medium-offset-1":"Grid_medium-offset-1__RwAFm","medium-offset-2":"Grid_medium-offset-2__jIO5e","medium-offset-3":"Grid_medium-offset-3__f9mVH","medium-offset-4":"Grid_medium-offset-4__VatDU","medium-offset-5":"Grid_medium-offset-5__F1rw4","medium-offset-6":"Grid_medium-offset-6__m8SPR","medium-offset-7":"Grid_medium-offset-7__38Fbl","small-1":"Grid_small-1__322_f","small-2":"Grid_small-2__WywNh","small-3":"Grid_small-3__qXnGm","small-4":"Grid_small-4__W2O3i","small-5":"Grid_small-5__i8X4R","small-6":"Grid_small-6__bUrwr","small-7":"Grid_small-7__6guYR","small-8":"Grid_small-8__w8Sm1","small-offset-1":"Grid_small-offset-1__6qRbW","small-offset-2":"Grid_small-offset-2__tg_PR","small-offset-3":"Grid_small-offset-3__KAgX4","small-offset-4":"Grid_small-offset-4__voVDf","small-offset-5":"Grid_small-offset-5__oSzz3","small-offset-6":"Grid_small-offset-6__WX7iy","small-offset-7":"Grid_small-offset-7__t_UL9","mobile-1":"Grid_mobile-1__MFGAT","mobile-2":"Grid_mobile-2___5Eut","mobile-3":"Grid_mobile-3__2byH6","mobile-4":"Grid_mobile-4__FIFO1","mobile-5":"Grid_mobile-5__fq8pL","mobile-6":"Grid_mobile-6__SfEl3","mobile-offset-1":"Grid_mobile-offset-1__bd1rh","mobile-offset-2":"Grid_mobile-offset-2__opeMt","mobile-offset-3":"Grid_mobile-offset-3__BgSPm","mobile-offset-4":"Grid_mobile-offset-4__Rurg_","mobile-offset-5":"Grid_mobile-offset-5__UA_DH","mobile-offset-6":"Grid_mobile-offset-6__m3V_d","mobile-offset-7":"Grid_mobile-offset-7__llU7t"}},68497:function(e){e.exports={slide:"videoCarousel_slide__12CHW",iconAndText:"videoCarousel_iconAndText__mkuwJ",hide:"videoCarousel_hide__amQ91",iconContainer:"videoCarousel_iconContainer__m6CyZ",playVideoIcon:"videoCarousel_playVideoIcon__bmZAW",textContainer:"videoCarousel_textContainer__40kfq",title:"videoCarousel_title__ZkBEh",gameName:"videoCarousel_gameName__uEFL4",youtubeEmbed:"videoCarousel_youtubeEmbed__j1aml",bgImage:"videoCarousel_bgImage__jOYoK",darken:"videoCarousel_darken__fpibs",emptyBlock:"videoCarousel_emptyBlock__8XcUY"}},97650:function(e,t,r){"use strict";r.d(t,{YD:function(){return u}});var i=r(67294);const o=new Map,l=new WeakMap;let n,s=0;function a(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>{return`${t}_${"root"===t?(r=e.root,r?(l.has(r)||(s+=1,l.set(r,s.toString())),l.get(r)):"0"):e[t]}`;var r})).toString()}function _(e,t,r={},i=n){if("undefined"===typeof window.IntersectionObserver&&void 0!==i){const o=e.getBoundingClientRect();return t(i,{isIntersecting:i,target:e,intersectionRatio:"number"===typeof r.threshold?r.threshold:0,time:0,boundingClientRect:o,intersectionRect:o,rootBounds:o}),()=>{}}const{id:l,observer:s,elements:_}=function(e){let t=a(e),r=o.get(t);if(!r){const i=new Map;let l;const n=new IntersectionObserver((t=>{t.forEach((t=>{var r;const o=t.isIntersecting&&l.some((e=>t.intersectionRatio>=e));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=o),null==(r=i.get(t.target))||r.forEach((e=>{e(o,t)}))}))}),e);l=n.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:n,elements:i},o.set(t,r)}return r}(r);let u=_.get(e)||[];return _.has(e)||_.set(e,u),u.push(t),s.observe(e),function(){u.splice(u.indexOf(t),1),0===u.length&&(_.delete(e),s.unobserve(e)),0===_.size&&(s.disconnect(),o.delete(l))}}i.Component;function u({threshold:e,delay:t,trackVisibility:r,rootMargin:o,root:l,triggerOnce:n,skip:s,initialInView:a,fallbackInView:u,onChange:f}={}){var d;const[c,m]=i.useState(null),g=i.useRef(),[h,G]=i.useState({inView:!!a,entry:void 0});g.current=f,i.useEffect((()=>{if(s||!c)return;let i=_(c,((e,t)=>{G({inView:e,entry:t}),g.current&&g.current(e,t),t.isIntersecting&&n&&i&&(i(),i=void 0)}),{root:l,rootMargin:o,threshold:e,trackVisibility:r,delay:t},u);return()=>{i&&i()}}),[Array.isArray(e)?e.toString():e,c,l,o,n,s,r,u,t]);const p=null==(d=h.entry)?void 0:d.target;i.useEffect((()=>{c||!p||n||s||G({inView:!!a,entry:void 0})}),[c,p,n,s,a]);const b=[m,h.inView,h.entry];return b.ref=b[0],b.inView=b[1],b.entry=b[2],b}}}]);