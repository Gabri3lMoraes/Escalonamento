const valor = localStorage.getItem('valorSelecionado');

if (valor === '7') {
  document.querySelector('.th').textContent = 'Escalonamento por Loteria (Lottery Scheduling)';
}

const processos = [
  { id: "t1", tempoRestante: getRandomTime(), bilhetes: getRandomTickets() },
  { id: "t2", tempoRestante: getRandomTime(), bilhetes: getRandomTickets() },
  { id: "t3", tempoRestante: getRandomTime(), bilhetes: getRandomTickets() },
  { id: "t4", tempoRestante: getRandomTime(), bilhetes: getRandomTickets() }
];

let tempoTotal = 0;
let intervalo = null;

function getRandomTime() {
  return Math.floor(Math.random() * 10) + 1; // 1 a 10 segundos
}
console.log(processos)
function getRandomTickets() {
  return Math.floor(Math.random() * 10) + 1; // 1 a 10 bilhetes
}

function sortearProcesso(fila) {
  const totalBilhetes = fila.reduce((sum, p) => sum + (p.tempoRestante > 0 ? p.bilhetes : 0), 0);
  let sorteio = Math.floor(Math.random() * totalBilhetes);

  for (const processo of fila) {
    if (processo.tempoRestante <= 0) continue;
    if (sorteio < processo.bilhetes) return processo;
    sorteio -= processo.bilhetes;
  }
}

function startLoteria() {
  const nomeH1 = document.querySelector(".th").innerText.trim();
  if (nomeH1 !== "Escalonamento por Loteria (Lottery Scheduling)") {
    alert("O processo só será executado se o nome for 'Escalonamento por Loteria (Lottery Scheduling)'.");
    return;
  }

  if (intervalo) return;

  intervalo = setInterval(() => {
    if (processos.every(p => p.tempoRestante <= 0)) {
      clearInterval(intervalo);
      document.querySelector('.termino').textContent = "Todos os processos terminaram.";
      return;
    }

    tempoTotal++;
    document.getElementById("tempo").innerText = `Tempo: ${tempoTotal}s`;

    processos.forEach(p => {
      document.getElementById(p.id).classList.remove("ativo");
    });

    const processo = sortearProcesso(processos);
    if (!processo) return;

    const div = document.getElementById(processo.id);
    div.classList.add("ativo");

    processo.tempoRestante--;

    if (processo.tempoRestante <= 0) {
      div.classList.remove("ativo");
      div.classList.add("finalizado");
    }

  }, 1000);
}
