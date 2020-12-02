module.exports = {
	theme: {
		extend: {
			spacing: {
				'1': '5px',
				'2': '10px',
				'3': '15px',
				'4': '20px',
				'5': '25px',
				'6': '30px',
				'7': '35px',
				'8': '40px',
				'9': '45px',
				'10': '50px'
			},
			screens: {
				'tablet': '992px',
				light: { raw: "(prefers-color-scheme: light)" },
        dark: { raw: "(prefers-color-scheme: dark)" }
			},
			colors: {
				yellow: {
					light: '#fff3ac',
					DEFAULT: '#ffdb04',
					dark: '#b28000',
				}
			}
		},
		filter: { 
      'none': 'none',
      'grayscale': 'grayscale(1)',
      'invert': 'invert(1)',
			'sepia': 'sepia(1)',
			'blur': 'blur(5px)'
    },
    backdropFilter: { 
      'none': 'none',
      'blur': 'blur(20px)',
    },
	},
	variants: {
		scale: ['active', 'group-hover'],
		filter: ['responsive', 'hover', 'group-hover'],
		backdropFilter: ['responsive']
	},
	plugins: [
		require('tailwindcss-filters'),
		function({ addBase, config }) {
			addBase({
				body: {
					color: config("theme.colors.black"),
					backgroundColor: config("theme.colors.white")
				},
				"@screen dark": {
					body: {
						color: config("theme.colors.white"),
						backgroundColor: config("theme.colors.black")
					}
				}
			});
		}
	],
}
  