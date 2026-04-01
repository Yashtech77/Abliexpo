export const navigationItems = [
  { label: 'Home', page: 'home' },
  { label: 'Exhibitions', page: 'exhibitions' },
  { label: 'About Us', page: 'about' },
  { label: 'Contact Us', page: 'contact' },
  { label: 'Past Events', page: 'past-events' },
]

export const authActions = [
  { label: 'Get Started', action: 'register', isPrimary: true },
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

export const homeHeroContent = {
  title: 'Bringing The World Market To Your Screen',
  subtitle:
    'Explore, engage, and experience exhibitions like never before. The future of global trade is editorial, immersive, and always within reach.',
  ctaLabel: 'Get Started',
  eyebrow: 'Trending Now',
  visualBadge: 'Live keynote streaming',
}

export const homeShowcaseCards = [
  {
    title: 'Global Tech Summit',
    date: 'October 12-14, 2024',
    category: 'Tech - Innovation',
    status: 'Live',
    artClassName:
      'bg-[linear-gradient(180deg,rgba(11,29,51,0.1),rgba(11,29,51,0.55)),radial-gradient(circle_at_72%_24%,rgba(255,208,171,0.55),transparent_24%),linear-gradient(135deg,#8ebfe0_0%,#244964_44%,#102234_100%)]',
  },
  {
    title: 'Design Week Milano',
    date: 'October 12-14, 2024',
    category: 'Design - Interior',
    status: 'Offline',
    artClassName:
      'bg-[linear-gradient(180deg,rgba(34,26,17,0.1),rgba(34,26,17,0.5)),radial-gradient(circle_at_50%_16%,rgba(255,246,227,0.5),transparent_18%),linear-gradient(135deg,#d8cab8_0%,#6d594a_42%,#221a13_100%)]',
  },
  {
    title: 'Global Tech Summit',
    date: 'October 12-14, 2024',
    category: 'Tech - Innovation',
    status: 'Live',
    artClassName:
      'bg-[linear-gradient(180deg,rgba(8,26,45,0.12),rgba(8,26,45,0.6)),radial-gradient(circle_at_68%_20%,rgba(255,205,166,0.5),transparent_22%),linear-gradient(135deg,#b2d4e8_0%,#345970_40%,#12273a_100%)]',
  },
  {
    title: 'Auto-X Expo 2024',
    date: 'October 12-14, 2024',
    category: 'Auto - Cars',
    status: 'Upcoming',
    artClassName:
      'bg-[linear-gradient(180deg,rgba(16,20,38,0.08),rgba(16,20,38,0.6)),radial-gradient(circle_at_24%_24%,rgba(255,65,104,0.6),transparent_24%),linear-gradient(135deg,#19263f_0%,#422f4d_36%,#101927_100%)]',
  },
]

export const contactPageContent = {
  eyebrow: 'Contact Us',
  title: "Let's plan your next virtual expo",
  description:
    'Share your goals, questions, or partnership ideas and our team will help you get started with the right setup.',
  details: [
    {
      label: 'Email',
      value: 'hello@ekspansexpo.com',
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
