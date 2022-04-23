let objeto;
let cuotas;
let coste=0;


class productos{
    constructor(producto, precio, stock){
        this.producto= producto;
        this.precio= precio;
        this.stock= stock;
    }
}
const producto1 = new productos ("celular",20000,"6");
const producto2 = new productos ("licuadora",5000,"4");
const producto3 = new productos ("TV",40000,"7");
const producto4 = new productos ("smartwatch",4000,"10");
const producto5 = new productos ("auriculares",6000,"5");
const producto6 = new productos ("webcam",3000,"9");
const compra = []

while(objeto!="no") {
    objeto= prompt("¿Que le gustaria comprar?:\n celular ($20000)\n licuadora ($5000)\n TV ($40000)\n smartwatch ($4000)\n auriculares ($6000)\n webcam($3000).\n(Escribir 'no' si no quiere comprar mas)")
function sumar(valor1, valor2) {
    coste= valor1 + valor2}
switch (objeto) {
case "celular":sumar(coste,producto1.precio);
compra.push(producto1.producto)
break;
case "licuadora": sumar(coste,producto2.precio);
compra.push(producto2.producto)
break;
case "TV": sumar(coste,producto3.precio);
compra.push(producto3.producto)
break;
case "smartwatch":sumar(coste,producto4.precio);
compra.push(producto4.producto)
break;
case "auriculares":sumar(coste,producto5.precio);
compra.push(producto5.producto)
break;
case "webcam":sumar(coste,producto6.precio);
compra.push(producto6.producto)
break;}
}



if (compra.lenght > 2, compra.find((el)=> el=="TV") ) 
 {coste=coste*0.8
    alert("Felicidades por comprar mas de 2 productos usted recibio un 20% de descuento en: "  + compra.join(", ") + " y el coste final es de $" + coste)
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
    alert("Tiene que pagar $" + coste+ " por 12 meses")
    break;
    }

}
else
{
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
}
let box=document.querySelector("#resp")
let boton=document.querySelector("#btn1")
boton.onclick =()=> {sumar(coste,producto1.precio);
    box.textContent="Precio final: $" + coste;}
    





