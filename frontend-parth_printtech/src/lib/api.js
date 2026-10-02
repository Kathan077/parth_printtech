export const API_BASE = process.env.NEXT_PUBLIC_API_BASE || 'https://parth-printtech.onrender.com/api';

// Fallback snapshots updated with the latest images configured in Admin CMS
export const fallbackHomeData = {
  heroVideo: "https://res.cloudinary.com/oeqdmjr7/video/upload/v1790676605/parth_printtech/0918_2_-1790676592879-103731_uhmae5.mp4",
  whoWeAre: {
    subheading: "WHO WE ARE",
    headingLine1: "High-Speed",
    headingLine2Highlight: "Rotogravure",
    headingLine2Rest: "Printing.",
    description: "At Parth Printtech, we redefine flexible packaging through advanced engineering and high-speed precision. Powered by our state-of-the-art Polaris S7 Series multi-station rotogravure press, we deliver micron-accurate printing on PVC, PETG, and BOPP shrink films with unmatched color fidelity and razor-sharp registration.",
    image: "/uploads/printing_machine-1790077709022-574694.png",
    badgeText: "• POLARIS S7 ROTOGRAVURE • PARTH PRINTTECH •",
    features: [
      "Electronic Line Shaft (ELS) Drive",
      "High-Speed Output up to 350 m/min",
      "Automatic Register & Web Tension",
      "Micro-Precision Dot Fidelity"
    ],
    stats: [
      { num: "9+", label: "Color Stations", backText: "Multi-station Polaris S7 rotogravure press with automated ink circulation & viscosity management." },
      { num: "350+", label: "M/Min High Speed", backText: "Rapid turnaround and large-scale industrial packaging without compromising print fidelity." }
    ],
    floatCards: [
      { title: "Polaris S7 Series Press", desc: "Advanced multi-station rotogravure with automated register control." },
      { title: "Micro-Precision Fidelity", desc: "Flawless dot reproduction & vibrant saturation on PVC, PETG & BOPP." }
    ]
  },
  featuredProducts: {
    title: "Engineered Print",
    titleHighlight: "Solutions",
    description: "Explore our core print and packaging offerings, built with state-of-the-art machinery and premium finishing operations.",
    items: [
      {
        id: "01",
        category: "Shrink Sleeves",
        title: "PVC Shrink Sleeves",
        description: "Conform your packaging graphics seamlessly to complex container contours. Our high-precision PVC shrink sleeve labels offer 360-degree design coverage, high moisture resistance, and tamper-evident sealing.",
        image: "/uploads/pvc_srink-1790059064730-853618.png",
        accentColor: "#009fe3"
      },
      {
        id: "02",
        category: "Shrink Sleeves",
        title: "PETG Shrink Sleeves",
        description: "The pinnacle of shrink label engineering. Made from eco-friendly, recyclable polyester film, these sleeves yield up to 78% shrinkage for heavily contoured containers with absolute clarity.",
        image: "https://res.cloudinary.com/oeqdmjr7/image/upload/v1790918214/parth_printtech/WhatsApp_Image_2026-10-02_at_10_42_27-1790918213076-620763_vgtf8v.jpg",
        accentColor: "#e3007b"
      },
      {
        id: "03",
        category: "Wrap-Around Labels",
        title: "BOPP Wrap-Around Labels",
        description: "Engineered for high-volume, high-speed rotary labeling lines. Our roll-fed BOPP labels offer superior water resistance and high gloss/matte clarity, ideal for carbonated drinks and bottled water.",
        image: "https://res.cloudinary.com/oeqdmjr7/image/upload/v1790676429/parth_printtech/WhatsApp_Image_2026-09-19_at_3_43_42_PM-1790676428065-610975_hzmp8r.jpg",
        accentColor: "#ffd400"
      },
      {
        id: "04",
        category: "Heat Transfer Labels",
        title: "Heat Transfer Labels (HTL)",
        description: "Experience permanent dry-fusion graphic decoration. Using heat and pressure, graphics bond directly to containers, achieving a seamless 'no-label' look with high chemical and scratch resistance.",
        image: "/uploads/WhatsApp_Image_2026-09-22_at_11_27_28_AM-1790059811237-190474.jpeg",
        accentColor: "#111111"
      },
      {
        id: "05",
        category: "Shrink Film",
        title: "Plain PVC Shrink Film",
        description: "Premium unprinted PVC shrink film rolls for manual or automated wrapping, offering superior clarity, uniform shrinkage, and strong seals.",
        image: "/uploads/plain_pvc-1790059866645-384544.webp",
        accentColor: "#4f46e5"
      }
    ]
  }
};

