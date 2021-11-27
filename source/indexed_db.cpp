#include <indexed_db.hpp>
indexed_db_request_c indexed_db_c::open(const char *name,unsigned version){
return{.js_object=this->js_object.call<val>("open",std::string(name),version)};
}
indexed_db_request_c indexed_db_c::deleteDatabase(const char *name){
return{.js_object=this->js_object.call<val>("deleteDatabase",std::string(name))};
}
void indexed_db_request_c::onsuccess(const char *callback_name){
this->js_object.set("onsuccess",val::module_property(callback_name));
}
void indexed_db_request_c::onerror(const char *callback_name){
this->js_object.set("onerror",val::module_property(callback_name));
}
void indexed_db_request_c::onupgradeneeded(const char *callback_name){
this->js_object.set("onupgradeneeded",val::module_property(callback_name));
}
indexed_db_instance_c indexed_db_instance_c::get_result(val event){
return {.js_object=event["target"].as<val>()["result"].as<val>()};
}
void indexed_db_instance_c::createObjectStore(const char *table_name){
this->js_object.call<void>("createObjectStore",std::string(table_name));
}
void indexed_db_instance_c::createObjectStore(const char *table_name,const char *key_name,bool auto_increment){
val js_object=val::object();
js_object.set("keyPath",std::string(key_name));
js_object.set("autoIncrement",auto_increment);
this->js_object.call<void>("createObjectStore",std::string(table_name),js_object);
}
indexed_db_transaction_c
indexed_db_instance_c::transaction(std::vector <std::string> tables,transaction_type_t transaction_type){
val js_tables=val::array(tables);
static const std::string transaction_types_str[]={"readonly","readwrite"};
return {.js_object=this->js_object.call<val>("transaction",js_tables,transaction_types_str[transaction_type])};
}
indexed_db_object_store_c indexed_db_transaction_c::objectStore(const char *table_name){
return {.js_object=this->js_object.call<val>("objectStore",std::string(table_name))};
}
indexed_db_request_c indexed_db_object_store_c::add(val object){
return {.js_object=this->js_object.call<val>("add",object)};
}
indexed_db_request_c indexed_db_object_store_c::add(val object,int key){
return {.js_object=this->js_object.call<val>("add",object,key)};
}
