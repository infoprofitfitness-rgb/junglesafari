export const siteConfig = {
  name: "Jungle Safari Experts",
  tagline: "India's Trusted Wildlife Safari Tour Specialists",
  phone: "+91 8239700018",
  phoneLink: "tel:+918239700018",
  whatsapp: "https://wa.me/918239700018",
  email: "info@junglesafariexperts.com",
  hours: "Monday – Sunday | 9:00 AM – 8:00 PM (IST)",
  developer: "Flowrush Technologies",
};

export function whatsappLink(message?: string) {
  if (!message) return siteConfig.whatsapp;
  return `${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const whatsappMessages = {
  general:
    "Hi, I'm interested in booking a safari with Jungle Safari Experts.",
  tour: (tourName: string) =>
    `Hi, I'm interested in booking the ${tourName}.`,
  enquiry: (name: string, phone: string, safari: string) =>
    `Hi, I'd like to enquire about a safari.\n\nName: ${name}\nMobile: ${phone}\nSafari: ${safari}`,
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Tours", href: "#tours" },
  { label: "Contact Us", href: "#contact" },
];

export const marqueeItems = [
  "Jhalana Leopard Safari",
  "Ranthambore Tiger Safari",
  "Sariska Tiger Safari",
  "Amargarh Leopard Safari",
  "Government-Approved Bookings",
  "Expert Naturalist Guides",
  "International Tourist Friendly",
  "Transparent Pricing",
];

export const stats = [
  { value: "4+", label: "Signature Safari Destinations" },
  { value: "100%", label: "Government-Approved Bookings" },
  { value: "24×7", label: "Dedicated Safari Support" },
  { value: "500+", label: "Happy Safari Travelers" },
];

export const tours = [
  {
    id: "jhalana",
    title: "Jhalana Leopard Safari",
    description:
      "India's best destination for leopard sightings, located right inside Jaipur city. A must-do safari for short stays and luxury travelers.",
    features: [
      "High Leopard Sighting Probability",
      "Morning & Evening Safaris",
      "Perfect for Foreign Tourists",
    ],
    image:
      "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=800&q=80",
    badge: "Most Popular",
  },
  {
    id: "amargarh",
    title: "Amargarh Leopard Safari",
    description:
      "A hidden gem near Jaipur offering raw jungle experience, fewer crowds, and natural leopard movement.",
    features: [
      "Peaceful Forest Experience",
      "Offbeat & Exclusive Safari",
      "Budget-Friendly Safari Option",
    ],
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
    badge: "Offbeat Pick",
  },
  {
    id: "ranthambore",
    title: "Ranthambore Tiger Safari",
    description:
      "Witness majestic Royal Bengal Tigers in one of India's most famous national parks. Ideal for wildlife photography, nature lovers, and first-time safari travelers.",
    features: [
      "Jeep & Canter Safari Booking",
      "Government-Authorized Entry",
      "Expert Naturalist Assistance",
    ],
    image:
      "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&q=80",
    badge: "Tiger Trails",
  },
  {
    id: "sariska",
    title: "Sariska Tiger Safari",
    description:
      "A historic tiger reserve surrounded by Aravalli hills, combining wildlife, scenic beauty, and heritage landscapes.",
    features: [
      "Tiger & Wildlife Safari",
      "Less Crowded Zones",
      "Ideal from Delhi & Jaipur",
    ],
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
    badge: "Heritage Wild",
  },
];

export const whyChooseUs = [
  {
    title: "Specialized Safari Company",
    description: "We focus only on jungle safaris — no distractions, pure expertise.",
  },
  {
    title: "Trusted by International Tourists",
    description: "Smooth handling, clear communication, and seamless safari coordination.",
  },
  {
    title: "Transparent Pricing",
    description: "No hidden costs. What you see is what you pay — always upfront.",
  },
  {
    title: "Government-Approved Bookings",
    description: "All permits and entries are officially authorized and verified.",
  },
  {
    title: "Expert Local Coordinators",
    description: "On-ground safari experts who know every zone and sighting pattern.",
  },
  {
    title: "Quick Confirmations & Support",
    description: "Fast booking confirmations with dedicated support before and during your safari.",
  },
];

export const services = [
  "Jungle Safari Permit Booking",
  "Jeep & Canter Safari Arrangements",
  "Professional Naturalist & Guides",
  "Customized Safari Itineraries",
  "Hotel & Resort Coordination (on request)",
  "Photography-Focused Safari Planning",
  "Family, Group & Solo Safari Tours",
];

export const testimonials = [
  {
    quote:
      "An unforgettable leopard sighting at Jhalana! The team handled everything perfectly — permits, pickup, and an amazing naturalist guide.",
    name: "James Mitchell",
    role: "Wildlife Photographer, UK",
  },
  {
    quote:
      "Our Ranthambore tiger safari was the highlight of our India trip. Professional, punctual, and truly passionate about wildlife.",
    name: "Priya Sharma",
    role: "Travel Enthusiast, Delhi",
  },
  {
    quote:
      "As international travelers, we needed reliable coordination. Jungle Safari Experts delivered beyond expectations — highly recommended!",
    name: "Michael & Sarah",
    role: "Tourists from Australia",
  },
  {
    quote:
      "Sariska was peaceful and beautiful. The offbeat Amargarh safari was a hidden gem — fewer crowds and an authentic jungle feel.",
    name: "Rajesh Verma",
    role: "Nature Lover, Jaipur",
  },
];

export const safariOptions = [
  "Ranthambore Tiger Safari",
  "Jhalana Leopard Safari",
  "Amargarh Leopard Safari",
  "Sariska Tiger Safari",
];
