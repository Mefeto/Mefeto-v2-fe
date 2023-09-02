"use client";

import { TextInput, Checkbox, Button, Group, Text, Box } from "@mantine/core";
import { useForm } from "@mantine/form";
import { createClient } from "@supabase/supabase-js";

async function SignUp() {
  console.log("good");
  const supabaseClient = createClient(
    "https://tpajyjqgbswcgpcmmanf.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRwYWp5anFnYnN3Y2dwY21tYW5mIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM0MDQ1OTEsImV4cCI6MjAwODk4MDU5MX0.ATz6N49ivu19AUaNhLCB_gO1GJqTwSN-2_fPkSNZDhA"
  );
  const { error } = await supabaseClient.from("user-tb").insert({
    user_uuid: "test",
    password: "test",
    email: "test",
    nickname: "test",
  });
  if (error) {
    console.log(error);
  }
}

export default function SignUpForm() {
  const form = useForm({
    initialValues: {
      email: "",
      nickname: "",
      password: "",
      passwordConfirmation: "",
      termsOfService: false,
    },
    validate: {
      email: (value: string) =>
        /^\S+@\S+$/.test(value) ? null : "Invalid email",
      nickname: (value: string) =>
        value.length >= 3 ? null : "Nickname is too short",
      password: (value: string) =>
        value.length >= 6 ? null : "Password is too short",
      passwordConfirmation: (value: string, values) =>
        values.password === value ? null : "Passwords do not match",
    },
  });

  return (
    <Box maw={300} mx="auto" style={{ marginTop: 100, marginBottom: 100 }}>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps("email")}
          style={{ marginTop: 20, marginBottom: 20 }}
        />

        <TextInput
          withAsterisk
          label="Nickname"
          placeholder="your nickname"
          {...form.getInputProps("nickname")}
          style={{ marginTop: 20, marginBottom: 20 }}
        />

        <TextInput
          withAsterisk
          label="Password"
          type="password"
          placeholder="your password"
          {...form.getInputProps("password")}
          style={{ marginTop: 20, marginBottom: 20 }}
        />

        <TextInput
          withAsterisk
          label="Password confirmation"
          type="password"
          placeholder="your password again"
          {...form.getInputProps("passwordConfirmation")}
          style={{ marginTop: 20, marginBottom: 20 }}
        />

        <Checkbox
          mt="md"
          label="I agree to sell my privacy"
          {...form.getInputProps("termsOfService", { type: "checkbox" })}
        />

        <Group position="right" mt="md">
          <Button type="submit" onClick={SignUp}>
            Submit
          </Button>
        </Group>
      </form>
    </Box>
  );
}
