let db;
let request=window.indexedDB.open("F1L3",1);
request.onsuccess=function(event){
db=request.result;
};
request.onupgradeneeded=function(event){
db=event.target.result;
let objectStore=db.createObjectStore("file",{keyPath:"part"});
objectStore.add(fileData);
}
function read(){
let transaction=db.transaction(["file"]);
let objectStore=transaction.objectStore("file");
let requesta=objectStore.get("00");
let requestb=objectStore.get("01");
let requestc=objectStore.get("02");
let requestd=objectStore.get("03");
request.onsuccess=function(event){
console.log(requesta.result.data,requestb.result.data,requestc.result.data,requestd.result.data);
};
}