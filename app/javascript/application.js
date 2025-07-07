import jquery from "jquery"
window.$ = jquery
window.jQuery = jquery
console.log("jQuery 版本:", window.$?.fn?.jquery)

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded, jQuery version:", window.$?.fn?.jquery)
})