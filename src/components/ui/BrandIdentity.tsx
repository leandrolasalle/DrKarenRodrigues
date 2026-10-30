import type { ComponentPropsWithoutRef } from 'react';
import KarenRodriguesLogo from '../KarenRodriguesLogo';

interface BrandIdentityProps extends ComponentPropsWithoutRef<'button'> {
  condensed?: boolean;
  showSubtitle?: boolean;
  align?: 'left' | 'center';
}

export default function BrandIdentity({
  condensed = false,
  showSubtitle = true,
  align = 'left',
  className = '',
  ...props
}: BrandIdentityProps) {
  const alignment = align === 'center' ? 'items-center justify-center text-center' : 'items-center text-left';

  return (
    <button
      type="button"
      {...props}
      className={`group flex min-w-0 shrink-0 gap-2.5 ${alignment} ${className}`.trim()}
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/5 bg-[#590907] p-1.5 transition-transform group-hover:scale-105 sm:h-10 sm:w-10">
        <KarenRodriguesLogo variant="emblem" className="h-full w-full" />
      </div>

      <div className="flex min-w-0 flex-col">
        <span
          className={`whitespace-nowrap font-cinzel font-semibold tracking-wide text-[#18181B] transition-colors group-hover:text-[#590907] ${
            condensed ? 'text-sm sm:text-base' : 'text-sm sm:text-base lg:text-lg'
          }`}
        >
          Karen Rodrigues
        </span>

        {showSubtitle && (
          <span className="whitespace-nowrap text-[9px] font-medium uppercase tracking-[0.16em] text-[#71717A] sm:text-[10px]">
            Consultoria Jurídica Especializada
          </span>
        )}
      </div>
    </button>
  );
}
