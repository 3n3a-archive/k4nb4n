import m from "mithril"
import {Contact} from "./Contact"

export let Footer = {
    view: function() {
        return m("footer", {class: "footer"}, [
            m("h3", TITLE),
            m(Contact)
        ])
    }
}