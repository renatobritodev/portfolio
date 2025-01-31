document.addEventListener('DOMContentLoaded', () => {
  console.log('Portfólio carregado!')
})

// Alternar modo claro/escuro
const toggleTheme = () => {
  document.body.classList.toggle('light-mode')
}

// Criando um botão de tema no header
const themeButton = document.createElement('button')
themeButton.innerText = '🌙/☀️'
themeButton.style.marginLeft = '20px'
themeButton.onclick = toggleTheme
document.querySelector('header').appendChild(themeButton)

// Definição do modo claro
document.head.insertAdjacentHTML(
  'beforeend',
  `
  <style>
    .light-mode {
      background: #f1f1f1;
      color: #111;
    }
    .light-mode header, .light-mode .project-card, .light-mode .blog-post {
      background: #f1f1f1;
      color: #111;
    }
  </style>
`
)

// const navToggle = document.querySelector('.nav-toggle')
// const links = document.querySelector('.links')
// navToggle.addEventListener('click', () => links.classList.toggle('show-links'))

const techs = [
  {
    name: 'HTML',
    description:
      'Usada para estruturar o conteúdo de páginas web. Introduziu novos elementos semânticos como <header>, <footer>, <article>, e suporte nativo a áudio, vídeo e gráficos com <audio>, <video> e <canvas>.',
  },
  {
    name: 'CSS3',
    description:
      'Usado para estilizar páginas web. Com o CSS3, recursos como animações, transições, gradientes e layout responsivo com media queries foram adicionados, permitindo criar designs mais modernos e dinâmicos.',
  },
  {
    name: 'JavaScript',
    description:
      'Uma linguagem de programação poderosa que adiciona interatividade e funcionalidade a páginas web. Com JavaScript, é possível criar desde animações simples até aplicações web complexas, como sistemas de login e atualizações em tempo real.',
  },
  {
    name: 'Git',
    description:
      'Uma ferramenta de controle de versão amplamente usada por desenvolvedores para gerenciar alterações no código. Com o Git, você pode rastrear o histórico de mudanças, trabalhar em equipe por meio de branches e repositórios, e evitar conflitos no desenvolvimento.',
  },
  {
    name: 'Node.js',
    description:
      'Um ambiente de execução JavaScript no lado do servidor. Ele permite criar aplicações back-end escaláveis e rápidas, como APIs, sistemas de autenticação e até mesmo servidores web. É baseado no motor V8 do Google Chrome.',
  },
  {
    name: 'MySQL',
    description:
      'Um sistema de gerenciamento de banco de dados relacional (RDBMS). Ele é amplamente usado para armazenar e manipular dados de forma eficiente. Com MySQL, você pode criar bancos de dados para sites, como sistemas de e-commerce e plataformas de gerenciamento de conteúdo.',
  },
]

const projects = [
  {
    name: 'Portfolio',
    description:
      'Este portfólio foi criado para mostrar meus projetos e habilidades como desenvolvedor web. Ele foi construído com HTML, CSS e JavaScript, e é responsivo em dispositivos móveis.',
    techs: ['HTML', 'CSS3', 'JavaScript'],
    live: 'https://portfolio-frontend.vercel.app/',
    source: '',
  },
  {
    name: 'Weather App',
    description:
      'Um aplicativo de previsão do tempo que mostra a temperatura, umidade, e velocidade do vento de qualquer cidade do mundo. Ele foi construído com Node.js, Express, e a API OpenWeatherMap.',
    techs: ['Node.js', 'Express', 'APIs'],
    live: 'https://weather-app-frontend.vercel.app/',
    source: '',
  },
  {
    name: 'To-Do List',
    description:
      'Uma lista de tarefas simples que permite adicionar, marcar como concluída, e excluir tarefas. Ele foi construído com HTML, CSS e JavaScript, e armazena os dados no Local Storage do navegador.',
    techs: ['HTML', 'CSS3', 'JavaScript'],
    live: 'https://to-do-list-frontend.vercel.app/',
    source: '',
  },
  {
    name: 'Login System',
    description:
      'Um sistema de login e registro de usuários com autenticação de e-mail e senha. Ele foi construído com Node.js, Express, MySQL, e a biblioteca bcrypt para criptografar senhas.',
    techs: ['Node.js', 'Express', 'MySQL', 'bcrypt'],
    live: 'https://login-system-frontend.vercel.app/',
    source: '',
  },
  {
    name: 'E-Commerce Site',
    description:
      'Um site de e-commerce que permite visualizar produtos, adicionar ao carrinho, e finalizar a compra. Ele foi construído com HTML, CSS, JavaScript, e integração com a API FakeStoreAPI para os dados dos produtos.',
    techs: ['HTML', 'CSS3', 'JavaScript', 'APIs'],
    live: 'https://e-commerce-site-frontend.vercel.app/',
    source: '',
  },
  {
    name: 'Blog',
    description:
      'Um blog simples que permite visualizar, adicionar, e excluir postagens. Ele foi construído com Node.js, Express, MySQL, e a biblioteca CKEditor para a edição de texto.',
    techs: ['Node.js', 'Express', 'MySQL', 'CKEditor'],
    live: 'https://blog-frontend.vercel.app/',
    source: '',
  },
]
