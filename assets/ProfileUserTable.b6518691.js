import{Q as s}from"./QTable.18044f0c.js";import{_ as c,r as d,o as u,c as f,w as v,a as b}from"./index.5f796ffe.js";const k={props:{TitleTable:{type:String,required:!1}},data(){return{columns:[{name:"no",required:!0,label:"\u0E25\u0E33\u0E14\u0E31\u0E1A",align:"center",field:e=>e.no,format:e=>`${e}`},{name:"fullname",align:"center",label:"\u0E0A\u0E37\u0E48\u0E2D-\u0E2A\u0E01\u0E38\u0E25",field:"fullname",sortable:!0},{name:"service",label:"\u0E23\u0E31\u0E1A\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23",field:"service",sortable:!0},{name:"time",label:"\u0E40\u0E27\u0E25\u0E32\u0E23\u0E31\u0E1A\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23",field:"time"},{name:"doctorName",label:"\u0E41\u0E1E\u0E17\u0E22\u0E4C\u0E1C\u0E39\u0E49\u0E14\u0E39\u0E41\u0E25",field:"doctorName"},{name:"remark",label:"\u0E2B\u0E21\u0E32\u0E22\u0E40\u0E2B\u0E15\u0E38",field:"remark"}],dataRows:[{no:1,fullname:"Frozen Yogurt",service:6,time:24,doctorName:4,remark:87},{no:2,fullname:"Ice cream sandwich",service:9,time:37,doctorName:4.3,remark:129},{no:3,fullname:"Eclair",service:16,time:23,doctorName:6,remark:337},{no:4,fullname:"Cupcake",service:3.7,time:67,doctorName:4.3,remark:413},{no:"Gingerbread",fullname:356,service:16,time:49,doctorName:3.9,remark:327},{no:"Jelly bean",fullname:375,service:0,time:94,doctorName:0,remark:50},{no:"Lollipop",fullname:392,service:.2,time:98,doctorName:0,remark:38},{no:"Honeycomb",fullname:408,service:3.2,time:87,doctorName:6.5,remark:562},{no:"Donut",fullname:452,service:25,time:51,doctorName:4.9,remark:326},{no:"KitKat",fullname:518,service:26,time:65,doctorName:7,remark:54}]}},methods:{submit(e,r,a){this.$emit("someEvent",JSON.parse(JSON.stringify(r)))}}};function p(e,r,a,N,o,l){const m=d("daiv");return u(),f(m,null,{default:v(()=>[b(s,{title:a.TitleTable,grid:e.$q.screen.xs||e.$q.screen.sm,rows:o.dataRows,columns:o.columns,"row-key":"name",separator:"cell",onRowClick:r[0]||(r[0]=(t,n,i)=>l.submit(t,n,i))},null,8,["title","grid","rows","columns"])]),_:1})}var _=c(k,[["render",p]]);export{_ as P};
