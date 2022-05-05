(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["transfers"],{1814:function(e,a,t){"use strict";t("ac44")},4223:function(e,a,t){"use strict";t("5525")},5525:function(e,a,t){},"71b8":function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"transfers"},[t("h1",{staticClass:"title is-1"},[e._v("Transfers")]),t("label",[e._v("Search "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchTerms,expression:"searchTerms"}],domProps:{value:e.searchTerms},on:{input:function(a){a.target.composing||(e.searchTerms=a.target.value)}}})]),t("div",[t("button",{staticClass:"button is-success my-5 has-text-weight-medium",on:{click:e.updateTransfers}},[e._v(" Update transfers ")]),e._l(e.searchedTransfers,(function(e){return t("transfer-row",{key:e.transactionIdentifier,attrs:{transfer:e}})}))],2)])},s=[],n=t("5530"),i=t("d4ec"),l=t("bee2"),c=t("262e"),o=t("2caf"),d=(t("4de4"),t("d3b7"),t("caad"),t("2532"),t("d81d"),t("fb6a"),t("25f0"),t("9ab4")),f=t("1b40"),u=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"is-flex mx-auto mb-3 is-clipped border-grey transfer-card"},[t("div",{staticClass:"px-1",class:{"has-background-danger":"TRANSFER"===e.transfer.type,"has-background-primary":"INCREASE_AUTHORIZED_CAPITAL"===e.transfer.type,"has-background-warning":"ISSUE_STOCK"===e.transfer.type}}),t("div",{staticClass:"is-flex is-flex-direction-column is-justify-content-space-between p-5"},[t("div",[t("p",{staticClass:"has-text-left is-size-4"},[e._v(e._s(e.transfer.amount))])]),t("div",[t("p",{staticClass:"is-size-6 has-text-grey-light"},[e._v(e._s(e.transfer.recordDate))])])]),t("div",{staticClass:"border-grey"}),t("div",{staticClass:"is-flex is-flex-direction-column is-justify-content-space-between is-flex-grow-1 p-5"},[t("div",{staticClass:"mb-5"},[t("p",{staticClass:"has-text-right"},[t("span",{staticClass:"mr-2",class:{"has-text-danger":"TRANSFER"===e.transfer.type,"has-text-primary":"INCREASE_AUTHORIZED_CAPITAL"===e.transfer.type,"has-text-warning":"ISSUE_STOCK"===e.transfer.type}},[e._v("•")]),e._v(e._s(e.transfer.type)+" ")])]),t("div",{staticClass:"is-flex is-justify-content-space-between"},[t("div",[t("p",{staticClass:"has-text-left has-text-grey-light"},[e._v("State")]),t("p",{staticClass:"has-text-left has-text-grey-light"},[e._v(e._s(e.transfer.state))])]),t("div",[t("p",{staticClass:"has-text-left has-text-grey-light"},[e._v("Class")]),t("p",{staticClass:"has-text-left has-text-grey-light"},[e._v(" "+e._s(e.transfer.securityClass.name)+" ")])]),e.transfer.forgottenProperty?t("div",[t("p",{staticClass:"has-text-left has-text-grey-light"},[e._v("Forgotten Property")]),t("p",{staticClass:"has-text-left has-text-grey-light"},[e._v(" "+e._s(e.transfer.forgottenProperty)+" ")])]):e._e()])])])},y=[],p=t("2b0e"),b=function(e){Object(c["a"])(t,e);var a=Object(o["a"])(t);function t(){return Object(i["a"])(this,t),a.apply(this,arguments)}return Object(l["a"])(t)}(p["a"]);Object(d["a"])([Object(f["b"])({required:!0})],b.prototype,"transfer",void 0),b=Object(d["a"])([Object(f["a"])({name:"TransferRow"})],b);var m=b,I=m,S=(t("4223"),t("2877")),C=Object(S["a"])(I,u,y,!1,null,"098c0476",null),h=C.exports,D=[{splitFactor:null,exDate:null,amount:5e3,companyId:"568fa387-43d1-499a-bba2-25089f5a881a",notes:null,pricePerShare:null,recordDate:"2021-07-01",securityClassId:"ab983cfe-a932-4e25-98ea-f5928a839fe1",securityClass:{name:"Common"},state:"NEW",toSecurityHolderId:"dd971e7f-386b-45dd-93e1-666fbeed0a55",toSecurityHolder:{fullName:"Jeff Dunlap",type:"PERSON"},transactionIdentifier:"41095fdb-6b52-4257-aef8-dc523d782e53",positionWithinDay:3,type:"ISSUE_STOCK"},{splitFactor:null,exDate:null,amount:5e3,companyId:"568fa387-43d1-499a-bba2-25089f5a881a",notes:null,pricePerShare:null,recordDate:"2021-07-01",securityClassId:"ab983cfe-a932-4e25-98ea-f5928a839fe1",securityClass:{name:"Common"},state:"NEW",toSecurityHolderId:null,toSecurityHolder:null,transactionIdentifier:"0e26e898-cfd4-442b-a31b-6cee56131015",positionWithinDay:4,type:"INCREASE_AUTHORIZED_CAPITAL"},{splitFactor:null,exDate:null,amount:200,companyId:"568fa387-43d1-499a-bba2-25089f5a881a",notes:null,pricePerShare:null,recordDate:"2021-07-01",securityClassId:"ab983cfe-a932-4e25-98ea-f5928a839fe1",securityClass:{name:"Common"},state:"NEW",toSecurityHolderId:"7381967d-be8b-4258-b850-b9e9281e4f7e",toSecurityHolder:{fullName:"Bennie Normaal",type:"PERSON"},transactionIdentifier:"5cbad5ca-8ac5-490d-b6ae-b09e4f857f35",positionWithinDay:5,type:"ISSUE_STOCK"},{splitFactor:null,exDate:null,amount:5e3,companyId:"568fa387-43d1-499a-bba2-25089f5a881a",notes:null,pricePerShare:10,recordDate:"2021-07-01",securityClassId:"ab983cfe-a932-4e25-98ea-f5928a839fe1",securityClass:{name:"Common"},state:"NEW",toSecurityHolderId:"7381967d-be8b-4258-b850-b9e9281e4f7e",toSecurityHolder:{fullName:"Bennie Normaal",type:"PERSON"},transactionIdentifier:"56a6b953-745f-4b99-98c5-ce120a07eecd",positionWithinDay:2,type:"TRANSFER"},{splitFactor:null,exDate:null,amount:200,companyId:"568fa387-43d1-499a-bba2-25089f5a881a",notes:null,pricePerShare:null,recordDate:"2021-07-01",securityClassId:"ab983cfe-a932-4e25-98ea-f5928a839fe1",securityClass:{name:"Common"},state:"NEW",toSecurityHolderId:null,toSecurityHolder:null,transactionIdentifier:"ec485c74-713c-486d-9ecb-1099d2862074",positionWithinDay:1,type:"INCREASE_AUTHORIZED_CAPITAL"},{splitFactor:null,exDate:null,amount:1e3,companyId:"568fa387-43d1-499a-bba2-25089f5a881a",notes:null,pricePerShare:null,recordDate:"2021-04-09",securityClassId:"ab983cfe-a932-4e25-98ea-f5928a839fe1",securityClass:{name:"Common"},state:"NEW",toSecurityHolderId:null,toSecurityHolder:null,transactionIdentifier:"65dc06f9-ddc7-47e3-9825-40ca5798e56d",positionWithinDay:2,type:"INCREASE_AUTHORIZED_CAPITAL"},{splitFactor:null,exDate:null,amount:1e3,companyId:"568fa387-43d1-499a-bba2-25089f5a881a",notes:null,pricePerShare:null,recordDate:"2021-04-09",securityClassId:"ab983cfe-a932-4e25-98ea-f5928a839fe1",securityClass:{name:"Common"},state:"NEW",toSecurityHolderId:"dd971e7f-386b-45dd-93e1-666fbeed0a55",toSecurityHolder:{fullName:"Jeff Dunlap",type:"PERSON"},transactionIdentifier:"a6d3c861-8c50-46a4-91ee-9c3d5946e997",positionWithinDay:2,type:"ISSUE_STOCK"},{splitFactor:null,exDate:null,amount:50005,companyId:"568fa387-43d1-499a-bba2-25089f5a881a",notes:null,pricePerShare:null,recordDate:"2021-04-01",securityClassId:"ee494014-bb97-4b81-af35-4142c14fd879",securityClass:{name:"Series A"},state:"MODIFIED",toSecurityHolderId:null,toSecurityHolder:null,transactionIdentifier:"adcea142-5d06-46d5-9731-7fae2d6e69ff",positionWithinDay:0,type:"INCREASE_AUTHORIZED_CAPITAL"},{splitFactor:null,exDate:null,amount:5e3,companyId:"568fa387-43d1-499a-bba2-25089f5a881a",notes:null,pricePerShare:null,recordDate:"2021-04-01",securityClassId:"ee494014-bb97-4b81-af35-4142c14fd879",securityClass:{name:"Series A"},state:"MODIFIED",toSecurityHolderId:"7381967d-be8b-4258-b850-b9e9281e4f7e",toSecurityHolder:{fullName:"Bennie Normaal",type:"PERSON"},transactionIdentifier:"0ec5bec8-7980-456a-9b02-e035e678c0d8",positionWithinDay:0,type:"ISSUE_STOCK"},{splitFactor:null,exDate:null,amount:8e3,companyId:"568fa387-43d1-499a-bba2-25089f5a881a",notes:null,pricePerShare:null,recordDate:"2021-03-10",securityClassId:"ab983cfe-a932-4e25-98ea-f5928a839fe1",securityClass:{name:"Common"},state:"PUBLISHED",toSecurityHolderId:"04f0e470-0d36-428a-b6c1-7ae38bc79ffa",toSecurityHolder:{fullName:"Daniel Dunlap",type:"PERSON"},transactionIdentifier:"3711fc2d-0e85-410e-8d84-42f755a5cef5",positionWithinDay:1,type:"ISSUE_STOCK"},{splitFactor:null,exDate:null,amount:1e4,companyId:"568fa387-43d1-499a-bba2-25089f5a881a",notes:null,pricePerShare:null,recordDate:"2021-03-01",securityClassId:"ab983cfe-a932-4e25-98ea-f5928a839fe1",securityClass:{name:"Common"},state:"MODIFIED",toSecurityHolderId:"dd971e7f-386b-45dd-93e1-666fbeed0a55",toSecurityHolder:{fullName:"Jeff Dunlap",type:"PERSON"},transactionIdentifier:"d619fba2-8b87-4f3d-a94c-3ca112c9833d",positionWithinDay:1,type:"ISSUE_STOCK"},{splitFactor:null,exDate:null,amount:1e3,companyId:"568fa387-43d1-499a-bba2-25089f5a881a",notes:null,pricePerShare:null,recordDate:"2021-03-01",securityClassId:"ab983cfe-a932-4e25-98ea-f5928a839fe1",securityClass:{name:"Common"},state:"MODIFIED",toSecurityHolderId:null,toSecurityHolder:null,transactionIdentifier:"8481edc2-7296-4961-b8f2-4d5735fa6d00",positionWithinDay:1,type:"INCREASE_AUTHORIZED_CAPITAL"},{splitFactor:null,exDate:null,amount:1e3,companyId:"568fa387-43d1-499a-bba2-25089f5a881a",notes:null,pricePerShare:null,recordDate:"2021-03-01",securityClassId:"ab983cfe-a932-4e25-98ea-f5928a839fe1",securityClass:{name:"Common"},state:"NEW",toSecurityHolderId:"dd971e7f-386b-45dd-93e1-666fbeed0a55",toSecurityHolder:{fullName:"Jeff Dunlap",type:"PERSON"},transactionIdentifier:"44304915-b37f-44db-8211-c2ce687fd49b",positionWithinDay:2,type:"ISSUE_STOCK"},{splitFactor:null,exDate:null,amount:1e5,companyId:"568fa387-43d1-499a-bba2-25089f5a881a",notes:null,pricePerShare:null,recordDate:"2021-02-01",securityClassId:"ab983cfe-a932-4e25-98ea-f5928a839fe1",securityClass:{name:"Common"},state:"PUBLISHED",toSecurityHolderId:null,toSecurityHolder:null,transactionIdentifier:"e6df2d81-5f2d-499f-90b0-3ebd7af7aa01",positionWithinDay:2,type:"INCREASE_AUTHORIZED_CAPITAL"}],E=D,_=function(e){Object(c["a"])(t,e);var a=Object(o["a"])(t);function t(){var e;return Object(i["a"])(this,t),e=a.apply(this,arguments),e.searchTerms="",e.transfers=E,e}return Object(l["a"])(t,[{key:"searchedTransfers",get:function(){var e=this;return this.searchTerms?this.transfers.filter((function(a){var t;return a.type.toLowerCase().includes(e.searchTerms.toLowerCase())||(null===(t=a.recordDate)||void 0===t?void 0:t.includes(e.searchTerms))})):this.transfers}},{key:"updateTransfers",value:function(){this.transfers[0]={splitFactor:null,exDate:null,amount:1e4,companyId:"568fa387-43d1-499a-bba2-25089f5a881a",notes:null,pricePerShare:null,recordDate:"2021-07-01",securityClassId:"ab983cfe-a932-4e25-98ea-f5928a839fe1",securityClass:{name:"Common"},state:"OLD",toSecurityHolderId:"dd971e7f-386b-45dd-93e1-666fbeed0a55",toSecurityHolder:{fullName:"Jeff Dunlap",type:"PERSON"},transactionIdentifier:"41095fdb-6b52-4257-aef8-dc523d782e53",positionWithinDay:3,type:"ISSUE_STOCK"},this.transfers=this.transfers.map((function(e){return Object(n["a"])(Object(n["a"])({},e),{},{forgottenProperty:"Important data: ".concat((1e8*Math.random()).toString().slice(1,8))})}))}}]),t}(f["c"]);_=Object(d["a"])([Object(f["a"])({name:"Transfers",components:{TransferRow:h}})],_);var O=_,v=O,x=(t("1814"),Object(S["a"])(v,r,s,!1,null,"1939db7b",null));a["default"]=x.exports},ac44:function(e,a,t){}}]);
//# sourceMappingURL=transfers.efd1a4ec.js.map