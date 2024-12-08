import { Stack, Text } from "@mantine/core";
import FancyTitle from "components/FancyTitle";

export interface QuoteBlockProps {
  title?: string;
  quoteString: string;
  quoteAuthor?: string;
}

const QuoteBlock = (props: QuoteBlockProps) => {
  return (
    <Stack align="center" gap="25" justify="space-around" p="xl" w="650px" maw="100%" m="auto">
      {!!props.title && <FancyTitle>{props.title.toLocaleUpperCase()}</FancyTitle>}
      <Text c="dark.7" style={{ textAlign: "center" }}>
        <Text component="i" fz="20px">
          ‘{props.quoteString}’
        </Text>
        {!!props.quoteAuthor && (
          <Text component="span" display="inline-block">
            &nbsp;— {props.quoteAuthor}
          </Text>
        )}
      </Text>
    </Stack>
  );
};

export default QuoteBlock;
