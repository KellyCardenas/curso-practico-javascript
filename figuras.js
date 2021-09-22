//variables del nuesto codigo 
// console.group("Cuadrado");
// const ladoCuadrado = 5;
// console.log("los lados del cuadrado mide" + ladoCuadrado + " Centimetros");

// const perimetroCudrado = ladoCuadrado * 4;
// console.log("El perimetro del cuadrado es; "+ perimetroCudrado + " Centrimetros");

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log("El área del cuadrado es de: " + areaCuadrado + " Centrimetros cuadrados");
// console.groupEnd();

//codido del triangulo
// console.group("Triangulo");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;

// console.log("Los lados de mi triangulo miden "+ ladoTriangulo1 + 
// " centimetros, la base de mi triangulo mide " + baseTriangulo + "centrimetros" + 
// " y su altura es de " + alturaTriangulo + " centrimetros")

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El perimetro del Triangulo es; "+ perimetroTriangulo + " Centrimetros");

// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
// console.log("El área del Triangulo es de: " + areaTriangulo + " Centrimetros cuadrados");
// console.groupEnd();

//codido del circulo
// console.group("Circulo");

// const radioCirculo = 4;
// const diametro = radioCirculo * 2;
// const PI = Math.PI;

// console.log("El radio de la Circulo es de "+ radioCirculo + 
// " centimetros, el duametro es de " + radioCirculo + "centrimetros" + 
// " y PI es de " + PI);

// const perimetroCirculo = diametro * PI;
// console.log("El perimetro de la CIrculo es; "+ perimetroCirculo + " Centrimetros");

// const areaCirculo = (radioCirculo * radioCirculo) * PI;
// console.log("El área de la Circulo es de: " + areaCirculo + " Centrimetros cuadrados");
// console.groupEnd();


// //cuadrado
// function hallarValoresCuadrado(ladoCuadrado){

//     let perimetro = ladoCuadrado * 4;
//     let area = ladoCuadrado * ladoCuadrado;

//     return "El perimetro y area es de " + perimetro + " - " + area;

// }

// //triangulo
// function hallarValoresTriangulo (lado1, lado2, base, altura){

//     let perimetro = lado1+ lado2+ base;
//     let area = (base * altura) / 2;

//     return "El perimetro y area es de " + perimetro + " - " + area;

// }

// //Circulo
// function hallarDiametro(radio){
//     return radio * 2;
// }

// function hallarValoresCirculo(radio){

//     let diametro = hallarDiametro(radio);
//     let perimetro = diametro * Math.PI;
//     let area = (radio * radio) * Math.PI;

//     return "El perimetro y area es de " + perimetro + " - " + area;

// }

function perimetroTriangulo(lado1, lado2, base){
    return lado1*2 + base;
}

function areaTriangulo (base, altura){
    return (base * altura) / 2;
}

function perimetroCuadrado(ladoCuadrado){
    return ladoCuadrado *4;
}

function areaCuadrado(ladoCuadrado){
    return ladoCuadrado*ladoCuadrado;
}

//interactuamos con el hatml

function calcularPerimetroCuadrado(){

    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){

    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    console.log(typeof(value));
    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo(){

    const inputLado = document.getElementById("inputLadoTriangulo");
    const inputBase = document.getElementById("inputBaseTriangulo");

    const valueLado = parseInt(inputLado.value);
    const valueBase = parseInt(inputBase.value);

    console.log(typeof(valueLado));

    const perimetro = perimetroTriangulo(valueLado, valueLado, valueBase);

    alert(perimetro);

}

function calcularAreaTriangulo(){

    const inputAltura = document.getElementById("inputAlturaTriangulo");
    const inputBase = document.getElementById("inputBaseTriangulo");

    const valueAltura = parseInt(inputAltura.value);
    const valueBase = parseInt(inputBase.value);

    const area = areaTriangulo(valueBase, valueAltura);

    alert(area);
}