import"./assets/styles-8ab69cdc.js";import{i as o}from"./assets/vendor-77e16229.js";const r={form:document.querySelector(".form")};r.form.addEventListener("submit",n);function n(e){e.preventDefault();const s={delay:e.target.elements.delay.value,state:e.target.elements.state.value};a(s).then(t=>o.success({message:t,position:"topRight"})).catch(t=>o.error({message:t,position:"topRight"})),r.form.reset()}function a({delay:e,state:s}){return new Promise((i,m)=>{setTimeout(()=>{s==="fulfilled"?i(`Fullfilled promise in ${e}ms`):m(`Rejected promise on ${e}ms`)},e)})}
//# sourceMappingURL=commonHelpers2.js.map
