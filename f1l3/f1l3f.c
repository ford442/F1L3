#include<emscripten.h>
EM_JS(void,ma,(),{
let options={type: 'idb',webWorkerSupport: false};
let fa=new BroadcastChannel('f1a',options);
let ff=new BroadcastChannel('f1f',options);
let bz=new BroadcastChannel('bez',options);
bz.postMessage({data: 222});
ff.addEventListener('message',ef => {
let f1a=new WebAssembly.Memory({initial:20});
let w1=new Uint8ClampedArray(f1a.buffer,0,512);
w1.set(ef.data,0);
document.getElementById('disp').innerHTML=f1a.buffer;
});
fa.addEventListener('message',ea => {
if (ea.data===667){
console.log("Part A Saved.");}
if (ea.data===668){
console.log("Part B Saved.");}
if (ea.data===669){
console.log("Part C Saved.");}
if (ea.data===670){
console.log("Part D Saved.");}
});
document.getElementById('fbtn').addEventListener("click",function(){
fa.postMessage({data: 888});
});
document.getElementById('sbtn').addEventListener("click",function(){
fa.postMessage({data: 222});
fa.postMessage({data: 666});
});
});
int main(){ma();return 1;}
