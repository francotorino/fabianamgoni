'use client'
import Image from 'next/image'
import { useInView } from '@/hooks/useInView'
import styles from './Photobooks.module.css'

const products = [
  {
    num: '01',
    name: 'Fotolibro',
    desc: 'Un libro de tapa dura con tus mejores fotos, diseñado a medida para contar tu historia. Papel fotográfico de alta calidad, colores reales, encuadernación artesanal. Dura generaciones.',
    img: '/fotos/cumple-bebe.jpg',
    alt: 'Fotolibro impreso personalizado',
    ctaMsg: 'Hola%20Fabiana%2C%20me%20interesa%20un%20fotolibro',
    ctaLabel: 'Quiero mi fotolibro',
  },
  {
    num: '02',
    name: 'Cajita de Revelados',
    desc: 'Fotos reveladas en papel fotográfico, ordenadas y empaquetadas con mucho amor en una cajita adorable. Un regalo que emociona de verdad — para dar o para guardarte vos.',
    img: '/fotos/familiar.jpg',
    alt: 'Cajita de fotos reveladas con empaquetado especial',
    objectPosition: 'center 65%',
    ctaMsg: 'Hola%20Fabiana%2C%20me%20interesa%20la%20cajita%20de%20revelados',
    ctaLabel: 'Quiero mi cajita',
  },
]

function ProductItem({ product, index }: { product: typeof products[0]; index: number }) {
  const { ref, inView } = useInView()
  const isEven = index % 2 === 0

  return (
    <div
      ref={ref}
      className={`${styles.item} ${isEven ? styles.itemReverse : ''} ${inView ? styles.visible : ''}`}
    >
      <div className={styles.imageWrap}>
        <Image src={product.img} alt={product.alt} fill style={{ objectFit: 'cover', objectPosition: product.objectPosition ?? 'center' }} />
        <div className={styles.imageOverlay} />
      </div>
      <div className={styles.textWrap}>
        <span className={styles.num}>{product.num}</span>
        <div className={styles.divider} />
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.desc}>{product.desc}</p>
        <a
          href={`https://wa.me/59898385970?text=${product.ctaMsg}`}
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {product.ctaLabel} →
        </a>
      </div>
    </div>
  )
}

export default function Photobooks() {
  const { ref, inView } = useInView()

  return (
    <section id="fotolibros" className={styles.section}>
      <div
        ref={ref}
        className={`${styles.header} fade-up ${inView ? 'visible' : ''}`}
      >
        <p className="section-label">Otros Servicios</p>
        <h2 className={styles.title}>Tus recuerdos, <em>en tus manos</em></h2>
        <p className={styles.subtitle}>
          Llevate tus fotos favoritas impresas, con el cuidado y el detalle que merecen.
        </p>
      </div>

      <div className={styles.list}>
        {products.map((p, i) => (
          <ProductItem key={p.num} product={p} index={i} />
        ))}
      </div>
    </section>
  )
}
