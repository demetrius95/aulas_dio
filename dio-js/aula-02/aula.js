const numero = 0;

const numeroPar = (numero % 2) === 0;

if (numero === 0) {
    console.log('O número informado é inválido.')
} else if (numeroPar){
    console.log('Par')
} else {
    console.log('Ímpar')
}

