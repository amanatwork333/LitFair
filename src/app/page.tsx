import { siteConfig } from "@/config/links";
import Avatar from "@/components/Avatar";
import LinkCard from "@/components/LinkCard";
import SocialLinks from "@/components/SocialLinks";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function Home() {
  return (
    <>
      <AnimatedBackground />

      <main className="min-h-screen flex flex-col items-center px-4 py-14 sm:py-20">
        <div className="w-full max-w-md mx-auto">

          {/* Profile */}
          <section className="text-center mb-10 animate-fade-in-up">
            <div className="flex justify-center mb-5">
              <Avatar src={siteConfig.avatarUrl} name={siteConfig.name} />
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold mb-2 tracking-tight text-[#ffca7c]">
              {siteConfig.name}
            </h1>

            <div className="mx-auto mb-4 h-px w-20 rounded-full bg-[#ffca7c]/70" />

            <p className="text-[#f5d9a8] text-base max-w-xs mx-auto leading-relaxed">
              {siteConfig.bio}
            </p>
          </section>

          {/* Notice */}
          <section className="mb-8 animate-fade-in-up" style={{ animationDelay: "60ms" }}>
            <div className="flex items-start gap-3 rounded-2xl border border-[#ffca7c]/40 bg-[#ffca7c]/10 backdrop-blur-sm px-4 py-3 shadow-[0_8px_20px_rgba(0,0,0,0.12)]">
              <span className="text-lg leading-none mt-0.5">⚠️</span>
              <p className="text-[#f5d9a8] text-xs sm:text-sm leading-relaxed">
                Due to limited seats, participants will be shortlisted on a first come, first served basis.
                Shortlisted participants will be notified via mail or WhatsApp.
              </p>
            </div>
          </section>

          {/* Links */}
          <section className="space-y-3 mb-10">
            {siteConfig.links.map((link, index) => (
              <div
                key={link.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${(index + 1) * 80}ms` }}
              >
                <LinkCard link={link} index={index} />
              </div>
            ))}
          </section>

          {/* Social */}
          <section className="animate-fade-in-up" style={{ animationDelay: "600ms" }}>
            <p className="text-center text-xs font-medium text-[#f5d9a8] uppercase tracking-widest mb-4">
              Find us on
            </p>
            <SocialLinks links={siteConfig.socialLinks} />
          </section>

          {/* Footer */}
          <footer className="mt-12 text-center animate-fade-in-up" style={{ animationDelay: "700ms" }}>
            <p className="text-[#f5d9a8] text-xs">
              © {new Date().getFullYear()} {siteConfig.name}
            </p>
            <p className="text-[#f5d9a8] text-xs mt-1">
              Aadarsh Kumar (Faculty Coordinator) | Vasu (Student Coordinator)
            </p>
            <p className="text-[#f5d9a8] text-xs mt-1">
              +91 70501 32006       |    +91 99642 07000
            </p>
          </footer>

        </div>
      </main>
    </>
  );
}