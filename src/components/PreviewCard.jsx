import { ExpandIcon, PlayIcon } from './Icons'

function PreviewCard() {
  return (
    <div className="absolute bottom-14 right-8 hidden h-48 w-80 overflow-hidden border border-white/80 bg-[#6d523e]/40 shadow-2xl backdrop-blur-sm md:block lg:right-12">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(0,0,0,0.15)),radial-gradient(circle_at_25%_20%,rgba(255,205,156,0.35),transparent_35%),linear-gradient(120deg,rgba(34,25,21,0.7),rgba(149,87,59,0.45))]" />
      <div className="absolute right-4 top-4">
        <ExpandIcon />
      </div>
      <div className="absolute inset-x-0 bottom-14 text-center text-2xl font-semibold tracking-[0.1em] text-white/90">
        and ONLINE!
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black/80 ring-4 ring-white/10">
          <PlayIcon />
        </div>
      </div>
    </div>
  )
}

export default PreviewCard
