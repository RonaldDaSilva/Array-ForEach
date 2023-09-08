const usuarios = [
  { nome: "Felipe Santana", idade: 26 },
  { nome: "Mateus Santana", idade: 25 },
  { nome: "Suzane Barbosa", idade: 24 },
  { nome: "Elias Camilo", idade: 55 },
];

usuarios.forEach((item) => {
  console.log(`${item.nome}, ${item.idade}`);
});
