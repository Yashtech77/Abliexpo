import { useMemo, useRef, useState } from 'react'
import { CloseIcon, ExpandIcon, VolumeIcon, VolumeOffIcon } from './Icons'

function VideoFrame({
  poster,
  videoSrc,
  isMuted,
  onToggleMute,
  onExpand,
  className = '',
  showExpand = true,
}) {
  const videoRef = useRef(null)
  const [hasVideoError, setHasVideoError] = useState(false)

  return (
    <div className={`relative overflow-hidden rounded-[2rem] bg-[#0d2337] ${className}`}>
      {!hasVideoError ? (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          poster={poster}
          preload="metadata"
          onError={() => setHasVideoError(true)}
          className="h-full w-full cursor-pointer object-cover"
          onClick={onExpand}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : (
        <img
          src={poster}
          alt="Virtual exhibition stage"
          className="h-full w-full cursor-pointer object-cover"
          onClick={onExpand}
        />
      )}

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,10,18,0.12),rgba(2,10,18,0.56))]" />

      {showExpand ? (
        <button
          type="button"
          aria-label="Open fullscreen video"
          onClick={onExpand}
          className="absolute right-5 top-5 grid h-12 w-12 place-items-center rounded-2xl bg-slate-950/38 text-white shadow-lg backdrop-blur-md transition hover:bg-slate-950/52"
        >
          <ExpandIcon />
        </button>
      ) : null}

      <button
        type="button"
        aria-label={isMuted ? 'Unmute video' : 'Mute video'}
        onClick={onToggleMute}
        className="absolute bottom-6 right-6 grid h-14 w-14 place-items-center rounded-2xl bg-white text-slate-700 shadow-lg transition hover:bg-sky-50"
      >
        {isMuted ? <VolumeOffIcon /> : <VolumeIcon />}
      </button>
    </div>
  )
}

function HeroMediaPlayer({ poster, badgeLabel }) {
  const [isMuted, setIsMuted] = useState(true)
  const [isExpanded, setIsExpanded] = useState(false)
  const videoSrc = useMemo(
    () =>
      'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    [],
  )

  return (
    <>
      <div className="relative mx-auto w-full max-w-[749px] overflow-hidden rounded-[2rem] border border-white/70 bg-[#0d2337] opacity-100 shadow-[0_20px_60px_rgba(56,189,248,0.18)]">
        <VideoFrame
          poster={poster}
          videoSrc={videoSrc}
          isMuted={isMuted}
          onToggleMute={() => setIsMuted((current) => !current)}
          onExpand={() => setIsExpanded(true)}
          className="h-[22rem] sm:h-[24rem] lg:h-[373.5px]"
        />

        <div className="pointer-events-none absolute left-8 top-6 rounded-full bg-white/82 px-4 py-2 text-sm font-medium text-slate-700 shadow-lg backdrop-blur-md">
          {badgeLabel}
        </div>
      </div>

      {isExpanded ? (
        <div className="fixed inset-0 z-50 bg-slate-950/72 px-4 py-6 backdrop-blur-md sm:px-8 lg:px-12">
          <div className="mx-auto flex h-full max-w-[1250px] items-center justify-center">
            <div className="relative w-full overflow-hidden rounded-[2.4rem] border border-sky-200/50 bg-slate-950 shadow-[0_30px_90px_rgba(2,12,27,0.45)]">
              <VideoFrame
                poster={poster}
                videoSrc={videoSrc}
                isMuted={isMuted}
                onToggleMute={() => setIsMuted((current) => !current)}
                onExpand={() => {}}
                className="aspect-[1250/627] max-h-[80vh]"
                showExpand={false}
              />

              <button
                type="button"
                aria-label="Close fullscreen video"
                onClick={() => setIsExpanded(false)}
                className="absolute right-5 top-5 grid h-12 w-12 place-items-center rounded-2xl bg-slate-950/40 text-white shadow-lg backdrop-blur-md transition hover:bg-slate-950/58"
              >
                <CloseIcon />
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default HeroMediaPlayer
