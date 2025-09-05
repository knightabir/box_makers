import { ProductDetail } from "@/components/product-detail"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { notFound } from "next/navigation"
import { products } from "@/data"


export async function generateMetadata({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === Number.parseInt(params.id))

  if (!product) {
    return {
      title: "Product Not Found | BoxCraft Pro",
    }
  }

  return {
    title: `${product.name} | BoxCraft Pro`,
    description: product.description,
  }
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === Number.parseInt(params.id))

  if (!product) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      <ProductDetail product={product} />
      <Footer />
    </main>
  )
}
