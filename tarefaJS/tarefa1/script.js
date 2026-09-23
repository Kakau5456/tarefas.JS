
const disciplinasCursadas = [
  { nome: "Algoritmos", cargaHoraria: 80, nota: 8.5 },
  { nome: "Banco de Dados", cargaHoraria: 60, nota: 7.0 },
  { nome: "Engenharia de Software", cargaHoraria: 40, nota: 6.5 },
  { nome: "Redes de Computadores", cargaHoraria: 60, nota: 5.5 }
];
function listarNomesDasDisciplinas(disciplinas) {
  for(let i=0;i<disciplinas.legnt;i++)
    console.log(disciplinas[i].nome);
}

listarNomesDasDisciplinas(disciplinasCursadas);