function encriptar(){
   var texto = document.querySelector("textarea").value
   var a = texto.replace(/e/g,"enter")
   var b = a.replace(/i/g,"imes")
   var c = b.replace(/a/g,"ai")
   var d = c.replace(/o/g,"ober")
   var e = d.replace(/u/g,"ufat")
   document.getElementById("mostrar").innerHTML = e
}

function desencriptar(){
   var texto = document.querySelector("textarea").value
   var a = texto.replace(/enter/g,"e")
   var b = a.replace(/imes/g,"i")
   var c = b.replace(/ai/g,"a")
   var d = c.replace(/ober/g,"o")
   var e = d.replace(/ufat/g,"u")
   document.getElementById("mostrar").innerHTML = e
   
}