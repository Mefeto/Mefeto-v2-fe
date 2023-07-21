import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import {
  createStyles,
  Paper,
  Text,
  Title,
  Button,
  useMantineTheme,
  rem,
  Overlay,
} from "@mantine/core";
import { articleThumbnail } from "@/lib/const/article-thumbnail";
import Link from "next/link";

export default function MainCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = articleThumbnail.map((item) => {
    return item.contents.map((content) => {
      return (
        <Carousel.Slide key={content.title}>
          <Card
            image={content.thumbnail_url}
            title={content.title}
            category={content.categories.join(", ")}
            id={content.id}
          />
        </Carousel.Slide>
      );
    });
  });

  return (
    <>
      <Text size={28} weight={700} py={16}>
        최근 떠오르는 이슈
      </Text>
      <Carousel
        slideSize="48%"
        breakpoints={[{ maxWidth: "sm", slideSize: "100%", slideGap: rem(2) }]}
        slideGap="md"
        align="start"
        slidesToScroll={mobile ? 1 : 2}
        loop
      >
        {slides}
      </Carousel>
    </>
  );
}

function Card({ image, title, category, id }: CardProps) {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      className={classes.card}
      sx={{ backgroundImage: `url(${image})`, backdropFilter: "blur(5px)" }}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div style={{ zIndex: 100 }}>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button
        component={Link}
        href={`/article/${id}`}
        variant="white"
        color="dark"
        sx={{ zIndex: 100 }}
      >
        아티클 보러가기
      </Button>
      <Overlay sx={{ zIndex: 1 }} radius="md" />
    </Paper>
  );
}

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(380),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  title: {
    width: rem(400),
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: "#f2f4f6",
    lineHeight: 1.2,
    fontSize: rem(32),
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: "uppercase",
  },
}));

interface CardProps {
  image: string;
  title: string;
  category: string;
  id: number;
}
