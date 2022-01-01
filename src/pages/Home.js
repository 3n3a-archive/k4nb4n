import m from "mithril"

import {Footer} from "../components/Footer"
import {Header} from "../components/Header"
import { Kanban } from "../components/Kanban"

export let Home = {
    view: function(vnode) {
        return m("div", {class: "app"}, [
            m(Header, {title: TITLE}),
            m("main", {class: "main-container", id: "main"}, [
                m("h1", TITLE),
                m(Kanban)
            ]),
            m(Footer)
        ])
    }
}