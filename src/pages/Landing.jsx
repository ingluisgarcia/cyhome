import ChannelPanels from '../components/ChannelPanels'
import SocialLinks from '../components/SocialLinks'
import StreamerInfo from '../components/StreamerInfo'
import { channel } from '../data/channelData'
import { useTwitchStatus } from '../hooks/useTwitchStatus'

export default function Landing() {
  const status = useTwitchStatus(channel.username)

  return (
    <div className="page page--landing">
      <header className="site-header">
        <div className="site-header__brand">
          <span className="site-header__mark" aria-hidden="true" />
          <span>{channel.displayName}</span>
        </div>
        <a className="button button--ghost" href={channel.twitchUrl} target="_blank" rel="noopener noreferrer">
          Ir a Twitch
        </a>
      </header>

      <main className="layout">
        <StreamerInfo status={status} />
        <SocialLinks />
        <ChannelPanels />
      </main>

      <footer className="site-footer">
        <p>
          © {new Date().getFullYear()} {channel.displayName}. Hecho con ❤️ para la comunidad.
        </p>
      </footer>
    </div>
  )
}
