#include<emscripten.h>
#include <indexed_db.hpp>
#define GET_FUNC_NAME_STR(func) #func
#define DATABASE_NAME "F1L3"
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
fa.addEventListener('message', e => {
document.getElementById('strt').click();
});
window.open("https://test.1ink.us/f1l3/f1f.php");
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
js_object.set("part",03);
js_object.set("data",std::string("dataeeeedata"));
auto db_request=table1_store.add(js_object);
}
EMSCRIPTEN_BINDINGS(){
function(GET_FUNC_NAME_STR(idb_open_onupgradeneeded),&idb_open_onupgradeneeded);
function(GET_FUNC_NAME_STR(idb_open_success),&idb_open_success);
}