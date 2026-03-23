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

export function CloseIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-8 w-8 stroke-current"
      fill="none"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 6 18 18" />
      <path d="M18 6 6 18" />
    </svg>
  )
}

export function FacebookIcon() {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3d65b4] text-3xl font-bold text-white">
      f
    </div>
  )
}

export function GoogleIcon() {
  return (
    <div className="grid h-10 w-10 place-items-center rounded-full bg-white text-[1.8rem] font-bold leading-none shadow-sm">
      <span className="bg-[conic-gradient(from_35deg,#4285f4_0deg,#4285f4_80deg,#34a853_80deg,#34a853_170deg,#fbbc05_170deg,#fbbc05_250deg,#ea4335_250deg,#ea4335_360deg)] bg-clip-text text-transparent">
        G
      </span>
    </div>
  )
}

export function LinkedInIcon() {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0a86c8] text-2xl font-bold text-white">
      in
    </div>
  )
}

export function SelectArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="h-5 w-5 fill-current"
    >
      <path d="m5.5 7.5 4.5 5 4.5-5" />
    </svg>
  )
}
