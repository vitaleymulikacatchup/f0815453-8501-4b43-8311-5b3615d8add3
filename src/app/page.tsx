"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import HeroBillboard from "@/components/sections/hero/HeroBillboard";
import SplitAbout from "@/components/sections/about/SplitAbout";
import FeatureCardTwo from "@/components/sections/feature/FeatureCardTwo";
import TeamCardTwo from "@/components/sections/team/TeamCardTwo";
import TestimonialCardOne from "@/components/sections/testimonial/TestimonialCardOne";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FooterBase from "@/components/sections/footer/FooterBase";
import { CheckCircle, Globe, Lightbulb, Linkedin, Zap } from "lucide-react";

const assetMap = [
  {"id":"hero-image","url":"https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A single black chair in a minimalistic studio setting with a neutral backdrop."},
  {"id":"about-image","url":"https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Group of young professionals engaged in a collaborative meeting in a modern office setting."},
  {"id":"contact-image","url":"https://images.pexels.com/photos/8867263/pexels-photo-8867263.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Group of diverse professionals working in a modern call center, engaging with clients through headsets."},
  {"id":"feature-image-1","url":"https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Top view of a team working on construction plans in an office setting."},
  {"id":"feature-image-2","url":"https://images.pexels.com/photos/3782235/pexels-photo-3782235.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A corkboard with motivational sticky notes, ideal for planning and creativity."},
  {"id":"team-member-1","url":"https://images.pexels.com/photos/34346052/pexels-photo-34346052.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A young man stands by a canal holding a camera, capturing serene moments outdoors."},
  {"id":"testimonial-1","url":"https://images.pexels.com/photos/7447131/pexels-photo-7447131.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A man enjoying a hair wash with his eyes closed, experiencing relaxation at a barber shop."}
];

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <NavbarLayoutFloatingOverlay
            navItems={[
              { name: "Home", id: "home" },
              { name: "About", id: "about" },
              { name: "Services", id: "services" },
              { name: "Contact", id: "contact" }
            ]}
            brandName="Allen Design Studio"
          />
        </div>
      </div>

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Welcome to Allen Design Studio"
            description="Creating impactful visual experiences."
            imageSrc={assetMap.find(a => a.id === "hero-image")?.url || "/public/images/placeholder.webp"}
            buttons={[
              { text: "Discover More", href: "about" },
              { text: "Contact Us", href: "contact" }
            ]}
          />
        </div>
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <SplitAbout
            title="About Us"
            description="We blend creativity with technical precision to bring your ideas to life. Learn more about our mission and values."
            bulletPoints={[
              { title: "Innovative Design", description: "Pushing the boundaries of creativity.", icon: Lightbulb },
              { title: "Quality Assurance", description: "Excellence in every detail.", icon: CheckCircle }
            ]}
            imageSrc={assetMap.find(a => a.id === "about-image")?.url || "/public/images/placeholder.webp"}
            imageAlt={assetMap.find(a => a.id === "about-image")?.alt || "Decorative image"}
          />
        </div>
      </div>

      <div id="feature" data-section="feature" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardTwo
            title="Our Expertise"
            description="Explore the features that set us apart."
            features={[
              { title: "Design Strategy", description: "Tailored solutions for your business.", icon: Globe, button: { text: "Learn More", href: "#" } },
              { title: "Creative Workshops", description: "Fostering team innovation.", icon: Zap, button: { text: "Join Us", href: "#" } }
            ]}
          />
        </div>
      </div>

      <div id="team" data-section="team" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TeamCardTwo
            title="Our Creative Minds"
            description="Meet the people who drive our success."
            members={[
              {
                id: "1",
                name: "Sophie Johnson",
                role: "Lead Designer",
                description: "Experience in innovative design solutions.",
                imageSrc: assetMap.find(a => a.id === "team-member-1")?.url || "/public/images/placeholder.webp",
                imageAlt: assetMap.find(a => a.id === "team-member-1")?.alt || "Decorative image",
                socialLinks: [{ icon: Linkedin, url: "https://linkedin.com" }]
              }
            ]}
          />
        </div>
      </div>

      <div id="testimonial" data-section="testimonial" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TestimonialCardOne
            title="What Our Clients Say"
            description="Real feedback from our valued clients."
            testimonials={[
              { id: "1", name: "Alice Brown", role: "CEO, TechSolutions", company: "TechSolutions", rating: 5, imageSrc: assetMap.find(a => a.id === "testimonial-1")?.url || "/public/images/placeholder.webp", imageAlt: assetMap.find(a => a.id === "testimonial-1")?.alt || "Decorative image" },
              { id: "2", name: "Mike Davis", role: "Marketing Director", company: "CreativeCo" },
              { id: "3", name: "John Carroll", role: "Project Manager", company: "DesignHub" },
              { id: "4", name: "Emily Lane", role: "CFO", company: "BizGrowth" }
            ]}
          />
        </div>
      </div>

      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenter
            tag="Get In Touch"
            title="Let's Create Together"
            description="Reach out for projects, collaborations, or inquiries."
            onSubmit={(email) => console.log(email)}
          />
        </div>
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              { title: "Company", items: [{ label: "About Us", href: "about" }, { label: "Careers", href: "#" }] },
              { title: "Services", items: [{ label: "Design", href: "#" }, { label: "Strategy", href: "#" }] },
              { title: "Connect", items: [{ label: "Contact", href: "contact" }, { label: "Blog", href: "#" }] }
            ]}
            logoSrc="/brand/logo.svg"
            copyrightText="© 2023 Allen Design Studio"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
