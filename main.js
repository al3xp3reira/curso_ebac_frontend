

const form= document.getElementById('form-tarefas');
const tarefas = [];

let linhas= '';


form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTarefas();

})


function adicionaLinha() {
    const inputNomeTarefa = document.getElementById('nome-tarefa');

    if(tarefas.includes(inputNomeTarefa.value)){
        alert(`A Tarefa: ${inputNomeTarefa.value} já foi inserida`);
    }
    else{
    tarefas.push(inputNomeTarefa.value);

    let linha= '<ul>';
    linha += `<li>${inputNomeTarefa.value}</li>`;
    linha += '</ul>';

    linhas +=linha;
    }
    inputNomeTarefa.value= '';
}

function atualizaTarefas(){
    const corpoTarefas = document.querySelector('ul');
    corpoTarefas.innerHTML = linhas;


$("ul").on("click", "li", function() {
    $(this).css("text-decoration", "line-through");
  });

}
