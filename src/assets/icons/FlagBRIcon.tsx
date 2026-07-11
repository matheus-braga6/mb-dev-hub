export function FlagBRIcon({ className }: { className?: string }) {
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
          <clipPath id="flag-br-clip">
            <circle cx="256" cy="256" r="256" />
          </clipPath>
        </defs>
        <g clipPath="url(#flag-br-clip)">
          <rect width="512" height="512" fill="#009B3A" />
          <polygon points="256,64 464,256 256,448 48,256" fill="#FEDF00" />
          <circle cx="256" cy="256" r="88" fill="#002776" />
          <path
            d="M181 232a190 190 0 0 1 150 40"
            fill="none"
            stroke="#fff"
            strokeWidth="20"
          />
        </g>
      </svg>
    </span>
  )
}
