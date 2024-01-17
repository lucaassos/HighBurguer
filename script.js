document.addEventListener('DOMContentLoaded', function () {
    function mostrarElementos() {
        var elementos = document.querySelectorAll('.box, .slogan, .botao-cardapio, .qualidade, .entrega, .produtos, .menucardapio, .container, .contato, footer');
        var alturaDaTela = window.innerHeight;

        elementos.forEach(function (elemento) {
            var posicaoElemento = elemento.getBoundingClientRect().top;

            if (posicaoElemento < alturaDaTela) {
                elemento.classList.add('animar'); // Adiciona uma classe para iniciar a animação
            }
        });
    }

    window.addEventListener('scroll', mostrarElementos);
    mostrarElementos();
});
