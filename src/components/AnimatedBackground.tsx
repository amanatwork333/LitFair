"use client";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#6c0908]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,202,124,0.1),transparent_34%)]" />

      <div className="absolute -top-32 -left-32 h-[460px] w-[460px] rounded-full bg-[#ffca7c] opacity-8 blur-[140px] animate-blob" />
      <div className="absolute top-1/2 -right-24 h-[360px] w-[360px] rounded-full bg-[#ffca7c] opacity-6 blur-[120px] animate-blob animation-delay-2000" />
      <div className="absolute -bottom-40 left-1/4 h-[420px] w-[420px] rounded-full bg-[#ffca7c] opacity-5 blur-[150px] animate-blob animation-delay-4000" />

      <div className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px',
        }}
      />
    </div>
  );
}
