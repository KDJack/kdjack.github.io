import{d as a,j as o,c as s,o as r}from"./chunks/framework.14031315.js";function c(){return new Promise(n=>{fetch("https://api.github.com/repos/KDJack/el-plus-crud/contents/package.json",{headers:{Accept:"application/vnd.github.v3.raw"}}).then(e=>e.json()).then(e=>e.version??"").then(e=>{if(!e)return;const t=document.querySelector("div.VPHero.VPHomeHero > div > div.main > p.tagline"),i=document.createElement("samp");i.classList.add("version-tag"),i.innerText=e,t==null||t.appendChild(i),n(e)})})}const m=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"El-Plus-Crud","text":"以JSON驱动VUE渲染","tagline":"当前最新版本:","actions":[{"theme":"brand","text":"开始使用","link":"/markdown-examples"},{"theme":"alt","text":"API文档","link":"/api-examples"}]},"features":[{"title":"Feature A","details":"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},{"title":"Feature B","details":"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},{"title":"Feature C","details":"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}]},"headers":[],"relativePath":"index.md","filePath":"index.md"}'),d={name:"index.md"},p=a({...d,setup(n){return o(()=>{window.location.origin==="https://kdjack.github.io"&&c()}),(e,t)=>(r(),s("div"))}});export{m as __pageData,p as default};
