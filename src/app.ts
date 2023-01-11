import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

interface IF_lightingConfig {
    type?: string
    color: number,
    position: THREE.Vector3
}

interface IF_LightingScenario {
    name: string,
    lights: IF_lightingConfig,
    action: ()=>void
}

// const lightScenarioArr: object[] = [
//     {
//         name: 'Scenario 1',
//         lights: [{type: point, color: 2131231, position}],
//         action: ()=> lights.totation.y = lights.totation.y + 0.02
//     }
// ]

export default class App {
    scene: THREE.Scene
    renderer: THREE.WebGLRenderer
    camera: THREE.PerspectiveCamera
    controls: OrbitControls
    domElement: Document
    updateArr: (() => void)[]
    lightsGroup: THREE.Group

    constructor (domElement:any = document.body) {
        this.domElement = domElement
        this.scene = new THREE.Scene();
        this.renderer = new THREE.WebGLRenderer({antialias: true});
        this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        this.controls = new OrbitControls( this.camera, this.renderer.domElement );
        this.updateArr = [() => this.controls.update(), () => this.renderer.render(this.scene, this.camera)]
        this.lightsGroup = new THREE.Group
    }

    init() {
        this.scene.add(this.lightsGroup)
        this.scene.background = new THREE.Color(0x00aaff);
        this.scene.fog = new THREE.FogExp2(0x00aaff, 0.01);
        
        const ambient = new THREE.HemisphereLight(0xffffbb, 0x080820, 0.5);
        this.scene.add(ambient);
      
        const light = new THREE.DirectionalLight(0xFFFFFF, 2);
        light.position.set( 0, 2, 10);
        light.rotation.y = 1;
        this.lightsGroup.add(light);
        // this.scene.add(light);
    
    
        // Camera & controls
        this.camera.position.set(0,2,3);
        this.controls.target.set(0,1,0);
        this.controls.update();

        // renderer
        this.renderer.outputEncoding = THREE.sRGBEncoding;
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        this.renderer.setAnimationLoop(() => this.update());
        this.domElement.appendChild( this.renderer.domElement );
    
        window.addEventListener( 'resize', () => this.resize(), false);
    }

    resize (){
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize( window.innerWidth, window.innerHeight );
    }

    update (){
        this.updateArr.map(func => func())
        // this.controls.update();
        // this.renderer.render(this.scene, this.camera);
        // requestAnimationFrame(() => {this.update()});
    }

    async loadModel (path: string, assetPath: string, name?: string,) {
        if (path !== undefined) {
            const loader = new GLTFLoader();
            loader.setPath(assetPath);
            return loader.loadAsync(path)
                .then(obj => {
                    console.log(obj)
                    if (name) {
                        obj.scene.name = name
                    }
                    this.scene.add(obj.scene)
                })
        }
    }

    geometryBox () {
        const geometry = new THREE.BoxGeometry( 0.3, 0.3, 0.3 );
        const material = new THREE.MeshNormalMaterial();

        const mesh = new THREE.Mesh( geometry, material );
        this.scene.add( mesh );
    }
    geometryFloor () {
        const offsetY = 0
        const floorGeometry = new THREE.PlaneGeometry( 500, 500 );
        const floorMaterial = new THREE.MeshStandardMaterial( {
            color: 0xeeeeee,
            roughness: 1.0,
            metalness: 0.0
        } );
        const floor = new THREE.Mesh( floorGeometry, floorMaterial );
        floor.rotation.x = - Math.PI / 2;
        floor.position.y = offsetY;
        floor.receiveShadow = true;
        this.scene.add( floor );

      
        // Grid -------------------//
        const grid = new THREE.GridHelper(500,100)
        grid.position.y = offsetY
        this.scene.add(grid)
    }

    async fileLoader2(url: string, assetPath: string){
        const loader = new GLTFLoader();
        loader.setPath(assetPath);
        return loader.loadAsync(url);
    }

    addLight () {
        const colorList = {
            colorRed: 0xfc0303,
            colorDefault: 0xff0000,
            orange: 0xfcce03,
            blue: 0x0328fc
        }

        const originLight = new THREE.Group

        const position = new THREE.Vector3(2, 3, 0)
        const position2 = new THREE.Vector3(-2, 3, 0)

        originLight.add( this.addLighting({type: 'spot', color: colorList.colorRed, position}) );
        originLight.add( this.addLighting({color: colorList.blue, position: position2}) );

        this.lightsGroup.add(originLight)
        // this.scene.add( originLight );

        this.updateArr.push(() => originLight.rotation.y = originLight.rotation.y + 0.03)
    }

    addLighting (config: IF_lightingConfig) {
        let light: THREE.Object3D
        
        //Default light
        light = new THREE.PointLight( config.color, 4, 10 );
        light.position.copy(config.position);
        light.name = 'light'

        switch (config.type) {
            case 'directional':
                light = new THREE.DirectionalLight(0xFFFFFF, 2);
                light.position.set( 0, 2, 10);
                light.rotation.y = 1;
                break
            case 'spot':
                light = new THREE.SpotLight( config.color, 4, 10, 0.3 );
                light.position.copy(config.position);
                light.name = 'light'
                break
        }

        const geometry = new THREE.SphereGeometry( 0.1, 12, 8 );
        const material = new THREE.MeshStandardMaterial( { color: config.color, emissive: config.color } );
        const sphere = new THREE.Mesh( geometry, material );
        light.add(sphere)

        return light;
    }

    removeAllLights() {
        console.log(this.scene.getObjectByName( 'light' ));
        console.log(this.lightsGroup)
        while (this.lightsGroup.children.length !== 0) {
            this.lightsGroup.remove(this.lightsGroup.children[0])
        }
        console.log(this.scene)
    }
}