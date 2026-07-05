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
} from "@react-email/components";

interface ContactEmailProps {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}

export default function ContactEmail({
  name,
  email,
  phone,
  service,
  message,
}: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>
        New enquiry from {name} — {service || "General"}
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Text style={brand}>Xlinks Educational &amp; Travels</Text>
            <Heading style={heading}>New Contact Form Submission</Heading>
          </Section>

          <Section style={card}>
            <Row label="Name" value={name} />
            <Row label="Email" value={email} />
            <Row label="Phone" value={phone || "—"} />
            <Row label="Service" value={service || "—"} />

            <Hr style={hr} />

            <Text style={label}>Message</Text>
            <Text style={messageText}>{message}</Text>
          </Section>

          <Section style={ctaSection}>
            <Text style={ctaText}>
              Reply directly to this email to respond to {name.split(" ")[0]}.
            </Text>
          </Section>

          <Text style={footer}>
            This message was sent from the contact form on
            xlinkseducationalandtravels.org
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

function Row({ label: rowLabel, value }: { label: string; value: string }) {
  return (
    <Section style={row}>
      <Text style={label}>{rowLabel}</Text>
      <Text style={value_}>{value}</Text>
    </Section>
  );
}

const main = {
  backgroundColor: "#f4f6f5",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',
  padding: "32px 0",
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  maxWidth: "560px",
  borderRadius: "16px",
  overflow: "hidden",
  border: "1px solid #e5e7eb",
};

const header = {
  background: "linear-gradient(135deg, #059669, #0d9488)",
  padding: "32px 32px 28px",
};

const brand = {
  color: "#d1fae5",
  fontSize: "12px",
  fontWeight: 700,
  letterSpacing: "1.5px",
  textTransform: "uppercase" as const,
  margin: "0 0 8px",
};

const heading = {
  color: "#ffffff",
  fontSize: "22px",
  fontWeight: 800,
  margin: "0",
};

const card = {
  padding: "28px 32px",
};

const row = {
  marginBottom: "14px",
};

const label = {
  color: "#6b7280",
  fontSize: "11px",
  fontWeight: 700,
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
  margin: "0 0 2px",
};

const value_ = {
  color: "#111827",
  fontSize: "15px",
  fontWeight: 600,
  margin: "0",
};

const messageText = {
  color: "#374151",
  fontSize: "15px",
  lineHeight: "1.6",
  margin: "6px 0 0",
  whiteSpace: "pre-wrap" as const,
};

const hr = {
  borderColor: "#e5e7eb",
  margin: "20px 0",
};

const ctaSection = {
  padding: "0 32px 28px",
};

const ctaText = {
  color: "#059669",
  fontSize: "13px",
  fontWeight: 600,
  margin: "0",
};

const footer = {
  color: "#9ca3af",
  fontSize: "12px",
  textAlign: "center" as const,
  padding: "20px 32px",
};
