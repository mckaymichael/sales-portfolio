"use client";

import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

interface ImageWrapperProps extends ImageProps {
  className?: string;
}

export function ImageWrapper({
  src,
  alt,
  className,
  ...props
}: ImageWrapperProps) {
  return (
    <div className={cn("relative overflow-hidden group w-full h-full", className)}>
      <Image
        src={src}
        alt={alt}
        className="object-cover w-full h-full transition-all duration-700 ease-in-out"
        {...props}
      />
    </div>
  );
}
