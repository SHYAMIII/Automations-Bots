import Link from 'next/link'
import { LegalPage, Section, Mail } from '../../components/Legal'
import { SITE } from '../../lib/site'

export const metadata = {
  title: 'Privacy policy',
  description: `How ${SITE.company} handles personal data on this website and in ${SITE.product}.`,
  alternates: { canonical: '/privacy' },
}

/**
 * Service providers that receive personal data through AB Sales. Mirrors
 * PROVIDERS in ../AB-sales/src/pages/legal/PrivacyPolicy.tsx (2026-10-10).
 */
const PROVIDERS = [
  { name: 'Supabase', purpose: 'Hosts our database.' },
  { name: 'Vapi, and the voice providers it uses such as ElevenLabs', purpose: 'Places and receives phone calls, generates the agent\'s voice, and produces call recordings and transcripts.' },
  { name: 'Groq', purpose: 'Runs the AI models that write emails, draft replies, and summarise and classify calls and emails.' },
  { name: 'Pinecone', purpose: 'Stores searchable copies of the documents you add to an agent\'s knowledge.' },
  { name: 'Google', purpose: 'Sends and reads mail for a Gmail or Google Workspace mailbox you connect.' },
  { name: 'Microsoft', purpose: 'Sends and reads mail for an Outlook or Microsoft 365 mailbox you connect.' },
  { name: 'Apollo', purpose: 'Searches for and returns lead details when you use Apollo search.' },
  { name: 'HubSpot', purpose: 'Imports contacts and receives activity when you connect a HubSpot account.' },
  { name: 'Stripe and Razorpay', purpose: 'Process subscription and credit payments.' },
  { name: 'Our email delivery provider', purpose: 'Sends account emails such as verification, password reset and team invitations.' },
  { name: 'Google Fonts', purpose: 'Delivers the fonts used in the app. Your browser requests them from Google, which receives your IP address.' },
]

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title='Privacy policy'
      intro={
        <p>
          This website and {SITE.product} are operated by {SITE.company} (&quot;we&quot;, &quot;us&quot;). This policy explains what
          personal data we handle, why, who we share it with, and the choices you have. If you have a question, email <Mail />.
        </p>
      }
    >
      <Section id='website' title='This website'>
        <p>
          When you send the contact form on this site, we receive your name, email address and message, plus your company, phone
          number and area of interest if you give them. We store them in a Google Sheet and use them only to reply to you and to
          arrange a demo. We delete them on request.
        </p>
        <p>
          If you message us on WhatsApp, WhatsApp (Meta) handles that conversation under its own privacy policy.
        </p>
        <p>
          This website sets no cookies and uses no analytics or advertising trackers. Its fonts are served from our own site. The
          company that hosts the site keeps standard server logs, including IP addresses, to run and protect it.
        </p>
        <p>The rest of this policy covers the {SITE.product} app.</p>
      </Section>

      <Section id='roles' title='Two kinds of data'>
        <p>
          <strong>Your account data.</strong> Information about you and your team that we need to run your account, such as names,
          email addresses and billing details. For this data we decide how it is used.
        </p>
        <p>
          <strong>Your workspace data.</strong> The leads you upload or import, the calls and emails made to them, and the content you
          add to agents. You decide what goes into your workspace and who is contacted. We process this data only to provide{' '}
          {SITE.product} to you, and you are responsible for having a lawful basis to contact the people in your lead lists.
        </p>
      </Section>

      <Section id='collect' title='What we collect'>
        <ul>
          <li><strong>Account details:</strong> your name or username, email address, company name, role, and a hashed version of your password.</li>
          <li><strong>Lead data:</strong> whatever you upload or import into a lead list, typically names, email addresses, phone numbers, company names and job titles.</li>
          <li><strong>Calls:</strong> phone numbers, call times and durations, audio recordings, transcripts, and AI-generated summaries and sentiment.</li>
          <li><strong>Emails:</strong> the emails sent by your campaigns and the replies that arrive in a mailbox you connect, including AI-drafted replies waiting for your review.</li>
          <li><strong>Agent knowledge:</strong> documents, web pages and notes you add so an agent can answer questions.</li>
          <li><strong>Connected accounts:</strong> access tokens or app passwords for mailboxes and CRMs you connect. These are encrypted before they are stored.</li>
          <li><strong>Billing:</strong> your plan, credit balance and payment history. Card and bank details are entered on Stripe or Razorpay checkout pages and are not stored by us.</li>
          <li><strong>Security logs:</strong> a record of actions taken in your workspace, including the user, time and IP address.</li>
        </ul>
      </Section>

      <Section id='use' title='How we use it'>
        <ul>
          <li>To run the service: place and answer calls, send campaign emails, draft and classify replies, and show you results.</li>
          <li>To manage your account and billing, including verification, password reset and team invitation emails.</li>
          <li>To keep the service secure, investigate problems and prevent abuse.</li>
          <li>To answer your support requests.</li>
        </ul>
        <p>We do not sell personal data, and we do not use your workspace data to train AI models.</p>
      </Section>

      <Section id='providers' title='Who we share it with'>
        <p>We share data only with the service providers we use to run {SITE.product}, and only as needed for the purpose listed:</p>
        <ul>
          {PROVIDERS.map((p) => (
            <li key={p.name}><strong>{p.name}:</strong> {p.purpose}</li>
          ))}
        </ul>
        <p>
          Some of these providers process data outside India, including in the United States. We may also disclose data if the law
          requires it.
        </p>
      </Section>

      <Section id='cookies' title='Cookies and browser storage'>
        <p>
          In the {SITE.product} app we use only what it needs to work: a sign-in token, kept in a cookie and in your browser&apos;s
          storage, and a cookie that remembers whether the sidebar is open. We do not use advertising or analytics cookies.
        </p>
      </Section>

      <Section id='retention' title='How long we keep it'>
        <p>
          We keep your data for as long as your account is active. You can delete lead lists, leads, campaigns, templates and other
          workspace content yourself at any time. To delete your whole account and its data, email <Mail />. We will delete it, except
          for records we must keep by law, such as billing records.
        </p>
      </Section>

      <Section id='security' title='Security'>
        <p>
          Passwords are stored as hashes, not in readable form. Mailbox and CRM credentials are encrypted before they are stored. Each
          workspace&apos;s data is kept separate from other workspaces, and actions are recorded in an audit log that admins can review.
        </p>
      </Section>

      <Section id='rights' title='Your rights'>
        <p>
          Depending on where you live, including under India&apos;s Digital Personal Data Protection Act, 2023, you can ask us to tell
          you what data we hold about you, correct it, or delete it, and you can withdraw consent you have given. Email <Mail /> and we
          will respond. If you are not satisfied with our response, you can raise a complaint with your data protection authority.
        </p>
      </Section>

      <Section id='contacted' title={`If a business contacted you through ${SITE.product}`}>
        <p>
          If you received a call or email from a business using {SITE.product}, that business decided to contact you and controls your
          data. Please contact them first. You can also email <Mail /> and we will pass your request on.
        </p>
      </Section>

      <Section id='children' title='Children'>
        <p>{SITE.product} is a business tool and is not intended for anyone under 18.</p>
      </Section>

      <Section id='changes' title='Changes to this policy'>
        <p>
          If we make significant changes, we will update the date at the top of this page and let account owners know by email. Our{' '}
          <Link href='/terms'>Terms</Link> explain the rules for using {SITE.product}.
        </p>
      </Section>

      <Section id='contact' title='Contact'>
        <p>{SITE.company}, <Mail /></p>
      </Section>
    </LegalPage>
  )
}
