// Configuración de estilo: fondo negro y letras blancas (estética Marien)
const cancion = [
    "Debo interpretar tus gritos, tus llamadas...",
    "Tus caricias entrecortadas",
    "Y tu arranques de pasión...",
    "Debo llegar al fondo de este desparpajo.",
    "Que yo de esta no me rajo...",
    "Hasta domar tu corazón..."
];

function mostrarLetra(lineas, indice = 0) {
    if (indice < lineas.length) {
        let texto = lineas[indice];
        let i = 0;
        
        // Efecto de máquina de escribir para cada línea
        let intervalo = setInterval(() => {
            process.stdout.write(texto[i]);
            i++;
            if (i === texto.length) {
                clearInterval(intervalo);
                console.log("\n"); // Espacio para la siguiente línea
                setTimeout(() => mostrarLetra(lineas, indice + 1), 1000); // Pausa entre versos
            }
        }, 100); // Velocidad de las letras
    } else {
        console.log("*******************************");
        console.log("* Fin de la reproducción    *");
        console.log("*******************************");
    }
}

console.log("*******************************");
console.log("* Joseán Log - REPRODUCIENDO  *");
console.log("*******************************\n");

mostrarLetra(cancion);