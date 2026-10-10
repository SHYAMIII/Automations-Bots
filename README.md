# Auto Botz website

Marketing site for Hayo, at https://autobotz.site. Next.js 14 (App Router) and Tailwind CSS.

## Run it

```
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Environment variables

| Name | Needed | What it does |
|---|---|---|
| `NEXT_PUBLIC_APP_URL` | Before launch | URL of the Hayo app, e.g. `https://app.autobotz.site`. Sign-in and plan links stay hidden until it is set. |
| `CONTACT_WEBHOOK_URL` | Optional | Google Apps Script that saves contact form messages to the sheet. Defaults to the current script. |

## Where things live

- `lib/site.js`: company name, email, domain, credit prices. Change facts here, not in page text.
- `app/privacy` and `app/terms`: mirror the legal pages in the Hayo app (`AB-sales/src/pages/legal`). Change both together and bump `legalUpdated` in `lib/site.js`.
- `components/InboxPreview.js`: a drawing of the app's Inbox. Replace it with a real screenshot when you have one.

## Writing rules for this site

No purple gradients, pill-shaped buttons, emoji icons, em dashes, scroll or cursor animations, stock or AI-generated photos, made-up reviews, metrics, logos or customer counts. Every product claim must match what Hayo actually does.
