"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[18665],{60854:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>y,contentTitle:()=>h,default:()=>b,frontMatter:()=>u,metadata:()=>k,toc:()=>g});t(67294);var s=t(3905),m=t(54734),l=t(90238),i=t.n(l),n=t(36765),p=t(99473),r=t(50690),c=t(88337),o=t(48951),d=t(50551);const u={id:"read-namespaced-virtual-machine-template",title:"Read a Namespaced Virtual Machine Template",description:"Get a VirtualMachineTemplate object.",sidebar_label:"Read a Namespaced Virtual Machine Template",hide_title:!0,hide_table_of_contents:!0,api:"eJztmF9z2zYMwL8KDy/tdoqddHvo3NtDe9frcruuu6btS+oHmIIjNpLIklAW16fvvgMp24r/Xexlb36STQLkDwABEZoD402A0TV8MZ4bLNV71IWpSX2iypXIFGCcQU5Be+PY2BpG8I5YoeoUOvmFuLKTb6R5ABlYRx5F5TKHEXjC/C+sKDjUlG9XhgwceqyIyQvUHGqsCEZA96gZMjCy/feG/AzWoa4K25S54oIU3TvrWU3kF2oeqLfyWAxXaGpGUwelyyYw+bPgSJup0WpqqMyDKs0tqWdL2GdiTNAFVQijOfDMCdLE2pKwhrbNepiywyM5TVB3WDaUOEWRckGNkIG9cWEBxAWKx5tAXmmsVW1ZJejZo9nioyNzyMUGmNir7DR60FOwjdei4Ol7YzzlMGLf0JbNBLW+iaFjJi9LXePZj/Oz38bd8+vXs/HPGzDRt3uJPsSjpERYYZ0rbLhQQVtHmQqNLhQGNbVeMWEVooTzVlTC03KPZbXgbB0oyAIvzs/lsQb7J2Sgbc1Us8yic6XR8fwPvwURmW8ypGR5QHsN6MwX8kGWzeDW1LlkoPOSTmwSQU9kw6C2U9o2URFjjowJf4pNKaxtBliWH6Yx4/aRxehtwKSYbtltFeXN2TYDNlzK0O3LMDB2cHcxSAF/T4zQjtsM5IwfgPoQq1Pq/HS5xSHZamEQ3gcB3UdcoL8jKR2FNgl9QowXg+1V7UqsSPYwchOeyKIeoqmZbshDBlPrK+Q09MsLMSrW8IN0jjc0mdeOj18i7r6eOq8Ce8Lq93+QdXHKo1MenfLo4DyaYVWeUueUOqfUeUTqiPKv5xebl7zPtdxBrTc/KD/iuteL4+HvuB3KOxN7KR/NqYgLK33YDXG68xYwgiE6E4Zr/hl2/hkukycM58vf7fAuua1KbuNFn5hkWulHSDfe8OxKkNK5eYPB6B5cwewWnUvsWOJ8m8EbQk9+n2QSEJtMPbVRsovzHws71Ou/L6UHuFscOehMkh2cDVxhvSob8JEwV6hW3ana1Qyvtyjz1RF4bFfcmcV0z0NXoqmFqfExhikqsfwK/lpcxKDOjF5hE8FRv5/aEZ6FmBTPwgaWfebzCQb67Mu2leHUsEoRyE3ASSkVd4ploD1W/89t91Zv3dKs900gNtGpfB4F/nR9+F7Y7svAinYsf7wR3AN9/vxj90L8Se1o2reSdINYz/ocC8J4Ng5zYY/jP7XqR9KmAx/fagVhLlXjet7Nv9aaXN/fG/VZ/L8siu/efoK2/RfOyKOK",sidebar_class_name:"get api-method",info_path:"api/harvester-apis",custom_edit_url:null},h=void 0,k={unversionedId:"api/read-namespaced-virtual-machine-template",id:"api/read-namespaced-virtual-machine-template",title:"Read a Namespaced Virtual Machine Template",description:"Get a VirtualMachineTemplate object.",source:"@site/docs/api/read-namespaced-virtual-machine-template.api.mdx",sourceDirName:"api",slug:"/api/read-namespaced-virtual-machine-template",permalink:"/v1.4/api/read-namespaced-virtual-machine-template",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"read-namespaced-virtual-machine-template",title:"Read a Namespaced Virtual Machine Template",description:"Get a VirtualMachineTemplate object.",sidebar_label:"Read a Namespaced Virtual Machine Template",hide_title:!0,hide_table_of_contents:!0,api:"eJztmF9z2zYMwL8KDy/tdoqddHvo3NtDe9frcruuu6btS+oHmIIjNpLIklAW16fvvgMp24r/Xexlb36STQLkDwABEZoD402A0TV8MZ4bLNV71IWpSX2iypXIFGCcQU5Be+PY2BpG8I5YoeoUOvmFuLKTb6R5ABlYRx5F5TKHEXjC/C+sKDjUlG9XhgwceqyIyQvUHGqsCEZA96gZMjCy/feG/AzWoa4K25S54oIU3TvrWU3kF2oeqLfyWAxXaGpGUwelyyYw+bPgSJup0WpqqMyDKs0tqWdL2GdiTNAFVQijOfDMCdLE2pKwhrbNepiywyM5TVB3WDaUOEWRckGNkIG9cWEBxAWKx5tAXmmsVW1ZJejZo9nioyNzyMUGmNir7DR60FOwjdei4Ol7YzzlMGLf0JbNBLW+iaFjJi9LXePZj/Oz38bd8+vXs/HPGzDRt3uJPsSjpERYYZ0rbLhQQVtHmQqNLhQGNbVeMWEVooTzVlTC03KPZbXgbB0oyAIvzs/lsQb7J2Sgbc1Us8yic6XR8fwPvwURmW8ypGR5QHsN6MwX8kGWzeDW1LlkoPOSTmwSQU9kw6C2U9o2URFjjowJf4pNKaxtBliWH6Yx4/aRxehtwKSYbtltFeXN2TYDNlzK0O3LMDB2cHcxSAF/T4zQjtsM5IwfgPoQq1Pq/HS5xSHZamEQ3gcB3UdcoL8jKR2FNgl9QowXg+1V7UqsSPYwchOeyKIeoqmZbshDBlPrK+Q09MsLMSrW8IN0jjc0mdeOj18i7r6eOq8Ce8Lq93+QdXHKo1MenfLo4DyaYVWeUueUOqfUeUTqiPKv5xebl7zPtdxBrTc/KD/iuteL4+HvuB3KOxN7KR/NqYgLK33YDXG68xYwgiE6E4Zr/hl2/hkukycM58vf7fAuua1KbuNFn5hkWulHSDfe8OxKkNK5eYPB6B5cwewWnUvsWOJ8m8EbQk9+n2QSEJtMPbVRsovzHws71Ou/L6UHuFscOehMkh2cDVxhvSob8JEwV6hW3ana1Qyvtyjz1RF4bFfcmcV0z0NXoqmFqfExhikqsfwK/lpcxKDOjF5hE8FRv5/aEZ6FmBTPwgaWfebzCQb67Mu2leHUsEoRyE3ASSkVd4ploD1W/89t91Zv3dKs900gNtGpfB4F/nR9+F7Y7svAinYsf7wR3AN9/vxj90L8Se1o2reSdINYz/ocC8J4Ng5zYY/jP7XqR9KmAx/fagVhLlXjet7Nv9aaXN/fG/VZ/L8siu/efoK2/RfOyKOK",sidebar_class_name:"get api-method",info_path:"api/harvester-apis",custom_edit_url:null},sidebar:"api",previous:{title:"Read a Namespaced Virtual Machine Template Version",permalink:"/v1.4/api/read-namespaced-virtual-machine-template-version"},next:{title:"Read a Namespaced Virtual Machine",permalink:"/v1.4/api/read-namespaced-virtual-machine"}},y={},g=[{value:"Request",id:"request",level:2}],f={toc:g},N="wrapper";function b({components:e,...a}){return(0,s.kt)(N,{...f,...a,components:e,mdxType:"MDXLayout"},(0,s.kt)("h1",{className:"openapi__heading"},"Read a Namespaced Virtual Machine Template"),(0,s.kt)(i(),{method:"get",path:"/apis/harvesterhci.io/v1beta1/namespaces/{namespace}/virtualmachinetemplates/{name}",mdxType:"MethodEndpoint"}),(0,s.kt)("p",null,"Get a VirtualMachineTemplate object."),(0,s.kt)("h2",{id:"request"},"Request"),(0,s.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(p.Z,{className:"paramsItem",param:{name:"name",in:"path",description:"Name of the resource",required:!0,schema:{type:"string",pattern:"[a-z0-9][a-z0-9\\-]*"}},mdxType:"ParamsItem"}),(0,s.kt)(p.Z,{className:"paramsItem",param:{name:"namespace",in:"path",description:"Object name and auth scope, such as for teams and projects",required:!0,schema:{type:"string",pattern:"[a-z0-9][a-z0-9\\-]*"}},mdxType:"ParamsItem"})))),(0,s.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Query Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(p.Z,{className:"paramsItem",param:{name:"exact",in:"query",description:"Should the export be exact. Exact export maintains cluster-specific fields like 'Namespace'.",schema:{type:"boolean"}},mdxType:"ParamsItem"}),(0,s.kt)(p.Z,{className:"paramsItem",param:{name:"export",in:"query",description:"Should this value be exported. Export strips fields that a user can not specify.",schema:{type:"boolean"}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(m.Z,{label:void 0,id:void 0,mdxType:"ApiTabs"},(0,s.kt)(d.default,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"OK")),(0,s.kt)("div",null,(0,s.kt)(n.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(o.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,s.kt)("span",{className:"openapi-schema__name"}," object"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"spec"),(0,s.kt)("span",{className:"openapi-schema__name"}," object"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"defaultVersionId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"status"),(0,s.kt)("span",{className:"openapi-schema__name"}," object"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"defaultVersion",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"latestVersion",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}))))))),(0,s.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(r.Z,{responseExample:'{\n  "apiVersion": "string",\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  },\n  "spec": {\n    "defaultVersionId": "string",\n    "description": "string"\n  },\n  "status": {\n    "defaultVersion": 0,\n    "latestVersion": 0\n  }\n}',language:"json",mdxType:"ResponseSamples"})))),(0,s.kt)(d.default,{label:"application/json;stream=watch",value:"application/json;stream=watch",mdxType:"TabItem"},(0,s.kt)(o.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,s.kt)("span",{className:"openapi-schema__name"}," object"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"spec"),(0,s.kt)("span",{className:"openapi-schema__name"}," object"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"defaultVersionId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"status"),(0,s.kt)("span",{className:"openapi-schema__name"}," object"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"defaultVersion",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"latestVersion",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}))))))),(0,s.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(r.Z,{responseExample:'{\n  "apiVersion": "string",\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  },\n  "spec": {\n    "defaultVersionId": "string",\n    "description": "string"\n  },\n  "status": {\n    "defaultVersion": 0,\n    "latestVersion": 0\n  }\n}',language:"json",mdxType:"ResponseSamples"})))),(0,s.kt)(d.default,{label:"application/yaml",value:"application/yaml",mdxType:"TabItem"},(0,s.kt)(o.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,s.kt)("span",{className:"openapi-schema__name"}," object"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"spec"),(0,s.kt)("span",{className:"openapi-schema__name"}," object"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"defaultVersionId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"status"),(0,s.kt)("span",{className:"openapi-schema__name"}," object"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"defaultVersion",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"latestVersion",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}))))))),(0,s.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(r.Z,{responseExample:'{\n  "apiVersion": "string",\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  },\n  "spec": {\n    "defaultVersionId": "string",\n    "description": "string"\n  },\n  "status": {\n    "defaultVersion": 0,\n    "latestVersion": 0\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(d.default,{label:"401",value:"401",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Unauthorized")),(0,s.kt)("div",null,(0,s.kt)(n.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(o.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"string"))))))),(0,s.kt)(d.default,{label:"application/json;stream=watch",value:"application/json;stream=watch",mdxType:"TabItem"},(0,s.kt)(o.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"string"))))))),(0,s.kt)(d.default,{label:"application/yaml",value:"application/yaml",mdxType:"TabItem"},(0,s.kt)(o.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"string"))))))))))))))}b.isMDXComponent=!0}}]);