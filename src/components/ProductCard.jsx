import { useState } from 'react'
import { ShoppingCart } from 'lucide-react'

export default function ProductCard({ product, onBuy }) {
  const [broken, setBroken] = useState(false)

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-md">
      <div className="aspect-[4/3] w-full bg-butter">
        {!broken && (
          <img src={product.image} alt={product.name} loading="lazy"
               className="h-full w-full object-cover" onError={() => setBroken(true)} />
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-bold leading-snug text-choco">{product.name}</h3>
          <span className="shrink-0 rounded-full bg-butter px-3 py-1 text-xs font-bold text-mustard-dark">
            {product.category}
          </span>
        </div>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-taupe/90">{product.description}</p>

        <div className="mt-5 flex items-center justify-between gap-2">
          <span className="text-lg font-extrabold text-mustard-dark">
            {product.price.toLocaleString('en-US')} so'm
          </span>
          <button onClick={() => onBuy(product)}
                  className="flex items-center gap-2 rounded-2xl bg-mustard px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-mustard-dark active:scale-95">
            <ShoppingCart size={16} />
            Sotib olish
          </button>
        </div>
      </div>
    </article>
  )
}
