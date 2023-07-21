export default function calcularMeses(dataDeComeço: string) {
  const dataInicial = new Date(dataDeComeço)
  const dataAtual = new Date()

  let anosDif = dataAtual.getFullYear() - dataInicial.getFullYear()
  let mesesDif = dataAtual.getMonth() - dataInicial.getMonth()

  if (
    mesesDif < 0 ||
    (mesesDif === 0 && dataAtual.getDate() < dataInicial.getDate())
  ) {
    anosDif--
    mesesDif += 12
  }

  const totalMeses = anosDif * 12 + mesesDif
  return totalMeses
}
