
#include<emscripten.h>
#include <indexed_db.hpp>
#define GET_FUNC_NAME_STR(func) #func
#define DATABASE_NAME "Local-DB"
#define TABLE1_NAME "table1"
#define TABLE2_NAME "table2"
static indexed_db_instance_c db_instance={
.js_object = val::undefined()
};
EM_JS(void,ma,(),
{
let opts={type: 'idb',webWorkerSupport: false};
const fa=new
BroadcastChannel('f1a',opts);
let disp=document.getElementById('display').innerHTML;
fa.addEventListener('message',e => {
document.getElementById('strt').click();

var tex = "document.getElementById('strt').addEventListener('click', function(){<";
var texb = ("?php $ffss = filesize('test.1ink.us/f1l3/test.txt'); echo 'let fsize=$ffss;';?>document.getElementById('display').innerHTML=fsize;<";
var texbb="?php $url = 'https://test.1ink.us/f1l3/test.txt'; $curl = curl_init($url); curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_OPTIONS, true);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
$headers = array('Access-Control-Request-Method: GET', 'Access-Control-Request-Headers: range', 'Range: bytes=0-92',);
curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false); 
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
$resp = curl_exec($curl);
curl_close($curl);?><");
var texc = ("?php
$resp = json_encode($resp);
echo 'var phpdat = $resp;';
?>
let W=new WebAssembly.Memory({initial:5});
let wasmbuff=new Uint8ClampedArray(W.buffer,0,128); 
const textEncoder = new TextEncoder();
let encoded = textEncoder.encode(phpdat);
encoded=new Uint8ClampedArray(encoded);
wasmbuff.set(encoded,0);
});");
}
);
eval(tex+texb+texbb+texc);
});
window.open("https://test.1ink.us/f1l3/f1c.php");
});
int main(){
auto db_request=indexedDB.open(DATABASE_NAME,1);
db_request.onupgradeneeded(GET_FUNC_NAME_STR(idb_open_onupgradeneeded));
db_request.onsuccess(GET_FUNC_NAME_STR(idb_open_success));
ma();
return 0;
}
void idb_open_onupgradeneeded(val event){
db_instance=db_instance.get_result(event);
db_instance.createObjectStore(TABLE1_NAME,"id",true);
db_instance.createObjectStore(TABLE2_NAME);
main();
}
void idb_open_success(val event){
db_instance=db_instance.get_result(event);
auto transaction=db_instance.transaction({TABLE1_NAME,TABLE2_NAME},TRANSACTION_READWRITE);
auto table1_store=transaction.objectStore(TABLE1_NAME);
auto table2_store=transaction.objectStore(TABLE2_NAME);
val js_object=val::object();
js_object.set("data",30);
js_object.set("testb",std::string("datadatabbbbdata"));
auto db_request=table1_store.add(js_object);
}
EMSCRIPTEN_BINDINGS(){
function(GET_FUNC_NAME_STR(idb_open_onupgradeneeded),&idb_open_onupgradeneeded);
function(GET_FUNC_NAME_STR(idb_open_success),&idb_open_success);
}
