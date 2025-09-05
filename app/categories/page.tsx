import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { ProductCategories } from "@/components/product-categories";
import React from "react";

export const metadata = {
  title: "Shop by Category | Custom Packaging Boxes & Solutions | BoxCraft Pro",
  description:
    "Explore all packaging categories at BoxCraft Pro. Find the perfect custom boxes, jewelry boxes, shipping boxes, gift boxes, food packaging, cosmetic boxes, electronic packaging, and retail boxes. Premium quality, fast shipping, and tailored solutions for every business need.",
};

const CategoriesPage = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="py-8 flex flex-col items-center justify-center">
        <div className="max-w-fit w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="mb-8 text-center flex flex-col items-center">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Shop by Packaging Category
            </h1>
            <p className="text-lg text-muted-foreground max-w-7xl">
              Discover our full range of packaging categories, including jewelry boxes, shipping boxes, gift boxes, food packaging, cosmetic boxes, electronic packaging, and retail boxes. Whether you need elegant presentation or durable shipping solutions, BoxCraft Pro has you covered with premium materials and custom options for every industry.
            </p>
          </div>
          <ProductCategories />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default CategoriesPage;
