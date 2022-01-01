import m from "mithril"
import {Footer} from "../components/Footer"
import {Header} from "../components/Header"

let about_text = `
<p>${TITLE} is a progressive webapp aimed at providing you with an awesome kanbank implementation.</p>
<p>And amazing cold start performance :)<p/>
`

export let AboutPage = {
    view: function() {
        return m("div", {class: "app"}, [
            m(Header, {title: TITLE}),
            m("main", {class: "main-container"}, [
                m("div", {class: "normal-page-container"}, [
                    m("h1", {class: "pagetitle"}, ABOUT_TITLE),
                    m("p", {class: "text-xl"}, m.trust(about_text))
                ])   
            ]),
            m(Footer)
        ])
    }
}