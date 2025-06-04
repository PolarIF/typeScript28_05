let notas: number[] = [10, 8, 7, 9, 6];

notas.forEach(n => console.log("Notas:", n));

let notasAjustadas: number[] = notas.map(n => n + 1);

let aprovados: number[] = notas.filter(n => n >= 6);

notas.push(5);
notas.pop();