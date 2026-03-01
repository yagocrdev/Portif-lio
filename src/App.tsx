import './App.css'

const coreStats = [
  { label: 'Nivel', value: '00' },
  { label: 'Classe Atual', value: 'Desenvolvedor Junior em Formacao' },
  { label: 'Foco', value: 'Frontend com base em backend' },
  { label: 'Disponibilidade', value: 'Estagio / Freela' },
]

const experienceBars = [
  { name: 'React', points: 0, level: 0 },
  { name: 'TypeScript', points: 0, level: 0 },
  { name: 'CSS Vanilla', points: 0, level: 0 },
  { name: 'Backend TypeScript', points: 0, level: 0 },
  { name: 'C#', points: 0, level: 0 },
]

const playerStory = [
  'Sou estudante de Analise e Desenvolvimento de Sistemas e estou em transicao de carreira, atualmente no meu novo arco profissional.',
  'Minha jornada comecou bem antes da tecnologia: em 2013, em Cachoeirinha/RS, iniciei no mundo comercial como estoquista de expedicao. Depois, assumi outro papel importante na minha historia: professor de muay thai. Desde os 9 anos em cima de um tatame, aprendi sobre disciplina, constancia e evolucao diaria, valores que hoje carrego para o desenvolvimento de software.',
  'Foi dando aulas que comecei a explorar novas habilidades: edicao de imagens, criacao de chamadas para atrair alunos e um contato mais proximo com ferramentas digitais. A tecnologia sempre esteve presente como pano de fundo, nos jogos, nos computadores e na admiracao pelos amigos desenvolvedores. Sempre achei fascinante como algumas linhas de codigo podiam criar mundos inteiros, sistemas complexos e solucoes incriveis.',
  'Apos a pandemia, com a oscilacao de alunos, precisei encerrar o ciclo nas artes marciais. Meu caminho seguiu para a industria metalurgica, onde atuo atualmente na Dana Incorporated. Nesse periodo, enfrentei desafios pessoais intensos, incluindo as enchentes que impactaram o Rio Grande do Sul. Foram verdadeiras batalhas de chefe da vida real, momentos que exigiram resiliencia, adaptacao e forca mental.',
  'Em 2025, decidi iniciar a faculdade de Analise e Desenvolvimento de Sistemas para mudar o rumo da minha historia. Na programacao, encontrei algo que me lembra o inicio nas artes marciais: o frio na barriga de aprender algo novo, o esforco constante, o erro que ensina, o ajuste fino ate o codigo rodar perfeitamente. Cada projeto e como uma nova quest. Cada problema resolvido e XP acumulada. Cada tecnologia aprendida e uma nova skill desbloqueada.',
  'Acredito que evoluir como desenvolvedor e um processo continuo: entender a logica por tras das coisas, fortalecer a base e subir de nivel projeto apos projeto. Atualmente desenvolvo projetos proprios para consolidar meu aprendizado e aprimorar minhas habilidades tecnicas, sempre buscando aplicar na pratica o que estudo.',
  'Agora estou em busca da minha primeira oportunidade na area de tecnologia, meu proximo grande desafio. Quero contribuir com dedicacao, responsabilidade, proatividade e, principalmente, com uma mentalidade de evolucao constante. Sei que nenhuma jornada e solo: grandes conquistas sao feitas em equipe. E estou pronto para entrar na party, aprender com os mais experientes e somar minhas habilidades nessa nova fase da minha carreira.',
]

const attributes = [
  { name: 'Comunicacao', points: 87 },
  { name: 'Trabalho em Equipe', points: 89 },
  { name: 'Resolucao de Problemas', points: 91 },
  { name: 'Adaptabilidade', points: 86 },
]

const skills = [
  {
    title: 'Componentizacao React',
    tier: 'Ramo Base',
    description:
      'Estruturas reutilizaveis, props tipadas e padrao visual consistente para escalar interfaces.',
  },
  {
    title: 'Type Safety e Estado',
    tier: 'Ramo Intermediario',
    description:
      'Modelagem de tipos, fluxo de estados e organizacao de logica para reduzir erros em producao.',
  },
  {
    title: 'Integracao Front + Backend',
    tier: 'Ramo Em Evolucao',
    description:
      'Consumo de APIs, tratamento de falhas e padronizacao de dados para entregas mais robustas.',
  },
]

const objectives = [
  {
    title: 'Objetivo 01 - Consolidar React + TypeScript',
    impact: 'Projetos completos com padrao profissional',
    summary:
      'Finalizar interfaces com estados reais, validacao de formularios e componentes reutilizaveis.',
    reward: 'XP de arquitetura frontend',
  },
  {
    title: 'Objetivo 02 - Evoluir no Backend TypeScript',
    impact: 'Ampliar visao fullstack',
    summary:
      'Construir APIs basicas, autenticacao inicial e integracao limpa com o frontend.',
    reward: 'XP de integracao e regra de negocio',
  },
  {
    title: 'Objetivo 03 - Fortalecer base em C#',
    impact: 'Abrir caminho para stacks corporativas',
    summary:
      'Praticar fundamentos de orientacao a objetos e pequenas APIs para consolidar logica.',
    reward: 'XP de backend e carreira',
  },
]

