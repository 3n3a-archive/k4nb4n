import m from "mithril"
import { Toggle } from "./Theme"

// Small Components
export let Navbar = {
    view: function(vnode) {
        return m("nav", {class: 'navbar'},  [
            m("h1", {class: "sitetitle"}, `k4nb4n`),
            m("div", {class: "m-0"}, [
                m(NavItem, {name: "Home", active: vnode.attrs.title}),
                m(NavItem, {name: "About", active: vnode.attrs.title}),
            ]),
            m("span", {class: "nav-spacer"}),
            m(Toggle)
        ])
    }
}

let NavItem = {
    view: function(vnode) {
        let active = (vnode.attrs.active == vnode.attrs.name ? "active" : "");
        let _class = `btn mr-4 btn-navbar ${active}`;
        return m("a", {href: `#!/${vnode.attrs.name}`, class: _class}, vnode.attrs.name)
    }
}

