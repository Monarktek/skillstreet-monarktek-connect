import * as React from 'npm:react@18.3.1'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface Props {
  name?: string
  email?: string
  message?: string
}

const Email = ({ name, email, message }: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New contact message from {name || 'a visitor'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={heading}>New contact message</Heading>
        <Text style={muted}>Someone reached out through the MonarkTek website.</Text>
        <Hr style={hr} />
        <Section>
          <Text style={label}>Name</Text>
          <Text style={value}>{name || '—'}</Text>
          <Text style={label}>Email</Text>
          <Text style={value}>{email || '—'}</Text>
          <Text style={label}>Message</Text>
          <Text style={value}>{message || '—'}</Text>
        </Section>
        <Hr style={hr} />
        <Text style={footer}>Reply directly to {email || 'the sender'} to respond.</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: (data: Props) => `New contact message from ${data?.name || 'a visitor'}`,
  displayName: 'Contact Notification',
  previewData: {
    name: 'Jane Doe',
    email: 'jane@example.com',
    message: 'Hi, I would love to learn more about what MonarkTek is building.',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, Helvetica, sans-serif' }
const container = { padding: '24px 28px', maxWidth: '560px', margin: '0 auto' }
const heading = { fontSize: '22px', fontWeight: '700', color: '#0b1120', margin: '0 0 4px' }
const muted = { fontSize: '14px', color: '#64748b', margin: '0' }
const hr = { borderColor: '#e2e8f0', margin: '20px 0' }
const label = { fontSize: '12px', textTransform: 'uppercase' as const, letterSpacing: '0.05em', color: '#94a3b8', margin: '14px 0 2px' }
const value = { fontSize: '15px', color: '#0f172a', margin: '0', whiteSpace: 'pre-wrap' as const }
const footer = { fontSize: '13px', color: '#94a3b8', margin: '0' }