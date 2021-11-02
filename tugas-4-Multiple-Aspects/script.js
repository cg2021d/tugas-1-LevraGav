import * as THREE from './assets/js/three.module.js';
import {OrbitControls} from './assets/js/OrbitControls.js';
import {GLTFLoader} from './assets/js/GLTFLoader.js';
import {Reflector} from './jsm/objects/Reflector.js';
import * as dat from './jsm/libs/dat.gui.module.js'

class FogGUIHelper {
  constructor(fog, backgroundColor) {
    this.fog = fog;
    this.backgroundColor = backgroundColor;
  }
  get near() {
    return this.fog.near;
  }
  set near(v) {
    this.fog.near = v;
    this.fog.far = Math.max(this.fog.far, v);
  }
  get far() {
    return this.fog.far;
  }
  set far(v) {
    this.fog.far = v;
    this.fog.near = Math.min(this.fog.near, v);
  }
  get color() {
    return `#${this.fog.color.getHexString()}`;
  }
  set color(hexString) {
    this.fog.color.set(hexString);
    this.backgroundColor.set(hexString);
  }
}

//canvas
const canvas = document.querySelector('canvas.webgl')

//scene
const scene = new THREE.Scene();

//dat gui
const gui = new dat.GUI()

//size
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    //update size
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    //update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    //update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

})

// Camera

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
camera.position.x = 0;
camera.position.y = 5;
camera.position.z = 15;
scene.add(camera);

//controls
const controls = new OrbitControls(camera, canvas);
controls.autoRotate = true;

//Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.render(scene, camera, controls);
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.gammaOutput = true;

//panorama
const panorama = new THREE.CubeTextureLoader();
const textureMoon = panorama.load([
  './assets/panorama/px.jpg', './assets/panorama/nx.jpg',
  './assets/panorama/py.jpg', './assets/panorama/ny.jpg',
  './assets/panorama/pz.jpg', './assets/panorama/nz.jpg'
]);
scene.background = textureMoon;

//scenegraph
function dumpObject(obj, lines = [], isLast = true, prefix = '') {
    const localPrefix = isLast ? '└─' : '├─';
    lines.push(`${prefix}${prefix ? localPrefix : ''}${obj.name || '*no-name*'} [${obj.type}]`);
    const newPrefix = prefix + (isLast ? '  ' : '│ ');
    const lastNdx = obj.children.length - 1;
    obj.children.forEach((child, ndx) => {
        const isLast = ndx === lastNdx;
        dumpObject(child, lines, isLast, newPrefix);
    });
    return lines;
}

//object gltf
const loader = new GLTFLoader()
loader.load('./town/scene.gltf', function(gltf){
      gltf.scene.scale.set(0.4, 0.4, 0.4);
        const root = gltf.scene;
        root.position.x = 0;
        root.position.y = -3.4;
        scene.add(root);
    
        root.traverse(n => { if ( n.isMesh ) {
          n.castShadow = true; 
          n.receiveShadow = true;
        }});
})

//Light
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(-100, 200, 100);
scene.add(pointLight);

const ambientLight = new THREE.AmbientLight(0x000000);
scene.add(ambientLight);

const solarLight = new THREE.DirectionalLight();
solarLight.position.set(500, 500, -500);
solarLight.castShadow = true;
solarLight.intensity = 2;
solarLight.shadow.mapSize.width = 1024;
solarLight.shadow.mapSize.height = 1024;
solarLight.shadow.camera.near = 250;
solarLight.shadow.camera.far = 1000;

let intensity = 50;

solarLight.shadow.camera.left = -intensity;
solarLight.shadow.camera.right = intensity;
solarLight.shadow.camera.top = intensity;
solarLight.shadow.camera.bottom  = -intensity;
scene.add(solarLight);

//directionallight
const directionalLightFolder = gui.addFolder('Directional Light');
directionalLightFolder.add(solarLight, 'visible');
directionalLightFolder.add(solarLight.position, 'x').min(-500).max(500).step(10);
directionalLightFolder.add(solarLight.position, 'y').min(-500).max(500).step(10);
directionalLightFolder.add(solarLight.position, 'z').min(-500).max(500).step(10);
directionalLightFolder.add(solarLight, 'intensity').min(0).max(10).step(0.1);

//fog
const near = 10;
const far = 20;
const color = 'gray';
scene.fog = new THREE.Fog(color, near, far);

//fog helper
const fogGUIHelper = new FogGUIHelper(scene.fog, scene.background);
gui.add(fogGUIHelper, 'near', near, far).listen();
gui.add(fogGUIHelper, 'far', near, far).listen();
gui.addColor(fogGUIHelper, 'color');

//reflective sphere
const cubeRenderTarget = new THREE.WebGLCubeRenderTarget( 128, { format: THREE.RGBFormat, generateMipmaps: true, minFilter: THREE.LinearMipmapLinearFilter } );
let sphereCamera = new THREE.CubeCamera(1,500,cubeRenderTarget);
sphereCamera.position.set(0, 3, 0);
scene.add(sphereCamera);
const sphereMirror = new THREE.MeshBasicMaterial({
  envMap: sphereCamera.renderTarget.texture,
});
const sphereGeo = new THREE.SphereGeometry(3, 40 , 40);
const mirrorBall = new THREE.Mesh( sphereGeo, sphereMirror);
mirrorBall.position.y = 8;
mirrorBall.position.x = -2;
scene.add(mirrorBall);

const animate = () =>
{
    controls.update();

    //render
    sphereCamera.update(renderer, scene);
    renderer.render(scene, camera);

    window.requestAnimationFrame(animate);
}
animate();