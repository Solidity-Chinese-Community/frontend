if(!self.define){let e,i={};const d=(d,c)=>(d=new URL(d+".js",c).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(c,r)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(i[f])return;let s={};const b=e=>d(e,f),o={module:{uri:f},exports:s,require:b};i[f]=Promise.all(c.map((e=>o[e]||b(e)))).then((e=>(r(...e),s)))}}define(["./workbox-508924ba"],(function(e){"use strict";importScripts("https://cdn.jsdelivr.net/npm/workbox-sw@6.5.4/build/workbox-sw.min.js"),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"core.a60b800e.57f8ad04.js",revision:"acc18592edce84bae8ccd9444ad3a406"},{url:"core.a60b800e.cb24406f.js",revision:"ab4aa78fdd34581d4289ac610a5186d5"},{url:"directory-open-01563666.895985fc.js",revision:"305d917da9f4482910608a4d0f7a2484"},{url:"directory-open-01563666.f807c5c1.js",revision:"b92ec3f4977da573c0488bef9bc1e422"},{url:"directory-open-4ed118d0.183b8872.js",revision:"91ce28bdb9bb45835e6a46e27a219a34"},{url:"directory-open-4ed118d0.eb406bed.js",revision:"1f8b60f7182917a51b8615f4646f1800"},{url:"file-open-002ab408.2b273c52.js",revision:"de426b1c1feacc3b39ba116288003dbc"},{url:"file-open-002ab408.b7b24fb5.js",revision:"761094431115f1dc538f3c9cf7726616"},{url:"file-open-7c801643.c03ae2b0.js",revision:"4b3f422439c78248fcc4b34c926567ac"},{url:"file-open-7c801643.d1b9af18.js",revision:"ebb1e2f2353d1f37ef71cbd72ab4addb"},{url:"file-save-c8e3403f.919ba42a.js",revision:"f868edbdf7ff710addf836b03fbfcd32"},{url:"file-save-c8e3403f.fbb3b0ca.js",revision:"9f4b8c2dd3ccf7b02717ae92d0eb1da5"},{url:"file-save-d7634209.3ef88902.js",revision:"8bdf6a423bed4e361cdf8e93cf9e5106"},{url:"file-save-d7634209.d426d045.js",revision:"9c92b9060a9128894cf57508df8adba4"},{url:"index.0540a4ee.js",revision:"648b5ee68db4542636649835ba70e12a"},{url:"index.58d66e99.css",revision:"d97b6a17a4fb0d9dea64d4f74bb39a14"},{url:"index.ceb493e7.js",revision:"a095fbd38b640b386cc98559da33bef1"},{url:"index.html",revision:"8f1287a4ebfc47d1ca7382c9ac1e2936"},{url:"logo.4ecff3c5.png",revision:"a7e685a84be0d60d1af9d995a33c045e"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=sw.js.map
