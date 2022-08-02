const students = [
  {
    name: "João",
    firstNote: 6,
    secondNote: 6
  },
  {
    name: "Leticia",
    firstNote: 9,
    secondNote: 10
  }, 
  {
    name: "Diego",
    firstNote: 9,
    secondNote: 9
  },
  {
    name: "Julia",
    firstNote: 6,
    secondNote: 5
  }
]

function calculateAvarege(firstNote, secondNote) {
  return (firstNote + secondNote) / 2
}

for(let student of students) {
  let avarege = calculateAvarege(student.firstNote, student.secondNote)

  alert(`
    A média do(a) aluno(a) ${student.name} é ${avarege}
    ${
      avarege >= 7 ? 
      `Parabéns, ${student.name}! Você foi aprovado(a) no concurso.` :
      `Não foi dessa vez, ${student.name}! Tente novamente.`
    }
  `)
}