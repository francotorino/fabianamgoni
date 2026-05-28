'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import styles from './Hero.module.css'

const SERVICES = ['Bodas', 'Cumpleaños', 'Fiestas', 'Eventos', 'Estudio']

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [fading, setFading] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setCurrent(prev => (prev + 1) % SERVICES.length)
        setFading(false)
      }, 380)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className={styles.hero}>
      <div className={styles.bg}>
        <Image
          src="/fotos/ia.png"
          alt="Fotografía de boda — Fabiana M. Goñi"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
          priority
          quality={85}
        />
      </div>
      <div className={styles.overlay} />

      {/* Navigation */}
      <nav className={styles.nav}>
        <a href="#" className={styles.navBrand}>Fabiana M. Goñi</a>
        <button
          className={styles.menuToggle}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Menú"
        >
          <span /><span /><span />
        </button>
        <ul className={`${styles.navLinks} ${menuOpen ? styles.navOpen : ''}`}>
          <li><a href="#servicios" onClick={() => setMenuOpen(false)}>Servicios</a></li>
          <li><a href="#sobre-mi" onClick={() => setMenuOpen(false)}>Sobre mí</a></li>
          <li><a href="#fotolibros" onClick={() => setMenuOpen(false)}>Fotolibros</a></li>
          <li><a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto</a></li>
        </ul>
      </nav>

      {/* Hero Content */}
      <div className={styles.content}>
        <p className={styles.label}>Ciudad de la Costa · Montevideo</p>
        <h1 className={styles.name}>
          <span>Fabiana</span>
          <span className={styles.nameSub}>M. Goñi</span>
        </h1>
        <div className={styles.serviceRow}>
          <span className={styles.servicePrefix}>Fotografía</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>Información</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  )
}
