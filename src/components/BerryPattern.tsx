// Decorative açaí berries scattered along the page edges.
const berries = [
  { cx: 4, cy: 8, r: 3.2 }, { cx: 9, cy: 5, r: 2.4 }, { cx: 7, cy: 13, r: 2.8 },
  { cx: 95, cy: 18, r: 3 }, { cx: 91, cy: 23, r: 2.2 }, { cx: 97, cy: 26, r: 2.6 },
  { cx: 3, cy: 52, r: 2.6 }, { cx: 6, cy: 57, r: 3.4 }, { cx: 94, cy: 64, r: 3.2 },
  { cx: 98, cy: 70, r: 2.4 }, { cx: 5, cy: 88, r: 3 }, { cx: 92, cy: 93, r: 2.8 },
]

export function BerryPattern() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="berry" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#9B6BC9" />
          <stop offset="100%" stopColor="#5B2A86" />
        </radialGradient>
      </defs>
      <g opacity="0.12">
        {berries.map((berry, index) => (
          <circle key={index} cx={berry.cx} cy={berry.cy} r={berry.r} fill="url(#berry)" />
        ))}
      </g>
    </svg>
  )
}
