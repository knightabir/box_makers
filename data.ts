import { Gem, Gift, Package, ShoppingBag, Sparkles, Truck, UtensilsCrossed, Zap } from "lucide-react"

export const products = [
    // Jewelry Boxes
    {
        id: 1,
        name: "Premium Jewelry Display Box",
        category: "Jewelry Boxes",
        category_slug: "jewelry-boxes",
        material: "Velvet",
        size: "Small",
        price: 25,
        images: [
            "https://dummyimage.com/400x400/cccccc/000000&text=Jewelry+Box+1",
            "https://dummyimage.com/400x400/cccccc/000000&text=Jewelry+Box+2",
            "https://dummyimage.com/400x400/cccccc/000000&text=Jewelry+Box+3",
        ],
        features: [
            "Velvet Interior",
            "Multiple Compartments",
            "Secure Lock",
            "Anti-Tarnish Lining"
        ],
        badge: "Best Seller",
        inStock: true,
        description:
            "Our premium jewelry display box combines elegance with functionality. Crafted with luxurious velvet interior and multiple compartments, it's perfect for showcasing precious jewelry pieces. The secure lock mechanism ensures your valuables stay safe while the anti-tarnish lining preserves their quality.",
        specifications: {
            Dimensions: '8" x 6" x 3"',
            Material: "High-grade velvet with wooden frame",
            Compartments: "6 individual slots + 2 larger sections",
            "Lock Type": "Brass key lock",
            Weight: "1.2 lbs",
            "Color Options": "Black, Navy, Burgundy, Cream",
        },
        customization: [
            "Custom embossing available",
            "Logo printing on lid",
            "Interior color selection",
            "Size modifications possible",
        ],
        applications: [
            "Jewelry stores",
            "Personal use",
            "Gift giving",
            "Display purposes"
        ],
        minimumOrder: 50,
        leadTime: "7-10 business days",
        featured: true,
    },
    {
        id: 2,
        name: "Classic Jewelry Organizer",
        category: "Jewelry Boxes",
        category_slug: "jewelry-boxes",
        material: "Leather",
        size: "Medium",
        price: 30,
        images: [
            "https://dummyimage.com/400x400/cccccc/000000&text=Jewelry+Box+4",
            "https://dummyimage.com/400x400/cccccc/000000&text=Jewelry+Box+5",
        ],
        features: [
            "Leather Exterior",
            "Ring Rolls",
            "Mirror Inside",
            "Travel Friendly"
        ],
        badge: "Classic",
        inStock: true,
        description:
            "A classic jewelry organizer with a leather exterior, perfect for travel and daily use. Features ring rolls, a mirror, and multiple compartments.",
        specifications: {
            Dimensions: '7" x 5" x 2"',
            Material: "PU Leather",
            Compartments: "4",
            "Lock Type": "Snap closure",
            Weight: "0.8 lbs",
            "Color Options": "Pink, Black, White",
        },
        customization: [
            "Monogramming available",
            "Custom color options",
        ],
        applications: [
            "Personal use",
            "Gift giving"
        ],
        minimumOrder: 20,
        leadTime: "5-7 business days",
        featured: false,
    },
    // Shipping Boxes
    {
        id: 3,
        name: "Custom Branded Shipping Box",
        category: "Shipping Boxes",
        category_slug: "shipping-boxes",
        material: "Corrugated",
        size: "Large",
        price: 2.5,
        images: [
            "https://dummyimage.com/400x400/cccccc/000000&text=Shipping+Box+1",
            "https://dummyimage.com/400x400/cccccc/000000&text=Shipping+Box+2",
        ],
        features: [
            "Custom Branding",
            "Recyclable",
            "Double Wall",
            "Lightweight"
        ],
        badge: "Eco-Friendly",
        inStock: true,
        description:
            "Durable corrugated shipping box with custom branding options. Eco-friendly and perfect for e-commerce businesses.",
        specifications: {
            Dimensions: '16" x 12" x 8"',
            Material: "Corrugated Cardboard",
            Compartments: "Single",
            "Lock Type": "Tab lock",
            Weight: "0.5 lbs",
            "Color Options": "White, Brown",
        },
        customization: [
            "Full color printing",
            "Custom sizes",
        ],
        applications: [
            "E-commerce",
            "Retail shipping"
        ],
        minimumOrder: 100,
        leadTime: "10-14 business days",
        featured: false,
    },
    {
        id: 4,
        name: "Heavy Duty Shipping Carton",
        category: "Shipping Boxes",
        category_slug: "shipping-boxes",
        material: "Corrugated",
        size: "Extra Large",
        price: 4.5,
        images: [
            "https://dummyimage.com/400x400/cccccc/000000&text=Shipping+Box+3",
        ],
        features: [
            "Heavy Duty",
            "Double Wall",
            "Stackable",
            "Moisture Resistant"
        ],
        badge: "Heavy Duty",
        inStock: true,
        description:
            "Extra large heavy duty shipping carton for industrial and bulk shipping needs.",
        specifications: {
            Dimensions: '24" x 18" x 18"',
            Material: "Double Wall Corrugated",
            Compartments: "Single",
            "Lock Type": "Tape closure",
            Weight: "2.0 lbs",
            "Color Options": "Brown",
        },
        customization: [
            "Custom printing",
            "Custom sizes",
        ],
        applications: [
            "Bulk shipping",
            "Industrial use"
        ],
        minimumOrder: 50,
        leadTime: "14-18 business days",
        featured: false,
    },
    // Gift Boxes
    {
        id: 5,
        name: "Luxury Gift Box Set",
        category: "Gift Boxes",
        category_slug: "gift-boxes",
        material: "Cardboard",
        size: "Medium",
        price: 15,
        images: [
            "https://dummyimage.com/400x400/cccccc/000000&text=Gift+Box+1",
            "https://dummyimage.com/400x400/cccccc/000000&text=Gift+Box+2",
        ],
        features: [
            "Magnetic Closure",
            "Ribbon Handle",
            "Custom Printing",
            "Matte Finish"
        ],
        badge: "Premium",
        inStock: true,
        description:
            "A luxury gift box set with magnetic closure and ribbon handle, perfect for special occasions and corporate gifting.",
        specifications: {
            Dimensions: '10" x 8" x 4"',
            Material: "Rigid Cardboard",
            Compartments: "Single",
            "Lock Type": "Magnetic",
            Weight: "1.0 lbs",
            "Color Options": "Black, Gold, White",
        },
        customization: [
            "Custom logo printing",
            "Custom ribbon color",
        ],
        applications: [
            "Corporate gifts",
            "Weddings",
            "Special occasions"
        ],
        minimumOrder: 30,
        leadTime: "7-10 business days",
        featured: true,
    },
    {
        id: 6,
        name: "Wine Gift Box",
        category: "Gift Boxes",
        category_slug: "gift-boxes",
        material: "Wood",
        size: "Medium",
        price: 35,
        images: [
            "https://dummyimage.com/400x400/cccccc/000000&text=Gift+Box+3",
        ],
        features: [
            "Wooden Construction",
            "Foam Insert",
            "Sliding Lid",
            "Custom Engraving"
        ],
        badge: "Luxury",
        inStock: true,
        description:
            "A luxury wooden wine gift box with foam insert and custom engraving options.",
        specifications: {
            Dimensions: '14" x 5" x 5"',
            Material: "Solid Wood",
            Compartments: "Single",
            "Lock Type": "Sliding lid",
            Weight: "2.5 lbs",
            "Color Options": "Natural, Walnut",
        },
        customization: [
            "Custom engraving",
            "Custom foam insert",
        ],
        applications: [
            "Wine gifting",
            "Corporate gifts"
        ],
        minimumOrder: 20,
        leadTime: "10-12 business days",
        featured: true,
    },
    // Food Packaging
    {
        id: 7,
        name: "Food Takeout Container",
        category: "Food Packaging",
        category_slug: "food-packaging",
        material: "Paper",
        size: "Small",
        price: 0.75,
        images: [
            "https://dummyimage.com/400x400/cccccc/000000&text=Food+Container+1",
        ],
        features: [
            "Leak Proof",
            "Microwave Safe",
            "Stackable",
            "Eco-Friendly"
        ],
        badge: "Popular",
        inStock: true,
        description:
            "Eco-friendly paper takeout container, leak proof and microwave safe, ideal for restaurants and food delivery.",
        specifications: {
            Dimensions: '5" x 4" x 2"',
            Material: "Food-grade paper",
            Compartments: "Single",
            "Lock Type": "Folded lid",
            Weight: "0.1 lbs",
            "Color Options": "White, Kraft",
        },
        customization: [
            "Custom logo printing",
            "Custom sizes",
        ],
        applications: [
            "Restaurants",
            "Takeout",
            "Catering"
        ],
        minimumOrder: 200,
        leadTime: "5-7 business days",
        featured: false,
    },
    {
        id: 8,
        name: "Large Food Tray",
        category: "Food Packaging",
        category_slug: "food-packaging",
        material: "Paperboard",
        size: "Large",
        price: 1.2,
        images: [
            "https://dummyimage.com/400x400/cccccc/000000&text=Food+Container+2",
        ],
        features: [
            "Grease Resistant",
            "Compostable",
            "Wide Base",
            "Custom Printing"
        ],
        badge: "Eco",
        inStock: true,
        description:
            "Large food tray made from compostable paperboard, perfect for serving meals at events and food trucks.",
        specifications: {
            Dimensions: '10" x 7" x 2"',
            Material: "Compostable paperboard",
            Compartments: "Single",
            "Lock Type": "Open tray",
            Weight: "0.2 lbs",
            "Color Options": "White, Kraft",
        },
        customization: [
            "Custom printing",
        ],
        applications: [
            "Events",
            "Food trucks",
            "Catering"
        ],
        minimumOrder: 150,
        leadTime: "7-9 business days",
        featured: false,
    },
    // Cosmetic Boxes
    {
        id: 9,
        name: "Cosmetic Product Box",
        category: "Cosmetic Boxes",
        category_slug: "cosmetic-boxes",
        material: "Cardboard",
        size: "Small",
        price: 3.25,
        images: [
            "https://dummyimage.com/400x400/cccccc/000000&text=Cosmetic+Box+1",
        ],
        features: [
            "Window Cutout",
            "Glossy Finish",
            "Custom Printing",
            "Recyclable"
        ],
        badge: "New",
        inStock: false,
        description:
            "Premium cosmetic product box with window cutout and glossy finish, ideal for beauty products.",
        specifications: {
            Dimensions: '6" x 3" x 2"',
            Material: "Cardboard",
            Compartments: "Single",
            "Lock Type": "Tuck end",
            Weight: "0.2 lbs",
            "Color Options": "White, Pink, Black",
        },
        customization: [
            "Custom window shape",
            "Custom printing",
        ],
        applications: [
            "Cosmetic brands",
            "Retail packaging"
        ],
        minimumOrder: 100,
        leadTime: "7-10 business days",
        featured: false,
    },
    {
        id: 10,
        name: "Luxury Perfume Box",
        category: "Cosmetic Boxes",
        category_slug: "cosmetic-boxes",
        material: "Rigid Board",
        size: "Medium",
        price: 6.5,
        images: [
            "https://dummyimage.com/400x400/cccccc/000000&text=Cosmetic+Box+1",
            "https://dummyimage.com/400x400/cccccc/000000&text=Cosmetic+Box+2",
        ],
        features: [
            "Rigid Construction",
            "Foam Insert",
            "Matte Lamination",
            "Custom Foil Stamping"
        ],
        badge: "Luxury",
        inStock: true,
        description:
            "Luxury rigid perfume box with foam insert and custom foil stamping for high-end cosmetic brands.",
        specifications: {
            Dimensions: '8" x 4" x 2"',
            Material: "Rigid board",
            Compartments: "Single",
            "Lock Type": "Magnetic",
            Weight: "0.5 lbs",
            "Color Options": "Black, Gold, White",
        },
        customization: [
            "Custom foam insert",
            "Foil stamping",
        ],
        applications: [
            "Perfume packaging",
            "Gift packaging"
        ],
        minimumOrder: 50,
        leadTime: "10-12 business days",
        featured: false,
    },
    // Electronic Packaging
    {
        id: 11,
        name: "Electronics Protective Case",
        category: "Electronic Packaging",
        category_slug: "electronic-packaging",
        material: "Foam",
        size: "Medium",
        price: 8.5,
        images: [
            "https://dummyimage.com/400x400/cccccc/000000&text=Electronics+Case+1",
        ],
        features: [
            "Shock Absorbing",
            "Custom Cutouts",
            "Reusable",
            "Lightweight"
        ],
        badge: "Protective",
        inStock: true,
        description:
            "Protective foam case for electronics with custom cutouts for secure transport.",
        specifications: {
            Dimensions: '12" x 8" x 3"',
            Material: "High-density foam",
            Compartments: "Custom",
            "Lock Type": "Zipper",
            Weight: "0.7 lbs",
            "Color Options": "Black, Blue",
        },
        customization: [
            "Custom cutouts",
            "Custom colors",
        ],
        applications: [
            "Electronics shipping",
            "Retail packaging"
        ],
        minimumOrder: 30,
        leadTime: "8-10 business days",
        featured: false,
    },
    {
        id: 12,
        name: "Gadget Retail Box",
        category: "Electronic Packaging",
        category_slug: "electronic-packaging",
        material: "Cardboard",
        size: "Small",
        price: 2.8,
        images: [
            "https://dummyimage.com/400x400/cccccc/000000&text=Electronics+Case+2",
        ],
        features: [
            "Custom Printing",
            "Glossy Finish",
            "Insert Tray",
            "Recyclable"
        ],
        badge: "Retail",
        inStock: true,
        description:
            "Retail box for gadgets and small electronics, with insert tray and custom printing.",
        specifications: {
            Dimensions: '7" x 4" x 2"',
            Material: "Cardboard",
            Compartments: "Single",
            "Lock Type": "Tuck end",
            Weight: "0.2 lbs",
            "Color Options": "White, Black",
        },
        customization: [
            "Custom insert",
            "Custom printing",
        ],
        applications: [
            "Retail packaging",
            "E-commerce"
        ],
        minimumOrder: 100,
        leadTime: "7-10 business days",
        featured: false,
    },
    // Retail Boxes
    {
        id: 13,
        name: "Retail Display Box",
        category: "Retail Boxes",
        category_slug: "retail-boxes",
        material: "Cardboard",
        size: "Large",
        price: 12,
        images: [
            "https://dummyimage.com/400x400/cccccc/000000&text=Retail+Box+1",
        ],
        features: [
            "Display Window",
            "Custom Printing",
            "Easy Assembly",
            "Recyclable"
        ],
        badge: "Display",
        inStock: true,
        description:
            "Large retail display box with window and custom printing, perfect for in-store product presentation.",
        specifications: {
            Dimensions: '14" x 10" x 4"',
            Material: "Cardboard",
            Compartments: "Single",
            "Lock Type": "Tuck end",
            Weight: "1.5 lbs",
            "Color Options": "White, Kraft",
        },
        customization: [
            "Custom window shape",
            "Custom printing",
        ],
        applications: [
            "Retail stores",
            "Product launches"
        ],
        minimumOrder: 40,
        leadTime: "7-10 business days",
        featured: false,
    },
    {
        id: 14,
        name: "Countertop Retail Box",
        category: "Retail Boxes",
        category_slug: "retail-boxes",
        material: "Cardboard",
        size: "Medium",
        price: 7.5,
        images: [
            "https://dummyimage.com/400x400/cccccc/000000&text=Retail+Box+2",
        ],
        features: [
            "Countertop Size",
            "Easy Tear-off",
            "Custom Branding",
            "Recyclable"
        ],
        badge: "Counter",
        inStock: true,
        description:
            "Medium size countertop retail box for impulse products, with easy tear-off and custom branding.",
        specifications: {
            Dimensions: '8" x 6" x 4"',
            Material: "Cardboard",
            Compartments: "Single",
            "Lock Type": "Tuck end",
            Weight: "0.7 lbs",
            "Color Options": "White, Kraft",
        },
        customization: [
            "Custom printing",
        ],
        applications: [
            "Retail stores",
            "Checkout counters"
        ],
        minimumOrder: 60,
        leadTime: "7-10 business days",
        featured: false,
    },
    // Custom Packaging Boxes
    {
        id: 15,
        name: "Custom Printed Mailer Box",
        category: "Custom Packaging Boxes",
        category_slug: "custom-packaging",
        material: "Corrugated",
        size: "Medium",
        price: 3.5,
        images: [
            "https://dummyimage.com/400x400/cccccc/000000&text=Custom+Box+1",
        ],
        features: [
            "Full Color Printing",
            "Self-Locking",
            "Recyclable",
            "Lightweight"
        ],
        badge: "Custom",
        inStock: true,
        description:
            "Custom printed mailer box with self-locking design, ideal for subscription boxes and e-commerce.",
        specifications: {
            Dimensions: '10" x 8" x 4"',
            Material: "Corrugated Cardboard",
            Compartments: "Single",
            "Lock Type": "Self-locking",
            Weight: "0.6 lbs",
            "Color Options": "White, Kraft",
        },
        customization: [
            "Full color printing",
            "Custom sizes",
        ],
        applications: [
            "Subscription boxes",
            "E-commerce"
        ],
        minimumOrder: 100,
        leadTime: "10-14 business days",
        featured: true,
    },
    {
        id: 16,
        name: "Luxury Magnetic Closure Box",
        category: "Custom Packaging Boxes",
        category_slug: "custom-packaging",
        material: "Rigid Board",
        size: "Large",
        price: 9.5,
        images: [
            "https://dummyimage.com/400x400/cccccc/000000&text=Custom+Box+2",
        ],
        features: [
            "Magnetic Closure",
            "Custom Insert",
            "Premium Finish",
            "Custom Printing"
        ],
        badge: "Luxury",
        inStock: true,
        description:
            "Luxury custom packaging box with magnetic closure and premium finish, perfect for high-end products.",
        specifications: {
            Dimensions: '12" x 10" x 5"',
            Material: "Rigid Board",
            Compartments: "Custom",
            "Lock Type": "Magnetic",
            Weight: "2.0 lbs",
            "Color Options": "Black, White, Gold",
        },
        customization: [
            "Custom insert",
            "Custom printing",
        ],
        applications: [
            "Luxury products",
            "Corporate gifts"
        ],
        minimumOrder: 30,
        leadTime: "12-15 business days",
        featured: true,
    },
]

