import { icons } from '../icons'
import './ControlPanel.css'

// interface actionInterface {
//     name: string,
//     action: ()=>void,
//     icon?: string,
//     status?: boolean
// }
// interface actionsInterface {
//     name: string,
//     currentActionNumber: number,
//     actions: actionInterface[]
//   }
interface actionsInterface {
    name: string,
    currentActionNumber: number,
    actions: [],
    icon?: string,
    status?: boolean
}
interface classNamesLis {
    name: string,
    action: {
        name: string
    }
}

export class ControlPanel {
    domElement: Document
    actions: actionsInterface[]
    template: string[]
    classNamesList: classNamesLis[]
    panelIsOpen: boolean
    

    constructor(domElement:any = document.body, actions:actionsInterface[] = []) {
        this.domElement = domElement
        this.actions = actions
        this.template = []
        this.classNamesList=[]
        this.panelIsOpen = false
    }

    init () {
        // Make buttons from actions
        if (this.actions.length > 1) {
            this.actions.map((action) => {
                this.addButtonToTemplate (action)
            })
        }

        const node = document.createElement(`div`)
        node.innerHTML = `
            <div class="controll-panel">
                <div class="open-button-wrapper">
                    <div class="controll-panel_button open-button">${icons.arrow()}</div>
                    Light Scenario
                </div>${this.template.join('')}
            </div>`
        this.domElement.appendChild(node)

        const btnOpen = document.querySelector(`.open-button-wrapper`)
        btnOpen?.addEventListener('click', this.togglePanelOpen)

        // Add listeneres to new buttons
        // this.classNamesList.map(name => {
        //     const btn = document.querySelector(`.${name.name}`)
        //     btn?.addEventListener('click',() => {name.action(), this.setActive(name.name)}) // Handler
        // })

        this.classNamesList.map(className => {
            const btnClsName = className.name + className.action.name
            // const btn = document.querySelector(`.${className.name}`)
            const btn = document.querySelector(`.${btnClsName}`)
            btn?.addEventListener('click',() => {this.handler(className.action, className.name), this.setActive(className.name)}) // Handler
        })
    }

    // Switch an actions and internal icon and text
    handler (action, className) {
        // console.log(action.actions)
        action.currentActionNumber = action.currentActionNumber < action.actions.length-1 ? action.currentActionNumber + 1 : 0
        action.actions[action.currentActionNumber].action()

        // const btnClsName = className + action.name
        const btnClsName = 'text' + className
        // console.log(btnClsName)

        // Find a text and change to action name
        const btnText = document.querySelector(`.${btnClsName}`)
        if (btnText) btnText.innerHTML = action.actions[action.currentActionNumber].actionName

        const btnIcon = document.querySelector(`.${className}`)
        const iconName = action.actions[action.currentActionNumber].iconName
        const iName:string = iconName.toLowerCase()
        if (btnIcon) btnIcon.innerHTML = icons[iName] ? icons[iName]() : icons.circle()
    }


    addButtonToTemplate (action: actionInterface) {
        // debugger
        const randomClassName = 'a' + (Math.round(Date.now() * Math.random())).toString()
        const iName = action.actions[action.currentActionNumber].iconName
        const actionName = action.actions[action.currentActionNumber].actionName
        const btnTemplate = `
            <div class="open-button-wrapper ${randomClassName + action.name}">
                <div class="controll-panel_button ${randomClassName}">${icons[iName] ? icons[iName]() : icons.circle()}</div>
                <div class="text${randomClassName}">${actionName}</div>
            </div>`
        this.template.push(btnTemplate)
        this.classNamesList.push({name: randomClassName.toString(), action})
    }

    setActive(className: string) {
        // Delete active class on all buttons
        const allBtns = document.querySelectorAll(`.controll-panel_button`)
        allBtns.forEach(btn => btn.classList.remove('active'))
        // Set active class on active button
        const btn = document.querySelector(`.${className}`)
        btn?.classList.add('active')
    }

    togglePanelOpen () {
        this.panelIsOpen = !this.panelIsOpen
        console.log(this.panelIsOpen)
        const btn = document.querySelector(`.open-button`)
        const panel = document.querySelector(`.controll-panel`)
        if (this.panelIsOpen) {
            btn?.classList.add('open')
            panel?.classList.add('open')
        } else {
            btn?.classList.remove('open') 
            panel?.classList.remove('open')
        }
    }  
}