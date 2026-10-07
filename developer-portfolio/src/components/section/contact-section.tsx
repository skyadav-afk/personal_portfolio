import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { PhoneIcon } from "lucide-react";

export default function ContactSection() {
  return (
    <div className="border rounded-xl p-6 pt-10 sm:p-10 relative">
      <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
        <span className="text-background text-sm font-medium">Contact</span>
      </div>
      <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>
      <div className="relative flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Get in Touch
        </h2>
        <p className="mx-auto max-w-lg text-muted-foreground text-balance">
          Want to chat? Send me an email, reach out on LinkedIn, or give me
          a call and I&apos;ll respond whenever I can.
        </p>
        <div className="flex w-full flex-col gap-3 pt-2 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center">
          <Button asChild size="lg" className="w-full gap-2 sm:w-auto">
            <a href={`mailto:${DATA.contact.email}`}>
              <Icons.email className="size-4" />
              Send a Mail
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full gap-2 sm:w-auto"
          >
            <a
              href={DATA.contact.social.LinkedIn.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.linkedin className="size-4" />
              Contact via LinkedIn
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full gap-2 sm:w-auto"
          >
            <a href={`tel:${DATA.contact.tel}`}>
              <PhoneIcon className="size-4" />
              {DATA.contact.telDisplay}
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
