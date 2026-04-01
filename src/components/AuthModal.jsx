import { useEffect } from 'react'
import {
  CloseIcon,
  FacebookIcon,
  GoogleIcon,
  LinkedInIcon,
  SelectArrowIcon,
} from './Icons'
import { authModalContent, socialProviders } from '../data/siteContent'

const socialIcons = {
  facebook: FacebookIcon,
  google: GoogleIcon,
  linkedin: LinkedInIcon,
}

function SocialAuthButton({ provider }) {
  const Icon = socialIcons[provider.id]

  return (
    <button
      type="button"
      className="flex w-full items-center gap-4 border border-[#edf1f7] bg-white px-5 py-4 text-left text-[0.95rem] font-semibold text-[#1f73ea] shadow-[0_2px_12px_rgba(10,21,40,0.03)] transition hover:border-[#dce5f4] hover:bg-[#fbfcff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5b7fcf]"
    >
      <Icon />
      <span>{provider.label}</span>
    </button>
  )
}

function AuthField({ field }) {
  return (
    <label key={field.id} className="block">
      <span className="sr-only">{field.placeholder}</span>
      <input
        id={field.id}
        type={field.type}
        placeholder={field.placeholder}
        autoComplete={field.autoComplete}
        className="h-16 w-full border border-[#d7dfea] bg-[#f7f9fd] px-4 text-[1rem] text-[#1f2733] placeholder:text-[#b9c0cb] focus:border-[#5b7fcf] focus:bg-white focus:outline-none"
      />
    </label>
  )
}

function LoginForm({ content, onToggleView, onSubmit }) {
  return (
    <>
      <div className={`${content.bodySpacingClassName} space-y-6`}>
        {socialProviders.map((provider) => (
          <SocialAuthButton key={provider.id} provider={provider} />
        ))}
      </div>

      <div className="my-5 flex items-center gap-4 text-[#2c3138]">
        <div className="h-px flex-1 bg-[#d9d9d9]" />
        <span className="text-[1.1rem] font-medium uppercase tracking-[0.14em]">
          OR
        </span>
        <div className="h-px flex-1 bg-[#d9d9d9]" />
      </div>

      <form className="space-y-5" onSubmit={onSubmit}>
        {content.fields.map((field) => (
          <AuthField key={field.id} field={field} />
        ))}

        <button
          type="submit"
          className="mt-4 h-[4.1rem] w-full rounded-full bg-[#5b7fcf] text-[1rem] font-semibold text-white shadow-[0_18px_30px_rgba(65,101,178,0.28)] transition hover:bg-[#6789d7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5b7fcf]"
        >
          {content.submitLabel}
        </button>
      </form>

      <p className="mt-10 text-center text-[1rem] text-[#8391aa]">
        {content.footerPrefix}{' '}
        <button
          type="button"
          onClick={onToggleView}
          className="font-semibold text-[#4f78c7] transition hover:text-[#325daa]"
        >
          {content.footerAction}
        </button>
      </p>
    </>
  )
}

