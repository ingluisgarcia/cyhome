import QrGenerator from '../components/QrGenerator'

export default function QrPage() {
  return (
    <div className="page page--qr">
      <main className="qr-page">
        <div className="qr-page__card">
          <p className="eyebrow">Herramienta interna</p>
          <h1>Generador de QR</h1>
          <p className="section-copy">
            Crea y descarga códigos QR para compartir enlaces rápidamente.
          </p>
          <QrGenerator />
        </div>
      </main>
    </div>
  )
}
