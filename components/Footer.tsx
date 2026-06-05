export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#02030a]/95 px-6 py-10 text-slate-500 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Deepak Yadav. Premium software consulting and AI-driven CRM expertise.</p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
          <a href="mailto:dk4796804@gmail.com">dk4796804@gmail.com</a>
          <span className="hidden sm:inline">•</span>
          <a href="https://linkedin.com/in/deepak-yadav01" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/Deepudholiwal" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
