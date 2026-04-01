import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Section,
  Text,
  Link,
} from '@react-email/components';

type AdCodeRequestProps = {
  videoLinks: { id: string; url: string }[];
  details?: string;
};

export const AdCodeRequestEmail = ({
  videoLinks,
  details,
}: AdCodeRequestProps) => (
  <Html>
    <Head />
    <Body style={styles.body}>
      <Container style={styles.container}>
        <Heading style={styles.heading}>New Ad Code Request</Heading>
        <Text style={styles.subtext}>
          A business has submitted a request for ad codes. See details below:
        </Text>
        <Text style={styles.label}>
          {videoLinks.length > 1 ? 'Video Links:' : 'Video Link:'}
        </Text>
        {videoLinks.map((video, index) => (
          <Section key={index} style={styles.card}>
            <Link href={video.url} style={styles.link}>
              {video.url}
            </Link>
          </Section>
        ))}
        {details && (
          <>
            <Text style={styles.label}>Additional Details:</Text>
            <Text style={styles.details}>{details}</Text>
          </>
        )}
        <Hr
          style={{
            borderColor: '#e5e7eb',
            marginTop: '20px',
          }}
        />
        <Text
          style={{
            fontSize: '12px',
            color: '#9ca3af',
            marginTop: '30px',
            textAlign: 'center',
          }}
        >
          This request was submitted from your ad request form.
        </Text>
      </Container>
    </Body>
  </Html>
);

const styles = {
  body: {
    backgroundColor: '#f4f4f5',
    fontFamily: 'Arial, sans-serif',
    padding: '20px 0',
  },
  container: {
    backgroundColor: '#ffffff',
    margin: '0 auto',
    padding: '30px',
    borderRadius: '12px',
    maxWidth: '600px',
  },
  heading: {
    fontSize: '24px',
    fontWeight: '600',
    marginBottom: '10px',
  },
  subtext: {
    fontSize: '14px',
    color: '#6b7280',
    marginBottom: '20px',
  },
  card: {
    marginBottom: '16px',
  },
  label: {
    fontSize: '12px',
    fontWeight: '600',
    color: '#9ca3af',
    textTransform: 'uppercase',
    marginBottom: '8px',
  },
  link: {
    fontSize: '14px',
    color: '#2563eb',
    marginBottom: '8px',
  },
  details: {
    fontSize: '14px',
    color: '#111827',
    marginBottom: '10px',
  },
  divider: {
    borderColor: '#e5e7eb',
    marginTop: '15px',
  },
};

export default AdCodeRequestEmail;
