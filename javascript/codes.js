let objeto;
let cuotas;
const celular=20000;
const licuadora=5000;
const TV=40000;
let coste=0;
while(objeto!="no") {
    objeto= prompt("¿Que le gustaria comprar?: celular ($20000), licuadora ($5000), TV ($40000). (Escribir 'no' si no quiere comprar mas)")
function sumar(valor1, valor2) {
    coste= valor1 + valor2}
switch (objeto) {
case "celular":sumar(coste,celular);
alert("el coste total es $" + coste)
break;
case "licuadora": sumar(coste,licuadora);
alert("el coste total es $" + coste)
break;
case "TV": sumar(coste,TV);
alert("el coste total es $" + coste)
break;}
}
cuotas=prompt("¿En cuantas cuotas le gustaria pagar?: 1, 3, 6 o 12")
function dividir(valor1, valor2){
    coste=valor1/valor2
}
switch (cuotas){
case "1":alert("Tiene que pagar $" + coste + " ahora")
break;
case "3":dividir(coste,3);
alert("Tiene que pagar $" + coste + " por 3 meses")
break;
case"6":dividir(coste,6);
alert("Tiene que pagar $" + coste + " por 6 meses")
break;
case "12":dividir(coste,12);
alert("Tiene que pagar $" + coste + " por 12 meses")
break;
}
