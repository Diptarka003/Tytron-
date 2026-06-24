export default function HeroBackground() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="rg1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C9A24B" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#C9A24B" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="rg2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#4498A0" stopOpacity="0.10" />
          <stop offset="100%" stopColor="#4498A0" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Slow drifting blobs */}
      <circle cx="15%" cy="30%" r="320" fill="url(#rg2)" className="hero-blob-1" />
      <circle cx="80%" cy="70%" r="260" fill="url(#rg1)" className="hero-blob-2" />
      <circle cx="60%" cy="20%" r="180" fill="url(#rg2)" className="hero-blob-3" />

      {/* Concentric ripple rings — top right */}
      <g opacity="0.18">
        <circle cx="82%" cy="18%" r="60"  fill="none" stroke="#C9A24B" strokeWidth="0.75" className="ring ring-1" />
        <circle cx="82%" cy="18%" r="110" fill="none" stroke="#C9A24B" strokeWidth="0.5"  className="ring ring-2" />
        <circle cx="82%" cy="18%" r="165" fill="none" stroke="#C9A24B" strokeWidth="0.4"  className="ring ring-3" />
        <circle cx="82%" cy="18%" r="225" fill="none" stroke="#C9A24B" strokeWidth="0.3"  className="ring ring-4" />
      </g>

      {/* Second ripple cluster — bottom left */}
      <g opacity="0.10">
        <circle cx="12%" cy="82%" r="50"  fill="none" stroke="#4498A0" strokeWidth="0.75" className="ring ring-2" />
        <circle cx="12%" cy="82%" r="95"  fill="none" stroke="#4498A0" strokeWidth="0.5"  className="ring ring-3" />
        <circle cx="12%" cy="82%" r="145" fill="none" stroke="#4498A0" strokeWidth="0.4"  className="ring ring-4" />
      </g>

      {/* Sparse floating dots */}
      <g fill="#C9A24B">
        <circle cx="25%" cy="55%" r="1.5" opacity="0.35" className="dot dot-1" />
        <circle cx="70%" cy="42%" r="1"   opacity="0.25" className="dot dot-2" />
        <circle cx="45%" cy="78%" r="1.5" opacity="0.30" className="dot dot-3" />
        <circle cx="88%" cy="55%" r="1"   opacity="0.20" className="dot dot-1" />
        <circle cx="55%" cy="15%" r="1.5" opacity="0.28" className="dot dot-2" />
        <circle cx="10%" cy="40%" r="1"   opacity="0.22" className="dot dot-3" />
      </g>
    </svg>
  );
}