var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,o.call(n.exports,n,n.exports),n.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){r[e]=t},e.parcelRequired7c6=o);var n=o("iQIUW");const u={firstDelayForm:document.querySelector('[name="delay"]'),stepDelayForm:document.querySelector('[name="step"]'),amountForm:document.querySelector('[name="amount"]'),submitForm:document.querySelector('[type="submit"]')};function i(e,t){return new Promise(((r,o)=>{const n=Math.random()>.3;setTimeout((()=>{n?r(`✅ Fulfilled promise ${e} in ${t}ms`):o(`❌ Rejected promise ${e} in ${t}ms`)}),t)})).then((e=>{n.Notify.success(e)})).catch((e=>{n.Notify.failure(e)}))}u.submitForm.addEventListener("click",(function(e){e.preventDefault();let t,r=0;for(let e=0;e<Number(u.amountForm.value);e+=1)r+=1,t=Number(u.firstDelayForm.value)+Number(u.stepDelayForm.value)*e,i(r,t)}));
//# sourceMappingURL=03-promises.563c6d59.js.map
