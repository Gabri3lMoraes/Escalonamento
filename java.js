
var seleto = document.getElementById('es')
var option1 = document.querySelectorAll('.option')
var descricao = document.querySelector('.description')
var h2 = document.querySelector('.th')

seleto.addEventListener('change', function(e){
    e.preventDefault()

    var valorSelecionado = seleto.value.trim();

    if (valorSelecionado === '1') {
        descricao.textContent = 'Executa os processos na ordem em que chegam. Simples, mas pode causar injustiça e alto tempo de espera para processos curtos atrás de longos.';
        console.log(valorSelecionado)
      } else if (valorSelecionado === '2') {
        descricao.textContent = 'O processo com o menor tempo de execução é executado primeiro. Pode ser não preemptivo (executa até o fim) ou preemptivo (interrompe se um processo mais curto chegar). Minimiza o tempo de espera médio, mas pode causar "starvation" para processos longos.';
        console.log(valorSelecionado)
      } else if (valorSelecionado === '3') {
        descricao.textContent = 'Cada processo recebe um tempo fixo (quantum) para execução. Se não terminar, é interrompido e colocado no final da fila. Ideal para sistemas interativos, mas a eficiência depende do tamanho do quantum.';
      }else if (valorSelecionado === '4') {
        descricao.textContent = 'Processos são escalonados com base em uma prioridade (menor número = maior prioridade). Pode ser preemptivo ou não. Pode causar "starvation" para processos de baixa prioridade.';
      }else if (valorSelecionado === '5') {
        descricao.textContent = 'Os processos são divididos em diferentes filas com base em características como tipo de processo. Cada fila pode ter seu próprio algoritmo de escalonamento. Pode ser preemptivo ou não, dependendo da fila.';
      }else if (valorSelecionado === '6') {
        descricao.textContent = 'Uma variação do Multilevel Queue, onde os processos podem ser movidos entre as filas com base em seu comportamento (tempo de CPU ou interatividade). Evita "starvation" e é geralmente preemptivo.';
      }else if (valorSelecionado === '7') {
        descricao.textContent = 'é um algoritmo de escalonamento preemptivo baseado em sorteios. Cada processo recebe um ou mais "bilhetes" de acordo com sua prioridade, e o sistema sorteia aleatoriamente um bilhete para decidir qual processo será executado. Processos com mais bilhetes têm maior chance de ser escolhidos, mas a seleção é aleatória. Esse método é simples, justo e flexível, mas pode ser imprevisível e gerar starvation para processos com poucos bilhetes.';
      }else{
        descricao.textContent = '';
      }
      if(valorSelecionado !== ''){
        descricao.classList.remove('oculto')
      }else{
        descricao.classList.add('oculto')
      }
    

    });



    function clickei(){
        const valorSelecionado = document.getElementById('es').value
       localStorage.setItem('valorSelecionado', valorSelecionado)
       window.location.href = ('/theards.html')
    }

