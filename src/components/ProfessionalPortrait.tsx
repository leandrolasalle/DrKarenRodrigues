import karenPortrait from '../../watermarked_img_8812102882735486581.jpg';
import experienceBadge from '../../images+15anos-removebg-preview.png';

interface ProfessionalPortraitProps {
  variant?: 'hero' | 'about-card' | 'journey-hero';
  className?: string;
}

export default function ProfessionalPortrait({
  variant = 'hero',
  className = '',
}: ProfessionalPortraitProps) {
  if (variant === 'about-card') {
    return (
      <div className={`relative h-full min-h-[340px] w-full overflow-hidden rounded-2xl bg-[#EAE4DC] shadow-[0_4px_25px_rgba(0,0,0,0.04)] sm:min-h-[440px] ${className}`}>
        <img
          src={karenPortrait}
          alt="Dra. Karen Rodrigues em seu escritório"
          loading="lazy"
          className="h-full w-full object-cover object-[center_25%]"
        />
      </div>
    );
  }

  if (variant === 'hero') {
    return (
      <div className={`relative aspect-[4/5] w-full overflow-hidden rounded-b-[1.35rem] rounded-t-[48%] bg-white shadow-[0_8px_32px_rgba(24,24,27,0.08)] ${className}`}>
        <img
          src={karenPortrait}
          alt="Dra. Karen Rodrigues em seu escritório"
          fetchPriority="high"
          className="h-full w-full object-cover object-[center_24%]"
        />
        <img
          src={experienceBadge}
          alt="15 anos de experiência"
          className="absolute bottom-3 right-3 z-10 w-24 drop-shadow-md sm:bottom-4 sm:right-4 sm:w-28"
        />
      </div>
    );
  }

  if (variant === 'journey-hero') {
    return (
      <div className={`relative mx-auto w-full max-w-[360px] ${className}`}>
        <div className="relative aspect-[4/5] overflow-hidden rounded-t-[10rem] rounded-b-[1.75rem] bg-white shadow-[0_8px_32px_rgba(24,24,27,0.08)]">
          <img
            src={karenPortrait}
            alt="Dra. Karen Rodrigues em seu escritório"
            loading="lazy"
            className="h-full w-full object-cover object-[center_24%]"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#2A0D15]/80 via-[#2A0D15]/20 to-transparent px-5 pb-5 pt-16 text-white">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#E8D285]">
              OAB/RJ 265.765 · Família &amp; Previdenciário
            </p>
            <p className="mt-1 font-serif text-xl font-semibold">Dra. Karen Rodrigues</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`group relative flex flex-col items-center select-none ${className}`}>
      <div className="relative flex items-center justify-center">
        <div
          className="absolute -inset-2.5 rounded-full bg-gradient-to-tr from-[#722F37]/25 via-[#C5A059]/35 to-[#722F37]/25 blur-md opacity-75 transition-all duration-500 group-hover:opacity-100"
        />

        {/* Circular Gold & Marsala Medallion Frame */}
        <div
          className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full p-2 bg-gradient-to-tr from-[#5C1828] via-[#D4AF37] to-[#7A2036] shadow-[0_14px_34px_rgba(74,18,32,0.22)] transition-transform duration-300 group-hover:scale-[1.01]"
        >
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#FDF8F9] bg-[#EAE4DC] shadow-inner">
            <img
              src={karenPortrait}
              alt="Dra. Karen Rodrigues em seu escritório"
              loading="lazy"
              className="h-full w-full rounded-full object-cover object-[center_24%]"
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 -mt-6 flex w-full max-w-[290px] items-center justify-between gap-2 rounded-2xl border border-[#D4AF37]/60 bg-gradient-to-r from-[#2A181B] via-[#4A1922] to-[#722F37] px-4 py-3 text-white shadow-lg">
        <div className="min-w-0 text-left">
          <p className="truncate text-[9px] font-extrabold uppercase tracking-wider text-[#E5C158]">
            OAB/RJ 265.765 · Família & Previdenciário
          </p>
          <h3 className="truncate font-serif text-sm font-bold leading-tight sm:text-base">
            Dra. Karen Rodrigues
          </h3>
        </div>
      </div>
    </div>
  );
}

