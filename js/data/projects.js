/**
 * Fonte única de dados dos projetos exibidos no portfólio.
 *
 * Para adicionar um projeto novo, basta inserir um objeto neste array.
 * Campos:
 *   title, category, desc  -> textos exibidos no card
 *   tags     -> usados pelos filtros ("web" | "mobile" | "ia" | "design")
 *   thumb    -> imagem de capa do card
 *   fit      -> "cover" (padrão) ou "contain" (ideal para ícones)
 *   stack    -> tecnologias (badges)
 *   gallery  -> imagens exibidas no lightbox
 *   demoUrl  -> URL carregada no modal de demonstração (iframe) — opcional
 *   demo     -> URL "ao vivo" para abrir em nova aba — opcional
 *   repo     -> link do código-fonte — opcional
 */
export const projects = [
  {
    title: "Plano Generator",
    category: "Web App · IA Generativa",
    tags: ["web", "ia"],
    thumb: "./images/projetos/PlanoGenerator/Home.png",
    desc: "Aplicação web que automatiza a criação de Planos de Ensino Docente (Metodologia SENAI) usando a IA Generativa do Google (Gemini) e o Google Workspace — gerando planilhas completas e formatadas em minutos.",
    stack: ["JavaScript", "Node.js", "Gemini AI", "Apps Script"],
    gallery: ["./images/projetos/PlanoGenerator/Home.png"],
    demoUrl: "./demos/plano-generator/index.html",
    repo: "https://github.com/Sammytss"
  },
  {
    title: "SARA",
    category: "App Mobile · Ambiental",
    tags: ["mobile", "ia"],
    thumb: "./images/projetos/SARA/icon.png",
    fit: "contain",
    desc: "Sistema de Acompanhamento da Restauração Ambiental — app Flutter para monitorar a recuperação de áreas degradadas no Tocantins, integrando técnicos de campo, produtores e gestores do NATURATINS num fluxo offline-first. Back-end em Python/FastAPI.",
    stack: ["Flutter", "Dart", "Python", "FastAPI"],
    gallery: ["./images/projetos/SARA/icon.png"],
    repo: "https://github.com/Sammytss"
  },
  {
    title: "Cerradô",
    category: "Landing Page · Branding",
    tags: ["design", "web"],
    thumb: "./images/projetos/Cerrado/Home.png",
    desc: "\"O sabor que regenera\" — landing page para uma marca de bebidas lácteas artesanais com sabores do Cerrado (Buriti, Mangaba e Cupuaçu). Front-end estático com storytelling visual, animações e forte identidade.",
    stack: ["HTML5", "CSS3", "JavaScript"],
    gallery: [
      "./images/projetos/Cerrado/Home.png",
      "./images/projetos/Cerrado/PaginaCompleta.png",
      "./images/projetos/Cerrado/Buriti.png",
      "./images/projetos/Cerrado/Mangaba.png",
      "./images/projetos/Cerrado/Cupuacu.png"
    ],
    demoUrl: "https://cerradoosabor.vercel.app/",
    demo: "https://cerradoosabor.vercel.app/",
    repo: "https://github.com/Sammytss"
  },
  {
    title: "AgilStock",
    category: "Sistema Web · Gestão de Estoque",
    tags: ["web"],
    thumb: "./images/projetos/AgilStock/Dashboard.png",
    desc: "Sistema de gestão de estoque e produção: cadastro de produtos, matéria-prima, fornecedores e categorias, controle de saídas e dashboard com indicadores em tempo real.",
    stack: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    gallery: [
      "./images/projetos/AgilStock/Dashboard.png",
      "./images/projetos/AgilStock/AgilStock.png",
      "./images/projetos/AgilStock/Estoque.png",
      "./images/projetos/AgilStock/MateriaPrima.png",
      "./images/projetos/AgilStock/Fornecedores.png",
      "./images/projetos/AgilStock/Saidas.png",
      "./images/projetos/AgilStock/NovosUsuarios.png",
      "./images/projetos/AgilStock/CadastrarProduto.png",
      "./images/projetos/AgilStock/CadastrarMateriaPrime.png",
      "./images/projetos/AgilStock/CadastrarCategoria.png",
      "./images/projetos/AgilStock/CadastrarFornecedores.png"
    ],
    demoUrl: "./demos/agilstock/index.html",
    repo: "https://github.com/Sammytss"
  },
  {
    title: "SenaiSound",
    category: "Sistema Web · Gestão de Artistas",
    tags: ["web"],
    thumb: "./images/projetos/SenaiSound/MostrarArtistas.png",
    desc: "Projeto desenvolvido em aula, aplicando POO com alunos da turma de Técnico em desenvolvimento de sistemas. Aplicação de gestão de artistas e músicas construída em Blazor/.NET, com API em C# e persistência em SQL Server. CRUD completo e interface administrativa.",
    stack: ["C#", ".NET", "Blazor", "SQL Server"],
    gallery: [
      "./images/projetos/SenaiSound/MostrarArtistas.png",
      "./images/projetos/SenaiSound/CadastrarArtista.png",
      "./images/projetos/SenaiSound/EditarArtista.png",
      "./images/projetos/SenaiSound/Home.png"
    ],
    demoUrl: "https://portfolio-eight-omega-u6atxdg71n.vercel.app/demos/senaisound/",
    repo: "https://github.com/Sammytss"
  },
  {
    title: "Banco de Talentos 22º BI",
    category: "Sistema Web · Recolocação",
    tags: ["web"],
    thumb: "./images/projetos/ListarTalentos.png",
    desc: "Plataforma para cadastro de militares temporários da OM, visando a reinserção no mercado de trabalho — permite que empresas parceiras encontrem ex-militares ou militares em fim de serviço.",
    stack: ["PHP", "MySQL", "Bootstrap"],
    gallery: [
      "./images/projetos/ListarTalentos.png",
      "./images/projetos/Login.png",
      "./images/projetos/DetelhesDoTalento.png",
      "./images/projetos/CadastrarTalento.png",
      "./images/projetos/EditarTalento.png",
      "./images/projetos/ADM.png"
    ],
    demoUrl: "./demos/banco-de-talentos/index.html",
    repo: "https://github.com/Sammytss"
  }
];
