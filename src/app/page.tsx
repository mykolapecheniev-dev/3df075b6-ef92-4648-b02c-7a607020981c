"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FeatureCardTwentyFour from '@/components/sections/feature/FeatureCardTwentyFour';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Menu",
          id: "features",
        },
        {
          name: "Reviews",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Killo"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{
        variant: "radial-gradient",
      }}
      title="Exquisite Culinary Art"
      description="Discover a symphony of flavors crafted with passion at Killo. We blend traditional techniques with modern creativity to redefine your dining experience."
      buttons={[
        {
          text: "Book a Table",
          href: "#contact",
        },
      ]}
      imageSrc="https://pixabay.com/get/gb9f90985d7e6de24eb3a3890addd0a526c7d9f18e9c3a07c7b5474f0477372b46a8e6b1a3dfe3d99ec7025d03ebc175ce39f9ef146f79553b55b664eb4520357_1280.jpg"
      mediaAnimation="blur-reveal"
      avatars={[
        {
          src: "https://pixabay.com/get/g71bc4a7894b669112fbfdd609a11c20d2c07461e74584f07914f37501d898b95ae20bf2f8cd50338f5ce50caebb9ee4d82fa0c0124713807739a5ee7554b06a9_1280.jpg",
          alt: "Happy diner",
        },
        {
          src: "https://pixabay.com/get/gdbb23c3ed6563efb1f54fa03c2dcb719e3c1e8f070cc829305c80eac1db216ddebab3fe659d811f9d52e8f798f74d6f97030dbdb8d708301d0f5f9d0d5be9683_1280.jpg",
          alt: "Food critic",
        },
        {
          src: "https://pixabay.com/get/g3f47466cfdd3b9f6658937c507ae4f5a6c860596835d7c2b5dcb558c9ffd9d42780f19f2b17350de8de243c1b042638abaf7e597bda78e84446387fac418a994_1280.jpg",
          alt: "Satisfied guest",
        },
        {
          src: "https://pixabay.com/get/gdc4f5151bcd295a772dc611a57a177eec4c67e9ae402c853ae1062797df832220d62538015a5e527a447c92eb2390623a16d712e6311bef579165ac951575ced_1280.jpg",
          alt: "Happy patron",
        },
        {
          src: "https://pixabay.com/get/g71bc4a7894b669112fbfdd609a11c20d2c07461e74584f07914f37501d898b95ae20bf2f8cd50338f5ce50caebb9ee4d82fa0c0124713807739a5ee7554b06a9_1280.jpg",
          alt: "Regular guest",
        },
      ]}
      avatarText="Over 5,000+ satisfied guests"
      marqueeItems={[
        {
          type: "text",
          text: "Michelin Recommended",
        },
        {
          type: "text",
          text: "Locally Sourced",
        },
        {
          type: "text",
          text: "Seasonal Menu",
        },
        {
          type: "text",
          text: "Fine Dining",
        },
        {
          type: "text",
          text: "Culinary Excellence",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",
          content: "Our Passion for Flavor",
        },
        {
          type: "image",
          src: "https://pixabay.com/get/g8ae4e8171ed57a0a3b4f7946f195d3fd7ac66831cc9bc494667cfbc01e01a524fa172496acadbaf57e0fb1d5d253e64664a42a7c081d1e740c41d5557603ccb8_1280.jpg",
          alt: "Chef preparing dish",
        },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyFour
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        {
          id: "1",
          title: "Prime Ribeye",
          author: "Chef's Signature",
          description: "28-day aged beef grilled to perfection over oak wood.",
          tags: [
            "Meat",
            "Signature",
          ],
          imageSrc: "https://pixabay.com/get/g975c5ca51c8987f6e5f41cef00b7ba134ce9647ecd6b4ea840717dd304ce6816981b5be9552201a8bf860de2bb0eb5b4e0fb381b1579176a7451091eefff157a_1280.jpg",
        },
        {
          id: "2",
          title: "Ocean Harvest",
          author: "Fresh Catch",
          description: "Sustainable wild-caught fish with a citrus herb reduction.",
          tags: [
            "Seafood",
            "Fresh",
          ],
          imageSrc: "https://pixabay.com/get/g3afc3006100b94e7895f6588d05820028ad49c079da4a0f51d9dc8a2cec246f198a628694c35c772033d6ba54ff92f356eef4c5ae82b13420b6198c76b9d36b9_1280.jpg",
        },
        {
          id: "3",
          title: "Truffle Tagliatelle",
          author: "Classic Choice",
          description: "Hand-made pasta infused with seasonal black truffles.",
          tags: [
            "Pasta",
            "Vegetarian",
          ],
          imageSrc: "https://pixabay.com/get/ge000cf016b3287a6e12ee1013ce739713fd3679777b53739d8dd75df8bf1cc74db2dce21fe44a0ef950b8e5c17a25a4e9b20dbec6067ac9d348209e12ad8f360_1280.jpg",
        },
      ]}
      title="Signature Creations"
      description="Experience our carefully curated menu, featuring locally sourced ingredients and authentic recipes reimagined for the modern palate."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Elena M.",
          imageSrc: "https://pixabay.com/get/g71bc4a7894b669112fbfdd609a11c20d2c07461e74584f07914f37501d898b95ae20bf2f8cd50338f5ce50caebb9ee4d82fa0c0124713807739a5ee7554b06a9_1280.jpg",
        },
        {
          id: "2",
          name: "Marcus R.",
          imageSrc: "https://pixabay.com/get/gdbb23c3ed6563efb1f54fa03c2dcb719e3c1e8f070cc829305c80eac1db216ddebab3fe659d811f9d52e8f798f74d6f97030dbdb8d708301d0f5f9d0d5be9683_1280.jpg",
        },
        {
          id: "3",
          name: "Sofia L.",
          imageSrc: "https://pixabay.com/get/g3f47466cfdd3b9f6658937c507ae4f5a6c860596835d7c2b5dcb558c9ffd9d42780f19f2b17350de8de243c1b042638abaf7e597bda78e84446387fac418a994_1280.jpg",
        },
        {
          id: "4",
          name: "David K.",
          imageSrc: "https://pixabay.com/get/gdc4f5151bcd295a772dc611a57a177eec4c67e9ae402c853ae1062797df832220d62538015a5e527a447c92eb2390623a16d712e6311bef579165ac951575ced_1280.jpg",
        },
        {
          id: "5",
          name: "Sarah J.",
          imageSrc: "https://pixabay.com/get/g71bc4a7894b669112fbfdd609a11c20d2c07461e74584f07914f37501d898b95ae20bf2f8cd50338f5ce50caebb9ee4d82fa0c0124713807739a5ee7554b06a9_1280.jpg",
        },
      ]}
      cardTitle="What Guests Say"
      cardTag="Testimonials"
      cardAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{
        variant: "plain",
      }}
      tag="Reservations"
      title="Join Us Tonight"
      description="Secure your table for an unforgettable culinary journey at Killo. Open Tuesday through Sunday."
      buttons={[
        {
          text: "Reserve Now",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      columns={[
        {
          title: "Killo",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Our Menu",
              href: "#features",
            },
          ],
        },
        {
          title: "Contact",
          items: [
            {
              label: "Reservations",
              href: "#contact",
            },
            {
              label: "Location",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2024 Killo Restaurant. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
