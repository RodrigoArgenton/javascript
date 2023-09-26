function horaDia(){
  var msg = window.document.getElementById('msg')
  var imagem = window.document.getElementById('imagem')
  var hora = new Date().getHours()
  msg.innerText = `Agora é ${hora} horas`
  
  if (hora > 0 && hora < 12){
    imagem.innerHTML = '<img src="imagem/manha.png">'
    document.body.style.backgroundColor = "rgb(93, 163, 255)"
  } else if (hora < 18){
    imagem.innerHTML = '<img src="imagem/tarde.png">'
    document.body.style.backgroundColor = "rgb(157, 101, 247)"
  }else{
    imagem.innerHTML = '<img src="imagem/noite.png">'
    document.body.style.backgroundColor = "rgb(61, 50, 74)"
  }
}

