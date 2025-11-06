const ferramentas = {
  web: [

    {
      nome: "Calculadora cPRA",
      descricao: "Calcula o percentual de PRA I, II e I+II com base nos sorológicos clássicos.",
      url: "https://calculadorapra.igen.org.br/calculadora",
      logo: "imagens/logo-pra-imgt.png"
    },

    {
      nome: "Calculadora cPRA – 18ºIHIWS",
      descricao: "Calcula o percentual de PRA I, II e I+II com base nos sorotipos determinados no 18° WS.                                                             ",
      url: "https://calculadorapra18ws.igen.org.br/calculadora",
      logo: "imagens/pra-18.png"
    },

    {
      nome: "Sorotipo V2 e LSA",
      descricao: "Mapeia alelos HLA aos seus sorotipos correspondentes para identificar as beads presentes em kits comerciais, fornecendo dados complementares como especificidades sorológicas, status Bw, CIWD e grupos P.",
      url: "https://www.igen.org.br/sorotipos18ws/",
      logo: "imagens/serotype.png"
    },

    {
      nome: "M.A.R.Co",
      descricao: "Analisa correlações de MFI entre antígenos HLA para definir cutoffs personalizados e identificar discrepâncias.",
      url: "https://marco.igen.org.br/",
      logo: "imagens/marco.png"
    },

    {
      nome: "GE.R.BASE",
      descricao: "Consulta de frequências alélicas e haplotípicas de HLA em alta resolução e análise de Desequilíbrio de Ligação (LD).",
      url: "https://gerbase.igen.org.br/calculo/frequencia-hla",
      logo: "imagens/gerbase.png"
    },



  ],
  interna: [

    {
      nome: "BeadScan",
      descricao: "Monitora a leitura no luminex de acordo com parametrização prévia.",
      url: "https://beadscan.igen.org.br",
      logo: "imagens/bead.png"
    },

    {
      nome: "Tipagem em massa",
      descricao: "Busca a tipagem presumida a partir do ID ou arquivo CSV, priorizando alta > média resolução > sorologia.",
      url: "http://vm-igen-102:9001/",
      logo: "imagens/massa.png"
    },

    {
      nome: "Consulta de alelo HLA no IgenLab",
      descricao: "Busca no IgenLab indivíduos que expressam determinado HLA, em diferentes níveis de resolução. Mostra até 100 resultados recentes.",
      url: "http://vm-igen-102:8085/",
      logo: "imagens/igenlab.png"
    },


    {
      nome: "Preparo de Laudos",
      descricao: "Agrupa tipificação HLA, PRA e prova cruzada de um paciente, incluindo XM virtual e doadores vinculados.",
      url: "http://vm-igen-102:3501",
      logo: "imagens/laudos.png"
    },

    {
      nome: "HLA Signal Peptide Mismatch Tool",
      descricao: "Descrição",
      url: "http://vm-igen-102:18080/",
      logo: "imagens/peptide.svg" 

    },

    {
      nome: "Prova Cruzada Virtual vs FlowXm",
      descricao: "Descrição.",
      url: "http://df-fcxm/",
      logo: "imagens/provacruzada.svg"
    },

    {
      nome: "Faseador HLA",
      descricao: "Descrição.",
      url: "http://vm-igen-119:8501/",
      logo: "imagens/faseador.png"
    },

    {
      nome: "Busca e contagem de Alelo no Redome",
      descricao: "Descrição",
      url: "http://vm-igen-119:8095/",
      logo: "imagens/buscaredome.png"
    },

    {
      nome: "Alelos nulos – Redome",
      descricao: "Relatório de HLAs prováveis erros disponibilizados pelo Redome. Permite adicionar novos alelos para monitoramento.",
      url: "http://tools.igen.local:3600/",
      logo: "imagens/redome.png"
    },

    {
      nome: "Tipagem Redome",
      descricao: "Descrição",
      url: "http://vm-igen-119:4301/redome",
      logo: "imagens/redometipagem.png" 

    },

    {
      nome: "Conversor CareDx para IgenLab",
      descricao: "Converte o arquivo gerado pelo software AlloSeq Assign em um arquivo compatível para importação de resultados ao Igenlab.",
      url: "http://172.22.33.147:8181/",
      logo: "imagens/caredx.jpeg"
    },

   {
      nome: "Igen SSO – G1",
      descricao: "Busca, através de um encaminhamento, os genótipos classificados como G1 de uma tipagem HLA realizada por SSO.",
      url: "https://sso.igen.org.br",
      logo: "imagens/igen-sso.png"
    },


    {
      nome: "Igenlab-CT",
      descricao: "Ferramenta para preencher os dados da central de transplantes com dados do Igenlab",
      url: "http://tools.igenlab.igen.local:4000/",
      logo: "imagens/igenct.png"
    }
  ],
 online: [
    {
      nome: "Nomenclatura HLA",
      descricao: "Banco de dados oficial para nomenclatura dos genes do sistema HLA (Antígeno Leucocitário Humano).",
      url: "https://hla.alleles.org/",
      logo: "imagens/alleles.svg"
    },

    {
      nome: "Consulta de Alelos",
      descricao: "Ferramenta que permite realizar consultas personalizadas ao banco de dados IPD-IMGT/HLA, possibilitando a busca detalhada de informações sobre alelos e suas características moleculares.",
      url: "https://www.ebi.ac.uk/ipd/imgt/hla/alleles/",
      logo: "imagens/alleles.svg"
    },

   {
      nome: "Broads e Splits",
      descricao: "Lista de Broad, Splits e Antígenos Associados.",
      url: "https://hla.alleles.org/pages/antigens/broads_and_splits/",
      logo: "imagens/alleles.svg"
    },

   {
      nome: "MAC UI (NMDP)",
      descricao: "Interface para converter ambiguidades de alelos de tipificações HLA em códigos MAC (codifica/decodifica).",
      url: "https://hml.nmdp.org/MacUI/#/",
      logo: "imagens/nmdp.svg"
    },

    {
      nome: "pHLA 3D",
      descricao: "Banco de dados com modelos 3D inferidos de moléculas HLA, voltado à análise de resíduos de aminoácidos.",
      url: "https://www.phla3d.com.br/alleles/index",
      logo: "imagens/phla.jpeg"
    },

    {
      nome: "Fully Sequenced KIR Haplotypes",
      descricao: "Ilustração da composição de haplótipos KIR sequenciados.",
      url: "https://www.ebi.ac.uk/ipd/kir/about/haplotypes/sequenced/",
      logo: "imagens/ebi.jpg"
    },

    {
      nome: "Frequência de Alelos (DataBase)",
      descricao: "Repertório público de dados de frequência alélica, haplotípica e genotípica do sistema HLA, KIR, MIC e Citocinas no mundo.",
      url: "http://www.allelefrequencies.net/",
      logo: "imagens/allelefrequency.png"
    },

    {
      nome: "HaploStats",
      descricao: "Ferramenta de análise e inferência estatística de haplótipos a partir de dados genotípicos.",
      url: "https://www.haplostats.org/haplostats?execution=e2s1",
      logo: "imagens/haplo.png"
    }
  ],

  desenvolvimento: [
    {
      nome: "MFI vs FlowXM no DF",
      descricao: "Dado consolidado do resultado da citometria de fluxo e os valores de MFIs dos DSAs encontrados nos exames de PRA."
    },

    {
      nome: "FlowXM Tracker",
      descricao: "Substituir a busca do access com o incremento de trazer os MFIs dos DSAs (com a mesma regra do relatório 'MFI vs FlowXM')."
    }
  ]
};

