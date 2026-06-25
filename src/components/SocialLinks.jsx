import SocialIcon from './SocialIcon'
import { socialLinks } from '../data/channelData'

export default function SocialLinks() {
  return (
    <section className="social" aria-labelledby="social-title">
      <div className="section-heading">
        <p className="eyebrow">Conecta</p>
        <h2 id="social-title">Redes sociales</h2>
        <p className="section-copy">
          Sígueme en todas mis plataformas y no te pierdas los directos.
        </p>
      </div>

      <ul className="social__grid">
        {socialLinks.map((link) => (
          <li key={link.id}>
            <a
              className="social__card"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="social__icon-wrap">
                <SocialIcon id={link.id} className="social__icon" />
              </span>
              <span className="social__text">
                <span className="social__label">{link.label}</span>
                <span className="social__handle">{link.handle}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
