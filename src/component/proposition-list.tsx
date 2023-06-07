import { Badge, Card, Group, Stack, Text } from "@mantine/core";
import { useRouter } from "next/navigation";
import { propositions } from "@/lib/const/proposition";
import { useViewportSize } from "@mantine/hooks";

export default function PropositionList({
  input,
  filter,
}: {
  input: string;
  filter: string[];
}) {
  const { height } = useViewportSize();
  return (
    <Stack w={"calc(100% - 300px)"} justify={"flex-start"} mih={height}>
      <PropositionThumbnail input={input} searchFilters={filter} />
    </Stack>
  );
}

const PropositionThumbnail = ({
  searchFilters,
  input,
}: {
  searchFilters: string[];
  input: string;
}) => {
  const router = useRouter();
  const thumbnails = propositions
    .filter((item) =>
      searchFilters.length === 0
        ? true
        : searchFilters.includes(item.COMMITTEE as string)
    )
    .filter(
      (item) =>
        item.BILL_NAME.includes(input) ||
        item.COMMITTEE?.includes(input) ||
        item.RST_PROPOSER.includes(input)
    )
    .map((item) => {
      return (
        <Card
          withBorder
          padding="lg"
          radius="md"
          w={"100%"}
          key={item.BILL_ID}
          onClick={() => router.push(`/proposition/${item.BILL_ID}`)}
          sx={{ "&:hover": { backgroundColor: "#F8F9FA", cursor: "pointer" } }}
        >
          <Text size="sm" color="dimmed">
            의안 제 {item.BILL_NO}호 |{" "}
            {item.COMMITTEE ? item.COMMITTEE : "소관위원회 미정"}
          </Text>
          <Text size="xl" color="black" my={16}>
            {item.BILL_NAME}
          </Text>
          <Group position="left" mt="xs">
            <Badge color="blue" variant="light">
              {item.AGE}대 발의자 : {item.PROPOSER}
            </Badge>
            <Badge color="green" variant="light">
              발의 날짜 : {item.PROPOSE_DT}
            </Badge>
          </Group>
        </Card>
      );
    });
  return <>{thumbnails}</>;
};
