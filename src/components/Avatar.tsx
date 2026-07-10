"use client";

import Image from "next/image";
import { useState } from "react";

interface AvatarProps {
  src: string;
  name: string;
}

export default function Avatar({ src, name }: AvatarProps) {
  const [imageError, setImageError] = useState(false);

  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="relative">
      <div className="absolute -inset-2 rounded-full border border-[#ffca7c]/30 opacity-70" />
      <div className="absolute -inset-1 rounded-full bg-[#ffca7c]/10 blur-md animate-spin-slow" />

      <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border border-[#ffca7c]/80 shadow-[0_18px_40px_rgba(0,0,0,0.28)] ring-4 ring-[#ffca7c]/12">
        {imageError ? (
          <div className="flex h-full w-full items-center justify-center bg-[#6c0908]">
            <span className="text-3xl font-semibold tracking-[0.2em] text-[#ffca7c]">{initials}</span>
          </div>
        ) : (
          <Image
            src={src}
            alt={name}
            fill
            className="object-cover"
            onError={() => setImageError(true)}
            priority
          />
        )}
      </div>
    </div>
  );
}
