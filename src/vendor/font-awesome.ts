import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
    faMoon,
    faSun,
} from '@fortawesome/free-solid-svg-icons'
import { App } from 'vue'

/* add icons to the library */
[
    faMoon,
    faSun,
].forEach(icon => {
    library.add(icon)
})

export function useFontAwesome(app: App): void {
    app.component('font-awesome-icon', FontAwesomeIcon)
}