import './style.css'
import * as THREE from 'three';
//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
//import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.121.1/build/three.module.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Color, LatheGeometry, Loader } from 'three';

//.........................................................
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.     innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
canvas: document.querySelector('#bg'),
});
renderer.setPixelRatio (window.devicePixelRatio);
//Full screen canvas 
renderer.setSize (window.innerWidth, window.innerHeight);
//changing camera postion 
camera.position.setZ(30);
//RENDER
renderer.render(scene,camera);
//.............................................................
//GEOMETRY OBJ (x.y.z) creating obj
const geometry = new THREE.TorusBufferGeometry(10, 3, 16, 100);
const material = new THREE.MeshNormalMaterial({color:0xff6347 , wireframe:true });
//Merch Geo with Mat
const tours = new THREE.Mesh (geometry,material);
scene.add(tours)
//GEO OBG 2...............
const latheTexture = new THREE.TextureLoader().load('cyber3.jpg')
const lathe = new THREE.Mesh(
new THREE.SphereGeometry(2,2,2),
new THREE.MeshBasicMaterial( { map: latheTexture} ) 
);
//scene.add(lathe);

lathe.position.z = 19;
lathe.position.x = 5.9;
lathe.position.y = 3;
//GEO OBG 3...............

const obg3Texture = new THREE.TextureLoader().load('cyber3.jpg')
const obg3 = new THREE.Mesh(
new THREE.SphereGeometry(1,1,1),
new THREE.MeshBasicMaterial( { map: latheTexture} ) 
);
//scene.add(obg3);

obg3.position.z = 28;
obg3.position.x = 3;
obg3.position.y = 2;
//GEO OBG 4...............
const obg4Texture = new THREE.TextureLoader().load('cyber3.jpg')
const obg4 = new THREE.Mesh(
new THREE.SphereGeometry(1,1,1),
new THREE.MeshBasicMaterial( { map: latheTexture} ) 
);
//scene.add(obg4);

obg4.position.z = 67;
obg4.position.x = 4;
obg4.position.y = 7;
//GEO OBG 5...............
//const obg5Texture = new THREE.TextureLoader().load('cyber1.jpg')
const obg5 = new THREE.Mesh(
new THREE.TorusGeometry(7, 9, 15, 80),
new THREE.MeshToonMaterial( { color:0xa60dff , wireframe: true} ) 
);
scene.add(obg5);

obg5.position.z = 84;
obg5.position.x = 22;
obg5.position.y = 10;

// Lights......................................................

const pointLight = new THREE.SpotLight(0x001aff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight (0xa8adad);
scene.add(pointLight, ambientLight);
// i will remove these again ................
//const controls = new OrbitControls( camera , renderer.domElement);
//const gridHelper = new THREE.GridHelper(200, 50);
//scene.add( gridHelper)
//.............................................

function Stars() {
    const geometry = new THREE.TetrahedronGeometry(0.30, 6, 50);
    const material = new THREE.MeshToonMaterial ({ color: 0xffffff });
    const star = new THREE.Mesh(geometry, material);

    const [x, y, z] = Array(3)
    .fill().map(() => THREE.MathUtils.randFloatSpread(100));

    star.position.set(x, y, z);
    scene.add(star);
}

Array(400).fill().forEach(Stars)

//.💣 💣 💣 💣 💣 💣 💣 💣 💣 💣 💣 💣 💣 💣 💣 💣 
/**
const loader = new GLTFLoader()
loader.load('ThreeJstest/scene/scene.gltf', function (gltf) {console.log(gltf)
const geometry = gltf.scene.children[0].geometry
geometry.computeVertexNormals(fauls)
geometry.scale.set(0.5,0.5,0.5);
scene.add(gltf.scene);
renderer.render(scene,camera);
animate();
let mesh = new THREE.Mesh(geometry, buildTwistMaterial(100))
mesh.position.x = 2
mesh.position.y = 3
scene.add(mesh)
});
var loader = new THREE.GLTLFLoader();				
loader.load( './ThreeJstest/drone.glb', function ( gltf ) {             
//var obj = gltf.scene;				
gltf.scene.scale.set( 2, 2, 2 );			   
gltf.scene.position.x = 0;				     
gltf.scene.position.y = 0;				    
gltf.scene.position.z = 0;				    
scene.add( gltf.scene );
});	 
*/
//💣 💣 💣 💣 💣 💣 💣 💣 💣 💣 💣 💣 💣 💣 💣 💣 

const gltfLoader = new GLTFLoader()

gltfLoader.load(
    '/drone.glb',
    (glb) => 
    {
        scene.add(glb.scene.children[0])
    }
)




// BACKGROUND .......
const cyberTexture = new THREE.TextureLoader().load ('backgroundx.jpg');
scene.background = cyberTexture;
//.............................................................
// Avatar 
    const avatarTexture = new THREE.TextureLoader().load('GEEKCUTTER.png')
    const avatar = new THREE.Mesh(
    new THREE.BoxGeometry(2,2,2,100),
    new THREE.MeshBasicMaterial( { map: avatarTexture} ) 
    );
    scene.add(avatar);
    
    avatar.position.z = 0;
    avatar.position.x = -3;
    //........................................................
    // FLY obg 1 
    const moonTexture = new THREE.TextureLoader().load('moon.jpg');
    const normalTexture = new THREE.TextureLoader().load('moonmap.jpg');
    const moon = new THREE.Mesh(
    new THREE.SphereGeometry(3, 32, 32),
    new THREE.MeshStandardMaterial({
    map: moonTexture,
    normalMap: normalTexture,
    })
);
scene.add(moon);
moon.position.z = 25;
moon.position.y = 10;
moon.position.setX (-20);

// CAMERA MOVEMEANT WITH SCORLL...............................
function moveCamera() {
    const roll = document.body.getBoundingClientRect().top;
    moon.rotation.x += 0.03;
    moon.rotation.y += 0.040;
    moon.rotation.z += 0.08;
    avatar.rotation.x += 0.08;
    avatar.rotation.y += 0.08;
    avatar.rotation.z += 0.08;
    lathe.rotation.x  += 0.10;
    lathe.rotation.z  += 0.05;
    lathe.rotation.y  += 0.006;
//Camera POstion
    camera.position.x = roll  * -0.002;
    camera.position.y = roll  * -0.002;
    camera.position.z = roll  * -0.02;
//Camera Rotation
//camera.rotation.x = roll * -1;
//camera.rotation.y = roll * -3;
//camera.rotation.z = roll * -5;
}
document.body.onscroll = moveCamera
//RENDER ANIMATION 🔥......................................... 
function animate () {
    requestAnimationFrame( animate ) ;
    tours.rotation.x += 0.02;
    tours.rotation.y -= 0.003;
    tours.rotation.z += 0.07;
    obg4.rotation.z  += 0.04;
    obg4.rotation.x  -= 0.09;
    obg4.rotation.y  += 0.02;
    //obg5.position.x  += 0.00002;
    //obg5.position.x  -= 0.00005;
    obg5.rotation.y  += 0.002
    obg5.rotation.x  += 0.002
    obg5.rotation.z  -= 0.002
// i will remove this later (controls)
//controls.update();
renderer.render(scene,camera) ;
}
animate();
