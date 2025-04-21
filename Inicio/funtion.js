function clickMenu() {
    if (itens.style.display == "block") {
        itens.style.display = "none"
    }

    else {
        itens.style.display = "block"

    }

    //aplicar a mesma logica de cima porem ao contrario
    //fazer a logo e os botoes sumirem quando os itens aparecerem
}

function mudouTamanho() {
    if (window.innerWidth >= 768) {
        itens.style.display = 'block'
    } else {
        itens.style.display = 'none'
    }
}