const notas = [
  20,
  20,
  10,
  12,
  13,
  "10",
  "11",
  "33",
  "22",
  "3",
  0,
  2,
  4,
  0,
  88,
  191,
];

let somaDasNotas = 0;
notas.forEach((nota) => {
  somaDasNotas = somaDasNotas + Number(nota);
});

console.log(somaDasNotas);
