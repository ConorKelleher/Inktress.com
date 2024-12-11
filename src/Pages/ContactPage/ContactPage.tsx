import { Group, Stack, Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import ArrowButton from "components/ArrowButton/ArrowButton";
import getCopy from "constants/localisation";
import usePageTitle from "localboast/hooks/usePageTitle";
import PageHeader from "Pages/components/PageHeader";
import PageWrapper from "Pages/components/PageWrapper";
import { useCallback, useRef, useState } from "react";
import styles from "./styles.module.sass";
import { cx } from "localboast";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
};

const ContactPage = () => {
  const [sending, setSending] = useState(false);
  usePageTitle(getCopy("contactTitle"));

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
    },

    validate: {
      firstName: (value) => (/^.{2,30}$/.test(value) ? null : "Please enter a first name between 2-30 characters"),
      lastName: (value) => (/^.{0,30}$/.test(value) ? null : "Please limit your last name to 30 characters"),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email address"),
      phoneNumber: (value) =>
        !value || /^\+?[\d ()-]{5,20}$/.test(value) ? null : "Please enter a valid phone number",
      message: (value) => {
        if (value.length < 20) {
          return "Please tell me a bit more about your request";
        }
        if (value.length > 500) {
          return "Please limit your message to 500 characters";
        }
        return null;
      },
    },
  });
  const formElRef = useRef<HTMLFormElement>();

  const onSubmit = useCallback((values: FormValues) => {
    setSending(true);
    setTimeout(() => setSending(false), 4000);
    // @ts-ignore
    // window.emailjs.sendForm("contact_service", "contact_form", formElRef.current).then(
    //   () => {
    //     debugger;
    //     setSending(false);
    //     console.log("SUCCESS!");
    //   },
    //   (error: Error) => {
    //     debugger;
    //     setSending(false);
    //     console.log("FAILED...", error);
    //   }
    // );
  }, []);

  return (
    <PageWrapper>
      <PageHeader imageId="ContactHeader" />
      <form
        ref={(ref) => ref && (formElRef.current = ref)}
        onSubmit={form.onSubmit(onSubmit)}
        className={cx(styles.form, { [styles.formSending]: sending })}
        method="get"
        autoComplete="on"
      >
        <Stack gap="lg" p="lg">
          <Group gap="md" w="100%" className={styles.smallInputGroup}>
            <TextInput
              withAsterisk
              label="First Name"
              name="firstName"
              placeholder="Type Here"
              {...form.getInputProps("firstName")}
            />
            <TextInput label="Last Name" name="lastName" placeholder="Type Here" {...form.getInputProps("lastName")} />
          </Group>
          <Group gap="md" w="100%" className={styles.mediumInputGroup}>
            <TextInput
              withAsterisk
              label="Email"
              name="email"
              placeholder="your@email.com"
              {...form.getInputProps("email")}
            />
            <TextInput
              key={form.key("phoneNumber")}
              label="Phone Number"
              name="tel"
              placeholder="+353 89 1234567"
              {...form.getInputProps("phoneNumber")}
            />
          </Group>
          <Textarea
            withAsterisk
            resize="vertical"
            autoComplete="off"
            rows={4}
            label="Your Message"
            placeholder="Type Your Message Here..."
            {...form.getInputProps("message")}
          />
          <Group justify="flex-end">
            <ArrowButton
              disabled={sending}
              ctaText={sending ? getCopy("contactFormSending") : getCopy("contactFormSend")}
              type="submit"
            />
          </Group>
        </Stack>
      </form>
    </PageWrapper>
  );
};

export default ContactPage;
