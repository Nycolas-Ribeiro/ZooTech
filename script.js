document.addEventListener('scroll', function() {
    // 1. Pega a referência para o elemento com a imagem de fundo
    const backImage = document.querySelector('.Back-Image');

    // 2. Obtém a posição atual do scroll vertical (em pixels)
    // O window.scrollY funciona na maioria dos navegadores
    const scrollPosition = window.scrollY;

    // 3. Define o fator de velocidade do paralaxe.
    // Quanto maior o número (ex: 3), mais lento o fundo se move.
    // Se o valor for 1, o fundo não se moverá mais devagar que o scroll.
    const speedFactor = 4; 
    
    // 4. Calcula o novo deslocamento vertical do fundo
    // O sinal de '-' faz o fundo se mover para cima conforme o scroll desce
    const yOffset = scrollPosition / speedFactor;

    // 5. Aplica a nova posição usando a propriedade CSS 'background-position'
    // O 'center' mantém o alinhamento horizontal
    backImage.style.backgroundPosition = `center -${yOffset}px`;
});
 
// biomas será carregado via API `/api/biomas` (separação backend/frontend)
let biomas = [];
let biomaAtual = 0;

function atualizarBioma() {
    if (!biomas || !biomas.length) return;
    const bioma = biomas[biomaAtual];
    document.getElementById('zooText').textContent = bioma.texto;
    document.getElementById('zooImage').src = bioma.src;
}

function mudarBioma(x) {
    if (!biomas || !biomas.length) return;
    biomaAtual += x;
    
    // Loop: se passar do final, volta ao início
    if (biomaAtual >= biomas.length) { 
        biomaAtual = 0; 
    }
    // Loop: se voltar antes do início, vai ao final
    if (biomaAtual < 0) { 
        biomaAtual = biomas.length - 1; 
    }
    
    atualizarBioma();
}

// Inicializa: busca biomas da API e exibe o primeiro
document.addEventListener('DOMContentLoaded', function() {
    const displayContainer = document.getElementById('biomaZoo');
    if (displayContainer) displayContainer.style.display = "block";

    fetch('/api/biomas')
        .then(function(res) {
            if (!res.ok) throw new Error('Network response was not ok');
            return res.json();
        })
        .then(function(data) {
            biomas = data;
            if (biomas.length) {
                biomaAtual = 0;
                atualizarBioma();
            }
        })
        .catch(function(err) {
            console.error('Erro ao carregar biomas:', err);
        });
});
