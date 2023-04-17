import '@app/styles/_reset.css'
import '@app/styles/_globals.css'
import '@app/styles/fonts/_fonts.css'

import {Provider} from "react-redux"
import {createWrapper} from "next-redux-wrapper"
import store from "../store/store"
function App({Component, pageProps}) {
    return <Provider store={store}><Component {...pageProps} /></Provider>
}

const makeStore = () => store

const wrapper = createWrapper(makeStore)

export default wrapper.withRedux(App)
