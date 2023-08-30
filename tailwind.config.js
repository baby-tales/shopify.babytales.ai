module.exports = {
  prefix: 'twcss-',
  content: [
    './layout/*.liquid',
    './templates/*.liquid',
    './templates/customers/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
  ],
  theme: {
    screens: {
      sm: '320px',
      md: '750px',
      lg: '990px',
      xlg: '1440px',
      x2lg: '1920px',
      pageMaxWidth: '1440px',
    },
    fontFamily: {
      headings: ['"dingpro"'],
      sans: ['"museo-sans"'],
      body: ['"museo-sans"'],
    },
    extend: {
      colors: {
        blue: {
          light: '#85D7FF',
          DEFAULT: '#1FB6FF',
          dark: '#009EEB',
        },
        red: {
          light: '#FF9E7C',
          DEFAULT: '#FF7849',
          dark: '#FF5216',
        },
        yellow: {
          light: '#FFD55F',
          DEFAULT: '#FFC82C',
          dark: '#F8B700',
        },
        green: {
          light: '#29EB7F',
          DEFAULT: '#13CE66',
          dark: '#0F9F4F',
        },
        pink: {
          light: '#FF7CE5',
          DEFAULT: '#FF49DB',
          dark: '#FF16D1',
        },
        purple: {
          light: '#A389F4',
          DEFAULT: '#7E5BEF',
          dark: '#592DEA',
        },
        smoke: {
          light: '#E0E6ED',
          DEFAULT: '#D3DCE6',
          dark: '#C0CCDA',
        },
        snow: {
          light: '#F9FAFC',
          DEFAULT: '#EFF2F7',
          dark: '#E5E9F2',
        },
        silver: {
          DEFAULT: '#8492A6',
        },
        slate: {
          DEFAULT: '#3C4858',
        },
        steel: {
          DEFAULT: '#273444',
        },
        black: {
          DEFAULT: '#1F2D3D',
        },
        white: {
          DEFAULT: '#FFFFFF',
        },
      },
      backgroundImage: {
        hero: "url('/images/hero-bg.jpg')",
        page: "url('/images/page-bg.jpg')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};
