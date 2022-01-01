import m from "mithril"

let lightningBolt = {
    view: function() {
        return m("svg", {xmlns: "http://www.w3.org/2000/svg", class: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor"}, [
            m("path", {'stroke-linecap': "round", 'stroke-linejoin': "round", 'stroke-width': "2", d: "M13 10V3L4 14h7v7l9-11h-7z"})
        ])
    }
}

let moonDark = {
    view: function() {
        return m("svg", {xmlns: "http://www.w3.org/2000/svg", class: "h-5 w-5", fill: "currentColor", viewBox: "0 0 20 20"}, [
            m("path", {d: "M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"})
        ])
    }
}

function toggleTheme() {
    if (Toggle.theme == "light") {
        document.documentElement.classList.add('dark')
        localStorage.theme = 'dark'
        Toggle.theme = "dark"
    } else {
        document.documentElement.classList.remove('dark')
        localStorage.theme = 'light'
        Toggle.theme = "light"
    }
}

export let Toggle = {
    theme: "light",
    oninit: function() {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
            Toggle.theme = "dark"
        } else {
            document.documentElement.classList.remove('dark')
            Toggle.theme = "light"
        }
    },
    view: function() {
        return m("button", {onclick: toggleTheme}, [
            m("span", (
                Toggle.theme == "light" ? m(lightningBolt) : m(moonDark)
            )),
        ])
    }
}