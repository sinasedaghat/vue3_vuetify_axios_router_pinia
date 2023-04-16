import { md3 } from 'vuetify/blueprints'

// Vuetify
import * as directives from 'vuetify/directives'
import * as components from 'vuetify/components'
import { createVuetify, type ThemeDefinition } from 'vuetify'

// Styles
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

// Theme
const light: ThemeDefinition = {
    dark: false,
    colors: {
        background: '#FBEADB',
        surface: '#2A131F',
        primary: '#78A4A7',
        // 'primary-darken-1': '#3B3486',
        secondary: '#DF4B52',
        // 'secondary-darken-1': '#A4194B',

        error: '#B00020',
        info: '#4496F3',
        success: '#16DB93',
        warning: '#CB8C00',
    },
}

// const dark: ThemeDefinition = {
//     dark: true,
//     colors: {
//         background: '#181833',
//         surface: '#161644',
//         primary: '#7743DB',
//         'primary-darken-1': '#3B3486',
//         secondary: '#ef476f',
//         'secondary-darken-1': '#ed315d',
//         error: '#B00020',
//         info: '#4496F3',
//         success: '#16DB93',
//         warning: '#CB8C00',
//     },
// }

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        // defaultTheme: 'dark',
        defaultTheme: 'light',
        themes: {
            light,
            // dark,
        },
    },
    blueprint: md3,
})

export default vuetify
