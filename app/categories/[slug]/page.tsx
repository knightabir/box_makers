import { ProductCatalog } from "@/components/product-catalog";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { products } from "@/data";
import { notFound } from "next/navigation";
import { Suspense } from "react";

interface CategoryPageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: CategoryPageProps) {
  // get the slug category
  const category = params.slug;
  // that is the category name
  return {
    title: category
      ? `${category} | BoxCraft Pro - Premium Packaging Solutions`
      : "Category Not Found | BoxCraft Pro",
    description: category
      ? `Browse our selection of ${category} including custom boxes, jewelry boxes, shipping containers, and packaging solutions.`
      : "Category not found.",
  };
}

// Provide a default export for the parallel route (if any) to avoid the warning
export default function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = params;
  const category =slug

  if (!category) {
    notFound();
  }

  const filteredProducts = products.filter(
    (product: any) => product.category_slug === slug
  );

  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {category}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              {category ||
                "Discover our comprehensive range of packaging solutions designed for every industry and application"}
            </p>
          </div>
          <Suspense fallback={<div>Loading products...</div>}>
            <ProductCatalog products={filteredProducts} />
          </Suspense>
        </div>
      </div>
      <Footer />
    </main>
  );
}

// Optionally, if you are using parallel routes, you can add a default export for the parallel segment
// export const dynamic = "force-static"; // or "force-dynamic" if needed
