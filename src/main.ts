import App from './app'
import './style.css'
import { ControlPanel } from './components/controlPanel/ControlPanel'
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
  {name: 'First', action: () => {console.log('First', app.addScenario(0))}}, 
  {name: 'Second', action: () => {console.log('Second'), app.addScenario(1)}},
  {name: 'Three', action: () => {app.addScenario(2)}},
  {name: 'Play/Stop', icon: 'Play', action: () => {app.playStatus = !app.playStatus}}
]
const control = new ControlPanel(appNode, actions)
control.init()


app.init()
// app.geometryBox()
app.geometryFloor()
// app.addLight()

const loadModels = async () => {
  await app.loadModel('pine_tree_ver3.glb', assetPath, 'iolka')
  await app.loadModel('venus-ver1_2k.glb', assetPath, 'venus')
  await setParams()
}

const setParams = async () => {
  const mesh = app.scene.getObjectByName( 'iolka' );
  if(mesh) {
    mesh.scale.set(scale, scale, scale)
    mesh.position.set(1, 0, 0)
    app.updateArr.push(() => mesh.rotation.y = mesh.rotation.y + 0.02)
  }

  const venus = app.scene.getObjectByName( 'venus' );
  if(venus) {
    venus.scale.set(scale, scale, scale)
  }
}

loadModels()

console.log(app)