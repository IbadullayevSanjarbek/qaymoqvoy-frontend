import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import Footer from './components/Footer'
import { fallbackProducts } from './data'

export default function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [cart, setCart] = useState([]) // [{ productId, quantity }]

  // Backend (Spring Boot) dan mahsulotlarni olish; ishlamasa zaxira ro'yxat.
  useEffect(() => {
    fetch('/api/products')
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then(setProducts)
      .catch(() => setProducts(fallbackProducts))
      .finally(() => setLoading(false))
  }, [])

  const addToCart = (product) =>
    setCart((prev) => {
      const found = prev.find((i) => i.productId === product.id)
      return found
        ? prev.map((i) => (i.productId === product.id ? { ...i, quantity: i.quantity + 1 } : i))
        : [...prev, { productId: product.id, quantity: 1 }]
    })

  const cartCount = cart.reduce((sum, i) => sum + i.quantity, 0)

  return (
    <>
      <Navbar cartCount={cartCount} />
      <main>
        <Hero />
        <ProductGrid products={products} loading={loading} onBuy={addToCart} />
      </main>
      <Footer />
    </>
  )
}
