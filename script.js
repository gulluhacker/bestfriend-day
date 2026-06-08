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

// ==========================
// Floating Hearts
// ==========================

function createHeart(){

const heart = document.createElement("div");

heart.innerHTML = "💖";

heart.style.position = "fixed";
heart.style.left = Math.random()*100 + "vw";
heart.style.bottom = "-20px";
heart.style.fontSize = (20 + Math.random()*25) + "px";
heart.style.pointerEvents = "none";
heart.style.zIndex = "999";

document.body.appendChild(heart);

let pos = 0;

const move = setInterval(()=>{

pos++;

heart.style.bottom = pos + "px";
heart.style.opacity = 1 - (pos/800);
heart.style.transform =
`rotate(${pos}deg)`;

if(pos > 800){

clearInterval(move);
heart.remove();

}

},15);

}

setInterval(createHeart,1200);


// ==========================
// Sparkles
// ==========================

function createSparkle(){

const sparkle =
document.createElement("div");

sparkle.innerHTML = "✨";

sparkle.style.position = "fixed";

sparkle.style.left =
Math.random()*100 + "vw";

sparkle.style.top =
Math.random()*100 + "vh";

sparkle.style.zIndex = "999";

sparkle.style.pointerEvents = "none";

sparkle.style.fontSize =
(10 + Math.random()*15) + "px";

document.body.appendChild(sparkle);

setTimeout(()=>{
sparkle.remove();
},2000);

}

setInterval(createSparkle,500);


// ==========================
// Shooting Stars
// ==========================

function createShootingStar(){

const star =
document.createElement("div");

star.style.position="fixed";

star.style.width="120px";
star.style.height="2px";

star.style.background="white";

star.style.top=
Math.random()*40+"vh";

star.style.left="-150px";

star.style.transform=
"rotate(-25deg)";

star.style.boxShadow=
"0 0 15px white";

star.style.zIndex="1";

document.body.appendChild(star);

let x=-150;

const shoot=setInterval(()=>{

x+=15;

star.style.left=x+"px";

if(x>window.innerWidth+200){

clearInterval(shoot);
star.remove();

}

},10);

}

setInterval(createShootingStar,5000);
