import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.154.0/build/three.module.js';

// 1. Membuat Scene
const scene = new THREE.Scene();

// 2. Membuat Kamera/perspektif
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// 3. Membuat Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 4. Membuat Geometri Piramida
const geometry = new THREE.ConeGeometry(1, 2, 4); // (radius, height, segments)
const material = new THREE.MeshBasicMaterial({ color: 0xff6347, wireframe: true });
const pyramid = new THREE.Mesh(geometry, material);
scene.add(pyramid);

// 5. Menambahkan Pencahayaan (opsional untuk efek lebih menarik)
const light = new THREE.PointLight(0xffffff, 1);
light.position.set(5, 5, 5);
scene.add(light);

// 6. Animasi
function animate() {
    requestAnimationFrame(animate);
    pyramid.rotation.y += 0.01; // Piramida berputar
    renderer.render(scene, camera);
}

animate();
