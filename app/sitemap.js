import { SITE } from '../lib/site'

export default function sitemap() {
  return ['', '/contact', '/privacy', '/terms'].map((path) => ({ url: `${SITE.url}${path}` }))
}
