"use strict";

var HydrateFn = setInterval(() => {
    document.write("Hello!");
}, 2000);
console.log(HydrateFn)
function StopFn(HydrateFn){
    clearInterval(HydrateFn);
}

setTimeout(()=>{
    StopFn(HydrateFn);
}, 1000*60);

