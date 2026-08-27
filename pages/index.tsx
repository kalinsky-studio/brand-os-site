import Head from 'next/head'
import { useState } from 'react'

const services = [
  { number: '01', title: 'Brand OS', text: 'Собираю визуальную систему бренда: правила, токены, компоненты и шаблоны, которые команда действительно использует.' },
  { number: '02', title: 'Digital products', text: 'Проектирую сайты и цифровые продукты — от первой структуры до работающего интерфейса в коде.' },
  { number: '03', title: 'Personal brand', text: 'Помогаю дизайнеру или основателю звучать цельно: позиционирование, визуальный язык и узнаваемые носители.' },
]

const works = [
  { title: 'Ровесники', type: 'Brand system / Case study', color: 'mint' },
  { title: 'Классика', type: 'Real estate / Presentation system', color: 'clay' },
  { title: 'Next idea', type: 'Identity / Digital experience', color: 'violet' },
]

export default function Home() {
  const [activeCard, setActiveCard] = useState(0)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const movePlayground = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    setPosition({
      x: ((event.clientX - rect.left) / rect.width - 0.5) * 24,
      y: ((event.clientY - rect.top) / rect.height - 0.5) * 24,
    })
  }

  return (
    <>
      <Head>
        <title>Brand OS — Misha Kalinsky</title>
        <meta name="description" content="Brand OS — дизайн-системы, цифровые продукты и персональный бренд Misha Kalinsky." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="site-shell">
        <header className="site-header">
          <a href="#top" className="wordmark">Brand<span>OS</span></a>
          <nav className="main-nav" aria-label="Основная навигация">
            <a href="#services">Services</a>
            <a href="#works">Selected work</a>
            <a href="#contact">Let&apos;s talk ↗</a>
          </nav>
          <span className="availability"><i /> Available for selected projects</span>
        </header>

        <section id="top" className="hero section-frame">
          <div className="hero-copy">
            <p className="eyebrow">Independent designer / Moscow · 2026</p>
            <h1>Дизайн,<br /><em>который</em><br />работает.</h1>
            <p className="hero-intro">Я Миша Калинский. Создаю визуальные системы и цифровые продукты для брендов, которым важно быть собой.</p>
            <a className="text-link" href="#services">Посмотреть, что я делаю <span>↓</span></a>
          </div>

          <div className="hero-playground" onMouseMove={movePlayground} aria-label="Интерактивное поле Brand OS">
            <div className="playground-label">Playground <span>move to explore</span></div>
            <div className="outline-name">KALINSKY</div>
            <div className="orbit orbit-one" style={{ transform: `translate(${position.x}px, ${position.y}px) rotate(-7deg)` }}>
              <span className="mini-label">01 / system</span>
              <strong>Brand<br />OS</strong>
              <small>rules → components → stories</small>
            </div>
            <div className="orbit orbit-two" style={{ transform: `translate(${-position.x}px, ${-position.y}px) rotate(8deg)` }}>
              <span className="mini-label">material / 03</span>
              <div className="swatches"><i /><i /><i /></div>
              <small>make it<br />recognisable</small>
            </div>
            <div className="playground-hint">↗ move your cursor<br />through the field</div>
          </div>
        </section>

        <section className="manifesto section-frame">
          <p className="section-kicker">A point of view</p>
          <div className="manifesto-text">Brand OS — это не шаблон.<br /><span>Это способ думать</span><br />о бренде системно.</div>
          <p className="manifesto-note">Сначала нахожу характер. Затем превращаю его в правила, которые можно масштабировать — в сайте, презентации, коммерческом предложении и каждом следующем носителе.</p>
        </section>

        <section id="services" className="services section-frame">
          <div className="section-heading"><p className="section-kicker">What I do</p><h2>Собираю<br /><em>целое</em> из частей.</h2></div>
          <div className="service-list">
            {services.map((service, index) => (
              <button className={`service-row ${activeCard === index ? 'active' : ''}`} key={service.number} onClick={() => setActiveCard(index)}>
                <span className="service-number">{service.number}</span>
                <strong>{service.title}</strong>
                <span className="service-description">{service.text}</span>
                <span className="service-arrow">↗</span>
              </button>
            ))}
          </div>
        </section>

        <section id="works" className="works section-frame">
          <div className="section-heading works-heading"><p className="section-kicker">Selected work</p><h2>Системы,<br />которые <em>живут.</em></h2><a className="text-link" href="#contact">Все проекты ↗</a></div>
          <div className="work-grid">
            {works.map((work, index) => <article className={`work-card ${work.color}`} key={work.title}><div className="work-art"><span>{String(index + 1).padStart(2, '0')}</span><b>{work.title}</b><i>↗</i></div><p>{work.type}</p><h3>{work.title}</h3></article>)}
          </div>
        </section>

        <section id="contact" className="contact section-frame">
          <p className="section-kicker">Have a good project?</p>
          <h2>Давайте сделаем<br /><em>что-то настоящее.</em></h2>
          <a className="contact-email" href="mailto:hello@kalinsky.studio">hello@kalinsky.studio <span>↗</span></a>
          <div className="contact-meta"><span>Misha Kalinsky</span><span>Brand OS / 2026</span><span>Telegram · Instagram · Behance</span></div>
        </section>

        <footer className="site-footer"><span>© Misha Kalinsky</span><span>Designed with a system, not a template.</span><a href="#top">Back to top ↑</a></footer>
      </main>
    </>
  )
}
