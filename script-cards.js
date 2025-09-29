const ferramentas = {
  web: [
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

    {
      nome: "Calculadora PRA – sorológicos IMGT/HLA",
      descricao: "Calcula a % PRA I, II, e I+II com base nos sorológicos clássicos",
      url: "https://calculadorapra.igen.org.br/calculadora",
      logo: "imagens/logo-pra-imgt.png"
    },

    {
      nome: "Serotype",
      descricao: "O programa mostra quais beads dos kits comerciais representam melhor o alelo determinado (ou imputado) de um indivíduo.",
      url: "https://sorotipos18ws-v2.igen.org.br/pt-BR",
      logo: "imagens/serotype.png"
    },

    {
      nome: "Calculadora PRA – sorotipos determinados no 18ºWS",
      descricao: "Calculadora que converte dados em alta resolução para os sorotipos do 18.º Workshop Internacional, garantindo cálculos precisos. Não compatível com sorológicos IMGT/HLA.",
      url: "https://calculadorapra18ws.igen.org.br/calculadora",
      logo: "imagens/pra-18.png"
    }

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
  desenvolvimento: [
    {
      nome: "MFI vs FlowXM no DF",
      descricao: "Dado consolidado do resultado da citometria de fluxo e os valores de MFIs dos DSAs encontrados nos exames de PRA."
    },

    {
      nome: "DSA Tracker",
      descricao: "Substituir a busca do access com o incremento de trazer os MFIs dos DSAs (com a mesma regra do relatório “MFI vs FlowXM”)."
    }
  ]
};

const titulosCategoria = {
  web: "Ferramentas Web",
  interna: "Ferramentas Internas",
  desenvolvimento: "Em desenvolvimento"
};

const descricoesCategoria = {
  web: "Ferramentas acessíveis publicamente",
  interna: "Ferramentas da rede interna",
  desenvolvimento: "Ferramentas em desenvolvimento"
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
}

function atualizarCategoria(categoria) {
  categoriaAtual = categoria;

  // Ver depois se será útil colocar esses titulos na pagina, para indicar em qual categoria esta... Se for decidido colocar, não esquecer de criar no HTML tambem

//   document.getElementById('titulo-categoria').textContent = titulosCategoria[categoria];
//   document.getElementById('descricao-categoria').textContent = descricoesCategoria[categoria];

  document.querySelectorAll('.item-nav').forEach(item => item.classList.remove('ativo'));
  document.querySelector(`[data-categoria="${categoria}"] .item-nav`).classList.add('ativo');

  renderizarFerramentas(ferramentas[categoria]);
}

function buscarFerramentas(term) {
  if(!term) {
    renderizarFerramentas(ferramentas[categoriaAtual]);
  // document.getElementById('titulo-categoria').textContent = titulosCategoria[categoriaAtual];
  // document.getElementById('descricao-categoria').textContent = descricoesCategoria[categoriaAtual];
    return;
  }

  const todas = [...ferramentas.web, ...ferramentas.interna, ...ferramentas.desenvolvimento];
  const filtradas = todas.filter(f => 
    f.nome.toLowerCase().includes(term.toLowerCase()) ||
    (f.descricao && f.descricao.toLowerCase().includes(term.toLowerCase()))
  );

  // document.getElementById('titulo-categoria').textContent = `Resultados da busca: "${term}"`;
  // document.getElementById('descricao-categoria').textContent = `${filtradas.length} ferramenta(s) encontrada(s)`;

  renderizarFerramentas(filtradas);
}

document.querySelectorAll('.dropdown').forEach(drop => {
  const btnCategoria = drop.querySelector('[data-acao="categoria"]');
  const btnSeta = drop.querySelector('[data-acao="menu"]');
  const submenu = drop.querySelector('.submenu');

  btnCategoria.addEventListener('click', () => {
    atualizarCategoria(drop.dataset.categoria);
  });

  if (btnSeta) {
    btnSeta.addEventListener('click', (e) => {
      e.stopPropagation(); // evita conflito com clique principal
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

document.addEventListener('click', (e) => {
  document.querySelectorAll('.dropdown.aberto').forEach(openDrop => {
    if (!openDrop.contains(e.target)) {
      openDrop.classList.remove('aberto');
    }
  });
});

document.getElementById('busca').addEventListener('input', e => buscarFerramentas(e.target.value));

renderizarFerramentas(ferramentas[categoriaAtual]);
