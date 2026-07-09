"use client";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Warm off-white base */}
      <div className="absolute inset-0 bg-[#faf9f7]" />

      {/* Soft gradient wash across the page */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-violet-50 opacity-80" />

      {/* Large blurred color orbs */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-pink-200 to-rose-300 rounded-full filter blur-[120px] opacity-30 animate-blob" />
      <div className="absolute top-1/2 -right-32 w-[400px] h-[400px] bg-gradient-to-br from-violet-200 to-indigo-300 rounded-full filter blur-[100px] opacity-25 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-32 left-1/4 w-[450px] h-[450px] bg-gradient-to-br from-amber-100 to-orange-200 rounded-full filter blur-[120px] opacity-20 animate-blob animation-delay-4000" />

      {/* Subtle noise texture overlay for depth */}
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
