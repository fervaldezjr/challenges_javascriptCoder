let numero = Number(prompt("Introduce un número para averiguar su tabla de múltiplicación"));

for(i=1; i <= 10; i++) {
    if(numero === numero && numero !== 0) {
        console.log(numero + ' x ' + i + ' = ' + (numero * i))
    } else {
        console.log('Error! Has introducido otro tipo de dato')
        break
    }
};