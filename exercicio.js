// Array de objetos representando alunos
const alunos = [];

// Função para adicionar um novo aluno ao array
function adicionarAluno(nome, nota) {
  alunos.push({ nome, nota });
}

// Adicionar alunos ao array
adicionarAluno('João', 5);
adicionarAluno('Maria', 8);
adicionarAluno('Pedro', 4);
adicionarAluno('Ana', 4);
adicionarAluno('Lucas', 6);

// Função para retornar alunos com nota maior ou igual a 6
function alunosAprovados(arrayAlunos) {
  const aprovados = arrayAlunos.filter(aluno => aluno.nota >= 6);

  if (aprovados.length === 0) {
    return "Nenhum aluno foi aprovado.";
  }

  return aprovados;
}

// Chamando a função e exibindo o resultado
const alunosAprovadosArray = alunosAprovados(alunos);
console.log(alunosAprovadosArray);
