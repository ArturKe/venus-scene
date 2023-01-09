import {arrow} from '../icons'
import './style.css'

interface actionInterface {
    name: string,
    action: ()=>void
}

export class ControlPanel {
    domElement: Document
    actions: actionInterface[]
    template: string[]
    classNamesList: actionInterface[]
    panelIsOpen: boolean
    

    constructor(domElement:any = document.body, actions:actionInterface[] = []) {
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
        console.log(arrow)
        node.innerHTML = `<div class="controll-panel"><div class="open-button-wrapper"><div class="controll-panel_button open-button">${arrow()}</div>Light Scenario</div>${this.template.join('')}</div>`
        this.domElement.appendChild(node)

        const btnOpen = document.querySelector(`.open-button`)
        btnOpen?.addEventListener('click', this.togglePanelOpen)

        // Add listeneres to new buttons
        this.classNamesList.map(name => {
            const btn = document.querySelector(`.${name.name}`)
            btn?.addEventListener('click',() => {name.action(), this.setActive(name.name)})
        })
    }


    addButtonToTemplate (action: actionInterface) {
        const randomClassName = 'a' + (Math.round(Date.now() * Math.random())).toString()
        const btnTemplate = `<div class="open-button-wrapper"><div class="controll-panel_button ${randomClassName}">${action.name.slice(0,1)}</div>${action.name}</div>`
        this.template.push(btnTemplate)
        this.classNamesList.push({name: randomClassName.toString(), action: action.action})
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