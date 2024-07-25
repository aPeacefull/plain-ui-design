import { access } from "fs";
import { colors, typography, zIndices } from "./tokens";
import { numbers } from "./tokens";
import { spawn } from "child_process";

export const themeLight = {

		colors: {
			background: {
				background: {
					primary: colors.white,
					secondary: colors.grey[50],
					control: colors.grey[100],
				},
				extentions: {
					stateActive: colors.grey[200],
					stateDisabled: colors.grey[100],
					overlay: "hsla(220,23%,7%, 0.32)",
					staticWhite: colors.white,
					staticBlack: colors.black,
					primaryInverse: colors.grey[900],
					accentStateDisabled: colors.brand[100],

					subtleAccent: colors.brand[50],
					accent: colors.brand[400],
					accentStateActive: colors.brand[500],

					subtleNegative: colors.red[50],
					highNegative: colors.red[100],
					mediumNegative: colors.red[400],
					negative: colors.red[500],

					subtleWarning: colors.yellow[50],
					highWarning: colors.yellow[100],
					mediumWarning: colors.yellow[400],
					warning: colors.yellow[500],

					subtlePositive: colors.green[50],
					highPositive: colors.green[100],
					mediumPositive: colors.green[400],
					positive: colors.green[500],

					subtleTeal: colors.teal[50],
					highTeal: colors.teal[100],
					mediumTeal: colors.teal[400],
					teal: colors.teal[500],

					subtlePurple: colors.purple[50],
					highPurple: colors.purple[100],
					mediumPurple: colors.purple[400],
					purple: colors.purple[500],

					subtleMagenta: colors.magenta[50],
					highMagenta: colors.magenta[100],
					mediumMagenta: colors.magenta[400],
					magenta: colors.magenta[500],	
				},
			},

			content: {
				content: {
					primary: colors.grey[800],
					secondary: colors.grey[700],
					tertiary: colors.grey[500],
				},
				extentions: {
					primaryOnColor: colors.white,
					staticWhite: colors.white,
					stateDisabled: colors.grey[300],

					accent: colors.brand[500],
					accentStateActive: colors.brand[600],
					negative: colors.red[500],
					warning: colors.yellow[500],
					positive: colors.green[500],
					teal: colors.teal[500],
					purple: colors.purple[500],
					magenta: colors.magenta[500],
				},
			},

			border: {
				border: {
					opaque: colors.grey[200],
				},
				extentions: {
					transparent: "hsla(220,23%,7%, 0.08)",
					stateActive: colors.grey[800],
					stateDisabled: colors.grey[50],

					highAccent: colors.brand[100],
					accent: colors.brand[400],
					accentStateActive: colors.brand[600],

					highNegative: colors.red[100],
					negative: colors.red[500],
					highWarning: colors.yellow[100],
					warning: colors.yellow[500],
					highPositive: colors.green[100],
					positive: colors.green[500],

					highTeal: colors.teal[100],
					teal: colors.teal[500],
					highPurple: colors.purple[100],
					purple: colors.purple[500],
					highMagenta: colors.magenta[100],
					magenta: colors.magenta[500],
				},
			},
	},

	spacing: {
		noGap: 0,
		closest: numbers[2],
		close: numbers[4],
		related: numbers[8],
		grouped: numbers[16],
		subSections: numbers[24],
		sections: numbers[32],
		distant: numbers[52],
		distantSeparated: numbers[72],
		distantIndependant: numbers[96],
	},

	shadows: {
		focus: `0px 0px 0px 4px var(--border-border-purple, #6D59E8)`,
		shallowUp: `0px -2px 16px 0px rgba(14, 16, 22, 0.10)`,
		shallowDown: `0px 2px 16px 0px rgba(14, 16, 22, 0.10)`,
		deepUp: `0px -8px 26px 0px rgba(14, 16, 22, 0.16)`,
		deepDown: `0px 8px 26px 0px rgba(14, 16, 22, 0.16)`,
	},

	typography: {
		family: {
			base: `-apple-system, BlinkMacSystemFont, 'Open Sans', 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';`,
			heading: `-apple-system, BlinkMacSystemFont, 'EB Garamond', 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';`,
			monospace: `'SFMono-Medium', 'SF Mono', 'Segoe UI Mono', 'Roboto Mono', 'Ubuntu Mono', Menlo, Consolas, Courier, monospace`,
		},
		fontSize: {
			hero: typography.size.hero,
			h1: typography.size.h1,
			h2: typography.size.h2,
			h3: typography.size.h3,
			h4: typography.size.h4,
			h5: typography.size.h5,
			h6: typography.size.h6,
			large: typography.size.large,
			base: typography.size.base,
			label: typography.size.label,
			labelSmall: typography.size.labelSmall,
			xSmall: typography.size.xSmall,
		},

		lineHeight: {
			hero: typography.lineHeight.hero,
			h1: typography.lineHeight.h1,
			h2: typography.lineHeight.h2,
			h3: typography.lineHeight.h3,
			h4: typography.lineHeight.h4,
			h5: typography.lineHeight.h5,
			h6: typography.lineHeight.h6,
			large: typography.lineHeight.large,
			base: typography.lineHeight.base,
			label: typography.lineHeight.label,
			labelSmall: typography.lineHeight.label,
			xSmall: typography.lineHeight.xSmall,
		},

		fontWeight: {
			regular: typography.fontWeight.regular,
			medium: typography.fontWeight.medium,
			bold: typography.fontWeight.semiBold,
		},
	},

	cornerRadius: {
		small: numbers[2],
		default: numbers[6],
		medium: numbers[16],
		large: numbers[32],
	},

	zIndices: {
		...zIndices,
	},

	animation: {
		base: `0.2s ease-in-out`,
	},

};

