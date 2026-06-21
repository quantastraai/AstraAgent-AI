interface BrandLogoProps {
  variant?: 'full' | 'icon'
  className?: string
  iconHeight?: number
  wordmarkHeight?: number
}

export function BrandLogo({
  variant = 'full',
  className = '',
  iconHeight = 42,
  wordmarkHeight = 26,
}: BrandLogoProps) {
  if (variant === 'icon') {
    return (
      <img
        src="/brand/logo-icon.png"
        alt="AstraAgent AI"
        className={`brand-logo-img block object-contain ${className}`}
        style={{ height: iconHeight, width: 'auto' }}
        draggable={false}
      />
    )
  }

  return (
    <span className={`inline-flex items-center gap-3 leading-none ${className}`}>
      <img
        src="/brand/logo-icon.png"
        alt=""
        aria-hidden="true"
        className="brand-logo-img block shrink-0 object-contain"
        style={{ height: iconHeight, width: 'auto' }}
        draggable={false}
      />
      <img
        src="/brand/logo-wordmark.png"
        alt="AstraAgent AI"
        className="brand-logo-img hidden shrink-0 object-contain sm:block"
        style={{ height: wordmarkHeight, width: 'auto' }}
        draggable={false}
      />
    </span>
  )
}
