export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#020812]/95 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="text-2xl font-semibold text-white">
            Deepak Yadav<span className="text-mint">.</span>
          </h2>
          <p className="mt-2 text-sm font-medium text-mint">
            Web Developer | Bitrix24 Implementer
          </p>
          <p className="mt-3 max-w-lg text-sm leading-7 text-slate-400">
            Full-stack development, CRM implementation, business automation, and custom
            software built around how real teams operate.
          </p>
        </div>

        <address className="grid min-w-0 gap-3 text-sm not-italic md:justify-end md:text-right">
          <p className="text-slate-300">Gurugram, Haryana 122506</p>
          <a href="mailto:dk4796804@gmail.com" className="break-words hover:text-mint">
            dk4796804@gmail.com
          </a>
          <a href="tel:+918307928412" className="hover:text-mint">
            +91 8307928412
          </a>

          <div className="flex flex-wrap gap-4 md:justify-end">
            <a
              href="https://github.com/Deepudholiwal"
              target="_blank"
              rel="noreferrer"
              className="hover:text-mint"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/deepak-yadav01"
              target="_blank"
              rel="noreferrer"
              className="hover:text-mint"
            >
              LinkedIn
            </a>
            <a href="#home" className="hover:text-mint">
              Back to top
            </a>
          </div>
        </address>
      </div>

      <div className="mx-auto mt-8 flex max-w-7xl items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} Deepak Yadav. All rights reserved.</p>
      </div>
    </footer>
  );
}
