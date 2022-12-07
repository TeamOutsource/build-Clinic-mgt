import{d as j,f as c,h as b,g as te,e as H,m as w,x as ae,v as Ve,i as ge,W as De,X as Ee,Y as Te,N as he,Z as Fe,H as ze,Q as G,u as He,j as ne,$ as We,a0 as Oe,a1 as je,s as k,y as be,O as Ke,P as Ne,p as Ue,a2 as Xe,l as Ge}from"./index.b5e91dde.js";import{u as Ye}from"./uid.42677368.js";import{a as ye}from"./QResizeObserver.8e63c29b.js";import{u as ee,a as me}from"./use-timeout.db7ec3a8.js";import{r as Ze}from"./rtl.b51694b1.js";var st=j({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:q}){const m=c(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>b("div",{class:m.value},te(q.default))}}),ct=j({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:q}){const m=c(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>b("div",{class:m.value,role:"toolbar"},te(q.default))}});let Je=0;const pe=["click","keydown"],et={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${Je++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function tt(e,q,m,s){const n=ge(Te,H);if(n===H)return console.error("QTab/QRouteTab component needs to be child of QTabs"),H;const{proxy:L}=ne(),C=w(null),I=w(null),V=w(null),F=c(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),A=c(()=>n.currentModel.value===e.name),W=c(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(A.value===!0?" q-tab--active"+(n.tabProps.value.activeClass?" "+n.tabProps.value.activeClass:"")+(n.tabProps.value.activeColor?` text-${n.tabProps.value.activeColor}`:"")+(n.tabProps.value.activeBgColor?` bg-${n.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&n.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||n.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(s!==void 0?s.linkClass.value:"")),P=c(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(n.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),v=c(()=>e.disable===!0||n.hasFocus.value===!0||A.value===!1&&n.hasActiveTab.value===!0?-1:e.tabindex||0);function g(r,h){if(h!==!0&&C.value!==null&&C.value.focus(),e.disable===!0){s!==void 0&&s.hasRouterLink.value===!0&&he(r);return}if(s===void 0){n.updateModel({name:e.name}),m("click",r);return}if(s.hasRouterLink.value===!0){const _=(R={})=>{let M;const K=R.to===void 0||We(R.to,e.to)===!0?n.avoidRouteWatcher=Ye():null;return s.navigateToRouterLink(r,{...R,returnRouterError:!0}).catch(y=>{M=y}).then(y=>{if(K===n.avoidRouteWatcher&&(n.avoidRouteWatcher=!1,M===void 0&&(y===void 0||y.message.startsWith("Avoided redundant navigation")===!0)&&n.updateModel({name:e.name})),R.returnRouterError===!0)return M!==void 0?Promise.reject(M):y})};m("click",r,_),r.defaultPrevented!==!0&&_();return}m("click",r)}function S(r){Fe(r,[13,32])?g(r,!0):ze(r)!==!0&&r.keyCode>=35&&r.keyCode<=40&&r.altKey!==!0&&r.metaKey!==!0&&n.onKbdNavigate(r.keyCode,L.$el)===!0&&he(r),m("keydown",r)}function D(){const r=n.tabProps.value.narrowIndicator,h=[],_=b("div",{ref:V,class:["q-tab__indicator",n.tabProps.value.indicatorClass]});e.icon!==void 0&&h.push(b(G,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&h.push(b("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&h.push(e.alertIcon!==void 0?b(G,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):b("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),r===!0&&h.push(_);const R=[b("div",{class:"q-focus-helper",tabindex:-1,ref:C}),b("div",{class:P.value},He(q.default,h))];return r===!1&&R.push(_),R}const x={name:c(()=>e.name),rootRef:I,tabIndicatorRef:V,routeData:s};ae(()=>{n.unregisterTab(x)}),Ve(()=>{n.registerTab(x)});function o(r,h){const _={ref:I,class:W.value,tabindex:v.value,role:"tab","aria-selected":A.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:g,onKeydown:S,...h};return De(b(r,_,D()),[[Ee,F.value]])}return{renderTab:o,$tabs:n}}var vt=j({name:"QRouteTab",props:{...Oe,...et},emits:pe,setup(e,{slots:q,emit:m}){const s=je({useDisableForRouterLinkProps:!1}),{renderTab:n,$tabs:L}=tt(e,q,m,{exact:c(()=>e.exact),...s});return k(()=>`${e.name} | ${e.exact} | ${(s.resolvedLink.value||{}).href}`,()=>{L.verifyRouteModel()}),()=>n(s.linkTag.value,s.linkAttrs.value)}});function at(e,q,m){const s=m===!0?["left","right"]:["top","bottom"];return`absolute-${q===!0?s[0]:s[1]}${e?` text-${e}`:""}`}const nt=["left","center","right","justify"];var dt=j({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>nt.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:q,emit:m}){const{proxy:s}=ne(),{$q:n}=s,{registerTick:L}=ee(),{registerTick:C}=ee(),{registerTick:I}=ee(),{registerTimeout:V,removeTimeout:F}=me(),{registerTimeout:A,removeTimeout:W}=me(),P=w(null),v=w(null),g=w(e.modelValue),S=w(!1),D=w(!0),x=w(!1),o=w(!1),r=c(()=>n.platform.is.desktop===!0||e.mobileArrows===!0),h=[],_=w(0),R=w(!1);let M,K,y,E=r.value===!0?le:be;const we=c(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:at(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),qe=c(()=>{const t=_.value,a=g.value;for(let l=0;l<t;l++)if(h[l].name.value===a)return!0;return!1}),Ce=c(()=>`q-tabs__content--align-${S.value===!0?"left":o.value===!0?"justify":e.align}`),Re=c(()=>`q-tabs row no-wrap items-center q-tabs--${S.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${r.value===!0&&e.outsideArrows===!0?"outside":"inside"}`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),_e=c(()=>"q-tabs__content row no-wrap items-center self-stretch hide-scrollbar relative-position "+Ce.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")+(n.platform.is.mobile===!0?" scroll":"")),N=c(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),U=c(()=>e.vertical!==!0&&n.lang.rtl===!0),Y=c(()=>Ze===!1&&U.value===!0);k(U,E),k(()=>e.modelValue,t=>{Z({name:t,setCurrent:!0,skipEmit:!0})}),k(()=>e.outsideArrows,()=>{O()}),k(r,t=>{E=t===!0?le:be,O()});function Z({name:t,setCurrent:a,skipEmit:l,fromRoute:d}){g.value!==t&&(l!==!0&&e["onUpdate:modelValue"]!==void 0&&m("update:modelValue",t),(a===!0||e["onUpdate:modelValue"]===void 0)&&(ke(g.value,t),g.value=t))}function O(){L(()=>{oe({width:P.value.offsetWidth,height:P.value.offsetHeight})})}function oe(t){if(N.value===void 0||v.value===null)return;const a=t[N.value.container],l=Math.min(v.value[N.value.scroll],Array.prototype.reduce.call(v.value.children,(f,u)=>f+(u[N.value.content]||0),0)),d=a>0&&l>a;S.value=d,d===!0&&C(E),o.value=a<parseInt(e.breakpoint,10)}function ke(t,a){const l=t!=null&&t!==""?h.find(f=>f.name.value===t):null,d=a!=null&&a!==""?h.find(f=>f.name.value===a):null;if(l&&d){const f=l.tabIndicatorRef.value,u=d.tabIndicatorRef.value;clearTimeout(M),f.style.transition="none",f.style.transform="none",u.style.transition="none",u.style.transform="none";const i=f.getBoundingClientRect(),T=u.getBoundingClientRect();u.style.transform=e.vertical===!0?`translate3d(0,${i.top-T.top}px,0) scale3d(1,${T.height?i.height/T.height:1},1)`:`translate3d(${i.left-T.left}px,0,0) scale3d(${T.width?i.width/T.width:1},1,1)`,I(()=>{M=setTimeout(()=>{u.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",u.style.transform="none"},70)})}d&&S.value===!0&&z(d.rootRef.value)}function z(t){const{left:a,width:l,top:d,height:f}=v.value.getBoundingClientRect(),u=t.getBoundingClientRect();let i=e.vertical===!0?u.top-d:u.left-a;if(i<0){v.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(i),E();return}i+=e.vertical===!0?u.height-f:u.width-l,i>0&&(v.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(i),E())}function le(){const t=v.value;if(t!==null){const a=t.getBoundingClientRect(),l=e.vertical===!0?t.scrollTop:Math.abs(t.scrollLeft);U.value===!0?(D.value=Math.ceil(l+a.width)<t.scrollWidth-1,x.value=l>0):(D.value=l>0,x.value=e.vertical===!0?Math.ceil(l+a.height)<t.scrollHeight:Math.ceil(l+a.width)<t.scrollWidth)}}function re(t){$(),K=setInterval(()=>{Pe(t)===!0&&$()},5)}function ie(){re(Y.value===!0?Number.MAX_SAFE_INTEGER:0)}function ue(){re(Y.value===!0?0:Number.MAX_SAFE_INTEGER)}function $(){clearInterval(K)}function Le(t,a){const l=Array.prototype.filter.call(v.value.children,T=>T===a||T.matches&&T.matches(".q-tab.q-focusable")===!0),d=l.length;if(d===0)return;if(t===36)return z(l[0]),l[0].focus(),!0;if(t===35)return z(l[d-1]),l[d-1].focus(),!0;const f=t===(e.vertical===!0?38:37),u=t===(e.vertical===!0?40:39),i=f===!0?-1:u===!0?1:void 0;if(i!==void 0){const T=U.value===!0?-1:1,B=l.indexOf(a)+i*T;return B>=0&&B<d&&(z(l[B]),l[B].focus({preventScroll:!0})),!0}}const Se=c(()=>Y.value===!0?{get:t=>Math.abs(t.scrollLeft),set:(t,a)=>{t.scrollLeft=-a}}:e.vertical===!0?{get:t=>t.scrollTop,set:(t,a)=>{t.scrollTop=a}}:{get:t=>t.scrollLeft,set:(t,a)=>{t.scrollLeft=a}});function Pe(t){const a=v.value,{get:l,set:d}=Se.value;let f=!1,u=l(a);const i=t<u?-1:1;return u+=i*5,u<0?(f=!0,u=0):(i===-1&&u<=t||i===1&&u>=t)&&(f=!0,u=t),d(a,u),E(),f}function se(t,a){for(const l in t)if(t[l]!==a[l])return!1;return!0}function xe(){let t=null,a={matchedLen:0,queryDiff:9999,hrefLen:0};const l=h.filter(i=>i.routeData!==void 0&&i.routeData.hasRouterLink.value===!0),{hash:d,query:f}=s.$route,u=Object.keys(f).length;for(const i of l){const T=i.routeData.exact.value===!0;if(i.routeData[T===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:B,query:J,matched:Me,href:Qe}=i.routeData.resolvedLink.value,p=Object.keys(J).length;if(T===!0){if(B!==d||p!==u||se(f,J)===!1)continue;t=i.name.value;break}if(B!==""&&B!==d||p!==0&&se(J,f)===!1)continue;const Q={matchedLen:Me.length,queryDiff:u-p,hrefLen:Qe.length-B.length};if(Q.matchedLen>a.matchedLen){t=i.name.value,a=Q;continue}else if(Q.matchedLen!==a.matchedLen)continue;if(Q.queryDiff<a.queryDiff)t=i.name.value,a=Q;else if(Q.queryDiff!==a.queryDiff)continue;Q.hrefLen>a.hrefLen&&(t=i.name.value,a=Q)}t===null&&h.some(i=>i.routeData===void 0&&i.name.value===g.value)===!0||Z({name:t,setCurrent:!0})}function $e(t){if(F(),R.value!==!0&&P.value!==null&&t.target&&typeof t.target.closest=="function"){const a=t.target.closest(".q-tab");a&&P.value.contains(a)===!0&&(R.value=!0,S.value===!0&&z(a))}}function Be(){V(()=>{R.value=!1},30)}function X(){ve.avoidRouteWatcher===!1?A(xe):W()}function ce(){if(y===void 0){const t=k(()=>s.$route.fullPath,X);y=()=>{t(),y=void 0}}}function Ie(t){h.push(t),_.value++,O(),t.routeData===void 0||s.$route===void 0?A(()=>{if(S.value===!0){const a=g.value,l=a!=null&&a!==""?h.find(d=>d.name.value===a):null;l&&z(l.rootRef.value)}}):(ce(),t.routeData.hasRouterLink.value===!0&&X())}function Ae(t){h.splice(h.indexOf(t),1),_.value--,O(),y!==void 0&&t.routeData!==void 0&&(h.every(a=>a.routeData===void 0)===!0&&y(),X())}const ve={currentModel:g,tabProps:we,hasFocus:R,hasActiveTab:qe,registerTab:Ie,unregisterTab:Ae,verifyRouteModel:X,updateModel:Z,onKbdNavigate:Le,avoidRouteWatcher:!1};Ue(Te,ve);function de(){clearTimeout(M),$(),y!==void 0&&y()}let fe;return ae(de),Ke(()=>{fe=y!==void 0,de()}),Ne(()=>{fe===!0&&ce(),O()}),()=>{const t=[b(ye,{onResize:oe}),b("div",{ref:v,class:_e.value,onScroll:E},te(q.default))];return r.value===!0&&t.push(b(G,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(D.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||n.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:ie,onTouchstartPassive:ie,onMouseupPassive:$,onMouseleavePassive:$,onTouchendPassive:$}),b(G,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(x.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||n.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:ue,onTouchstartPassive:ue,onMouseupPassive:$,onMouseleavePassive:$,onTouchendPassive:$})),b("div",{ref:P,class:Re.value,role:"tablist",onFocusin:$e,onFocusout:Be},t)}}}),ft=j({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:q,emit:m}){const{proxy:{$q:s}}=ne(),n=ge(Ge,H);if(n===H)return console.error("QHeader needs to be child of QLayout"),H;const L=w(parseInt(e.heightHint,10)),C=w(!0),I=c(()=>e.reveal===!0||n.view.value.indexOf("H")>-1||s.platform.is.ios&&n.isContainer.value===!0),V=c(()=>{if(e.modelValue!==!0)return 0;if(I.value===!0)return C.value===!0?L.value:0;const o=L.value-n.scroll.value.position;return o>0?o:0}),F=c(()=>e.modelValue!==!0||I.value===!0&&C.value!==!0),A=c(()=>e.modelValue===!0&&F.value===!0&&e.reveal===!0),W=c(()=>"q-header q-layout__section--marginal "+(I.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(F.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),P=c(()=>{const o=n.rows.value.top,r={};return o[0]==="l"&&n.left.space===!0&&(r[s.lang.rtl===!0?"right":"left"]=`${n.left.size}px`),o[2]==="r"&&n.right.space===!0&&(r[s.lang.rtl===!0?"left":"right"]=`${n.right.size}px`),r});function v(o,r){n.update("header",o,r)}function g(o,r){o.value!==r&&(o.value=r)}function S({height:o}){g(L,o),v("size",o)}function D(o){A.value===!0&&g(C,!0),m("focusin",o)}k(()=>e.modelValue,o=>{v("space",o),g(C,!0),n.animate()}),k(V,o=>{v("offset",o)}),k(()=>e.reveal,o=>{o===!1&&g(C,e.modelValue)}),k(C,o=>{n.animate(),m("reveal",o)}),k(n.scroll,o=>{e.reveal===!0&&g(C,o.direction==="up"||o.position<=e.revealOffset||o.position-o.inflectionPoint<100)});const x={};return n.instances.header=x,e.modelValue===!0&&v("size",L.value),v("space",e.modelValue),v("offset",V.value),ae(()=>{n.instances.header===x&&(n.instances.header=void 0,v("size",0),v("offset",0),v("space",!1))}),()=>{const o=Xe(q.default,[]);return e.elevated===!0&&o.push(b("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),o.push(b(ye,{debounce:0,onResize:S})),b("header",{class:W.value,style:P.value,onFocusin:D},o)}}});export{ct as Q,st as a,dt as b,vt as c,ft as d};
