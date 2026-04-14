export function Footer() {
  return (
    <footer
      className="flex justify-between items-center flex-wrap gap-4 text-[13px]"
      style={{
        padding: "40px clamp(20px, 6vw, 80px)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        color: "rgba(255,255,255,0.25)",
      }}
    >
      <span>&copy; {new Date().getFullYear()} Janpeter Visser</span>
      <span>jp-visser.nl</span>
    </footer>
  );
}
