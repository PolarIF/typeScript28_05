function saudacao(nome: string): string {
    return `Olá, ${nome}!`;
}

console.log(saudacao("João"));

const soma = (a: number, b: number): number => a + b;
console.log(soma(5, 10));

function mensagem(texto: string = 'bem vindo'): void {
    console.log(texto);
} 


function apresentar(nome?: string){
    if (nome) {
        console.log(`Olá, ${nome}!`);
    } else {
        console.log("Olá, visitante!");
    }
}