"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[76369],{8772:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>h,contentTitle:()=>u,default:()=>N,frontMatter:()=>k,metadata:()=>y,toc:()=>g});t(67294);var s=t(3905),m=t(54734),i=t(90238),l=t.n(i),n=t(36765),r=t(99473),p=t(50690),o=t(88337),c=t(48951),d=t(50551);const k={id:"read-cluster-network",title:"Read a Cluster Network",description:"Get a ClusterNetwork object.",sidebar_label:"Read a Cluster Network",hide_title:!0,hide_table_of_contents:!0,api:"eJztl0tz2zYQgP8KZi9JO7Rkd3po1ckhyWTSTKdxJ7Z7cXRYgSsTMQkgwNKxouF/7yxIWpT1aOTp46ITJWKx+2Ff4C6B8SbC5BreE39x4TbCNIOcog7Gs3EWJvCWWKF6XdaRKXRiys0+keYRZOA8BRTRdzlMIBDm66KQgceAFTEFsbQEixXBBOgeNUMGRox8riks4LHpi8LVZa64IEX33gVWM/mFmkfqjTz61xUay2hsVLo1fhI9aTM3Ws0NlXlUpbkl9ew9VhQ9anom6FEXVCFMlsALL0gz50pCC02TDTDFwjdymqjusKyp5ZSNlAtqgowcjI89EBcofq0jBaXRKutYtdCLb2ZLj47MIxcbYHJe5ebJg4Giq4OWDYE+1yZQDhMONW0xJqj2JoWOmYKousaTr6cnP0+758ePJ9PvoWmmoi16ZyNFUfDD6ak81jHOf4MMtLNMlmUVvS+NTlkz/hRFZLnJ0KbYGu01oDd/UoiiNoNbY3PJVx8kCdm0BAORjQM13aZtCxUx5sjY4s+xLoW1yQDL8nyeMncfWYrFBkwbqC3WbJ+JW1abDNhwKa9uf4oj40Z3Z6PzZPR3YoRm2mQQGbmOB8Cug2lncyMBiAMADAEluw1TdYjqoR86rqwV2nBIiZEvA9qYjF+aHe4RsSufI9NOkYpixJvta4Ew7oj/ym+Pc/3hsCBy7ep+qUGgbNvtRgWGO5IOVGjTRm5GjGej172/JXoHbVzrphctveh4qoqE/bgCf4kcCKsXX5B1cSzHYzkey/H/KscFVuWxAo8VeKzA/64CZfOPp2ebX65XFmsuXDBfKX/CN+wggQ+/cXds3tkfHuTTcSriwslIdkPcfsgXMIExehPHO/wz7vwz7oaoTiyOl1KcjUwlpOtgeHEhttv8fYXR6AFFwez7+SXNLWm9yeAVYaCwT7IVEHhj5y5JdgH9tQdVL/94J7V01zc06JjFgneRK7SrNgMfCPPV8KpWI+lalJeruP7dtNuhM93z2JdorNitQwpI6+LUkgVxh5MFvkPO4JGjIYNJ3zYLF1m0LZczjHQVyqaR1+0AKj0nNxFnpfSYOZaR9pzpXx6jt/rklhaDGT8NxW0feRL4PzdX74XtJv0V7VT+BCO4B/r8+YfuCvhO7RjCt5L0945dDDl6wpQb6bIrCHMpputlt/RSa/JD+I3+JId5aApv31xC0/wFKZFFxg==",sidebar_class_name:"get api-method",info_path:"api/harvester-apis",custom_edit_url:null},u=void 0,y={unversionedId:"api/read-cluster-network",id:"api/read-cluster-network",title:"Read a Cluster Network",description:"Get a ClusterNetwork object.",source:"@site/docs/api/read-cluster-network.api.mdx",sourceDirName:"api",slug:"/api/read-cluster-network",permalink:"/v1.5/api/read-cluster-network",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"read-cluster-network",title:"Read a Cluster Network",description:"Get a ClusterNetwork object.",sidebar_label:"Read a Cluster Network",hide_title:!0,hide_table_of_contents:!0,api:"eJztl0tz2zYQgP8KZi9JO7Rkd3po1ckhyWTSTKdxJ7Z7cXRYgSsTMQkgwNKxouF/7yxIWpT1aOTp46ITJWKx+2Ff4C6B8SbC5BreE39x4TbCNIOcog7Gs3EWJvCWWKF6XdaRKXRiys0+keYRZOA8BRTRdzlMIBDm66KQgceAFTEFsbQEixXBBOgeNUMGRox8riks4LHpi8LVZa64IEX33gVWM/mFmkfqjTz61xUay2hsVLo1fhI9aTM3Ws0NlXlUpbkl9ew9VhQ9anom6FEXVCFMlsALL0gz50pCC02TDTDFwjdymqjusKyp5ZSNlAtqgowcjI89EBcofq0jBaXRKutYtdCLb2ZLj47MIxcbYHJe5ebJg4Giq4OWDYE+1yZQDhMONW0xJqj2JoWOmYKousaTr6cnP0+758ePJ9PvoWmmoi16ZyNFUfDD6ak81jHOf4MMtLNMlmUVvS+NTlkz/hRFZLnJ0KbYGu01oDd/UoiiNoNbY3PJVx8kCdm0BAORjQM13aZtCxUx5sjY4s+xLoW1yQDL8nyeMncfWYrFBkwbqC3WbJ+JW1abDNhwKa9uf4oj40Z3Z6PzZPR3YoRm2mQQGbmOB8Cug2lncyMBiAMADAEluw1TdYjqoR86rqwV2nBIiZEvA9qYjF+aHe4RsSufI9NOkYpixJvta4Ew7oj/ym+Pc/3hsCBy7ep+qUGgbNvtRgWGO5IOVGjTRm5GjGej172/JXoHbVzrphctveh4qoqE/bgCf4kcCKsXX5B1cSzHYzkey/H/KscFVuWxAo8VeKzA/64CZfOPp2ebX65XFmsuXDBfKX/CN+wggQ+/cXds3tkfHuTTcSriwslIdkPcfsgXMIExehPHO/wz7vwz7oaoTiyOl1KcjUwlpOtgeHEhttv8fYXR6AFFwez7+SXNLWm9yeAVYaCwT7IVEHhj5y5JdgH9tQdVL/94J7V01zc06JjFgneRK7SrNgMfCPPV8KpWI+lalJeruP7dtNuhM93z2JdorNitQwpI6+LUkgVxh5MFvkPO4JGjIYNJ3zYLF1m0LZczjHQVyqaR1+0AKj0nNxFnpfSYOZaR9pzpXx6jt/rklhaDGT8NxW0feRL4PzdX74XtJv0V7VT+BCO4B/r8+YfuCvhO7RjCt5L0945dDDl6wpQb6bIrCHMpputlt/RSa/JD+I3+JId5aApv31xC0/wFKZFFxg==",sidebar_class_name:"get api-method",info_path:"api/harvester-apis",custom_edit_url:null},sidebar:"api",previous:{title:"Patch a Node Network",permalink:"/v1.5/api/patch-node-network"},next:{title:"Read a Namespaced Key Pair",permalink:"/v1.5/api/read-namespaced-key-pair"}},h={},g=[{value:"Request",id:"request",level:2}],f={toc:g},T="wrapper";function N({components:e,...a}){return(0,s.kt)(T,{...f,...a,components:e,mdxType:"MDXLayout"},(0,s.kt)("h1",{className:"openapi__heading"},"Read a Cluster Network"),(0,s.kt)(l(),{method:"get",path:"/apis/network.harvesterhci.io/v1beta1/clusternetworks/{name}",mdxType:"MethodEndpoint"}),(0,s.kt)("p",null,"Get a ClusterNetwork object."),(0,s.kt)("h2",{id:"request"},"Request"),(0,s.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(r.Z,{className:"paramsItem",param:{name:"name",in:"path",description:"Name of the resource",required:!0,schema:{type:"string",pattern:"[a-z0-9][a-z0-9\\-]*"}},mdxType:"ParamsItem"})))),(0,s.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Query Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(r.Z,{className:"paramsItem",param:{name:"exact",in:"query",description:"Should the export be exact. Exact export maintains cluster-specific fields like 'Namespace'.",schema:{type:"boolean"}},mdxType:"ParamsItem"}),(0,s.kt)(r.Z,{className:"paramsItem",param:{name:"export",in:"query",description:"Should this value be exported. Export strips fields that a user can not specify.",schema:{type:"boolean"}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(m.Z,{label:void 0,id:void 0,mdxType:"ApiTabs"},(0,s.kt)(d.default,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"OK")),(0,s.kt)("div",null,(0,s.kt)(n.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,s.kt)("span",{className:"openapi-schema__name"}," object"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"status"),(0,s.kt)("span",{className:"openapi-schema__name"}," object"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"conditions"),(0,s.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(o.Z,{collapsible:!1,name:"lastTransitionTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"lastUpdateTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"status",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))))))))),(0,s.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(p.Z,{responseExample:'{\n  "apiVersion": "string",\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  },\n  "status": {\n    "conditions": [\n      {\n        "lastTransitionTime": "string",\n        "lastUpdateTime": "string",\n        "message": "string",\n        "reason": "string",\n        "status": "string",\n        "type": "string"\n      }\n    ]\n  }\n}',language:"json",mdxType:"ResponseSamples"})))),(0,s.kt)(d.default,{label:"application/json;stream=watch",value:"application/json;stream=watch",mdxType:"TabItem"},(0,s.kt)(c.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,s.kt)("span",{className:"openapi-schema__name"}," object"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"status"),(0,s.kt)("span",{className:"openapi-schema__name"}," object"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"conditions"),(0,s.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(o.Z,{collapsible:!1,name:"lastTransitionTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"lastUpdateTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"status",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))))))))),(0,s.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(p.Z,{responseExample:'{\n  "apiVersion": "string",\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  },\n  "status": {\n    "conditions": [\n      {\n        "lastTransitionTime": "string",\n        "lastUpdateTime": "string",\n        "message": "string",\n        "reason": "string",\n        "status": "string",\n        "type": "string"\n      }\n    ]\n  }\n}',language:"json",mdxType:"ResponseSamples"})))),(0,s.kt)(d.default,{label:"application/yaml",value:"application/yaml",mdxType:"TabItem"},(0,s.kt)(c.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,s.kt)("span",{className:"openapi-schema__name"}," object"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"status"),(0,s.kt)("span",{className:"openapi-schema__name"}," object"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"conditions"),(0,s.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(o.Z,{collapsible:!1,name:"lastTransitionTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"lastUpdateTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"status",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))))))))),(0,s.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(p.Z,{responseExample:'{\n  "apiVersion": "string",\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  },\n  "status": {\n    "conditions": [\n      {\n        "lastTransitionTime": "string",\n        "lastUpdateTime": "string",\n        "message": "string",\n        "reason": "string",\n        "status": "string",\n        "type": "string"\n      }\n    ]\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(d.default,{label:"401",value:"401",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Unauthorized")),(0,s.kt)("div",null,(0,s.kt)(n.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"string"))))))),(0,s.kt)(d.default,{label:"application/json;stream=watch",value:"application/json;stream=watch",mdxType:"TabItem"},(0,s.kt)(c.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"string"))))))),(0,s.kt)(d.default,{label:"application/yaml",value:"application/yaml",mdxType:"TabItem"},(0,s.kt)(c.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"string"))))))))))))))}N.isMDXComponent=!0}}]);