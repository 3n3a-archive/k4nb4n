import m from "mithril"

import {Footer} from "../components/Footer"
import { Form, FormInput } from "../components/Form"
import {Header} from "../components/Header"
import { Kanban } from "../components/Kanban"
import { Modal } from "../components/Modal"

export let Home = {
    view: function(vnode) {
        return m("div", {class: "app"}, [
            m(Header, {title: TITLE}),
            m("main", {class: "main-container", id: "main"}, [
                m("h1", TITLE),
                m(Kanban),
                m(Modal, {title: "New Todo Item", do: "Create", cancel: "Cancel", type: 'info'}, [
                    m(Form, [
                        m(FormInput, {
                            label: "Name",
                            name: "name",
                            type: "text",
                            placeholder: "Water the Plants"                 
                        }),
                        m(FormInput, {
                            label: "Description",
                            name: "description",
                            type: 'textarea',
                        }),
                        m(FormInput, {
                            label: "Finish Date",
                            name: "finish_date",
                            type: "date"
                        }),
                    ])
                ])
            ]),
            m(Footer)
        ])
    }
}