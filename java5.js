const valor = localStorage.getItem('valorSelecionado');

if (valor === '4') {
  document.querySelector('.th').textContent = 'Prioridade';
}

const processos = [
  { id: "t1", tempoRestante: getRandomTime(), prioridade: getRandomPriority() },
  { id: "t2", tempoRestante: getRandomTime(), prioridade: getRandomPriority() },
  { id: "t3", tempoRestante: getRandomTime(), prioridade: getRandomPriority() },
  { id: "t4", tempoRestante: getRandomTime(), prioridade: getRandomPriority() }
];

// Ordena os processos por prioridade (menor valor = maior prioridade)
let fila = [...processos].sort((a, b) => a.prioridade - b.prioridade);

let tempoTotal = 0;
let processoAtual = 0;
let intervalo = null;

function getRandomTime() {
  return Math.floor(Math.random() * 10) + 1;
}
  console.log(processos)
function getRandomPriority() {
  return Math.floor(Math.random() * 5) + 1; // prioridade entre 1 e 5
}

function startPrioridade() {
  const nomeH1 = document.querySelector(".th").innerText.trim();
  if (nomeH1 !== "Prioridade") {
    alert("O processo só será executado se o nome for 'Prioridade'.");
    return;
  }

  if (intervalo) return;

  intervalo = setInterval(() => {
    if (processoAtual >= fila.length) {
      clearInterval(intervalo);
      document.querySelector('.termino').textContent = "Todos os processos terminaram.";
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
