const perguntasRepostas = document.querySelectorAll(".item")



perguntasRepostas.forEach(function (item) {
    item.addEventListener("click", function () {

        const classeAtiva = document.querySelector(".ativo")

        if (classeAtiva) {
            classeAtiva.classList.remove("ativo")
        }

        item.classList.add("ativo")
    })
})
