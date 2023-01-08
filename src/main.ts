import App from './app'
import './style.css'
// import typescriptLogo from './typescript.svg'

const assetPath = './src/assets/'
let scale = 0.3

const app = new App(document.querySelector<HTMLDivElement>('#app'))
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