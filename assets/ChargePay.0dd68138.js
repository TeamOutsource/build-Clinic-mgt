import{_ as x,o as d,c as g,w as y,r as C,a as n,D as e,Q as N,as as w,at as m,av as _,aw as P,F as c,G as p,E as R}from"./index.92e3674a.js";import{Q as v}from"./QInput.f763dec1.js";import{Q as V}from"./QPage.a9571113.js";import{T as k}from"./TitlePage.f9577bd3.js";import"./use-key-composition.af6d4ef0.js";import"./uid.42677368.js";const T={components:{TitlePage:k},data(){return{search:"",productList:[{productCode:"1",count:1,productName:"\u0E04\u0E23\u0E35\u0E21\u0E19\u0E27\u0E14",costPay:100,unitPay:200,promotionPay:150,resultPay:0,discount:0,tempResultPay:0},{productCode:"2",count:1,productName:"\u0E04\u0E23\u0E35\u0E21\u0E19\u0E27\u0E14",costPay:50,unitPay:null,promotionPay:0,resultPay:null,discount:0,tempResultPay:0},{productCode:"3",count:10,productName:"\u0E04\u0E23\u0E35\u0E21\u0E19\u0E27\u0E14",costPay:50,unitPay:null,promotionPay:0,resultPay:null,discount:0,tempResultPay:0},{productCode:"4",count:2,productName:"\u0E04\u0E23\u0E35\u0E21\u0E19\u0E27\u0E14",costPay:50,unitPay:null,promotionPay:0,resultPay:null,discount:0,tempResultPay:0}]}},methods:{GetProductsNumber(){let t=0;return this.productList.forEach(o=>{t+=o.count}),t},GetTotalPayout(){let t=0;return this.productList.forEach(o=>{t+=o.count}),t},onEnter(t){console.log("onEnter: ",t)},GetPay(t){return t.promotionPay==0?t.costPay:t.promotionPay},getResultPay(t,o){var l=this.GetPay(t),u=t.count*l;return t.resultPay=u-o,t.tempResultPay=u,t},myRule(t,o){return new Promise((l,u)=>{var a=o.tempResultPay-t;t<0?(l("* \u0E2A\u0E48\u0E27\u0E19\u0E25\u0E14\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07"),setTimeout(()=>{o.discount=0},1e3)):a<o.costPay*o.count?(l("* \u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E25\u0E14\u0E44\u0E14\u0E49 \u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07\u0E08\u0E32\u0E01\u0E02\u0E32\u0E14\u0E17\u0E38\u0E19"),setTimeout(()=>{o.discount=0},1e3)):l()})}}},b={class:"q-px-md"},q={class:"row q-gutter-md"},E={class:"col"},G={class:"col overflow-auto sty-list-product q-my-md"},Q=e("div",null,"\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32",-1),B=e("li",{style:{"list-style-type":"none"}},[e("div",{class:"row"},[e("div",{class:"col text-center"},"\u0E0A\u0E37\u0E48\u0E2D\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32"),e("div",{class:"col text-center"},"\u0E08\u0E33\u0E19\u0E27\u0E19"),e("div",{class:"col text-center"},"\u0E23\u0E32\u0E04\u0E32/\u0E2B\u0E19\u0E48\u0E27\u0E22"),e("div",{class:"col text-center"},"\u0E2A\u0E48\u0E27\u0E19\u0E25\u0E14\u0E1E\u0E34\u0E40\u0E28\u0E29"),e("div",{class:"col text-center"},"\u0E23\u0E32\u0E04\u0E32\u0E23\u0E27\u0E21")])],-1),L={class:"row items-center"},U={class:"col"},z={class:"col text-center"},D={class:"col text-center"},F={class:"col"},I={class:"q-pr-xl"},K={class:"col text-center"},j={class:"row"},M={class:"col"},S=e("div",{class:"col"},null,-1);function A(t,o,l,u,a,i){const h=C("TitlePage");return d(),g(V,{class:"q-pa-md"},{default:y(()=>[n(h,{TitleName:"\u0E08\u0E48\u0E32\u0E22\u0E40\u0E07\u0E34\u0E19"}),e("div",b,[e("div",q,[e("div",E,[n(v,{modelValue:a.search,"onUpdate:modelValue":o[0]||(o[0]=s=>a.search=s),filled:"",placeholder:"\u0E04\u0E49\u0E19\u0E2B\u0E32\u0E23\u0E2B\u0E31\u0E2A\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32",dense:!0,counter:"",clearable:"",onKeyup:o[1]||(o[1]=w(s=>i.onEnter(a.search),["enter"]))},{append:y(()=>[n(N,{name:"search"})]),_:1},8,["modelValue"])]),e("div",G,[e("ul",null,[(d(),m(P,null,_(100,s=>e("li",{key:s},"1")),64))])])]),Q,e("div",null,[e("ul",null,[B,(d(!0),m(P,null,_(a.productList,(s,f)=>(d(),m("li",{style:{"list-style-type":"none"},class:"q-my-sm",key:f},[e("div",L,[e("div",U,c(s.productName)+" => "+c(s.costPay*s.count),1),e("div",z,[n(p,{round:"",glossy:"",icon:"fa-solid fa-minus",class:"q-mx-sm",color:"negative",size:"sm",onClick:r=>--s.count,disable:s.count<=1},null,8,["onClick","disable"]),R(" "+c(s.count)+" ",1),n(p,{round:"",glossy:"",icon:"fa-solid fa-plus",class:"q-mx-sm",color:"positive",size:"sm",onClick:r=>++s.count},null,8,["onClick"])]),e("div",D,c(i.GetPay(s)),1),e("div",F,[e("div",I,[n(v,{modelValue:s.discount,"onUpdate:modelValue":r=>s.discount=r,modelModifiers:{number:!0},type:"number",label:"\u0E2A\u0E48\u0E27\u0E19\u0E25\u0E14\u0E1E\u0E34\u0E40\u0E28\u0E29",rules:[r=>i.myRule(r,s)]},null,8,["modelValue","onUpdate:modelValue","rules"])])]),e("div",K,c(i.getResultPay(s,s.discount).resultPay),1)])]))),128))])]),e("div",j,[e("div",M,"\u0E22\u0E2D\u0E14\u0E2A\u0E38\u0E17\u0E18\u0E34 "+c(i.GetProductsNumber()),1),S])])]),_:1})}var Z=x(T,[["render",A]]);export{Z as default};
