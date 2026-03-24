export const navigationItems = [
  { label: 'Home', page: 'home' },
  { label: 'Contact Us', page: 'contact' },
]

export const authActions = [
  { label: 'Login', isPrimary: true },
  { label: 'Register', isPrimary: false },
]

export const authModalContent = {
  login: {
    variant: 'login',
    title: 'Login',
    panelClassName: 'max-w-[32rem] px-5 py-7 sm:px-6',
    titleClassName: 'text-[2.25rem]',
    bodySpacingClassName: 'mt-10',
    submitLabel: 'Send OTP',
    footerPrefix: "Don't have an account?",
    footerAction: 'Register Now',
    fields: [
      {
        id: 'login-identifier',
        type: 'text',
        placeholder: 'Mobile Number / Email ID',
        autoComplete: 'username',
      },
    ],
  },
  register: {
    variant: 'register',
    title: 'Register',
    subtitle: '(100% free)',
    panelClassName: 'max-w-[37rem] px-6 py-6 sm:px-6',
    titleClassName: 'text-center text-[2rem]',
    bodySpacingClassName: 'mt-4',
    submitLabel: 'Register',
    footerPrefix: 'Already have an account?',
    footerAction: 'Login',
    fields: [
      {
        id: 'register-name',
        type: 'text',
        placeholder: 'Full Name*',
        autoComplete: 'name',
      },
      {
        id: 'register-email',
        type: 'text',
        placeholder: 'Email*',
        autoComplete: 'email',
      },
      {
        id: 'register-company-name',
        type: 'text',
        placeholder: 'Company Name*',
        autoComplete: 'organization',
      },
    ],
    mobileField: {
      id: 'register-mobile',
      type: 'tel',
      placeholder: 'Mobile*',
      autoComplete: 'tel',
    },
    countryOptions: ['India'],
    termsLabel: 'I accept',
    termsAction: 'Terms and Conditions.',
    captchaLabel: "I'm not a robot",
  },
}

export const socialProviders = [
  { id: 'facebook', label: 'Continue with Facebook' },
  { id: 'google', label: 'Continue with Google' },
  { id: 'linkedin', label: 'Continue with LinkedIn' },
]

export const heroBackgroundLayers = [
  'absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(25,57,95,0.3),_transparent_34%),linear-gradient(90deg,_rgba(2,10,16,0.96),_rgba(8,17,25,0.8)_72%,_rgba(64,49,34,0.35))]',
  'absolute inset-y-0 left-1/2 w-[62rem] -translate-x-[58%] rounded-full bg-[radial-gradient(circle,_rgba(25,84,143,0.3)_0%,_rgba(4,13,22,0.94)_45%,_rgba(3,9,15,0)_68%)] blur-sm',
  'absolute left-1/2 top-[8%] h-[72rem] w-[72rem] -translate-x-1/2 rounded-full border border-white/10 opacity-25',
  'absolute left-[13%] top-[10%] h-[55rem] w-[55rem] rounded-full bg-[radial-gradient(circle,_rgba(119,186,255,0.12)_0%,_rgba(16,33,54,0.08)_34%,_transparent_65%)] blur-3xl',
  'absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-position:center] [background-size:130px_130px]',
  'absolute inset-y-0 right-0 w-[22%] bg-[linear-gradient(90deg,rgba(7,21,34,0)_0%,rgba(114,86,58,0.22)_100%)]',
]

export const heroContent = {
  title: 'Your Gateway to the Global Market',
  subtitle: 'Virtual world of Exhibitions. Flash sale. Webinars.',
  ctaLabel: 'Register',
}

export const contactPageContent = {
  eyebrow: 'Contact Us',
  title: "Let's plan your next virtual expo",
  description:
    'Share your goals, questions, or partnership ideas and our team will help you get started with the right setup.',
  details: [
    {
      label: 'Email',
      value: 'hello@abliexpo.com',
    },
    {
      label: 'Phone',
      value: '+91 98765 43210',
    },
    {
      label: 'Office',
      value: 'Mumbai, India',
    },
  ],
  formFields: [
    { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Your name' },
    {
      id: 'email',
      label: 'Email Address',
      type: 'email',
      placeholder: 'name@company.com',
    },
    {
      id: 'company',
      label: 'Company',
      type: 'text',
      placeholder: 'Your company',
    },
  ],
  messageField: {
    id: 'message',
    label: 'How can we help?',
    placeholder: 'Tell us what you are looking for.',
  },
  submitLabel: 'Send Message',
}

export const sliderControls = [
  { direction: 'left', label: 'Previous slide', position: 'left-6' },
  { direction: 'right', label: 'Next slide', position: 'right-6' },
]

export const previewCardOverlayClass =
  'absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(0,0,0,0.15)),radial-gradient(circle_at_25%_20%,rgba(255,205,156,0.35),transparent_35%),linear-gradient(120deg,rgba(34,25,21,0.7),rgba(149,87,59,0.45))]'
