import React from 'react';

export default function PoleSvg({ 
  model = 'JCAB-001', 
  height = 5000, 
  color = '#c5a880', 
  glowColor = 'rgba(197, 168, 128, 0.6)',
  className = '' 
}) {
  // Map standard model numbers to standard types
  const getPoleType = (modelId) => {
    const id = modelId.toUpperCase().replace(/\s/g, '');
    if (id.includes('TBAR') || id === 'JCAB-001' || id === 'JCAB-004' || id === 'ARPL-004') return 't-bar';
    if (id.includes('FRAME') || id === 'JCAB-002' || id === 'JCAB-028') return 'linear-frame';
    if (id.includes('SINGLEARM') || id === 'JCAB-003' || id === 'JCAB-015') return 'single-arm';
    if (id.includes('DOUBLEARM') || id === 'JCAB-005' || id === 'JCAB-017' || id === 'JCAB-018') return 'double-arm';
    if (id.includes('YSHAPED') || id === 'JCAB-006' || id === 'JCAB-012') return 'y-shaped';
    if (id.includes('INCLINED') || id === 'JCAB-007') return 'inclined';
    if (id.includes('ANGULAR') || id === 'JCAB-008' || id === 'JCAB-041') return 'angular';
    if (id.includes('ZIGZAG') || id === 'JCAB-009') return 'zigzag';
    if (id.includes('DIAMOND') || id === 'JCAB-010' || id === 'JCAB-011') return 'diamond';
    if (id.includes('SLIMLINE') || id === 'JCAB-013') return 'slimline';
    if (id.includes('ARC') || id === 'JCAB-021' || id === 'JCAB-030' || id === 'JCAB-032' || id === 'JCAB-033') return 'graceful-arc';
    if (id.includes('LOOP') || id === 'JCAB-022') return 'loop';
    if (id.includes('CURVEDCONE') || id === 'JCAB-023') return 'curved-cone';
    if (id.includes('SPIRAL') || id === 'JCAB-024') return 'spiral';
    if (id.includes('LATTICE') || id === 'JCAB-026') return 'lattice';
    if (id.includes('HALO') || id === 'JCAB-035' || id === 'JCAB-036') return 'halo';
    if (id.includes('SPOTLIGHT') || id === 'JCAB-042' || id === 'JCAB-043') return 'spotlight';
    if (id.includes('CUBICAL') || id === 'JCAB-044' || id === 'JCAB-045') return 'cubical';
    return 't-bar'; // Default fallback
  };

  const type = getPoleType(model);

  // Height scale logic (standard svg canvas is 100x400)
  // Base of the pole is at Y=360, ground line is Y=370
  // Standard height is 3000mm to 9000mm. We map it to pole height in SVG.
  const mapHeightToSvg = (h) => {
    // 3000 -> Y=200 (pole length 160)
    // 9000 -> Y=100 (pole length 260)
    const minH = 3000;
    const maxH = 9000;
    const clamped = Math.max(minH, Math.min(maxH, h));
    const percentage = (clamped - minH) / (maxH - minH);
    return 220 - percentage * 100; // returns top Y coordinate of the main pole body
  };

  const topY = mapHeightToSvg(height);
  const poleBaseY = 360;
  const poleWidth = 6;
  const poleX = 50 - poleWidth / 2;

  // Render correct SVG path/elements based on type
  const renderPoleElements = () => {
    switch (type) {
      case 't-bar':
        return (
          <g>
            {/* Pole base shaft */}
            <rect x={poleX} y={topY} width={poleWidth} height={poleBaseY - topY} fill="#4b5563" />
            <rect x={poleX - 1} y={topY} width={poleWidth + 2} height={4} fill="#6b7280" />
            
            {/* T-Bar */}
            <path d={`M ${50 - 24} ${topY - 4} L ${50 + 24} ${topY - 4}`} stroke={color} strokeWidth="5" strokeLinecap="square" />
            <path d={`M ${50 - 25} ${topY - 1} L ${50 + 25} ${topY - 1}`} stroke="#374151" strokeWidth="1" />
            
            {/* Lights */}
            <circle cx={50 - 20} cy={topY - 2} r="2.5" fill="#fff" />
            <circle cx={50 - 20} cy={topY - 2} r="6" fill={glowColor} opacity="0.65" className="glow" />
            
            <circle cx={50 + 20} cy={topY - 2} r="2.5" fill="#fff" />
            <circle cx={50 + 20} cy={topY - 2} r="6" fill={glowColor} opacity="0.65" className="glow" />
          </g>
        );

      case 'linear-frame':
        return (
          <g>
            <rect x={poleX} y={topY} width={poleWidth} height={poleBaseY - topY} fill="#4b5563" />
            
            {/* Open Frame structure */}
            <rect x={50 - 12} y={topY - 50} width="24" height="50" rx="2" fill="none" stroke={color} strokeWidth="4" />
            <rect x={50 - 10} y={topY - 45} width="20" height="40" rx="1" fill="none" stroke="#26262b" strokeWidth="1" />
            
            {/* Floating/Glow inside the frame */}
            <line x1={50} y1={topY - 45} x2={50} y2={topY - 5} stroke="#fff" strokeWidth="2.5" />
            <line x1={50} y1={topY - 45} x2={50} y2={topY - 5} stroke={glowColor} strokeWidth="7" opacity="0.7" className="glow" />
          </g>
        );

      case 'single-arm':
        return (
          <g>
            <rect x={poleX} y={topY} width={poleWidth} height={poleBaseY - topY} fill="#4b5563" />
            
            {/* Single horizontal arm to the right */}
            <path d={`M 50 ${topY + 10} Q 50 ${topY - 10} 72 ${topY - 10}`} fill="none" stroke={color} strokeWidth="4.5" strokeLinecap="round" />
            
            {/* Light head */}
            <path d={`M 70 ${topY - 12} L 78 ${topY - 10} L 76 ${topY - 6} L 68 ${topY - 8} Z`} fill="#1f2937" />
            <line x1="70" y1={topY - 7} x2="76" y2={topY - 7} stroke="#fff" strokeWidth="2" />
            <circle cx="73" cy={topY - 7} r="5" fill={glowColor} opacity="0.75" className="glow" />
          </g>
        );

      case 'double-arm':
        return (
          <g>
            <rect x={poleX} y={topY} width={poleWidth} height={poleBaseY - topY} fill="#4b5563" />
            
            {/* Left Arm */}
            <path d={`M 50 ${topY + 12} Q 50 ${topY - 8} 28 ${topY - 8}`} fill="none" stroke={color} strokeWidth="4" />
            <path d={`M 26 ${topY - 10} L 32 ${topY - 8} L 30 ${topY - 4} L 24 ${topY - 6} Z`} fill="#1f2937" />
            <line x1="26" y1={topY - 5} x2="30" y2={topY - 5} stroke="#fff" strokeWidth="1.5" />
            <circle cx="28" cy={topY - 5} r="4" fill={glowColor} opacity="0.7" className="glow" />

            {/* Right Arm */}
            <path d={`M 50 ${topY + 12} Q 50 ${topY - 8} 72 ${topY - 8}`} fill="none" stroke={color} strokeWidth="4" />
            <path d={`M 74 ${topY - 10} L 68 ${topY - 8} L 70 ${topY - 4} L 76 ${topY - 6} Z`} fill="#1f2937" />
            <line x1="70" y1={topY - 5} x2="74" y2={topY - 5} stroke="#fff" strokeWidth="1.5" />
            <circle cx="72" cy={topY - 5} r="4" fill={glowColor} opacity="0.7" className="glow" />
          </g>
        );

      case 'y-shaped':
        return (
          <g>
            <rect x={poleX} y={topY} width={poleWidth} height={poleBaseY - topY} fill="#4b5563" />
            
            {/* Y split */}
            <path d={`M 50 ${topY + 15} L 34 ${topY - 15}`} stroke={color} strokeWidth="4.5" strokeLinecap="round" />
            <path d={`M 50 ${topY + 15} L 66 ${topY - 15}`} stroke={color} strokeWidth="4.5" strokeLinecap="round" />
            
            {/* Left light */}
            <rect x="30" y={topY - 20} width="8" height="5" rx="1.5" fill="#1f2937" transform={`rotate(-25 34 ${topY - 17.5})`} />
            <circle cx="34" cy={topY - 17} r="2" fill="#fff" />
            <circle cx="34" cy={topY - 17} r="5" fill={glowColor} opacity="0.7" className="glow" />

            {/* Right light */}
            <rect x="62" y={topY - 20} width="8" height="5" rx="1.5" fill="#1f2937" transform={`rotate(25 66 ${topY - 17.5})`} />
            <circle cx="66" cy={topY - 17} r="2" fill="#fff" />
            <circle cx="66" cy={topY - 17} r="5" fill={glowColor} opacity="0.7" className="glow" />
          </g>
        );

      case 'inclined':
        return (
          <g>
            <rect x={poleX} y={topY} width={poleWidth} height={poleBaseY - topY} fill="#4b5563" />
            
            {/* Slanted head */}
            <line x1={50} y1={topY + 10} x2={68} y2={topY - 15} stroke={color} strokeWidth="5.5" strokeLinecap="round" />
            
            {/* Top light */}
            <circle cx="68" cy={topY - 15} r="2" fill="#fff" />
            <circle cx="68" cy={topY - 15} r="6" fill={glowColor} opacity="0.7" className="glow" />
          </g>
        );

      case 'angular':
        return (
          <g>
            <rect x={poleX} y={topY} width={poleWidth} height={poleBaseY - topY} fill="#4b5563" />
            
            {/* Sharp geometric angles */}
            <path d={`M 50 ${topY + 25} L 70 ${topY + 10} L 50 ${topY - 10}`} fill="none" stroke={color} strokeWidth="4" />
            <path d={`M 50 ${topY + 25} L 30 ${topY + 10} L 50 ${topY - 10}`} fill="none" stroke={color} strokeWidth="4" />
            
            <circle cx="50" cy={topY - 10} r="3" fill="#fff" />
            <circle cx="50" cy={topY - 10} r="7" fill={glowColor} opacity="0.8" className="glow" />
          </g>
        );

      case 'zigzag':
        return (
          <g>
            {/* Zigzag shape */}
            <path d={`M 50 ${poleBaseY} L 45 ${topY + 120} L 55 ${topY + 60} L 50 ${topY}`} fill="none" stroke="#4b5563" strokeWidth={poleWidth} strokeLinecap="round" strokeLinejoin="round" />
            
            {/* Cap & Light */}
            <circle cx="50" cy={topY} r="3" fill={color} />
            <circle cx="50" cy={topY} r="7" fill={glowColor} opacity="0.6" className="glow" />
          </g>
        );

      case 'diamond':
        return (
          <g>
            <rect x={poleX} y={topY} width={poleWidth} height={poleBaseY - topY} fill="#4b5563" />
            
            {/* Diamond frame */}
            <path d={`M 50 ${topY} L 65 ${topY - 20} L 50 ${topY - 40} L 35 ${topY - 20} Z`} fill="none" stroke={color} strokeWidth="3.5" />
            
            {/* Inside light element */}
            <circle cx="50" cy={topY - 20} r="3.5" fill="#fff" />
            <circle cx="50" cy={topY - 20} r="8" fill={glowColor} opacity="0.75" className="glow" />
          </g>
        );

      case 'slimline':
        return (
          <g>
            {/* Sweeping slim curve */}
            <path d={`M 50 ${poleBaseY} Q 50 ${topY + 40} 58 ${topY - 10}`} fill="none" stroke="#4b5563" strokeWidth="5" />
            
            {/* Glowing top */}
            <circle cx="58" cy={topY - 10} r="2.5" fill="#fff" />
            <circle cx="58" cy={topY - 10} r="6" fill={glowColor} opacity="0.7" className="glow" />
          </g>
        );

      case 'graceful-arc':
        return (
          <g>
            <rect x={poleX} y={topY + 20} width={poleWidth} height={poleBaseY - (topY + 20)} fill="#4b5563" />
            
            {/* Sweeping arc */}
            <path d={`M 50 ${topY + 30} C 50 ${topY - 30} 80 ${topY - 20} 78 ${topY + 15}`} fill="none" stroke={color} strokeWidth="4.5" strokeLinecap="round" />
            
            {/* Hanging lamp */}
            <path d={`M 75 ${topY + 15} L 81 ${topY + 15} L 83 ${topY + 23} L 73 ${topY + 23} Z`} fill="#1f2937" />
            <circle cx="78" cy={topY + 24} r="2" fill="#fff" />
            <circle cx="78" cy={topY + 24} r="6" fill={glowColor} opacity="0.75" className="glow" />
          </g>
        );

      case 'loop':
        return (
          <g>
            <rect x={poleX} y={topY} width={poleWidth} height={poleBaseY - topY} fill="#4b5563" />
            
            {/* Loop detailing at top */}
            <path d={`M 50 ${topY + 10} C 25 ${topY - 20} 75 ${topY - 20} 50 ${topY + 10}`} fill="none" stroke={color} strokeWidth="4" />
            
            <circle cx="50" cy={topY - 8} r="3" fill="#fff" />
            <circle cx="50" cy={topY - 8} r="7" fill={glowColor} opacity="0.75" className="glow" />
          </g>
        );

      case 'curved-cone':
        return (
          <g>
            <rect x={poleX} y={topY + 30} width={poleWidth} height={poleBaseY - (topY + 30)} fill="#4b5563" />
            
            {/* Curve */}
            <path d={`M 50 ${topY + 30} Q 50 ${topY - 15} 68 ${topY - 10}`} fill="none" stroke={color} strokeWidth="4.5" />
            
            {/* Cone cap */}
            <path d={`M 62 ${topY - 10} L 74 ${topY - 10} L 70 ${topY - 2} L 66 ${topY - 2} Z`} fill="#1f2937" />
            <ellipse cx="68" cy={topY - 1} rx="2" ry="1" fill="#fff" />
            <circle cx="68" cy={topY - 1} r="5" fill={glowColor} opacity="0.7" className="glow" />
          </g>
        );

      case 'spiral':
        return (
          <g>
            {/* Spiral helix effect using overlapping bezier curves */}
            <rect x={poleX} y={topY} width={poleWidth} height={poleBaseY - topY} fill="#374151" />
            <path d={`M 50 ${poleBaseY} C 40 ${poleBaseY - 50} 60 ${poleBaseY - 100} 50 ${poleBaseY - 150} C 40 ${poleBaseY - 200} 60 ${poleBaseY - 250} 50 ${topY}`} fill="none" stroke={color} strokeWidth="3" opacity="0.85" />
            
            {/* Cap & Glow */}
            <circle cx="50" cy={topY} r="3.5" fill="#fff" />
            <circle cx="50" cy={topY} r="8" fill={glowColor} opacity="0.85" className="glow" />
          </g>
        );

      case 'lattice':
        return (
          <g>
            <rect x={poleX} y={topY} width={poleWidth} height={poleBaseY - topY} fill="#4b5563" />
            
            {/* Lattice overlay */}
            <g opacity="0.8">
              {Array.from({ length: 12 }).map((_, i) => {
                const y = topY + i * 20 + 10;
                if (y < poleBaseY - 20) {
                  return (
                    <g key={i}>
                      <line x1={poleX} y1={y} x2={poleX + poleWidth} y2={y + 10} stroke={color} strokeWidth="1" />
                      <line x1={poleX + poleWidth} y1={y} x2={poleX} y2={y + 10} stroke={color} strokeWidth="1" />
                    </g>
                  );
                }
                return null;
              })}
            </g>
            
            {/* Top light */}
            <circle cx="50" cy={topY} r="3" fill="#fff" />
            <circle cx="50" cy={topY} r="7" fill={glowColor} opacity="0.7" className="glow" />
          </g>
        );

      case 'halo':
        return (
          <g>
            <rect x={poleX} y={topY} width={poleWidth} height={poleBaseY - topY} fill="#4b5563" />
            
            {/* Circular Ring at the top */}
            <ellipse cx="50" cy={topY - 20} rx="22" ry="7" fill="none" stroke={color} strokeWidth="4.5" />
            
            {/* Inner LED glow ring */}
            <ellipse cx="50" cy={topY - 20} rx="19" ry="5.5" fill="none" stroke="#fff" strokeWidth="1.5" />
            <ellipse cx="50" cy={topY - 20} rx="21" ry="6.5" fill="none" stroke={glowColor} strokeWidth="5.5" opacity="0.6" className="glow" />
          </g>
        );

      case 'spotlight':
        return (
          <g>
            <rect x={poleX} y={topY} width={poleWidth} height={poleBaseY - topY} fill="#4b5563" />
            
            {/* Cross mounting bar */}
            <line x1="38" y1={topY} x2="62" y2={topY} stroke="#1f2937" strokeWidth="4" />
            
            {/* Left Spotlight */}
            <g transform={`rotate(-30 40 ${topY})`}>
              <rect x="36" y={topY - 8} width="8" height="14" rx="2" fill="#111827" />
              <line x1="36" y1={topY + 6} x2="44" y2={topY + 6} stroke="#fff" strokeWidth="2.5" />
              <polygon points={`38,${topY + 7} 42,${topY + 7} 48,${topY + 25} 32,${topY + 25}`} fill={glowColor} opacity="0.45" className="glow" />
            </g>

            {/* Right Spotlight */}
            <g transform={`rotate(30 60 ${topY})`}>
              <rect x="56" y={topY - 8} width="8" height="14" rx="2" fill="#111827" />
              <line x1="56" y1={topY + 6} x2="64" y2={topY + 6} stroke="#fff" strokeWidth="2.5" />
              <polygon points={`58,${topY + 7} 62,${topY + 7} 68,${topY + 25} 52,${topY + 25}`} fill={glowColor} opacity="0.45" className="glow" />
            </g>
          </g>
        );

      case 'cubical':
        return (
          <g>
            <rect x={poleX} y={topY} width={poleWidth} height={poleBaseY - topY} fill="#4b5563" />
            
            {/* Cubical box frame */}
            <rect x={50 - 10} y={topY - 24} width="20" height="24" rx="1" fill="#1f2937" stroke={color} strokeWidth="2.5" />
            
            {/* Glow sections */}
            <rect x={50 - 7} y={topY - 21} width="14" height="18" fill="#fff" opacity="0.9" />
            <rect x={50 - 7} y={topY - 21} width="14" height="18" fill={glowColor} opacity="0.6" className="glow" />
          </g>
        );

      default:
        return null;
    }
  };

  return (
    <svg 
      viewBox="0 0 100 400" 
      className={`pole-svg ${className}`}
      style={{ width: '100%', height: '100%' }}
    >
      <defs>
        {/* Glow filter */}
        <filter id="glow-effect" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <style>
          {`
            .glow {
              filter: url(#glow-effect);
              animation: pulseGlow 3s ease-in-out infinite;
            }
          `}
        </style>
      </defs>

      {/* Ground Line */}
      <line x1="5" y1={poleBaseY + 10} x2="95" y2={poleBaseY + 10} stroke="#1f1f23" strokeWidth="2" strokeDasharray="3,3" />
      
      {/* Base Flange/Foundation */}
      <path d={`M ${50 - 15} ${poleBaseY + 10} L ${50 - 10} ${poleBaseY} L ${50 + 10} ${poleBaseY} L ${50 + 15} ${poleBaseY + 10} Z`} fill="#1f2937" stroke="#374151" strokeWidth="1" />
      <rect x={50 - 8} y={poleBaseY - 5} width="16" height="5" fill="#374151" />

      {/* Render selected pole type components */}
      {renderPoleElements()}
    </svg>
  );
}
