import { channel } from '../data/channelData'
import LiveStatus from './LiveStatus'

export default function StreamerInfo({ status }) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__glow" aria-hidden="true" />

      <div className="hero__profile">
        <div className="hero__avatar-wrap">
          <img className="hero__avatar" src={channel.avatar} alt={`Avatar de ${channel.displayName}`} />
          {status.isLive && <span className="hero__live-ring" aria-hidden="true" />}
        </div>

        <div className="hero__content">
          <p className="eyebrow">Página oficial del Streamer</p>
          <h1 id="hero-title">{channel.displayName}</h1>
          <p className="hero__location">{channel.location}</p>

          <div className="hero__tags">
            {channel.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>

        </div>
      </div>

      <div className="about">
        <h2>Sobre el canal</h2>
        <p>{channel.description}</p>
      </div>
    </section>
  )
}