export const categories = [
    {
        icon: Package,
        title: "Custom Packaging Boxes",
        description: "Tailored packaging solutions for your unique business needs",
        image: "https://dummyimage.com/400x300/cccccc/000000&text=Custom+Packaging+Boxes",
        href: "/categories/custom-packaging",
    },
    {
        icon: Gem,
        title: "Jewelry Boxes",
        description: "Elegant boxes designed to showcase precious jewelry and accessories",
        image: "https://dummyimage.com/400x300/cccccc/000000&text=Jewelry+Boxes",
        href: "/categories/jewelry-boxes",
    },
    {
        icon: Gift,
        title: "Gift Boxes",
        description: "Beautiful presentation boxes for special occasions and corporate gifts",
        image: "https://dummyimage.com/400x300/cccccc/000000&text=Gift+Boxes",
        href: "/categories/gift-boxes",
    },
    {
        icon: Truck,
        title: "Shipping Boxes",
        description: "Durable corrugated boxes for safe product transportation",
        image: "https://dummyimage.com/400x300/cccccc/000000&text=Shipping+Boxes",
        href: "/categories/shipping-boxes",
    },
    {
        icon: UtensilsCrossed,
        title: "Food Packaging",
        description: "Food-safe packaging solutions for restaurants and food businesses",
        image: "https://dummyimage.com/400x300/cccccc/000000&text=Food+Packaging",
        href: "/categories/food-packaging",
    },
    {
        icon: Sparkles,
        title: "Cosmetic Boxes",
        description: "Premium packaging for beauty and cosmetic products",
        image: "https://dummyimage.com/400x300/cccccc/000000&text=Cosmetic+Boxes",
        href: "/categories/cosmetic-boxes",
    },
    {
        icon: Zap,
        title: "Electronic Packaging",
        description: "Protective packaging for electronics and tech products",
        image: "https://dummyimage.com/400x300/cccccc/000000&text=Electronic+Packaging",
        href: "/categories/electronic-packaging",
    },
    {
        icon: ShoppingBag,
        title: "Retail Boxes",
        description: "Eye-catching retail packaging to enhance your brand presence",
        image: "https://dummyimage.com/400x300/cccccc/000000&text=Retail+Boxes",
        href: "/categories/retail-boxes",
    },
]