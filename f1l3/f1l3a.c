#include<emscripten.h>
EM_JS(void,ma,(),{
let fil=document.getElementById('fil');
fil.addEventListener('click',function(){
window.open("https://test.1ink.us/f1l3/f1b.php");
});
let options={type: 'idb',webWorkerSupport: false};
let disp=document.getElementById('display').innerHTML;
let fa=new BroadcastChannel('f1a', options);
let ff=new BroadcastChannel('f1f', options);
let st=new BroadcastChannel('strt', options);
fa.addEventListener('message',ea=> {
let f1a=new WebAssembly.Memory({initial:5});
let f1b=new WebAssembly.Memory({initial:5});
let f1c=new WebAssembly.Memory({initial:5});
let f1d=new WebAssembly.Memory({initial:5});
let f1f=new WebAssembly.Memory({initial:20});
if(ea.data===222){
st.postMessage({data: 111});
}
if (ea.data===666){
let textEncoder=new TextEncoder();
var fdb;
let rq=window.indexedDB.open("F1L3",1);
console.log("F1");
rq.onsuccess=function(event){
fdb=rq.result;
let transaction=fdb.transaction(["table1"]);
let objectStore=transaction.objectStore("table1");
let p1=objectStore.get("$00");
p1.onsuccess=function(event){
console.log("F1 get success 00");
if(p1.result){
let w1=new Uint8ClampedArray(f1a.buffer,0,128);
w1.set(new Uint8ClampedArray(textEncoder.encode(p1.result.data)),0);
console.log("f1 store success 00");
fa.postMessage({data: 667});
};};
let p2=objectStore.get("$00");
p2.onsuccess=function(event){
console.log("F1 get success 01");
if(p2.result){
let w2=new Uint8ClampedArray(f1b.buffer,0,128);
w2.set(new Uint8ClampedArray(textEncoder.encode(p2.result.data)),0);
console.log("f1 store success 01");
fa.postMessage({data: 668});
};};
let p3=objectStore.get("$00");
p3.onsuccess=function(event){
console.log("F1 get success 02");
if(p3.result){
let w3=new Uint8ClampedArray(f1c.buffer,0,128);
w3.set(new Uint8ClampedArray(textEncoder.encode(p3.result.data)),0);
console.log("f1 store success 02");
fa.postMessage({data: 669});
};};
let p4=objectStore.get("$03");
p4.onsuccess=function(event){
console.log("F1 get success 03");
if(p4.result){
let w4=new Uint8ClampedArray(f1d.buffer,0,128);
w4.set(new Uint8ClampedArray(textEncoder.encode(p4.result.data)),0);
console.log("f1 store success 03");
fa.postMessage({data: 670});
};};};};
if (ea.data===888){
let utf8decoder=new TextDecoder();
disp="data: "+utf8decoder.decode(f1a.buffer);
console.log('buffer?');
console.log(f1a.buffer);
console.log('buffer?');
ff.postMessage(f1a.buffer);
};});
});
int main(){ma();return 1;}
