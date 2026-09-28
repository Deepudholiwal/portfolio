export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#020812]/95 px-6 py-10 text-slate-400 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_1fr]">
        <div>
          <h2 className="text-2xl font-semibold text-white">
            Deepak Yadav<span className="text-mint">.</span>
          </h2>
          <p className="mt-2 text-sm font-medium text-mint">
            Bitrix24 Support Engineer | Full Stack Web Developer
          </p>
          <p className="mt-3 max-w-md leading-7">
            B2B SaaS, compliance workflows, and CRM implementation for Indian
            businesses.
          </p>
        </div>
        <address className="grid min-w-0 gap-3 text-sm not-italic md:justify-end md:text-right">
          <p>Gurugram, Haryana 122506</p>
          <a
            href="mailto:dk4796804@gmail.com"
            className="break-words hover:text-mint"
          >
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
          </div>
        </address>
      </div>
      <p className="mx-auto mt-8 max-w-7xl text-sm text-slate-500">
        &copy; {new Date().getFullYear()} Deepak Yadav. All rights reserved.
      </p>
    </footer>
  );
}
