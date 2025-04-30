


const valor = localStorage.getItem('valorSelecionado');

if(valor){
    document.querySelector('.th').textContent = valor
}else{
    document.querySelector('.th').textContent = '{nenhum valor selecionado}'
}