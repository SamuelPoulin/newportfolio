<template>
  <div>
    <canvas ref="starsCanvas" id="stars-canvas" />
  </div>
</template>

<style>
#stars-canvas {
  display: flex;

  width: 100vw;
  height: 100vh;
}
</style>

<script setup lang="ts">
import {
  Color,
  Light,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  AmbientLight,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { useWindowSize } from "@vueuse/core";

const starsCanvas = ref(null);

let light: Light;
let controls: OrbitControls;
let camera: PerspectiveCamera;
let scene: Scene;
let loader: GLTFLoader;
let dracoLoader: DRACOLoader;
let renderer: WebGLRenderer;

onMounted(() => {
  if (!starsCanvas.value) return;

  camera = new PerspectiveCamera(45, 1, 1, 1000);
  camera.position.z = 30;

  scene = new Scene();

  light = new AmbientLight(0xffffff, 1);
  scene.add(light);

  loader = new GLTFLoader();
  dracoLoader = new DRACOLoader();

  dracoLoader.setDecoderPath(
    "https://www.gstatic.com/draco/versioned/decoders/1.5.6/"
  );
  loader.setDRACOLoader(dracoLoader);

  loader.load("models/bagel.glb", (gltf) => {
    scene.add(gltf.scene);
  });

  renderer = new WebGLRenderer({ canvas: starsCanvas.value, antialias: true, alpha: true });
  renderer.setSize(500, 500);

  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.update();

  const animate = () => {
    requestAnimationFrame(animate);

    controls.update();

    renderer.render(scene, camera);
  };

  animate();
});
</script>
