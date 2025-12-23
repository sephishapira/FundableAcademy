
import React from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
  tag: string;
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  href: string;
  isExternal?: boolean;
  theme?: 'dark' | 'gold' | 'blue';
  actionLabel?: string;
}

const Card: React.FC<CardProps> = ({ 
  tag, 
  title, 
  subtitle, 
  description,
  image, 
  href, 
  isExternal = false, 
  theme = 'dark',
  actionLabel = "READ"
}) => {
  const Component = isExternal ? 'a' : Link;
  const props = isExternal ? { href, target: "_blank", rel: "noreferrer" } : { to: href };

  // Theme styles for background and text
  const themeStyles = {
    dark: {
      bg: "bg-[#0B2E26]", // Sequoia Dark
      text: "text-white",
      dot: "bg-white",
      accent: "text-white/70"
    },
    gold: {
      bg: "bg-[#D9B341]", // Heritage Gold
      text: "text-beige-900",
      dot: "bg-beige-900",
      accent: "text-beige-900/60"
    },
    blue: {
      bg: "bg-[#0056D2]", // Strategic Blue
      text: "text-white",
      dot: "bg-white",
      accent: "text-white/70"
    }
  };

  const style = themeStyles[theme];

  return (
    // @ts-ignore
    <Component {...props} className={`group relative block w-full aspect-[2/3] overflow-hidden cursor-pointer ${style.bg}`}>
      {/* Background Image (if exists) */}
      {image && (
        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
          <img src={image} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/20 transition-opacity duration-300"></div>
        </div>
      )}

      {/* Content */}
      <div className={`relative h-full flex flex-col justify-between p-8 md:p-10 ${style.text}`}>
        {/* Header */}
        <div className="flex justify-between items-start">
          <div className="flex items-center space-x-2">
            <span className={`w-2 h-2 rounded-full ${style.dot}`}></span>
            <span className="text-[10px] font-bold tracking-widest uppercase opacity-90">{tag}</span>
          </div>
          <span className={`text-[10px] font-bold tracking-widest uppercase ${style.accent} group-hover:opacity-100 transition-opacity`}>
            {actionLabel}
          </span>
        </div>

        {/* Middle Description */}
        {description && (
          <div className="flex-grow flex items-center py-6 md:py-8">
            <p className={`text-xl md:text-2xl font-serif italic leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity`}>
              {description}
            </p>
          </div>
        )}

        {/* Footer Title */}
        <div className="mt-auto pt-4">
          {subtitle && (
            <p className={`text-[11px] font-bold uppercase tracking-[0.15em] mb-4 ${style.accent}`}>{subtitle}</p>
          )}
          <h3 className="text-4xl md:text-5xl font-serif leading-tight tracking-tight group-hover:underline decoration-1 underline-offset-8">
            {title}
          </h3>
        </div>
      </div>
    </Component>
  );
};

export default Card;
