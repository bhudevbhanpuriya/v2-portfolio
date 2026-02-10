import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { tokens } from '~/components/theme-provider/theme';
import { baseMeta } from '~/utils/meta';
import styles from './contact.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Contact',
    description: 'Get in touch with me at bhudevbhanp@gmail.com',
  });
};

export const Contact = () => {
  return (
    <Section className={styles.contact}>
      <div className={styles.form}>
        <Heading
          className={styles.title}
          data-status="entered"
          level={3}
          as="h1"
          style={{ transitionDelay: tokens.base.durationXS }}
        >
          <DecoderText text="Get in touch" start delay={300} />
        </Heading>
        <Divider
          className={styles.divider}
          data-status="entered"
          style={{ transitionDelay: tokens.base.durationS }}
        />
        <Text
          className={styles.description}
          data-status="entered"
          size="l"
          as="p"
          style={{ transitionDelay: tokens.base.durationM }}
        >
          Feel free to reach out if you're interested in discussing projects, collaborations, or just want to say hi!
        </Text>
        <div className={styles.emailContainer}>
          <Text
            className={styles.emailText}
            data-status="entered"
            size="xl"
            as="div"
            style={{ transitionDelay: tokens.base.durationL }}
          >
            bhudevbhanp@gmail.com
          </Text>
        </div>
        <Button
          className={styles.button}
          data-status="entered"
          style={{ transitionDelay: tokens.base.durationXL }}
          icon="send"
          href="mailto:bhudevbhanp@gmail.com"
        >
          Send email
        </Button>
      </div>
      <Footer className={styles.footer} />
    </Section>
  );
};
