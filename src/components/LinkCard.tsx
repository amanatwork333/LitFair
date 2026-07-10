"use client";

import { Link } from "@/config/links";
import { useState } from "react";

interface LinkCardProps {
  link: Link;
  index: number;
}

// Each card gets a unique gradient accent on hover
const gradients = [
  "hover:border-rose-300 hover:shadow-rose-100",
  "hover:border-violet-300 hover:shadow-violet-100",
  "hover:border-amber-300 hover:shadow-amber-100",
  "hover:border-indigo-300 hover:shadow-indigo-100",
  "hover:border-emerald-300 hover:shadow-emerald-100",
  "hover:border-pink-300 hover:shadow-pink-100",
];

const iconBgs = [
  "bg-rose-100 group-hover:bg-rose-200",
  "bg-violet-100 group-hover:bg-violet-200",
  "bg-amber-100 group-hover:bg-amber-200",
  "bg-indigo-100 group-hover:bg-indigo-200",
  "bg-emerald-100 group-hover:bg-emerald-200",
  "bg-pink-100 group-hover:bg-pink-200",
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
        bg-white/80 backdrop-blur-sm
        border border-gray-100
        shadow-sm
        transition-all duration-300 ease-out
        hover:scale-[1.025] hover:shadow-lg
        ${gradient}
        ${link.isHighlighted ? "ring-2 ring-violet-300 border-violet-200" : ""}
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
        <h3 className="font-semibold text-gray-800 text-base leading-tight">
          {link.title.replace(/^\S+\s/, "")}
        </h3>
        {link.description && (
          <p className="text-sm text-gray-400 mt-0.5 truncate">
            {link.description}
          </p>
        )}
      </div>

      {/* Animated arrow */}
      <span className={`
        shrink-0 w-8 h-8 rounded-full flex items-center justify-center
        bg-gray-100 text-gray-400
        transition-all duration-300
        ${isHovered ? "bg-gray-800 text-white translate-x-1" : ""}
      `}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>

      {/* "New" badge */}
      {link.isHighlighted && (
        <span className="absolute -top-2.5 -right-2 px-2.5 py-0.5 text-xs font-bold bg-gradient-to-r from-violet-500 to-pink-500 text-white rounded-full shadow-md">
          ✦ 
        </span>
      )}
    </a>
  );
}