const inventory = [
  'React',
  'TypeScript',
  'CSS Vanilla',
  'Node.js',
  'C#',
  '.NET Basico',
  'Vite',
  'Git',
  'GitHub',
  'Figma',
]

function App() {
  return (
    <div className="sheet-wrap" id="topo">
      <header className="sheet-header">
        <div className="header-copy">
          <p className="kicker">Dev Character Sheet</p>
          <h1>Yago Correa Rodrigues</h1>
          <p className="subtitle">
            Portfolio em formato RPG com progresso tecnico, habilidades e
            objetivos de evolucao como desenvolvedor.
          </p>
        </div>
        <nav className="sheet-nav" aria-label="Navegacao principal">
          <a href="#jogador">Jogador</a>
          <a href="#skills">Habilidades</a>
          <a href="#atributos">Atributos</a>
          <a href="#objetivos">Objetivos</a>
        </nav>
      </header>

      <main className="sheet-grid">
        <aside className="panel panel-profile" id="jogador">
          <div className="panel-title-row">
            <p className="panel-id">Jogador</p>
            <h3>About Me</h3>
          </div>
          <div className="avatar-block" aria-hidden="true">
            <span>YC</span>
          </div>
          <p className="role">Classe Atual</p>
          <h2>Desenvolvedor Junior em Formacao</h2>
          <div className="origin-story">
            {playerStory.map((paragraph) => (
              <p key={paragraph} className="origin">
                {paragraph}
              </p>
            ))}
          </div>

          <ul className="stat-grid" aria-label="Status principal">
            {coreStats.map((stat) => (
              <li key={stat.label}>
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
              </li>
            ))}
          </ul>

          <div className="xp-block" aria-label="Barras de experiencia tecnica">
            <p className="xp-title">Barras de Experiencia</p>
            <ul className="xp-list">
              {experienceBars.map((experience) => (
                <li key={experience.name}>
                  <div className="meter-head">
                    <span>{experience.name}</span>
                    <strong>Lv. {experience.level}</strong>
                  </div>
                  <div className="meter-track" aria-hidden="true">
                    <span style={{ width: `${experience.points}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <section
          className="panel panel-attrs"
          id="atributos"
          aria-label="Atributos soft skills"
        >
          <div className="panel-title-row">
            <p className="panel-id">Atributos</p>
            <h3>Soft Skills</h3>
          </div>
          <ul className="meter-list">
            {attributes.map((attribute) => (
              <li key={attribute.name}>
                <div className="meter-head">
                  <span>{attribute.name}</span>
                  <strong>{attribute.points}</strong>
                </div>
                <div className="meter-track" aria-hidden="true">
                  <span style={{ width: `${attribute.points}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="panel panel-skills" id="skills">
          <div className="panel-title-row">
            <p className="panel-id">Habilidades</p>
            <h3>Skill Tree</h3>
          </div>
          <div className="skill-list">
            {skills.map((skill) => (
              <article key={skill.title} className="skill-card">
                <div className="skill-head">
                  <h4>{skill.title}</h4>
                  <span>{skill.tier}</span>
                </div>
                <p>{skill.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="panel panel-quests" id="objetivos">
          <div className="panel-title-row">
            <p className="panel-id">Objetivos</p>
            <h3>Roadmap Atual</h3>
          </div>
          <div className="quest-list">
            {objectives.map((objective) => (
              <article key={objective.title} className="quest-card">
                <div className="quest-head">
                  <h4>{objective.title}</h4>
                  <span className="quest-badge">Ativo</span>
                </div>
                <p>{objective.summary}</p>
                <ul>
                  <li>
                    Impacto: <strong>{objective.impact}</strong>
                  </li>
                  <li>
                    Recompensa: <strong>{objective.reward}</strong>
                  </li>
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="panel panel-inventory" aria-label="Inventario tecnico">
          <div className="panel-title-row">
            <p className="panel-id">Loadout</p>
            <h3>Inventario Tecnico</h3>
          </div>
          <ul className="chip-list">
            {inventory.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="panel panel-guild" id="guilda">
          <div className="panel-title-row">
            <p className="panel-id">Contato</p>
            <h3>Canal de Convocacao</h3>
          </div>
          <p>
            Aberto para estagio, projetos freelance e oportunidades para
            evoluir com desafios reais de produto.
          </p>
          <div className="actions">
            <a className="btn btn-primary" href="mailto:seuemail@dominio.com">
              Convocar por Email
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className="sheet-footer">
        <span>Build: Portfolio v2.0 - Character Sheet Theme</span>
        <a href="#topo">Voltar ao topo</a>
      </footer>
    </div>
  )
}

export default App
