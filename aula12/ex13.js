// getDay retorna o dia da semana em número, logo, começa com o "0" que seria o domingo e "6" que seria o sabado
var diaSemana = new Date().getDay()

switch(diaSemana){
  case 0:
    console.log('Domingo')
    break
  case 1:
    console.log('Segunda')
    break
  case 2:
    console.log('Terça')
    break
  case 3:
    console.log('Quarta')
    break
  case 4:
    console.log('Quinta')
    break
  case 5:
    console.log('Sexta')
    break
  case 6:
    console.log('Sabado')
    break
  default:
    console.log('[ERROR] Valo invalido!')
}