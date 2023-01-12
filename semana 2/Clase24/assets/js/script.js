//Conociendo el ciclo For
function saludar(){
   var nombre=document.getElementById("nombre").value;
var saludo="Hola";
for(var i=1;i<=3;i++){//i++ --> significa que el i se va incrementar en 1
    var mensaje=`${saludo} ${nombre} ${i}`;
    alert(mensaje);
} 
}

function saludar1(){
    var nombre=document.getElementById("nombre").value;
    var saludo=["Buenos días", "Buenas tardes","Buenas noches"];
    for(var i=0;i<saludo.length;i++){//i++ --> significa que el i se va incrementar en 1
    var mensaje=`${saludo[i]} ${nombre}`;
    alert(mensaje);
    }  

}