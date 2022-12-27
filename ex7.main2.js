const form = document.getElementById('form-deposito');



form.addEventListener('submit', function(e){
  
    e.preventDefault();
    const CampoA = document.getElementById('CampoA');
    const CampoB = document.getElementById('CampoB');
    const mensagemgeErrada = document.querySelector('.error-message');
    const mensagemgeCerta = document.querySelector('.success-message');
    const messageSuccess = `O número do campo A : <b>${CampoA.value}</b> é menor que o do campo B: <b>${CampoB.value}</b>, portanto consideramos as entradas válidas.`;
    const messageError = `O número do campo B deve ser maior que o do campo A, essas entradas não são válidas`;
   
    if(CampoA.value < CampoB.value){
    
        mensagemgeCerta.style.color = 'black';
        mensagemgeCerta.style.display = 'block';
        mensagemgeCerta.innerHTML = messageSuccess;
    }
    else{

        mensagemgeErrada.style.color = 'black';
        mensagemgeErrada.style.display = 'block';
        mensagemgeErrada.innerHTML = messageError;
    
    }
    
    const timerOfMessage = setTimeout(clearMessage, 5000);

    function clearMessage(){

        mensagemgeErrada.style.display = 'none';
        mensagemgeErrada.innerHTML = '';
        mensagemgeCerta.style.display = 'none';
        mensagemgeCerta.innerHTML = '';
        CampoA.value = '';
        CampoB.value = '';
    
    }
   

    
    

});