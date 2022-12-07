import{d as L,e as w,f as a,h as r,g as E,i as K,p as R,j as q,l as P,k as O,m as u,n as k,q as g,s as I,t as M,u as U}from"./index.5f796ffe.js";import{Q as _,a as x}from"./QResizeObserver.ed6f5752.js";import{g as z}from"./scroll.d0654a37.js";var J=L({name:"QPageContainer",setup(t,{slots:m}){const{proxy:{$q:c}}=q(),o=K(P,w);if(o===w)return console.error("QPageContainer needs to be child of QLayout"),w;R(O,!0);const d=a(()=>{const i={};return o.header.space===!0&&(i.paddingTop=`${o.header.size}px`),o.right.space===!0&&(i[`padding${c.lang.rtl===!0?"Left":"Right"}`]=`${o.right.size}px`),o.footer.space===!0&&(i.paddingBottom=`${o.footer.size}px`),o.left.space===!0&&(i[`padding${c.lang.rtl===!0?"Right":"Left"}`]=`${o.left.size}px`),i});return()=>r("div",{class:"q-page-container",style:d.value},E(m.default))}}),N=L({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:t=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(t.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(t,{slots:m,emit:c}){const{proxy:{$q:o}}=q(),d=u(null),i=u(o.screen.height),y=u(t.container===!0?0:o.screen.width),S=u({position:0,direction:"down",inflectionPoint:0}),v=u(0),l=u(k.value===!0?0:z()),Q=a(()=>"q-layout q-layout--"+(t.container===!0?"containerized":"standard")),H=a(()=>t.container===!1?{minHeight:o.screen.height+"px"}:null),T=a(()=>l.value!==0?{[o.lang.rtl===!0?"left":"right"]:`${l.value}px`}:null),W=a(()=>l.value!==0?{[o.lang.rtl===!0?"right":"left"]:0,[o.lang.rtl===!0?"left":"right"]:`-${l.value}px`,width:`calc(100% + ${l.value}px)`}:null);function F(e){if(t.container===!0||document.qScrollPrevented!==!0){const n={position:e.position.top,direction:e.direction,directionChanged:e.directionChanged,inflectionPoint:e.inflectionPoint.top,delta:e.delta.top};S.value=n,t.onScroll!==void 0&&c("scroll",n)}}function j(e){const{height:n,width:s}=e;let f=!1;i.value!==n&&(f=!0,i.value=n,t.onScrollHeight!==void 0&&c("scrollHeight",n),b()),y.value!==s&&(f=!0,y.value=s),f===!0&&t.onResize!==void 0&&c("resize",e)}function B({height:e}){v.value!==e&&(v.value=e,b())}function b(){if(t.container===!0){const e=i.value>v.value?z():0;l.value!==e&&(l.value=e)}}let h;const $={instances:{},view:a(()=>t.view),isContainer:a(()=>t.container),rootRef:d,height:i,containerHeight:v,scrollbarWidth:l,totalWidth:a(()=>y.value+l.value),rows:a(()=>{const e=t.view.toLowerCase().split(" ");return{top:e[0].split(""),middle:e[1].split(""),bottom:e[2].split("")}}),header:g({size:0,offset:0,space:!1}),right:g({size:300,offset:0,space:!1}),footer:g({size:0,offset:0,space:!1}),left:g({size:300,offset:0,space:!1}),scroll:S,animate(){h!==void 0?clearTimeout(h):document.body.classList.add("q-body--layout-animate"),h=setTimeout(()=>{document.body.classList.remove("q-body--layout-animate"),h=void 0},155)},update(e,n,s){$[e][n]=s}};if(R(P,$),z()>0){let s=function(){e=null,n.classList.remove("hide-scrollbar")},f=function(){if(e===null){if(n.scrollHeight>o.screen.height)return;n.classList.add("hide-scrollbar")}else clearTimeout(e);e=setTimeout(s,300)},p=function(C){e!==null&&C==="remove"&&(clearTimeout(e),s()),window[`${C}EventListener`]("resize",f)},e=null;const n=document.body;I(()=>t.container!==!0?"add":"remove",p),t.container!==!0&&p("add"),M(()=>{p("remove")})}return()=>{const e=U(m.default,[r(_,{onScroll:F}),r(x,{onResize:j})]),n=r("div",{class:Q.value,style:H.value,ref:t.container===!0?void 0:d,tabindex:-1},e);return t.container===!0?r("div",{class:"q-layout-container overflow-hidden",ref:d},[r(x,{onResize:B}),r("div",{class:"absolute-full",style:T.value},[r("div",{class:"scroll",style:W.value},[n])])]):n}}});export{N as Q,J as a};
