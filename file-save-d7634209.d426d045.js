("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequiree2bb.register("4URwP",(function(e,t){var i,a,n,r,o;i=e.exports,Object.defineProperty(i,"__esModule",{value:!0,configurable:!0}),a=e.exports,n="default",r=function(){return s},Object.defineProperty(a,n,{get:r,set:o,enumerable:!0,configurable:!0});var s=async(e,t=[{}],i=null,a=!1)=>{Array.isArray(t)||(t=[t]),t[0].fileName=t[0].fileName||"Untitled";const n=[];if(t.forEach(((t,i)=>{n[i]={description:t.description||"",accept:{}},t.mimeTypes?(0===i&&(e.type?t.mimeTypes.push(e.type):e.headers&&e.headers.get("content-type")&&t.mimeTypes.push(e.headers.get("content-type"))),t.mimeTypes.map((e=>{n[i].accept[e]=t.extensions||[]}))):e.type&&(n[i].accept[e.type]=t.extensions||[])})),i)try{await i.getFile()}catch(e){if(i=null,a)throw e}const r=i||await window.showSaveFilePicker({suggestedName:t[0].fileName,id:t[0].id,startIn:t[0].startIn,types:n,excludeAcceptAllOption:t[0].excludeAcceptAllOption||!1}),o=await r.createWritable();if("stream"in e){const t=e.stream();return await t.pipeTo(o),r}return"body"in e?(await e.body.pipeTo(o),r):(await o.write(blob),await o.close(),r)}}));
//# sourceMappingURL=file-save-d7634209.d426d045.js.map
