// tipos Type Script

let text: string = 'Olá, Mundo!';
let number: number = 42;
let isTrue: boolean = true;

let numeros: number[] = [1, 2, 3, 4, 5];
let palavras: Array<string> = ['Olá', 'Mundo', 'TypeScript'];

let pessoas: [string, number][] = [
  ['João', 30],
  ['Maria', 25],
  ['Pedro', 40]
];

enum Cores {
  Vermelho = 'Vermelho',
  Verde = 'Verde',
  Azul = 'Azul'
}

let coresFavoritas: Cores = Cores.Vermelho

let dadoAleatorio: any = 5;
dadoAleatorio = 'Agora sou uma string';
dadoAleatorio = true;

let desconhecidos: unknown = 'Isso é desconhecido';
let desconhecido: unknown = 42;
let desconhecidoidade: unknown = true;

function mostrarAlerta(mensagem: string): void {
  console.log(mensagem);
}

let nada: null = null;
let indefinido: undefined = undefined;

function erroFatal(mensagem: string): never {
  throw new Error(mensagem);
}

type Usuario = {
    nome: string;
    idade: number;
    email?: string; // Propriedade opcional
    };

let usuario1 : Usuario = {
    nome: 'Ana',
    idade: 28,
    email: 'ana@example.com'
};