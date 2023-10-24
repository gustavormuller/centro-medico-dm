document.addEventListener("DOMContentLoaded", function () {
    const especialidades = document.querySelectorAll(".especialidade");
    const medicosInfo = document.getElementById("medicos-info");
    const medicosBackground = document.querySelector('.medicos-background');
    const medicosContainer = document.querySelector('.medicos');
    const close = document.querySelector('.close');
    const medicosData = {
        alergiaImunologia: [
            {
                nome: "Dr. Silvio Rogério Kuster",
                foto: "/images/dr_silvio_kuster_clinicogeral.png",
                CRM: 124562,
                REQ: 562315
            },
        ],
        anestesia: [
            {
                nome: "Dra. Luisa Medeiros de Araújo Bragatto",
                foto: "/images/anestesia.webp",
            },
        ],
        angiologia: [
            {
                nome: "Dr. Fabrício Rossi",
                foto: "/images/dr_fabricio_rossi_angiologo.png",
            },
        ],
        cardiologia: [
            {
                nome: "Dr. Ulisses da Costa Paiva Neto",
                foto: "/images/ulyssesdacostapaiva.png"
            }
        ],
        cirurgiaGeral: [
            {
                nome: "Dr. Eduardo Wernersbach Deps",
                foto: "/images/dr_eduardo_cirurgiaogeral.png"
            },
            {
                nome: "Dr. Silvio Rogério Kuster",
                foto: "/images/dr_silvio_kuster_clinicogeral.png"
            }
        ],
        dermatologia: [
            {
                nome: "Dra. Laís Maia Pinheiro",
                foto: "/images/dra_lais_maia_dermato_1.webp"
            }
        ],
        endocrinologia: [
            {
                nome: "Dr. José Maria Cruz Machado",
                foto: "/images/dr_jose_maria_endocrino.jpg"
            }
        ],
        gastroenterologia: [
            {
                nome: "Dr. Eduardo Wernersbach Deps",
                foto: "/images/dr_eduardo_cirurgiaogeral.png"
            }
        ],
        geriatria: [
            {
                nome: "Dra. Sarah Francisco",
                foto: "/images/dra_sarah_francisco_geriatra.png"
            }
        ],
        ginecologia: [
            {
                nome: "Dra. Nicole Kuster Porpino",
                foto: "/images/dra_nicole_kuster.webp"
            },
            {
                nome: "Dr. Alvaro Lopes Vereno Filho",
                foto: "/images/dr_alvaro_lopes_gineco.png"
            }
        ],
        mastologia: [
            {
                nome: "Dr. Alvaro Lopes Vereno Filho",
                foto: "/images/dr_alvaro_lopes_gineco.png"
            }
        ],
        medicinaDoTrabalho: [
            {
                nome: "Dr. Silvio Rogério Kuster",
                foto: "/images/dr_silvio_kuster_clinicogeral.png"
            }
        ],
        neurologia: [
            {
                nome: "Dra. Alba Valéria",
                foto: "/images/dra_albavaleria_neuro.png"
            },
            {
                nome: "Dr. Paulo de Paiva",
                foto: "/images/dr_paulo_paiva_neurocirurgiao.png"
            }
        ],
        nutricao: [
            {
                nome: "Marilza Dias",
                foto: "/images/nutricionista_marilza.png"
            }
        ],
        oftalmologia: [
            {
                nome: "Dr. Ricardo Cerqueira Lima Sturzeneker",
                foto: "/images/dr_ricardo_sturzeneker_oftalmologista2.png"
            }
        ],
        oncologia: [
            {
                nome: "Dra. Mariana Saleme do Valle",
                foto: "/images/dra_mariana_saleme.jpg"
            }
        ],
        ortopedia: [
            {
                nome: "Dr. Sérgio Brickwedde",
                foto: "/images/ortopedia.webp"
            }
        ],
        otorrino: [
            {
                nome: "Dra. Karina Brandão Lunz",
                foto: "/images/dra_karina_lunz_otorrino.png"
            }
        ],
        pediatria: [
            {
                nome: "Dra. Kátia Faria Alves",
                foto: "/images/dra_katia_faria_alves.png"
            },
            {
                nome: "Dra. Magda Lúcia Machado Pimentel",
                foto: "/images/dra_magda_pediatra.png"
            }
        ],
        pneumologia: [
            {
                nome: "Dra. Amanda Schwambach Velten",
                foto: "/images/dra_amanda_velten.webp"
            }
        ],
        proctologia: [
            {
                nome: "Dr. Eduardo Wernersbach Deps",
                foto: "/images/dr_eduardo_cirurgiaogeral.png"
            }
        ],
        psicologia: [
            {
                nome: "Adriania Rodrigues",
                foto: "/images/adriania_psicologa.png"
            },
            {
                nome: "Fernanda de Biase",
                foto: "/images/fernanda_psicologa.png"
            },
            {
                nome: "Solange Lucena Mendes",
                foto: "/images/lucena_mendes_psicologa.png"
            }            
        ],
        psiquiatria: [
            {
                nome: "Dr. Ricardo Herkenhoff Araujo",
                foto: "/images/dr_ricardo_herkenhoff_psiquiatra.jpg"
            }
        ],
        radiologia: [
            {
                nome: "Dr. Plinio Zanello",
                foto: "/images/dr_plinio_zanello_radiologista.png"
            },
            {
                nome: "Dr. Rubens Littig",
                foto: "/images/rubens_littig_ultrassonografia.png"
            }
        ],
        reumatologia: [
            {
                nome: "Dra. Gabriela Andrade Pena Cruz",
                foto: "/images/dra_gabriela_reumatologista.png"
            }
        ],
        urologia: [
            {
                nome: "Dr. Leandro Correa Leal",
                foto: "/images/dr_leandro_leal.webp"
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
                        <img src="${medico.foto}" alt="${medico.nome}">
                        <div>
                            <h3>${medico.nome}</h3>
                            <!-- <span>CRM: ${medico.CRM}</span> -->
                            <!-- <span>REQ: ${medico.REQ}</span> -->
                        </div>                        
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

    close.addEventListener("click", () => {
        medicosContainer.style.display = "none";
        medicosBackground.style.display = "none";
        document.body.style.overflowY = "visible";
        document.querySelector('header').style.position = "fixed";
        document.querySelector('#inicio').style.paddingTop = '84px';
    })
});
