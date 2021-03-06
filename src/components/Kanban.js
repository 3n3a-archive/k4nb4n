import m from "mithril"
import Sortable from 'sortablejs';
import _ from "underscore"
import * as localForage from "localforage";

let Data = {
    todo: [

    ],
    inpr: [
        
    ],
    done: [
        
    ]
}


/**
 * Gets the current list from a Sortable's id
 * @param {Sortable.el} list Sortable Element
 * @returns Array of todo-items
 */
function getCurrentList(list) {
    return _.get(Data, list.id.replace("items-", ""))
}

/**
 * Extracts the Id from HTML-Attribute
 * @param {SortableEvent} evt A Sortable Event
 * @returns Id as Number
 */
function getTodoItemId(evt) {
    return Number(evt.item.attributes.getNamedItem('data-id').value)
}

/**
 * Append a Todo Item to the End of a List
 * @param {Sortable.el} list Sortable Element
 * @param {TodoItem} newItem A Todo Item
 */
function addTodoItem(list, newItem) {
    let currentTodoList = getCurrentList(list);
    currentTodoList.push(newItem)
}

/**
 * Deletes a Todo Item from a List
 * @param {Sortable.el} list Sortable Element
 * @param {TodoItem} oldItem A Todo Item
 */
function delTodoItem(list, oldItem) {
    let currentTodoList = getCurrentList(list);
    currentTodoList.pop(oldItem)
}

/**
 * Find a TodoItem in a TodoList
 * @param {Sortable.el} list Sortable Element
 * @param {Number} id Id of TodoItem
 * @returns TodoItem
 */
function getTodoItem(list, id) {
    let currentTodoList = getCurrentList(list);
    return _.find(currentTodoList, {id: id})
}

/**
 * Move a TodoItem from List A to B
 * @param {SortableEvent} evt Sortable Event
 */
function moveTodoItem(evt) {
    let id = getTodoItemId(evt)
    let todo_item = getTodoItem(evt.from, id)
    addTodoItem(evt.to, todo_item)
    delTodoItem(evt.from, todo_item)
}

function saveDataState() {
    localforage.setItem('todo-data',Data).then(
    () => {
        console.log("Saved Data!");
    }
    )
    // window.prompt("Copy this state", JSON.stringify(Data))

}

function getDataState() {
    // let state = window.prompt("Enter state", "")
    if (localforage.length() > 0) {
        return localforage.getItem('todo-data')

        // return JSON.parse(state)
    } else {
        return SampleData
    }
}

let sortableOptions = {
    group: 'todos',
    touchStartThreshold: 10, // in px
    ghostClass: 'kan-item-ghost',
    animation: 100,
    onAdd: function (evt) {
        moveTodoItem(evt)
        saveDataState()
    },
    // store: {
    //     /**
    //      * Get the order of elements. Called once during initialization.
    //      * @param   {Sortable}  sortable
    //      * @returns {Array}
	// 	 */
    //     get: function (sortable) {
    //         let order = localStorage.getItem(sortable.el.id);
	// 		return order ? order.split('|') : [];
	// 	},
        
	// 	/**
    //      * Save the order of elements. Called onEnd (when the item is dropped).
    //      * @param {Sortable}  sortable
	// 	 */
    //     set: function (sortable) {
    //         let order = sortable.toArray();
	// 		localStorage.setItem(sortable.el.id, order.join('|'));
	// 	}
    // }
}

let singleColumn = {
    view: function(vnode) {  
        let list = _.get(Data, vnode.attrs.state).map(function(item) {
            if (item != null) {
               return m("li", {class: "kan-item", 'data-id': JSON.stringify(item)}, item.name)
            }
        })
        return m("ul", {
            id: `items-${vnode.attrs.state}`,
            class: "kan-col",
            oncreate: function(e){
                let el = document.getElementById(e.attrs.id)
                Sortable.create(el, sortableOptions)
            },
        }, list)
    }
}
    
export let Kanban = {
    oninit: function() {
        m.request({
            method: "GET",
            url: "//localhost:8081/todos",
        })
        .then(function(result) {
            result.forEach((e) => {
                while (e.Category == "todo") {
                    console.log(e.Name)
                }
            })
        })
    },
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
