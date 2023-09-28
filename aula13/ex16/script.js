function verificar(){
  var ano = Number(new Date().getFullYear())
  var fano = document.getElementById('txtano').value
  var res = document.getElementById('res')
  if (fano.length == 0 || Number(fano) > ano){
    window.alert('Verifique os dados novamente!')
  }else{
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked){
      genero = 'Homem'
      if(idade >= 0 && idade < 10){
        img.setAttribute('src', 'imagem/criancaM.png')
      }else if (idade < 21){
        img.setAttribute('src', 'imagem/adolescenteM.png')
      }else if (idade < 50){
        img.setAttribute('src', 'imagem/adultoM.png')
      }else{
        img.setAttribute('src', 'imagem/idosoM.png')
      }
    }else if (fsex[1].checked){
      genero = 'Mulher'
      if(idade >= 0 && idade < 10){
        img.setAttribute('src', 'imagem/criancaF.png')
      }else if (idade < 21){
        img.setAttribute('src', 'imagem/adolescenteF.png')
      }else if (idade < 50){
        img.setAttribute('src', 'imagem/adultoF.png')
      }else{
        img.setAttribute('src', 'imagem/idosoF.png')
      }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
  }
}