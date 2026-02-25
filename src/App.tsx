import './App.css'

const stack = [
  'React',
  'TypeScript',
  'JavaScript',
  'HTML5',
  'CSS3',
  'Vite',
  'Git',
  'Figma',
  'Acessibilidade',
  'Performance',
]

const projects = [
  {
    title: 'Projeto 01',
    description: 'Landing page com foco em performance, SEO tecnico e conversao.',
    tags: ['React', 'TypeScript', 'CSS'],
  },
  {
    title: 'Projeto 02',
    description: 'Dashboard responsivo com componentes reutilizaveis e UX limpa.',
    tags: ['React', 'Vite', 'Design System'],
  },
  {
    title: 'Projeto 03',
    description: 'Portfolio pessoal com layout minimalista e foco em identidade.',
    tags: ['Frontend', 'UI', 'Acessibilidade'],
  },
]

function App() {
  return (
    <div className="app">
      <header className="hero" id="topo">
        <div className="top-row">
          <p className="eyebrow">Portfolio</p>
          <nav className="top-nav" aria-label="Navegacao principal">
            <a href="#sobre">Sobre</a>
            <a href="#stack">Stack</a>
            <a href="#projetos">Projetos</a>
            <a href="#contato">Contato</a>
          </nav>
        </div>
        <h1>Yago Correa Rodrigues</h1>
        <p className="intro">
          Frontend developer criando interfaces rapidas, acessiveis e focadas
          em resultado.
        </p>
        <div className="actions">
          <a className="cta cta-primary" href="#projetos">
            Ver projetos
          </a>
          <a className="cta" href="#contato">
            Contato
          </a>
        </div>
      </header>

      <main className="content">
        <section className="section" id="sobre">
          <div className="section-head">
            <span className="section-id">01</span>
            <h2>Sobre</h2>
          </div>
          <p className="section-text">
            Desenvolvedor frontend com foco em produtos digitais de alta
            qualidade. Priorizo codigo limpo, boas praticas e experiencias
            fluidas em qualquer dispositivo.
          </p>
          <ul className="meta-list">
            <li>
              <span>Foco</span>
              <strong>React + TypeScript</strong>
            </li>
            <li>
              <span>Estilo</span>
              <strong>Minimalista e funcional</strong>
            </li>
            <li>
              <span>Objetivo</span>
              <strong>Entregar valor rapido</strong>
            </li>
          </ul>
        </section>

        <section className="section" id="stack">
          <div className="section-head">
            <span className="section-id">02</span>
            <h2>Stack</h2>
          </div>
          <p className="section-text">
            Ferramentas e competencias usadas para criar interfaces modernas e
            escalaveis.
          </p>
          <ul className="chip-list" aria-label="Tecnologias e habilidades">
            {stack.map((item) => (
              <li key={item} className="chip">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="section" id="projetos">
          <div className="section-head">
            <span className="section-id">03</span>
            <h2>Projetos em destaque</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="tag-list">
                  {project.tags.map((tag) => (
                    <li key={tag} className="tag">
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="contato">
          <div className="section-head">
            <span className="section-id">04</span>
            <h2>Contato</h2>
          </div>
          <p className="section-text">
            Aberto a oportunidades de freelas, contratos e colaboracoes em
            produtos digitais.
          </p>
          <div className="contact-actions">
            <a className="cta cta-primary" href="mailto:seuemail@dominio.com">
              Enviar email
            </a>
            <a
              className="link-inline"
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="link-inline"
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          <a href="#topo">Voltar ao topo</a>
        </p>
      </footer>
    </div>
  )
}

export default App
