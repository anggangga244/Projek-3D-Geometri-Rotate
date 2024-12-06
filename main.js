import * as THREE from './node_modules/three/build/three.module.js';

// 1. membuat Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87ceeb); // Warna latar belakang (biru langit)

// 2. membuat Kamera/perspektif
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// 3. membuat Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 4. menambahkan Cahaya
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Cahaya menyebar
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1); // Cahaya titik
pointLight.position.set(5, 5, 5); // Posisi cahaya
scene.add(pointLight);

// 5. membuat Geometri Piramida
const geometry = new THREE.ConeGeometry(1, 2, 4); // (radius, tinggi, segmen)

// menambahkan Tekstur
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('./textures/pyramid-texture.jpeg'); // Masukkan path ke file gambar

// Material dengan Tekstur
const material = new THREE.MeshStandardMaterial({
    map: texture, // Tekstur
    roughness: 0.5, // Kekasaran permukaan
    metalness: 0.2, // Efek metalik
});

// membuat Mesh (Gabungan Geometri dan Material)
const pyramid = new THREE.Mesh(geometry, material);
scene.add(pyramid);

// 6. Animasi
function animate() {
    requestAnimationFrame(animate);
    pyramid.rotation.y += 0.01; // Rotasi
    pyramid.rotation.x += 0.005; // Rotasi tambahan
    renderer.render(scene, camera);
}

// Jalankan Animasi
animate();
