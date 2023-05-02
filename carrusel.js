
function activarMiCarrusel(carrusel, tiempo){
    var children = document.getElementById(carrusel).getElementsByTagName('img');
    var long= children.length;
    for(var i=0; i<long; i++){
        children[i].style="display:none";
    }
    for(var i=0; i< long; i++){
        setInterval(()=>{
        console.log(i);
        ocultar(children, i);
        children[i].style="display:block";
    }, tiempo);
 }
 }

 function ocultar(children, i){
 children[i-1].style="display:none";
 }








