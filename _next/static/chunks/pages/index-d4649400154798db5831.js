(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5698:function(e,n,t){"use strict";var r,o=t(7294);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}n.Z=function(e){return o.createElement("svg",a({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e),r||(r=o.createElement("path",{fill:"#1b1c31",d:"M0 0v24h24V0H0zm14.534 19.59c-.406.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.311-1.588-.824-2.147.083-.202.357-1.016-.079-2.117 0 0-.671-.215-2.198.82A7.603 7.603 0 0 0 12 7.868a7.643 7.643 0 0 0-2.003.269c-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118a3.092 3.092 0 0 0-.824 2.147c0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385A8 8 0 0 1 12 4a8 8 0 0 1 2.534 15.59z"})))}},3952:function(e,n,t){"use strict";t.d(n,{Z:function(){return j}});var r=t(7294),o=t(1709),a=t.n(o),c=t(50),i=t.n(c),s=t(1664),l=t(2751),u=t(5893);function f(e){var n=e.location,t=v(n,l.TU.Home),r=v(n,l.TU.Projects),o=v(n,l.TU.Resume);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{className:"".concat(i().navButton," ").concat(t," ").concat(i().link),children:(0,u.jsx)(s.default,{href:"/",passHref:!0,children:(0,u.jsx)("button",{className:i().innerButton,children:"Home"})})}),(0,u.jsx)("div",{className:"".concat(i().navButton," ").concat(r," ").concat(i().link),children:(0,u.jsx)(s.default,{href:l.gw,passHref:!0,children:(0,u.jsx)("button",{className:i().innerButton,children:"Projects"})})}),(0,u.jsx)("div",{className:"".concat(i().navButton," ").concat(o," ").concat(i().link),children:(0,u.jsx)(s.default,{href:l.Du,passHref:!0,children:(0,u.jsx)("button",{className:i().innerButton,children:"R\xe9sum\xe9"})})})]})}function d(e){var n=e.location;return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("div",{className:i().navContainer,children:(0,u.jsx)(f,{location:n})})})}function h(e){var n=e.location;return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("div",{className:i().listContainer,children:(0,u.jsx)(f,{location:n})})})}var p,v=function(e,n){return e==n?i().navButtonClicked:""};function m(){return(m=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var _=function(e){return r.createElement("svg",m({width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),p||(p=r.createElement("path",{d:"M2 6h20v2H2V6ZM2 11h20v2H2v-2ZM22 16H2v2h20v-2Z",fill:"#fff"})))};function j(e){var n=e.children,t=e.location,o=(0,r.useState)(!1),c=o[0],i=o[1];return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("nav",{className:a().navbar,children:[(0,u.jsx)("div",{className:a().portfolioTitle,children:"Durid's Portfolio"}),(0,u.jsx)(d,{location:t}),(0,u.jsx)("div",{className:a().menuIcon,onClick:function(){return i(!c)},children:(0,u.jsx)(_,{})})]}),c&&(0,u.jsx)("div",{className:a().mobileNav,children:(0,u.jsx)(h,{location:t})}),n,(0,u.jsx)("footer",{className:a().footer,children:(0,u.jsxs)("div",{children:["Logos were provided by ",(0,u.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://iconmonstr.com",children:"iconmonstr"})]})})]})}},2751:function(e,n,t){"use strict";var r;t.d(n,{TU:function(){return r},gw:function(){return o},Du:function(){return a}}),function(e){e[e.Home=0]="Home",e[e.Projects=1]="Projects",e[e.Resume=2]="Resume"}(r||(r={}));var o="/projects",a="/resume"},2167:function(e,n,t){"use strict";var r=t(3848);n.default=void 0;var o,a=(o=t(7294))&&o.__esModule?o:{default:o},c=t(1063),i=t(4651),s=t(7426);var l={};function u(e,n,t,r){if(e&&c.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,o=i.useRouter(),f=a.default.useMemo((function(){var n=c.resolveHref(o,e.href,!0),t=r(n,2),a=t[0],i=t[1];return{href:a,as:e.as?c.resolveHref(o,e.as):i||a}}),[o,e.href,e.as]),d=f.href,h=f.as,p=e.children,v=e.replace,m=e.shallow,_=e.scroll,j=e.locale;"string"===typeof p&&(p=a.default.createElement("a",null,p));var x=(n=a.default.Children.only(p))&&"object"===typeof n&&n.ref,g=s.useIntersection({rootMargin:"200px"}),w=r(g,2),b=w[0],y=w[1],k=a.default.useCallback((function(e){b(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,b]);a.default.useEffect((function(){var e=y&&t&&c.isLocalURL(d),n="undefined"!==typeof j?j:o&&o.locale,r=l[d+"%"+h+(n?"%"+n:"")];e&&!r&&u(o,d,h,{locale:n})}),[h,d,y,j,t,o]);var N={ref:k,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,i,s){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(t))&&(e.preventDefault(),null==i&&r.indexOf("#")>=0&&(i=!1),n[o?"replace":"push"](t,r,{shallow:a,locale:s,scroll:i}))}(e,o,d,h,v,m,_,j)},onMouseEnter:function(e){c.isLocalURL(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),u(o,d,h,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var H="undefined"!==typeof j?j:o&&o.locale,C=o&&o.isLocaleDomain&&c.getDomainLocale(h,H,o&&o.locales,o&&o.domainLocales);N.href=C||c.addBasePath(c.addLocale(h,H,o&&o.defaultLocale))}return a.default.cloneElement(n,N)};n.default=f},7426:function(e,n,t){"use strict";var r=t(3848);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!c,s=o.useRef(),l=o.useState(!1),u=r(l,2),f=u[0],d=u[1],h=o.useCallback((function(e){s.current&&(s.current(),s.current=void 0),t||f||e&&e.tagName&&(s.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=i.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return i.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,c=r.elements;return c.set(e,n),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return o.useEffect((function(){if(!c&&!f){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),[h,f]};var o=t(7294),a=t(3447),c="undefined"!==typeof IntersectionObserver;var i=new Map},6326:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return k}});var r=t(9008),o=t(1664),a=t(4476),c=t.n(a),i=t(3952),s=t(7294),l=t(5336),u=t.n(l),f=t(5893);function d(e){var n=e.href,t=e.SvgIcon,r=e.label;return(0,f.jsxs)("div",{className:u().card,onClick:function(){return window.open(n,"_blank","noreferrer")},children:[(0,f.jsx)("div",{className:u().cardIcon,children:(0,f.jsx)(t,{})}),(0,f.jsx)("h3",{children:r})]})}var h,p=t(2751);function v(){return(v=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var m,_=function(e){return s.createElement("svg",v({width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),h||(h=s.createElement("path",{d:"M9 3.586 7.586 5l7 7-7 7L9 20.414 17.414 12 9 3.586Z",fill:"#fff"})))};function j(){return(j=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var x,g=function(e){return s.createElement("svg",j({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e),m||(m=s.createElement("path",{fill:"#1b1c31",d:"M0 0v24h24V0H0zm8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.397-2.586 7-2.777 7 2.476V19z"})))};function w(){return(w=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var b=function(e){return s.createElement("svg",w({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"#1b1c31"},e),x||(x=s.createElement("path",{d:"M12 12.713.015 3h23.97L12 12.713zm0 2.574L0 5.562V21h24V5.562l-12 9.725z"})))},y=t(5698);function k(){return(0,f.jsxs)(i.Z,{location:p.TU.Home,children:[(0,f.jsxs)(r.default,{children:[(0,f.jsx)("title",{children:"Durid's Portfolio - Home Page"}),(0,f.jsx)("meta",{property:"og:title",content:"Durid's Portfolio"}),(0,f.jsx)("meta",{property:"og:type",content:"website"}),(0,f.jsx)("meta",{property:"og:url",content:"https://durid-ah.github.io/"}),(0,f.jsx)("meta",{property:"og:description",content:"Checkout my projects and work experience"}),(0,f.jsx)("meta",{property:"og:image",content:"./images/iconmonstr-code-6.svg"}),(0,f.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,f.jsx)("main",{className:c().main,children:(0,f.jsxs)("div",{className:c().mainContent,children:[(0,f.jsx)("div",{className:c().introWrapper,children:(0,f.jsx)("div",{className:c().intro,children:(0,f.jsx)("div",{className:c().content,children:(0,f.jsxs)("div",{className:c().paragraph,children:[(0,f.jsx)("h1",{children:"Hi, my name's DURID AHMAD!"}),(0,f.jsxs)("p",{children:["I am a ",(0,f.jsx)("span",{className:c().focus,children:"Software Engineer"})," with experience working with clients of different backgrounds and translating their needs into working solutions. For 2+ years, I have built full-stack applications and integration tools that synchronize data with third-party systems. Feel free to check out my projects or reach out to me."]}),(0,f.jsxs)("div",{className:c().buttonContainer,children:[(0,f.jsx)("button",{className:c().btnSecondary,children:"Contact Me"}),(0,f.jsx)(o.default,{href:p.gw,passHref:!0,children:(0,f.jsxs)("button",{className:c().btnPrimary,children:[(0,f.jsx)("div",{children:"Projects"}),(0,f.jsx)("div",{className:c().chevronIcon,children:(0,f.jsx)(_,{})})]})})]})]})})})}),(0,f.jsxs)("div",{className:c().contactMe,children:[(0,f.jsx)("h1",{children:"Contact Me"}),(0,f.jsx)("div",{className:c().description,children:"Feel free to reach out to me through LinkedIn or email (preferably LinkedIn), or you can checkout my code on Github"}),(0,f.jsxs)("div",{className:c().cardRow,children:[(0,f.jsx)(d,{href:"https://www.linkedin.com/in/durid-ahmad/",SvgIcon:g,label:"Send Me A DM"}),(0,f.jsx)(d,{href:"mailto:ahmad.durid.dev@gmail.com",SvgIcon:b,label:"Send Me An Email"}),(0,f.jsx)(d,{href:"https://github.com/durid-ah",SvgIcon:y.Z,label:"View My Code"})]})]})]})})]})}},5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(6326)}])},50:function(e){e.exports={navContainer:"app_links_navContainer__3Vi2b",link:"app_links_link__2njX6",innerButton:"app_links_innerButton__1hmz4",navButton:"app_links_navButton__3OvBl",navButtonClicked:"app_links_navButtonClicked__pJU1Z",hide:"app_links_hide__1tw7k",listContainer:"app_links_listContainer__HrqeN"}},5336:function(e){e.exports={card:"contact_card_card__3S1eC",cardIcon:"contact_card_cardIcon___Dltm"}},1709:function(e){e.exports={navbar:"layout_navbar__1CupB",portfolioTitle:"layout_portfolioTitle__2yT2p",mobileNav:"layout_mobileNav__1FAma",menuIcon:"layout_menuIcon__3j263",footer:"layout_footer__2eoqc"}},4476:function(e){e.exports={main:"Home_main__1x8gC",mainContent:"Home_mainContent__Tnl6a",introWrapper:"Home_introWrapper__fMnhd",intro:"Home_intro__kLSjQ",content:"Home_content__2fqOz",paragraph:"Home_paragraph__Dkmfn",focus:"Home_focus__2FRTw",buttonContainer:"Home_buttonContainer__3EXIT",btnPrimary:"Home_btnPrimary__2wXLg",btnSecondary:"Home_btnSecondary__2kR2C",chevronIcon:"Home_chevronIcon__3ysiM",contactMe:"Home_contactMe__KxN3j",description:"Home_description__17Z4F",cardRow:"Home_cardRow__3Tq8t"}},9008:function(e,n,t){e.exports=t(639)},1664:function(e,n,t){e.exports=t(2167)}},function(e){e.O(0,[774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);