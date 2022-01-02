import m from 'mithril'
import _ from 'underscore'

export function showModal() {
    document.getElementsByClassName("modal")[0].classList.remove("hidden")
}

function hideModal() {
    document.getElementsByClassName("modal")[0].classList.add("hidden")
}

function cancelAction() {
    hideModal()
    console.log("Not doing much!")
}

function doAction() {
    hideModal()
    console.log("Do stuff...")
}

let icons = {
    warning: `
    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
    `,
    info: `
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    `,
    success: `
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 bg-transparent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    `
}

let types = {
    'info': {
        icon: "bg-indigo-100 dark:bg-indigo-800 text-indigo-600 dark:text-indigo-100",
        icon_svg: icons.info,
        action: "bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500"
    },
    'danger': {
        icon: "bg-red-100 dark:bg-red-800 text-red-600 dark:text-red-100",
        icon_svg: icons.warning,
        action: "bg-red-600 hover:bg-red-700 focus:ring-red-500"
    },
    'success': {
        icon: "bg-green-100 dark:bg-green-800 text-green-600 dark:text-green-100",
        icon_svg: icons.success,
        action: "bg-green-600 hover:bg-green-700 focus:ring-green-500"
    }
}

/**
 * Modal
 * =====
 * types:
 *  - info
 *  - danger
 *  - success
 * 
 * ### Examples
 * 
 * _With custom body_
 * ```js
    m(Modal, {title: "Buy carrots", do: "Buy", cancel: "Return", type: 'success'}, [
        m("p", "Test test"),
        m("input")
    ])
 * ```
 * 
 * _With custom text-body_
 * ```js
    m(Modal, {title: "Buy carrots", body1: "Are you sure you want to buy this item? This item cannot be returned or sold after purchase.", do: "Buy", cancel: "Return", type: 'success'})
 * ```
 */
export let Modal = {
    view: function(vnode) {
        let type = _.get(types, (vnode.attrs.type ?? 'info'))
        return m("div", {class: "modal hidden", 'aria-labelledby': 'modal-title', role: 'dialog', 'aria-modal': 'true'}, [
            m("div", {class: "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"}, [
                m("div", {class: "modal-background", 'aria-hidden': 'true'}),
                m("span", {class: "hidden sm:inline-block sm:align-middle sm:h-screen", 'aria-hidden': "true"}, m.trust("&#8203;")),
                m("div", {class: "modal-container"}, [
                    m("div", {class: "modal-inner-container"}, [
                        m("div", {class: "sm:flex sm:items-start"}, [
                            m("div", {class: `modal-icon ${type.icon}`}, m.trust(type.icon_svg)),
                            m("div", {class: "modal-content"}, [
                                m("h3", {id: "modal-title", class: "modal-title"}, (vnode.attrs.title ?? "Modal Title")),
                                m("div", {class: "mt-2"}, (vnode.attrs.body ? m("p", {class: "modal-body"}, vnode.attrs.body) : 
                                    vnode.children
                                ))
                            ])
                        ])
                    ]),
                    m("div", {class: "btn-group"}, [
                        m("button", {type: "button", class: `btn-action ${type.action}`, onclick: doAction}, (vnode.attrs.do ?? "Do action")),
                        m("button", {type: "button", class: "btn-cancel", onclick: cancelAction}, (vnode.attrs.cancel ?? "Cancel"))
                    ])
                ])
            ])
        ])
    }
}
