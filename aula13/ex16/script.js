function calcular(){
  var ano = Number(window.document.getElementById('ano').value)
  var sexo = window.document.querySelector("input[id='sexo']:checked").value
  var anoAtual = new Date().getFullYear()
  var idade = anoAtual - ano
  var res = window.document.getElementById('resultado')

  if (idade < 0 || ano == 0 ){
    window.alert('Confira os dados novamente, ano se encontra invalido!')
  }
  else{
    var img = document.createElement('img')
    if(sexo == 'Feminino'){
      if(idade >= 0  && idade <= 10){
        img.src = 'imagem/criancaF.png'
        res.appendChild(img)
      }
      else if (idade < 18){
        img.src = 'imagem/adolescenteF.png'
        res.appendChild(img)
      }
    }
  }
}