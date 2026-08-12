export default function Footer() {
  return (
    <footer className="border-t border-mullion/60 py-8 px-6 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-fog font-mono">
        <span>&copy; {new Date().getFullYear()} Anoop Mishra — Construction &amp; Glassworks</span>
        <span>Built &amp; glazed in Lucknow</span>
      </div>
    </footer>
  );
}
