export function LoginIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6 stroke-current"
      fill="none"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8h-4" />
      <path d="M12 16h-4" />
      <path d="M10 12h8" />
      <path d="m15 9 3 3-3 3" />
    </svg>
  )
}

export function Chevron({ direction = 'left' }) {
  const rotation = direction === 'right' ? 'rotate-180' : ''

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={`h-8 w-8 stroke-current ${rotation}`}
      fill="none"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 5-7 7 7 7" />
    </svg>
  )
}

export function DownArrow() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-8 w-8 stroke-current"
      fill="none"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5v14" />
      <path d="m6 13 6 6 6-6" />
    </svg>
  )
}

export function PlayIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 fill-white"
    >
      <path d="M8 6.5v11l9-5.5-9-5.5Z" />
    </svg>
  )
}

export function ExpandIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6 stroke-white"
      fill="none"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 5h5v5" />
      <path d="M10 19H5v-5" />
      <path d="m19 5-7 7" />
      <path d="m5 19 7-7" />
    </svg>
  )
}
