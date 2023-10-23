
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
		"--theme-font-family-heading": `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "var(--color-primary-600)",
		"--theme-rounded-base": "0px",
		"--theme-rounded-container": "12px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #0bd08f 
		"--color-primary-50": "218 248 238", // #daf8ee
		"--color-primary-100": "206 246 233", // #cef6e9
		"--color-primary-200": "194 243 227", // #c2f3e3
		"--color-primary-300": "157 236 210", // #9decd2
		"--color-primary-400": "84 222 177", // #54deb1
		"--color-primary-500": "11 208 143", // #0bd08f
		"--color-primary-600": "10 187 129", // #0abb81
		"--color-primary-700": "8 156 107", // #089c6b
		"--color-primary-800": "7 125 86", // #077d56
		"--color-primary-900": "5 102 70", // #056646
		// secondary | #373384 
		"--color-secondary-50": "225 224 237", // #e1e0ed
		"--color-secondary-100": "215 214 230", // #d7d6e6
		"--color-secondary-200": "205 204 224", // #cdcce0
		"--color-secondary-300": "175 173 206", // #afadce
		"--color-secondary-400": "115 112 169", // #7370a9
		"--color-secondary-500": "55 51 132", // #373384
		"--color-secondary-600": "50 46 119", // #322e77
		"--color-secondary-700": "41 38 99", // #292663
		"--color-secondary-800": "33 31 79", // #211f4f
		"--color-secondary-900": "27 25 65", // #1b1941
		// tertiary | #323e43 
		"--color-tertiary-50": "224 226 227", // #e0e2e3
		"--color-tertiary-100": "214 216 217", // #d6d8d9
		"--color-tertiary-200": "204 207 208", // #cccfd0
		"--color-tertiary-300": "173 178 180", // #adb2b4
		"--color-tertiary-400": "112 120 123", // #70787b
		"--color-tertiary-500": "50 62 67", // #323e43
		"--color-tertiary-600": "45 56 60", // #2d383c
		"--color-tertiary-700": "38 47 50", // #262f32
		"--color-tertiary-800": "30 37 40", // #1e2528
		"--color-tertiary-900": "25 30 33", // #191e21
		// success | #91ed07 
		"--color-success-50": "239 252 218", // #effcda
		"--color-success-100": "233 251 205", // #e9fbcd
		"--color-success-200": "228 251 193", // #e4fbc1
		"--color-success-300": "211 248 156", // #d3f89c
		"--color-success-400": "178 242 81", // #b2f251
		"--color-success-500": "145 237 7", // #91ed07
		"--color-success-600": "131 213 6", // #83d506
		"--color-success-700": "109 178 5", // #6db205
		"--color-success-800": "87 142 4", // #578e04
		"--color-success-900": "71 116 3", // #477403
		// warning | #EAB308 
		"--color-warning-50": "252 244 218", // #fcf4da
		"--color-warning-100": "251 240 206", // #fbf0ce
		"--color-warning-200": "250 236 193", // #faecc1
		"--color-warning-300": "247 225 156", // #f7e19c
		"--color-warning-400": "240 202 82", // #f0ca52
		"--color-warning-500": "234 179 8", // #EAB308
		"--color-warning-600": "211 161 7", // #d3a107
		"--color-warning-700": "176 134 6", // #b08606
		"--color-warning-800": "140 107 5", // #8c6b05
		"--color-warning-900": "115 88 4", // #735804
		// error | #c50263 
		"--color-error-50": "246 217 232", // #f6d9e8
		"--color-error-100": "243 204 224", // #f3cce0
		"--color-error-200": "241 192 216", // #f1c0d8
		"--color-error-300": "232 154 193", // #e89ac1
		"--color-error-400": "214 78 146", // #d64e92
		"--color-error-500": "197 2 99", // #c50263
		"--color-error-600": "177 2 89", // #b10259
		"--color-error-700": "148 2 74", // #94024a
		"--color-error-800": "118 1 59", // #76013b
		"--color-error-900": "97 1 49", // #610131
		// surface | #2d303e 
		"--color-surface-50": "224 224 226", // #e0e0e2
		"--color-surface-100": "213 214 216", // #d5d6d8
		"--color-surface-200": "203 203 207", // #cbcbcf
		"--color-surface-300": "171 172 178", // #abacb2
		"--color-surface-400": "108 110 120", // #6c6e78
		"--color-surface-500": "45 48 62", // #2d303e
		"--color-surface-600": "41 43 56", // #292b38
		"--color-surface-700": "34 36 47", // #22242f
		"--color-surface-800": "27 29 37", // #1b1d25
		"--color-surface-900": "22 24 30", // #16181e
		
	}
}