interface LogoProps {
  className?: string;
  variant?: 'full' | 'emblem' | 'horizontal';
  showBackground?: boolean;
}

function Emblem() {
  return (
    <g className="select-none" fill="none" stroke="#E8D285" strokeLinecap="round" strokeLinejoin="round">
      <path d="M50 9 53 13 50 16 47 13 50 9Z" fill="#E8D285" stroke="none" />
      <path d="M50 16V53" strokeWidth="2.2" />
      <path d="M25 21C35 17 42 16 50 16s15 1 25 5" strokeWidth="2.2" />
      <circle cx="25" cy="21" r="2" fill="#E8D285" stroke="none" />
      <circle cx="75" cy="21" r="2" fill="#E8D285" stroke="none" />
      <path d="M25 23 19 40M25 23v17M25 23l6 17M75 23l-6 17M75 23v17M75 23l6 17" strokeWidth="1.35" />
      <path d="M17 40c2 7 14 7 16 0M67 40c2 7 14 7 16 0" strokeWidth="1.8" />
      <path d="M43 53h14M40 58h20" strokeWidth="2" />
    </g>
  );
}

function FlourishDivider({ y = 78, width = 160 }: { y?: number; width?: number }) {
  return (
    <g transform={`translate(${100 - width / 2}, ${y})`} fill="none" stroke="#E5A737" strokeWidth="0.8">
      <line x1="0" y1="0" x2={width * 0.38} y2="0" />
      <path
        d={`M ${width * 0.38} -2 C ${width * 0.41} -4, ${width * 0.43} 2, ${width * 0.45} 0`}
        stroke="#E8D285"
        strokeWidth="0.9"
      />
      <circle cx={width * 0.5} cy="0" r="1.5" fill="#E8D285" stroke="none" />
      <path
        d={`M ${width * 0.55} 0 C ${width * 0.57} 2, ${width * 0.59} -4, ${width * 0.62} -2`}
        stroke="#E8D285"
        strokeWidth="0.9"
      />
      <line x1={width * 0.62} y1="0" x2={width} y2="0" />
    </g>
  );
}

export default function KarenRodriguesLogo({
  className = 'w-48 h-auto',
  variant = 'horizontal',
  showBackground = false,
}: LogoProps) {
  if (variant === 'emblem') {
    return (
      <svg
        viewBox="0 0 100 70"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {showBackground && <rect width="100" height="70" rx="14" fill="#4A1220" />}
        <Emblem />
      </svg>
    );
  }

  if (variant === 'full') {
    return (
      <svg
        viewBox="0 0 200 115"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {showBackground && <rect width="200" height="115" rx="16" fill="#4A1220" />}

        <g transform="translate(50, 0)">
          <Emblem />
        </g>

        <text
          x="100"
          y="73"
          textAnchor="middle"
          fill="#E8D285"
          fontFamily="'Cinzel', Georgia, serif"
          fontSize="17.5"
          fontWeight="600"
          letterSpacing="0.5"
          className="select-none"
        >
          Karen Rodrigues
        </text>

        <FlourishDivider y={79} width={155} />

        <text
          x="100"
          y="93"
          textAnchor="middle"
          fill="#DF9E32"
          fontFamily="'Cormorant Garamond', Georgia, serif"
          fontSize="10"
          fontStyle="italic"
          fontWeight="500"
          letterSpacing="1.8"
          className="select-none"
        >
          Attorneys At Law
        </text>
      </svg>
    );
  }

  // Horizontal variant (default)
  return (
    <svg
      viewBox="0 0 260 56"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {showBackground && <rect width="260" height="56" rx="28" fill="#4A1220" />}

      <g transform="translate(2, -4) scale(0.9)">
        <Emblem />
      </g>

      <g transform="translate(86, 0)">
        <text
          x="0"
          y="26"
          fill="#E8D285"
          fontFamily="'Cinzel', Georgia, serif"
          fontSize="17"
          fontWeight="700"
          letterSpacing="0.4"
          className="select-none"
        >
          Karen Rodrigues
        </text>

        <g transform="translate(0, 32)" fill="none" stroke="#E5A737" strokeWidth="0.8">
          <line x1="0" y1="0" x2="60" y2="0" />
          <path d="M 60 -1.5 C 64 -3, 67 2, 70 0" stroke="#E8D285" strokeWidth="0.8" />
          <circle cx="75" cy="0" r="1.3" fill="#E8D285" stroke="none" />
          <path d="M 80 0 C 83 2, 86 -3, 90 -1.5" stroke="#E8D285" strokeWidth="0.8" />
          <line x1="90" y1="0" x2="150" y2="0" />
        </g>

        <text
          x="75"
          y="46"
          textAnchor="middle"
          fill="#DF9E32"
          fontFamily="'Cormorant Garamond', Georgia, serif"
          fontSize="10.5"
          fontStyle="italic"
          fontWeight="600"
          letterSpacing="1.6"
          className="select-none"
        >
          Attorneys At Law
        </text>
      </g>
    </svg>
  );
}

