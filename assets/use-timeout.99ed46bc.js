import{O as n,x as r,A as c,a3 as s,j as u}from"./index.5f796ffe.js";function T(){let e;const o=u();function t(){e=void 0}return n(t),r(t),{removeTick:t,registerTick(i){e=i,c(()=>{e===i&&(s(o)===!1&&e(),e=void 0)})}}}function f(){let e;const o=u();function t(){clearTimeout(e)}return n(t),r(t),{removeTimeout:t,registerTimeout(i,a){clearTimeout(e),s(o)===!1&&(e=setTimeout(i,a))}}}export{f as a,T as u};
