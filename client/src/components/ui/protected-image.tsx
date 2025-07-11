import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface ProtectedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
  disableRightClick?: boolean;
  disableDownload?: boolean;
  watermark?: string;
  rotation?: number;
}

export function ProtectedImage({ 
  src, 
  alt, 
  fallbackSrc, 
  className,
  disableRightClick = true,
  disableDownload = true,
  watermark,
  rotation,
  ...props 
}: ProtectedImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleImageLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
    setHasError(true);
    
    // Try fallback if provided
    if (fallbackSrc && imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
    }
  };

  const handleContextMenu = (e: React.MouseEvent) => {
    if (disableRightClick) {
      e.preventDefault();
    }
  };

  const handleDragStart = (e: React.DragEvent) => {
    if (disableDownload) {
      e.preventDefault();
    }
  };

  return (
    <div className="relative overflow-hidden w-full h-full">
      {isLoading && (
        <div className={cn(
          "absolute inset-0 bg-gray-200 animate-pulse",
          className?.includes('rounded') ? className.split(' ').find(c => c.includes('rounded')) : 'rounded'
        )} />
      )}
      
      <picture>
        <img
          {...props}
          src={imgSrc}
          alt={alt}
          className={cn(
            "w-full h-full",
            className,
            disableDownload && "select-none",
            isLoading && "opacity-0",
            hasError && "opacity-50"
          )}
          onLoad={handleImageLoad}
          onError={handleImageError}
          onContextMenu={handleContextMenu}
          onDragStart={handleDragStart}
          loading="lazy"
          decoding="async"
          style={{
            ...props.style,
            userSelect: disableDownload ? 'none' : 'auto',
            WebkitUserSelect: disableDownload ? 'none' : 'auto',
            MozUserSelect: disableDownload ? 'none' : 'auto',
            transform: rotation ? `rotate(${rotation}deg)` : undefined,
          } as React.CSSProperties}
        />
      </picture>

      {/* Watermark overlay */}
      {watermark && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-white/15 text-sm font-medium transform rotate-45 select-none">
            {watermark}
          </div>
        </div>
      )}

      {/* Invisible overlay to prevent easy downloading */}
      {disableDownload && (
        <div 
          className="absolute inset-0 cursor-default bg-transparent"
          onContextMenu={handleContextMenu}
          onDragStart={handleDragStart}
        />
      )}
    </div>
  );
}
