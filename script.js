document.addEventListener('scroll', function() {
    // 1. Pega a referência para o elemento com a imagem de fundo
    const backImage = document.querySelector('.Back-Image');

    // 2. Obtém a posição atual do scroll vertical (em pixels)
    // O window.scrollY funciona na maioria dos navegadores
    const scrollPosition = window.scrollY;

    // 3. Define o fator de velocidade do paralaxe.
    // Quanto maior o número (ex: 3), mais lento o fundo se move.
    // Se o valor for 1, o fundo não se moverá mais devagar que o scroll.
    const speedFactor = 2; 
    
    // 4. Calcula o novo deslocamento vertical do fundo
    // O sinal de '-' faz o fundo se mover para cima conforme o scroll desce
    const yOffset = scrollPosition / speedFactor;

    // 5. Aplica a nova posição usando a propriedade CSS 'background-position'
    // O 'center' mantém o alinhamento horizontal
    backImage.style.backgroundPosition = `center -${yOffset}px`;
});