const titulosCategoria = {
  web: "Ferramentas Web",
  interna: "Ferramentas Internas",
  desenvolvimento: "Em desenvolvimento",
  online: "Ferramentas Online"
};

const descricoesCategoria = {
  web: "Ferramentas acessíveis publicamente",
  interna: "Ferramentas da rede interna",
  desenvolvimento: "Ferramentas em desenvolvimento",
  online: "Ferramentas externas e online"
};

let categoriaAtual = 'web';

function renderizarFerramentas(lista) {
  const container = document.getElementById('container-ferramentas');
  container.innerHTML = '';

  lista.forEach(f => {
    let card;

    if (f.url) {
      card = document.createElement('a');
      card.href = f.url;
      card.target = "_blank";
    } else {
      card = document.createElement('div');
      card.style.cursor = "default"; 
    }

    card.className = 'card-ferramenta';
    
    card.innerHTML = `
      <div class="titulo-card">
        ${f.logo ? `<img src="${f.logo}" alt="${f.nome}" class="logo-card">` : ''}
        <h3>${f.nome}</h3>
      </div>
      <p>${f.descricao}</p>
    `;

    container.appendChild(card);
  });

    // após renderizar, equaliza alturas conforme largura da tela
    equalizeCardHeights();
}

  function equalizeCardHeights() {
    const cards = Array.from(document.querySelectorAll('.card-ferramenta'));
    if (!cards.length) return;

    cards.forEach(c => c.style.height = 'auto');

    const MOBILE_BREAKPOINT = 600;
    if (window.innerWidth > MOBILE_BREAKPOINT) {
      const max = cards.reduce((m, c) => Math.max(m, c.offsetHeight), 0);
      cards.forEach(c => c.style.height = max + 'px');
    } else {
      cards.forEach(c => c.style.height = 'auto');
    }
  }

  function debounce(fn, wait = 120) {
    let t;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn.apply(this, args), wait);
    };
  }

  window.addEventListener('resize', debounce(() => {
    equalizeCardHeights();
  }, 150));

