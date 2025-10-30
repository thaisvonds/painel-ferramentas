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
      nome: "Igen SSO – G1",
      descricao: "Busca, através de um encaminhamento, os genótipos classificados como G1 de uma tipagem HLA realizada por SSO.",
      url: "https://sso.igen.org.br",
      logo: "imagens/igen-sso.png"
    },

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
      nome: "Alelos nulos – Redome",
      descricao: "Relatório de HLAs prováveis erros disponibilizados pelo Redome. Permite adicionar novos alelos para monitoramento.",
      url: "http://tools.igen.local:3600/",
      logo: "imagens/redome.png"
    },

    {
      nome: "Preparo de Laudos",
      descricao: "Agrupa tipificação HLA, PRA e prova cruzada de um paciente, incluindo XM virtual e doadores vinculados.",
      url: "http://vm-igen-102:3501",
      logo: "imagens/laudos.png"
    }  
  ],
 online: [
    {
      nome: "Nomenclatura HLA",
      descricao: "Reúne informações atualizadas sobre os alelos HLA, sequências, variações e histórico de revisões. Além disso, o site apresenta classificações importantes como os grupos P e os grupos G.",
      url: "https://hla.alleles.org/",
      logo: "imagens/alleles.svg"
    },

    {
      nome: "Consulta de Alelos",
      descricao: "A Ferramenta de Consulta de Alelos IPD-IMGT/HLA oferece uma interface de consulta avançada que permite aos usuários gerar consultas personalizáveis ​​para o banco de dados IPD-IMGT/HLA",
      url: "https://www.ebi.ac.uk/ipd/imgt/hla/alleles/",
      logo: "imagens/alleles.svg"
    },

   {
      nome: "MAC UI",
      descricao: "A MAC UI é uma ferramenta da NMDP usada para codificar e decodificar ambiguidades em tipagens HLA por meio dos códigos MAC, garantindo padronização, consistência e compatibilidade entre laboratórios e sistemas de registro.",
      url: "https://hml.nmdp.org/MacUI/#/",
      logo: "imagens/nmdp.svg"
    },

    {
      nome: "HLA Molecules Directory",
      descricao: "É uma base de dados online que fornece modelos tridimensionais (3D) de moléculas de HLA (alelos) gerados por homology modeling.",
      url: "https://www.phla3d.com.br/alleles/index",
      logo: "imagens/phla.jpeg"
    },
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

  // equaliza as alturas dos cards (aplica apenas em telas maiores que breakpoint)
  function equalizeCardHeights() {
    const cards = Array.from(document.querySelectorAll('.card-ferramenta'));
    if (!cards.length) return;

    // reset
    cards.forEach(c => c.style.height = 'auto');

    const MOBILE_BREAKPOINT = 600;
    if (window.innerWidth > MOBILE_BREAKPOINT) {
      const max = cards.reduce((m, c) => Math.max(m, c.offsetHeight), 0);
      cards.forEach(c => c.style.height = max + 'px');
    } else {
      // em mobile, deixar automático
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
    // caso o botão não seja encontrado, logamos para ajudar no debug sem interromper o script
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
        e.stopPropagation(); // para evitar conflito com clique principal
        // Fecha todos os outros menus abertos
        document.querySelectorAll('.dropdown.aberto').forEach(openDrop => {
          if (openDrop !== drop) {
            openDrop.classList.remove('aberto');
          }
        });
        // Alterna o menu atual
        drop.classList.toggle('aberto');
      });
    }
  });

  // clique global fecha dropdowns abertos
  document.addEventListener('click', (e) => {
    document.querySelectorAll('.dropdown.aberto').forEach(openDrop => {
      if (!openDrop.contains(e.target)) {
        openDrop.classList.remove('aberto');
      }
    });
  });

  // busca
  const buscaEl = document.getElementById('busca');
  if (buscaEl) {
    buscaEl.addEventListener('input', e => buscarFerramentas(e.target.value));
  } else {
    console.warn('Elemento de busca (id="busca") não encontrado no DOM.');
  }

  // render inicial
  try {
    renderizarFerramentas(ferramentas[categoriaAtual]);
  } catch (err) {
    console.error('Erro ao renderizar ferramentas:', err);
  }
}

// Inicializa a UI quando o DOM estiver pronto
if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', initUI);
} else {
  initUI();
}
