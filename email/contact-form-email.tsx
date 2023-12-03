import React from "react";
import {
  Html,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  senderEmail: String;
  message: string;
};

const ContactFormEmail = ({ message, senderEmail }: ContactFormEmailProps) => {
  return (
    <Html>
      <Head></Head>
      <Tailwind>
        <Container className="bg-gray-100 text-black">
          <Section className="bg-white borderBlack my-10 px-10 py-4">
            <Heading className="leading-tight">
              You received the following Email
            </Heading>
            <Text>{message}</Text>
            <Hr />
            <Text>{`The sender's email is ${senderEmail}`} </Text>
          </Section>
        </Container>
      </Tailwind>
    </Html>
  );
};

export default ContactFormEmail;
