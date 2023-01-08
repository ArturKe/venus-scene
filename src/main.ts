import App from './app'
import { ControlPanel } from './components/controlPanel'
import './style.css'
// import typescriptLogo from './typescript.svg'
let assetPath: string

console.log(import.meta.env)

if (import.meta.env.MODE === 'development') {
  assetPath = './src/assets/'
} else {
  assetPath = './assets/'
}
let scale = 0.3

const appNode = document.querySelector<HTMLDivElement>('#app')

const app = new App(appNode)

const actions = [
  {name: 'First', action: () => {console.log('First')}}, 
  {name: 'Second', action: () => {console.log('Second')}},
  {name: 'Third', action: () => {console.log('Third')}}
]
const control = new ControlPanel(appNode, actions)
control.init()


app.init()
app.geometryBox()
app.geometryFloor()
app.addLight()

const loadModels = async () => {
  await app.loadModel('pine_tree_ver3.glb', assetPath, 'iolka')
  await app.loadModel('venus-ver1_2k.glb', assetPath, 'venus')
  await setParams()
}

const setParams = async () => {
  const mesh = app.scene.getObjectByName( 'iolka' );
  if(mesh) {
    mesh.scale.set(scale, scale, scale)
    app.updateArr.push(() => mesh.rotation.y = mesh.rotation.y + 0.02)
  }

  const venus = app.scene.getObjectByName( 'venus' );
  if(venus) {
    venus.scale.set(scale, scale, scale)
    venus.position.set(1, 0, 0)
  }
}

loadModels()

console.log(app)