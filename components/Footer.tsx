export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#020812]/95 px-6 py-10 text-slate-400 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_1fr]">
        <div>
          <h2 className="text-2xl font-semibold text-white">
            Deepak<span className="text-mint">.</span>
          </h2>
          <p className="mt-3 max-w-md leading-7">
            Designed with curiosity. Built with engineering. Accelerated by AI. Shipped with confidence.
          </p>
        </div>
        <div className="grid gap-3 text-sm md:justify-end md:text-right">
          <p>Noida, Uttar Pradesh, India</p>
          <a href="mailto:deepakchandra4551@gmail.com" className="hover:text-mint">
            deepakchandra4551@gmail.com
          </a>
          <a href="tel:+919120279300" className="hover:text-mint">
            +91 9120279300
          </a>
          <div className="flex flex-wrap gap-4 md:justify-end">
            <a href="https://github.com/Deepudholiwal" target="_blank" rel="noreferrer" className="hover:text-mint">
              GitHub
            </a>
            <a href="https://wa.me/919120279300" target="_blank" rel="noreferrer" className="hover:text-mint">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-7xl text-sm text-slate-500">© 2026 Deepak Chandra Maurya. All rights reserved.</p>
    </footer>
  );
}
