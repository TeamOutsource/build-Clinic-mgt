import{Q as m,a as u}from"./QCard.cc920433.js";import{_ as p,N as a,o as f,c as _,w as r,D as o,a as t,E as g,F as v,Q as l,G as x}from"./index.92e3674a.js";import{Q as d}from"./QInput.f763dec1.js";import{Q as h}from"./QPage.a9571113.js";import"./use-key-composition.af6d4ef0.js";import"./uid.42677368.js";const w={data(){return{projectName:"-- \u0E0A\u0E37\u0E48\u0E2D\u0E42\u0E1B\u0E23\u0E41\u0E01\u0E23\u0E21 --",signIn:{userName:"counter",password:"counter"},isPwd:!0}},methods:{OnclickSignIn(i,e){i==null||e==null||i.trim()==""||e.trim()==""?a.create({type:"negative",message:"\u0E01\u0E23\u0E38\u0E13\u0E32\u0E43\u0E2A\u0E48\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25"}):i=="counter"&&e=="counter"?this.$router.push({name:"counter.home"}):i=="doctor"&&e=="doctor"?this.$router.push({name:"doctor.home"}):i=="admin"&&e=="admin"?this.$router.push({name:"admin.home"}):a.create({type:"negative",message:"User Or Password invalid"})}}},y={class:"q-pa-xl"},I={class:"row"},N={class:"col-2 text-center"},Q={class:"col-10"},V={class:"row q-mt-md"},k={class:"col-2 text-center"},P={class:"col-10"},b={class:"q-mt-md text-center"};function C(i,e,S,q,s,c){return f(),_(h,{class:"flex flex-center"},{default:r(()=>[o("div",null,[t(u,{class:"q-pa-md text-center"},{default:r(()=>[t(m,{class:"text-h2"},{default:r(()=>[g(v(s.projectName),1)]),_:1})]),_:1}),o("div",y,[o("div",I,[o("div",N,[t(l,{class:"fa-solid fa-user",color:"primary",size:"xl"})]),o("div",Q,[t(d,{rounded:"",outlined:"",modelValue:s.signIn.userName,"onUpdate:modelValue":e[0]||(e[0]=n=>s.signIn.userName=n),label:"UserName",clearable:""},null,8,["modelValue"])])]),o("div",V,[o("div",k,[t(l,{class:"fa-solid fa-unlock-keyhole",color:"primary",size:"xl"})]),o("div",P,[t(d,{modelValue:s.signIn.password,"onUpdate:modelValue":e[2]||(e[2]=n=>s.signIn.password=n),rounded:"",outlined:"",type:s.isPwd?"password":"text",label:"Password",clearable:""},{append:r(()=>[t(l,{name:s.isPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:e[1]||(e[1]=n=>s.isPwd=!s.isPwd)},null,8,["name"])]),_:1},8,["modelValue","type"])])]),o("div",b,[t(x,{color:"primary","icon-right":"send",label:"On Left and Right",size:"xl",onClick:e[3]||(e[3]=n=>c.OnclickSignIn(s.signIn.userName,s.signIn.password))})])])])]),_:1})}var E=p(w,[["render",C]]);export{E as default};
