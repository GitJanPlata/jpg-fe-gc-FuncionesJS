// Función para calcular el área de un círculo
function areaCirculo(radio) {
    return Math.PI * Math.pow(radio, 2);
}

// Función para calcular el área de un triángulo
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

// Función para calcular el área de un cuadrado
function areaCuadrado(lado) {
    return Math.pow(lado, 2);
}

// Función principal para calcular el área
function calcularArea() {
    // Pedir al usuario la figura
    let figura = prompt("¿Qué figura quieres calcular? (circulo, triangulo, cuadrado)");

    if (figura === "circulo") {
        // Pedir al usuario el radio
        let radio = prompt("Introduce el radio del círculo");
        console.log("El área del círculo es " + areaCirculo(radio));
    } else if (figura === "triangulo") {
        // Pedir al usuario la base y la altura
        let base = prompt("Introduce la base del triángulo");
        let altura = prompt("Introduce la altura del triángulo");
        console.log("El área del triángulo es " + areaTriangulo(base, altura));
    } else if (figura === "cuadrado") {
        // Pedir al usuario el lado
        let lado = prompt("Introduce el lado del cuadrado");
        console.log("El área del cuadrado es " + areaCuadrado(lado));
    } else {
        console.log("Figura no reconocida. Por favor, introduce circulo, triangulo o cuadrado.");
    }
}

// Llamar a la función principal
calcularArea();