

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

  function getRandomTime() {
    return Math.floor(Math.random() * 10) + 1; // valor entre 1 e 10
  }

  console.log(processos)

  function startRR() {
    const nomeH1 = document.querySelector(".th").innerText.trim();
    if (nomeH1 !== "Round Robin (RR)") {
      alert("O processo só será executado se o nome for 'Round Robin (RR)'.");
      return;
    }

    if (intervalo) return; // Evita iniciar várias vezes

    const segundos = parseInt(localStorage.getItem("quantuns"));
    if(isNaN(segundos) || segundos <= 0){
      alert('Tempo invalido ');
      return;
    }

    const quantums = segundos * 1000;


    console.log(quantums)

    intervalo = setInterval(() => {
      if (fila.every(p => p.tempoRestante <= 0)) {
        clearInterval(intervalo);
        document.querySelector('.termino').textContent = "Todos Processos Terminaram"
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
      }

      indexAtual = (indexAtual + 1) % fila.length;
    }, quantums);
  }












































  