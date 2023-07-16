"use client";
import {
  createStyles,
  Header,
  Group,
  Burger,
  Container,
  rem,
  Text,
  Button,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { SignInButton, SignOutButton, UserButton } from "@clerk/nextjs";

interface HeaderSearchProps {
  links: {
    link: string;
    label: string;
    links?: { link: string; label: string }[];
  }[];
}

export default function HeaderBar({ links }: HeaderSearchProps) {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles();

  const items = links.map((link) => {
    return (
      <Link key={link.label} href={link.link} className={classes.link}>
        {link.label}
      </Link>
    );
  });

  return (
    <Header height={80} mb={40}>
      <Container>
        <div className={classes.inner}>
          <Link href={"/"} style={{ textDecoration: "none", color: "black" }}>
            <Text fw={700} size={24}>
              🏛️ Mefeto
            </Text>
          </Link>
          <Group spacing={5} className={classes.links}>
            <>{items}</>
          </Group>
          <Group>
            {/*<Button component={SignInButton} variant="default">*/}
            {/*  로그인*/}
            {/*</Button>*/}
            {/*<Button component={SignOutButton}>로그아웃</Button>*/}
            {/*<SignInButton />*/}
            {/*<SignOutButton />*/}
            <UserButton afterSignOutUrl="/" />
          </Group>
          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
          />
        </div>
      </Container>
    </Header>
  );
}

const useStyles = createStyles((theme) => ({
  inner: {
    height: rem(80),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1.6,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[1],
    },
  },

  linkLabel: {
    marginRight: rem(5),
  },
}));
