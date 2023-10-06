document.addEventListener("DOMContentLoaded", function () {
    const especialidades = document.querySelectorAll(".especialidade");
    const medicosInfo = document.getElementById("medicos-info");
    const medicosBackground = document.querySelector('.medicos-background');
    const medicosContainer = document.querySelector('.medicos');
    const medicosData = {
        angiologia: [
            {
                nome: "Dr. Fabrício Rossi",
                foto: "/images/random.png",
            },
            {
                nome: "Dra. Cardiologista 2",
                foto: "/images/random.png",
            }
        ],
        cardiologia: [
            {
                nome: "Dr. Ulysses da Costa Paiva Neto",
                foto: "/images/ulyssesdacostapaiva.png"
            }
        ],
        cirurgiaGeral: [
            {
                nome: "Dr. Eduardo Alexandre Wernersbach Deps",
                foto: "/images/random.png"
            },
            {
                nome: "Dr. Silvio Kuster",
                foto: "/images/random.png"
            }
        ],
        dermatologia: [
            {
                nome: "Dra. Laís Maia Pinheiro",
                foto: "/images/laismaia.png"
            }
        ],

    };

    especialidades.forEach((especialidade) => {
        especialidade.addEventListener("click", async function () {
            const especialidadeId = this.dataset.especialidade;
            const especialidadeData = medicosData[especialidadeId];

            medicosInfo.innerHTML = "";
            medicosBackground.style.display = "block";
            document.body.style.overflowY = "hidden";
            medicosContainer.style.display = "flex";
            document.querySelector('header').style.position = "inherit";


            if (especialidadeData) {
                especialidadeData.forEach((medico) => {
                    const medicoElement = document.createElement("div");
                    medicoElement.className = "medico";
                    medicoElement.innerHTML = `
                        <h3>${medico.nome}</h3>
                        <img src="${medico.foto}" alt="${medico.nome}">
                        <!-- Adicione mais informações conforme necessário -->
                    `;
                    medicosInfo.appendChild(medicoElement);
                });
            }
        });
    });

    medicosBackground.addEventListener("click", function (event) {
        if (event.target !== medicosContainer && !medicosContainer.contains(event.target)) {
            medicosContainer.style.display = "none";
            medicosBackground.style.display = "none";
            document.body.style.overflowY = "visible";
            document.querySelector('header').style.position = "fixed";
        }
    });
});

