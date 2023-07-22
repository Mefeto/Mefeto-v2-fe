export default function WriteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ minHeight: "80vh", height: "fit-content" }}>{children}</div>
  );
}
