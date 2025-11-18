"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Calendar, Car, Crown, MessageCircle, Shield, Star } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="small"
      sizing="medium"
      background="gradientBars"
      cardStyle="glass-depth"
      primaryButtonStyle="flat"
      secondaryButtonStyle="solid"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Inventory", id: "inventory" },
            { name: "About", id: "about" },
            { name: "Services", id: "services" },
            { name: "Financing", id: "financing" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="PRESTIGE MOTORS"
          button={{
            text: "Schedule Test Drive",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroOverlay
          title="Experience Automotive Excellence"
          description="Discover our curated collection of premium luxury vehicles, each meticulously selected for the discerning automotive enthusiast."
          tag="Exclusive Collection"
          tagIcon={Crown}
          buttons={[
            { text: "View Inventory", href: "inventory" },
            { text: "Schedule Visit", href: "contact" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763480994400-bo96tdiu.jpg"
          imageAlt="Premium luxury sports car"
          textPosition="bottom-left"
          showBlur={true}
          showDimOverlay={true}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Prestige Motors"
          description={[
            "For over three decades, we have been the premier destination for automotive excellence, specializing in rare and exceptional vehicles that define luxury.",
            "Our commitment to perfection extends beyond the vehicles themselves to every aspect of the customer experience, ensuring that each interaction reflects the exclusivity of our collection."
          ]}
          buttons={[
            { text: "Our Story", href: "about" }
          ]}
          showBorder={true}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardOne
          title="Premium Services"
          description="Comprehensive automotive services tailored for luxury vehicle owners"
          tag="Excellence"
          tagIcon={Shield}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          features={[
            {
              title: "Expert Inspection",
              description: "Comprehensive 150-point inspection by certified luxury automotive specialists",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763480995666-3zytsnq0.jpg",
              imageAlt: "Professional car inspection"
            },
            {
              title: "Extended Warranty",
              description: "Premium warranty coverage with nationwide service network and concierge support",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763480996163-7ombkwu0.jpg",
              imageAlt: "Luxury car warranty certificate"
            },
            {
              title: "Bespoke Financing",
              description: "Tailored financing solutions with competitive rates for qualified luxury vehicle buyers",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763480996920-mq6weizf.jpg",
              imageAlt: "Luxury car financing options"
            }
          ]}
        />
      </div>

      <div id="inventory" data-section="inventory">
        <ProductCardTwo
          title="Featured Collection"
          description="Handpicked luxury vehicles from prestigious manufacturers"
          tag="Premium Inventory"
          tagIcon={Car}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          products={[
            {
              id: "sports-coupe",
              brand: "Prestige Collection",
              name: "Performance Coupe",
              price: "$189,000",
              rating: 5,
              reviewCount: "12",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763480997951-bftbtzlr.jpg",
              imageAlt: "Luxury sports coupe"
            },
            {
              id: "executive-sedan",
              brand: "Executive Series",
              name: "Luxury Sedan",
              price: "$145,000",
              rating: 5,
              reviewCount: "8",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763480998611-eidmdl2m.jpg",
              imageAlt: "Executive luxury sedan"
            },
            {
              id: "premium-suv",
              brand: "Elite Collection",
              name: "Premium SUV",
              price: "$225,000",
              rating: 5,
              reviewCount: "15",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763480999374-i0jz6cyt.jpg",
              imageAlt: "Premium luxury SUV"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Ownership Packages"
          description="Comprehensive ownership experiences tailored to your luxury lifestyle"
          tag="Exclusive Offers"
          tagIcon={Crown}
          animationType="slide-up"
          textboxLayout="default"
          plans={[
            {
              id: "select",
              price: "Starting at $125K",
              name: "Select Collection",
              buttons: [
                { text: "Explore Select", href: "inventory" },
                { text: "Schedule Tour", href: "contact" }
              ],
              features: [
                "Certified pre-owned vehicles",
                "12-month warranty coverage",
                "Complimentary maintenance",
                "24/7 roadside assistance"
              ]
            },
            {
              id: "prestige",
              badge: "Most Popular",
              badgeIcon: Star,
              price: "Starting at $175K",
              name: "Prestige Collection",
              buttons: [
                { text: "View Prestige", href: "inventory" },
                { text: "Private Viewing", href: "contact" }
              ],
              features: [
                "Rare and exotic vehicles",
                "24-month warranty coverage",
                "White-glove delivery service",
                "Exclusive member events",
                "Concierge support"
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="Client Experiences"
          description="Testimonials from our distinguished clientele"
          tag="Reviews"
          tagIcon={MessageCircle}
          gridVariant="two-columns-alternating-heights"
          animationType="slide-up"
          textboxLayout="default"
          testimonials={[
            {
              id: "1",
              name: "James Wellington",
              role: "CEO",
              company: "Wellington Enterprises",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763480999896-3r2c4gkw.jpg",
              imageAlt: "James Wellington portrait"
            },
            {
              id: "2",
              name: "Victoria Sterling",
              role: "Investment Director",
              company: "Sterling Capital",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763481000617-4ox7tlly.jpg",
              imageAlt: "Victoria Sterling portrait"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Private Consultation"
          tagIcon={Calendar}
          title="Schedule Your Exclusive Experience"
          description="Arrange a private viewing of our curated collection with our automotive specialists. Experience the pinnacle of luxury automotive excellence."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763481002719-7vyi4mf9.jpg"
          imageAlt="Luxury showroom interior"
          mediaPosition="right"
          inputPlaceholder="Your email address"
          buttonText="Request Consultation"
          termsText="By submitting, you agree to receive exclusive communications about our premium vehicle collection."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="PRESTIGE MOTORS"
          copyrightText="© 2025 Prestige Motors. All rights reserved."
          columns={[
            {
              title: "Collection",
              items: [
                { label: "Sports Cars", href: "inventory" },
                { label: "Luxury Sedans", href: "inventory" },
                { label: "Premium SUVs", href: "inventory" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Financing", href: "financing" },
                { label: "Trade-In", href: "services" },
                { label: "Warranty", href: "services" }
              ]
            }
          ]}
          socialLinks={[
            { icon: "Instagram", href: "https://instagram.com", ariaLabel: "Instagram" },
            { icon: "Facebook", href: "https://facebook.com", ariaLabel: "Facebook" },
            { icon: "Twitter", href: "https://twitter.com", ariaLabel: "Twitter" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}