
    let cuotas;
    let coste=0;
    let costar=0;

    class productos{
        constructor(producto, precio, stock){
            this.producto= producto;
            this.precio= precio;
        }
    }



    let boton=document.querySelector(".btn7")
    boton.onclick =()=> {
    let objcomprados=sessionStorage.getItem("objects");

    Swal.fire({
        title: 'Compras',
        text: objcomprados,
})}


    let button1=document.querySelector(".btn8")
    button1.onclick =()=> {
        Swal.fire({
            title: '¿Seguro quiere vaciar el carrito?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Quiero vaciar el carrito',
            cancelButtonText: 'No quiero'
    
}).then((result) => {
    if(result.isConfirmed) {
        Swal.fire({
            title: 'Carrito vaciado',
            icon: 'success',
            
    })
sessionStorage.clear()
    box.textContent="Precio final: $0";
}
})}



    const producto1 = new productos ("celular",20000);
    const producto2 = new productos ("licuadora",5000);
    const producto3 = new productos ("TV",40000);
    const producto4 = new productos ("smartwatch",4000);
    const producto5 = new productos ("auriculares",6000);
    const producto6 = new productos ("webcam",3000);
    const compra = []
    
    function sumar(valor1, valor2) {
        coste= valor1 + valor2}

function objtssave (objects){
    let arrayobjects=JSON.parse(sessionStorage.getItem("objects")) || [];
    arrayobjects.push(objects);
    let objarray=JSON.stringify(arrayobjects);
    sessionStorage.setItem("objects", objarray)
    }
let objects=JSON.parse(sessionStorage.getItem("objects")) || ("");
for (let objeto of objects){
    costar=costar+objeto.precio
}
    let box=document.querySelector("#resp")
    box.textContent="Precio final: $" + costar;
    
    