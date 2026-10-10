/**
 * Facts the site states about the company and product. Change them here, not
 * in page text. Product facts were checked against the AB Sales app
 * (../AB-sales/src) on 2026-10-10.
 */
export const SITE = {
  company: 'Auto Botz',
  product: 'AB Sales',
  url: 'https://autobotz.site',
  email: 'support@autobotz.site',
  whatsapp: { display: '+91 93515 52219', link: 'https://wa.me/919351552219' },
  governingLaw: 'India',
  /** Bump this whenever the Privacy policy or Terms change. */
  legalUpdated: '10 October 2026',
}

/**
 * Where the AB Sales app is hosted, e.g. https://app.autobotz.site.
 * Sign-in and plan links are hidden until this is set, so the site never
 * ships a broken link.
 */
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, '') || null

/**
 * Credit packs and costs. Must match CREDIT_PACKAGES and CREDIT_COSTS in
 * ../AB-sales/src/lib/billing.ts (checked 2026-10-10).
 */
export const CREDIT_PACKS = [
  { name: 'Starter', price: 10, credits: 1000 },
  { name: 'Value', price: 25, credits: 3000 },
  { name: 'Growth', price: 50, credits: 7500 },
  { name: 'Enterprise', price: 100, credits: 17000 },
]
export const CREDIT_COSTS = { perCallMinute: 1, perEmail: 0.1 }
