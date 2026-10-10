import Link from 'next/link'
import { LegalPage, Section, Mail } from '../../components/Legal'
import { SITE, CREDIT_COSTS } from '../../lib/site'

export const metadata = {
  title: 'Terms',
  description: `The terms for using ${SITE.product} and this website.`,
  alternates: { canonical: '/terms' },
}

/** Mirrors ../AB-sales/src/pages/legal/Terms.tsx (2026-10-10), plus the website section. */
export default function Terms() {
  return (
    <LegalPage
      title='Terms'
      intro={
        <p>
          These terms are an agreement between you, or the organisation you represent (&quot;you&quot;), and {SITE.company}{' '}
          (&quot;we&quot;, &quot;us&quot;) for the use of {SITE.product}. By creating an account or using {SITE.product}, you agree to
          them. If you are accepting for an organisation, you confirm you are allowed to do so.
        </p>
      }
    >
      <Section id='website' title='This website'>
        <p>
          This website describes {SITE.product}. We keep it accurate, but prices and features can change. The price shown at checkout
          in {SITE.product} is the one that applies.
        </p>
      </Section>

      <Section id='service' title='The service'>
        <p>
          {SITE.product} lets you run outbound call and email campaigns with AI agents, answer inbound calls with an AI receptionist,
          and manage replies. Features depend on your plan and may change as we improve the product.
        </p>
        <p>
          AI agents can make mistakes. Calls are made and emails are sent on your behalf, so review your agents&apos; instructions,
          templates and settings before you start a campaign, and check AI-drafted replies before approving them.
        </p>
      </Section>

      <Section id='account' title='Your account'>
        <ul>
          <li>Give accurate information and keep it up to date.</li>
          <li>Keep your password and API keys secure. You are responsible for activity under your account and keys.</li>
          <li>Admins in your workspace control who has access and what role they have.</li>
        </ul>
      </Section>

      <Section id='contacting' title='Contacting people lawfully'>
        <p>You are responsible for every call and email made through your workspace. You must:</p>
        <ul>
          <li>have a lawful basis, such as consent where it is required, to call or email each person in your lead lists;</li>
          <li>follow the telemarketing, anti-spam and data protection laws that apply to you and to the people you contact, for example India&apos;s rules on unsolicited commercial communication and do-not-disturb preferences, the US Telephone Consumer Protection Act and CAN-SPAM Act, and the GDPR;</li>
          <li>tell people a call is being recorded, or get their consent, where the law requires it;</li>
          <li>honour requests to stop being contacted.</li>
        </ul>
      </Section>

      <Section id='acceptable-use' title='What you must not do'>
        <ul>
          <li>Use {SITE.product} for spam, harassment, fraud, or to impersonate a person or organisation.</li>
          <li>Send unlawful, deceptive or harmful content, or contact people you have no right to contact.</li>
          <li>Try to break, overload or get around the security or limits of the service.</li>
          <li>Copy, resell or reverse engineer the service, except where the law allows it.</li>
        </ul>
      </Section>

      <Section id='data' title='Your data'>
        <p>
          You own the data you put into {SITE.product}. You give us permission to store and process it only to provide the service to
          you. Our <Link href='/privacy'>Privacy policy</Link> explains how we handle personal data.
        </p>
      </Section>

      <Section id='billing' title='Plans, credits and payment'>
        <ul>
          <li>Subscriptions are billed monthly or annually in advance through Stripe or Razorpay, at the price shown at checkout.</li>
          <li>
            Calls and emails use credits: {CREDIT_COSTS.perCallMinute} credit per call minute and {CREDIT_COSTS.perEmail} credits per
            email. Credits are bought separately from your plan.
          </li>
          <li>Plans include monthly limits on calls, emails and team members, shown on the plan.</li>
          <li>You can manage your payment method, invoices and cancellation from Settings, under Plan &amp; credits.</li>
          <li>If you think you were charged in error, email <Mail />.</li>
        </ul>
      </Section>

      <Section id='third-party' title='Connected services'>
        <p>
          When you connect a mailbox, CRM or other service, such as Google, Microsoft, HubSpot or Apollo, your use of that service is
          also governed by its own terms. We are not responsible for those services.
        </p>
      </Section>

      <Section id='suspension' title='Suspension and ending your account'>
        <p>
          You can stop using {SITE.product} at any time. We may suspend or close an account that breaks these terms, puts others at
          risk, or is required to be closed by law. Where reasonable, we will tell you first.
        </p>
      </Section>

      <Section id='disclaimer' title='Disclaimer'>
        <p>
          {SITE.product} is provided &quot;as is&quot;. To the extent the law allows, we do not promise that it will be uninterrupted
          or error-free, or that AI output will be accurate or suitable for your purpose.
        </p>
      </Section>

      <Section id='liability' title='Limitation of liability'>
        <p>
          To the extent the law allows, we are not liable for indirect or consequential losses, such as lost profits or lost data, and
          our total liability to you is limited to the amount you paid us in the 12 months before the claim.
        </p>
      </Section>

      <Section id='indemnity' title='Responsibility for your campaigns'>
        <p>
          You agree to cover any claims, fines or costs brought against us because of the calls and emails made through your workspace
          or your breach of these terms.
        </p>
      </Section>

      <Section id='changes' title='Changes to these terms'>
        <p>
          We may update these terms. If a change is significant, we will update the date at the top of this page and let account owners
          know by email before it takes effect. Continuing to use {SITE.product} after that means you accept the new terms.
        </p>
      </Section>

      <Section id='law' title='Governing law'>
        <p>
          These terms are governed by the laws of {SITE.governingLaw}, and the courts of {SITE.governingLaw} have jurisdiction over
          any dispute.
        </p>
      </Section>

      <Section id='contact' title='Contact'>
        <p>{SITE.company}, <Mail /></p>
      </Section>
    </LegalPage>
  )
}
