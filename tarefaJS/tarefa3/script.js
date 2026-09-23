const disciplinasCursadas = [
  { nome: "Algoritmos", cargaHoraria: 80, nota: 8.5 },
  { nome: "Banco de Dados", cargaHoraria: 60, nota: 7.0 },
  { nome: "Engenharia de Software", cargaHoraria: 40, nota: 6.5 },
  { nome: "Redes de Computadores", cargaHoraria: 60, nota: 5.5 }
];
function filtrarDisciplinasAprovadas(disciplinas) {
    let aprovado=[];
    for (let i = 0; i < disciplinas.length; i++) {
            if (disciplinas[i].nota >= 6) {
                aprovado.push(disciplinas[i]);
        }

    return aprovado;
}
}
function calcularCargaHorariaTotal(disciplinasAprovadas) {
    let soma=0;
    for(let i=0;i<disciplinasAprovadas.length;i++)
        soma+=disciplinasAprovadas[i].cargaHoraria;
    return soma
}

const aprovadas = filtrarDisciplinasAprovadas(disciplinasCursadas);
console.log(calcularCargaHorariaTotal(aprovadas));
