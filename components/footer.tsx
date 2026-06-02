import { Container } from "@/components/ui/container";
import { site } from "@/lib/site";
import { Mail } from "lucide-react";
import { LinkedInIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {site.name}. Built with Next.js &amp; Tailwind.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition-colors hover:text-accent"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
          <a
            href={site.links.email}
            aria-label="Email"
            className="text-muted transition-colors hover:text-accent"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
