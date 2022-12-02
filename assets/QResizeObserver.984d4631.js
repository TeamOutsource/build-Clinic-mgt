import{d as y,s as p,v,x as g,y as S,j as w,z as b,m as E,n as R,A as z,h as L}from"./index.e23eef1a.js";import{a as P,b as C,c as Q}from"./scroll.f607cbf9.js";const{passive:T}=b,j=["both","horizontal","vertical"];var V=y({name:"QScrollObserver",props:{axis:{type:String,validator:n=>j.includes(n),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(n,{emit:m}){const t={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let e=null,r,c;p(()=>n.scrollTarget,()=>{o(),d()});function l(){e!==null&&e();const u=Math.max(0,C(r)),f=Q(r),s={top:u-t.position.top,left:f-t.position.left};if(n.axis==="vertical"&&s.top===0||n.axis==="horizontal"&&s.left===0)return;const h=Math.abs(s.top)>=Math.abs(s.left)?s.top<0?"up":"down":s.left<0?"left":"right";t.position={top:u,left:f},t.directionChanged=t.direction!==h,t.delta=s,t.directionChanged===!0&&(t.direction=h,t.inflectionPoint=t.position),m("scroll",{...t})}function d(){r=P(c,n.scrollTarget),r.addEventListener("scroll",i,T),i(!0)}function o(){r!==void 0&&(r.removeEventListener("scroll",i,T),r=void 0)}function i(u){if(u===!0||n.debounce===0||n.debounce==="0")l();else if(e===null){const[f,s]=n.debounce?[setTimeout(l,n.debounce),clearTimeout]:[requestAnimationFrame(l),cancelAnimationFrame];e=()=>{s(f),e=null}}}const{proxy:a}=w();return p(()=>a.$q.lang.rtl,l),v(()=>{c=a.$el.parentNode,d()}),g(()=>{e!==null&&e(),o()}),Object.assign(a,{trigger:i,getPosition:()=>t}),S}});function D(){const n=E(!R.value);return n.value===!1&&v(()=>{n.value=!0}),n}const O=typeof ResizeObserver!="undefined",x=O===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var $=y({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(n,{emit:m}){let t=null,e,r={width:-1,height:-1};function c(o){o===!0||n.debounce===0||n.debounce==="0"?l():t===null&&(t=setTimeout(l,n.debounce))}function l(){if(clearTimeout(t),t=null,e){const{offsetWidth:o,offsetHeight:i}=e;(o!==r.width||i!==r.height)&&(r={width:o,height:i},m("resize",r))}}const{proxy:d}=w();if(O===!0){let o;const i=a=>{e=d.$el.parentNode,e?(o=new ResizeObserver(c),o.observe(e),l()):a!==!0&&z(()=>{i(!0)})};return v(()=>{i()}),g(()=>{clearTimeout(t),o!==void 0&&(o.disconnect!==void 0?o.disconnect():e&&o.unobserve(e))}),S}else{let a=function(){clearTimeout(t),i!==void 0&&(i.removeEventListener!==void 0&&i.removeEventListener("resize",c,b.passive),i=void 0)},u=function(){a(),e&&e.contentDocument&&(i=e.contentDocument.defaultView,i.addEventListener("resize",c,b.passive),l())};const o=D();let i;return v(()=>{z(()=>{e=d.$el,e&&u()})}),g(a),d.trigger=c,()=>{if(o.value===!0)return L("object",{style:x.style,tabindex:-1,type:"text/html",data:x.url,"aria-hidden":"true",onLoad:u})}}}});export{V as Q,$ as a};
