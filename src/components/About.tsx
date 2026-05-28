'use client'
import Image from 'next/image'
import { useInView } from '@/hooks/useInView'
import styles from './About.module.css'

export default function About() {
  const { ref: headerRef, inView: headerIn } = useInView()
  const { ref: imgRef, inView: imgIn } = useInView()
  const { ref: textRef, inView: textIn } = useInView()

  return (
    <section id="sobre-mi" className={styles.section}>
      <div className={styles.inner}>

        {/* Section label */}
        <div
          ref={headerRef}
          className={`${styles.header} fade-up ${headerIn ? 'visible' : ''}`}
        >
          <p className="section-label">Sobre mí</p>
        </div>

        <div className={styles.grid}>

          {/* Images column */}
          <div
            ref={imgRef}
            className={`${styles.images} fade-left ${imgIn ? 'visible' : ''}`}
          >
            <div className={styles.imgMain}>
              <Image
                src="/fotos/sobre-mi-2.jpg"
                alt="Fabiana M. Goñi fotografiando un evento"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
              />
            </div>
            <div className={styles.imgSecondary}>
              <Image
                src="/fotos/sobre-mi-4.jpg"
                alt="Fabiana M. Goñi en su estudio fotográfico"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* Text column */}
          <div
            ref={textRef}
            className={`${styles.text} fade-right ${textIn ? 'visible' : ''}`}
          >
            <h2 className={styles.title}>
              Fotografiando emociones<br />
              <em>desde hace más de diez años</em>
            </h2>

            <div className={styles.divider} />

            <p className={styles.para}>
              Mi presencia durante los eventos es cercana pero sutil: estoy ahí,
              pero no invado. Busco que las personas se olviden de que hay una cámara
              y simplemente vivan su momento. Eso es lo que hace que las fotos sean reales.
            </p>

            <p className={styles.para}>
              Luego de cada trabajo dedico muchas horas a la postproducción, seleccionando
              y editando foto por foto con cuidado. Para mí, el trabajo no termina cuando
              apago la cámara.
            </p>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNum}>+10</span>
                <span className={styles.statLabel}>años de experiencia</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statNum}>∞</span>
                <span className={styles.statLabel}>momentos guardados</span>
              </div>
            </div>

            <div className={styles.logo}>
              <Image src="/logo.png" alt="Fabiana M. Goñi Fotografía" width={280} height={120} style={{ objectFit: 'contain', objectPosition: 'left' }} />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
