export default function checkAge(dataNascimento: string) {
  const dataAtual = new Date()
  const dataNasc = new Date(dataNascimento)

  let idade = dataAtual.getFullYear() - dataNasc.getFullYear()

  const mesAtual = dataAtual.getMonth()
  const diaAtual = dataAtual.getDate()
  const mesNasc = dataNasc.getMonth()
  const diaNasc = dataNasc.getDate()

  if (mesAtual < mesNasc || (mesAtual === mesNasc && diaAtual < diaNasc)) {
    idade--
  }

  return idade
}
