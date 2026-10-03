import React from 'react';

/**
 * Botanical branch line art for the top-left of the header,
 * matching the delicate olive/eucalyptus branch in the reference design.
 */
export function BotanicalBranchTopLeft({ className = '' }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 170 210" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {/* Main curved stem */}
      <path 
        d="M 2 0 C 18 40 38 85 76 130 C 95 152 118 174 145 192" 
        stroke="#7A6656" 
        strokeWidth="1.4" 
        strokeLinecap="round" 
        opacity="0.65"
      />
      {/* Side twig 1 */}
      <path 
        d="M 38 48 C 58 42 85 45 106 40" 
        stroke="#7A6656" 
        strokeWidth="1.1" 
        strokeLinecap="round" 
        opacity="0.55"
      />
      {/* Side twig 2 */}
      <path 
        d="M 58 96 C 82 100 114 92 135 84" 
        stroke="#7A6656" 
        strokeWidth="1.1" 
        strokeLinecap="round" 
        opacity="0.55"
      />

      {/* Leaf 1 (top leftmost) */}
      <path 
        d="M 12 16 C 24 6 42 10 48 24 C 38 34 20 30 12 16 Z" 
        stroke="#7A6656" 
        strokeWidth="1.3" 
        opacity="0.65"
      />
      <path d="M 12 16 Q 30 18 48 24" stroke="#7A6656" strokeWidth="0.8" opacity="0.45" />

      {/* Leaf 2 (top right of twig 1) */}
      <path 
        d="M 64 42 C 75 26 98 22 112 30 C 102 45 80 48 64 42 Z" 
        stroke="#7A6656" 
        strokeWidth="1.3" 
        opacity="0.65"
      />
      <path d="M 64 42 Q 88 34 112 30" stroke="#7A6656" strokeWidth="0.8" opacity="0.45" />

      {/* Leaf 3 (tip of twig 1) */}
      <path 
        d="M 106 40 C 122 34 140 38 148 48 C 132 56 116 52 106 40 Z" 
        stroke="#7A6656" 
        strokeWidth="1.3" 
        opacity="0.65"
      />

      {/* Leaf 4 (left middle) */}
      <path 
        d="M 38 72 C 26 68 12 78 10 94 C 24 98 38 88 38 72 Z" 
        stroke="#7A6656" 
        strokeWidth="1.3" 
        opacity="0.65"
      />
      <path d="M 38 72 Q 22 84 10 94" stroke="#7A6656" strokeWidth="0.8" opacity="0.45" />

      {/* Leaf 5 (right middle) */}
      <path 
        d="M 58 96 C 72 82 94 80 108 90 C 96 104 74 106 58 96 Z" 
        stroke="#7A6656" 
        strokeWidth="1.3" 
        opacity="0.65"
      />
      <path d="M 58 96 Q 84 90 108 90" stroke="#7A6656" strokeWidth="0.8" opacity="0.45" />

      {/* Leaf 6 (twig 2 tip) */}
      <path 
        d="M 108 90 C 124 80 144 84 154 96 C 138 106 120 102 108 90 Z" 
        stroke="#7A6656" 
        strokeWidth="1.3" 
        opacity="0.65"
      />

      {/* Leaf 7 (lower left) */}
      <path 
        d="M 74 126 C 60 128 44 142 46 160 C 62 160 74 144 74 126 Z" 
        stroke="#7A6656" 
        strokeWidth="1.3" 
        opacity="0.65"
      />
      <path d="M 74 126 Q 58 144 46 160" stroke="#7A6656" strokeWidth="0.8" opacity="0.45" />

      {/* Leaf 8 (lower right) */}
      <path 
        d="M 94 148 C 110 138 132 140 142 154 C 128 166 108 164 94 148 Z" 
        stroke="#7A6656" 
        strokeWidth="1.3" 
        opacity="0.65"
      />
      <path d="M 94 148 Q 118 148 142 154" stroke="#7A6656" strokeWidth="0.8" opacity="0.45" />

      {/* Leaf 9 (branch tip) */}
      <path 
        d="M 126 180 C 142 172 160 178 166 190 C 150 200 134 194 126 180 Z" 
        stroke="#7A6656" 
        strokeWidth="1.3" 
        opacity="0.65"
      />
    </svg>
  );
}

/**
 * Organic watercolor shape and fine topographical curves for the top-right corner
 */
export function OrganicWavesTopRight({ className = '' }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 190 190" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="clayGradientTop" cx="85%" cy="15%" r="75%">
          <stop offset="0%" stopColor="#D5BEA8" stopOpacity="0.85" />
          <stop offset="55%" stopColor="#E5D6C7" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#EFE8E0" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Soft clay watercolor patch */}
      <path 
        d="M 65 0 C 85 35 105 70 128 92 C 152 115 175 125 190 130 L 190 0 Z" 
        fill="url(#clayGradientTop)"
      />

      {/* Elegant topographical contour curves */}
      <path 
        d="M 45 0 C 65 40 92 78 120 105 C 148 132 175 145 190 152" 
        stroke="#8C7564" 
        strokeWidth="1.0" 
        strokeLinecap="round" 
        opacity="0.42"
      />
      <path 
        d="M 22 0 C 42 48 76 96 108 128 C 140 160 168 175 190 182" 
        stroke="#8C7564" 
        strokeWidth="0.85" 
        strokeLinecap="round" 
        opacity="0.32"
      />
      <path 
        d="M 85 0 C 102 28 125 56 148 78 C 168 98 180 108 190 112" 
        stroke="#8C7564" 
        strokeWidth="0.75" 
        strokeLinecap="round" 
        opacity="0.28"
      />
      <path 
        d="M 0 0 C 18 60 55 118 92 152 C 128 185 160 200 190 208" 
        stroke="#8C7564" 
        strokeWidth="0.65" 
        strokeLinecap="round" 
        opacity="0.2"
      />
    </svg>
  );
}

