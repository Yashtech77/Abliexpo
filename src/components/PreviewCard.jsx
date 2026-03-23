import { ExpandIcon, PlayIcon } from './Icons'
import { previewCardOverlayClass } from './landingPageData'

function PreviewCard() {
  return (
    <div className="absolute bottom-14 right-8 hidden h-48 w-80 overflow-hidden border border-white/80 bg-[#6d523e]/40 shadow-2xl backdrop-blur-sm md:block lg:right-12">
      <div className={previewCardOverlayClass} />
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
