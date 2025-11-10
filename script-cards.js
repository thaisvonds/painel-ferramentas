const ferramentas = {
  web: [

    {
      nome: "Calculadora cPRA",
      descricao: "Calcula o percentual de PRA I, II e I+II com base nos sorológicos clássicos.",
      url: "https://www.igen.org.br/calculadorapra/",
      logo: "imagens/logo-pra-imgt.png"
    },

    {
      nome: "Calculadora cPRA – 18ºIHIWS",
      descricao: "Calcula o percentual de PRA I, II e I+II com base nos sorotipos determinados no 18° WS",
      url: "https://www.igen.org.br/calculadorapra18ws/",
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
      url: "https://www.igen.org.br/marco/",
      logo: "imagens/marco.png"
    },

    {
      nome: "GE.R.BASE",
      descricao: "Consulta de frequências alélicas e haplotípicas de HLA em alta resolução e análise de Desequilíbrio de Ligação (LD).",
      url: "https://www.igen.org.br/gerbase/",
      logo: "imagens/gerbase.png"
    },



  ],
  interna: [

    {
      nome: "BeadScan",
      descricao: "Monitora a leitura no luminex de acordo com parametrização prévia.",
      url: "http://172.22.33.147:3002/",
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
      descricao: "Identifica peptídeo(s) presente(s) no peptídeo sinal de alguns HLA classe I, presentes nos doadores e ausentes nos receptores, compartilhados com algumas cepas de citomegalovírus (CMV).",
      url: "http://vm-igen-102:18080/",
      logo: "imagens/peptide.svg" 

    },

    {
      nome: "Prova Cruzada Virtual vs FlowXm",
      descricao: "Realiza a busca de valores de MFI de anticorpos direcionados a antígenos HLA de doadores falecidos, a partir de soros previamente escolhidos de receptores em lista de oferta de órgãos.",
      url: "http://df-fcxm/",
      logo: "imagens/provacruzada.svg"
    },

    {
      nome: "Faseador HLA",
      descricao: "Determina a provável fase (haplótipos) de tipagens HLAs B/C; DRB1345/DQA/B e DPA/B e imputa resultados de alta resolução a partir de dados de média resolução.",
      url: "http://vm-igen-119:8501/",
      logo: "imagens/faseador.png"
    },

    {
      nome: "Busca e contagem de Alelo no Redome",
      descricao: "Ferramenta de consulta de genótipos com base em filtros por alelos específicos na base do REDOME com cerca 450.000 doadores tipificados por NGS.",
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
      descricao: "Gera os arquivos de resultados a serem importados para o sistema REDOMEWeb.",
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
      url: "http://vm-igen-101:3000/allele-pair-analysis",
      logo: "imagens/igen-sso.png"
    },


    {
      nome: "Igenlab-CT",
      descricao: "Ferramenta para preencher os dados da central de transplantes com dados do Igenlab.",
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
      nome: "Status Sensibilização automático no DF",
      descricao: "Realiza automaticamente o status de sensibilização e escolha de soro de listas de DF. Integra o resultado com o Igenlab."
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

function popularSubmenus() {
  const mapa = {
    web: document.getElementById('submenu-web'),
    interna: document.getElementById('submenu-interna'),
    online: document.getElementById('submenu-online')
  };

  Object.entries(mapa).forEach(([categoria, ul]) => {
    if (!ul) return;
    const lista = ferramentas[categoria];
    if (!Array.isArray(lista)) return;

    ul.innerHTML = '';

    lista.forEach(f => {
      if (!f || !f.nome) return;
      const li = document.createElement('li');
      li.setAttribute('role', 'none');
      if (f.url) {
        const a = document.createElement('a');
        a.textContent = f.nome;
        a.href = f.url;
        a.target = '_blank';
        a.rel = 'noopener';
        a.setAttribute('role', 'menuitem');
        li.appendChild(a);
      } else {
        const span = document.createElement('span');
        span.textContent = f.nome;
        span.style.cursor = 'default';
        li.appendChild(span);
      }
      ul.appendChild(li);
    });
  });
}

function renderizarFerramentas(lista) {
  const container = document.getElementById('container-ferramentas');
  container.innerHTML = '';

  const imagensCarregando = [];

  lista.forEach(f => {
    let card;

    if (f.url) {
      card = document.createElement('a');
      card.href = f.url;
      card.target = "_blank";
      card.rel = "noopener noreferrer";
    } else {
      card = document.createElement('div');
      card.style.cursor = "default"; 
    }

    card.className = 'card-ferramenta';
    
    const tituloCard = document.createElement('div');
    tituloCard.className = 'titulo-card';
    
    if (f.logo) {
      const logoWrapper = document.createElement('div');
      logoWrapper.className = 'logo-wrapper';
      
      const skeleton = document.createElement('div');
      skeleton.className = 'logo-skeleton';
      
      const img = document.createElement('img');
      img.src = f.logo;
      img.alt = f.nome; 
      img.className = 'logo-card';
      img.loading = 'lazy';
      
      logoWrapper.appendChild(skeleton);
      logoWrapper.appendChild(img);
      tituloCard.appendChild(logoWrapper);
      
      const imagemPromise = new Promise(resolve => {
        if (img.complete) {
          skeleton.style.display = 'none';
          img.style.opacity = '1';
          resolve();
        } else {
          img.addEventListener('load', () => {
            skeleton.style.display = 'none';
            img.style.opacity = '1';
            resolve();
          }, { once: true });
          
          img.addEventListener('error', () => {
            skeleton.style.display = 'none';
            resolve();
          }, { once: true });
        }
      });
      
      imagensCarregando.push(imagemPromise);
    }
    
    const h3 = document.createElement('h3');
    h3.textContent = f.nome;
    tituloCard.appendChild(h3);
    
    const p = document.createElement('p');
    p.textContent = f.descricao;
    
    card.appendChild(tituloCard);
    card.appendChild(p);
    container.appendChild(card);
  });

  Promise.all(imagensCarregando).then(() => {
    equalizeCardHeights();
  }).catch(err => {
    console.error('Erro ao carregar imagens:', err);
    equalizeCardHeights();
  });
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
    return function(...args) {
      clearTimeout(t);
      t = setTimeout(() => fn(...args), wait);
    };
  }

  window.addEventListener('resize', debounce(() => {
    equalizeCardHeights();
  }, 150));

function atualizarCategoria(categoria) {
  categoriaAtual = categoria;

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

  if (filtradas.length === 0) {
    const container = document.getElementById('container-ferramentas');
    container.innerHTML = `
      <div class="mensagem-vazia" style="
        grid-column: 1 / -1;
        text-align: center;
        padding: 3rem;
        color: rgba(0,0,0,0.6);
      ">
        <p style="font-size: 1.2rem; margin-bottom: 0.5rem;">Nenhuma ferramenta encontrada</p>
        <p style="font-size: 0.9rem;">Tente buscar por outro termo</p>
      </div>
    `;
    return;
  }

  renderizarFerramentas(filtradas);
}

function initUI() {
  popularSubmenus();
  document.querySelectorAll('.dropdown').forEach(drop => {
    const btnCategoria = drop.querySelector('[data-acao="categoria"]');
    const btnSeta = drop.querySelector('[data-acao="menu"]');
    const submenu = drop.querySelector('.submenu');

    if (btnCategoria) {
      btnCategoria.addEventListener('click', () => {
        atualizarCategoria(drop.dataset.categoria);
        
        if (drop.classList.contains('aberto')) {
          drop.classList.remove('aberto');
          if (btnSeta) btnSeta.setAttribute('aria-expanded', 'false');
          if (submenu) submenu.setAttribute('aria-hidden', 'true');
        }
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
            const otherSeta = openDrop.querySelector('[data-acao="menu"]');
            const otherSubmenu = openDrop.querySelector('.submenu');
            if (otherSeta) otherSeta.setAttribute('aria-expanded', 'false');
            if (otherSubmenu) otherSubmenu.setAttribute('aria-hidden', 'true');
          }
        });
        
        const isOpen = drop.classList.toggle('aberto');
        
        btnSeta.setAttribute('aria-expanded', isOpen);
        if (submenu) submenu.setAttribute('aria-hidden', !isOpen);
      });
    }
  });

  document.addEventListener('click', (e) => {
    document.querySelectorAll('.dropdown.aberto').forEach(openDrop => {
      if (!openDrop.contains(e.target)) {
        openDrop.classList.remove('aberto');
        
        const seta = openDrop.querySelector('[data-acao="menu"]');
        const submenu = openDrop.querySelector('.submenu');
        if (seta) seta.setAttribute('aria-expanded', 'false');
        if (submenu) submenu.setAttribute('aria-hidden', 'true');
      }
    });
  });
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.dropdown.aberto').forEach(openDrop => {
        openDrop.classList.remove('aberto');
        const seta = openDrop.querySelector('[data-acao="menu"]');
        const submenu = openDrop.querySelector('.submenu');
        if (seta) seta.setAttribute('aria-expanded', 'false');
        if (submenu) submenu.setAttribute('aria-hidden', 'true');
      });
    }
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
