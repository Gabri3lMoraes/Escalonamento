const processos = [
    { id: "t1", tempoRestante: getRandomTime() },
    { id: "t2", tempoRestante: getRandomTime() },
    { id: "t3", tempoRestante: getRandomTime() },
    { id: "t4", tempoRestante: getRandomTime() }
];

let tempoTotal = 0;
let processoAtual = 0;
let intervalo = null;

function getRandomTime() {
    return Math.floor(Math.random() * 10) + 1;
}
  console.log(processos)
function startSJF() {
    const nomeH1 = document.querySelector(".th").innerText.trim();
    if (nomeH1 !== "SJF (Shortest Job First)") {
        alert("O processo só será executado se o nome for 'SJF (Shortest Job First)'.");
        return;
    }

    // Ordena por tempoRestante (menor primeiro)
    const fila = [...processos].sort((a, b) => a.tempoRestante - b.tempoRestante);

    if (intervalo) return;

    intervalo = setInterval(() => {
        if (processoAtual >= fila.length) {
            clearInterval(intervalo);
            document.querySelector('.termino').textContent = "Todos os processos terminaram.";
            return;
        }

        const processo = fila[processoAtual];

        if (processo.tempoRestante > 0) {
            tempoTotal++;
            document.getElementById("tempo").innerText = `Tempo: ${tempoTotal}s`;

            fila.forEach(p => {
                document.getElementById(p.id).classList.remove("ativo");
            });

            const div = document.getElementById(processo.id);
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