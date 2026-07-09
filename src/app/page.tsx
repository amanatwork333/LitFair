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

            <h1 className="text-3xl sm:text-4xl font-bold mb-2 tracking-tight bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
              {siteConfig.name}
            </h1>

            {/* Decorative gradient underline */}
            <div className="mx-auto mb-4 h-1 w-16 rounded-full bg-gradient-to-r from-rose-400 via-violet-400 to-indigo-400" />

            <p className="text-gray-500 text-base max-w-xs mx-auto leading-relaxed">
              {siteConfig.bio}
            </p>
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
            <p className="text-center text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">
              Find us on
            </p>
            <SocialLinks links={siteConfig.socialLinks} />
          </section>

          {/* Footer */}
          <footer className="mt-12 text-center animate-fade-in-up" style={{ animationDelay: "700ms" }}>
            <p className="text-gray-300 text-xs">
              © {new Date().getFullYear()} {siteConfig.name}
            </p>
          </footer>

        </div>
      </main>
    </>
  );
}
