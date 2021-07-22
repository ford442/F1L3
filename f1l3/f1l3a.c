#include<emscripten.h>
EM_JS(void,ma,(),{
let options={type: 'idb',webWorkerSupport: false};
let disp=document.getElementById('display').innerHTML;
var fil=document.getElementById('fil');
let fa=new BroadcastChannel('f1a', options);
fa.addEventListener('message', ea => {
if (ea.data=666){
var fdb;
let request = window.indexedDB.open("F1L3", 1);
console.log("F1");
request.onsuccess = function(event) {
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
};
};
});
fil.addEventListener('click',function(){
window.open("https://test.1ink.us/f1l3/f1b.php");});
});
int main(){ma();return 1;}
