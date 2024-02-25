function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio)

// podemos usar apenas "elemento && elemento.localName === 'audio'" o if percebe automaticamente se é true ou false
    if(elemento != null && elemento.localName === 'audio'){
        elemento.play()
    }else{
        alert('Elemento não encontrado ou seletor inválido')
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla') 

for(let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1]

                    // template string
    const idAudio = `#som_${instrumento}`

    tecla.onclick = function () {
        tocaSom(idAudio)
    }

    tecla.onkeydown = function (evento){           // também é declarado apénas como "e" ao inves de evento
        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa')
        }
        
    }
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa')
    }
}


