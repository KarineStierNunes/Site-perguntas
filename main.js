const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você é a favor ou contra o aborto?",
        alternativas: [
            {
                texto: "A Favor",
                afirmacao: "Sou a favor do direito da mulher de decidir sobre seu próprio corpo."
            },
            {
                texto: "Contra",
                afirmacao: "Sou contra, acredito que a vida do feto deve ser protegida desde a concepção."
            }
        ]
    },
    {
        enunciado: "Você concorda que o aborto deve ser completamente proibido, exceto em situações extremas onde a vida da mãe está em perigo?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Sim, acredito que em casos de risco à vida da mãe, o aborto deve ser uma opção."
            },
            {
                texto: "Não",
                afirmacao: "Não, acho que as circunstâncias pessoais da mulher também devem ser consideradas para decidir sobre o aborto."
            }
        ]
    },
    {
        enunciado: "Você apoia a ideia de que o aborto deve ser decidido apenas pela mulher, sem intervenção do governo ou de terceiros?",
        alternativas: [
            {
                texto: "Com Certeza",
                afirmacao: "Sim, a decisão deve ser da mulher, respeitando sua autonomia e direitos reprodutivos."
            },
            {
                texto: "De jeito nenhum",
                afirmacao: "Não, acredito que o governo deve ter um papel regulatório para proteger os interesses do feto e da sociedade."
            }
        ]
    },
    {
        enunciado: "Você concorda que o aborto deveria ser ilegal no mundo inteiro, independente do estágio de gestação e independentemente das circunstâncias?",
        alternativas: [
            {
                texto: "Concordo",
                afirmacao: "Sim, acredito que o aborto deve ser considerado ilegal em todas as circunstâncias."
            },
            {
                texto: "Não Concordo",
                afirmacao: "Não, acho que as leis devem considerar situações específicas e variadas que envolvem gravidez e saúde da mulher."
            }
        ]
    },
    {
        enunciado: "Você acha que a legislação do aborto deve ser determinada de acordo com princípios religiosos ou morais específicos?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Não, acredito que a legislação deve ser baseada em direitos humanos universais e dados científicos."
            },
            {
                texto: "Não",
                afirmacao: "Sim, acho que princípios religiosos ou morais devem orientar as decisões sobre o aborto em nível legislativo."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();