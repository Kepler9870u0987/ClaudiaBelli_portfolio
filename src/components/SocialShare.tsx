import { useState } from 'react';
import { Share2, Twitter, Facebook, Link2, Check } from 'lucide-react';
import { cn } from '../lib/utils';

interface SocialShareProps {
  title: string;
  description?: string;
  urlPath?: string;
  className?: string;
  size?: 'sm' | 'md';
}

export const SocialShare = ({ 
  title, 
  description = '', 
  urlPath = window.location.pathname, 
  className = '',
  size = 'sm'
}: SocialShareProps) => {
  const [copied, setCopied] = useState(false);

  const shareUrl = `${window.location.origin}${urlPath}`;
  const shareText = `Scopri "${title}" di Claudia Belli: ${description}`.slice(0, 150) + '...';

  const links = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Non è stato possibile copiare il link: ', err);
    }
  };

  const isSmall = size === 'sm';

  return (
    <div 
      className={cn("flex items-center gap-2", className)}
      onClick={(e) => e.stopPropagation()}
    >
      <span className={cn(
        "font-sans font-semibold uppercase tracking-[0.15em] text-brand-stone/50 opacity-100",
         isSmall ? "text-[8px]" : "text-[10px]"
      )}>
        Condividi:
      </span>
      <div className="flex items-center gap-1.5">
        {/* Twitter/X */}
        <a
          href={links.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "rounded-full flex items-center justify-center transition-all bg-brand-cream dark:bg-brand-paper hover:bg-brand-clay hover:text-white border border-brand-ink/5 hover:border-transparent text-brand-stone",
            isSmall ? "w-7 h-7" : "w-9 h-9"
          )}
          title="Condividi su X"
        >
          <Twitter size={isSmall ? 12 : 15} />
        </a>

        {/* Facebook */}
        <a
          href={links.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "rounded-full flex items-center justify-center transition-all bg-brand-cream dark:bg-brand-paper hover:bg-brand-clay hover:text-white border border-brand-ink/5 hover:border-transparent text-brand-stone",
            isSmall ? "w-7 h-7" : "w-9 h-9"
          )}
          title="Condividi su Facebook"
        >
          <Facebook size={isSmall ? 12 : 15} />
        </a>

        {/* WhatsApp */}
        <a
          href={links.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "rounded-full flex items-center justify-center transition-all bg-brand-cream dark:bg-brand-paper hover:bg-brand-clay hover:text-white border border-brand-ink/5 hover:border-transparent text-brand-stone",
            isSmall ? "w-7 h-7" : "w-9 h-9"
          )}
          title="Condividi su WhatsApp"
        >
          <Share2 size={isSmall ? 12 : 15} />
        </a>

        {/* Copy Link */}
        <button
          onClick={copyToClipboard}
          className={cn(
            "rounded-full flex items-center justify-center transition-all relative bg-brand-cream dark:bg-brand-paper border border-brand-ink/5 text-brand-stone",
            copied 
              ? "bg-brand-olive text-white border-transparent" 
              : "hover:bg-brand-clay hover:text-white hover:border-transparent",
            isSmall ? "w-7 h-7" : "w-9 h-9"
          )}
          title="Copia link negli appunti"
        >
          {copied ? (
            <Check size={isSmall ? 12 : 15} className="animate-scaleIn text-emerald-600 dark:text-emerald-400" />
          ) : (
            <Link2 size={isSmall ? 12 : 15} />
          )}

          {copied && (
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-[8px] font-sans uppercase font-bold tracking-widest bg-brand-ink text-brand-cream rounded shadow-lg whitespace-nowrap animate-fadeUp z-50">
              Copiato!
            </span>
          )}
        </button>
      </div>
    </div>
  );
};