function atualizarCategoria(categoria) {
  categoriaAtual = categoria;

  // Ver depois se será útil colocar esses titulos na pagina, para indicar em qual categoria esta... Se for decidido colocar, não esquecer de criar no HTML tambem

//   document.getElementById('titulo-categoria').textContent = titulosCategoria[categoria];
//   document.getElementById('descricao-categoria').textContent = descricoesCategoria[categoria];

  document.querySelectorAll('.item-nav').forEach(item => item.classList.remove('ativo'));
  const categoriaBtn = document.querySelector(`[data-categoria="${categoria}"] .item-nav`);
  if (categoriaBtn) {
    categoriaBtn.classList.add('ativo');
  } else {

    console.warn(`Botão da categoria '${categoria}' não encontrado no DOM.`);
  }

  renderizarFerramentas(ferramentas[categoria]);
}

function normalizeText(text) {
  return text
    .normalize("NFD")                   // separa acentos
    .replace(/[\u0300-\u036f]/g, "")    // remove acentos
    .replace(/[^a-zA-Z0-9\s]/g, "")     // remove pontuação
    .replace(/\s+/g, " ")               // normaliza espaços
    .trim()
    .toLowerCase();
}

function buscarFerramentas(term) {
  if(!term) {
    renderizarFerramentas(ferramentas[categoriaAtual]);
    return;
  }

  const query = normalizeText(term);
  const todas = [
    ...ferramentas.web,
    ...ferramentas.interna,
    ...(ferramentas.online || []),
    ...ferramentas.desenvolvimento
  ];

  const filtradas = todas.filter(f => 
    normalizeText(f.nome).includes(query) ||
    (f.descricao && normalizeText(f.descricao).includes(query))
  );

  renderizarFerramentas(filtradas);
}

function initUI() {
  document.querySelectorAll('.dropdown').forEach(drop => {
    const btnCategoria = drop.querySelector('[data-acao="categoria"]');
    const btnSeta = drop.querySelector('[data-acao="menu"]');

    if (btnCategoria) {
      btnCategoria.addEventListener('click', () => {
        atualizarCategoria(drop.dataset.categoria);
      });
    } else {
      console.warn('Dropdown sem botão de categoria encontrado:', drop);
    }

    if (btnSeta) {
      btnSeta.addEventListener('click', (e) => {
        e.stopPropagation();

        document.querySelectorAll('.dropdown.aberto').forEach(openDrop => {
          if (openDrop !== drop) {
            openDrop.classList.remove('aberto');
          }
        });
        drop.classList.toggle('aberto');
      });
    }
  });

  document.addEventListener('click', (e) => {
    document.querySelectorAll('.dropdown.aberto').forEach(openDrop => {
      if (!openDrop.contains(e.target)) {
        openDrop.classList.remove('aberto');
      }
    });
  });

  const buscaEl = document.getElementById('busca');
  if (buscaEl) {
    buscaEl.addEventListener('input', e => buscarFerramentas(e.target.value));
  } else {
    console.warn('Elemento de busca (id="busca") não encontrado no DOM.');
  }

  try {
    renderizarFerramentas(ferramentas[categoriaAtual]);
  } catch (err) {
    console.error('Erro ao renderizar ferramentas:', err);
  }
}

if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', initUI);
} else {
  initUI();
}
