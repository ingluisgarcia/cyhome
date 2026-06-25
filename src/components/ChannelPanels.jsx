import { channelPanels } from '../data/channelData'

function PanelContent({ panel }) {
  if (panel.id === 'setup') {
    return (
      <dl className="channel-panel__specs">
        {panel.items.map((item) => (
          <div key={item.label} className="channel-panel__spec">
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>
    )
  }

  return (
    <ul className="channel-panel__list">
      {panel.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

function ChannelPanel({ panel }) {
  return (
    <section className="channel-panel" aria-labelledby={`panel-${panel.id}`}>
      <h2 id={`panel-${panel.id}`}>{panel.title}</h2>
      <PanelContent panel={panel} />
    </section>
  )
}

export default function ChannelPanels() {
  return (
    <div className="channel-panels-row">
      {channelPanels.map((panel) => (
        <ChannelPanel key={panel.id} panel={panel} />
      ))}
    </div>
  )
}
