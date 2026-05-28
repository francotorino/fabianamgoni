'use client'
import Image from 'next/image'
import { useInView } from '@/hooks/useInView'
import styles from './Gallery.module.css'

const photos = [
  { src: '/fotos/boda.jpg',          alt: 'Boda nocturna',             cat: 'Bodas',        tall: true  },
  { src: '/fotos/sesion-bebe.jpg',   alt: 'Newborn',                   cat: 'Bebés',        tall: false },
  { src: '/fotos/15.jpg',            alt: 'Quinceañera',               cat: 'Quinceañeras', tall: false },
  { src: '/fotos/cumple-familia.jpg',alt: 'Familia en cumpleaños',     cat: 'Familias',     tall: true  },
  { src: '/fotos/cumple-bebe.jpg',   alt: 'Bebé en cumpleaños',        cat: 'Bebés',        tall: false },
  { src: '/fotos/exteriores-15.jpg', alt: 'Fiesta en exteriores',      cat: 'Eventos',      tall: false },
  { src: '/fotos/sesion.jpg',        alt: 'Sesión smash cake',         cat: 'Estudio',      tall: true  },
  { src: '/fotos/cumple-nene.jpg',   alt: 'Cumpleaños de niño',        cat: 'Eventos',      tall: false },
  { src: '/fotos/cumple-bebe-3.jpg', alt: 'Mamá y bebé',               cat: 'Familias',     tall: false },
]

export default function Gallery() {
  const { ref: headerRef, inView: headerIn } = useInView()
  const { ref: gridRef, inView: gridIn } = useInView(0.05)

  return (
    <section id="galeria" className={styles.section}>
      <div className={styles.inner}>
        <div
          ref={headerRef}
          className={`${styles.header} fade-up ${headerIn ? 'visible' : ''}`}
        >
          <p className="section-label">Galería</p>
          <h2 className={styles.title}>Momentos reales</h2>
          <p className={styles.subtitle}>
            Cada imagen es una historia. Cada historia, un recuerdo que permanece.
          </p>
        </div>

        <div
          ref={gridRef}
          className={`${styles.masonry} ${gridIn ? styles.masonryVisible : ''}`}
        >
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`${styles.item} ${photo.tall ? styles.itemTall : ''}`}
              style={{ transitionDelay: `${(i % 3) * 0.08}s` }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className={styles.itemOverlay}>
                <span className={styles.itemCat}>{photo.cat}</span>
              </div>
            </div>
          ))}
        </div>

        <div className={`${styles.cta} fade-up ${headerIn ? 'visible delay-3' : ''}`}>
          <a
            href="https://www.instagram.com/fabianamgonifotografia/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaLink}
          >
            Ver más en Instagram
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
              <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