/**
 * Botanical leaves illustration on the right side of the "Combos e Serviços" card
 */
export function BotanicalBranchCard({ className = '' }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 170 170" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {/* Central stem stretching upwards and to the left */}
      <path 
        d="M 170 170 C 148 125 120 78 72 38 C 50 20 28 10 5 4" 
        stroke="#D8CBC0" 
        strokeWidth="1.3" 
        strokeLinecap="round" 
        opacity="0.4"
      />

      {/* Leaf 1 (top leftmost tip) */}
      <path 
        d="M 5 4 C 15 18 30 25 45 20 C 36 7 22 1 5 4 Z" 
        stroke="#D8CBC0" 
        strokeWidth="1.2" 
        opacity="0.45"
      />
      <path d="M 5 4 Q 25 12 45 20" stroke="#D8CBC0" strokeWidth="0.7" opacity="0.3" />

      {/* Leaf 2 (left side) */}
      <path 
        d="M 38 24 C 28 38 30 58 44 68 C 56 58 52 38 38 24 Z" 
        stroke="#D8CBC0" 
        strokeWidth="1.2" 
        opacity="0.45"
      />
      <path d="M 38 24 Q 38 46 44 68" stroke="#D8CBC0" strokeWidth="0.7" opacity="0.3" />

      {/* Leaf 3 (right side) */}
      <path 
        d="M 70 38 C 88 30 110 32 122 42 C 108 55 86 52 70 38 Z" 
        stroke="#D8CBC0" 
        strokeWidth="1.2" 
        opacity="0.45"
      />
      <path d="M 70 38 Q 96 40 122 42" stroke="#D8CBC0" strokeWidth="0.7" opacity="0.3" />

      {/* Leaf 4 (left middle) */}
      <path 
        d="M 74 62 C 56 74 52 96 62 110 C 78 100 82 78 74 62 Z" 
        stroke="#D8CBC0" 
        strokeWidth="1.2" 
        opacity="0.45"
      />
      <path d="M 74 62 Q 64 86 62 110" stroke="#D8CBC0" strokeWidth="0.7" opacity="0.3" />

      {/* Leaf 5 (right middle) */}
      <path 
        d="M 102 68 C 122 62 146 68 156 82 C 138 94 118 88 102 68 Z" 
        stroke="#D8CBC0" 
        strokeWidth="1.2" 
        opacity="0.45"
      />

      {/* Leaf 6 (lower left) */}
      <path 
        d="M 110 100 C 94 116 92 138 104 150 C 120 140 124 116 110 100 Z" 
        stroke="#D8CBC0" 
        strokeWidth="1.2" 
        opacity="0.45"
      />

      {/* Leaf 7 (lower right) */}
      <path 
        d="M 136 110 C 152 104 166 112 170 124 C 154 135 142 126 136 110 Z" 
        stroke="#D8CBC0" 
        strokeWidth="1.2" 
        opacity="0.45"
      />
    </svg>
  );
}

/**
 * Authentic WhatsApp Speech Bubble icon in matching earthy colors
 */
export function WhatsAppIcon({ className = '', color = '#A48976' }: { className?: string; color?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M 12 2 C 6.48 2 2 6.48 2 12 C 2 13.85 2.5 15.58 3.38 17.07 L 2.05 21.95 L 7.07 20.63 C 8.52 21.5 10.2 22 12 22 C 17.52 22 22 17.52 22 12 C 22 6.48 17.52 2 12 2 Z" 
        stroke={color} 
        strokeWidth="1.8" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      {/* Handset inside bubble */}
      <path 
        d="M 8.5 7.5 C 8.2 6.8 7.8 6.8 7.5 6.8 C 7.2 6.8 6.9 6.8 6.6 7.1 C 6.3 7.4 5.5 8.1 5.5 9.6 C 5.5 11.1 6.6 12.5 6.8 12.7 C 7 13 8.9 16 11.8 17.2 C 14.2 18.2 14.7 18 15.3 17.9 C 15.9 17.8 17.1 17.1 17.4 16.4 C 17.7 15.6 17.7 15 17.6 14.8 C 17.5 14.7 17.2 14.6 16.7 14.3 C 16.2 14.1 13.9 12.9 13.5 12.8 C 13.1 12.6 12.8 12.5 12.5 13 C 12.2 13.5 11.4 14.5 11.1 14.8 C 10.9 15 10.6 15.1 10.1 14.8 C 9.6 14.6 8.1 14.1 7 13 C 6.1 12.2 5.5 11.1 5.3 10.7 C 5.1 10.2 5.3 10 5.5 9.7 C 5.7 9.5 6 9.2 6.2 8.9 C 6.4 8.6 6.5 8.4 6.7 8.1 C 6.8 7.8 6.7 7.6 6.6 7.4 C 6.5 7.2 5.9 5.8 5.7 5.2" 
        transform="translate(1.5, 0.5) scale(0.9)"
        fill={color}
      />
    </svg>
  );
}

