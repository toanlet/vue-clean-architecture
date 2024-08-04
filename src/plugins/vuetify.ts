// src/plugins/vuetify.ts
import { createVuetify } from 'vuetify'
import 'vuetify/styles' // Import Vuetify styles
import { md3 } from 'vuetify/blueprints' // Optional: For Vuetify 3 with Material Design 3

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
export default createVuetify({
	// Vuetify options can be added here
	theme: {
		defaultTheme: 'light',
	},
	blueprint: md3, // Optional: For Vuetify 3 with Material Design 3,
	components,
	directives,
})
