self.System=self.System||(()=>{const e={},t={},r=e=>e.replace(/^.\/(\w+)-[a-f0-9]{8,}.js$/,"./$1.js"),n=window.customElements?Promise.resolve():new Promise((e,t)=>{const r=document.getElementById("js-conditional-compat");if(!(r instanceof HTMLScriptElement))return t(new Error("unable to load compat.js"));const n=setTimeout(()=>{t(new Error("timed out loading compat.js"))},1e4);r.onload=()=>{clearTimeout(n),e()},r.onerror=()=>{clearTimeout(n),t(new Error("network error loading compat.js"))},r.src=r.getAttribute("data-src")||"",r.removeAttribute("data-src")}),o={register(s,i){const a=r(`./${((document.currentScript||{}).src||"").split("?").shift().split("/").pop()}`),c={},l=i((e,t)=>t?c[e]=t:Object.assign(c,e),o),d=s.map((e,t)=>o.import(r(e)).then(l.setters[t]));d.unshift(n),e[a]=Promise.all(d).then(()=>(l.execute(),c)).catch(e=>{throw e.message=`evaluating module ${a}: ${e.message}`,e}),t[a]&&(t[a](e[a]),delete t[a])},import:r=>e[r]||(e[r]=new Promise((e,n)=>{const o=setTimeout(()=>{n(new Error(`could not resolve ${r}`))},1e4);t[r]=t=>{clearTimeout(o),e(t)}}))};return o})(),System.register(["./frameworks.js","./vendor.js"],(function(){"use strict";var e,t,r,n,o,s,i,a,c,l,d,u,m;return{setters:[function(d){e=d.t,t=d.g,r=d.d,n=d.q,o=d.o,s=d.c,i=d.e,a=d.r,c=d.h,l=d.j},function(e){d=e.a,u=e.o,m=e.f}],execute:function(){function f(e){const t=e.map(e=>e.priority),r=Math.min(...t),o=e.find(e=>e.priority===r);if(o){n(o.el,".js-loader").classList.remove("d-none")}}d(".dashboard-sidebar.js-sticky",{constructor:HTMLElement,initialize(e){if(e.classList.contains("is-placeholder"))return;let t=!0;const r=()=>{const r=e.getBoundingClientRect(),n=window.innerHeight,o="fixed"===e.style.position;o?o&&t&&(t=!1,e.style.height=`${n}px`):(e.style.width="auto",e.style.height=`${n-r.top}px`)};document.addEventListener("scroll",r,{passive:!0}),window.addEventListener("resize",()=>{t=!0,r()},{passive:!0}),r()}}),u("details:toggled",".js-news-feed-event-group",(function(t){if(!(t instanceof CustomEvent))throw new Error("invariant: app/assets/modules/github/dashboard.ts:39");if(!t.detail.open)return;const r=t.currentTarget;for(const n of r.querySelectorAll("[data-hydro-view]"))n instanceof HTMLElement&&e(n)}));const p=document.querySelectorAll(".js-dashboard-deferred");if(p.length)try{!function(e){const n=Array.from(e).map(e=>({url:t(e,"data-src"),priority:parseInt(t(e,"data-priority"),10),el:e,loaded:!1}));for(const t of n){const{url:e,el:o}=t;r(document,e).then((function(e){o.replaceWith(e),t.loaded=!0,f(n.filter(e=>!e.loaded))})).catch(()=>{o.classList.add("is-error")})}f(n)}(p)}catch(y){}u("click",".js-show-more-recent-items",(function(e){e.currentTarget.classList.add("d-none")})),d(".js-recent-activity-container",(function(){const e=document.querySelector(".js-all-activity-header");e&&e.classList.remove("d-none")}));const h=new WeakMap;function g(e){const t=h.get(e)||0;if(t>100)return;const r=e.querySelector(".js-more-repos-form");if(r){if(h.set(e,t+1),!(r instanceof HTMLFormElement))throw new Error("invariant: app/assets/modules/github/dashboard/repo-list.ts:25");a(r)}}function w(e){const t=e.querySelector(".js-your-repositories-search");t&&m(t,"filterable:change")}function j(e){const r=t(e,"data-url"),n=t(e,"data-query-name");c(null,"",function(e,t,r){const n=new URL(e,window.location.origin),o=new URLSearchParams(n.search.slice(1));return t.length<1?o.delete(r):o.set(r,t),n.search=o.toString(),n.toString()}(r,e.value.trim(),n))}o(".js-your-repositories-search",(function(e){g(s(e,".js-repos-container"))})),d(".js-your-repositories-search",{constructor:HTMLInputElement,initialize(e){e.defaultValue.trim().length>0&&w(s(e,".js-repos-container"))}}),i(".js-your-repositories-search",(function(e){const t=e.target;if(!(t instanceof HTMLInputElement))throw new Error("invariant: app/assets/modules/github/dashboard/repo-list.ts:88");j(t)})),d(".js-more-repos-form",(function(e){const t=s(e,".js-repos-container");(function(e){const t=e.querySelector(".js-your-repositories-search");if(!t)return!1;if(document.activeElement===t)return!0;if(!(t instanceof HTMLInputElement))throw new Error("invariant: app/assets/modules/github/dashboard/repo-list.ts:55");return t.defaultValue.trim().length>0})(t)&&g(t),e.addEventListener("page:loaded",(function(){w(t)}))})),u("pjax:end",".js-repos-container",(function(e){const t=e.target;if(!(t instanceof HTMLElement))throw new Error("invariant: app/assets/modules/github/dashboard/repo-list.ts:108");!function(e){h.set(e,0)}(t),w(t)})),l(".js-user-dashboard-unpin-form",(async function(e,t){let r;const o=s(e,".js-pinned-dashboard-items-container"),i=n(o,".js-unpin-dashboard-item-error");i.hidden=!0;try{r=await t.html()}catch(a){i.hidden=!1}if(r){s(e,".js-pinned-dashboard-item").remove()}}))}}}));
//# sourceMappingURL=dashboard-bootstrap-9c09a989.js.map