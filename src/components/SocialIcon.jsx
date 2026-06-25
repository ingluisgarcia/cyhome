import {
  FaFacebook,
  FaGithub,
  FaGlobe,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaTwitch,
  FaXTwitter,
} from 'react-icons/fa6'
import { SiKick } from 'react-icons/si'

const iconMap = {
  twitch: FaTwitch,
  twitter: FaXTwitter,
  facebook: FaFacebook,
  kick: SiKick,
  instagram: FaInstagram,
  tiktok: FaTiktok,
  linkedin: FaLinkedin,
  github: FaGithub,
  website: FaGlobe,
}

export default function SocialIcon({ id, className }) {
  const Icon = iconMap[id] ?? FaGlobe
  return <Icon className={className} aria-hidden="true" />
}
