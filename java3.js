const valor = localStorage.getItem('valorSelecionado');

if(valor === '1'){
    document.querySelector('.th').textContent = 'FCFS (First-Come, First-Served)';
}else if(valor === '2'){
    document.querySelector('.th').textContent = 'SJF (Shortest Job First)';
}else if(valor === 's'){
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


console.log(valor)

const processos = [
  { id: "t1", tempoRestante: getRandomTime() },
  { id: "t2", tempoRestante: getRandomTime() },
  { id: "t3", tempoRestante: getRandomTime() },
  { id: "t4", tempoRestante: getRandomTime() }
];

let fila = [...processos];
let tempoTotal = 0;
let processoAtual = 0;
let intervalo = null;

function getRandomTime() {
  return Math.floor(Math.random() * 10) + 1;
}

function startFC() {
  const nomeH1 = document.querySelector(".th").innerText.trim();
  console.log(nomeH1)
  if (nomeH1 !== "FCFS (First-Come, First-Served)") {
    alert("O processo só será executado se o nome for 'FCFS (First-Come, First-Served)'.");
    return;
  }

  if (intervalo) return;

  intervalo = setInterval(() => {
    if (processoAtual >= fila.length) {
      clearInterval(intervalo);
      document.querySelector('.termino').textContent = "Todos Processos Terminaram";
      return;
    }

    let processo = fila[processoAtual];

    if (processo.tempoRestante > 0) {
      tempoTotal++;
      document.getElementById("tempo").innerText = `Tempo: ${tempoTotal}s`;

      fila.forEach(p => {
        document.getElementById(p.id).classList.remove("ativo");
      });

      let div = document.getElementById(processo.id);
      div.classList.add("ativo");

      processo.tempoRestante--;

      if (processo.tempoRestante <= 0) {
        div.classList.remove("ativo");
        div.classList.add("finalizado");
        processoAtual++;
      }
    }
  }, 1000);
}
