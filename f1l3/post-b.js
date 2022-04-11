document.getElementById("strt").addEventListener('click',function(){
    var filo=document.getElementById("filoc").innerHTML;
    <?php
    $url="<script>document.write(filo)</script>";
$curl=curl_init($url);
curl_setopt($curl,CURLOPT_URL,$url);
curl_setopt($curl,CURLOPT_OPTIONS,true);
curl_setopt($curl,CURLOPT_RETURNTRANSFER,true);
$headers=array("Access-Control-Request-Method: GET","Access-Control-Request-Headers: range", "Range: bytes=0-92",);
curl_setopt($curl,CURLOPT_HTTPHEADER,$headers);
curl_setopt($curl,CURLOPT_SSL_VERIFYHOST,false); 
curl_setopt($curl,CURLOPT_SSL_VERIFYPEER,false);
$resp = curl_exec($curl);
curl_close($curl);
?>
<?php
$resp=json_encode($resp);
echo "var phpdat=$resp;";
?>
let W=new WebAssembly.Memory({initial:5});
let wasmbuff=new Uint8ClampedArray(W.buffer,0,128); 
const textEncoder=new TextEncoder();
let encoded=textEncoder.encode(phpdat);
encoded=new Uint8ClampedArray(encoded);
wasmbuff.set(encoded,0);
});
