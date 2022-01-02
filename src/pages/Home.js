import m from "mithril"

import {Footer} from "../components/Footer"
import {Header} from "../components/Header"
import { Kanban } from "../components/Kanban"
import { Modal } from "../components/Modal"

export let Home = {
    view: function(vnode) {
        return m("div", {class: "app"}, [
            m("div", {class: "background", 'aria-hidden': 'true'}),
            m(Header, {title: TITLE}),
            m("main", {class: "main-container", id: "main"}, [
                m("h1", TITLE),
                m(Kanban),
                m(Modal, {title: "Buy carrots", body1: "Are you sure you want to buy this item? This item cannot be returned or sold after purchase.", do: "Buy", cancel: "Return", type: 'success'}, [
                    m("p", "Test test"),
                    m("input")
                ])
            ]),
            m(Footer)
        ])
    }
}