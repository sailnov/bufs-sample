import{a as d,b as f,e as o,o as _,f as x,h as z,u as r,i as S}from"./entry.7deb5623.js";import{u as I}from"./config.4566ddea.js";const h=d({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(l){var c;const n=l;f(s=>({"71ded496":r(m)}));const e=I();(c=e==null?void 0:e.nuxtIcon)!=null&&c.aliases;const p=o(()=>{var s;return(((s=e==null?void 0:e.nuxtIcon)==null?void 0:s.aliases)||{})[n.name]||n.name}),m=o(()=>`url('https://api.iconify.design/${p.value.replace(":","/")}.svg')`),a=o(()=>{var t,i,u;if(!n.size&&typeof((t=e.nuxtIcon)==null?void 0:t.size)=="boolean"&&!((i=e.nuxtIcon)!=null&&i.size))return;const s=n.size||((u=e.nuxtIcon)==null?void 0:u.size)||"1em";return String(Number(s))===s?`${s}px`:s});return(s,t)=>(_(),x("span",{style:z({width:r(a),height:r(a)})},null,4))}}),g=S(h,[["__scopeId","data-v-11604bcf"]]);export{g as default};
