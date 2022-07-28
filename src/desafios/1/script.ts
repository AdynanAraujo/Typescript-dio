// Como podemos rodar isso em um arquivo .ts sem causar erros?
// let employee = {};
// employee.code = 10;
// employee.name = "John";

interface Employee {
  code: number;
  name: string;
}

let funcionario: Employee = { code: 10, name: "Jonh" };

// ---

console.log(
  `O nome do funcionário é ${funcionario.name}, e seu codigo é ${funcionario.code}.`
);
