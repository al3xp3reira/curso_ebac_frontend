//Funções de multiplicação e saudação
function multiplicacao(a: number, b: number): number {
    return a * b;
}

function saudacao(nome: string): string {
    return `Olá ${nome}`;
}

// Alimentando as funções
const resultadoMultiplicacao = multiplicacao(5, 3);
const mensagemSaudacao = saudacao("Alex");
console.log(resultadoMultiplicacao);
console.log(mensagemSaudacao);
