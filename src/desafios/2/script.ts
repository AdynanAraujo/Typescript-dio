// Como podemos melhorar o esse código usando TS?

// let pessoa1 = {};
// pessoa1.nome = "maria";
// pessoa1.idade = 29;
// pessoa1.profissao = "atriz"

// let pessoa2 = {}
// pessoa2.nome = "roberto";
// pessoa2.idade = 19;
// pessoa2.profissao = "Padeiro";

// let pessoa3 = {
//     nome: "laura",
//     idade: "32",
//     profissao: "Atriz"
// };

// let pessoa4 = {
//     nome = "carlos",
//     idade = 19,
//     profissao = "padeiro"
// }

interface Pessoa {
  nome: string;
  idade: number;
  profissao?: string;
}

let pessoa1 = {
  nome: "Maria",
  idade: 29,
  profissao: "atriz", // podemos adicionar ou não a profissão.
};
console.log(
  `${pessoa1.nome} tem ${pessoa1.idade} anos e sua profissão é ${pessoa1.profissao}.`
);
// definida a interface, toda a estrutura é aplicável para toda pessoaN
