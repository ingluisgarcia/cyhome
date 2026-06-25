import { useState } from 'react'
import QRCode from 'react-qr-code'

function downloadQrAsPng() {
  const svg = document.getElementById('QRCode')
  if (!svg) return

  const svgData = new XMLSerializer().serializeToString(svg)
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  const img = new Image()

  img.onload = () => {
    canvas.width = img.width
    canvas.height = img.height
    ctx.drawImage(img, 0, 0)
    const pngFile = canvas.toDataURL('image/png')
    const downloadLink = document.createElement('a')
    downloadLink.download = 'QRCode'
    downloadLink.href = pngFile
    downloadLink.click()
  }

  img.src = `data:image/svg+xml;base64,${btoa(svgData)}`
}

export default function QrGenerator() {
  const [texto, setTexto] = useState('https://cymaniatico.com')

  return (
    <div className="qr-generator">
      <label className="qr-generator__label" htmlFor="texto">
        Ingrese el enlace
      </label>
      <input
        className="qr-generator__input"
        id="texto"
        name="texto"
        type="url"
        value={texto}
        onChange={(event) => setTexto(event.target.value)}
        required
      />

      <div className="qr-generator__preview">
        <QRCode id="QRCode" value={texto} size={220} />
      </div>

      <button className="button button--primary" type="button" onClick={downloadQrAsPng}>
        Descargar QR
      </button>
    </div>
  )
}
