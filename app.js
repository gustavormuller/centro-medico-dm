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
        endocrinologia: [
            {
                nome: "Dr. José Maria Cruz Machado",
                foto: "/images/laismaia.png"
            }
        ],
        geriatria: [
            {
                nome: "Dra. Sarah Francisco",
                foto: "/images/laismaia.png"
            }
        ],
        ginecologia: [
            {
                nome: "Dra. Nicole Kuster Porpino",
                foto: "/images/laismaia.png"
            },
            {
                nome: "Dr. Alvaro Lopes Vereno Filho",
                foto: "/images/laismaia.png"
            }
        ],
        neurologia: [
            {
                nome: "Dra. Alba Valéria",
                foto: "/images/laismaia.png"
            },
            {
                nome: "Dr. Paulo de Paiva",
                foto: "/images/laismaia.png"
            }
        ],
        nutricao: [
            {
                nome: "Marilza Dias",
                foto: "/images/laismaia.png"
            }
        ],
        oftalmologia: [
            {
                nome: "Dr. Ricardo Cerqueira Lima",
                foto: "/images/laismaia.png"
            }
        ],
        ortopedia: [
            {
                nome: "Dr. Sérgio Brickwedde",
                foto: "/images/laismaia.png"
            }
        ],
        otorrino: [
            {
                nome: "Dra. Karina Brandão Lutz",
                foto: "/images/laismaia.png"
            }
        ],
        pediatria: [
            {
                nome: "Dra. Kátia Faria Alves",
                foto: "/images/laismaia.png"
            },
            {
                nome: "Dra. Magda Lúcia Machado Pimentel",
                foto: "/images/laismaia.png"
            }
        ],
        pneumologia: [
            {
                nome: "Dra. Amanda Schwambach Velten",
                foto: "/images/laismaia.png"
            }
        ],
        psicologia: [
            {
                nome: "Fernanda de Biase",
                foto: "/images/laismaia.png"
            },
            {
                nome: "Solange Lucena Mendes",
                foto: "/images/laismaia.png"
            },
            {
                nome: "Adriania Rodrigues",
                foto: "/images/laismaia.png"
            }
        ],
        psiquiatria: [
            {
                nome: "Dr. Ricardo Herkenhoff Araujo",
                foto: "/images/laismaia.png"
            }
        ],
        radiologia: [
            {
                nome: "Dr. Plinio Zanello",
                foto: "/images/laismaia.png"
            },
            {
                nome: "Dr. Rubens Littig",
                foto: "/images/laismaia.png"
            }
        ],
        urologia: [
            {
                nome: "Dr. Leandro Correa Leal",
                foto: "/images/laismaia.png"
            }
        ]
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
            document.querySelector('#inicio').style.paddingTop = '0px';

            if (especialidadeData) {
                especialidadeData.forEach((medico) => {
                    const medicoElement = document.createElement("div");
                    medicoElement.className = "medico";
                    medicoElement.innerHTML = `
                        <h3>${medico.nome}</h3>
                        <img src="${medico.foto}" alt="${medico.nome}">
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
            document.querySelector('#inicio').style.paddingTop = '84px';
        }
    });
});
