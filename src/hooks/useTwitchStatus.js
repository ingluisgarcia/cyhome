import { useEffect, useState } from 'react'

const DECAPI_BASE = 'https://decapi.me/twitch'

async function fetchText(url) {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`)
  }
  return response.text()
}

export function useTwitchStatus(username) {
  const [status, setStatus] = useState({
    loading: true,
    isLive: false,
    title: '',
    game: '',
    viewers: 0,
    avatar: '',
    error: null,
  })

  useEffect(() => {
    let cancelled = false

    async function loadStatus() {
      try {
        const [uptime, title, game, viewers, avatar] = await Promise.all([
          fetchText(`${DECAPI_BASE}/uptime/${username}`),
          fetchText(`${DECAPI_BASE}/title/${username}`),
          fetchText(`${DECAPI_BASE}/game/${username}`),
          fetchText(`${DECAPI_BASE}/viewercount/${username}`),
          fetchText(`${DECAPI_BASE}/avatar/${username}`),
        ])

        if (cancelled) return

        const isLive = !uptime.toLowerCase().includes('offline')
        const parsedViewers = Number.parseInt(viewers, 10)

        setStatus({
          loading: false,
          isLive,
          title: title.trim(),
          game: game.trim(),
          viewers: Number.isNaN(parsedViewers) ? 0 : parsedViewers,
          avatar: avatar.trim(),
          error: null,
        })
      } catch (error) {
        if (cancelled) return

        setStatus((current) => ({
          ...current,
          loading: false,
          error: error.message,
        }))
      }
    }

    loadStatus()
    const interval = setInterval(loadStatus, 60_000)

    return () => {
      cancelled = true
      clearInterval(interval)
    }
  }, [username])

  return status
}
