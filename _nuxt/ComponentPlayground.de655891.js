import{u as m}from"./asyncData.832105ee.js";import{M as c,I as p,d as i,a9 as u,r as l,N as n,k as d}from"./entry.754333d5.js";import f from"./Ellipsis.4fc32b6b.js";import _ from"./ComponentPlaygroundData.4ceba403.js";import"./TabsHeader.702fb391.js";import"./ComponentPlaygroundProps.bc927da1.js";import"./ProseH4.1473f446.js";import"./ProseCodeInline.a93cacd4.js";import"./Badge.24f43658.js";import"./MDCSlot.1e8eb1aa.js";import"./slot.f28c9e92.js";import"./ProseP.35ffe35f.js";import"./index.135f4f27.js";import"./ComponentPlaygroundSlots.vue.a326341e.js";import"./ComponentPlaygroundTokens.vue.12cd635f.js";async function y(o){const t=c(o);{const{data:e}=await m(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>e.value)}}const g=i({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>u(o.component)),e=l({...o.props}),r=await y(o.component);return{as:t,formProps:e,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((e,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");e[s]=a}return e},{});return n("div",{class:"component-playground"},[n("div",{class:"component-playground-wrapper"},[n(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),n(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),n(_,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":e=>o.formProps=e})])}});const V=d(g,[["__scopeId","data-v-c6ef11bc"]]);export{V as default};
