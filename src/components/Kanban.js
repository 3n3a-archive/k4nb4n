import m from "mithril"
import Sortable from 'sortablejs';
import _ from "underscore"

let Data = {
    todo: [
        {
            name: 'Implement detailed View',
            description: 'yeah but do like so'
        },
        {
            name: 'Add contact Form',
            description: 'yeah but do like so'
        },
        {
            name: 'Implement storage',
            description: 'yeah but do like so'
        }
    ],
    inpr: [
        {
            name: 'Development',
            description: 'yeah but do like so'
        }
    ],
    done: [
        {
            name: 'Initial  Structure plus components',
            description: 'yeah but do like so'
        }
    ]
}

let sortableOptions = {
    group: 'todos',
    touchStartThreshold: 10, // in px
    ghostClass: 'kan-item-ghost',
    animation: 100
}

export let singleColumn = {
    // oninit: Data.projects.fetch,
    view: function(vnode) {
        return m("ul", {
            id: `items-${vnode.attrs.state}`,
            class: "kan-col",
            oncreate: function(e){
                let el = document.getElementById(e.attrs.id)
                Sortable.create(el, sortableOptions)
            },
        }, 
            _.get(Data, vnode.attrs.state).map(function(item) {
                return m("li", {item: item, class: "kan-item"}, item.name)
            })
        )
    }
}

export let Kanban = {
    view: function(vnode) {
        return m("div", {class: "kan-board"}, [
            m("div", {class: ""}, [
                m("h3", "Todo"),
                m(singleColumn, {state: 'todo'})]),
            m("div", {class: ""}, [
                m("h3", "In Progress"),
                m(singleColumn, {state: 'inpr'})]),
            m("div", {class: ""}, [
                m("h3", "Done"),
                m(singleColumn, {state: 'done'})]),
        ])
    }
}