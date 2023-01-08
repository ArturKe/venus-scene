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
    

    constructor(domElement:any = document.body, actions:actionInterface[] = []) {
        this.domElement = domElement
        this.actions = actions
        this.template = []
        this.classNamesList=[]
    }

    init () {
        // Make buttons from actions
        if (this.actions.length > 1) {
            this.actions.map((action) => {
                this.addButtonToTemplate (action)
            })
        }

        const node = document.createElement(`div`)
        node.innerHTML = `<div class="controll-panel"><div class="controll-panel_button">R</div>${this.template.join('')}</div>`
        this.domElement.appendChild(node)

        // Add listeneres to new buttons
        this.classNamesList.map(name => {
            const btn = document.querySelector(`.${name.name}`)
            btn?.addEventListener('click',() => {name.action(), this.setActive(name.name)})
        })
    }


    addButtonToTemplate (action: actionInterface) {
        const randomClassName = 'a' + (Math.round(Date.now() * Math.random())).toString()
        const btnTemplate = `<div class="controll-panel_button ${randomClassName}"></div>`
        this.template.push(btnTemplate)
        this.classNamesList.push({name: randomClassName.toString(), action: action.action})
    }

    setActive(className: string) {
        // Delete active class on all buttons
        const allBtns = document.querySelectorAll(`.controll-panel_button`)
        allBtns.forEach(btn => console.log(btn.classList.remove('active')))
        // Set active class on active button
        const btn = document.querySelector(`.${className}`)
        btn?.classList.add('active')
    }
    
}