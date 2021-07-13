#include<emscripten.h>
EM_JS(void,ma,(),{
let options={type: 'idb',webWorkerSupport: false};
let disp=document.getElementById('display').innerHTML;
var fil=document.getElementById('fil');
let fa=new BroadcastChannel('f1a', options);
fa.addEventListener('message', ea => {

});
fil.addEventListener('click',function(){
window.open("https://test.1ink.us/f1l3/f1b.php");});
});
int main(){ma();return 1;}
