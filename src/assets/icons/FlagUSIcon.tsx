const STRIPE_HEIGHT = 512 / 13

export function FlagUSIcon({ className }: { className?: string }) {
  const redStripes = [0, 2, 4, 6, 8, 10, 12]

  const stars: { cx: number; cy: number }[] = []
  const cols = 5
  const rows = 4
  const cantonW = 205
  const cantonH = STRIPE_HEIGHT * 7
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      stars.push({
        cx: (cantonW / (cols + 1)) * (c + 1),
        cy: (cantonH / (rows + 1)) * (r + 1),
      })
    }
  }

  return (
    <span className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        role="img"
        aria-hidden="true"
        className="block h-full w-full"
      >
        <defs>
          <clipPath id="flag-us-clip">
            <circle cx="256" cy="256" r="256" />
          </clipPath>
        </defs>
        <g clipPath="url(#flag-us-clip)">
          <rect width="512" height="512" fill="#fff" />
          {redStripes.map((i) => (
            <rect
              key={i}
              x="0"
              y={i * STRIPE_HEIGHT}
              width="512"
              height={STRIPE_HEIGHT}
              fill="#B22234"
            />
          ))}
          <rect x="0" y="0" width={cantonW} height={cantonH} fill="#3C3B6E" />
          {stars.map((s, idx) => (
            <circle key={idx} cx={s.cx} cy={s.cy} r="9" fill="#fff" />
          ))}
        </g>
      </svg>
    </span>
  )
}
