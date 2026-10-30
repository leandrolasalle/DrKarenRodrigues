import { useId } from 'react';

interface PortraitSvgIllustrationProps {
  includeBackgroundDetails: boolean;
}

export default function PortraitSvgIllustration({
  includeBackgroundDetails,
}: PortraitSvgIllustrationProps) {
  const uid = useId().replace(/:/g, '');

  return (
    <svg
      viewBox="75 105 450 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full object-cover"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id={`windowGlow-${uid}`} cx="92%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.92" />
          <stop offset="50%" stopColor="#F7F3EB" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#E5DDD0" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`wallGrad-${uid}`} x1="0" y1="0" x2="600" y2="800" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E5DFD5" />
          <stop offset="55%" stopColor="#DDD5C7" />
          <stop offset="100%" stopColor="#CFC4B4" />
        </linearGradient>
        <linearGradient id={`woodShelf-${uid}`} x1="0" y1="0" x2="180" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#8C6D4F" />
          <stop offset="100%" stopColor="#A68665" />
        </linearGradient>
        <linearGradient id={`skinTone-${uid}`} x1="250" y1="180" x2="360" y2="430" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E4B28C" />
          <stop offset="50%" stopColor="#D9A179" />
          <stop offset="100%" stopColor="#C68B63" />
        </linearGradient>
        <linearGradient id={`blazerLeft-${uid}`} x1="120" y1="430" x2="310" y2="800" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3B4656" />
          <stop offset="50%" stopColor="#2F3947" />
          <stop offset="100%" stopColor="#232B36" />
        </linearGradient>
        <linearGradient id={`blazerRight-${uid}`} x1="310" y1="430" x2="520" y2="800" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#465366" />
          <stop offset="55%" stopColor="#364152" />
          <stop offset="100%" stopColor="#27303D" />
        </linearGradient>
        <linearGradient id={`navyBlouse-${uid}`} x1="250" y1="440" x2="370" y2="800" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1C2838" />
          <stop offset="100%" stopColor="#121A26" />
        </linearGradient>
        <linearGradient id={`hairGrad-${uid}`} x1="160" y1="140" x2="430" y2="550" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1D1A1B" />
          <stop offset="50%" stopColor="#141213" />
          <stop offset="100%" stopColor="#0E0C0D" />
        </linearGradient>
        <filter id={`softBlur-${uid}`} x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="4" />
        </filter>
        <filter id={`bgBokeh-${uid}`} x="-15%" y="-15%" width="130%" height="130%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
      </defs>

      <rect width="600" height="800" fill={`url(#wallGrad-${uid})`} />
      <rect width="600" height="800" fill={`url(#windowGlow-${uid})`} />

      {includeBackgroundDetails && (
        <g filter={`url(#bgBokeh-${uid})`}>
          <rect x="500" y="60" width="90" height="470" fill="#F6F3E8" opacity="0.85" />
          <rect x="165" y="25" width="285" height="490" fill="#DDE3E6" fillOpacity="0.35" stroke="#22252A" strokeWidth="10" />
          <line x1="312" y1="25" x2="312" y2="515" stroke="#22252A" strokeWidth="4" opacity="0.5" />
          <rect x="0" y="0" width="165" height="540" fill={`url(#woodShelf-${uid})`} />
          <rect x="0" y="170" width="160" height="14" fill="#6E5238" />
          <rect x="0" y="330" width="160" height="16" fill="#3B2E25" />
          <rect x="0" y="485" width="160" height="18" fill="#231D1A" />

          {[70, 92, 114, 136].map((x, idx) => (
            <g key={`book-t-${idx}`}>
              <rect x={x} y="250" width="19" height="80" rx="2" fill="#2A2625" />
              <rect x={x + 2} y="264" width="15" height="10" fill="#B65B43" />
              <rect x={x + 2} y="261" width="15" height="2" fill="#D5AF68" />
              <rect x={x + 2} y="308" width="15" height="3" fill="#D5AF68" />
            </g>
          ))}

          {[68, 90, 112, 134].map((x, idx) => (
            <g key={`book-b-${idx}`}>
              <rect x={x} y="405" width="20" height="80" rx="2" fill={idx === 0 ? '#6E3228' : '#262322'} />
              <rect x={x + 2} y="420" width="16" height="11" fill="#B85D43" />
              <rect x={x + 2} y="416" width="16" height="2" fill="#D5AF68" />
              <rect x={x + 2} y="465" width="16" height="3" fill="#D5AF68" />
            </g>
          ))}

          <g opacity="0.9">
            <ellipse cx="470" cy="245" rx="34" ry="22" transform="rotate(-20 470 245)" fill="#3F6A34" />
            <ellipse cx="505" cy="265" rx="36" ry="24" transform="rotate(15 505 265)" fill="#4D7C40" />
            <ellipse cx="455" cy="300" rx="38" ry="24" transform="rotate(-12 455 300)" fill="#355B2B" />
            <ellipse cx="500" cy="320" rx="40" ry="25" transform="rotate(18 500 320)" fill="#48753B" />
            <ellipse cx="475" cy="370" rx="36" ry="22" transform="rotate(-8 475 370)" fill="#2E5125" />
            <ellipse cx="485" cy="205" rx="28" ry="18" transform="rotate(5 485 205)" fill="#568947" />
          </g>
        </g>
      )}

      <path
        d="M170 310 C150 220, 215 145, 305 148 C395 150, 438 225, 435 325 C432 400, 448 455, 440 520 C390 520, 200 540, 165 510 C145 450, 165 375, 170 310 Z"
        fill={`url(#hairGrad-${uid})`}
      />
      <path d="M262 355 L260 465 L312 545 L362 465 L355 355 Z" fill={`url(#skinTone-${uid})`} />
      <path d="M262 365 C280 398, 332 398, 355 362 L355 395 C330 422, 282 422, 261 395 Z" fill="#B3764F" opacity="0.45" />
      <path d="M225 455 L312 565 L395 455 L425 800 L205 800 Z" fill={`url(#navyBlouse-${uid})`} />
      <path d="M250 432 L312 558 L280 575 L228 465 Z" fill="#233246" />
      <path d="M366 425 L312 558 L345 575 L394 462 Z" fill="#27374D" />
      <circle cx="348" cy="495" r="4" fill="#141D29" stroke="#364860" strokeWidth="1.5" />

      <path d="M105 515 C135 468, 195 442, 248 432 L292 800 L75 800 Z" fill={`url(#blazerLeft-${uid})`} />
      <path d="M368 426 C430 442, 488 472, 515 525 L545 800 L335 800 Z" fill={`url(#blazerRight-${uid})`} />
      <path d="M235 438 L295 795 L245 795 L195 525 L218 505 L202 485 Z" fill="#354050" stroke="#48566A" strokeWidth="1.2" />
      <path d="M372 428 L335 785 L388 785 L435 515 L406 496 L422 475 Z" fill="#4B596E" stroke="#5D6D84" strokeWidth="1.2" />

      <path
        d="M232 252 C230 195, 268 168, 314 170 C360 172, 392 202, 390 258 C388 320, 354 374, 312 378 C270 382, 234 322, 232 252 Z"
        fill={`url(#skinTone-${uid})`}
      />
      <ellipse cx="264" cy="292" rx="22" ry="16" fill="#D98A6C" opacity="0.35" filter={`url(#softBlur-${uid})`} />
      <ellipse cx="356" cy="288" rx="22" ry="16" fill="#D98A6C" opacity="0.35" filter={`url(#softBlur-${uid})`} />

      <path d="M388 268 C397 268, 400 288, 387 298 Z" fill="#D19871" />
      <circle cx="391" cy="294" r="4.2" fill="#E6C373" stroke="#B38938" strokeWidth="1" />
      <circle cx="234" cy="298" r="3.5" fill="#E6C373" opacity="0.85" />

      <path d="M248 244 C262 235, 282 236, 295 243" stroke="#231D1B" strokeWidth="5.5" strokeLinecap="round" />
      <path d="M326 240 C340 231, 362 231, 375 240" stroke="#231D1B" strokeWidth="5.5" strokeLinecap="round" />

      <path d="M254 258 C265 250, 282 251, 292 259 C282 265, 265 265, 254 258 Z" fill="#FAF6F2" />
      <circle cx="273" cy="257" r="6.5" fill="#2B1D16" />
      <circle cx="273" cy="257" r="3" fill="#0F0A08" />
      <circle cx="275" cy="255" r="1.8" fill="#FFFFFF" />
      <path d="M252 257 C264 248, 282 249, 294 258" stroke="#1B1412" strokeWidth="2.8" strokeLinecap="round" />

      <path d="M330 254 C341 246, 358 246, 368 255 C358 261, 341 261, 330 254 Z" fill="#FAF6F2" />
      <circle cx="349" cy="253" r="6.5" fill="#2B1D16" />
      <circle cx="349" cy="253" r="3" fill="#0F0A08" />
      <circle cx="351" cy="251" r="1.8" fill="#FFFFFF" />
      <path d="M328 253 C340 244, 358 244, 370 254" stroke="#1B1412" strokeWidth="2.8" strokeLinecap="round" />

      <path d="M310 255 L307 293 C302 299, 318 301, 323 293" stroke="#B67952" strokeWidth="2.6" strokeLinecap="round" fill="none" />
      <path d="M268 294 C260 306, 262 322, 272 332" stroke="#BC7F58" strokeWidth="2" strokeLinecap="round" opacity="0.65" />
      <path d="M352 290 C360 302, 358 318, 348 328" stroke="#BC7F58" strokeWidth="2" strokeLinecap="round" opacity="0.65" />

      <path d="M275 314 C295 322, 328 320, 347 310 C340 338, 325 346, 311 346 C295 346, 282 336, 275 314 Z" fill="#B96E68" />
      <path d="M281 316 C298 322, 324 321, 341 313 C337 328, 325 334, 311 334 C296 334, 285 328, 281 316 Z" fill="#FDFBF9" />
      <path d="M274 314 C292 308, 304 312, 311 310 C318 312, 330 307, 348 310" stroke="#A95C56" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M280 326 C294 344, 328 344, 342 323" stroke="#B56862" strokeWidth="3.5" strokeLinecap="round" />

      <path
        d="M335 152 C275 140, 200 175, 182 255 C165 330, 152 405, 162 490 C172 560, 195 615, 225 635 C250 610, 265 555, 255 485 C245 425, 228 370, 236 305 C242 245, 265 200, 335 172 Z"
        fill={`url(#hairGrad-${uid})`}
      />
      <path
        d="M325 154 C375 158, 412 205, 418 280 C424 355, 438 415, 445 465 C418 455, 398 425, 392 365 C386 305, 392 245, 368 205 C355 184, 340 172, 325 168 Z"
        fill={`url(#hairGrad-${uid})`}
      />
      <path d="M196 270 C182 320, 208 370, 190 425 C175 470, 205 525, 218 575" stroke="#2E292B" strokeWidth="4" strokeLinecap="round" opacity="0.65" />
      <path d="M218 300 C205 350, 228 395, 212 450 C198 495, 224 540, 235 585" stroke="#383235" strokeWidth="3" strokeLinecap="round" opacity="0.55" />
    </svg>
  );
}

