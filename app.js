document.addEventListener("DOMContentLoaded", function () {
    const especialidades = document.querySelectorAll(".especialidade");
    const medicosInfo = document.getElementById("medicos-info");
    const medicosBackground = document.querySelector('.medicos-background');
    const medicosContainer = document.querySelector('.medicos');
    const close = document.querySelector('.close');
    let animatedSections = document.querySelectorAll('.animated-section');
    const medicosData = {
        alergiaImunologia: [
            {
                nome: "Dr. Silvio Rogério Kuster",
                foto: "/images/dr_silvio_kuster_clinicogeral.png",
                info1: "CRM: 1869",
                info2: "RQE: 2023 (Alergia/Imunologia)"
            },
        ],
        anestesia: [
            {
                nome: "Dra. Luisa Medeiros de Araújo Bragatto",
                foto: "/images/anestesia.webp",
                info1: "CRM: 10122",
                info2: "RQE: 6541 (Anestesiologia)"
            },
        ],
        angiologia: [
            {
                nome: "Dr. Fabrício Rossi",
                foto: "/images/dr_fabricio_rossi_angiologo.png",
                info1: "CRM: 5377",
                info2: "RQE: 13770 (Angiologia)"
            },
        ],
        cardiologia: [
            {
                nome: "Dr. Ulisses da Costa Paiva Neto",
                foto: "/images/ulyssesdacostapaiva.png",
                info1: "CRM: 3050",
                info2: "RQE: 1560 (Cardiologista)"
            },
            {
                nome: "Dr. Eduardo Francisco de Miranda",
                foto: "/images/cardiologia.webp",
                info1: "CRM: 5781",
                info2: "Exames: Ecocardiograma"
            }
        ],
        cirurgiaGeral: [
            {
                nome: "Dr. Eduardo Wernersbach Deps",
                foto: "/images/dr_eduardo_cirurgiaogeral.png",
                info1: "CRM: 5234",
                info2: "RQE: 1140 (Cirurgia Geral)"
            },
            {
                nome: "Dra. Mariana Saleme do Valle",
                foto: "/images/dra_mariana_saleme.jpg",
                info1: "CRM: 13287",
                info2: "RQE: 8680 (Cirurgia Geral)"
            }
        ],
        dermatologia: [
            {
                nome: "Dra. Laís Maia Pinheiro",
                foto: "/images/dra_lais_maia_dermato_1.webp",
                info1: "CRM: 14326",
                info2: "RQE: 12981 (Dermatologista)"
            },
            {
                nome: "Dr. Fábio Pereira Colli",
                foto: "/images/dermatologia.webp",
                info1: "CRM: 5239",
                info2: "RQE: 2958 (Dermatologista)"
            }
        ],
        endocrinologia: [
            {
                nome: "Dr. José Maria Cruz Machado",
                foto: "/images/dr_jose_maria_endocrino.jpg",
                info1: "CRM: 5909",
                info2: "RQE: 3582 (Endocrinologia)"
            }
        ],
        fonoaudiologia: [
            {
                nome: "Rosana Rezende",
                foto: "/images/fonoaudiologia.webp",
                info1: "CRF 1564-6 / Teste da orelhinha,",
                info2: "Audiometria e Impedanciometria"
            }
        ],
        gastroenterologia: [
            {
                nome: "Dr. Eduardo Wernersbach Deps",
                foto: "/images/dr_eduardo_cirurgiaogeral.png",
                info1: "CRM: 5234",
                info2: "RQE: 1140 (Cirurgia Geral)"
            },
            {
                nome: "Dr. Edson Fernandes de Miranda",
                foto: "/images/gastroenterologia.webp",
                info1: "CRM: 4915",
                info2: "RQE: 4086 (Endoscopia Digestiva)"
            }
        ],
        geriatria: [
            {
                nome: "Dra. Sarah Francisco",
                foto: "/images/dra_sarah_francisco_geriatra.png",
                info1: "CRM: 16551",
                info2: "RQE: 12897 (Clínica Médica)"
            }
        ],
        ginecologia: [
            {
                nome: "Dra. Nicole Kuster Porpino",
                foto: "/images/dra_nicole_kuster.webp",
                info1: "CRM: 14557",
                info2: "RQE: 12119 (Ginecologista/Obstetra)"
            },
            {
                nome: "Dr. Alvaro Lopes Vereno Filho",
                foto: "/images/dr_alvaro_lopes_gineco.png",
                info1: "CRM: 4550",
                info2: "RQE: 2260 (Ginecologista/obstetra)"
            }
        ],
        mastologia: [
            {
                nome: "Dr. Alvaro Lopes Vereno Filho",
                foto: "/images/dr_alvaro_lopes_gineco.png",
                info1: "CRM: 4550",
                info2: "RQE: 2260 (Ginecologista/obstetra)"
            }
        ],
        medicinaDoTrabalho: [
            {
                nome: "Dr. Silvio Rogério Kuster",
                foto: "/images/dr_silvio_kuster_clinicogeral.png",
                info1: "CRM: 1869",
                info2: "RQE: 917 (Medicina do Trabalho)"
            }
        ],
        neurologia: [
            {
                nome: "Dra. Alba Valéria Lopes",
                foto: "/images/dra_albavaleria_neuro.png",
                info1: "CRM: 5031",
                info2: "RQE: 3539 (Neurologia)"
            },
            {
                nome: "Dr. Paulo Roberto de Paiva",
                foto: "/images/dr_paulo_paiva_neurocirurgiao.png",
                info1: "CRM: 4424",
                info2: "RQE: 7474 (Neurocirurgia)"
            }
        ],
        nutricao: [
            {
                nome: "Marilza Dias",
                foto: "/images/nutricionista_marilza.png",
                info1: "CRN: 13101181",
                info2: "Exames: Bioimpedância"
            }
        ],
        oftalmologia: [
            {
                nome: "Dr. Ricardo Cerqueira Lima Sturzeneker",
                foto: "/images/dr_ricardo_sturzeneker_oftalmologista2.png",
                info1: "CRM: 14764",
                info2: "RQE: 12498 (Oftalmologista)"
            }
        ],
        oncologia: [
            {
                nome: "Dra. Mariana Saleme do Valle",
                foto: "/images/dra_mariana_saleme.jpg",
                info1: "CRM: 13287",
                info2: "RQE: 8846 (Oncologia)"
            }
        ],
        ortopedia: [
            {
                nome: "Dr. Sérgio Brickwedde",
                foto: "/images/ortopedia.webp",
                info1: "CRM: 2674",
                info2: "RQE: 3102 (Ortopedista)"
            }
        ],
        otorrino: [
            {
                nome: "Dra. Karina Brandão Lunz",
                foto: "/images/dra_karina_lunz_otorrino.png",
                info1: "CRM: 5339",
                info2: "RQE: 2059 (Otorrinolaringologista)"
            }
        ],
        pediatria: [
            {
                nome: "Dra. Kátia Faria Alves",
                foto: "/images/dra_katia_faria_alves.png",
                info1: "CRM: 5507",
                info2: "RQE: 13314 (Pediatra)"
            },
            {
                nome: "Dra. Magda Lúcia Pimentel",
                foto: "/images/dra_magda_pediatra.png",
                info1: "CRM: 5510",
                info2: "RQE: 2606 (Pediatra)"
            }
        ],
        pneumologia: [
            {
                nome: "Dra. Amanda Schwambach Velten",
                foto: "/images/dra_amanda_velten.webp",
                info1: "CRM: 14387",
                info2: "RQE: 1333 (Pneumologista)"
            }
        ],
        proctologia: [
            {
                nome: "Dr. Eduardo Wernersbach Deps",
                foto: "/images/dr_eduardo_cirurgiaogeral.png",
                info1: "CRM: 5234",
                info2: "RQE: 1140 (Cirurgia Geral)"
            }
        ],
        psicologia: [
            {
                nome: "Adriania Rodrigues",
                foto: "/images/adriania_psicologa.png",
                info1: "CRP 16/4782",
                info2: ""
            },
            {
                nome: "Fernanda de Biase",
                foto: "/images/fernanda_psicologa.png",
                info1: "CRP 16/2655",
                info2: ""
            },
            {
                nome: "Patrícia Abul Kamel ",
                foto: "/images/psicologia.webp",
                info1: "CRP 16/281",
                info2: "(Psicóloga e Neuropsicóloga)"
            },
            {
                nome: "Solange Lucena Mendes",
                foto: "/images/lucena_mendes_psicologa.png",
                info1: "CRP 16/2602",
                info2: ""
            }
        ],
        psiquiatria: [
            {
                nome: "Dr. Ricardo Herkenhoff Araujo",
                foto: "/images/dr_ricardo_herkenhoff_psiquiatra.jpg",
                info1: "CRM: 9072",
                info2: "RQE: 7201 (Psiquiatra)"
            }
        ],
        reumatologia: [
            {
                nome: "Dra. Gabriela Andrade Pena Cruz",
                foto: "/images/dra_gabriela_reumatologista.png",
                info1: "CRM: 9800",
                info2: "RQE: 8084 (Reumatologista)"
            }
        ],
        ultrassom: [
            {
                nome: "Dr. Rubens Littig",
                foto: "/images/rubens_littig_ultrassonografia.png",
                info1: "CRM: 15079",
                info2: "RQE: 13831 (Radiologia)"
            }
        ],
        urologia: [
            {
                nome: "Dr. Leandro Correa Leal",
                foto: "/images/dr_leandro_leal.webp",
                info1: "CRM: 6787",
                info2: "RQE: 4361 (Urologista)"
            }
        ]
    };

    window.onscroll = () => {
        animatedSections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 800;
            let height = sec.offsetHeight;

            if (top >= offset && top < offset + height) {
                sec.style.animation = "transitionIn 0.7s";
            }
        })
    }

    especialidades.forEach((especialidade) => {
        especialidade.addEventListener("click", async function () {
            const especialidadeId = this.dataset.especialidade;
            const especialidadeData = medicosData[especialidadeId];

            medicosInfo.innerHTML = "";
            medicosBackground.style.display = "flex";
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
                            <span>${medico.info1}</span>
                            <span>${medico.info2}</span>
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
