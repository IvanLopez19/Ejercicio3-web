
function agregarestilo(a){
    a.style.cssText='width: 100%;background: rgb(100, 237, 107);display: flex;flex-direction: column;align-items: center;justify-content: space-between; padding: 2em;';
    a.getElementById("foto").style.cssText='width: 20em; height: 16em;';
}
window.onload= function(){
var btndia1= document.getElementById("btndia-1");
var btndia2= document.getElementById("btndia-2");
var btndia3= document.getElementById("btndia-3");
var btndia4= document.getElementById("btndia-4");
var btndia5= document.getElementById("btndia-5");

var a=document.getElementById("dia-1");
var b;

btndia1.addEventListener("click", function(){
    b=a;
    a=document.getElementById("dia-1");
    b.style.display="none";
    a.style.display="initial";
    agregarestilo(a);
    console.log(a.id);
});

btndia2.addEventListener("click", function(){
    b=a;
    a=document.getElementById("dia-2");
    b.style.display="none";
    a.style.display="initial";
    agregarestilo(a);
    console.log(a.id);
});

btndia3.addEventListener("click", function(){
    b=a;
    a=document.getElementById("dia-3");
    b.style.display="none";
    a.style.display="initial";
    agregarestilo(a);
    console.log(a.id);
});

btndia4.addEventListener("click", function(){
    b=a;
    a=document.getElementById("dia-4");
    b.style.display="none";
    a.style.display="initial";
    agregarestilo(a);
    console.log(a.id);
});

btndia5.addEventListener("click", function(){
    b=a;
    a=document.getElementById("dia-5");
    b.style.display="none";
    a.style.display="initial";
    agregarestilo(a);
    console.log(a.id);
});
}