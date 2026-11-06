import { useState } from 'react'
import { Search, ShoppingCart, Globe, Menu, X } from 'lucide-react'

// Keks ikonkasi (kutubxonaga bog'liq emas)
function Cupcake({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2.5v2" />
      <path d="M6.5 11a5.5 5.5 0 0 1 11 0" />
      <path d="M5 11h14" />
      <path d="M6.2 11.5 7.6 20h8.8l1.4-8.5" />
      <path d="M10 14v3.5M14 14v3.5" />
    </svg>
  )
}

const links = ['O nas', 'Katalog', 'Yangiliklar', 'Manzillar', 'Karyera']

export default function Navbar({ cartCount }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-30 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2 text-choco">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-mustard text-white shadow-soft">
            <Cupcake size={22} />
          </span>
          <span className="font-display text-2xl font-bold">Qaymoqvoy</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Asosiy">
          {links.map((l) => (
            <a key={l} href={l === 'Katalog' ? '#katalog' : '#'}
               className="font-semibold text-taupe transition-colors hover:text-mustard-dark">
              {l}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1 text-choco">
          <IconBtn label="Qidiruv"><Search size={20} /></IconBtn>
          <IconBtn label="Savatcha">
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 grid h-5 min-w-5 place-items-center rounded-full bg-mustard px-1 text-xs font-bold text-white">
                {cartCount}
              </span>
            )}
          </IconBtn>
          <IconBtn label="Tilni tanlash"><Globe size={20} /></IconBtn>
          <button className="ml-1 rounded-2xl p-2 hover:bg-butter md:hidden" aria-label="Menyu"
                  onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="mx-4 mb-3 flex flex-col rounded-2xl bg-white p-2 shadow-soft md:hidden">
          {links.map((l) => (
            <a key={l} href={l === 'Katalog' ? '#katalog' : '#'} onClick={() => setOpen(false)}
               className="rounded-xl px-4 py-3 font-semibold text-taupe hover:bg-butter hover:text-choco">
              {l}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}

function IconBtn({ label, children }) {
  return (
    <button aria-label={label}
            className="relative rounded-2xl p-2.5 transition-colors hover:bg-butter">
      {children}
    </button>
  )
}
