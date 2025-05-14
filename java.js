
var seleto = document.getElementById('es')
var option1 = document.querySelectorAll('.option')
var descricao = document.querySelector('.description')
var h2 = document.querySelector('.th')
var preemptivo = document.getElementById('pre')
var quantum = document.getElementById('qua')
var option = quantum.querySelector('option[value="0"]')

console.log(option)
seleto.addEventListener('change', function(e){
    e.preventDefault()

    var valorSelecionado = seleto.value.trim();
  
    if (valorSelecionado === '1') {
        descricao.textContent = 'Executa os processos na ordem em que chegam. Simples, mas pode causar injustiça e alto tempo de espera para processos curtos atrás de longos.';
        console.log(valorSelecionado)
        preemptivo.value = "❌ Não";
        option.textContent = "❌ Não";
        document.getElementById("qua").options[2].hidden = true;
        document.getElementById("qua").options[1].hidden = true;
        document.getElementById("qua").options[3].hidden = true;
        document.getElementById("qua").options[4].hidden = true;
        
        console.log(preemptivo)
      } else if (valorSelecionado === '2') {
        descricao.textContent = 'O processo com o menor tempo de execução é executado primeiro. Pode ser não preemptivo (executa até o fim) ou preemptivo (interrompe se um processo mais curto chegar). Minimiza o tempo de espera médio, mas pode causar "starvation" para processos longos.';
        console.log(valorSelecionado)
        preemptivo.value = "❌ Não";
        option.textContent = "❌ Não";
        document.getElementById("qua").options[2].hidden = true;
        document.getElementById("qua").options[1].hidden = true;
        document.getElementById("qua").options[3].hidden = true;
        document.getElementById("qua").options[4].hidden = true;
        
      } else if (valorSelecionado === '3') {
        descricao.textContent = 'Cada processo recebe um tempo fixo (quantum) para execução. Se não terminar, é interrompido e colocado no final da fila. Ideal para sistemas interativos, mas a eficiência depende do tamanho do quantum.';
        preemptivo.value = "✅ Sim"
        option.textContent = "✅ Sim"
        document.getElementById("qua").options[2].hidden = false;
        document.getElementById("qua").options[1].hidden = false;
        document.getElementById("qua").options[3].hidden = false;
        document.getElementById("qua").options[4].hidden = false;
      }else if (valorSelecionado === '4') {
        descricao.textContent = 'Processos são escalonados com base em uma prioridade (menor número = maior prioridade). Pode ser preemptivo ou não. Pode causar "starvation" para processos de baixa prioridade.';
        option.textContent = "❌ Não";
        preemptivo.value = "❌ Não";
        document.getElementById("qua").options[2].hidden = true;
        document.getElementById("qua").options[1].hidden = true;
        document.getElementById("qua").options[3].hidden = true;
        document.getElementById("qua").options[4].hidden = true;
      }else if (valorSelecionado === '5') {
        descricao.textContent = 'é um algoritmo de escalonamento preemptivo baseado em sorteios. Cada processo recebe um ou mais "bilhetes" de acordo com sua prioridade, e o sistema sorteia aleatoriamente um bilhete para decidir qual processo será executado. Processos com mais bilhetes têm maior chance de ser escolhidos, mas a seleção é aleatória. Esse método é simples, justo e flexível, mas pode ser imprevisível e gerar starvation para processos com poucos bilhetes.';
         preemptivo.value = "✅ Sim"
        option.textContent = "✅ Sim"
        document.getElementById("qua").options[2].hidden = false;
        document.getElementById("qua").options[1].hidden = false;
        document.getElementById("qua").options[3].hidden = false;
        document.getElementById("qua").options[4].hidden = false;
      }else{
        descricao.textContent = '';
      }
      if(valorSelecionado !== ''){
        descricao.classList.remove('oculto')
      }else{
        descricao.classList.add('oculto')
      }
    

    });





function salvanumber(){
  const quantun = document.getElementById('qua').value;
  console.log(quantun)
  localStorage.setItem("quantuns", quantun);
  window.location.href = '/theards.html'

    const valor = document.getElementById('es').value;

  switch (valor) {
    case "1":
      window.location.href = "threads2.html";
      break;
    case "2":
      window.location.href = "threads3.html";
      break;
    case "3":
      window.location.href = "theards.html";
      break;
    case "4":
      window.location.href = "threads4.html";
      break;
    case "5":
      window.location.href = "threads5.html";
      break;
    default:
      alert("Por favor, selecione um algoritmo.");
  }
};



const valor = localStorage.getItem('valorSelecionado');

if(valor === '1'){
    document.querySelector('.th').textContent = 'FCFS (First-Come, First-Served)';
}else if(valor === '2'){
    document.querySelector('.th').textContent = 'SJF (Shortest Job First)';
}else if(valor === '3'){
    document.querySelector('.th').textContent = 'Round Robin (RR)';
}else if(valor === '4'){
    document.querySelector('.th').textContent = 'Prioridade';
}else if(valor === '5'){
    document.querySelector('.th').textContent = 'Multinível por Filas (Multilevel Queue)';
}else if(valor === '6'){
    document.querySelector('.th').textContent = 'Multinível com Feedback (Multilevel Feedback Queue)';
}else if(valor === '7'){
    document.querySelector('.th').textContent = 'Escalonamento por Loteria (Lottery Scheduling)';
}




























function startFCFS() {
  const nomeH1 = document.querySelector(".th").innerText.trim();
  if (nomeH1 !== "FCFS (First-Come, First-Served)") {
    alert("O processo só será executado se o nome for 'FCFS (First-Come, First-Served)'.");
    return;
  }

  const processos = [
    { id: "t1", tempoRestante: getRandomTime() },
    { id: "t2", tempoRestante: getRandomTime() },
    { id: "t3", tempoRestante: getRandomTime() },
    { id: "t4", tempoRestante: getRandomTime() }
  ];

  let fila = [...processos];
  let tempoTotal = 0;
  let indexAtual = 0;
  let intervalo = null;

  const segundos = parseInt(localStorage.getItem("quantuns"));
  if (isNaN(segundos) || segundos <= 0) {
    alert("Tempo inválido");
    return;
  }

  const quantum = segundos * 1000;

  intervalo = setInterval(() => {
    if (fila.every(p => p.tempoRestante <= 0)) {
      clearInterval(intervalo);
      document.querySelector(".termino").textContent = "Todos Processos Terminaram";
      return;
    }

    tempoTotal++;
    document.getElementById("tempo").innerText = `Tempo: ${tempoTotal}s`;

    fila.forEach(p => {
      document.getElementById(p.id).classList.remove("ativo");
    });

    while (fila[indexAtual].tempoRestante <= 0) {
      indexAtual = (indexAtual + 1) % fila.length;
    }

    let processo = fila[indexAtual];
    processo.tempoRestante--;

    let div = document.getElementById(processo.id);
    div.classList.add("ativo");

    if (processo.tempoRestante <= 0) {
      div.classList.remove("ativo");
      div.classList.add("finalizado");
      indexAtual = (indexAtual + 1) % fila.length;
    }

  }, quantum);
}

function getRandomTime() {
  return Math.floor(Math.random() * 10) + 1;
}
