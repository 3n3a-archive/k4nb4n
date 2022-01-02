import m from "mithril"
import { showModal } from "./Modal"

export let Contact = {
    view: function() {
        return m("div", {class: 'contact'},  [
            m("p", {class: "", onclick: showModal}, "Site 1"),
            m("p", {class: ""}, "Site 2")
        ])
    }
}