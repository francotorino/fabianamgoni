'use client'
import { useInView } from '@/hooks/useInView'
import styles from './Testimonials.module.css'

const testimonials = [
  {
    text: 'Fabiana captó todo lo que yo soñaba y más. Las fotos de mi boda son exactamente lo que éramos ese día: naturales, emocionantes, perfectas. No puedo dejar de mirarlas.',
    author: 'Valentina R.',
    role: 'Novia — Boda 2024',
  },
  {
    text: 'Las fotos de los 15 de mi hija son una obra de arte. Fabiana estuvo presente en cada momento sin que nadie la notara, y sin embargo lo capturó todo. Eternamente agradecida.',
    author: 'Marcela P.',
    role: 'Mamá — Quinceañera 2023',
  },
  {
    text: 'La sesión newborn con mi bebé fue una experiencia hermosa. Fabiana tiene una paciencia y una delicadeza increíble. Las fotos que tenemos de esos primeros días son un tesoro.',
    author: 'Carolina F.',
    role: 'Mamá — Sesión Newborn 2024',
  },
]

export default function Testimonials() {
  const { ref: headerRef, inView: headerIn } = useInView()
  const { ref: cardsRef, inView: cardsIn } = useInView(0.08)

  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* Trust stat */}
        <div
          ref={headerRef}
          className={`${styles.header} fade-up ${headerIn ? 'visible' : ''}`}
        >
          <p className="section-label">Testimonios</p>
          <h2 className={styles.title}>Lo que dicen quienes<br /><em>ya vivieron la experiencia</em></h2>
          <p className={styles.trust}>
            Etiquetada continuamente cuando buscan recomendaciones de fotógrafos en la zona.
            La confianza se construye foto por foto, recuerdo por recuerdo.
          </p>
        </div>

        {/* Cards */}
        <div
          ref={cardsRef}
          className={`${styles.cards} ${cardsIn ? styles.cardsVisible : ''}`}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={styles.card}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <span className={styles.openQuote}>&ldquo;</span>
              <p className={styles.cardText}>{t.text}</p>
              <div className={styles.cardFooter}>
                <div className={styles.stars}>
                  {[...Array(5)].map((_, si) => (
                    <span key={si} className={styles.star}>★</span>
                  ))}
                </div>
                <div>
                  <p className={styles.cardAuthor}>{t.author}</p>
                  <p className={styles.cardRole}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
