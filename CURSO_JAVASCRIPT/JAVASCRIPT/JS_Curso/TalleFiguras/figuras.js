 /*Calcular Cuadrado */
function perimetroCuadrado(lado){
    return lado * 4 ;
}
function AreaCuadrado(areaCuadra){
    return areaCuadra * areaCuadra; 
} 

/*Calcular Triangulo */
function perimetroTriangulo(aTriangulo){
    return aTriangulo =  parseInt(aTriangulo) + parseInt(aTriangulo)+ parseInt(aTriangulo);
}
function areaTriangulo(aTriangulo){
    return aTriangulo = aTriangulo * 2;
    
} 

/*Funtion diametro Circulo*/
function calcularAreaCirculo(areaCirculo){
    return areaCirculo=parseInt(areaCirculo*2);
}

function perimetroCirculo(pCirculo){
    const pi= Math.PI;
    
    return pCirculo = parseInt(pCirculo*pi);
}

/*Calcular Cuadrado */

function CalcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro)
}

function CalcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const areaCuadrado = AreaCuadrado(value)
    alert(areaCuadrado)
}

/*Calcular Triangulo */
function CalcularAreaTriangulo(){
    const input = document.getElementById("InputBaseT");
    const value  = input.value
    const input2 = document.getElementById("InputAlturaT");
    const value1 = input2.value
    const valor =((value * value1)/2)
    const aTriangulo = areaTriangulo(valor)
    alert(aTriangulo)    
}

function CalcularPerimetroTriangulo(){
    const input = document.getElementById("InputTriangulo");
    const value = input.value;
    const pTriangulo = perimetroTriangulo(value)
    alert(pTriangulo)
}

function CalcularAreaCirculo(){
    const input = document.getElementById("InputRadioC");
    const value = input.value;
    const areaCirculo = calcularAreaCirculo(value)
    alert(areaCirculo)
}
/*Calcular Circulo*/
function CalcularPerimetroCirculo(){
    const input =document.getElementById("InputRadioC");
    const value1 = input.value;
    const Perimetro = perimetroCirculo(value1)
    alert(Perimetro)
}
