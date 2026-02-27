import './App.css'

const coreStats = [
  { label: 'Nivel', value: '23' },
  { label: 'Classe', value: 'Frontend Developer' },
  { label: 'Especialidade', value: 'React + TypeScript' },
  { label: 'Disponibilidade', value: 'Freela / Contrato' },
]

const attributes = [
  { name: 'Logica', points: 93 },
  { name: 'UX Sense', points: 89 },
  { name: 'Codigo Limpo', points: 95 },
  { name: 'Comunicacao', points: 84 },
]

const skills = [
  {
    title: 'Component Architecture',
    tier: 'Tier S',
    description:
      'Estruturas reutilizaveis com foco em manutencao, escalabilidade e consistencia visual.',
  },
  {
    title: 'Performance Tuning',
    tier: 'Tier A',
    description:
      'Otimizo renderizacao, bundle e estrategia de carregamento para ganhar velocidade real.',
  },
  {
    title: 'Acessibilidade',
    tier: 'Tier A',
    description:
      'Interfaces navegaveis por teclado, semantica correta e experiencia inclusiva.',
  },
]

const quests = [
  {
    title: 'Quest 01 - Landing de Conversao',
    impact: 'Performance + SEO + lead capture',
    summary:
      'Projeto focado em metricas de negocio com boas praticas tecnicas e copy orientada a acao.',
    reward: '+18% conversao',
  },
  {
    title: 'Quest 02 - Dashboard Operacional',
    impact: 'Produtividade de time interno',
    summary:
      'Painel responsivo com componentes modulares, filtros inteligentes e visualizacao rapida.',
    reward: 'Fluxo 2.1x mais rapido',
  },
  {
    title: 'Quest 03 - Portfolio UI Revamp',
    impact: 'Marca pessoal e posicionamento',
    summary:
      'Reprojeto visual com identidade forte, narrativa de carreira e navegacao objetiva.',
    reward: 'Mais entrevistas tecnicas',
  },
]

const inventory = [
  'React',
  'TypeScript',
  'JavaScript',
  'HTML5',
  'CSS3',
  'Vite',
  'Git',
  'Figma',
  'Testing Library',
  'Lighthouse',
]

function App() {
  return (
    <div className="sheet-wrap" id="topo">
      <header className="sheet-header">
        <div className="header-copy">
          <p className="kicker">Dev Character Sheet</p>
          <h1>Yago Correa Rodrigues</h1>
          <p className="subtitle">
            Frontend strategist que transforma requisitos em experiencias
            digitais rapidas, acessiveis e orientadas a resultado.
          </p>
        </div>
        <nav className="sheet-nav" aria-label="Navegacao principal">
          <a href="#status">Status</a>
          <a href="#skills">Skills</a>
          <a href="#quests">Quests</a>
          <a href="#guilda">Guilda</a>
        </nav>
      </header>

      <main className="sheet-grid">
        <aside className="panel panel-profile" id="status">
          <div className="avatar-block" aria-hidden="true">
            <span>YC</span>
          </div>
          <p className="role">Classe Primaria</p>
          <h2>Frontend Engineer</h2>
          <p className="origin">
            Especialista em interfaces modernas com foco em performance,
            clareza e impacto em produto.
          </p>

          <ul className="stat-grid" aria-label="Status principal">
            {coreStats.map((stat) => (
              <li key={stat.label}>
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
              </li>
            ))}
          </ul>
        </aside>

        <section className="panel panel-attrs" aria-label="Atributos base">
          <div className="panel-title-row">
            <p className="panel-id">Atributos</p>
            <h3>Base Stats</h3>
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
            <p className="panel-id">Arvore</p>
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

        <section className="panel panel-quests" id="quests">
          <div className="panel-title-row">
            <p className="panel-id">Missoes</p>
            <h3>Quests Concluidas</h3>
          </div>
          <div className="quest-list">
            {quests.map((quest) => (
              <article key={quest.title} className="quest-card">
                <div className="quest-head">
                  <h4>{quest.title}</h4>
                  <span className="quest-badge">Concluida</span>
                </div>
                <p>{quest.summary}</p>
                <ul>
                  <li>
                    Impacto: <strong>{quest.impact}</strong>
                  </li>
                  <li>
                    Reward: <strong>{quest.reward}</strong>
                  </li>
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="panel panel-inventory" aria-label="Inventario">
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
            <p className="panel-id">Guilda</p>
            <h3>Canal de Convocacao</h3>
          </div>
          <p>
            Aberto para projetos freelance, squads de produto e consultoria em
            frontend architecture.
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
