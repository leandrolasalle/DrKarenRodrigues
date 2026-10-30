import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from 'react';

type ActionButtonProps = (
  | ({ as?: 'button' } & ButtonHTMLAttributes<HTMLButtonElement>)
  | ({ as: 'a' } & AnchorHTMLAttributes<HTMLAnchorElement>)
) & {
  variant?: 'primary' | 'secondary' | 'ghost';
  icon?: ReactNode;
  fullWidth?: boolean;
};

export default function ActionButton({
  as = 'button',
  variant = 'primary',
  icon,
  fullWidth = false,
  className = '',
  children,
  ...props
}: ActionButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#590907] active:scale-95';

  const variantClasses = {
    primary:
      'bg-[#590907] px-4 py-2.5 text-white hover:bg-[#3E0605]',
    secondary:
      'border border-black/[0.07] bg-white px-4 py-2.5 text-[#52525B] hover:bg-[#F6F3E8]',
    ghost:
      'px-2.5 py-2 text-[#71717A] hover:bg-black/[0.04] hover:text-[#590907]',
  };

  const Component = as;

  return (
    <Component
      {...(props as Record<string, unknown>)}
      className={`${baseClasses} ${variantClasses[variant]} ${fullWidth ? 'w-full' : ''} ${className}`.trim()}
      {...(as === 'button' ? { type: 'button' } : {})}
    >
      {icon ? <span className="inline-flex items-center justify-center">{icon}</span> : null}
      {children}
    </Component>
  );
}

