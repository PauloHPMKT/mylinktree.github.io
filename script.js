let menuMobile = document.querySelector('.menuMobile')
    //menuMobile.classList.add('teste') // add adiciona uma class e remove retira
let botaoMenu = document.querySelector('.botaoMenu')
let dimension = document.querySelector('#dimension')


let aberto = false // flag variavel de controle (true === aberto // false === fechado)
    //controlando o estado de uma aplicaçao 


botaoMenu.onclick = function abrirFechar() {

    if (aberto === true) {
        aberto = false
        menuMobile.classList.remove('menuAberto')

        //botaoMenu.innerText = 'abrir menu'

    } else if (aberto === false) {
        aberto = true
        menuMobile.classList.add('menuAberto')
            //botaoMenu.innerText = 'fechar menu'
    }

}