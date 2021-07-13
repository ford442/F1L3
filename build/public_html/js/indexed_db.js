var e;
e || (e=typeof Module !== 'undefined'?Module:{});
var r={},u;
for(u in e) e.hasOwnProperty(u) && (r[u]=e[u]);
function v(a,b){
throw b;
}
var aa="object" === typeof window,w="function" === typeof importScripts,x="",ba,y,ca,A,B;
if("object" === typeof process && "object" === typeof process.versions && "string" === typeof process.versions.node) x=w?require("path").dirname(x)+"/":__dirname+"/", ba=function(a,b){
A || (A=require("fs"));
B || (B=require("path"));
a=B.normalize(a);
return A.readFileSync(a,b?null:"utf8")
}, ca=function(a){
a=ba(a,!0);
a.buffer || (a=new Uint8Array(a));
a.buffer || C("Assertion failed: undefined");
return a
}, y=function(a,b,c){
A || (A=require("fs"));
B || (B=require("path"));
a=B.normalize(a);
A.readFile(a,function(d,f){
d?c(d):b(f.buffer)
})
},
1<process.argv.length && process.argv[1].replace(/\\/g,"/"), process.argv.slice(2), "undefined" !== typeof module && (module.exports=e), process.on("uncaughtException",function(a){
if(!(a instanceof da)) throw a;
}), process.on("unhandledRejection",C), v=function(a,b){
if(noExitRuntime || 0<ea) throw process.exitCode=a, b;
process.exit(a)
}, e.inspect=function(){
return "[Emscripten Module object]"
}; else if(aa || w) w?x=self.location.href:"undefined" !== typeof document && document.currentScript && (x=document.currentScript.src),
x=0 !== x.indexOf("blob:")?x.substr(0,x.lastIndexOf("/")+1):"", ba=function(a){
var b=new XMLHttpRequest;
b.open("GET",a,!1);
b.send(null);
return b.responseText
}, w && (ca=function(a){
var b=new XMLHttpRequest;
b.open("GET",a,!1);
b.responseType="arraybuffer";
b.send(null);
return new Uint8Array(b.response)
}), y=function(a,b,c){
var d=new XMLHttpRequest;
d.open("GET",a,!0);
d.responseType="arraybuffer";
d.onload=function(){
200 == d.status || 0 == d.status && d.response?b(d.response):c()
};
d.onerror=c;
d.send(null)
};
e.print || console.log.bind(console);
var D=e.printErr || console.warn.bind(console);
for(u in r) r.hasOwnProperty(u) && (e[u]=r[u]);
r=null;
e.quit && (v=e.quit);
var E;
e.wasmBinary && (E=e.wasmBinary);
var noExitRuntime=e.noExitRuntime || !0;
"object" !== typeof WebAssembly && C("no native wasm support detected");
var fa,ha=!1,ia="undefined" !== typeof TextDecoder?new TextDecoder("utf8"):void 0;
function ja(a,b,c){
var d=F;
if(0<c){
c=b+c-1;
for(var f=0; f<a.length; ++f){
var g=a.charCodeAt(f);
if(55296<=g && 57343>=g){
var n=a.charCodeAt(++f);
g=65536+((g & 1023) << 10) | n & 1023
}
if(127>=g){
if(b>=c) break;
d[b++]=g
}else{
if(2047>=g){
if(b+1>=c) break;
d[b++]=192 | g >> 6
}else{
if(65535>=g){
if(b+2>=c) break;
d[b++]=224 | g >> 12
}else{
if(b+3>=c) break;
d[b++]=240 | g >> 18;
d[b++]=128 | g >> 12 & 63
}
d[b++]=128 | g >> 6 & 63
}
d[b++]=128 | g & 63
}
}
d[b]=0
}
}
var ka="undefined" !== typeof TextDecoder?new TextDecoder("utf-16le"):void 0;
function la(a,b){
var c=a >> 1;
for(var d=c+b/2; !(c>=d) && ma[c];) ++c;
c<<=1;
if(32<c-a && ka) return ka.decode(F.subarray(a,c));
c="";
for(d=0; !(d>=b/2); ++d){
var f=G[a+2*d >> 1];
if(0 == f) break;
c+=String.fromCharCode(f)
}
return c
}
function na(a,b,c){
void 0 === c && (c=2147483647);
if(2>c) return 0;
c-=2;
var d=b;
c=c<2*a.length?c/2:a.length;
for(var f=0; f<c; ++f) G[b >> 1]=a.charCodeAt(f), b+=2;
G[b >> 1]=0;
return b-d
}
function oa(a){
return 2*a.length
}
function pa(a,b){
for(var c=0,d=""; !(c>=b/4);){
var f=H[a+4*c >> 2];
if(0 == f) break;
++c;
65536<=f?(f-=65536, d+=String.fromCharCode(55296 | f >> 10,56320 | f & 1023)):d+=String.fromCharCode(f)
}
return d
}
function qa(a,b,c){
void 0 === c && (c=2147483647);
if(4>c) return 0;
var d=b;
c=d+c-4;
for(var f=0; f<a.length; ++f){
var g=a.charCodeAt(f);
if(55296<=g && 57343>=g){
var n=a.charCodeAt(++f);
g=65536+((g & 1023) << 10) | n & 1023
}
H[b >> 2]=g;
b+=4;
if(b+4>c) break
}
H[b >> 2]=0;
return b-d
}
function ra(a){
for(var b=0,c=0; c<a.length; ++c){
var d=a.charCodeAt(c);
55296<=d && 57343>=d && ++c;
b+=4
}
return b
}
var sa,I,F,G,ma,H,J,ta,ua,L,va=[],wa=[],xa=[],ya=[],ea=0;
function za(){
var a=e.preRun.shift();
va.unshift(a)
}
var M=0,Aa=null,N=null;
e.preloadedImages={};
e.preloadedAudios={};
function C(a){
if(e.onAbort) e.onAbort(a);
D(a);
ha= !0;
throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");
}
function Ba(){
return O.startsWith("data:application/octet-stream;base64,")
}
var O;
O="indexed_db.wasm";
if(!Ba()){
var Ca=O;
O=e.locateFile?e.locateFile(Ca,x):x+Ca
}
function Da(){
var a=O;
try{
if(a == O && E) return new Uint8Array(E);
if(ca) return ca(a);
throw"both async and sync fetching of the wasm failed";
}catch(b){
C(b)
}
}
function Ea(){
if(!E && (aa || w)){
if("function" === typeof fetch && !O.startsWith("file://")) return fetch(O,{credentials:"same-origin"}).then(function(a){
if(!a.ok) throw"failed to load wasm binary file at '"+O+"'";
return a.arrayBuffer()
}).catch(function(){
return Da()
});
if(y) return new Promise(function(a,b){
y(O,function(c){
a(new Uint8Array(c))
},b)
})
}
return Promise.resolve().then(function(){
return Da()
})
}
function Fa(a){
for(; 0<a.length;){
var b=a.shift();
if("function" == typeof b) b(e); else{
var c=b.aa;
"number" === typeof c?void 0 === b.P?L.get(c)():L.get(c)(b.P):c(void 0 === b.P?null:b.P)
}
}
}
function Ga(a){
this.O=a-16;
this.$=function(b){
H[this.O+4 >> 2]=b
};
this.X=function(b){
H[this.O+8 >> 2]=b
};
this.Y=function(){
H[this.O >> 2]=0
};
this.W=function(){
I[this.O+12 >> 0]=0
};
this.Z=function(){
I[this.O+13 >> 0]=0
};
this.U=function(b,c){
this.$(b);
this.X(c);
this.Y();
this.W();
this.Z()
}
}
var Ha=0;
function Ia(a){
switch(a){
case 1:
return 0;
case 2:
return 1;
case 4:
return 2;
case 8:
return 3;
default:
throw new TypeError("Unknown type size: "+a);
}
}
var Ja=void 0;
function P(a){
for(var b=""; F[a];) b+=Ja[F[a++]];
return b
}
var R={},S={},Ka={};
function La(a){
if(void 0 === a) return "_unknown";
a=a.replace(/[^a-zA-Z0-9_]/g,"$");
var b=a.charCodeAt(0);
return 48<=b && 57>=b?"_"+a:a
}
function Ma(a,b){
a=La(a);
return (new Function("body","return function "+a+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n'))(b)
}
function Na(a){
var b=Error,c=Ma(a,function(d){
this.name=a;
this.message=d;
d=Error(d).stack;
void 0 !== d && (this.stack=this.toString()+"\n"+d.replace(/^Error(:[^\n]*)?\n/,""))
});
c.prototype=Object.create(b.prototype);
c.prototype.constructor=c;
c.prototype.toString=function(){
return void 0 === this.message?this.name:this.name+": "+this.message
};
return c
}
var Oa=void 0;
function T(a){
throw new Oa(a);
}
var Pa=void 0;
function Qa(a,b){
function c(h){
h=b(h);
if(h.length !== d.length) throw new Pa("Mismatched type converter count");
for(var k=0; k<d.length; ++k) U(d[k],h[k])
}
var d=[];
d.forEach(function(h){
Ka[h]=a
});
var f=Array(a.length),g=[],n=0;
a.forEach(function(h,k){
S.hasOwnProperty(h)?f[k]=S[h]:(g.push(h), R.hasOwnProperty(h) || (R[h]=[]), R[h].push(function(){
f[k]=S[h];
++n;
n === g.length && c(f)
}))
});
0 === g.length && c(f)
}
function U(a,b,c){
c=c || {};
if(!("argPackAdvance" in b)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
var d=b.name;
a || T('type "'+d+'" must have a positive integer typeid pointer');
if(S.hasOwnProperty(a)){
if(c.T) return;
T("Cannot register type '"+d+"' twice")
}
S[a]=b;
delete Ka[a];
R.hasOwnProperty(a) && (b=R[a], delete R[a], b.forEach(function(f){
f()
}))
}
var Ra=[],V=[{},{value:void 0},{value:null},{value:!0},{value:!1}];
function Sa(a){
4<a && 0 === --V[a].R && (V[a]= void 0, Ra.push(a))
}
function W(a){
switch(a){
case void 0:
return 1;
case null:
return 2;
case !0:
return 3;
case !1:
return 4;
default:
var b=Ra.length?Ra.pop():V.length;
V[b]={R:1,value:a};
return b
}
}
function Ta(a){
return this.fromWireType(J[a >> 2])
}
function Ua(a){
if(null === a) return "null";
var b=typeof a;
return "object" === b || "array" === b || "function" === b?a.toString():""+a
}
function Xa(a,b){
switch(b){
case 2:
return function(c){
return this.fromWireType(ta[c >> 2])
};
case 3:
return function(c){
return this.fromWireType(ua[c >> 3])
};
default:
throw new TypeError("Unknown float type: "+a);
}
}
function Ya(a){
var b=Function;
if(!(b instanceof Function)) throw new TypeError("new_ called with constructor type "+ typeof b+" which is not a function");
var c=Ma(b.name || "unknownFunctionName",function(){
});
c.prototype=b.prototype;
c=new c;
a=b.apply(c,a);
return a instanceof Object?a:c
}
function Za(a){
for(; a.length;){
var b=a.pop();
a.pop()(b)
}
}
function $a(a,b){
var c=e;
if(void 0 === c[a].M){
var d=c[a];
c[a]=function(){
c[a].M.hasOwnProperty(arguments.length) || T("Function '"+b+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+c[a].M+")!");
return c[a].M[arguments.length].apply(this,arguments)
};
c[a].M=[];
c[a].M[d.S]=d
}
}
function ab(a,b,c){
e.hasOwnProperty(a)?((void 0 === c || void 0 !== e[a].M && void 0 !== e[a].M[c]) && T("Cannot register public name '"+a+"' twice"), $a(a,a), e.hasOwnProperty(c) && T("Cannot register multiple overloads of a function with the same number of arguments ("+c+")!"), e[a].M[c]=b):(e[a]=b, void 0 !== c && (e[a].ba=c))
}
function bb(a,b){
for(var c=[],d=0; d<a; d++) c.push(H[(b >> 2)+d]);
return c
}
function cb(a,b){
var c=[];
return function(){
c.length=arguments.length;
for(var d=0; d<arguments.length; d++) c[d]=arguments[d];
a.includes("j")?(d=e["dynCall_"+a], d=c && c.length?d.apply(null,[b].concat(c)):d.call(null,b)):d=L.get(b).apply(null,c);
return d
}
}
function db(a,b){
a=P(a);
var c=a.includes("j")?cb(a,b):L.get(b);
"function" !== typeof c && T("unknown function pointer with signature "+a+": "+b);
return c
}
var eb=void 0;
function fb(a){
a=gb(a);
var b=P(a);
X(a);
return b
}
function hb(a,b){
function c(g){
f[g] || S[g] || (Ka[g]?Ka[g].forEach(c):(d.push(g), f[g]= !0))
}
var d=[],f={};
b.forEach(c);
throw new eb(a+": "+d.map(fb).join([", "]));
}
function ib(a,b,c){
switch(b){
case 0:
return c?function(d){
return I[d]
}:function(d){
return F[d]
};
case 1:
return c?function(d){
return G[d >> 1]
}:function(d){
return ma[d >> 1]
};
case 2:
return c?function(d){
return H[d >> 2]
}:function(d){
return J[d >> 2]
};
default:
throw new TypeError("Unknown integer type: "+a);
}
}
function Y(a){
a || T("Cannot use deleted val. handle = "+a);
return V[a].value
}
function jb(a,b){
var c=S[a];
void 0 === c && T(b+" has unknown type "+fb(a));
return c
}
var kb={};
function Z(a){
var b=kb[a];
return void 0 === b?P(a):b
}
var lb=[];
function mb(){
return "object" === typeof globalThis?globalThis:Function("return this")()
}
function nb(a){
var b=lb.length;
lb.push(a);
return b
}
function ob(a,b){
for(var c=Array(a),d=0; d<a; ++d) c[d]=jb(H[(b >> 2)+d],"parameter "+d);
return c
}
for(var pb=Array(256),qb=0; 256>qb; ++qb) pb[qb]=String.fromCharCode(qb);
Ja=pb;
Oa=e.BindingError=Na("BindingError");
Pa=e.InternalError=Na("InternalError");
e.count_emval_handles=function(){
for(var a=0,b=5; b<V.length; ++b) void 0 !== V[b] && ++a;
return a
};
e.get_first_emval=function(){
for(var a=5; a<V.length; ++a) if(void 0 !== V[a]) return V[a];
return null
};
eb=e.UnboundTypeError=Na("UnboundTypeError");
var sb={
v:function(a){
return rb(a+16)+16
},u:function(a,b,c){
(new Ga(a)).U(b,c);
Ha++;
throw a;
},w:function(){
},B:function(a,b,c,d,f){
var g=Ia(c);
b=P(b);
U(a,{
name:b,fromWireType:function(n){
return !!n
},toWireType:function(n,h){
return h?d:f
},argPackAdvance:8,readValueFromPointer:function(n){
if(1 === c) var h=I; else if(2 === c) h=G; else if(4 === c) h=H; else throw new TypeError("Unknown boolean type size: "+b);
return this.fromWireType(h[n >> g])
},N:null
})
},A:function(a,b){
b=P(b);
U(a,{
name:b,fromWireType:function(c){
var d=
V[c].value;
Sa(c);
return d
},toWireType:function(c,d){
return W(d)
},argPackAdvance:8,readValueFromPointer:Ta,N:null
})
},o:function(a,b,c){
c=Ia(c);
b=P(b);
U(a,{
name:b,fromWireType:function(d){
return d
},toWireType:function(d,f){
if("number" !== typeof f && "boolean" !== typeof f) throw new TypeError('Cannot convert "'+Ua(f)+'" to '+this.name);
return f
},argPackAdvance:8,readValueFromPointer:Xa(b,c),N:null
})
},q:function(a,b,c,d,f,g){
var n=bb(b,c);
a=P(a);
f=db(d,f);
ab(a,function(){
hb("Cannot call "+a+" due to unbound types",
n)
},b-1);
Qa(n,function(h){
var k=[h[0],null].concat(h.slice(1)),p=h=a,q=f,m=k.length;
2>m && T("argTypes array size mismatch! Must at least get return value and 'this' types!");
for(var t=null !== k[1] && !1,z=!1,l=1; l<k.length; ++l) if(null !== k[l] && void 0 === k[l].N){
z= !0;
break
}
var Va="void" !== k[0].name,K="",Q="";
for(l=0; l<m-2; ++l) K+=(0 !== l?", ":"")+"arg"+l, Q+=(0 !== l?", ":"")+"arg"+l+"Wired";
p="return function "+La(p)+"("+K+") {\nif (arguments.length !== "+(m-2)+") {\nthrowBindingError('function "+p+" called with ' + arguments.length + ' arguments, expected "+
(m-2)+" args!');\n}\n";
z && (p+="var destructors = [];\n");
var Wa=z?"destructors":"null";
K="throwBindingError invoker fn runDestructors retType classParam".split(" ");
q=[T,q,g,Za,k[0],k[1]];
t && (p+="var thisWired = classParam.toWireType("+Wa+", this);\n");
for(l=0; l<m-2; ++l) p+="var arg"+l+"Wired = argType"+l+".toWireType("+Wa+", arg"+l+"); // "+k[l+2].name+"\n", K.push("argType"+l), q.push(k[l+2]);
t && (Q="thisWired"+(0<Q.length?", ":"")+Q);
p+=(Va?"var rv = ":"")+"invoker(fn"+(0<Q.length?", ":"")+Q+");\n";
if(z) p+="runDestructors(destructors);\n"; else for(l=t?1:2; l<k.length; ++l) m=1 === l?"thisWired":"arg"+(l-2)+"Wired", null !== k[l].N && (p+=m+"_dtor("+m+"); // "+k[l].name+"\n", K.push(m+"_dtor"), q.push(k[l].N));
Va && (p+="var ret = retType.fromWireType(rv);\nreturn ret;\n");
K.push(p+"}\n");
k=Ya(K).apply(null,q);
l=b-1;
if(!e.hasOwnProperty(h)) throw new Pa("Replacing nonexistant public symbol");
void 0 !== e[h].M && void 0 !== l?e[h].M[l]=k:(e[h]=k, e[h].S=l);
return []
})
},c:function(a,b,c,d,f){
function g(p){
return p
}
b=
P(b);
-1 === f && (f=4294967295);
var n=Ia(c);
if(0 === d){
var h=32-8*c;
g=function(p){
return p << h >>> h
}
}
var k=b.includes("unsigned");
U(a,{
name:b,fromWireType:g,toWireType:function(p,q){
if("number" !== typeof q && "boolean" !== typeof q) throw new TypeError('Cannot convert "'+Ua(q)+'" to '+this.name);
if(q<d || q>f) throw new TypeError('Passing a number "'+Ua(q)+'" from JS side to C/C++ side to an argument of type "'+b+'", which is outside the valid range ['+d+", "+f+"]!");
return k?q >>> 0:q | 0
},argPackAdvance:8,readValueFromPointer:ib(b,
n,0 !== d),N:null
})
},b:function(a,b,c){
function d(g){
g>>=2;
var n=J;
return new f(sa,n[g+1],n[g])
}
var f=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][b];
c=P(c);
U(a,{name:c,fromWireType:d,argPackAdvance:8,readValueFromPointer:d},{T:!0})
},p:function(a,b){
b=P(b);
var c="std::string" === b;
U(a,{
name:b,fromWireType:function(d){
var f=J[d >> 2];
if(c) for(var g=d+4,n=0; n<=f; ++n){
var h=d+4+n;
if(n == f || 0 == F[h]){
if(g){
var k=g;
var p=F,q=k+(h-g);
for(g=k; p[g] && !(g>=q);) ++g;
if(16<g-k && p.subarray && ia) k=ia.decode(p.subarray(k,g)); else{
for(q=""; k<g;){
var m=p[k++];
if(m & 128){
var t=p[k++] & 63;
if(192 == (m & 224)) q+=String.fromCharCode((m & 31) << 6 | t); else{
var z=p[k++] & 63;
m=224 == (m & 240)?(m & 15) << 12 | t << 6 | z:(m & 7) << 18 | t << 12 | z << 6 | p[k++] & 63;
65536>m?q+=String.fromCharCode(m):(m-=65536, q+=String.fromCharCode(55296 | m >> 10,56320 | m & 1023))
}
}else q+=String.fromCharCode(m)
}
k=q
}
}else k="";
if(void 0 === l) var l=k; else l+=String.fromCharCode(0), l+=k;
g=h+1
}
} else{
l=Array(f);
for(n=0; n<f; ++n) l[n]=String.fromCharCode(F[d+
4+n]);
l=l.join("")
}
X(d);
return l
},toWireType:function(d,f){
f instanceof ArrayBuffer && (f=new Uint8Array(f));
var g="string" === typeof f;
g || f instanceof Uint8Array || f instanceof Uint8ClampedArray || f instanceof Int8Array || T("Cannot pass non-string to std::string");
var n=(c && g?function(){
for(var p=0,q=0; q<f.length; ++q){
var m=f.charCodeAt(q);
55296<=m && 57343>=m && (m=65536+((m & 1023) << 10) | f.charCodeAt(++q) & 1023);
127>=m?++p:p=2047>=m?p+2:65535>=m?p+3:p+4
}
return p
}:function(){
return f.length
})(),h=rb(4+n+1);
J[h >>
2]=n;
if(c && g) ja(f,h+4,n+1); else if(g) for(g=0; g<n; ++g){
var k=f.charCodeAt(g);
255<k && (X(h), T("String has UTF-16 code units that do not fit in 8 bits"));
F[h+4+g]=k
} else for(g=0; g<n; ++g) F[h+4+g]=f[g];
null !== d && d.push(X,h);
return h
},argPackAdvance:8,readValueFromPointer:Ta,N:function(d){
X(d)
}
})
},l:function(a,b,c){
c=P(c);
if(2 === b){
var d=la;
var f=na;
var g=oa;
var n=function(){
return ma
};
var h=1
}else 4 === b && (d=pa, f=qa, g=ra, n=function(){
return J
}, h=2);
U(a,{
name:c,fromWireType:function(k){
for(var p=J[k >> 2],
    q=n(),m,t=k+4,z=0; z<=p; ++z){
var l=k+4+z*b;
if(z == p || 0 == q[l >> h]) t=d(t,l-t), void 0 === m?m=t:(m+=String.fromCharCode(0), m+=t), t=l+b
}
X(k);
return m
},toWireType:function(k,p){
"string" !== typeof p && T("Cannot pass non-string to C++ string type "+c);
var q=g(p),m=rb(4+q+b);
J[m >> 2]=q >> h;
f(p,m+4,q+b);
null !== k && k.push(X,m);
return m
},argPackAdvance:8,readValueFromPointer:Ta,N:function(k){
X(k)
}
})
},C:function(a,b){
b=P(b);
U(a,{
V:!0,name:b,argPackAdvance:0,fromWireType:function(){
},toWireType:function(){
}
})
},s:function(a,
             b,c){
a=Y(a);
b=jb(b,"emval::as");
var d=[],f=W(d);
H[c >> 2]=f;
return b.toWireType(d,a)
},i:function(a,b,c,d,f){
a=lb[a];
b=Y(b);
c=Z(c);
var g=[];
H[d >> 2]=W(g);
return a(b,c,g,f)
},m:function(a,b,c,d){
a=lb[a];
b=Y(b);
c=Z(c);
a(b,c,null,d)
},a:Sa,k:function(a){
if(0 === a) return W(mb());
a=Z(a);
return W(mb()[a])
},e:function(a,b){
b=ob(a,b);
for(var c=b[0],d=c.name+"_$"+b.slice(1).map(function(p){
return p.name
}).join("_")+"$",f=["retType"],g=[c],n="",h=0; h<a-1; ++h) n+=(0 !== h?", ":"")+"arg"+h, f.push("argType"+h), g.push(b[1+
h]);
d="return function "+La("methodCaller_"+d)+"(handle, name, destructors, args) {\n";
var k=0;
for(h=0; h<a-1; ++h) d+="    var arg"+h+" = argType"+h+".readValueFromPointer(args"+(k?"+"+k:"")+");\n", k+=b[h+1].argPackAdvance;
d+="    var rv = handle[name]("+n+");\n";
for(h=0; h<a-1; ++h) b[h+1].deleteObject && (d+="    argType"+h+".deleteObject(arg"+h+");\n");
c.V || (d+="    return retType.toWireType(destructors, rv);\n");
f.push(d+"};\n");
a=Ya(f).apply(null,g);
return nb(a)
},n:function(a){
a=Z(a);
return W(e[a])
},
t:function(a,b){
a=Y(a);
b=Y(b);
return W(a[b])
},g:function(a){
4<a && (V[a].R+=1)
},D:function(){
return W([])
},d:function(a){
return W(Z(a))
},r:function(){
return W({})
},h:function(a){
Za(V[a].value);
Sa(a)
},f:function(a,b,c){
a=Y(a);
b=Y(b);
c=Y(c);
a[b]=c
},j:function(a,b){
a=jb(a,"_emval_take_value");
a=a.readValueFromPointer(b);
return W(a)
},z:function(){
C()
},x:function(a,b,c){
F.copyWithin(a,b,b+c)
},y:function(){
C("OOM")
}
};
(function(){
function a(f){
e.asm=f.exports;
fa=e.asm.E;
sa=f=fa.buffer;
e.HEAP8=I=new Int8Array(f);
e.HEAP16=G=new Int16Array(f);
e.HEAP32=H=new Int32Array(f);
e.HEAPU8=F=new Uint8Array(f);
e.HEAPU16=ma=new Uint16Array(f);
e.HEAPU32=J=new Uint32Array(f);
e.HEAPF32=ta=new Float32Array(f);
e.HEAPF64=ua=new Float64Array(f);
L=e.asm.H;
wa.unshift(e.asm.F);
M--;
e.monitorRunDependencies && e.monitorRunDependencies(M);
0 == M && (null !== Aa && (clearInterval(Aa), Aa=null), N && (f=N, N=null, f()))
}
function b(f){
a(f.instance)
}
function c(f){
return Ea().then(function(g){
return WebAssembly.instantiate(g,
d)
}).then(f,function(g){
D("failed to asynchronously prepare wasm: "+g);
C(g)
})
}
var d={a:sb};
M++;
e.monitorRunDependencies && e.monitorRunDependencies(M);
if(e.instantiateWasm) try{
return e.instantiateWasm(d,a)
}catch(f){
return D("Module.instantiateWasm callback failed with error: "+f), !1
}
(function(){
return E || "function" !== typeof WebAssembly.instantiateStreaming || Ba() || O.startsWith("file://") || "function" !== typeof fetch?c(b):fetch(O,{credentials:"same-origin"}).then(function(f){
return WebAssembly.instantiateStreaming(f,
d).then(b,function(g){
D("wasm streaming compile failed: "+g);
D("falling back to ArrayBuffer instantiation");
return c(b)
})
})
})();
return {}
})();
e.___wasm_call_ctors=function(){
return (e.___wasm_call_ctors=e.asm.F).apply(null,arguments)
};
var rb=e._malloc=function(){
return (rb=e._malloc=e.asm.G).apply(null,arguments)
};
e._main=function(){
return (e._main=e.asm.I).apply(null,arguments)
};
var gb=e.___getTypeName=function(){
return (gb=e.___getTypeName=e.asm.J).apply(null,arguments)
};
e.___embind_register_native_and_builtin_types=function(){
return (e.___embind_register_native_and_builtin_types=e.asm.K).apply(null,arguments)
};
var X=e._free=function(){
return (X=e._free=e.asm.L).apply(null,arguments)
},tb;
function da(a){
this.name="ExitStatus";
this.message="Program terminated with exit("+a+")";
this.status=a
}
N=function ub(){
tb || vb();
tb || (N=ub)
};
function vb(){
function a(){
if(!tb && (tb= !0, e.calledRun= !0, !ha)){
Fa(wa);
Fa(xa);
if(e.onRuntimeInitialized) e.onRuntimeInitialized();
if(wb){
var b=e._main;
try{
var c=b(0,0);
if(!(noExitRuntime || 0<ea)){
if(e.onExit) e.onExit(c);
ha= !0
}
v(c,new da(c))
}catch(d){
d instanceof da || "unwind" == d || ((b=d) && "object" === typeof d && d.stack && (b=[d,d.stack]), D("exception thrown: "+b), v(1,d))
}finally{
}
}
if(e.postRun) for("function" == typeof e.postRun && (e.postRun=[e.postRun]); e.postRun.length;) b=e.postRun.shift(), ya.unshift(b);
Fa(ya)
}
}
if(!(0<M)){
if(e.preRun) for("function" == typeof e.preRun && (e.preRun=[e.preRun]); e.preRun.length;) za();
Fa(va);
0<M || (e.setStatus?(e.setStatus("Running..."), setTimeout(function(){
setTimeout(function(){
e.setStatus("")
},1);
a()
},1)):a())
}
}
e.run=vb;
if(e.preInit) for("function" == typeof e.preInit && (e.preInit=[e.preInit]); 0<e.preInit.length;) e.preInit.pop()();
var wb=!0;
e.noInitialRun && (wb= !1);
vb();
