import { channel } from '../data/channelData'

export default function LiveStatus({ status }) {
  if (status.loading) {
    return (
      <div className="live-card live-card--loading" aria-live="polite">
        <span className="live-card__pulse" />
        Consultando estado del canal...
      </div>
    )
  }

  if (status.error) {
    return (
      <div className="live-card live-card--offline">
        <span className="live-card__dot" />
        Estado del canal no disponible en este momento
      </div>
    )
  }

  if (!status.isLive) {
    return (
      <div className="live-card live-card--offline">
        <span className="live-card__dot" />
        Actualmente offline
      </div>
    )
  }

  return (
    <div className="live-card live-card--online">
      <div className="live-card__header">
        <span className="live-card__dot live-card__dot--live" />
        <strong>En vivo ahora</strong>
        <span className="live-card__viewers">{status.viewers} espectadores</span>
      </div>
      <p className="live-card__title">{status.title}</p>
      <p className="live-card__game">{status.game}</p>
      <a className="button button--primary" href={channel.twitchUrl} target="_blank" rel="noopener noreferrer">
        Ver en Twitch
      </a>
    </div>
  )
}
