import m from "mithril"
import {Navbar} from "./Navbar"

export let Header = {
    view: function(vnode) {
        return m("header", {class: "header"}, [
            m(Navbar, {title: vnode.attrs.title})
        ])
    }
}