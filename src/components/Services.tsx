'use client'
import Image from 'next/image'
import { useInView } from '@/hooks/useInView'
import styles from './Services.module.css'

const services = [
  {
    num: '01',
    name: 'Bodas',
    desc: 'Capturo cada mirada, cada abrazo, cada lágrima de alegría. Me fundo con el ambiente para que nada se pierda y todo quede guardado para siempre.',
    img: '/fotos/boda.jpg',
    alt: 'Fotografía de boda',
    objectPosition: 'center 70%',
  },
  {
    num: '02',
    name: '15 Años',
    desc: 'Ese momento bisagra que merece ser recordado con toda su emoción y belleza. Sesiones en exteriores y cobertura completa del festejo.',
    img: '/fotos/15.jpg',
    alt: 'Fotografía de quinceañera',
  },
  {
    num: '03',
    name: 'Cumpleaños Infantiles',
    desc: 'Globos, tortas, caritas pintadas y mucha energía. Capturo la magia de cada fiesta infantil con ternura y atención a cada detalle especial.',
    img: '/fotos/cumple-familia.jpg',
    alt: 'Fotografía de cumpleaños infantil',
  },
  {
    num: '04',
    name: 'Cumpleaños Adultos',
    desc: 'Brindis, abrazos, emociones y celebración. Cobertura completa para que cada momento de tu festejo quede guardado con toda su intensidad.',
    img: '/fotos/cumple-familia-2.jpg',
    alt: 'Fotografía de cumpleaños de adultos',
  },
  {
    num: '05',
    name: 'Sesiones en Estudio',
    desc: 'En mi estudio fotográfico realizo sesiones temáticas y ambientadas, creando mundos únicos para bebés, niños y familias.',
    img: '/fotos/sesion.jpg',
    alt: 'Sesión temática en estudio',
  },
  {
    num: '06',
    name: 'Eventos',
    desc: 'Corporativos, sociales o cualquier celebración especial — cualquier evento que merezca ser recordado con cobertura completa y dedicación.',
    img: '/fotos/exteriores-15.jpg',
    alt: 'Fotografía de evento',
  },
  {
    num: '07',
    name: 'Escolar',
    desc: 'Actos, colaciones, viajes de egresados y jornadas especiales. Capturo cada etapa del camino escolar para que nada de lo vivido se pierda.',
    img: '/fotos/cumplee.jpg',
    alt: 'Fotografía escolar',
  },
  {
    num: '08',
    name: 'Deportivo',
    desc: 'Partidos, torneos, podios y festejos. Capturo la pasión y el esfuerzo de cada logro para que quede guardado con toda su intensidad.',
    img: '/fotos/deportivo.jpg',
    alt: 'Fotografía deportiva',
  },
]

function ServiceItem({
  service,
  index,
}: {
  service: (typeof services)[0]
  index: number
}) {
  const { ref, inView } = useInView()
  const isEven = index % 2 === 0

  return (
    <div
      ref={ref}
      className={`${styles.item} ${isEven ? styles.itemReverse : ''} ${inView ? styles.visible : ''}`}
    >
      <div className={styles.imageWrap}>
        <Image src={service.img} alt={service.alt} fill style={{ objectFit: 'cover', objectPosition: service.objectPosition ?? 'center' }} />
        <div className={styles.imageOverlay} />
      </div>
      <div className={styles.textWrap}>
        <span className={styles.num}>{service.num}</span>
        <div className={styles.divider} />
        <h3 className={styles.name}>{service.name}</h3>
        <p className={styles.desc}>{service.desc}</p>
        <a href="https://wa.me/59898385970" className={styles.link} target="_blank" rel="noopener noreferrer">
          Consultá disponibilidad →
        </a>
      </div>
    </div>
  )
}

export default function Services() {
  const { ref, inView } = useInView()

  return (
    <section id="servicios" className={styles.section}>
      <div
        ref={ref}
        className={`${styles.header} fade-up ${inView ? 'visible' : ''}`}
      >
        <p className="section-label">Servicios</p>
        <h2 className={styles.title}>Lo que fotografío</h2>
        <p className={styles.subtitle}>
          Cada servicio tiene su propio ritmo, su propia luz, su propia emoción.
        </p>
      </div>

      <div className={styles.list}>
        {services.map((s, i) => (
          <ServiceItem key={s.num} service={s} index={i} />
        ))}
      </div>
    </section>
  )
}
