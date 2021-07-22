#include<emscripten.h>
EM_JS(void,ma,(),
{
let options={type: 'idb',webWorkerSupport: false};
let disp=document.getElementById('display').innerHTML;
var fil=document.getElementById('fil');
let fa=new
BroadcastChannel('f1a', options);
fa.addEventListener('message',
ea=
> {
if (ea.
data=666
){
let fa=new
WebAssembly.Memory({
initial:20});
let w1=new
Uint8ClampedArray(fa
.buffer,0,64);
let w2=new
Uint8ClampedArray(fa
.buffer,65,64);
let w3=new
Uint8ClampedArray(fa
.buffer,129,64);
let w4=new
Uint8ClampedArray(fa
.buffer,191,64);
let textEncoder=new
TextEncoder();
let utf8decoder=new
TextDecoder();
var fdb;
let rq=window.indexedDB.open("F1L3",1);
console.log("F1");
rq.
onsuccess=function(event){
fdb=rq.result;
var
transaction=fdb.transaction(["table1"]);
var objectStore=transaction.objectStore("table1");
let p1=objectStore.get("$00");
p1.onsuccess=function(event)
{
console.log("F1 get success 0");
if(p1.result){
let enc1=textEncoder.encode(p1.result.data);
enc1=new
Uint8ClampedArray(enc1);
w1.set(enc1,0);
console.log("f1 store success 0");
fa.postMessage({data: 667});
};
};
let p2=objectStore.get("$00");
p2.onsuccess=function(event)
{
console.log("F1 get success");
if(p2.result){
let enc2=textEncoder.encode(p2.result.data);
enc2=new
Uint8ClampedArray(enc2);
w2.set(enc2,0);
console.log("f1 store success 1");
fa.postMessage({data: 668});
};
};
let p3=objectStore.get("$00");
p3.onsuccess=function(event)
{
console.log("F1 get success");
if(p3.result){
let enc3=textEncoder.encode(p3.result.data);
enc3=new
Uint8ClampedArray(enc3);
w3.set(enc3,0);
console.log("f1 store success 2");
fa.postMessage({data: 669});
};
};
let p4=objectStore.get("$03");
p4.onsuccess=function(event)
{
console.log("F1 get success");
if(p4.result){
let enc4=textEncoder.encode(p4.result.data);
enc4=new
Uint8ClampedArray(enc4);
w4.set(enc4,0);
console.log("f1 store success 3");
fa.postMessage({data: 670});
};
};
};};
if (ea.
data=888
){
console.
log(utf8decoder
.
decode(fa
.buffer));
};});
fil.addEventListener('click',
function(){
window.open("https://test.1ink.us/f1l3/f1b.php");
}
);
});
int main(){
ma();
return 1;
}
