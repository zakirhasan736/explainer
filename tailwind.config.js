/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./*.html'],
	theme: {
		screens: {
			xl: { max: '1920px' },
			'desktop-l': { max: '1880px' },
			'desktop-m': { max: '1680px' },
			'laptop-x': { max: '1440px' },
			'laptop-m': { max: '1280px' },
			'aspect-pc': { min: '992px' },
			lg: { max: '1170px' },
			md: { max: '991px' },
			sm: { max: '767px' },
			xs: { max: '375px' },
			'2xl': '1921px',
			DEFAULT: '1440px',
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '80px',
				xl: '3rem',
				lg: '3rem',
				md: '30px',
				sm: '18px',
				xs: '10px',
			},
		},
		fontFamily: {
			primary: ['Rubik', 'sans-serif'],
		},
		fontSize: {
			'large-title': '96px',
			'large-title-lp-m': '92px',
			'large-title-lg': '77px',
			'large-title-sm': '46px',
			'primary-heading': '72px',
			'secondary-heading': '64px',
			'secondary-heading2': '60px',
			'text-extra-large': '36px',
			'text--large': '22px',
			'body-text': '20px',
			'text-extra-large': '36px',
			'text-medium': '18px',
			'text-small': '16px',
			'text-xs-small': '14px',
			'text-extra-small': '12px',
			base: '1rem',
			xl: '1.25rem',
			'2xl': '1.563rem',
			'3xl': '1.953rem',
			'4xl': '2.441rem',
			'5xl': '3.052rem',
		},
		extend: {
			colors: {
				primary: '#0F172A',
				primary2: '#2B2B2B',
				secondary: '#00C',
				secondary2: '#377AFF',
				'neu-btn-color': '#377AFF',
				'neu-btn-hover-color': '#2563EB',
				'neu-black': '#2B2B2B',
				'neu-gray': '#C4C4C4',
				'neu-white': '#ffffff',
				title: '#1B1B1D',
				'tab-para': '#333333',
				gray: '#F5F8F9',
				'gray-light': '#E5E6E9',
				'gray-extra-light': '#E5E5E5',
				slate: '#33415C',
				meta: '#9C9C9C',
				body: '#F0F8FF',
				sky: '#012A5E',
				// ===============
				'primary-color-100': '#00148B',
				'primary-color-80': '#540000',
				'primary-color-70': '#fda2bc',
				'primary-color-50': '#ffc6bb',
				'primary-color-30': '#fee7e6',

				'primary-terty-color-100': '#000951',
				'primary-terty-color-80': '#0000cc',
				'primary-terty-color-50': '#e9eaff',
				'primary-terty-color-30': '#f0f8ff',

				'primary-accent-color-100': '#403140',

				'secondary-color-100': '#e26200',
				'secondary-color-30': '#fdf4e2',

				'secondary-color-100': '#5c00a4',
				'secondary-color-30': '#f8e4f8',

				'secondary-color-100': '#326416',
				'secondary-color-30': '#e3f5ed',

				'secondary-color-100': '#862700',
				'secondary-color-30': '#f1e5e3',

				'secondary-color-100': '#2667bd',
				'secondary-color-30': '#c9e9ff',

				'white-color': '#ffffff',

				'body-text-color': '#403140',
				'body-title-color': '#E40000',
			},
			backgroundImage: {
				'inner-cta':
					"linear-gradient( 90deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.42) 61.04%, rgba(0, 0, 0, 0.24) 83.04%), url('../images/inner-content-bg.jpg')",
			},
		},
	},
};
