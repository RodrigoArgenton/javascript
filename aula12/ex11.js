var idade = 71

console.log(`Sua idade é: ${idade}.`)
if (idade >= 16){
  if (idade < 18 || idade > 70){
    console.log('Voto Opcional!')
  }
  else{
    console.log('Voto Obrigatório!')
  }
}else{
  console.log('Não tem idade para votar!')
}