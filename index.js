const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576//proporcoes da tela
const gravity = 0.2
//retangulo preto do tamanho da tela
c.fillRect(0, 0,canvas.width ,canvas.height)
class Sprite{ // classe de sprite
    constructor({position, velocity}){
        this.position = position
        this.velocity = velocity
        this.height = 150
        this.lasKey
    }

    draw(){
        c.fillStyle = 'red' //funcao desenhar um sprite, preenche de vermelho e cria um retangulo
        c.fillRect(this.position.x, this.position.y, 50, 150)//retangulo (propocoes)
    }

    update(){
        this.draw()
        this.position.x += this.velocity.x 

        this.position.y += this.velocity.y

        if(this.position.y + this.height + this.velocity.y>=canvas.height) { //detectando o chao
            this.velocity.y = 0
        }else{
            this.velocity.y += gravity
        }
    }
}

const player = new Sprite({
    position: {//criando o player
    x: 0,
    y: 0
    },
    velocity:{
        x:0,
        y:10
    }
})



const enemy = new Sprite({
    position: {//criando o player
    x: 400,
    y: 100
    },
    velocity:{
        x:0,
        y:0
    }
})

enemy.draw()//desenhando o enemy

console.log(player)

const keys={
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    w: {
        pressed: false
    }
}

let lasKey
function animate(){
    window.requestAnimationFrame(animate)
    c.fillStyle = 'black'
    c.fillRect(0,0,canvas.width,canvas.height)
    player.update()
    enemy.update()

    player.velocity.x = 0

    if(keys.a.pressed && lastKey === 'a'){
        player.velocity.x = -1
    }else if(keys.d.pressed && lastKey ==='d'){
        player.velocity.x = 1
    }
}

animate()

window.addEventListener('keydown', (event) => {
    switch(event.key){
        case 'd':
            keys.d.pressed = true
            lastKey= 'd'
            break
        case 'a':
            keys.a.pressed = true
            lastKey= 'a'
            break
        case 'w':
            player.velocity.y = -10
            break

        case 'ArrowRight':
            keys.ArrowRight.pressed = true
            enemy.lasyKey = 'ArrowRight'
            break
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = true
            enemy.lasyKey = 'ArrowLeft'
            break
        case 'ArrowUp':
            player.velocity.y = -10
            enemy.velocity.y = -10
                break
    }
    console.log(event.key)
})

window.addEventListener('keyup', (event) => {
    switch(event.key){
        case 'd':
            keys.d.pressed = false
            break
        case 'a':
            keys.a.pressed = false
            break
        
    }
    //enemy keys
    switch(event.key){
        case 'ArrowRight':
            keys.ArrowRight.pressed = false
            break
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = false
            break
        
    }
    console.log(event.key)
})

