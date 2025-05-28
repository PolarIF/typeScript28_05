let a: number = 10;
let b: number = 14;

console.log('Soma:', a + b);
console.log('Subtração:', a - b);
console.log('Multiplicação:', a * b);
console.log('Divisão:', a / b);
console.log('Módulo:', a % b);

//relacionais
console.log('Maior que:', a > b);
console.log('Menor que:', a < b);
console.log('Igual a:', a === b);
console.log('Diferente de:', a != b);
console.log('Maior ou igual a:', a >= b);
console.log('Menor ou igual a:', a <= b);

//identidade restrita
console.log('Identidade restrita:', a === b);
console.log('Não identidade restrita:', a !== b);

//lógicos
let x: boolean = true;
let y: boolean = false;

console.log('AND', x && y);
console.log('OR', x || y);
console.log('NOT', !x);

//operador condicional ternário
let idade: number = 18;
let podeDirigir: string = idade >= 18 ? 'Pode dirigir' : 'Não pode dirigir';