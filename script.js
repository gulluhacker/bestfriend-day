// ==========================
// Typing Animation
// ==========================

const text = "Masrath Mehak 💖";
let index = 0;

function typeWriter() {

if(index < text.length){

document.getElementById("typing").innerHTML += text.charAt(index);

index++;

setTimeout(typeWriter,120);

}

}

typeWriter();


// ==========================
// Popup Functions
// ==========================

function openMessage(){

document.getElementById("popup").style.display = "flex";

}

function closeMessage(){

document.getElementById("popup").style.display = "none";

}


// ==========================
// Three.js 3D Star Background
// ==========================

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);

const renderer = new THREE.WebGLRenderer({
canvas:document.querySelector('#bg'),
alpha:true
});

renderer.setSize(
window.innerWidth,
window.innerHeight
);

renderer.setPixelRatio(window.devicePixelRatio);

camera.position.z = 5;


// ==========================
// Stars
// ==========================

function addStar(){

const geometry =
new THREE.SphereGeometry(0.05,24,24);

const material =
new THREE.MeshBasicMaterial({
color:0xffffff
});

const star =
new THREE.Mesh(
geometry,
material
);

const [x,y,z] =
Array(3)
.fill()
.map(()=>THREE.MathUtils.randFloatSpread(100));

star.position.set(x,y,z);

scene.add(star);

}

Array(800)
.fill()
.forEach(addStar);


// ==========================
// Floating Heart Crystal
// ==========================

const heartGeometry =
new THREE.OctahedronGeometry(1);

const heartMaterial =
new THREE.MeshBasicMaterial({
color:0xff69b4,
wireframe:true
});

const heart =
new THREE.Mesh(
heartGeometry,
heartMaterial
);

heart.position.set(0,0,-10);

scene.add(heart);


// ==========================
// Animation Loop
// ==========================

function animate(){

requestAnimationFrame(animate);

heart.rotation.x += 0.01;
heart.rotation.y += 0.01;

renderer.render(scene,camera);

}

animate();


// ==========================
// Resize Support
// ==========================

window.addEventListener('resize',()=>{

camera.aspect =
window.innerWidth/window.innerHeight;

camera.updateProjectionMatrix();

renderer.setSize(
window.innerWidth,
window.innerHeight
);

});
