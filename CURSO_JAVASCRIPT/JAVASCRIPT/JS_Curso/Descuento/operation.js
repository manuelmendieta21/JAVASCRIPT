

function CalcularDescuento(){
    const input1 = document.getElementById("valorProducto");
    const precioTotal = input1.value;
    const input2 = document.getElementById("porcentajeDescuento");
    const descuento = input2.value;
    const PorcentajeDescuento = parseInt((precioTotal * descuento)/100);
    const PrecioDescuento = precioTotal-PorcentajeDescuento;
    alert (PrecioDescuento);
    /*console.log({
        precioTotal,
        descuento,
        PorcentajeDescuento,
        PrecioDescuento,
    })*/
    const resultadoP = document.getElementById("resulP");
    resultadoP.innerText= 'El precio con el  descuento es: $'+ PrecioDescuento;
}

let cupones =[
    {
        id: 1,
        codigo:'axc532',
        name:'Descuento1',
        porcentaje: 5
    },
    {
        id: 2,
        codigo:'des530',
        name:'Descuento2',
        porcentaje:10
    },
    {
        id: 3,
        codigo:'sup531',
        name:'Descuento3',
        porcentaje:20
    }
]

const productos=[
    {
        id:1,
        name:'Iphone',
        valor:4500000 
    },
    {
        id:2,
        name:'Ipad',
        valor:1900000
    },
    {
        id:3,
        name:'Homepod',
        valor:540000
    },
    {
        id:4,
        name:'AppleWacht',
        valor:1600000
    },
    {
        id:5,
        name:'Macbook',
        valor:6000000
    },
]

function productoCupon(){
    const producto = document.getElementById("producto"); 
    const selec = producto.value;
    const cupon = document.getElementById("codCupon");
    const cupones =cupon.value;
    console.log(selec);
    console.log(cupones);
    //for(var i=selec in productos){
    //    console.log(productos[i]);
    //}

    Object.entries(productos).forEach(([key, velue]) => {
        console.log(value)
      });
}

/*
function returnProducto(){
    for (let i=0; i<=selectProduct ; i++){
        if(selectProduct==0){
        alert('No ha seleccionado Producto')}
        else if(i==selectProduct){
            //console.log(productos[i].name);
            const nombre = (productos[i].name);
            return nombre;
            //console.log(productos[i].valor);
            const produ =(productos[i].valor);
            return produ;
            //console.log(produ);
        }
        else{
            
        }
        
    }
    }
    */
