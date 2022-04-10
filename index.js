function carregar (){
    let msg = document.getElementById('msg')
    let img = document.getElementById('img')
    let data = new Date()
    let hora = data.getHours()
    let minute = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minute} minutos`
    if(hora >= 0 && hora <12){
        img.src = 'img/manha.png'
        document.body.style.background
        = '#f5c747'

    }
        else if(hora >= 12 && hora <18){
            img.src = 'img/tarde.png'
            document.body.style.background
        = ' #99c0c0'
        }
        else{
            img.src = 'img/noite.png'
            document.body.style.background
        = '#212133'

        }
}