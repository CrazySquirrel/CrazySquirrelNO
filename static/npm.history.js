"use strict";(self.webpackChunkcrazysquirrel=self.webpackChunkcrazysquirrel||[]).push([[162],{4734:(n,t,e)=>{e.d(t,{lX:()=>P,q_:()=>A,PP:()=>E,ob:()=>d,Hp:()=>l,Ep:()=>h});var o=e(5871),i=e(4486),r=e(1309),a=e(6791);function c(n){return"/"===n.charAt(0)?n:"/"+n}function s(n){return"/"===n.charAt(0)?n.substr(1):n}function u(n,t){return function(n,t){return 0===n.toLowerCase().indexOf(t.toLowerCase())&&-1!=="/?#".indexOf(n.charAt(t.length))}(n,t)?n.substr(t.length):n}function f(n){return"/"===n.charAt(n.length-1)?n.slice(0,-1):n}function h(n){var t=n.pathname,e=n.search,o=n.hash,i=t||"/";return e&&"?"!==e&&(i+="?"===e.charAt(0)?e:"?"+e),o&&"#"!==o&&(i+="#"===o.charAt(0)?o:"#"+o),i}function d(n,t,e,r){var a;"string"==typeof n?(a=function(n){var t=n||"/",e="",o="",i=t.indexOf("#");-1!==i&&(o=t.substr(i),t=t.substr(0,i));var r=t.indexOf("?");return-1!==r&&(e=t.substr(r),t=t.substr(0,r)),{pathname:t,search:"?"===e?"":e,hash:"#"===o?"":o}}(n)).state=t:(void 0===(a=(0,o.Z)({},n)).pathname&&(a.pathname=""),a.search?"?"!==a.search.charAt(0)&&(a.search="?"+a.search):a.search="",a.hash?"#"!==a.hash.charAt(0)&&(a.hash="#"+a.hash):a.hash="",void 0!==t&&void 0===a.state&&(a.state=t));try{a.pathname=decodeURI(a.pathname)}catch(n){throw n instanceof URIError?new URIError('Pathname "'+a.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):n}return e&&(a.key=e),r?a.pathname?"/"!==a.pathname.charAt(0)&&(a.pathname=(0,i.Z)(a.pathname,r.pathname)):a.pathname=r.pathname:a.pathname||(a.pathname="/"),a}function l(n,t){return n.pathname===t.pathname&&n.search===t.search&&n.hash===t.hash&&n.key===t.key&&(0,r.Z)(n.state,t.state)}function v(){var n=null;var t=[];return{setPrompt:function(t){return n=t,function(){n===t&&(n=null)}},confirmTransitionTo:function(t,e,o,i){if(null!=n){var r="function"==typeof n?n(t,e):n;"string"==typeof r?"function"==typeof o?o(r,i):i(!0):i(!1!==r)}else i(!0)},appendListener:function(n){var e=!0;function o(){e&&n.apply(void 0,arguments)}return t.push(o),function(){e=!1,t=t.filter((function(n){return n!==o}))}},notifyListeners:function(){for(var n=arguments.length,e=new Array(n),o=0;o<n;o++)e[o]=arguments[o];t.forEach((function(n){return n.apply(void 0,e)}))}}}var p=!("undefined"==typeof window||!window.document||!window.document.createElement);function w(n,t){t(window.confirm(n))}var m="popstate",g="hashchange";function y(){try{return window.history.state||{}}catch(n){return{}}}function P(n){void 0===n&&(n={}),p||(0,a.Z)(!1);var t,e=window.history,i=(-1===(t=window.navigator.userAgent).indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history,r=!(-1===window.navigator.userAgent.indexOf("Trident")),s=n,l=s.forceRefresh,P=void 0!==l&&l,x=s.getUserConfirmation,O=void 0===x?w:x,k=s.keyLength,b=void 0===k?6:k,T=n.basename?f(c(n.basename)):"";function A(n){var t=n||{},e=t.key,o=t.state,i=window.location,r=i.pathname+i.search+i.hash;return T&&(r=u(r,T)),d(r,o,e)}function L(){return Math.random().toString(36).substr(2,b)}var E=v();function C(n){(0,o.Z)(G,n),G.length=e.length,E.notifyListeners(G.location,G.action)}function S(n){(function(n){return void 0===n.state&&-1===navigator.userAgent.indexOf("CriOS")})(n)||H(A(n.state))}function U(){H(A(y()))}var Z=!1;function H(n){if(Z)Z=!1,C();else{E.confirmTransitionTo(n,"POP",O,(function(t){t?C({action:"POP",location:n}):function(n){var t=G.location,e=R.indexOf(t.key);-1===e&&(e=0);var o=R.indexOf(n.key);-1===o&&(o=0);var i=e-o;i&&(Z=!0,q(i))}(n)}))}}var I=A(y()),R=[I.key];function M(n){return T+h(n)}function q(n){e.go(n)}var F=0;function B(n){1===(F+=n)&&1===n?(window.addEventListener(m,S),r&&window.addEventListener(g,U)):0===F&&(window.removeEventListener(m,S),r&&window.removeEventListener(g,U))}var z=!1;var G={length:e.length,action:"POP",location:I,createHref:M,push:function(n,t){var o="PUSH",r=d(n,t,L(),G.location);E.confirmTransitionTo(r,o,O,(function(n){if(n){var t=M(r),a=r.key,c=r.state;if(i)if(e.pushState({key:a,state:c},null,t),P)window.location.href=t;else{var s=R.indexOf(G.location.key),u=R.slice(0,s+1);u.push(r.key),R=u,C({action:o,location:r})}else window.location.href=t}}))},replace:function(n,t){var o="REPLACE",r=d(n,t,L(),G.location);E.confirmTransitionTo(r,o,O,(function(n){if(n){var t=M(r),a=r.key,c=r.state;if(i)if(e.replaceState({key:a,state:c},null,t),P)window.location.replace(t);else{var s=R.indexOf(G.location.key);-1!==s&&(R[s]=r.key),C({action:o,location:r})}else window.location.replace(t)}}))},go:q,goBack:function(){q(-1)},goForward:function(){q(1)},block:function(n){void 0===n&&(n=!1);var t=E.setPrompt(n);return z||(B(1),z=!0),function(){return z&&(z=!1,B(-1)),t()}},listen:function(n){var t=E.appendListener(n);return B(1),function(){B(-1),t()}}};return G}var x="hashchange",O={hashbang:{encodePath:function(n){return"!"===n.charAt(0)?n:"!/"+s(n)},decodePath:function(n){return"!"===n.charAt(0)?n.substr(1):n}},noslash:{encodePath:s,decodePath:c},slash:{encodePath:c,decodePath:c}};function k(n){var t=n.indexOf("#");return-1===t?n:n.slice(0,t)}function b(){var n=window.location.href,t=n.indexOf("#");return-1===t?"":n.substring(t+1)}function T(n){window.location.replace(k(window.location.href)+"#"+n)}function A(n){void 0===n&&(n={}),p||(0,a.Z)(!1);var t=window.history,e=(window.navigator.userAgent.indexOf("Firefox"),n),i=e.getUserConfirmation,r=void 0===i?w:i,s=e.hashType,l=void 0===s?"slash":s,m=n.basename?f(c(n.basename)):"",g=O[l],y=g.encodePath,P=g.decodePath;function A(){var n=P(b());return m&&(n=u(n,m)),d(n)}var L=v();function E(n){(0,o.Z)(z,n),z.length=t.length,L.notifyListeners(z.location,z.action)}var C=!1,S=null;function U(){var n,t,e=b(),o=y(e);if(e!==o)T(o);else{var i=A(),a=z.location;if(!C&&(t=i,(n=a).pathname===t.pathname&&n.search===t.search&&n.hash===t.hash))return;if(S===h(i))return;S=null,function(n){if(C)C=!1,E();else{var t="POP";L.confirmTransitionTo(n,t,r,(function(e){e?E({action:t,location:n}):function(n){var t=z.location,e=R.lastIndexOf(h(t));-1===e&&(e=0);var o=R.lastIndexOf(h(n));-1===o&&(o=0);var i=e-o;i&&(C=!0,M(i))}(n)}))}}(i)}}var Z=b(),H=y(Z);Z!==H&&T(H);var I=A(),R=[h(I)];function M(n){t.go(n)}var q=0;function F(n){1===(q+=n)&&1===n?window.addEventListener(x,U):0===q&&window.removeEventListener(x,U)}var B=!1;var z={length:t.length,action:"POP",location:I,createHref:function(n){var t=document.querySelector("base"),e="";return t&&t.getAttribute("href")&&(e=k(window.location.href)),e+"#"+y(m+h(n))},push:function(n,t){var e="PUSH",o=d(n,void 0,void 0,z.location);L.confirmTransitionTo(o,e,r,(function(n){if(n){var t=h(o),i=y(m+t);if(b()!==i){S=t,function(n){window.location.hash=n}(i);var r=R.lastIndexOf(h(z.location)),a=R.slice(0,r+1);a.push(t),R=a,E({action:e,location:o})}else E()}}))},replace:function(n,t){var e="REPLACE",o=d(n,void 0,void 0,z.location);L.confirmTransitionTo(o,e,r,(function(n){if(n){var t=h(o),i=y(m+t);b()!==i&&(S=t,T(i));var r=R.indexOf(h(z.location));-1!==r&&(R[r]=t),E({action:e,location:o})}}))},go:M,goBack:function(){M(-1)},goForward:function(){M(1)},block:function(n){void 0===n&&(n=!1);var t=L.setPrompt(n);return B||(F(1),B=!0),function(){return B&&(B=!1,F(-1)),t()}},listen:function(n){var t=L.appendListener(n);return F(1),function(){F(-1),t()}}};return z}function L(n,t,e){return Math.min(Math.max(n,t),e)}function E(n){void 0===n&&(n={});var t=n,e=t.getUserConfirmation,i=t.initialEntries,r=void 0===i?["/"]:i,a=t.initialIndex,c=void 0===a?0:a,s=t.keyLength,u=void 0===s?6:s,f=v();function l(n){(0,o.Z)(P,n),P.length=P.entries.length,f.notifyListeners(P.location,P.action)}function p(){return Math.random().toString(36).substr(2,u)}var w=L(c,0,r.length-1),m=r.map((function(n){return d(n,void 0,"string"==typeof n?p():n.key||p())})),g=h;function y(n){var t=L(P.index+n,0,P.entries.length-1),o=P.entries[t];f.confirmTransitionTo(o,"POP",e,(function(n){n?l({action:"POP",location:o,index:t}):l()}))}var P={length:m.length,action:"POP",location:m[w],index:w,entries:m,createHref:g,push:function(n,t){var o="PUSH",i=d(n,t,p(),P.location);f.confirmTransitionTo(i,o,e,(function(n){if(n){var t=P.index+1,e=P.entries.slice(0);e.length>t?e.splice(t,e.length-t,i):e.push(i),l({action:o,location:i,index:t,entries:e})}}))},replace:function(n,t){var o="REPLACE",i=d(n,t,p(),P.location);f.confirmTransitionTo(i,o,e,(function(n){n&&(P.entries[P.index]=i,l({action:o,location:i}))}))},go:y,goBack:function(){y(-1)},goForward:function(){y(1)},canGo:function(n){var t=P.index+n;return t>=0&&t<P.entries.length},block:function(n){return void 0===n&&(n=!1),f.setPrompt(n)},listen:function(n){return f.appendListener(n)}};return P}}}]);