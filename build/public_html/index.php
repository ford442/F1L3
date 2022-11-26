<head>
<meta name="theme-color" content="#000000"/>
</head>
<link rel="preconnect" href="https://js.1ink.us">
<link rel="preconnect" href="https://css.1ink.us">
<link rel="preconnect" href="https://wasm.noahcohn.com">
<title>F*1*L*3 Part A</title>
<script type="text/javascript" charset="UTF-8" src="https://js.1ink.us/slideout16.min.1ijs"></script>
<script type="text/javascript" charset="UTF-8" src="https://js.1ink.us/rSlider16.min.1ijs"></script>
<link rel="stylesheet" href="https://css.1ink.us/b3hd16.1iss">
<link rel="stylesheet" href="https://css.1ink.us/rSlider16.min.1iss">
<body>
<nav id="menu">
<section class="menu-section" id="menu-sections">B*3*H*D
*******
TIMESLIDER
<ul class="menu-section-list">
<div style="width: 384px;text color: black;">
<div id="slideframe">
<input type="text" id="timeslider"/>
</div></div></ul></section></nav>
<main id="panel">
<iframe src="./bezz.htm" style="border-width:0px;position:absolute;top:0px;left:0px;right:0px;bottom:0px;overflow:hidden;z-index:999996;display:block;overflow-y:hidden;overflow-x:hidden;" id="circle" title="Mask"></iframe><input type="checkbox" id="di" hidden/>
<input type="button" id="filb" style="background-color: green;position: absolute;display: block;left: 50%;top: 35%;z-index: 999998;border:5px solid #e7e7e7;border-radius:50%;" onclick="document.getElementById('di').click();"></input>
<input type="button" id="fil" style="background-color: red;position: absolute;display: block;left: 50%;top: 42%;z-index: 999998;border:5px solid #e7e7e7;border-radius:50%;" onclick="document.getElementById('di').click();"></input>
<input type="button" id="btn" style="background-color: green;position: absolute;display: block;left: 5%;top: 50%;z-index: 999997;border:5px solid #e7e7e7;border-radius:50%;" onclick="document.getElementById('di').click();"></input>
<div id="iwid" hidden></div>
<div id="ihig" hidden></div>
<div id="wid" hidden></div>
<div id="hig" hidden></div>
<div id="tim" hidden>4500</div>
<div id="ihid" hidden></div>
<div id="shut" hidden>1</div>
<div id="strt" hidden></div>
<div id="chnkaO" hidden></div>
<div id="chnkaE" hidden></div>
<div id="filsi" hidden>375</div>
<div id="filoc" hidden>https://test.1ink.us/f1l3/test.txt</div>
<div id="wrapper">
<div class="px-video-container" id="myvid">
<div class="px-video-wrapper" id="wrap">
<div id="cp" class="bh"></div>
<div id="fils" style="position:absolute;top:30vh;left:50vh;" value="375"></div><br>
<input type="url" id="filoc" value="https://test.1ink.us/f1l3/test.txt" style="color: red;position: absolute;display: block;left: 40%;top: 42%;z-index: 999992;"></input>
<div style="background-color:green;color:white;position: absolute;display: block;left: 50%;top: 33%;z-index: 999992;" id="display">Clicking will open more than one tab.
<br>
</div>
</div></div></div></main>
<script>
let $vs,$so,mil,sfr,slo,tsl,tem,dat,datb,a,ss,hms,$hg,slt,$ll,$h,he,wi,adr,hi,r$,$w,$r,$nv,$hi,$lt,rnum,$sc,$rn,$ls,lo,mv,vide,$nm,$rm;
tem=document.getElementById("tim");
ban=document.getElementById("btn");
sfr=document.getElementById("slideframe");
function grab$lt(){
$lt=tem.innerHTML;
$lt=Math.round($lt);}
grab$lt();
slo=new Slideout({"panel":document.getElementById("panel"),"menu":document.getElementById("menu"),"padding":384,"tolerance":70,"easing":"cubic-bezier(.32,2,.55,.27)"});
ban.addEventListener("click",function(){slo.toggle();sfr.innerHTML="";
setTimeout(function(){
grab$lt();
slt=$lt/1000;
slt=Math.round(slt);
sfr.innerHTML='<input type='+'"te'+'xt" id'+'="time'+'slider"/'+'>';
tsl=new rSlider({
target:"#timeslider",
values:{min:1,max:18},
step:[0.5],
labels:false,
tooltip:true,
scale:false,});
grab$lt();
slt=($lt/1000);
slt=Math.round(slt);
tsl.setValues(slt);
document.getElementById("menu").addEventListener("click",function(){
$ll=tsl.getValue();
$ll=Math.round($ll);
$ll=($ll*1000);
tem.innerHTML=$ll;});
setTimeout(function(){
slt=tem.innerHTML;},8);},16);});
hi=window.innerHeight;
wi=window.innerWidth;
hi=Math.round(hi);
document.getElementById("ihid").innerHTML=hi;
r$=(wi/he)*1000;
r$=Math.round(r$);
r$=r$/1000;
$h=window.innerHeight;
$h=Math.round($h);
$w=$h*r$;
dat=document.getElementById("ihid");
datb=document.getElementById("ihig");
$hg=hi+"px";
document.getElementById("ihig").innerHTML=$h;
$w=Math.round($w);
document.getElementById("iwid").innerHTML=$w;
document.getElementById("wrap").style.lineheight=$hg;
document.getElementById("wrap").style.height=$hg;
document.getElementById("circle").height=hi;
document.getElementById("circle").width=wi;
</script>
<script charset="UTF-8" async src="./f1a.js"></script>
<script src="./post-f.js"></script>
</body>
