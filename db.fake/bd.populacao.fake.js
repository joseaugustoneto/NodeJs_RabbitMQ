const populacao_db = [
  { uf: "AC", populacao: 803513 },
  { uf: "AL", populacao: 3340932 },
  { uf: "AP", populacao: 766679 },
  { uf: "AM", populacao: 3938336 },
  { uf: "BA", populacao: 15203934 },
  { uf: "CE", populacao: 8904459 },
  { uf: "DF", populacao: 2914830 },
  { uf: "ES", populacao: 3929911 },
  { uf: "GO", populacao: 6610681 },
  { uf: "MA", populacao: 6904241 },
  { uf: "MT", populacao: 3270973 },
  { uf: "MS", populacao: 2651235 },
  { uf: "MG", populacao: 20869101 },
  { uf: "PA", populacao: 8175113 },
  { uf: "PB", populacao: 3972202 },
  { uf: "PR", populacao: 11163018 },
  { uf: "PE", populacao: 9345173 },
  { uf: "PI", populacao: 3204028 },
  { uf: "RJ", populacao: 16550024 },
  { uf: "RN", populacao: 3442175 },
  { uf: "RS", populacao: 11247972 },
  { uf: "RO", populacao: 1768204 },
  { uf: "RR", populacao: 505665 },
  { uf: "SC", populacao: 6819190 },
  { uf: "SP", populacao: 44396484 },
  { uf: "SE", populacao: 2242937 },
  { uf: "TO", populacao: 1515126 }
]

function getEstadoPorSigla(uf) {
  return populacao_db.filter((p) => p.uf.toLowerCase() === uf.toLowerCase())[0] || {};
}


module.exports = { getEstadoPorSigla };