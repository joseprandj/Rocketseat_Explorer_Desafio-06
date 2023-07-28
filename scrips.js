let students = [
  {
    name: 'Jose',
    noteOne: 5,
    noteTwo: 5
  },
  {
    name: 'Junior',
    noteOne: 8,
    noteTwo: 7.5
  },
  {
    name: 'Cristiane',
    noteOne: 7,
    noteTwo: 8
  }
];

const calcAverage = (noteOne, noteTwo) => ((noteOne + noteTwo) / 2).toFixed(2);

for (let student of students){
  const average = calcAverage(student.noteOne, student.noteTwo);
  let aprovMessage = `Parabéns, ${student.name}! Você foi aprovado(a) no concurso!`;
  let reprovMessage = `Não foi dessa vez, ${student.name}! Tente novamente!`;
  const aprovReprov = average >= 7 ?  aprovMessage : reprovMessage;

  alert(`A média do(a) aluno(a)  é: ${average}
${aprovReprov}`);
  
};