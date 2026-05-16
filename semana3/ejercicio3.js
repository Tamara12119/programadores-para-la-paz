const IVA = 0.19;
let precio = 1000; // mil de pan
precio = precio + 2000; // dos mil de huevo
precio = precio + 1000; // mil de leche
precio = precio + 500; // quinientos de azucar
precio = precio + 1000; // mil de harina
precio = precio + 1000; // mil de aceite
precio = precio + 1000; // mil de sal
precio = precio + 1000; // mil de harina
precio = precio + 1000; // mil de aceite
precio = precio + 1000; // mil de mermelada 
precio = precio + 1000; // mil de mantequilla
precio = precio + 1000; // mil de margarina
precio = precio + 1000; // mil de queso
precio = precio + 1000; // mil de leche condensada
precio = precio + 1000; // mil de leche en polvo
precio = precio + 1000; // mil de leche de coco
precio = precio + 1000; // mil de leche de almendras
precio = precio + 1000; // mil de leche de soya
precio = precio + 1000; // mil de leche de avena

console.log("El precio total es de", precio);
console.log("El IVA es de", IVA);
let precioConIVA = precio + (precio * IVA);
console.log("El precio con IVA es de", precioConIVA);
