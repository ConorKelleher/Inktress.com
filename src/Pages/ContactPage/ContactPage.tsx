import { Center, Group, Stack, Text, Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import ArrowButton from "components/ArrowButton/ArrowButton";
import getCopy from "constants/localisation";
import usePageTitle from "localboast/hooks/usePageTitle";
import PageHeader from "Pages/components/PageHeader";
import PageWrapper from "Pages/components/PageWrapper";
import { Dispatch, SetStateAction, useCallback, useRef, useState } from "react";
import styles from "./styles.module.sass";
import { cx } from "localboast";
import FancyTitle from "components/FancyTitle";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
};

type Status = "default" | "sending" | "success" | "error";

interface ContactPageFormProps {
  hidden: boolean;
  status: Status;
  onChangeStatus: Dispatch<SetStateAction<Status>>;
}

const ContactPageForm = ({ status, hidden, onChangeStatus }: ContactPageFormProps) => {
  const form = useForm<FormValues>({
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

  const onSubmit = useCallback(() => {
    onChangeStatus("sending");
    // @ts-ignore
    window.emailjs.sendForm("service_2z3cq29", "template_nhuizb4", formElRef.current).then(
      () => {
        onChangeStatus("success");
        console.log("SUCCESS");
      },
      (error: Error) => {
        onChangeStatus("error");
        console.log("FAILED...", error);
      }
    );
  }, [onChangeStatus]);

  const sending = status === "sending";

  return (
    <form
      ref={(ref) => ref && (formElRef.current = ref)}
      onSubmit={form.onSubmit(onSubmit)}
      className={cx(styles.form, { [styles.formSending]: sending })}
      method="get"
      autoComplete="on"
      style={{ visibility: hidden ? "hidden" : undefined }}
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
            name="phoneNumber"
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
          name="message"
          placeholder="Type Your Message Here..."
          {...form.getInputProps("message")}
        />
        <Group justify="flex-end">
          <ArrowButton
            aria-label="Send Contact Button"
            disabled={sending}
            ctaText={sending ? getCopy("contactFormSending") : getCopy("contactFormSend")}
            type="submit"
          />
        </Group>
      </Stack>
    </form>
  );
};

const ContactPage = () => {
  const [status, setStatus] = useState<Status>("default");
  usePageTitle(getCopy("contactTitle"));

  const showForm = !["success", "error"].includes(status);

  return (
    <PageWrapper>
      <PageHeader imageId="ContactHeader" />
      <Center style={{ position: "relative" }}>
        {!showForm && (
          <Stack
            justify="center"
            w="100%"
            h="100%"
            p="xl"
            gap="xl"
            align="center"
            style={{ position: "absolute", inset: 0 }}
          >
            <FancyTitle>
              {status === "success" ? getCopy("contactFormSentTitle") : getCopy("contactFormErrorTitle")}
            </FancyTitle>
            <Text
              c="dark.7"
              dangerouslySetInnerHTML={{
                __html: status === "success" ? getCopy("contactFormSentBody") : getCopy("contactFormErrorBody"),
              }}
            />
          </Stack>
        )}
        <ContactPageForm hidden={!showForm} status={status} onChangeStatus={setStatus} />
      </Center>
    </PageWrapper>
  );
};

export default ContactPage;
