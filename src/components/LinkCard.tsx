"use client";

import { Link } from "@/config/links";
import { useState } from "react";

interface LinkCardProps {
  link: Link;
  index: number;
}

const gradients = [
  "hover:border-[#f5d9a8] hover:shadow-[0_16px_34px_rgba(0,0,0,0.18)]",
  "hover:border-[#f5d9a8] hover:shadow-[0_16px_34px_rgba(0,0,0,0.18)]",
  "hover:border-[#f5d9a8] hover:shadow-[0_16px_34px_rgba(0,0,0,0.18)]",
  "hover:border-[#f5d9a8] hover:shadow-[0_16px_34px_rgba(0,0,0,0.18)]",
  "hover:border-[#f5d9a8] hover:shadow-[0_16px_34px_rgba(0,0,0,0.18)]",
  "hover:border-[#f5d9a8] hover:shadow-[0_16px_34px_rgba(0,0,0,0.18)]",
];

const iconBgs = [
  "bg-[#6c0908]/10 group-hover:bg-[#6c0908]/14",
  "bg-[#6c0908]/10 group-hover:bg-[#6c0908]/14",
  "bg-[#6c0908]/10 group-hover:bg-[#6c0908]/14",
  "bg-[#6c0908]/10 group-hover:bg-[#6c0908]/14",
  "bg-[#6c0908]/10 group-hover:bg-[#6c0908]/14",
  "bg-[#6c0908]/10 group-hover:bg-[#6c0908]/14",
];

export default function LinkCard({ link, index }: LinkCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const gradient = gradients[index % gradients.length];
  const iconBg = iconBgs[index % iconBgs.length];

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group relative flex items-center gap-4 p-4 rounded-2xl
        bg-[#ffca7c] backdrop-blur-sm
        border border-[#f5d9a8]
        shadow-[0_12px_26px_rgba(0,0,0,0.14)]
        transition-all duration-300 ease-out
        hover:scale-105 hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(0,0,0,0.24)]
        ${gradient}
        ${link.isHighlighted ? "ring-1 ring-[#f5d9a8]" : ""}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icon bubble */}
      <span className={`
        flex items-center justify-center w-12 h-12 rounded-xl text-2xl
        transition-all duration-300 shrink-0
        ${iconBg}
      `}>
        {link.icon}
      </span>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-[#6c0908] text-base leading-tight">
          {link.title.replace(/^\S+\s/, "")}
        </h3>
        {link.description && (
          <p className="text-sm text-[#6c0908] mt-0.5 truncate opacity-85">
            {link.description}
          </p>
        )}
      </div>

      {/* Animated arrow */}
      <span className={`
        shrink-0 w-8 h-8 rounded-full flex items-center justify-center
        bg-[#6c0908] text-[#ffca7c]
        transition-all duration-300
        ${isHovered ? "translate-x-1 bg-[#3f0404]" : ""}
      `}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>

      {/* "New" badge */}
      {link.isHighlighted && (
        <span className="absolute -top-2.5 -right-2 px-2.5 py-0.5 text-xs font-bold bg-[#6c0908] text-[#ffca7c] rounded-full shadow-[0_8px_18px_rgba(0,0,0,0.18)]">
          ✦ 
        </span>
      )}
    </a>
  );
}
