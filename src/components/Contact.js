import m from "mithril"

export let Contact = {
    view: function() {
        return m("div", {class: 'contact'},  [
            m("p", {class: ""}, "Site 1"),
            m("p", {class: ""}, "Site 2")
        ])
    }
}