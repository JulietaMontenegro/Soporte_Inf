var contador=0;
var children;
function activarMiCarrusel(carrusel, tiempo){
    children = document.getElementById(carrusel).getElementsByTagName('img');
    var long= children.length;
    for(var i=0; i<long; i++){
        children[i].style="display:none";
    }
    
        setInterval(mostrar, tiempo);
   
 }

 function ocultar(children, i){
 children[i].style="display:none";
 }
 function mostrar(){
        console.log(contador);
        ocultar(children, contador);
        children[contador].style="display:none";
        contador=contador+1;
        if(contador == children.length){
            contador=0;
        }
        children[contador].style="display:block";
    
 }
 function anterior(){
    ocultar(children, contador);
    children[contador].style="display:none";
        contador=contador-1;
        if(contador-1 < 0){
            contador=children.length-1;
        }
        children[contador].style="display:block";
 }

 function siguiente(){
    ocultar(children, contador);
    children[contador].style="display:none";
        contador=contador+1;
        if(contador+1 > children.length){
            contador=0;
        }
        children[contador].style="display:block";
 }









