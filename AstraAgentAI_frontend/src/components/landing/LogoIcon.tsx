export function LogoIcon({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="8" fill="url(#logoGrad)" />
      <path
        d="M10 22V10h4.2c2.8 0 4.6 1.5 4.6 3.8 0 1.6-.9 2.8-2.3 3.4L22 22h-3.4l-4.2-4.2H13.4V22H10zm3.4-7.2h.8c1.1 0 1.7-.5 1.7-1.3 0-.8-.6-1.3-1.7-1.3h-.8v2.6z"
        fill="#09090B"
      />
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="32" y2="32">
          <stop stopColor="#D4AF37" />
          <stop offset="1" stopColor="#B8962E" />
        </linearGradient>
      </defs>
    </svg>
  )
}
