interface JourneyActSceneIllustrationProps {
  actIndex: number;
}

export default function JourneyActSceneIllustration({
  actIndex,
}: JourneyActSceneIllustrationProps) {
  switch (actIndex) {
    case 0:
      // ATO I: A Estudante & O Despertar do Propósito
      return (
        <svg
          viewBox="0 0 560 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover transition-transform duration-700 group-hover/photo:scale-105"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="act1Bg" x1="0" y1="0" x2="560" y2="400" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#2E131B" />
              <stop offset="55%" stopColor="#4A1D2B" />
              <stop offset="100%" stopColor="#6B2D3E" />
            </linearGradient>
            <radialGradient id="lampGlow1" cx="25%" cy="28%" r="60%">
              <stop offset="0%" stopColor="#FFE8A3" stopOpacity="0.85" />
              <stop offset="45%" stopColor="#E6B85C" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#4A1D2B" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="skinAct1" x1="310" y1="100" x2="410" y2="270" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#E9BA96" />
              <stop offset="100%" stopColor="#CE926B" />
            </linearGradient>
            <linearGradient id="hairAct1" x1="280" y1="70" x2="460" y2="310" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#221C1E" />
              <stop offset="100%" stopColor="#110E0F" />
            </linearGradient>
          </defs>

          <rect width="560" height="400" fill="url(#act1Bg)" />
          <rect width="560" height="400" fill="url(#lampGlow1)" />

          <g opacity="0.24">
            <rect x="30" y="30" width="220" height="12" fill="#D4AF37" />
            <rect x="30" y="135" width="220" height="12" fill="#D4AF37" />
            {[42, 68, 92, 118, 146, 174, 200].map((x, i) => (
              <rect
                key={i}
                x={x}
                y={52}
                width="20"
                height="83"
                rx="2"
                fill={i % 2 === 0 ? '#8E3A4C' : '#C5A059'}
              />
            ))}
          </g>

          <path d="M95 330 L145 330 L135 315 L105 315 Z" fill="#C9A24B" />
          <path d="M118 315 L118 165 Q118 118 165 118" stroke="#D4AF37" strokeWidth="7" strokeLinecap="round" />
          <path d="M135 128 C142 96, 198 96, 206 128 Z" fill="#2E5A44" stroke="#E5C158" strokeWidth="3" />
          <ellipse cx="170" cy="130" rx="33" ry="8" fill="#FFF3C4" opacity="0.95" />

          <path d="M310 155 C295 95, 340 62, 392 66 C445 70, 475 118, 468 190 C462 245, 472 295, 455 335 L305 335 Z" fill="url(#hairAct1)" />
          <path d="M275 268 C305 240, 345 232, 385 232 C430 232, 470 250, 495 292 L505 360 L255 360 Z" fill="#F7EFE6" />
          <path d="M342 232 L378 292 L415 232" fill="#85263E" />
          <path d="M358 198 L355 248 L382 272 L408 248 L404 198 Z" fill="url(#skinAct1)" />
          <path d="M332 135 C330 96, 358 78, 390 80 C422 82, 444 106, 440 148 C436 190, 408 224, 378 225 C348 226, 334 182, 332 135 Z" fill="url(#skinAct1)" />
          <path d="M346 136 C356 131, 369 132, 377 137" stroke="#231815" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M394 135 C404 130, 417 131, 425 136" stroke="#231815" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M350 148 Q362 154 374 148" stroke="#2B1D16" strokeWidth="2.8" strokeLinecap="round" />
          <path d="M396 147 Q408 153 420 147" stroke="#2B1D16" strokeWidth="2.8" strokeLinecap="round" />
          <path d="M383 148 L379 173 C376 177, 386 179, 390 174" stroke="#B47650" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M364 190 Q383 201 402 189" stroke="#A95853" strokeWidth="3.2" strokeLinecap="round" />
          <path d="M395 68 C345 62, 305 95, 298 155 C292 210, 296 265, 312 315 C328 285, 332 235, 328 185 C325 140, 348 100, 395 82 Z" fill="url(#hairAct1)" />
          <path d="M390 70 C432 75, 458 112, 462 172 C465 225, 472 275, 478 312 C452 295, 440 255, 438 205 C436 155, 428 105, 390 82 Z" fill="url(#hairAct1)" />

          <rect x="0" y="325" width="560" height="75" fill="#4A2C21" />
          <rect x="0" y="325" width="560" height="6" fill="#C9A24B" opacity="0.55" />

          <g transform="translate(58, 254)">
            <rect x="0" y="44" width="148" height="26" rx="4" fill="#5C1828" stroke="#D4AF37" strokeWidth="1.5" />
            <rect x="8" y="50" width="132" height="14" rx="2" fill="#FDF8F2" />
            <text x="24" y="61" fill="#5C1828" fontSize="8.5" fontWeight="bold" fontFamily="serif">
              CÓDIGO CIVIL
            </text>

            <rect x="10" y="18" width="136" height="25" rx="4" fill="#1F3044" stroke="#D4AF37" strokeWidth="1.5" />
            <rect x="18" y="24" width="120" height="13" rx="2" fill="#FDF8F2" />
            <text x="28" y="34" fill="#1F3044" fontSize="8" fontWeight="bold" fontFamily="serif">
              VADE MECUM · DIREITO
            </text>
          </g>

          <path d="M235 324 Q285 304 335 324 Q385 304 435 324 L445 336 L225 336 Z" fill="#FFFDF9" stroke="#D4AF37" strokeWidth="1.5" />
          <line x1="335" y1="312" x2="335" y2="335" stroke="#C5A059" strokeWidth="2" />
        </svg>
      );

    case 1:
      // ATO II: A Travessia do Limiar
      return (
        <svg
          viewBox="0 0 560 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover transition-transform duration-700 group-hover/photo:scale-105"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="act2Bg" x1="0" y1="0" x2="560" y2="400" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#EFE6DD" />
              <stop offset="55%" stopColor="#E4D4C8" />
              <stop offset="100%" stopColor="#D2BCAE" />
            </linearGradient>
            <linearGradient id="sunbeamAct2" x1="0" y1="0" x2="420" y2="350" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFF7DF" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#FFF7DF" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="skinAct2" x1="250" y1="85" x2="350" y2="260" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#E6B48E" />
              <stop offset="100%" stopColor="#CB8F68" />
            </linearGradient>
            <linearGradient id="hairAct2" x1="210" y1="65" x2="390" y2="300" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#201A1C" />
              <stop offset="100%" stopColor="#0F0C0D" />
            </linearGradient>
          </defs>

          <rect width="560" height="400" fill="url(#act2Bg)" />

          <g opacity="0.85">
            <path d="M45 360 L45 115 A55 55 0 0 1 155 115 L155 360 Z" fill="#FAF5EE" stroke="#C5A059" strokeWidth="3" />
            <line x1="100" y1="60" x2="100" y2="360" stroke="#D8C3A5" strokeWidth="2" />
            <line x1="45" y1="180" x2="155" y2="180" stroke="#D8C3A5" strokeWidth="2" />
            <line x1="45" y1="265" x2="155" y2="265" stroke="#D8C3A5" strokeWidth="2" />

            <rect x="182" y="20" width="36" height="360" fill="#F5EFE8" stroke="#D5C4B4" strokeWidth="2" />
            <rect x="176" y="20" width="48" height="16" rx="3" fill="#DECBB8" />
            <rect x="468" y="20" width="38" height="360" fill="#F5EFE8" stroke="#D5C4B4" strokeWidth="2" />
            <rect x="462" y="20" width="50" height="16" rx="3" fill="#DECBB8" />
          </g>

          <polygon points="45,65 245,65 440,400 120,400" fill="url(#sunbeamAct2)" />

          <g transform="translate(395, 68)" opacity="0.45">
            <circle cx="32" cy="32" r="28" fill="#FAF0E4" stroke="#8B741F" strokeWidth="2" />
            <line x1="32" y1="14" x2="32" y2="48" stroke="#85263E" strokeWidth="2.2" />
            <line x1="16" y1="24" x2="48" y2="24" stroke="#85263E" strokeWidth="2.2" />
            <path d="M16 24 L11 36 L21 36 Z" fill="#8B741F" />
            <path d="M48 24 L43 36 L53 36 Z" fill="#8B741F" />
          </g>

          <path d="M225 145 C212 85, 255 56, 308 58 C362 60, 392 108, 386 180 C380 238, 392 285, 378 335 L220 335 Z" fill="url(#hairAct2)" />
          <path d="M276 190 L273 245 L302 272 L330 245 L326 190 Z" fill="url(#skinAct2)" />
          <path d="M188 268 C215 236, 255 224, 302 224 C348 224, 388 236, 415 268 L435 400 L168 400 Z" fill="#6E2234" />
          <path d="M258 224 L302 298 L346 224" fill="#FAF3EB" />
          <path d="M242 228 L302 312 L272 325 L225 255 Z" fill="#85263E" stroke="#D4AF37" strokeWidth="1" />
          <path d="M362 228 L302 312 L332 325 L379 255 Z" fill="#85263E" stroke="#D4AF37" strokeWidth="1" />

          <path d="M248 128 C246 88, 274 70, 306 72 C338 74, 360 98, 356 140 C352 182, 326 214, 298 215 C270 216, 250 175, 248 128 Z" fill="url(#skinAct2)" />
          <path d="M262 122 C272 116, 285 117, 293 122" stroke="#231815" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M312 121 C322 115, 335 116, 343 121" stroke="#231815" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="277" cy="133" r="4.5" fill="#2B1D16" />
          <circle cx="326" cy="132" r="4.5" fill="#2B1D16" />
          <circle cx="278.5" cy="131.5" r="1.4" fill="#FFFFFF" />
          <circle cx="327.5" cy="130.5" r="1.4" fill="#FFFFFF" />
          <path d="M302 134 L299 158 C296 163, 306 164, 310 159" stroke="#B47650" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M282 175 C295 184, 313 184, 325 174" stroke="#A95853" strokeWidth="3.5" strokeLinecap="round" />

          <path d="M310 60 C260 55, 222 88, 215 148 C208 202, 212 258, 228 308 C244 278, 248 228, 244 178 C240 132, 262 92, 310 74 Z" fill="url(#hairAct2)" />
          <path d="M305 62 C348 68, 374 104, 378 164 C382 218, 388 268, 394 304 C368 288, 356 248, 354 198 C352 148, 344 98, 305 74 Z" fill="url(#hairAct2)" />

          <g transform="translate(215, 282) rotate(-6)">
            <rect x="0" y="0" width="165" height="110" rx="8" fill="#E8D2A6" stroke="#8B741F" strokeWidth="2" />
            <rect x="10" y="10" width="145" height="90" rx="5" fill="#FFFDF8" />
            <rect x="24" y="24" width="95" height="14" rx="3" fill="#5C1828" />
            <text x="32" y="34" fill="#FAF0D7" fontSize="8" fontWeight="bold" fontFamily="serif">
              AUTOS · TRIBUNAL
            </text>
            <line x1="24" y1="50" x2="135" y2="50" stroke="#C5A059" strokeWidth="2" />
            <line x1="24" y1="64" x2="115" y2="64" stroke="#D8C3A5" strokeWidth="2" />
          </g>
        </svg>
      );

    case 2:
      // ATO III: As Provas & A Conquista
      return (
        <svg
          viewBox="0 0 560 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover transition-transform duration-700 group-hover/photo:scale-105"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="act3Bg" x1="0" y1="0" x2="560" y2="400" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FAF3EE" />
              <stop offset="55%" stopColor="#F2E2E6" />
              <stop offset="100%" stopColor="#E5CCD3" />
            </linearGradient>
            <radialGradient id="goldAura3" cx="50%" cy="40%" r="55%">
              <stop offset="0%" stopColor="#FFF6D6" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#F2E2E6" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="skinAct3" x1="240" y1="80" x2="340" y2="250" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#E6B48E" />
              <stop offset="100%" stopColor="#CB8F68" />
            </linearGradient>
            <linearGradient id="hairAct3" x1="200" y1="60" x2="390" y2="300" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1F191B" />
              <stop offset="100%" stopColor="#0E0B0C" />
            </linearGradient>
            <linearGradient id="oabRed" x1="0" y1="0" x2="160" y2="110" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#8E1B2B" />
              <stop offset="100%" stopColor="#5C101B" />
            </linearGradient>
          </defs>

          <rect width="560" height="400" fill="url(#act3Bg)" />
          <rect width="560" height="400" fill="url(#goldAura3)" />

          <circle cx="465" cy="95" r="52" fill="#FAF5E6" stroke="#DFC580" strokeWidth="2" opacity="0.7" />
          <path d="M445 95 L460 110 L488 80" stroke="#8B741F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.75" />

          <path d="M225 142 C212 82, 255 52, 308 55 C362 58, 392 105, 386 178 C380 235, 392 285, 378 335 L220 335 Z" fill="url(#hairAct3)" />
          <path d="M276 188 L273 242 L302 268 L330 242 L326 188 Z" fill="url(#skinAct3)" />

          <path d="M182 265 C212 234, 255 222, 302 222 C348 222, 392 234, 420 265 L442 400 L162 400 Z" fill="#FFFDFB" stroke="#E6CFD4" strokeWidth="2" />
          <path d="M258 222 L302 296 L346 222" fill="#5C1828" />
          <path d="M242 225 L302 310 L270 324 L222 252 Z" fill="#F7EFE8" stroke="#D4AF37" strokeWidth="1.5" />
          <path d="M362 225 L302 310 L334 324 L382 252 Z" fill="#F7EFE8" stroke="#D4AF37" strokeWidth="1.5" />

          <path d="M248 125 C246 85, 274 68, 306 70 C338 72, 360 96, 356 138 C352 180, 326 212, 298 213 C270 214, 250 172, 248 125 Z" fill="url(#skinAct3)" />
          <path d="M262 119 C272 113, 285 114, 293 119" stroke="#231815" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M312 118 C322 112, 335 113, 343 118" stroke="#231815" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="277" cy="130" r="4.5" fill="#2B1D16" />
          <circle cx="326" cy="129" r="4.5" fill="#2B1D16" />
          <circle cx="278.5" cy="128.5" r="1.5" fill="#FFFFFF" />
          <circle cx="327.5" cy="127.5" r="1.5" fill="#FFFFFF" />
          <path d="M302 132 L299 156 C296 161, 306 162, 310 157" stroke="#B47650" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M279 169 C294 176, 314 175, 328 167 C323 186, 312 192, 303 192 C292 192, 283 184, 279 169 Z" fill="#B96E68" />
          <path d="M284 171 C296 175, 312 174, 323 169 C320 180, 312 184, 303 184 C294 184, 287 180, 284 171 Z" fill="#FFFFFF" />

          <path d="M310 58 C260 53, 222 86, 215 146 C208 200, 212 256, 228 306 C244 276, 248 226, 244 176 C240 130, 262 90, 310 72 Z" fill="url(#hairAct3)" />
          <path d="M305 60 C348 66, 374 102, 378 162 C382 216, 388 266, 394 302 C368 286, 356 246, 354 196 C352 146, 344 96, 305 72 Z" fill="url(#hairAct3)" />

          <g transform="translate(192, 268)">
            <rect x="0" y="0" width="185" height="106" rx="10" fill="url(#oabRed)" stroke="#E5C158" strokeWidth="3" />
            <rect x="8" y="8" width="169" height="90" rx="6" stroke="#E5C158" strokeWidth="1" strokeDasharray="4 2" />
            <circle cx="46" cy="53" r="22" fill="#7A1524" stroke="#E5C158" strokeWidth="2" />
            <text x="46" y="57" textAnchor="middle" fill="#E8D285" fontSize="12" fontWeight="bold" fontFamily="serif">
              OAB
            </text>
            <text x="82" y="42" fill="#E8D285" fontSize="10" fontWeight="bold" fontFamily="serif" letterSpacing="1">
              ORDEM DOS ADVOGADOS
            </text>
            <text x="82" y="58" fill="#FFFDF9" fontSize="9.5" fontWeight="bold" fontFamily="sans-serif">
              DRA. KAREN RODRIGUES
            </text>
            <text x="82" y="74" fill="#E6CFD4" fontSize="8" fontFamily="sans-serif">
              IDENTIDADE PROFISSIONAL
            </text>
          </g>
        </svg>
      );

    case 3:
      // ATO IV: Pós-graduação e atualização jurídica
      return (
        <svg
          viewBox="0 0 560 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover transition-transform duration-700 group-hover/photo:scale-105"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="act4Bg" x1="0" y1="0" x2="560" y2="400" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#261017" />
              <stop offset="50%" stopColor="#421723" />
              <stop offset="100%" stopColor="#5C1E2E" />
            </linearGradient>
            <radialGradient id="uspGlow" cx="72%" cy="28%" r="55%">
              <stop offset="0%" stopColor="#E8D285" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#421723" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="skinAct4" x1="220" y1="80" x2="330" y2="250" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#E6B48E" />
              <stop offset="100%" stopColor="#CB8F68" />
            </linearGradient>
            <linearGradient id="hairAct4" x1="180" y1="60" x2="370" y2="300" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1E181A" />
              <stop offset="100%" stopColor="#0D0A0B" />
            </linearGradient>
          </defs>

          <rect width="560" height="400" fill="url(#act4Bg)" />
          <rect width="560" height="400" fill="url(#uspGlow)" />

          <g opacity="0.28" stroke="#E5C158" strokeWidth="2">
            <path d="M35 380 L35 125 A65 65 0 0 1 165 125 L165 380" />
            <path d="M395 380 L395 125 A65 65 0 0 1 525 125 L525 380" />
          </g>

          <g transform="translate(405, 58)">
            <circle cx="52" cy="52" r="44" fill="#36111B" stroke="#E5C158" strokeWidth="2.5" />
            <circle cx="52" cy="52" r="37" stroke="#E5C158" strokeWidth="1" strokeDasharray="3 3" />
            <text x="52" y="46" textAnchor="middle" fill="#E8D285" fontSize="13" fontWeight="bold" fontFamily="serif">
              ESPECIALIZACAO
            </text>
            <text x="52" y="63" textAnchor="middle" fill="#FAF0D7" fontSize="8.5" fontWeight="bold" fontFamily="sans-serif" letterSpacing="1">
              720 HORAS
            </text>
          </g>

          <path d="M195 142 C182 82, 225 52, 278 55 C332 58, 362 105, 356 178 C350 235, 362 285, 348 335 L190 335 Z" fill="url(#hairAct4)" />
          <path d="M246 188 L243 242 L272 268 L300 242 L296 188 Z" fill="url(#skinAct4)" />

          <path d="M152 265 C182 234, 225 222, 272 222 C318 222, 362 234, 390 265 L412 400 L132 400 Z" fill="#5C1828" stroke="#D4AF37" strokeWidth="1.5" />
          <path d="M228 222 L272 296 L316 222" fill="#FAF5E6" />
          <path d="M212 225 L272 310 L240 324 L192 252 Z" fill="#3D0E19" stroke="#E5C158" strokeWidth="1.5" />
          <path d="M332 225 L272 310 L304 324 L352 252 Z" fill="#3D0E19" stroke="#E5C158" strokeWidth="1.5" />

          <path d="M218 125 C216 85, 244 68, 276 70 C308 72, 330 96, 326 138 C322 180, 296 212, 268 213 C240 214, 220 172, 218 125 Z" fill="url(#skinAct4)" />
          <path d="M232 119 C242 113, 255 114, 263 119" stroke="#231815" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M282 118 C292 112, 305 113, 313 118" stroke="#231815" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="247" cy="130" r="4.5" fill="#2B1D16" />
          <circle cx="296" cy="129" r="4.5" fill="#2B1D16" />
          <circle cx="248.5" cy="128.5" r="1.5" fill="#FFFFFF" />
          <circle cx="297.5" cy="127.5" r="1.5" fill="#FFFFFF" />
          <path d="M272 132 L269 156 C266 161, 276 162, 280 157" stroke="#B47650" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M251 173 C265 182, 283 182, 296 172" stroke="#A95853" strokeWidth="3.5" strokeLinecap="round" />

          <circle cx="328" cy="160" r="4" fill="#E8D285" />

          <path d="M280 58 C230 53, 192 86, 185 146 C178 200, 182 256, 198 306 C214 276, 218 226, 214 176 C210 130, 232 90, 280 72 Z" fill="url(#hairAct4)" />
          <path d="M275 60 C318 66, 344 102, 348 162 C352 216, 358 266, 364 302 C338 286, 326 246, 324 196 C322 146, 314 96, 275 72 Z" fill="url(#hairAct4)" />

          <g transform="translate(265, 276)">
            <rect x="0" y="0" width="215" height="92" rx="8" fill="#FAF5E6" stroke="#D4AF37" strokeWidth="2.5" />
            <rect x="10" y="10" width="195" height="72" rx="4" fill="#FFFDF9" stroke="#E6D5A7" strokeWidth="1" />
            <text x="107" y="36" textAnchor="middle" fill="#4A1220" fontSize="10" fontWeight="bold" fontFamily="serif">
              FAMILIA E SUCESSOES
            </text>
            <text x="107" y="54" textAnchor="middle" fill="#85263E" fontSize="8.5" fontWeight="bold" fontFamily="sans-serif">
              DIREITO PREVIDENCIARIO · 720H
            </text>
            <line x1="45" y1="66" x2="170" y2="66" stroke="#D4AF37" strokeWidth="1.5" />
          </g>
        </svg>
      );

    case 4:
    default:
      // ATO V: O Retorno com o Elixir (A Profissional Hoje)
      return (
        <svg
          viewBox="0 0 560 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover transition-transform duration-700 group-hover/photo:scale-105"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="act5Bg" x1="0" y1="0" x2="560" y2="400" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#EAE2D8" />
              <stop offset="50%" stopColor="#DFD4C6" />
              <stop offset="100%" stopColor="#CFC1B0" />
            </linearGradient>
            <radialGradient id="windowGlow5" cx="85%" cy="25%" r="60%">
              <stop offset="0%" stopColor="#FFFDF7" stopOpacity="0.95" />
              <stop offset="55%" stopColor="#F7EFE0" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#DFD4C6" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="skinAct5" x1="230" y1="75" x2="340" y2="255" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#E4B28C" />
              <stop offset="50%" stopColor="#D9A179" />
              <stop offset="100%" stopColor="#C68B63" />
            </linearGradient>
            <linearGradient id="hairAct5" x1="190" y1="55" x2="390" y2="310" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1D1A1B" />
              <stop offset="100%" stopColor="#0E0C0D" />
            </linearGradient>
            <linearGradient id="blazerAct5" x1="150" y1="220" x2="430" y2="400" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#3B4656" />
              <stop offset="100%" stopColor="#232B36" />
            </linearGradient>
          </defs>

          <rect width="560" height="400" fill="url(#act5Bg)" />
          <rect width="560" height="400" fill="url(#windowGlow5)" />

          <rect x="0" y="0" width="135" height="400" fill="#8C6D4F" opacity="0.45" />
          <rect x="385" y="20" width="150" height="340" rx="6" fill="#F6F3E8" fillOpacity="0.7" stroke="#C5A059" strokeWidth="2" />
          <rect x="405" y="160" width="24" height="190" fill="#D5C8B8" opacity="0.6" />
          <rect x="438" y="125" width="32" height="225" fill="#C9BAA7" opacity="0.6" />
          <rect x="478" y="145" width="28" height="205" fill="#D5C8B8" opacity="0.6" />

          <path d="M210 142 C195 80, 240 48, 295 52 C350 56, 382 104, 376 178 C370 238, 382 288, 368 340 L205 340 Z" fill="url(#hairAct5)" />
          <path d="M262 188 L259 245 L288 272 L316 245 L312 188 Z" fill="url(#skinAct5)" />

          <path d="M162 265 C195 232, 240 220, 288 220 C336 220, 380 232, 412 265 L438 400 L142 400 Z" fill="url(#blazerAct5)" />
          <path d="M244 220 L288 298 L332 220" fill="#182434" />
          <path d="M226 224 L288 314 L254 328 L206 254 Z" fill="#465366" stroke="#C5A059" strokeWidth="1.2" />
          <path d="M350 224 L288 314 L322 328 L370 254 Z" fill="#465366" stroke="#C5A059" strokeWidth="1.2" />

          <path d="M234 122 C232 82, 260 64, 292 66 C324 68, 346 92, 342 135 C338 178, 312 210, 284 211 C256 212, 236 170, 234 122 Z" fill="url(#skinAct5)" />
          <path d="M248 116 C258 110, 271 111, 279 116" stroke="#231815" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M298 115 C308 109, 321 110, 329 115" stroke="#231815" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="263" cy="127" r="4.5" fill="#2B1D16" />
          <circle cx="312" cy="126" r="4.5" fill="#2B1D16" />
          <circle cx="264.5" cy="125.5" r="1.5" fill="#FFFFFF" />
          <circle cx="313.5" cy="124.5" r="1.5" fill="#FFFFFF" />
          <path d="M288 129 L285 154 C282 159, 292 160, 296 155" stroke="#B47650" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M264 166 C279 173, 299 172, 313 164 C308 183, 297 189, 288 189 C277 189, 268 181, 264 166 Z" fill="#B96E68" />
          <path d="M269 168 C281 172, 297 171, 308 166 C305 177, 297 181, 288 181 C279 181, 272 177, 269 168 Z" fill="#FFFFFF" />

          <circle cx="344" cy="158" r="4" fill="#E6C373" stroke="#B38938" strokeWidth="1" />

          <path d="M296 55 C246 50, 208 84, 200 144 C192 200, 196 256, 212 308 C228 276, 232 226, 228 176 C224 128, 246 88, 296 70 Z" fill="url(#hairAct5)" />
          <path d="M290 57 C334 63, 360 100, 364 160 C368 214, 374 264, 380 302 C354 286, 342 246, 340 196 C338 146, 330 94, 290 70 Z" fill="url(#hairAct5)" />

          <g transform="translate(362, 285)">
            <rect x="0" y="0" width="168" height="68" rx="14" fill="#4A1220" stroke="#E5C158" strokeWidth="2" />
            <text x="84" y="28" textAnchor="middle" fill="#E8D285" fontSize="13" fontWeight="bold" fontFamily="serif">
              +16 ANOS DE ATUAÇÃO
            </text>
            <text x="84" y="47" textAnchor="middle" fill="#FAF0D7" fontSize="8.5" fontWeight="bold" fontFamily="sans-serif" letterSpacing="0.8">
              SP (FARIA LIMA) · BRASÍLIA
            </text>
          </g>
        </svg>
      );
  }
}

