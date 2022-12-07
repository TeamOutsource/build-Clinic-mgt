import{Q as w}from"./QPage.4741071f.js";import{T as k}from"./TitlePage.e5a5e281.js";import{d as p,f as g,h as m,u as h,g as f,j as C,_ as v,o as _,as as q,a,w as r,E as s,F as n,Q as x,c as N,r as b,D as Q}from"./index.b5e91dde.js";import{Q as T}from"./option-sizes.e5146638.js";import{Q as P}from"./QInput.d458a39a.js";import{Q as S}from"./QTable.c7794d33.js";import"./use-key-composition.5c817718.js";import"./uid.42677368.js";import"./format.02518bd1.js";import"./use-timeout.db7ec3a8.js";import"./scroll.a9234d16.js";import"./rtl.b51694b1.js";const B=["top","middle","bottom"];var I=p({name:"QBadge",props:{color:String,textColor:String,floating:Boolean,transparent:Boolean,multiLine:Boolean,outline:Boolean,rounded:Boolean,label:[Number,String],align:{type:String,validator:e=>B.includes(e)}},setup(e,{slots:o}){const u=g(()=>e.align!==void 0?{verticalAlign:e.align}:null),d=g(()=>{const l=e.outline===!0&&e.color||e.textColor;return`q-badge flex inline items-center no-wrap q-badge--${e.multiLine===!0?"multi":"single"}-line`+(e.outline===!0?" q-badge--outline":e.color!==void 0?` bg-${e.color}`:"")+(l!==void 0?` text-${l}`:"")+(e.floating===!0?" q-badge--floating":"")+(e.rounded===!0?" q-badge--rounded":"")+(e.transparent===!0?" q-badge--transparent":"")});return()=>m("div",{class:d.value,style:u.value,role:"status","aria-label":e.label},h(o.default,e.label!==void 0?[e.label]:[]))}});const V=m("div",{class:"q-space"});var D=p({name:"QSpace",setup(){return()=>V}}),i=p({name:"QTd",props:{props:Object,autoWidth:Boolean,noHover:Boolean},setup(e,{slots:o}){const u=C(),d=g(()=>"q-td"+(e.autoWidth===!0?" q-table--col-auto-width":"")+(e.noHover===!0?" q-td--no-hover":"")+" ");return()=>{if(e.props===void 0)return m("td",{class:d.value},f(o.default));const l=u.vnode.key,c=(e.props.colsMap!==void 0?e.props.colsMap[l]:null)||e.props.col;if(c===void 0)return;const{row:t}=e.props;return m("td",{class:d.value+c.__tdClass(t),style:c.__tdStyle(t)},f(o.default))}}}),O=p({name:"QTr",props:{props:Object,noHover:Boolean},setup(e,{slots:o}){const u=g(()=>"q-tr"+(e.props===void 0||e.props.header===!0?"":" "+e.props.__trClass)+(e.noHover===!0?" q-tr--no-hover":""));return()=>m("tr",{class:u.value},f(o.default))}});const E={data(){return{category:null,optionsCategory:[{label:"\u0E1C\u0E25\u0E34\u0E15\u0E20\u0E31\u0E13\u0E11\u0E4C",categoryId:1},{label:"\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23",categoryId:2},{label:"\u0E04\u0E2D\u0E23\u0E4C\u0E2A",categoryId:3}],filter:"",rowCount:10,columns:[{name:"produuctCode",label:"\u0E23\u0E2B\u0E31\u0E2A\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32",required:!0,align:"center",field:e=>e.name,format:e=>`${e}`,sortable:!0},{name:"produuctName",align:"center",label:"\u0E0A\u0E37\u0E48\u0E2D\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32",field:"produuctName",sortable:!0},{name:"cost",align:"center",label:"\u0E15\u0E49\u0E19\u0E17\u0E38\u0E19\u0E15\u0E48\u0E2D\u0E2B\u0E19\u0E48\u0E27\u0E22 (\u0E1A\u0E32\u0E17)",field:"cost",sortable:!0},{name:"promotion",align:"center",label:"\u0E42\u0E1B\u0E23\u0E42\u0E21\u0E0A\u0E31\u0E48\u0E19",field:"promotion"},{name:"resultPay",align:"center",label:"\u0E23\u0E32\u0E04\u0E32\u0E2B\u0E19\u0E49\u0E32\u0E23\u0E49\u0E32\u0E19",field:"resultPay"},{name:"sales",align:"center",label:"\u0E22\u0E2D\u0E14\u0E02\u0E32\u0E22",field:"sales",sortable:!0,sort:(e,o)=>parseInt(e,10)-parseInt(o,10)},{name:"categoryName",align:"center",label:"\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32",field:"categoryName"},{name:"remark",align:"center",label:"\u0E2B\u0E21\u0E32\u0E22\u0E40\u0E2B\u0E15\u0E38",field:"remark"}],data:[{id:1,produuctCode:"10554622",produuctName:"\u0E04\u0E23\u0E35\u0E21\u0E19\u0E27\u0E14",cost:18,promotion:24,resultPay:50,sales:87,categoryName:"\u0E1C\u0E25\u0E34\u0E15\u0E20\u0E31\u0E13\u0E11\u0E4C",remark:"14%",salesUnit:"\u0E0A\u0E34\u0E49\u0E19",categoryId:1},{id:2,produuctCode:"10554622",produuctName:"\u0E04\u0E23\u0E35\u0E21\u0E19\u0E27\u0E14",cost:18,promotion:24,resultPay:50,sales:87,categoryName:"\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23",remark:"14%",salesUnit:"\u0E0A\u0E34\u0E49\u0E19",categoryId:2}],newData:[]}},mounted(){this.newData=this.data},methods:{FilterProductType(e){e!=null?this.newData=this.data.filter(o=>o.categoryId==e.categoryId):this.newData=this.data},submit(e){this.$emit("someEvent",JSON.parse(JSON.stringify(e.row)))}}};function U(e,o,u,d,l,c){return _(),q("div",null,[a(I,{color:"secondary","multi-line":""},{default:r(()=>[s(' categoryh: "'+n(l.category)+'" ',1)]),_:1}),a(S,{title:"Treats","row-key":"produuctCode",rows:l.newData,columns:l.columns,filter:l.filter,grid:e.$q.screen.xs||e.$q.screen.sm,separator:"vertical"},{top:r(()=>[a(T,{class:"q-pa-xs",filled:"",modelValue:l.category,"onUpdate:modelValue":o[0]||(o[0]=t=>l.category=t),options:l.optionsCategory,label:"\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32",style:{width:"250px"},dense:"",clearable:"",select:c.FilterProductType(l.category)},null,8,["modelValue","options","select"]),a(D),a(P,{class:"q-pa-xs",filled:"",debounce:"300",color:"primary",modelValue:l.filter,"onUpdate:modelValue":o[1]||(o[1]=t=>l.filter=t),style:{width:"250px"},dense:""},{append:r(()=>[a(x,{name:"search"})]),_:1},8,["modelValue"])]),body:r(t=>[a(O,{props:t,onClick:y=>c.submit(t)},{default:r(()=>[a(i,{key:"produuctCode",props:t},{default:r(()=>[s(n(t.row.produuctCode),1)]),_:2},1032,["props"]),a(i,{key:"produuctName",props:t,class:"text-left"},{default:r(()=>[s(n(t.row.produuctName),1)]),_:2},1032,["props"]),a(i,{key:"cost",props:t},{default:r(()=>[s(n(t.row.cost),1)]),_:2},1032,["props"]),a(i,{key:"promotion",props:t},{default:r(()=>[s(n(t.row.promotion),1)]),_:2},1032,["props"]),a(i,{key:"resultPay",props:t},{default:r(()=>[s(n(t.row.resultPay),1)]),_:2},1032,["props"]),a(i,{key:"sales",props:t},{default:r(()=>[s(n(t.row.sales)+" "+n(t.row.salesUnit),1)]),_:2},1032,["props"]),a(i,{key:"categoryName",props:t,class:"text-left"},{default:r(()=>[s(n(t.row.categoryName),1)]),_:2},1032,["props"]),a(i,{key:"remark",props:t,class:"text-left"},{default:r(()=>[s(n(t.row.remark),1)]),_:2},1032,["props"])]),_:2},1032,["props","onClick"])]),_:1},8,["rows","columns","filter","grid"])])}var $=v(E,[["render",U]]);const H={components:{TitlePage:k,ProductTable:$},data(){return{}},methods:{OnCallback(e){console.log("val",e)}}},j={class:"q-px-md"};function F(e,o,u,d,l,c){const t=b("TitlePage"),y=b("ProductTable");return _(),N(w,{class:"q-pa-md"},{default:r(()=>[a(t,{TitleName:"\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32"}),Q("div",j,[a(y,{onSomeEvent:c.OnCallback},null,8,["onSomeEvent"])])]),_:1})}var ee=v(H,[["render",F]]);export{ee as default};
