document.querySelectorAll(".pergunta").forEach(pergunta => {
            pergunta.addEventListener("click", () => {
                pergunta.querySelector(".resposta").classList.toggle("abrir")
                
            })
        })
