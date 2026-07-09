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
      {/* Animated gradient ring */}
      <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-rose-400 via-violet-400 to-indigo-400 opacity-70 blur-sm animate-spin-slow" />
      <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-rose-400 via-violet-400 to-indigo-400 opacity-50" />

      {/* Avatar */}
      <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white shadow-xl">
        {imageError ? (
          <div className="w-full h-full bg-gradient-to-br from-violet-400 to-pink-400 flex items-center justify-center">
            <span className="text-3xl font-bold text-white">{initials}</span>
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
