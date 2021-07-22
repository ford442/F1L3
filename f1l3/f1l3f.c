#include<emscripten.h>
EM_JS(void,ma,(),{
let W=new WebAssembly.Memory({initial:5});
let wasmbuff=new Uint8ClampedArray(W.buffer,0,128); 
const textEncoder = new TextEncoder();
let string="test test 1234 test test";
let encoded = textEncoder.encode(string);
encoded=new Uint8ClampedArray(encoded);
wasmbuff.set(encoded,0);
let utf8decoder = new TextDecoder();
/* console.log(utf8decoder.decode(W.buffer)); */
let options={type: 'idb',webWorkerSupport: false};
let fa=new BroadcastChannel('f1a',options);
let bz=new BroadcastChannel('bez',options);
bz.postMessage({data: 222});
fa.postMessage({data: 222});
let sbtn=document.getElementById('sbtn');
sbtn.addEventListener("click",function(){
/* let fileHandler= window.showSaveFilePicker({suggestedName: 'test.txt',types: [{description: 'TEXT',accept: {'text/txt': ['.txt'],},}],});
*/     
var fdb;
let request = window.indexedDB.open("F1L3", 1);
  console.log("F1");
request.onsuccess = function(event) {
    console.log("F1 open success");

fdb = request.result;
var transaction = fdb.transaction(["table1"]);
var objectStore = transaction.objectStore("table1");
let request2 = objectStore.get("$00");
    console.log("F1 get 0");

request2.onsuccess = function(event) {
      console.log("F1 get success");
  if(request2.result){
    console.log("F1 request result TRUE");
    console.log(request2.result.data);
  };
};};});});
int main(){
ma();
return 1;}