export const fallbackAboutData = {
  hero: {
    title: "Engineering Packaging With",
    titleHighlight: "Precision",
    description: "Since 2009, Parth Printtech has been delivering high-quality packaging and labeling solutions. We specialize in PVC Shrink Sleeves, PETG Shrink Sleeves, BOPP Wrap-Around Labels, Heat Transfer Labels (HTL), and Plain PVC Shrink Film, with a focus on quality, precision, and reliable performance.",
    videoSrc: "/videos/video-3.mp4",
    ctaText: "Get a Quote",
    ctaLink: "/contact",
    image1: "/uploads/printing_machine-1790059952713-165653.png",
    image2: "https://res.cloudinary.com/oeqdmjr7/image/upload/v1790676874/parth_printtech/WhatsApp_Image_2026-09-28_at_4_03_39_PM-1790676873044-70241_ri9yqg.jpg",
    image3: "/uploads/pvc_srink-1790060003259-926634.png"
  },
  founders: {
    subtitle: "LEADERSHIP & VISION",
    title: "Meet Our",
    titleHighlight: "Founders",
    description: "Driven by technical innovation and an unwavering commitment to packaging excellence.",
    image: "/uploads/founder-1790067252859-913783.webp",
    badgeText: "FOUNDERS & DIRECTORS",
    foundersList: [
      {
        id: "1",
        index: "01",
        name: "Parth Patel",
        description: "Leading strategic vision and technology adoption in high-precision shrink sleeves and printing innovation."
      },
      {
        id: "2",
        index: "02",
        name: "Shailesh Patel",
        description: "Pioneering industrial print engineering, rotogravure calibrations, and operational excellence across commercial markets."
      }
    ]
  },
  whoWeAre: {
    subtitle: "WHO WE ARE",
    title: "Pioneers in",
    titleHighlight: "Precision Packaging",
    titleRest: "& Modern Labeling",
    leadText: "At Parth Printtech, we combine technical excellence with state-of-the-art manufacturing to produce world-class shrink sleeve packaging and high-precision labeling solutions.",
    bodyText: "Since 2009, we have partnered with leading brands across FMCG, cosmetics, pharmaceuticals, food & beverage, and industrial sectors. Our specialized facility operates high-speed gravure and flexographic presses engineered to meet demanding commercial volume while maintaining strict micron tolerances.",
    image: "/images/Who_We_Are.jpg",
    metrics: [
      { id: "1", value: "17+", label: "Years of Experience" },
      { id: "2", value: "50+", label: "Sectors Served" },
      { id: "3", value: "100%", label: "Quality Guarantee" }
    ]
  },
  visionMission: {
    title: "Driven By Purpose,",
    titleHighlight: "Built For Quality",
    description: "We are committed to redefining packaging standards through precision, consistent quality, and innovative printing solutions. Every product we create reflects our dedication to durability, vibrant color, and superior craftsmanship.",
    cards: [
      {
        id: "vision",
        title: "Our Vision",
        description: "To become a trusted leader in the printing and packaging industry by delivering innovative, sustainable, and high-quality labeling solutions."
      },
      {
        id: "mission",
        title: "Our Mission",
        description: "To provide reliable printing and packaging solutions with advanced technology, consistent quality, and a strong commitment to customer satisfaction."
      },
      {
        id: "philosophy",
        title: "Our Philosophy",
        description: "We believe quality starts with the process. Every product is made with precision, attention to detail, and a commitment to delivering packaging solutions that add value to every brand."
      }
    ]
  },
  history: {
    badgeLabel: "2009 – 2026 EVOLUTION",
    title: "Our Journey of",
    titleHighlight: "Evolution",
    centerBadge: "17 YEARS",
    inception: {
      year: "2009",
      tag: "INCEPTION",
      title: "Founding Printing Setup",
      description: "Established core B2B label & packaging operations."
    },
    current: {
      year: "2026",
      tag: "GLOBAL LEADER",
      title: "Global Packaging Reach",
      description: "Supplying 50+ industries with automated precision."
    }
  }
};

/**
 * Universal safe fetcher with timeout and fallback
 */
async function safeFetch(endpoint, fallbackData = null, timeoutMs = 25000) {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

    const res = await fetch(`${API_BASE}${endpoint}`, {
      signal: controller.signal,
      next: { revalidate: 0 },
      headers: { Accept: 'application/json' },
      cache: 'no-store'
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const json = await res.json();
      if (json.success && json.data) {
        return json.data;
      }
    }
  } catch (err) {
    // Network / timeout error: silently proceed to fallback
  }

  return fallbackData;
}

export async function fetchHomeData() {
  const data = await safeFetch('/home', fallbackHomeData, 25000);
  return data ? { ...fallbackHomeData, ...data } : fallbackHomeData;
}

export async function fetchAboutData() {
  const data = await safeFetch('/about', fallbackAboutData, 25000);
  return data ? { ...fallbackAboutData, ...data } : fallbackAboutData;
}

export async function fetchProductsData() {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 20000);
    const res = await fetch(`${API_BASE}/products`, {
      signal: controller.signal,
      next: { revalidate: 0 },
      cache: 'no-store'
    });
    clearTimeout(timeoutId);
    if (res.ok) {
      const json = await res.json();
      if (json.success && Array.isArray(json.data) && json.data.length > 0) {
        return {
          header: json.header || {
            title: "Our Print &",
            titleHighlight: "Packaging Solutions",
            description: "Inspect the engineering details, sizes, and print calibrations of our premium commercial packaging solutions."
          },
          products: json.data
        };
      }
    }
  } catch (err) {}

  // Fallback to updated productsData
  const { productsData } = await import('@/app/products/productsData');
  return {
    header: {
      title: "Our Print &",
      titleHighlight: "Packaging Solutions",
      description: "Inspect the engineering details, sizes, and print calibrations of our premium commercial packaging solutions."
    },
    products: productsData
  };
}

export async function fetchProductById(id) {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);
    const res = await fetch(`${API_BASE}/products/${id}`, {
      signal: controller.signal,
      next: { revalidate: 0 },
      cache: 'no-store'
    });
    clearTimeout(timeoutId);
    if (res.ok) {
      const json = await res.json();
      if (json.success && json.data) {
        return json.data;
      }
    }
  } catch (err) {}

  const { productsData } = await import('@/app/products/productsData');
  return productsData.find((p) => p.id === id) || null;
}

export async function fetchMarketsData() {
  return await safeFetch('/markets-page', null, 20000);
}

export async function fetchCareerData() {
  return await safeFetch('/career', null, 20000);
}

export async function fetchContactData() {
  return await safeFetch('/contact', null, 20000);
}
