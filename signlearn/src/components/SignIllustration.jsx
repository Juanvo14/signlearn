export function SignIllustration({ word, size = 140 }) {
  const s = size
  const scale = s / 140

  const Hand = ({ children, bg = "#F5E6D3" }) => (
    <svg width={s} height={s} viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="140" height="140" rx="16" fill={bg}/>
      {children}
    </svg>
  )

  // Colores de piel consistentes
  const skin = "#E8A87C"
  const skinDark = "#C4845A"
  const skinLight = "#F2C49B"
  const green = "#178C5C"
  const sleeve = "#4A7FC4"

  const signs = {

    'Hola': <Hand bg="#E8F5EE">
      <rect x="56" y="100" width="28" height="22" rx="8" fill={skin}/>
      <rect x="42" y="62" width="56" height="44" rx="14" fill={skin}/>
      <rect x="44" y="28" width="16" height="40" rx="8" fill={skinLight}/>
      <rect x="62" y="22" width="16" height="46" rx="8" fill={skinLight}/>
      <rect x="80" y="24" width="16" height="44" rx="8" fill={skinLight}/>
      <rect x="96" y="32" width="14" height="38" rx="7" fill={skinLight}/>
      <rect x="28" y="72" width="20" height="14" rx="7" fill={skin}/>
      <path d="M104 50 L120 38" stroke={green} strokeWidth="3" strokeLinecap="round"/>
      <path d="M114 34 L120 38 L116 44" stroke={green} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M108 62 L122 52" stroke={green} strokeWidth="2.5" strokeLinecap="round" opacity="0.5"/>
    </Hand>,

    'Adiós': <Hand bg="#E8F5EE">
      <rect x="56" y="100" width="28" height="22" rx="8" fill={skin}/>
      <rect x="42" y="62" width="56" height="44" rx="14" fill={skin}/>
      <rect x="44" y="28" width="14" height="40" rx="7" fill={skinLight}/>
      <rect x="60" y="22" width="14" height="46" rx="7" fill={skinLight}/>
      <rect x="76" y="24" width="14" height="44" rx="7" fill={skinLight}/>
      <rect x="90" y="30" width="13" height="38" rx="6" fill={skinLight}/>
      <rect x="28" y="72" width="20" height="14" rx="7" fill={skin}/>
      <path d="M104 44 L126 30" stroke={green} strokeWidth="3" strokeLinecap="round"/>
      <path d="M119 26 L126 30 L122 37" stroke={green} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </Hand>,

    'Gracias': <Hand bg="#E8F5EE">
      <ellipse cx="70" cy="30" rx="22" ry="24" fill="#F0C49A"/>
      <rect x="62" y="50" width="16" height="14" fill="#F0C49A"/>
      <rect x="44" y="58" width="52" height="30" rx="12" fill={skin}/>
      <rect x="50" y="40" width="13" height="24" rx="6" fill={skinLight}/>
      <rect x="65" y="37" width="13" height="27" rx="6" fill={skinLight}/>
      <rect x="80" y="39" width="13" height="25" rx="6" fill={skinLight}/>
      <rect x="93" y="44" width="11" height="20" rx="5" fill={skinLight}/>
      <path d="M70 90 L70 112" stroke={green} strokeWidth="3" strokeLinecap="round"/>
      <path d="M63 105 L70 112 L77 105" stroke={green} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </Hand>,

    'Por favor': <Hand bg="#EEF6FF">
      <rect x="54" y="104" width="32" height="20" rx="8" fill={sleeve}/>
      <rect x="42" y="68" width="56" height="40" rx="14" fill={skin}/>
      <rect x="46" y="50" width="13" height="26" rx="6" fill={skinLight}/>
      <rect x="61" y="46" width="13" height="30" rx="6" fill={skinLight}/>
      <rect x="76" y="48" width="13" height="28" rx="6" fill={skinLight}/>
      <rect x="89" y="54" width="12" height="22" rx="6" fill={skinLight}/>
      <rect x="28" y="74" width="20" height="14" rx="7" fill={skinLight}/>
      <path d="M88 54 A28 28 0 1 1 52 54" stroke={green} strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M47 50 L52 54 L57 50" stroke={green} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </Hand>,

    'Buenos días': <Hand bg="#FFF8E0">
      <ellipse cx="70" cy="36" rx="20" ry="22" fill="#F0C49A"/>
      <rect x="44" y="56" width="52" height="26" rx="12" fill={skin}/>
      <rect x="48" y="36" width="13" height="26" rx="6" fill={skinLight}/>
      <rect x="63" y="32" width="13" height="30" rx="6" fill={skinLight}/>
      <rect x="78" y="34" width="13" height="28" rx="6" fill={skinLight}/>
      <rect x="91" y="40" width="11" height="22" rx="5" fill={skinLight}/>
      <circle cx="118" cy="28" r="14" fill="#FAC775"/>
      <path d="M118 9 L118 5 M118 47 L118 51 M99 28 L95 28 M137 28 L141 28" stroke="#FAC775" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M105 15 L102 12 M131 41 L134 44 M105 41 L102 44 M131 15 L134 12" stroke="#FAC775" strokeWidth="2" strokeLinecap="round"/>
      <path d="M96 66 L116 58" stroke={green} strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M110 54 L116 58 L112 64" stroke={green} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </Hand>,

    'Buenas noches': <Hand bg="#E8EEFF">
      <ellipse cx="70" cy="36" rx="20" ry="22" fill="#F0C49A"/>
      <path d="M44 62 Q38 76 42 92 Q50 108 66 106 Q82 104 86 90 Q90 76 84 62 Q76 50 62 52 Q48 54 44 62Z" fill={skin}/>
      <path d="M120 20 A18 18 0 1 1 102 38 A11 11 0 1 0 120 20Z" fill="#C8D8F8"/>
      <circle cx="108" cy="58" r="3.5" fill="#FAC775"/>
      <circle cx="132" cy="44" r="2.5" fill="#FAC775"/>
      <circle cx="98" cy="44" r="2" fill="#FAC775"/>
      <circle cx="124" cy="28" r="2" fill="#FAC775"/>
    </Hand>,

    'Uno': <Hand bg="#EEF2FF">
      <rect x="58" y="108" width="24" height="20" rx="8" fill={sleeve}/>
      <rect x="44" y="70" width="52" height="44" rx="14" fill={skin}/>
      <rect x="62" y="20" width="16" height="58" rx="8" fill={skinLight}/>
      <path d="M46 70 Q46 56 54 54" stroke={skinDark} strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M88 70 Q90 56 96 58" stroke={skinDark} strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M96 70 Q100 60 104 63" stroke={skinDark} strokeWidth="3" fill="none" strokeLinecap="round"/>
      <text x="118" y="100" fontSize="30" fontWeight="bold" fill={green} fontFamily="Arial">1</text>
    </Hand>,

    'Dos': <Hand bg="#EEF2FF">
      <rect x="58" y="108" width="24" height="20" rx="8" fill={sleeve}/>
      <rect x="44" y="70" width="52" height="44" rx="14" fill={skin}/>
      <rect x="52" y="20" width="15" height="56" rx="7" fill={skinLight}/>
      <rect x="70" y="18" width="15" height="58" rx="7" fill={skinLight}/>
      <path d="M90 70 Q94 58 100 60" stroke={skinDark} strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M98 72 Q102 62 106 65" stroke={skinDark} strokeWidth="3" fill="none" strokeLinecap="round"/>
      <text x="114" y="100" fontSize="30" fontWeight="bold" fill={green} fontFamily="Arial">2</text>
    </Hand>,

    'Tres': <Hand bg="#EEF2FF">
      <rect x="58" y="108" width="24" height="20" rx="8" fill={sleeve}/>
      <rect x="42" y="70" width="56" height="44" rx="14" fill={skin}/>
      <rect x="34" y="72" width="16" height="12" rx="6" fill={skinLight}/>
      <rect x="48" y="20" width="14" height="56" rx="7" fill={skinLight}/>
      <rect x="65" y="16" width="14" height="60" rx="7" fill={skinLight}/>
      <rect x="82" y="18" width="14" height="58" rx="7" fill={skinLight}/>
      <text x="108" y="100" fontSize="30" fontWeight="bold" fill={green} fontFamily="Arial">3</text>
    </Hand>,

    'Cuatro': <Hand bg="#EEF2FF">
      <rect x="58" y="108" width="24" height="20" rx="8" fill={sleeve}/>
      <rect x="42" y="70" width="56" height="44" rx="14" fill={skin}/>
      <rect x="46" y="20" width="13" height="56" rx="6" fill={skinLight}/>
      <rect x="62" y="16" width="13" height="60" rx="6" fill={skinLight}/>
      <rect x="78" y="18" width="13" height="58" rx="6" fill={skinLight}/>
      <rect x="93" y="22" width="12" height="54" rx="6" fill={skinLight}/>
      <path d="M44 80 Q36 84 38 92" stroke={skinDark} strokeWidth="4" fill="none" strokeLinecap="round"/>
      <text x="116" y="100" fontSize="28" fontWeight="bold" fill={green} fontFamily="Arial">4</text>
    </Hand>,

    'Cinco': <Hand bg="#EEF2FF">
      <rect x="58" y="108" width="24" height="20" rx="8" fill={sleeve}/>
      <rect x="36" y="70" width="68" height="44" rx="14" fill={skin}/>
      <rect x="46" y="20" width="13" height="56" rx="6" fill={skinLight}/>
      <rect x="62" y="16" width="13" height="60" rx="6" fill={skinLight}/>
      <rect x="78" y="18" width="13" height="58" rx="6" fill={skinLight}/>
      <rect x="93" y="22" width="12" height="54" rx="6" fill={skinLight}/>
      <rect x="24" y="72" width="20" height="14" rx="7" fill={skinLight}/>
      <text x="112" y="100" fontSize="28" fontWeight="bold" fill={green} fontFamily="Arial">5</text>
    </Hand>,

    'Seis': <Hand bg="#EEF2FF">
      <rect x="58" y="108" width="24" height="20" rx="8" fill={sleeve}/>
      <rect x="44" y="70" width="52" height="44" rx="14" fill={skin}/>
      <rect x="24" y="68" width="26" height="14" rx="7" fill={skinLight}/>
      <rect x="92" y="20" width="13" height="56" rx="6" fill={skinLight}/>
      <text x="114" y="100" fontSize="28" fontWeight="bold" fill={green} fontFamily="Arial">6</text>
    </Hand>,

    'Siete': <Hand bg="#EEF2FF">
      <rect x="58" y="108" width="24" height="20" rx="8" fill={sleeve}/>
      <rect x="44" y="70" width="52" height="44" rx="14" fill={skin}/>
      <rect x="46" y="20" width="13" height="56" rx="6" fill={skinLight}/>
      <rect x="62" y="16" width="13" height="60" rx="6" fill={skinLight}/>
      <rect x="78" y="18" width="13" height="58" rx="6" fill={skinLight}/>
      <rect x="93" y="22" width="12" height="54" rx="6" fill={skinLight}/>
      <circle cx="30" cy="58" r="10" fill={skinLight}/>
      <path d="M30 58 Q52 50 70 54" stroke={skinDark} strokeWidth="2.5" fill="none"/>
      <text x="116" y="100" fontSize="28" fontWeight="bold" fill={green} fontFamily="Arial">7</text>
    </Hand>,

    'Ocho': <Hand bg="#EEF2FF">
      <rect x="58" y="108" width="24" height="20" rx="8" fill={sleeve}/>
      <rect x="44" y="70" width="52" height="44" rx="14" fill={skin}/>
      <rect x="46" y="20" width="13" height="56" rx="6" fill={skinLight}/>
      <rect x="62" y="16" width="13" height="60" rx="6" fill={skinLight}/>
      <rect x="78" y="18" width="13" height="58" rx="6" fill={skinLight}/>
      <circle cx="30" cy="58" r="10" fill={skinLight}/>
      <path d="M30 58 Q58 52 84 54" stroke={skinDark} strokeWidth="2.5" fill="none"/>
      <text x="116" y="100" fontSize="28" fontWeight="bold" fill={green} fontFamily="Arial">8</text>
    </Hand>,

    'Nueve': <Hand bg="#EEF2FF">
      <rect x="58" y="108" width="24" height="20" rx="8" fill={sleeve}/>
      <rect x="44" y="70" width="52" height="44" rx="14" fill={skin}/>
      <rect x="46" y="20" width="13" height="56" rx="6" fill={skinLight}/>
      <rect x="62" y="16" width="13" height="60" rx="6" fill={skinLight}/>
      <rect x="92" y="22" width="12" height="54" rx="6" fill={skinLight}/>
      <circle cx="30" cy="58" r="10" fill={skinLight}/>
      <path d="M30 58 Q64 50 96 54" stroke={skinDark} strokeWidth="2.5" fill="none"/>
      <text x="116" y="100" fontSize="28" fontWeight="bold" fill={green} fontFamily="Arial">9</text>
    </Hand>,

    'Diez': <Hand bg="#EEF2FF">
      <rect x="58" y="108" width="24" height="20" rx="8" fill={sleeve}/>
      <rect x="44" y="70" width="52" height="44" rx="14" fill={skin}/>
      <rect x="26" y="56" width="22" height="26" rx="10" fill={skin}/>
      <rect x="32" y="34" width="16" height="30" rx="8" fill={skinLight}/>
      <path d="M96 76 A22 22 0 1 1 74 54" stroke={green} strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M70 50 L74 54 L78 50" stroke={green} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <text x="108" y="100" fontSize="26" fontWeight="bold" fill={green} fontFamily="Arial">10</text>
    </Hand>,

    'Perro': <Hand bg="#FFF3E8">
      <rect x="20" y="86" width="62" height="26" rx="10" fill={sleeve} opacity="0.4"/>
      <rect x="24" y="82" width="62" height="28" rx="12" fill={skin}/>
      <rect x="28" y="60" width="14" height="30" rx="7" fill={skinLight}/>
      <rect x="44" y="56" width="14" height="34" rx="7" fill={skinLight}/>
      <rect x="60" y="58" width="14" height="32" rx="7" fill={skinLight}/>
      <rect x="74" y="64" width="13" height="26" rx="6" fill={skinLight}/>
      <path d="M92 80 L92 60" stroke={green} strokeWidth="3" strokeLinecap="round"/>
      <path d="M86 66 L92 60 L98 66" stroke={green} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <ellipse cx="118" cy="96" rx="10" ry="12" fill={skinDark} opacity="0.3"/>
      <circle cx="108" cy="84" r="5" fill={skinDark} opacity="0.3"/>
      <circle cx="128" cy="84" r="5" fill={skinDark} opacity="0.3"/>
    </Hand>,

    'Gato': <Hand bg="#FFF3E8">
      <ellipse cx="70" cy="56" rx="32" ry="28" fill="#F0C49A"/>
      <polygon points="44,32 36,14 58,28" fill="#F0C49A"/>
      <polygon points="96,32 104,14 82,28" fill="#F0C49A"/>
      <circle cx="56" cy="52" r="5" fill="#3A2A1A"/>
      <circle cx="84" cy="52" r="5" fill="#3A2A1A"/>
      <path d="M62 62 Q70 68 78 62" stroke="#3A2A1A" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M32 54 L52 58" stroke="#8B6914" strokeWidth="2" strokeLinecap="round"/>
      <path d="M30 62 L52 62" stroke="#8B6914" strokeWidth="2" strokeLinecap="round"/>
      <path d="M88 58 L108 54" stroke="#8B6914" strokeWidth="2" strokeLinecap="round"/>
      <path d="M88 62 L110 62" stroke="#8B6914" strokeWidth="2" strokeLinecap="round"/>
    </Hand>,

    'Pájaro': <Hand bg="#E8F5FF">
      <ellipse cx="70" cy="40" rx="22" ry="24" fill="#F0C49A"/>
      <path d="M58 50 L70 60 L82 50 Q70 66 58 50Z" fill="#E8952A"/>
      <rect x="46" y="66" width="48" height="26" rx="12" fill={skin}/>
      <rect x="50" y="46" width="13" height="26" rx="6" fill={skinLight}/>
      <rect x="65" y="42" width="13" height="30" rx="6" fill={skinLight}/>
      <rect x="80" y="44" width="13" height="28" rx="6" fill={skinLight}/>
      <path d="M48 96 Q38 110 40 122" stroke={green} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M92 96 Q102 110 100 122" stroke={green} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M112 32 Q124 22 134 32 Q124 28 112 32Z" fill="#4A90D9"/>
      <circle cx="132" cy="30" r="4" fill="#4A90D9"/>
    </Hand>,

    'Pez': <Hand bg="#E8F5FF">
      <rect x="30" y="66" width="68" height="22" rx="10" fill={skin}/>
      <rect x="34" y="46" width="13" height="26" rx="6" fill={skinLight}/>
      <rect x="50" y="42" width="13" height="30" rx="6" fill={skinLight}/>
      <rect x="66" y="44" width="13" height="28" rx="6" fill={skinLight}/>
      <rect x="80" y="48" width="12" height="24" rx="6" fill={skinLight}/>
      <path d="M98 66 L116 54 L116 88 Z" fill={skinLight}/>
      <path d="M10 88 Q24 78 38 88 Q52 98 66 88 Q80 78 94 88" stroke={green} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M88 82 L94 88 L88 94" stroke={green} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </Hand>,

    'Elefante': <Hand bg="#F0F0FF">
      <ellipse cx="70" cy="38" rx="22" ry="24" fill="#F0C49A"/>
      <path d="M58 58 Q48 76 46 96 Q44 110 56 114 Q68 118 70 106" stroke={skin} strokeWidth="16" fill="none" strokeLinecap="round"/>
      <rect x="46" y="52" width="48" height="24" rx="12" fill={skin}/>
      <rect x="50" y="32" width="13" height="26" rx="6" fill={skinLight}/>
      <rect x="65" y="28" width="13" height="30" rx="6" fill={skinLight}/>
      <rect x="80" y="30" width="13" height="28" rx="6" fill={skinLight}/>
      <ellipse cx="112" cy="52" rx="18" ry="22" fill="#D4956A" opacity="0.3"/>
      <ellipse cx="28" cy="52" rx="18" ry="22" fill="#D4956A" opacity="0.3"/>
    </Hand>,

    'Papá': <Hand bg="#FFF3E8">
      <ellipse cx="70" cy="50" rx="22" ry="24" fill="#F0C49A"/>
      <rect x="46" y="24" width="28" height="18" rx="8" fill={skin}/>
      <rect x="36" y="18" width="18" height="30" rx="9" fill={skinLight}/>
      <rect x="56" y="32" width="12" height="16" rx="6" fill={skinLight}/>
      <rect x="70" y="32" width="12" height="16" rx="6" fill={skinLight}/>
      <rect x="82" y="36" width="11" height="14" rx="5" fill={skinLight}/>
      <path d="M96 30 L116 20" stroke={green} strokeWidth="3" strokeLinecap="round"/>
      <path d="M109 16 L116 20 L112 27" stroke={green} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </Hand>,

    'Mamá': <Hand bg="#FFF0F5">
      <ellipse cx="70" cy="44" rx="22" ry="24" fill="#F0C49A"/>
      <rect x="46" y="66" width="28" height="18" rx="8" fill={skin}/>
      <rect x="36" y="60" width="18" height="30" rx="9" fill={skinLight}/>
      <rect x="56" y="72" width="12" height="16" rx="6" fill={skinLight}/>
      <rect x="70" y="72" width="12" height="16" rx="6" fill={skinLight}/>
      <rect x="82" y="74" width="11" height="14" rx="5" fill={skinLight}/>
      <path d="M96 70 L116 60" stroke={green} strokeWidth="3" strokeLinecap="round"/>
      <path d="M109 56 L116 60 L112 67" stroke={green} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </Hand>,

    'Hermano': <Hand bg="#E8F5EE">
      <rect x="16" y="72" width="46" height="32" rx="10" fill={skin}/>
      <rect x="20" y="50" width="13" height="28" rx="6" fill={skinLight}/>
      <rect x="35" y="46" width="13" height="32" rx="6" fill={skinLight}/>
      <rect x="50" y="48" width="12" height="30" rx="6" fill={skinLight}/>
      <rect x="78" y="72" width="46" height="32" rx="10" fill={skin}/>
      <rect x="82" y="50" width="13" height="28" rx="6" fill={skinLight}/>
      <rect x="97" y="46" width="13" height="32" rx="6" fill={skinLight}/>
      <rect x="112" y="48" width="12" height="30" rx="6" fill={skinLight}/>
      <path d="M62 84 L78 84" stroke={green} strokeWidth="3.5" strokeLinecap="round"/>
      <path d="M72 78 L78 84 L72 90" stroke={green} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </Hand>,

    'Hermana': <Hand bg="#FFF0F5">
      <rect x="16" y="72" width="46" height="32" rx="10" fill={skin}/>
      <rect x="20" y="50" width="13" height="28" rx="6" fill={skinLight}/>
      <rect x="35" y="46" width="13" height="32" rx="6" fill={skinLight}/>
      <rect x="50" y="48" width="12" height="30" rx="6" fill={skinLight}/>
      <rect x="78" y="72" width="46" height="32" rx="10" fill={skin}/>
      <rect x="82" y="50" width="13" height="28" rx="6" fill={skinLight}/>
      <rect x="97" y="46" width="13" height="32" rx="6" fill={skinLight}/>
      <rect x="112" y="48" width="12" height="30" rx="6" fill={skinLight}/>
      <path d="M62 84 L78 84" stroke="#E8509A" strokeWidth="3.5" strokeLinecap="round"/>
      <path d="M72 78 L78 84 L72 90" stroke="#E8509A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M62 36 Q70 26 78 36 Q70 42 62 36Z" fill="#E8509A" opacity="0.7"/>
    </Hand>,

    'Abuelo': <Hand bg="#FFF3E8">
      <ellipse cx="70" cy="44" rx="22" ry="24" fill="#F0C49A"/>
      <path d="M50 26 Q70 14 90 26" stroke="white" strokeWidth="7" fill="none" strokeLinecap="round"/>
      <rect x="46" y="24" width="24" height="16" rx="8" fill={skin}/>
      <rect x="36" y="18" width="18" height="28" rx="9" fill={skinLight}/>
      <path d="M94 30 Q106 20 114 30" stroke={green} strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M94 44 Q106 34 114 44" stroke={green} strokeWidth="3" fill="none" strokeLinecap="round"/>
    </Hand>,

    'Feliz': <Hand bg="#FFFBE8">
      <circle cx="70" cy="46" r="28" fill="#FAC775"/>
      <circle cx="58" cy="42" r="5" fill="#3A2A00"/>
      <circle cx="82" cy="42" r="5" fill="#3A2A00"/>
      <path d="M56 56 Q70 68 84 56" stroke="#3A2A00" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <rect x="46" y="84" width="48" height="26" rx="12" fill={skin}/>
      <rect x="50" y="66" width="13" height="26" rx="6" fill={skinLight}/>
      <rect x="65" y="62" width="13" height="30" rx="6" fill={skinLight}/>
      <rect x="80" y="64" width="13" height="28" rx="6" fill={skinLight}/>
      <path d="M98 94 L98 76" stroke={green} strokeWidth="3" strokeLinecap="round"/>
      <path d="M92 82 L98 76 L104 82" stroke={green} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </Hand>,

    'Triste': <Hand bg="#EEF2FF">
      <circle cx="70" cy="40" r="26" fill="#A8B8D8"/>
      <circle cx="58" cy="36" r="4.5" fill="#2A2A4A"/>
      <circle cx="82" cy="36" r="4.5" fill="#2A2A4A"/>
      <path d="M58 52 Q70 44 82 52" stroke="#2A2A4A" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <ellipse cx="58" cy="44" rx="4" ry="6" fill="#6688CC" opacity="0.5"/>
      <rect x="26" y="64" width="30" height="44" rx="10" fill={skin} opacity="0.85"/>
      <rect x="84" y="64" width="30" height="44" rx="10" fill={skin} opacity="0.85"/>
      <path d="M40 110 L40 126" stroke={green} strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M34 120 L40 126 L46 120" stroke={green} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M100 110 L100 126" stroke={green} strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M94 120 L100 126 L106 120" stroke={green} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </Hand>,

    'Enojado': <Hand bg="#FFF0F0">
      <circle cx="70" cy="42" r="26" fill="#F08080"/>
      <path d="M54 32 L62 37" stroke="#5A1A1A" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M86 32 L78 37" stroke="#5A1A1A" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="60" cy="40" r="4.5" fill="#5A1A1A"/>
      <circle cx="80" cy="40" r="4.5" fill="#5A1A1A"/>
      <path d="M58 54 Q70 46 82 54" stroke="#5A1A1A" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M28 70 Q24 80 28 90" stroke={skin} strokeWidth="14" fill="none" strokeLinecap="round"/>
      <path d="M50 66 Q46 78 50 90" stroke={skin} strokeWidth="14" fill="none" strokeLinecap="round"/>
      <path d="M90 66 Q94 78 90 90" stroke={skin} strokeWidth="14" fill="none" strokeLinecap="round"/>
      <path d="M112 70 Q116 80 112 90" stroke={skin} strokeWidth="14" fill="none" strokeLinecap="round"/>
      <path d="M70 98 L70 118" stroke="#E85A5A" strokeWidth="3" strokeLinecap="round"/>
      <path d="M64 112 L70 118 L76 112" stroke="#E85A5A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </Hand>,

    'Miedo': <Hand bg="#F5F0FF">
      <circle cx="70" cy="40" r="24" fill="#D8C8F0"/>
      <circle cx="58" cy="36" r="6" fill="#2A1A4A"/>
      <circle cx="82" cy="36" r="6" fill="#2A1A4A"/>
      <ellipse cx="70" cy="52" rx="9" ry="6" fill="#2A1A4A"/>
      <rect x="18" y="76" width="44" height="30" rx="10" fill={skin}/>
      <rect x="78" y="76" width="44" height="30" rx="10" fill={skin}/>
      <rect x="22" y="54" width="12" height="28" rx="6" fill={skinLight}/>
      <rect x="36" y="50" width="12" height="32" rx="6" fill={skinLight}/>
      <rect x="82" y="54" width="12" height="28" rx="6" fill={skinLight}/>
      <rect x="96" y="50" width="12" height="32" rx="6" fill={skinLight}/>
      <path d="M16 70 Q22 64 16 58" stroke="#8B6BD4" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M124 70 Q118 64 124 58" stroke="#8B6BD4" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    </Hand>,

    'Amor': <Hand bg="#FFF0F8">
      <path d="M70 54 Q70 34 52 34 Q34 34 34 50 Q34 68 70 88 Q106 68 106 50 Q106 34 88 34 Q70 34 70 54Z" fill="#F08090"/>
      <rect x="18" y="82" width="64" height="28" rx="12" fill={skin}/>
      <rect x="58" y="82" width="64" height="28" rx="12" fill={skinDark}/>
    </Hand>,

    'Yo': <Hand bg="#E8F5EE">
      <ellipse cx="70" cy="44" rx="22" ry="24" fill="#F0C49A"/>
      <rect x="44" y="74" width="52" height="38" rx="14" fill={skin}/>
      <rect x="62" y="56" width="16" height="28" rx="8" fill={skinLight}/>
      <path d="M70 112 L70 130" stroke={green} strokeWidth="3" strokeLinecap="round"/>
      <path d="M64 124 L70 130 L76 124" stroke={green} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </Hand>,

    'Tú': <Hand bg="#E8F5EE">
      <rect x="44" y="70" width="52" height="28" rx="14" fill={skin}/>
      <rect x="62" y="30" width="16" height="48" rx="8" fill={skinLight}/>
      <rect x="48" y="74" width="16" height="14" rx="7" fill={skinLight}/>
      <rect x="80" y="74" width="16" height="14" rx="7" fill={skinLight}/>
      <path d="M106 82 L130 82" stroke={green} strokeWidth="3" strokeLinecap="round"/>
      <path d="M124 76 L130 82 L124 88" stroke={green} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <circle cx="136" cy="56" r="12" fill="#C8E8D4"/>
      <rect x="128" y="70" width="16" height="22" rx="6" fill="#C8E8D4"/>
    </Hand>,

    'Me llamo': <Hand bg="#E8F5EE">
      <rect x="38" y="56" width="16" height="56" rx="8" fill={skin} style={{transform: 'rotate(-22deg)', transformOrigin: '46px 84px'}}/>
      <rect x="86" y="56" width="16" height="56" rx="8" fill={skinDark} style={{transform: 'rotate(22deg)', transformOrigin: '94px 84px'}}/>
      <path d="M70 116 L70 132" stroke={green} strokeWidth="3" strokeLinecap="round"/>
      <path d="M64 126 L70 132 L76 126" stroke={green} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </Hand>,

    'Agua': <Hand bg="#E8F5FF">
      <ellipse cx="70" cy="40" rx="22" ry="24" fill="#F0C49A"/>
      <rect x="44" y="60" width="52" height="26" rx="12" fill={skin}/>
      <rect x="48" y="40" width="13" height="26" rx="6" fill={skinLight}/>
      <rect x="63" y="36" width="13" height="30" rx="6" fill={skinLight}/>
      <rect x="78" y="38" width="13" height="28" rx="6" fill={skinLight}/>
      <path d="M112 48 Q112 30 102 38 Q92 46 102 54 Q112 62 122 54 Q132 46 122 38 Q112 30 112 48Z" fill="#4A90D9" opacity="0.75"/>
    </Hand>,

    'Manzana': <Hand bg="#FFF0F0">
      <ellipse cx="70" cy="40" rx="22" ry="24" fill="#F0C49A"/>
      <path d="M52 52 Q46 62 50 72" stroke={skin} strokeWidth="14" fill="none" strokeLinecap="round"/>
      <path d="M44 56 A14 14 0 1 1 44 66" stroke={green} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M40 62 L44 66 L48 62" stroke={green} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M108 56 Q108 36 92 38 Q78 36 78 56 Q78 76 92 80 Q106 76 108 56Z" fill="#E85A5A"/>
      <path d="M92 38 Q92 26 102 24" stroke="#5A8A3A" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <ellipse cx="97" cy="46" rx="6" ry="9" fill="white" opacity="0.25"/>
    </Hand>,

    'Pan': <Hand bg="#FFF8E8">
      <rect x="40" y="58" width="52" height="36" rx="14" fill={skin}/>
      <rect x="44" y="38" width="13" height="28" rx="6" fill={skinLight}/>
      <rect x="60" y="34" width="13" height="32" rx="6" fill={skinLight}/>
      <rect x="76" y="36" width="13" height="30" rx="6" fill={skinLight}/>
      <rect x="34" y="64" width="18" height="12" rx="6" fill={skinLight}/>
      <path d="M100 70 Q116 56 108 70 Q116 84 100 70Z" fill="#E8A840" opacity="0.6"/>
    </Hand>,

    'Leche': <Hand bg="#F0F8FF">
      <rect x="40" y="58" width="52" height="36" rx="14" fill={skin}/>
      <rect x="44" y="34" width="13" height="32" rx="6" fill={skinLight}/>
      <rect x="60" y="30" width="13" height="36" rx="6" fill={skinLight}/>
      <rect x="76" y="32" width="13" height="34" rx="6" fill={skinLight}/>
      <path d="M100 64 Q106 56 100 70 Q106 84 100 76" stroke={green} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M112 64 Q118 56 112 70 Q118 84 112 76" stroke={green} strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.6"/>
    </Hand>,

    'Café': <Hand bg="#FFF3E8">
      <rect x="36" y="62" width="56" height="32" rx="14" fill={skin}/>
      <rect x="40" y="38" width="13" height="32" rx="6" fill={skinLight}/>
      <rect x="56" y="34" width="13" height="36" rx="6" fill={skinLight}/>
      <rect x="72" y="36" width="13" height="34" rx="6" fill={skinLight}/>
      <rect x="86" y="42" width="12" height="28" rx="6" fill={skinLight}/>
      <path d="M108 62 A18 18 0 1 1 90 80" stroke="#8B5E3C" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M86 76 L90 80 L94 76" stroke="#8B5E3C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </Hand>,

    'Qué': <Hand bg="#E8F5EE">
      <rect x="40" y="60" width="60" height="32" rx="14" fill={skin}/>
      <rect x="44" y="36" width="13" height="32" rx="6" fill={skinLight}/>
      <rect x="60" y="32" width="13" height="36" rx="6" fill={skinLight}/>
      <rect x="76" y="34" width="13" height="34" rx="6" fill={skinLight}/>
      <rect x="90" y="40" width="12" height="28" rx="6" fill={skinLight}/>
      <rect x="28" y="66" width="18" height="12" rx="6" fill={skinLight}/>
      <path d="M50 94 L90 94" stroke={green} strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M40 94 L50 94" stroke={green} strokeWidth="2.5" strokeLinecap="round" opacity="0.4"/>
    </Hand>,

    'Dónde': <Hand bg="#E8F5EE">
      <rect x="44" y="68" width="52" height="28" rx="14" fill={skin}/>
      <rect x="62" y="28" width="16" height="48" rx="8" fill={skinLight}/>
      <path d="M30 80 L50 80" stroke={green} strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M50 80 L70 80" stroke={green} strokeWidth="2.5" strokeLinecap="round" opacity="0.5"/>
      <path d="M110 80 L130 80" stroke={green} strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M90 80 L110 80" stroke={green} strokeWidth="2.5" strokeLinecap="round" opacity="0.5"/>
    </Hand>,

    'Cuándo': <Hand bg="#E8F5EE">
      <rect x="40" y="66" width="60" height="30" rx="14" fill={skin}/>
      <rect x="44" y="42" width="13" height="32" rx="6" fill={skinLight}/>
      <rect x="60" y="38" width="13" height="36" rx="6" fill={skinLight}/>
      <rect x="76" y="40" width="13" height="34" rx="6" fill={skinLight}/>
      <path d="M114 72 A20 20 0 1 1 94 52" stroke={green} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M94 52 L94 66" stroke={green} strokeWidth="2.5" strokeLinecap="round"/>
    </Hand>,

    'Por qué': <Hand bg="#E8F5EE">
      <ellipse cx="70" cy="44" rx="22" ry="24" fill="#F0C49A"/>
      <path d="M62 40 Q62 34 70 32 Q78 30 78 38 Q78 44 70 46 L70 52" stroke="#4A7FC4" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <circle cx="70" cy="58" r="3.5" fill="#4A7FC4"/>
      <path d="M86 52 L106 44" stroke={green} strokeWidth="3" strokeLinecap="round"/>
      <path d="M100 40 L106 44 L102 50" stroke={green} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </Hand>,

    'Vivo en': <Hand bg="#E8F5EE">
      <path d="M50 80 L70 50 L90 80 Z" fill={skin}/>
      <rect x="58" y="80" width="24" height="26" rx="4" fill={skinDark}/>
      <rect x="44" y="80" width="52" height="8" fill={skinDark}/>
      <circle cx="70" cy="40" r="14" fill="#4A90D9" opacity="0.4"/>
      <circle cx="70" cy="40" r="8" fill="#4A90D9" opacity="0.6"/>
      <path d="M70 54 L70 68" stroke={green} strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M64 62 L70 68 L76 62" stroke={green} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </Hand>,

  }

  return signs[word] || (
    <svg width={s} height={s} viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="140" height="140" rx="16" fill="#E8F5EE"/>
      <rect x="56" y="98" width="28" height="22" rx="8" fill={skin}/>
      <rect x="44" y="60" width="52" height="44" rx="14" fill={skin}/>
      <rect x="46" y="26" width="13" height="40" rx="6" fill={skinLight}/>
      <rect x="62" y="20" width="13" height="46" rx="6" fill={skinLight}/>
      <rect x="78" y="22" width="13" height="44" rx="6" fill={skinLight}/>
      <rect x="92" y="28" width="12" height="38" rx="6" fill={skinLight}/>
      <rect x="30" y="68" width="20" height="14" rx="7" fill={skinLight}/>
    </svg>
  )
}
