// Ilustraciones SVG de manos para cada seña en LSC
// Cada función devuelve un SVG inline con la posición correcta de la mano

export function SignIllustration({ signId, word, size = 160 }) {
  const illustrations = {

    // ── SALUDOS ─────────────────────────────────────────────────
    'Hola': (
      <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="160" rx="20" fill="#E8F5EE"/>
        {/* Muñeca */}
        <rect x="68" y="120" width="24" height="28" rx="8" fill="#D4956A"/>
        {/* Palma */}
        <rect x="52" y="72" width="56" height="52" rx="14" fill="#E8A87C"/>
        {/* Dedos abiertos */}
        <rect x="54" y="36" width="14" height="42" rx="7" fill="#E8A87C"/>
        <rect x="71" y="28" width="14" height="50" rx="7" fill="#E8A87C"/>
        <rect x="88" y="30" width="14" height="48" rx="7" fill="#E8A87C"/>
        <rect x="100" y="40" width="13" height="40" rx="6" fill="#E8A87C"/>
        {/* Pulgar */}
        <rect x="38" y="80" width="20" height="12" rx="6" fill="#E8A87C"/>
        {/* Líneas de la palma */}
        <path d="M60 100 Q80 96 100 100" stroke="#C4845A" strokeWidth="1.5" fill="none" opacity="0.4"/>
        {/* Flechas de movimiento */}
        <path d="M116 60 L130 50 M130 50 L124 56 M130 50 L126 58" stroke="#178C5C" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M116 75 L132 68 M132 68 L126 72 M132 68 L128 76" stroke="#178C5C" strokeWidth="2.5" strokeLinecap="round" opacity="0.6"/>
      </svg>
    ),

    'Adiós': (
      <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="160" rx="20" fill="#E8F5EE"/>
        <rect x="68" y="118" width="24" height="30" rx="8" fill="#D4956A"/>
        <rect x="50" y="70" width="60" height="52" rx="14" fill="#E8A87C"/>
        {/* Dedos doblados */}
        <rect x="52" y="48" width="13" height="30" rx="6" fill="#E8A87C"/>
        <path d="M52 78 Q58 58 65 48" stroke="#C4845A" strokeWidth="1" fill="none"/>
        <rect x="68" y="42" width="13" height="34" rx="6" fill="#E8A87C"/>
        <rect x="84" y="44" width="13" height="32" rx="6" fill="#E8A87C"/>
        <rect x="98" y="50" width="12" height="28" rx="6" fill="#E8A87C"/>
        <rect x="36" y="78" width="20" height="12" rx="6" fill="#E8A87C"/>
        {/* Flecha hacia afuera */}
        <path d="M118 55 L140 42" stroke="#178C5C" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M134 38 L140 42 L136 48" stroke="#178C5C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),

    'Gracias': (
      <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="160" rx="20" fill="#E8F5EE"/>
        {/* Cabeza simplificada */}
        <circle cx="80" cy="38" r="22" fill="#F0C89A"/>
        {/* Cuello */}
        <rect x="72" y="56" width="16" height="14" fill="#F0C89A"/>
        {/* Mano tocando labios */}
        <rect x="58" y="62" width="44" height="30" rx="10" fill="#E8A87C"/>
        {/* Dedos juntos apuntando a la boca */}
        <rect x="64" y="44" width="10" height="24" rx="5" fill="#E8A87C"/>
        <rect x="76" y="42" width="10" height="26" rx="5" fill="#E8A87C"/>
        <rect x="88" y="44" width="10" height="24" rx="5" fill="#E8A87C"/>
        <rect x="98" y="50" width="9" height="18" rx="4" fill="#E8A87C"/>
        {/* Flecha hacia afuera */}
        <path d="M80 96 L80 118" stroke="#178C5C" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M72 110 L80 118 L88 110" stroke="#178C5C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),

    'Por favor': (
      <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="160" rx="20" fill="#E8F5EE"/>
        {/* Torso */}
        <rect x="52" y="90" width="56" height="45" rx="10" fill="#4A90D9" opacity="0.3"/>
        {/* Puño en el pecho */}
        <rect x="58" y="68" width="44" height="36" rx="12" fill="#E8A87C"/>
        {/* Dedos doblados formando puño */}
        <rect x="62" y="58" width="10" height="18" rx="5" fill="#E8A87C"/>
        <rect x="74" y="55" width="10" height="20" rx="5" fill="#E8A87C"/>
        <rect x="86" y="56" width="10" height="18" rx="5" fill="#E8A87C"/>
        <rect x="96" y="60" width="9" height="16" rx="4" fill="#E8A87C"/>
        {/* Pulgar arriba */}
        <rect x="44" y="68" width="20" height="12" rx="6" fill="#E8A87C"/>
        {/* Flecha circular */}
        <path d="M80 58 A22 22 0 1 1 58 80" stroke="#178C5C" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M54 74 L58 80 L64 76" stroke="#178C5C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),

    'Buenos días': (
      <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="160" rx="20" fill="#FFF8E8"/>
        <circle cx="80" cy="36" r="20" fill="#F0C89A"/>
        <rect x="72" y="52" width="16" height="12" fill="#F0C89A"/>
        {/* Mano en la frente */}
        <rect x="48" y="58" width="64" height="28" rx="10" fill="#E8A87C"/>
        <rect x="52" y="42" width="11" height="24" rx="5" fill="#E8A87C"/>
        <rect x="65" y="38" width="11" height="28" rx="5" fill="#E8A87C"/>
        <rect x="78" y="40" width="11" height="26" rx="5" fill="#E8A87C"/>
        <rect x="90" y="44" width="10" height="22" rx="5" fill="#E8A87C"/>
        {/* Sol */}
        <circle cx="128" cy="32" r="14" fill="#FAC775"/>
        <path d="M128 12 L128 8 M128 52 L128 56 M108 32 L104 32 M148 32 L152 32" stroke="#FAC775" strokeWidth="3" strokeLinecap="round"/>
        <path d="M114 18 L111 15 M142 46 L145 49 M114 46 L111 49 M142 18 L145 15" stroke="#FAC775" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Flecha hacia afuera */}
        <path d="M112 72 L138 72" stroke="#178C5C" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M132 66 L138 72 L132 78" stroke="#178C5C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),

    'Buenas noches': (
      <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="160" rx="20" fill="#EEF2FF"/>
        <circle cx="80" cy="36" r="20" fill="#F0C89A"/>
        <rect x="72" y="52" width="16" height="12" fill="#F0C89A"/>
        {/* Mano en C cerca de la mejilla */}
        <path d="M50 65 Q46 80 50 95 Q58 110 72 108 Q86 106 90 92 Q94 78 88 65 Q80 54 66 56 Q52 58 50 65Z" fill="#E8A87C"/>
        {/* Luna */}
        <path d="M128 20 A16 16 0 1 1 112 36 A10 10 0 1 0 128 20Z" fill="#C8D8F8"/>
        {/* Estrellas */}
        <circle cx="118" cy="55" r="3" fill="#FAC775"/>
        <circle cx="140" cy="42" r="2" fill="#FAC775"/>
        <circle cx="108" cy="42" r="2" fill="#FAC775"/>
        <path d="M88 80 L100 70" stroke="#178C5C" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M96 66 L100 70 L96 74" stroke="#178C5C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),

    // ── NÚMEROS ──────────────────────────────────────────────────
    'Uno': (
      <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="160" rx="20" fill="#EEF2FF"/>
        <rect x="68" y="115" width="24" height="30" rx="8" fill="#D4956A"/>
        <rect x="52" y="72" width="56" height="50" rx="14" fill="#E8A87C"/>
        {/* Solo índice extendido */}
        <rect x="72" y="22" width="16" height="56" rx="8" fill="#E8A87C"/>
        {/* Otros dedos doblados */}
        <path d="M54 72 Q54 58 62 56" stroke="#C4845A" strokeWidth="2" fill="none" opacity="0.5"/>
        <path d="M90 72 Q92 58 100 60" stroke="#C4845A" strokeWidth="2" fill="none" opacity="0.5"/>
        <path d="M100 72 Q104 62 108 65" stroke="#C4845A" strokeWidth="2" fill="none" opacity="0.5"/>
        {/* Número */}
        <text x="130" y="95" fontSize="28" fontWeight="bold" fill="#178C5C" fontFamily="Arial">1</text>
      </svg>
    ),

    'Dos': (
      <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="160" rx="20" fill="#EEF2FF"/>
        <rect x="68" y="115" width="24" height="30" rx="8" fill="#D4956A"/>
        <rect x="52" y="72" width="56" height="50" rx="14" fill="#E8A87C"/>
        {/* Índice y medio extendidos */}
        <rect x="65" y="22" width="14" height="56" rx="7" fill="#E8A87C"/>
        <rect x="82" y="22" width="14" height="56" rx="7" fill="#E8A87C"/>
        <text x="128" y="95" fontSize="28" fontWeight="bold" fill="#178C5C" fontFamily="Arial">2</text>
      </svg>
    ),

    'Tres': (
      <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="160" rx="20" fill="#EEF2FF"/>
        <rect x="68" y="115" width="24" height="30" rx="8" fill="#D4956A"/>
        <rect x="52" y="72" width="56" height="50" rx="14" fill="#E8A87C"/>
        <rect x="55" y="24" width="13" height="52" rx="6" fill="#E8A87C"/>
        <rect x="71" y="20" width="13" height="56" rx="6" fill="#E8A87C"/>
        <rect x="87" y="22" width="13" height="54" rx="6" fill="#E8A87C"/>
        <text x="126" y="95" fontSize="28" fontWeight="bold" fill="#178C5C" fontFamily="Arial">3</text>
      </svg>
    ),

    'Cuatro': (
      <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="160" rx="20" fill="#EEF2FF"/>
        <rect x="68" y="115" width="24" height="30" rx="8" fill="#D4956A"/>
        <rect x="52" y="72" width="56" height="50" rx="14" fill="#E8A87C"/>
        <rect x="54" y="24" width="12" height="52" rx="6" fill="#E8A87C"/>
        <rect x="69" y="20" width="12" height="56" rx="6" fill="#E8A87C"/>
        <rect x="84" y="22" width="12" height="54" rx="6" fill="#E8A87C"/>
        <rect x="99" y="26" width="12" height="50" rx="6" fill="#E8A87C"/>
        {/* Pulgar doblado */}
        <path d="M52 78 Q46 84 50 90" stroke="#C4845A" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <text x="124" y="95" fontSize="28" fontWeight="bold" fill="#178C5C" fontFamily="Arial">4</text>
      </svg>
    ),

    'Cinco': (
      <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="160" rx="20" fill="#EEF2FF"/>
        <rect x="68" y="115" width="24" height="30" rx="8" fill="#D4956A"/>
        <rect x="48" y="72" width="64" height="50" rx="14" fill="#E8A87C"/>
        <rect x="54" y="24" width="12" height="52" rx="6" fill="#E8A87C"/>
        <rect x="69" y="20" width="12" height="56" rx="6" fill="#E8A87C"/>
        <rect x="84" y="22" width="12" height="54" rx="6" fill="#E8A87C"/>
        <rect x="99" y="26" width="12" height="50" rx="6" fill="#E8A87C"/>
        <rect x="36" y="74" width="18" height="12" rx="6" fill="#E8A87C"/>
        <text x="124" y="95" fontSize="28" fontWeight="bold" fill="#178C5C" fontFamily="Arial">5</text>
      </svg>
    ),

    'Seis': (
      <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="160" rx="20" fill="#EEF2FF"/>
        <rect x="68" y="115" width="24" height="30" rx="8" fill="#D4956A"/>
        <rect x="52" y="72" width="56" height="50" rx="14" fill="#E8A87C"/>
        {/* Pulgar y meñique extendidos */}
        <rect x="36" y="70" width="22" height="12" rx="6" fill="#E8A87C"/>
        <rect x="100" y="26" width="12" height="50" rx="6" fill="#E8A87C"/>
        <text x="126" y="95" fontSize="28" fontWeight="bold" fill="#178C5C" fontFamily="Arial">6</text>
      </svg>
    ),

    'Siete': (
      <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="160" rx="20" fill="#EEF2FF"/>
        <rect x="68" y="115" width="24" height="30" rx="8" fill="#D4956A"/>
        <rect x="52" y="72" width="56" height="50" rx="14" fill="#E8A87C"/>
        <rect x="54" y="24" width="12" height="52" rx="6" fill="#E8A87C"/>
        <rect x="69" y="20" width="12" height="56" rx="6" fill="#E8A87C"/>
        <rect x="84" y="22" width="12" height="54" rx="6" fill="#E8A87C"/>
        <rect x="99" y="26" width="12" height="50" rx="6" fill="#E8A87C"/>
        {/* Pulgar toca dedo medio */}
        <circle cx="48" cy="60" r="8" fill="#E8A87C"/>
        <path d="M48 60 Q60 56 76 58" stroke="#C4845A" strokeWidth="2" fill="none"/>
        <text x="124" y="95" fontSize="28" fontWeight="bold" fill="#178C5C" fontFamily="Arial">7</text>
      </svg>
    ),

    'Ocho': (
      <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="160" rx="20" fill="#EEF2FF"/>
        <rect x="68" y="115" width="24" height="30" rx="8" fill="#D4956A"/>
        <rect x="52" y="72" width="56" height="50" rx="14" fill="#E8A87C"/>
        <rect x="54" y="24" width="12" height="52" rx="6" fill="#E8A87C"/>
        <rect x="69" y="20" width="12" height="56" rx="6" fill="#E8A87C"/>
        <rect x="84" y="22" width="12" height="54" rx="6" fill="#E8A87C"/>
        {/* Pulgar toca anular */}
        <circle cx="48" cy="60" r="8" fill="#E8A87C"/>
        <path d="M48 60 Q62 58 86 60" stroke="#C4845A" strokeWidth="2" fill="none"/>
        <text x="124" y="95" fontSize="28" fontWeight="bold" fill="#178C5C" fontFamily="Arial">8</text>
      </svg>
    ),

    'Nueve': (
      <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="160" rx="20" fill="#EEF2FF"/>
        <rect x="68" y="115" width="24" height="30" rx="8" fill="#D4956A"/>
        <rect x="52" y="72" width="56" height="50" rx="14" fill="#E8A87C"/>
        <rect x="54" y="24" width="12" height="52" rx="6" fill="#E8A87C"/>
        <rect x="69" y="20" width="12" height="56" rx="6" fill="#E8A87C"/>
        {/* Pulgar toca meñique */}
        <circle cx="48" cy="60" r="8" fill="#E8A87C"/>
        <rect x="99" y="26" width="12" height="50" rx="6" fill="#E8A87C"/>
        <path d="M48 60 Q70 55 100 58" stroke="#C4845A" strokeWidth="2" fill="none"/>
        <text x="124" y="95" fontSize="28" fontWeight="bold" fill="#178C5C" fontFamily="Arial">9</text>
      </svg>
    ),

    'Diez': (
      <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="160" rx="20" fill="#EEF2FF"/>
        <rect x="68" y="115" width="24" height="30" rx="8" fill="#D4956A"/>
        <rect x="52" y="72" width="56" height="50" rx="14" fill="#E8A87C"/>
        {/* Pulgar arriba */}
        <rect x="36" y="54" width="22" height="26" rx="8" fill="#E8A87C"/>
        <rect x="44" y="34" width="14" height="28" rx="7" fill="#E8A87C"/>
        {/* Flecha de rotación */}
        <path d="M98 75 A18 18 0 1 1 80 57" stroke="#178C5C" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M76 53 L80 57 L84 53" stroke="#178C5C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <text x="118" y="95" fontSize="26" fontWeight="bold" fill="#178C5C" fontFamily="Arial">10</text>
      </svg>
    ),

    // ── ANIMALES ─────────────────────────────────────────────────
    'Perro': (
      <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="160" rx="20" fill="#FFF3E8"/>
        {/* Muslo */}
        <rect x="30" y="90" width="55" height="28" rx="10" fill="#4A90D9" opacity="0.25"/>
        {/* Mano golpeando muslo */}
        <rect x="35" y="88" width="50" height="24" rx="10" fill="#E8A87C"/>
        <rect x="40" y="68" width="12" height="28" rx="6" fill="#E8A87C"/>
        <rect x="55" y="64" width="12" height="32" rx="6" fill="#E8A87C"/>
        <rect x="70" y="66" width="12" height="30" rx="6" fill="#E8A87C"/>
        <rect x="83" y="70" width="11" height="26" rx="5" fill="#E8A87C"/>
        {/* Flecha hacia abajo */}
        <path d="M105 72 L105 92" stroke="#178C5C" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M99 86 L105 92 L111 86" stroke="#178C5C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        {/* Huella de perro */}
        <ellipse cx="130" cy="100" rx="8" ry="10" fill="#D4956A" opacity="0.4"/>
        <circle cx="122" cy="90" r="4" fill="#D4956A" opacity="0.4"/>
        <circle cx="138" cy="90" r="4" fill="#D4956A" opacity="0.4"/>
        <circle cx="118" cy="100" r="3.5" fill="#D4956A" opacity="0.4"/>
        <circle cx="142" cy="100" r="3.5" fill="#D4956A" opacity="0.4"/>
      </svg>
    ),

    'Gato': (
      <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="160" rx="20" fill="#FFF3E8"/>
        {/* Cara */}
        <circle cx="80" cy="45" r="28" fill="#F0C89A"/>
        {/* Bigotes */}
        <line x1="52" y1="48" x2="72" y2="52" stroke="#8B6914" strokeWidth="2" strokeLinecap="round"/>
        <line x1="52" y1="55" x2="72" y2="55" stroke="#8B6914" strokeWidth="2" strokeLinecap="round"/>
        <line x1="88" y1="52" x2="108" y2="48" stroke="#8B6914" strokeWidth="2" strokeLinecap="round"/>
        <line x1="88" y1="55" x2="108" y2="55" stroke="#8B6914" strokeWidth="2" strokeLinecap="round"/>
        {/* Dedos en mejilla imitando bigotes */}
        <rect x="42" y="44" width="10" height="6" rx="3" fill="#E8A87C"/>
        <rect x="40" y="54" width="12" height="6" rx="3" fill="#E8A87C"/>
        <rect x="108" y="44" width="10" height="6" rx="3" fill="#E8A87C"/>
        <rect x="108" y="54" width="12" height="6" rx="3" fill="#E8A87C"/>
        {/* Orejas */}
        <polygon points="58,20 52,8 70,18" fill="#F0C89A"/>
        <polygon points="102,20 108,8 90,18" fill="#F0C89A"/>
      </svg>
    ),

    'Pájaro': (
      <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="160" rx="20" fill="#E8F5FF"/>
        <circle cx="80" cy="44" r="22" fill="#F0C89A"/>
        {/* Pico */}
        <path d="M68 50 L80 58 L92 50 Q80 62 68 50Z" fill="#E8952A"/>
        {/* Mano frente a la boca abriéndose */}
        <rect x="56" y="62" width="48" height="28" rx="12" fill="#E8A87C"/>
        <rect x="60" y="44" width="12" height="24" rx="6" fill="#E8A87C"/>
        <rect x="74" y="42" width="12" height="26" rx="6" fill="#E8A87C"/>
        <rect x="88" y="44" width="12" height="24" rx="6" fill="#E8A87C"/>
        {/* Flecha de apertura */}
        <path d="M60 100 Q50 112 52 122" stroke="#178C5C" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M100 100 Q110 112 108 122" stroke="#178C5C" strokeWidth="2" fill="none" strokeLinecap="round"/>
        {/* Pájaro pequeño */}
        <path d="M120 40 Q130 32 140 40 Q130 36 120 40Z" fill="#4A90D9"/>
        <circle cx="138" cy="38" r="3" fill="#4A90D9"/>
        <path d="M116 40 Q118 36 122 38" stroke="#4A90D9" strokeWidth="2" fill="none"/>
      </svg>
    ),

    'Pez': (
      <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="160" rx="20" fill="#E8F5FF"/>
        {/* Mano plana */}
        <rect x="40" y="72" width="70" height="22" rx="10" fill="#E8A87C"/>
        <rect x="44" y="54" width="12" height="24" rx="6" fill="#E8A87C"/>
        <rect x="59" y="50" width="12" height="28" rx="6" fill="#E8A87C"/>
        <rect x="74" y="52" width="12" height="26" rx="6" fill="#E8A87C"/>
        <rect x="88" y="56" width="11" height="22" rx="5" fill="#E8A87C"/>
        {/* Cola de pez */}
        <path d="M110 72 L128 60 L128 94 Z" fill="#E8A87C"/>
        {/* Flecha ondulada */}
        <path d="M20 95 Q35 86 50 95 Q65 104 80 95 Q95 86 110 95" stroke="#178C5C" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M104 89 L110 95 L104 101" stroke="#178C5C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),

    'Elefante': (
      <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="160" rx="20" fill="#F0F0FF"/>
        <circle cx="80" cy="38" r="22" fill="#F0C89A"/>
        {/* Nariz — trompa */}
        <path d="M70 56 Q62 72 60 88 Q58 100 68 104 Q78 108 80 98" stroke="#E8A87C" strokeWidth="14" fill="none" strokeLinecap="round"/>
        {/* Mano en la nariz */}
        <rect x="56" y="52" width="44" height="22" rx="10" fill="#E8A87C"/>
        <rect x="62" y="36" width="11" height="24" rx="5" fill="#E8A87C"/>
        <rect x="75" y="32" width="11" height="28" rx="5" fill="#E8A87C"/>
        <rect x="88" y="36" width="11" height="24" rx="5" fill="#E8A87C"/>
        {/* Orejas elefante */}
        <ellipse cx="118" cy="55" rx="18" ry="22" fill="#D4956A" opacity="0.4"/>
        <ellipse cx="42" cy="55" rx="18" ry="22" fill="#D4956A" opacity="0.4"/>
      </svg>
    ),

    // ── FAMILIA ──────────────────────────────────────────────────
    'Papá': (
      <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="160" rx="20" fill="#FFF3E8"/>
        <circle cx="80" cy="44" r="22" fill="#F0C89A"/>
        {/* Frente */}
        <rect x="58" y="22" width="44" height="12" rx="6" fill="#F0C89A"/>
        {/* Pulgar tocando la frente */}
        <rect x="50" y="22" width="28" height="16" rx="8" fill="#E8A87C"/>
        <rect x="44" y="18" width="16" height="28" rx="8" fill="#E8A87C"/>
        {/* Resto de dedos doblados */}
        <rect x="64" y="30" width="10" height="16" rx="5" fill="#E8A87C"/>
        <rect x="76" y="30" width="10" height="16" rx="5" fill="#E8A87C"/>
        <rect x="87" y="32" width="9" height="14" rx="4" fill="#E8A87C"/>
        {/* Flecha hacia adelante */}
        <path d="M100 30 L118 22" stroke="#178C5C" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M112 18 L118 22 L114 28" stroke="#178C5C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),

    'Mamá': (
      <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="160" rx="20" fill="#FFF0F5"/>
        <circle cx="80" cy="50" r="22" fill="#F0C89A"/>
        {/* Mentón */}
        <rect x="58" y="68" width="44" height="12" rx="6" fill="#F0C89A"/>
        {/* Pulgar tocando el mentón */}
        <rect x="48" y="66" width="28" height="16" rx="8" fill="#E8A87C"/>
        <rect x="42" y="62" width="16" height="28" rx="8" fill="#E8A87C"/>
        <rect x="62" y="74" width="10" height="14" rx="5" fill="#E8A87C"/>
        <rect x="74" y="74" width="10" height="14" rx="5" fill="#E8A87C"/>
        <rect x="85" y="76" width="9" height="12" rx="4" fill="#E8A87C"/>
        <path d="M96 72 L114 64" stroke="#178C5C" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M108 60 L114 64 L110 70" stroke="#178C5C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),

    'Hermano': (
      <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="160" rx="20" fill="#E8F5EE"/>
        {/* Dos manos juntas */}
        <rect x="30" y="72" width="44" height="32" rx="10" fill="#E8A87C"/>
        <rect x="86" y="72" width="44" height="32" rx="10" fill="#E8A87C"/>
        <rect x="36" y="52" width="11" height="28" rx="5" fill="#E8A87C"/>
        <rect x="50" y="48" width="11" height="32" rx="5" fill="#E8A87C"/>
        <rect x="64" y="50" width="10" height="30" rx="5" fill="#E8A87C"/>
        <rect x="92" y="52" width="11" height="28" rx="5" fill="#E8A87C"/>
        <rect x="106" y="48" width="11" height="32" rx="5" fill="#E8A87C"/>
        <rect x="119" y="50" width="10" height="30" rx="5" fill="#E8A87C"/>
        {/* Flecha de unión */}
        <path d="M74 80 L86 80" stroke="#178C5C" strokeWidth="3" strokeLinecap="round"/>
        <path d="M80 74 L86 80 L80 86" stroke="#178C5C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),

    'Hermana': (
      <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="160" rx="20" fill="#FFF0F5"/>
        <rect x="30" y="72" width="44" height="32" rx="10" fill="#E8A87C"/>
        <rect x="86" y="72" width="44" height="32" rx="10" fill="#E8A87C"/>
        <rect x="36" y="52" width="11" height="28" rx="5" fill="#E8A87C"/>
        <rect x="50" y="48" width="11" height="32" rx="5" fill="#E8A87C"/>
        <rect x="92" y="52" width="11" height="28" rx="5" fill="#E8A87C"/>
        <rect x="106" y="48" width="11" height="32" rx="5" fill="#E8A87C"/>
        <path d="M74 80 L86 80" stroke="#E8509A" strokeWidth="3" strokeLinecap="round"/>
        <path d="M80 74 L86 80 L80 86" stroke="#E8509A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        {/* Lazo */}
        <path d="M72 40 Q80 30 88 40 Q80 46 72 40Z" fill="#E8509A" opacity="0.6"/>
      </svg>
    ),

    'Abuelo': (
      <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="160" rx="20" fill="#FFF3E8"/>
        <circle cx="80" cy="42" r="22" fill="#F0C89A"/>
        {/* Cabello blanco */}
        <path d="M58 30 Q80 18 102 30" stroke="white" strokeWidth="6" fill="none" strokeLinecap="round"/>
        {/* Pulgar en frente */}
        <rect x="48" y="24" width="24" height="14" rx="7" fill="#E8A87C"/>
        <rect x="42" y="20" width="14" height="26" rx="7" fill="#E8A87C"/>
        {/* Dos arcos */}
        <path d="M100 32 Q112 22 118 32" stroke="#178C5C" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M104 44 Q116 34 122 44" stroke="#178C5C" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      </svg>
    ),

    // ── EMOCIONES ────────────────────────────────────────────────
    'Feliz': (
      <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="160" rx="20" fill="#FFFBE8"/>
        <circle cx="80" cy="50" r="26" fill="#FAC775"/>
        {/* Cara feliz */}
        <circle cx="70" cy="46" r="4" fill="#5A3A00"/>
        <circle cx="90" cy="46" r="4" fill="#5A3A00"/>
        <path d="M68 58 Q80 68 92 58" stroke="#5A3A00" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        {/* Mano en el pecho */}
        <rect x="54" y="88" width="52" height="28" rx="12" fill="#E8A87C"/>
        <rect x="58" y="70" width="12" height="26" rx="6" fill="#E8A87C"/>
        <rect x="72" y="66" width="12" height="30" rx="6" fill="#E8A87C"/>
        <rect x="86" y="68" width="12" height="28" rx="6" fill="#E8A87C"/>
        {/* Flecha hacia arriba */}
        <path d="M108 106 L108 88" stroke="#178C5C" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M102 94 L108 88 L114 94" stroke="#178C5C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),

    'Triste': (
      <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="160" rx="20" fill="#EEF2FF"/>
        <circle cx="80" cy="42" r="24" fill="#A8B8D8"/>
        <circle cx="70" cy="38" r="3.5" fill="#3A3A5A"/>
        <circle cx="90" cy="38" r="3.5" fill="#3A3A5A"/>
        <path d="M68 52 Q80 44 92 52" stroke="#3A3A5A" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        {/* Lágrima */}
        <ellipse cx="68" cy="48" rx="3" ry="5" fill="#6688CC" opacity="0.6"/>
        {/* Manos bajando por la cara */}
        <rect x="38" y="60" width="28" height="44" rx="10" fill="#E8A87C" opacity="0.8"/>
        <rect x="94" y="60" width="28" height="44" rx="10" fill="#E8A87C" opacity="0.8"/>
        {/* Flechas hacia abajo */}
        <path d="M52 108 L52 126" stroke="#178C5C" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M46 120 L52 126 L58 120" stroke="#178C5C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M108 108 L108 126" stroke="#178C5C" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M102 120 L108 126 L114 120" stroke="#178C5C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),

    'Enojado': (
      <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="160" rx="20" fill="#FFF0F0"/>
        <circle cx="80" cy="45" r="24" fill="#F08080"/>
        <path d="M65 36 L72 40" stroke="#5A2020" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M95 36 L88 40" stroke="#5A2020" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="70" cy="44" r="3.5" fill="#5A2020"/>
        <circle cx="90" cy="44" r="3.5" fill="#5A2020"/>
        <path d="M68 56 Q80 50 92 56" stroke="#5A2020" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        {/* Dedos curvados frente a la cara */}
        <path d="M44 72 Q40 80 44 88" stroke="#E8A87C" strokeWidth="12" fill="none" strokeLinecap="round"/>
        <path d="M58 68 Q54 78 58 88" stroke="#E8A87C" strokeWidth="12" fill="none" strokeLinecap="round"/>
        <path d="M102 68 Q106 78 102 88" stroke="#E8A87C" strokeWidth="12" fill="none" strokeLinecap="round"/>
        <path d="M116 72 Q120 80 116 88" stroke="#E8A87C" strokeWidth="12" fill="none" strokeLinecap="round"/>
        {/* Flecha hacia afuera */}
        <path d="M80 100 L80 120" stroke="#E85A5A" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M74 114 L80 120 L86 114" stroke="#E85A5A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),

    'Miedo': (
      <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="160" rx="20" fill="#F5F0FF"/>
        <circle cx="80" cy="44" r="22" fill="#D8C8F0"/>
        <circle cx="70" cy="40" r="5" fill="#3A2A5A"/>
        <circle cx="90" cy="40" r="5" fill="#3A2A5A"/>
        <ellipse cx="80" cy="55" rx="8" ry="5" fill="#3A2A5A"/>
        {/* Ambas manos temblando */}
        <rect x="30" y="80" width="40" height="28" rx="10" fill="#E8A87C"/>
        <rect x="90" y="80" width="40" height="28" rx="10" fill="#E8A87C"/>
        <rect x="34" y="60" width="10" height="26" rx="5" fill="#E8A87C"/>
        <rect x="48" y="56" width="10" height="30" rx="5" fill="#E8A87C"/>
        <rect x="94" y="60" width="10" height="26" rx="5" fill="#E8A87C"/>
        <rect x="108" y="56" width="10" height="30" rx="5" fill="#E8A87C"/>
        {/* Líneas de temblor */}
        <path d="M28 76 Q33 72 28 68" stroke="#8B6BD4" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M132 76 Q127 72 132 68" stroke="#8B6BD4" strokeWidth="2" fill="none" strokeLinecap="round"/>
      </svg>
    ),

    'Amor': (
      <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="160" rx="20" fill="#FFF0F8"/>
        {/* Brazos cruzados */}
        <rect x="30" y="80" width="70" height="26" rx="12" fill="#E8A87C"/>
        <rect x="60" y="80" width="70" height="26" rx="12" fill="#D4845A"/>
        {/* Corazón */}
        <path d="M80 55 Q80 38 65 38 Q50 38 50 52 Q50 66 80 82 Q110 66 110 52 Q110 38 95 38 Q80 38 80 55Z" fill="#E85A8A"/>
        <path d="M80 55 Q80 38 65 38 Q50 38 50 52 Q50 66 80 82 Q110 66 110 52 Q110 38 95 38 Q80 38 80 55Z" fill="#FF7AAA" opacity="0.6"/>
      </svg>
    ),

    // ── PRESENTACIÓN ─────────────────────────────────────────────
    'Yo': (
      <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="160" rx="20" fill="#E8F5EE"/>
        <circle cx="80" cy="50" r="24" fill="#F0C89A"/>
        {/* Índice señalando al pecho */}
        <rect x="72" y="80" width="16" height="50" rx="8" fill="#E8A87C"/>
        <rect x="72" y="56" width="16" height="32" rx="8" fill="#E8A87C"/>
        <rect x="56" y="88" width="20" height="12" rx="6" fill="#E8A87C"/>
        <path d="M80 130 L80 145" stroke="#178C5C" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M74 139 L80 145 L86 139" stroke="#178C5C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),

    'Tú': (
      <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="160" rx="20" fill="#E8F5EE"/>
        {/* Mano apuntando hacia afuera */}
        <rect x="52" y="76" width="56" height="28" rx="12" fill="#E8A87C"/>
        <rect x="72" y="36" width="16" height="48" rx="8" fill="#E8A87C"/>
        <rect x="56" y="80" width="16" height="12" rx="6" fill="#E8A87C"/>
        <rect x="88" y="80" width="16" height="12" rx="6" fill="#E8A87C"/>
        {/* Flecha apuntando a otra persona */}
        <path d="M114 88 L140 88" stroke="#178C5C" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M134 82 L140 88 L134 94" stroke="#178C5C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        {/* Silueta persona */}
        <circle cx="148" cy="60" r="10" fill="#C8E8D4"/>
        <rect x="140" y="72" width="16" height="20" rx="6" fill="#C8E8D4"/>
      </svg>
    ),

    'Me llamo': (
      <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="160" rx="20" fill="#E8F5EE"/>
        {/* Dedos índices cruzados */}
        <rect x="52" y="60" width="14" height="56" rx="7" fill="#E8A87C" transform="rotate(-20 59 88)"/>
        <rect x="94" y="60" width="14" height="56" rx="7" fill="#D4845A" transform="rotate(20 101 88)"/>
        {/* Señalar al pecho */}
        <path d="M80 118 L80 140" stroke="#178C5C" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M74 134 L80 140 L86 134" stroke="#178C5C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),

    // ── COMIDA ───────────────────────────────────────────────────
    'Agua': (
      <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="160" rx="20" fill="#E8F5FF"/>
        <circle cx="80" cy="44" r="22" fill="#F0C89A"/>
        {/* Letra W tocando labios — 3 dedos */}
        <rect x="56" y="62" width="48" height="24" rx="10" fill="#E8A87C"/>
        <rect x="58" y="44" width="12" height="26" rx="6" fill="#E8A87C"/>
        <rect x="74" y="40" width="12" height="30" rx="6" fill="#E8A87C"/>
        <rect x="90" y="44" width="12" height="26" rx="6" fill="#E8A87C"/>
        {/* Gota de agua */}
        <path d="M128 45 Q128 30 120 38 Q112 46 120 54 Q128 62 136 54 Q144 46 136 38 Q128 30 128 45Z" fill="#4A90D9" opacity="0.7"/>
      </svg>
    ),

    'Manzana': (
      <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="160" rx="20" fill="#FFF0F0"/>
        <circle cx="80" cy="44" r="22" fill="#F0C89A"/>
        {/* Índice doblado girando en mejilla */}
        <path d="M60 52 Q56 60 60 68" stroke="#E8A87C" strokeWidth="12" fill="none" strokeLinecap="round"/>
        {/* Flecha circular */}
        <path d="M52 58 A12 12 0 1 1 52 66" stroke="#178C5C" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M48 62 L52 66 L56 62" stroke="#178C5C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        {/* Manzana */}
        <path d="M115 55 Q115 38 100 40 Q88 38 88 55 Q88 72 100 76 Q112 72 115 55Z" fill="#E85A5A"/>
        <path d="M100 40 Q100 30 108 28" stroke="#5A8A3A" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <ellipse cx="105" cy="46" rx="5" ry="7" fill="white" opacity="0.3"/>
      </svg>
    ),

    // fallback genérico
    'default': (
      <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="160" rx="20" fill="#E8F5EE"/>
        <rect x="60" y="100" width="40" height="30" rx="10" fill="#D4956A"/>
        <rect x="48" y="60" width="64" height="48" rx="14" fill="#E8A87C"/>
        <rect x="52" y="28" width="13" height="38" rx="6" fill="#E8A87C"/>
        <rect x="68" y="22" width="13" height="44" rx="6" fill="#E8A87C"/>
        <rect x="84" y="24" width="13" height="42" rx="6" fill="#E8A87C"/>
        <rect x="98" y="30" width="12" height="36" rx="6" fill="#E8A87C"/>
        <rect x="34" y="68" width="20" height="12" rx="6" fill="#E8A87C"/>
      </svg>
    )
  }

  return illustrations[word] || illustrations['default']
}
