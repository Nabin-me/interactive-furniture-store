import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";

const LogoSection = () => (
  <div>
    <Link href="/" className="text-2xl font-medium">
      Furniche
    </Link>
  </div>
);

const NavSection = ({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) => (
  <div className="space-y-4">
    <h3 className="text-base font-medium">{title}</h3>
    <nav className="flex flex-col space-y-3">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-base text-muted-foreground hover:text-foreground"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  </div>
);

const NewsletterSection = () => (
  <div className="space-y-4">
    <h3 className="text-base font-medium">Join our newsletter</h3>
    <div className="flex w-full max-w-sm items-center ">
      <Input
        type="email"
        placeholder="Email Address"
        className="peer  rounded-l-lg rounded-r-none border-r-0"
      />
      <button className=" inline-flex py-7 h-10 w-20 items-center justify-center rounded-r-lg border-l-0 border bg-background hover:bg-accent focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2 ">
        <ArrowRight className="h-4 w-4" />
        <span className="sr-only">Subscribe to newsletter</span>
      </button>
    </div>
  </div>
);

const FooterBottom = () => (
  <div className="mt-12 flex flex-col justify-between gap-4 border-t pt-8 text-sm text-muted-foreground md:flex-row">
    <p>Copyright © {new Date().getFullYear()} Furniche. All rights reserved.</p>
    <p>Site designed and developed by - Nabin Dahal</p>
  </div>
);

const Footer = () => (
  <footer className="w-full py-12 md:pt-16 lg:pt-20">
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
      <LogoSection />
      <NavSection
        title="Company"
        links={[
          { href: "/about", label: "About" },
          { href: "/shop", label: "Shop" },
          { href: "/careers", label: "Careers" },
          { href: "/faq", label: "FAQ" },
          { href: "/privacy", label: "Privacy Policy" },
          { href: "/terms", label: "Terms of Condition" },
        ]}
      />
      <NavSection
        title="Category"
        links={[
          { href: "/living-room", label: "Living Room" },
          { href: "/dining-room", label: "Dining Room" },
          { href: "/home-office", label: "Home Office" },
          { href: "/bedroom", label: "Bedroom" },
          { href: "/outdoor", label: "Outdoor" },
        ]}
      />
      <NewsletterSection />
    </div>
    <FooterBottom />
  </footer>
);

export default Footer;
