import { plugin as VueTippy } from 'vue-tippy'

import '../css/tippy/themes/light.css'
import '../css/tippy/themes/light-border.css'
import '../css/tippy/themes/material.css'
import '../css/tippy/themes/translucent.css'

import '../css/tippy/tippy.css'

//import 'tippy.js/themes/light.css'
//import 'tippy.js/dist/tippy.css'

//import 'tippy.js/themes/light-border.css'
//import 'tippy.js/themes/material.css'
//import 'tippy.js/themes/translucent.css'

// "async" is optional
export default async (app, options) => {
app.use(
    VueTippy,
    // optional
    {
        directive: 'tippy', // => v-tippy
        component: 'tippy', // => <tippy/>
        componentSingleton: 'tippy-singleton', // => <tippy-singleton/>,
        defaultProps: {
        placement: 'auto-end',
        allowHTML: true,
        }, // => Global default options * see all props
    }
)
}