export const themeNight = {
	...themeLight,

	colors: {
		background: {
			background: {
				primary: colors.grey[900],
				secondary: colors.grey[800],
				control: colors.grey[600],
			},
			extentions: {
				stateActive: colors.grey[500],
				stateDisabled: colors.grey[700],
				overlay: "hsla(0,0%,100%, 0.32)",
				staticWhite: colors.white,
				staticBlack: colors.black,
				primaryInverse: colors.white,

				subtleAccent: colors.brand[800],
				accent: colors.brand[400],
				accentStateActive: colors.brand[300],
				accentStateDisabled: colors.brand[800],

				subtleNegative: colors.red[800],
				highNegative: colors.red[700],
				mediumNegative: colors.red[500],
				negative: colors.red[400],

				subtleWarning: colors.yellow[800],
				highWarning: colors.yellow[700],
				mediumWarning: colors.yellow[500],
				warning: colors.yellow[400],

				subtlePositive: colors.green[800],
				highPositive: colors.green[700],
				mediumPositive: colors.green[500],
				positive: colors.green[400],

				subtleTeal: colors.teal[800],
				highTeal: colors.teal[700],
				mediumTeal: colors.teal[500],
				teal: colors.teal[400],

				subtlePurple: colors.purple[800],
				highPurple: colors.purple[700],
				mediumPurple: colors.purple[500],
				purple: colors.purple[400],

				subtleMagenta: colors.magenta[800],
				highMagenta: colors.magenta[700],
				mediumMagenta: colors.magenta[500],
				magenta: colors.magenta[400],	
			},
		},

		content: {
			content: {
				primary: colors.white,
				secondary: colors.grey[200],
				tertiary: colors.grey[400],
			},
			extentions: {
				primaryOnColor: colors.grey[800],
				staticWhite: colors.white,
				stateDisabled: colors.grey[600],

				accent: colors.brand[400],
				accentStateActive: colors.brand[300],
				negative: colors.red[400],
				warning: colors.yellow[400],
				positive: colors.green[400],
				teal: colors.teal[400],
				purple: colors.purple[400],
				magenta: colors.magenta[400],
			},
		},

		border: {
			border: {
				opaque: colors.grey[700],
			},
			extentions: {
				transparent: "hsla(0, 0%,100%, 0.32)",
				stateActive: colors.white,
				stateDisabled: colors.grey[800],

				highAccent: colors.brand[700],
				accent: colors.brand[400],
				accentStateActive: colors.brand[300],

				highNegative: colors.red[700],
				negative: colors.red[400],
				highWarning: colors.yellow[700],
				warning: colors.yellow[400],
				highPositive: colors.green[700],
				positive: colors.green[400],

				highTeal: colors.teal[700],
				teal: colors.teal[400],
				highPurple: colors.purple[700],
				purple: colors.purple[400],
				highMagenta: colors.magenta[700],
				magenta: colors.magenta[400],
			},
		},
  },

	shadows: {
		focus: `0px 0px 0px 4px var(--border-border-purple, #9181F8)`,
		deepDown: `0px 4px 24px 0px rgba(0, 0, 0, 0.44)`,
	},

};
