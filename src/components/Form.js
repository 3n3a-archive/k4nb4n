import m from 'mithril'
import _ from 'underscore'

let FormTypes = {
    'text': function(vnode) {
        return m("input", {
            type: vnode.attrs.type,
            id: vnode.attrs.name,
            name: vnode.attrs.name,
            class: "form-part",
            placeholder: (vnode.attrs.placeholder ?? "")
        })  
    },
    'email': function(vnode) {
        return m("input", {
            type: vnode.attrs.type,
            id: vnode.attrs.name,
            name: vnode.attrs.name,
            class: "form-part",
            placeholder: (vnode.attrs.placeholder ?? "name@example.com")
        })  
    },
    'date': function(vnode) {
        return m("input", {
            type: vnode.attrs.type,
            id: vnode.attrs.name,
            name: vnode.attrs.name,
            class: "form-part",
        })  
    },
    'select': function(vnode) {
        return m("select", {
            class: "form-part",
            id: vnode.attrs.name,
            name: vnode.attrs.name,
        }, 
        vnode.attrs.options.map(function(option) {
            return m("option", option)
        })
        )
    },
    'textarea': function(vnode) {
        return m.trust(`<textarea class="form-part" id="${vnode.attrs.name}" name="${vnode.attrs.name}" rows="${(vnode.attrs.rows ?? "3")}"></textarea>`)
    } 
}

/**
 * Form Input Element
 * @example vnode { label, type, (name), (rows), (checked), (options) }
 */
export let FormInput = {
    view: function(vnode) {
        if (vnode.attrs.type != "checkbox") {
            return m("label", {class: "block", for: vnode.attrs.name}, [
                m("span", {class: "text-gray-700 dark:text-gray-200"}, vnode.attrs.label),
                _.get(FormTypes, vnode.attrs.type)(vnode)
            ])
        } else {
            return m("div", {class: "block"}, [
                m("div", {class: "mt-2"}, [
                    m("div", [
                        m("label", {class: "inline-flex items-center", for: vnode.attrs.name}, [
                            m("input", {
                                type: "checkbox",
                                class: "form-checkbox",
                                id: vnode.attrs.name,
                                name: vnode.attrs.name,
                                checked: (vnode.attrs.checked ?? false)
                            }),
                            m("span", {class: "ml-2 text-gray-700 dark:text-gray-200"}, vnode.attrs.label)
                        ])
                    ])
                ])                
            ])
        }
        
    }
}

export let Form = {
    view: function(vnode) {
        return m("form", {class: "mt-8 max-w-md"}, [
            m("div", {class: "grid grid-cols-1 gap-6"}, vnode.children)
        ])
    }
}