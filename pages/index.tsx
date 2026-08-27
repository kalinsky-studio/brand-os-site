import Head from 'next/head'
import { useState } from 'react'
import { motion, useAnimation, easeOut } from 'framer-motion'

const services = [
  { number: '01', title: 'Brand OS', text: 'Собираю визуальную систему бренда: правила, токены, компоненты и шаблоны, которые команда действительно использует.' },
  { number: '02', title: 'Digital products', text: 'Проектирую сайты и цифровые продукты — от первой структуры до работающего интерфейса в коде.' },
  { number: '03', title: 'Personal brand', text: 'Помогаю дизайнеру или основателю звучать цельно: позиционирование, визуальный язык и узнаваемые носители.' },
]

const works = [
  { title: 'Ровесники', type: 'Brand system / Case study', color: 'mint' },
  { title: 'Классика', type: 'Real estate / Presentation system', color: 'clay' },
  { title: 'Next idea', type: 'Identity / Design experience', color: 'violet' },
]

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
}

const orbitVariants = {
  rest: { rotate: 0, scale: 1 },
  hover: { rotate: 5, scale: 1.03 },
}

export default function Home() {
  const [activeCard, setActiveCard] = useState(0)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const controlsOrbit1 = useAnimation()
  const controlsOrbit2 = useAnimation()

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

        <motion.section
          id="top"
          className="hero section-frame"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div className="hero-copy" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
            <p className="eyebrow">Independent designer / Moscow · 2026</p>
            <h1>Дизайн,<br /><em>который</em><br />работает.</h1>
            <p className="hero-intro">Я Миша Калинский. Создаю визуальные системы и цифровые продукты для брендов, которым важно быть собой.</p>
            <a className="text-link" href="#services">Посмотреть, что я делаю <span>↓</span></a>
          </motion.div>

          <div className="hero-playground" onMouseMove={movePlayground} aria-label="Интерактивное поле Brand OS с абстрактной графикой">
            <img className="playground-image" src="/playground-brand-os.png" alt="Абстрактная графика Brand OS в терракотовых и кислотных цветах" />
            <div className="playground-label">Playground <span>move to explore</span></div>
            <div className="outline-name">KALINSKY</div>

            <motion.div
              className="orbit orbit-one"
              style={{ transform: `translate(${position.x}px, ${position.y}px) rotate(-7deg)` }}
              variants={orbitVariants}
              initial="rest"
              whileHover="hover"
            >
              <span className="mini-label">01 / system</span>
              <strong>Brand<br />OS</strong>
              <small>rules → components → stories</small>
            </motion.div>

            <motion.div
              className="orbit orbit-two"
              style={{ transform: `translate(${-position.x}px, ${-position.y}px) rotate(8deg)` }}
              variants={orbitVariants}
              initial="rest"
              whileHover="hover"
            >
              <span className="mini-label">material / 03</span>
              <div className="swatches"><i /><i /><i /></div>
              <small>make it<br />recognisable</small>
            </motion.div>

            <div className="playground-hint">↗ move your cursor<br />through the field</div>
          </div>
        </motion.section>

        <motion.section className="manifesto section-frame" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
          <p className="section-kicker">A point of view</p>
          <div className="manifesto-text">Brand OS — это не шаблон.<br /><span>Это способ думать</span><br />о бренде системно.</div>
          <p className="manifesto-note">Сначала нахожу характер. Затем превращаю его в правила, которые можно масштабировать — в сайте, презентации, коммерческом предложении и каждом следующем носителе.</p>
        </motion.section>

        <motion.section id="services" className="services section-frame" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
          <div className="section-heading"><p className="section-kicker">What I do</p><h2>Собираю<br /><em>целое</em> из частей.</h2></div>
          <div className="service-list">
            {services.map((service, index) => (
              <motion.button
                className={`service-row ${activeCard === index ? 'active' : ''}`}
                key={service.number}
                onClick={() => setActiveCard(index)}
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                <span className="service-number">{service.number}</span>
                <strong>{service.title}</strong>
                <span className="service-description">{service.text}</span>
                <span className="service-arrow">↗</span>
              </motion.button>
            ))}
          </div>
        </motion.section>

        <motion.section id="works" className="works section-frame" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
          <div className="section-heading works-heading"><p className="section-kicker">Selected work</p><h2>Системы,<br />которые <em>живут.</em></h2><a className="text-link" href="#contact">Все проекты ↗</a></div>
          <div className="work-grid">
            {works.map((work, index) => (
              <motion.article className={`work-card ${work.color}`} key={work.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1, duration: 0.5 }}>
                <div className="work-art"><span>{String(index + 1).padStart(2, '0')}</span><b>{work.title}</b><i>↗</i></div>
                <p>{work.type}</p>
                <h3>{work.title}</h3>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section id="contact" className="contact section-frame" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
          <p className="section-kicker">Have a good project?</p>
          <h2>Давайте сделаем<br /><em>что-то настоящее.</em></h2>
          <a className="contact-email" href="mailto:hello@kalinsky.studio">hello@kalinsky.studio <span>↗</span></a>
          <div className="contact-meta"><span>Misha Kalinsky</span><span>Brand OS / 2026</span><span>Telegram · Instagram · Behance</span></div>
        </motion.section>

        <footer className="site-footer">
          <span>© Misha Kalinsky</span>
          <span>Designed with a system, not a template.</span>
          <a href="#top">Back to top ↑</a>
        </footer>
      </main>
    </>
  )
}