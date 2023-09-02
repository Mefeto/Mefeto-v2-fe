"use client";

import useSWR from "swr";

export default function Page() {
  // const { data, error } = useSWR("/api/articles/1/upvote", (url) =>
  //   fetch(url, { method: "DELETE" })
  // );
  const { data, error } = useSWR("/api/articles", (url) =>
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "test",
        thumbnail_url: "https://example.com",
        categories: ["test"],
        content: "test",
      }),
    }).then((res) => res.json())
  );

  return (
    <>
      data: {JSON.stringify(data)}
      error: {JSON.stringify(error)}
    </>
  );
}
