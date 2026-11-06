import ProductCard from './ProductCard'

export default function ProductGrid({ products, loading, onBuy }) {
  return (
    <section id="katalog" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="text-left font-display text-4xl font-bold text-choco sm:text-5xl">
        Bizning Pishiriqlar
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {loading
          ? Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-80 animate-pulse rounded-2xl bg-white/70 shadow-md" />
            ))
          : products.map((p) => <ProductCard key={p.id} product={p} onBuy={onBuy} />)}
      </div>
    </section>
  )
}
