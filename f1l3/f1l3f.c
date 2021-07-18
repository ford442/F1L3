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
console.log(utf8decoder.decode(W.buffer));
let options={type: 'idb',webWorkerSupport: false};
let fa=new BroadcastChannel('f1a',options);
let bz=new BroadcastChannel('bez',options);
bz.postMessage({data: 222});
fa.postMessage({data: 222});
let sbtn=document.getElementById('sbtn');

const employeeData = [
{ id: "00-01", name: "gopal", age: 35, email: "gopal@tutorialspoint.com" },
{ id: "00-02", name: "prasad", age: 32, email: "prasad@tutorialspoint.com" }
];
var db;
var request = window.indexedDB.open("F1L3", 1);
request.onsuccess = function(event) {
db = request.result;
console.log("success: "+ db);
};
request.onupgradeneeded = function(event) {
var db = event.target.result;
var objectStore = db.createObjectStore("pieces", {keyPath: "part"});
objectStore.add(employeeData);
}

function read() {
var transaction = db.transaction(["pieces"]);
var objectStore = transaction.objectStore("pieces");
var requesta = objectStore.get("00");
requesta.onsuccess = function(event) {
if(requesta.result) {
wasmbuff.set(request.result.data,0);

alert("Name: " + request.result.name + ",
Age: " + request.result.age + ", Email: " + request.result.email);
} else {
alert("Kenny couldn't be found in your database!");
}
};
}

function readAll() {
var objectStore = db.transaction("employee").objectStore("employee");

objectStore.openCursor().onsuccess = function(event) {
var cursor = event.target.result;

if (cursor) {
alert("Name for id " + cursor.key + " is " + cursor.value.name + ",
Age: " + cursor.value.age + ", Email: " + cursor.value.email);
cursor.continue();
} else {
alert("No more entries!");
}
};
}

function add() {
var request = db.transaction(["employee"], "readwrite")
.objectStore("employee")
.add({ id: "00-03", name: "Kenny", age: 19, email: "kenny@planet.org" });

request.onsuccess = function(event) {
alert("Kenny has been added to your database.");
};

}

function remove() {
var request = db.transaction(["employee"], "readwrite")
.objectStore("employee")
.delete("00-03");
request.onsuccess = function(event) {
alert("Kenny's entry has been removed from your database.");
};
}


sbtn.addEventListener("click",function(){



fileHandler= window.showSaveFilePicker({suggestedName: 'test.txt',types: [{description: 'TEXT',accept: {'text/txt': ['.txt'],},}],});
});});
int main(){
ma();
return 1;}
