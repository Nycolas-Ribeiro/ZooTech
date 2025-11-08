document.addEventListener('scroll', function() {
    // 1. Pega a referência para o elemento com a imagem de fundo
     backImage = document.querySelector('.Back-Image');

    // 2. Obtém a posição atual do scroll vertical (em pixels)
    // O window.scrollY funciona na maioria dos navegadores
     scrollPosition = window.scrollY;

    // 3. Define o fator de velocidade do paralaxe.
    // Quanto maior o número (ex: 3), mais lento o fundo se move.
    // Se o valor for 1, o fundo não se moverá mais devagar que o scroll.
     speedFactor = 4; 
    
    // 4. Calcula o novo deslocamento vertical do fundo
    // O sinal de '-' faz o fundo se mover para cima conforme o scroll desce
     yOffset = scrollPosition / speedFactor;

    // 5. Aplica a nova posição usando a propriedade CSS 'background-position'
    // O 'center' mantém o alinhamento horizontal
    backImage.style.backgroundPosition = `center -${yOffset}px`;
});

 bioma = [
    { src: "https://static.mundoeducacao.uol.com.br/mundoeducacao/2021/05/congelado.jpg", texto: "Tundra" },
    { src: "https://tse3.mm.bing.net/th/id/OIP.Q50sDZjK54CbtZFlC-Aw3AHaE6?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3", texto: "Taiga" },
    { src: "https://th.bing.com/th/id/OIP.ys-dJyZs88F2_QGaKzoP3gHaE6?w=274&h=182&c=7&r=0&o=7&cb=12&pid=1.7&rm=3", texto: "Floresta Temperada" },
    { src: "https://tse1.mm.bing.net/th/id/OIP.stDB_DASKirxWCSw5gAYlwHaEo?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3", texto: "Floresta Tropical" },
    { src: "https://static.todamateria.com.br/upload/sa/va/savana-0-cke.jpg", texto: "Savana" },
    { src: "https://caracteristicas.pt/wp-content/uploads/2021/10/prado.jpg", texto: "Pradaria" },
    { src: "https://tse4.mm.bing.net/th/id/OIP.7iX3fzo4jplmrrZr4eFmOQHaED?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3", texto: "Deserto" },
    { src: "https://userscontent2.emaze.com/images/f0db2917-b4d2-4f6e-b524-444bdcacfe54/c4ff1c61-c2ab-425a-a708-1cecd72e68f2.jpg", texto: "Aquático" },
    { src: "https://static.vecteezy.com/ti/fotos-gratis/p2/16558743-cena-subaquatica-oceano-recife-de-coral-debaixo-d-agua-mundo-do-mar-sob-fundo-de-agua-gratis-foto.jpg", texto: "Água Doce" },
    { src: "https://tse1.mm.bing.net/th/id/OIP.g8o8PoLH2lybnXe2zwSWwgHaE8?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3", texto: "Água Salgada" },
];
    bioma = 0
    document.getElementById('biomaZoo'+bioma).style.display = "block"

    function mudarBioma(x){
        document.getElementById("biomaZoo"+bioma).style.display ="none"
        bioma != x
        if( bioma > 1) { bioma = 0}
        if( bioma < 0) { bioma = 1}
        document.getElementById('biomaZoo'+bioma).style.display = "block"
}
