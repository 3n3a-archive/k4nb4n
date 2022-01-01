import m from "mithril"
import "./styles.css"

import {Home} from "./pages/Home"
import {AboutPage} from "./pages/About"

let root = document.body

m.route(root, "/Home", {
    "/Home": Home,
    "/About": AboutPage
})