function RegisterForm({ content, onToggleView, onSubmit }) {
  return (
    <>
      {content.subtitle ? (
        <p className="mt-1 text-center text-[1rem] font-semibold text-[#34d01f]">
          {content.subtitle}
        </p>
      ) : null}

      <form className={`${content.bodySpacingClassName} space-y-5`} onSubmit={onSubmit}>
        {content.fields.slice(0, 1).map((field) => (
          <AuthField key={field.id} field={field} />
        ))}

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-[1.05fr_0.95fr]">
          <label className="relative block">
            <span className="sr-only">Country</span>
            <select
              defaultValue={content.countryOptions[0]}
              className="h-16 w-full appearance-none rounded-[0.25rem] border border-[#a9b0b8] bg-[#f7f9fd] px-4 pr-12 text-[1rem] text-[#39414d] focus:border-[#5b7fcf] focus:bg-white focus:outline-none"
            >
              {content.countryOptions.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[#8e9399]">
              <SelectArrowIcon />
            </span>
          </label>

          <AuthField field={content.mobileField} />
        </div>

        {content.fields.slice(1).map((field) => (
          <AuthField key={field.id} field={field} />
        ))}

        <label className="flex items-center gap-3 pt-1 text-[0.95rem] text-[#20252d]">
          <input
            type="checkbox"
            className="h-[1.1rem] w-[1.1rem] rounded border border-[#6f7680] text-[#5b7fcf] focus:ring-2 focus:ring-[#5b7fcf]"
          />
          <span>
            {content.termsLabel}{' '}
            <button
              type="button"
              className="text-[#4f78c7] underline underline-offset-2"
            >
              {content.termsAction}
            </button>
          </span>
        </label>

        <div className="border border-[#d9d9d9] bg-white px-5 py-3.5 shadow-[0_2px_8px_rgba(10,21,40,0.05)] sm:w-[25rem]">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-4 pt-2">
              <div className="h-10 w-10 border-2 border-[#6f6f6f] bg-white" />
              <div>
                <p className="text-[1rem] text-[#20252d]">
                  {content.captchaLabel}
                </p>
                <p className="mt-1 max-w-[13rem] text-[0.76rem] leading-tight text-[#5e5e5e]">
                  reCAPTCHA is changing its terms of service. Take action.
                </p>
              </div>
            </div>

            <div className="min-w-[4.5rem] text-right text-[0.78rem] leading-tight text-[#6b7280]">
              <div className="text-[2.2rem] leading-none text-[#4d7bd4]">
                ↻
              </div>
              <p className="font-medium uppercase tracking-[0.04em]">
                reCAPTCHA
              </p>
              <p>Privacy - Terms</p>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="mt-5 h-[5rem] w-full rounded-full bg-[#5b7fcf] text-[1.05rem] font-semibold text-white shadow-[0_18px_30px_rgba(65,101,178,0.28)] transition hover:bg-[#6789d7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5b7fcf]"
        >
          {content.submitLabel}
        </button>
      </form>

      <p className="mt-10 text-center text-[1rem] text-[#8391aa]">
        {content.footerPrefix}{' '}
        <button
          type="button"
          onClick={onToggleView}
          className="font-semibold text-[#4f78c7] transition hover:text-[#325daa]"
        >
          {content.footerAction}
        </button>
      </p>
    </>
  )
}

function AuthModal({ authView, onClose, onToggleView }) {
  useEffect(() => {
    if (!authView) {
      document.body.style.overflow = ''
      return undefined
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [authView, onClose])

  if (!authView) {
    return null
  }

  const content = authModalContent[authView]

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-[2px]"
      aria-hidden={false}
    >
      <button
        type="button"
        aria-label="Close authentication modal"
        onClick={onClose}
        className="absolute right-5 top-5 text-white transition hover:text-[#dbe5ff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <CloseIcon />
      </button>

      <div
        className="flex min-h-screen items-center justify-center px-4 py-6"
        onClick={onClose}
      >
        <section
          role="dialog"
          aria-modal="true"
          aria-labelledby="auth-modal-title"
          className={`w-full bg-white text-[#1f2733] shadow-[0_20px_60px_rgba(0,0,0,0.35)] ${content.panelClassName}`}
          onClick={(event) => event.stopPropagation()}
        >
          <h2
            id="auth-modal-title"
            className={`font-semibold tracking-[-0.03em] text-[#4f78c7] ${content.titleClassName}`}
          >
            {content.title}
          </h2>

          {authView === 'register' ? (
            <RegisterForm
              content={content}
              onToggleView={onToggleView}
              onSubmit={handleSubmit}
            />
          ) : (
            <LoginForm
              content={content}
              onToggleView={onToggleView}
              onSubmit={handleSubmit}
            />
          )}
        </section>
      </div>
    </div>
  )
}

export default AuthModal
