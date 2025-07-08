const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você é Miles Morales e acabou de descobrir que há vários Homens-Aranha em universos diferentes. Qual é a sua reação inicial ao encontrar outro Homem-Aranha pela primeira vez?",
        alternativas: [
            {
                texto: "Fica confuso e assustado com a existência de outros como você.",
                afirmacao: "No começo, a ideia de um multiverso parecia assustadora e difícil de entender."
            },
            {
                texto: "Fica empolgado e quer saber tudo sobre os outros universos.",
                afirmacao: "A curiosidade venceu o medo e logo você quis aprender mais sobre seus novos aliados."
            }
        ]
    },
    {
        enunciado: "Gwen Stacy te convida para uma missão em outro universo, mas isso significa faltar às aulas e esconder a verdade da sua família. O que você decide fazer?",
        alternativas: [
            {
                texto: "Vai com Gwen, o multiverso precisa de você.",
                afirmacao: "Escolheu ajudar os outros Homens-Aranha mesmo sabendo que isso traria consequências pessoais."
            },
            {
                texto: "Recusa o convite para não causar problemas em casa.",
                afirmacao: "Apesar da vontade de ajudar, escolheu proteger seus vínculos familiares e a responsabilidade com sua vida normal."
            }
        ]
    },
    {
        enunciado: "Durante uma missão, Miguel O’Hara (Homem-Aranha 2099) diz que você não deveria interferir em certos eventos para proteger a linha do tempo. Qual é sua posição?",
        alternativas: [
            {
                texto: "Aceita que alguns acontecimentos não podem ser mudados.",
                afirmacao: "Decidiu seguir as regras do multiverso, mesmo que elas sejam difíceis de aceitar."
            },
            {
                texto: "Recusa seguir ordens e quer salvar todo mundo, mesmo que isso quebre as regras.",
                afirmacao: "Não acredita que o destino esteja escrito — acha que todo mundo merece uma chance de mudar seu futuro."
            }
        ]
    },
    {
        enunciado: "Você precisa criar um novo traje para a próxima missão multiversal. Como prefere fazer isso?",
        alternativas: [
            {
                texto: "Usar um traje tradicional inspirado no primeiro uniforme do Peter Parker.",
                afirmacao: "Homenageou o legado do primeiro Homem-Aranha e mostrou respeito às origens."
            },
            {
                texto: "Criar um traje totalmente novo com tecnologias de diferentes universos.",
                afirmacao: "Misturou criatividade e inovação para representar sua identidade única no multiverso."
            }
        ]
    },
    {
        enunciado: "Durante uma missão em equipe, um dos membros copia o plano de outro universo e não dá os devidos créditos. O que você faz?",
        alternativas: [
            {
                texto: "Deixa pra lá, afinal todos estão lutando pelo mesmo objetivo.",
                afirmacao: "Evita o confronto, acreditando que o mais importante era completar a missão."
            },
            {
                texto: "Conversa com o membro e sugere que ele reconheça as ideias dos outros Homens-Aranha.",
                afirmacao: "Mostrou que respeito e trabalho em equipe são essenciais, mesmo em meio ao caos do multiverso."
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
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();