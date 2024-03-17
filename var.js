//variable

var whtBtn=document.getElementById("whtBtn");
var brnBtn=document.getElementById("brnBtn");
var aqaBtn=document.getElementById("aqaBtn");
var cholBtn=document.getElementById("cholBtn");
var pikBtn=document.getElementById("pikBtn");
var bluBtn=document.getElementById("bluBtn");
var gldBtn=document.getElementById("gldBtn");
var grnBtn=document.getElementById("grnBtn");
var wetBtn=document.getElementById("wetBtn");
var plmBtn=document.getElementById("plmBtn");
var redBtn=document.getElementById("redBtn");

var myBody=document.body;

var colorcode=document.getElementById("colorcode");
//variable styling
whtBtn.addEventListener("click",function(){
    document.body. style.background="white";
    colorcode.textContent='#FFFFFF';
})
brnBtn.addEventListener("click",function(){
    document.body. style.background="brown";
    colorcode.textContent='#A52A2A';
})
aqaBtn.addEventListener("click",function(){
    document.body. style.background="aqua";
    colorcode.textContent='#00FFFF';
})
cholBtn.addEventListener("click",function(){
    document.body. style.background="chocolate";
    colorcode.textContent='#D2691E';
})
pikBtn.addEventListener("click",function(){
    document.body. style.background="pink";
    colorcode.textContent='#FFC0CB';
})
bluBtn.addEventListener("click",function(){
    document.body. style.background="blue";
    colorcode.textContent='#0000FF';
})
gldBtn.addEventListener("click",function(){
    document.body. style.background="gold";
    colorcode.textContent='#FFD700';
})
grnBtn.addEventListener("click",function(){
    document.body. style.background="green";
    colorcode.textContent='#008000';
})
wetBtn.addEventListener("click",function(){
    document.body. style.background="wheat";
    colorcode.textContent='#F5DEB3';
})
plmBtn.addEventListener("click",function(){
    document.body. style.background="plum";
    colorcode.textContent='#DDA0DD';
})
redBtn.addEventListener("click",function(){
    document.body. style.background="red";
    colorcode.textContent='#FF0000';
})


