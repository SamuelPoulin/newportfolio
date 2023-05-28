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
  PMREMGenerator,
  Color,
  Light,
  PerspectiveCamera,
  PointLight,
  Scene,
  WebGLRenderer,
  AmbientLight,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment";

import { useWindowSize } from "@vueuse/core";

const starsCanvas = ref(null);
const { width, height } = useWindowSize();

let light: Light;
let controls: OrbitControls;
let camera: PerspectiveCamera;
let cameraLight: Light;
let scene: Scene;
let loader: GLTFLoader;
let dracoLoader: DRACOLoader;
let renderer: WebGLRenderer;

onMounted(() => {
  if (!starsCanvas.value) return;

  camera = new PerspectiveCamera(45, width.value / height.value, 1, 1000);
  camera.position.z = 30;

  cameraLight = new PointLight(0xffffff, 1000);
  camera.add(cameraLight);

  scene = new Scene();
  scene.background = new Color(0xffffff);

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

  renderer = new WebGLRenderer({ canvas: starsCanvas.value, antialias: true });
  renderer.setSize(width.value, height.value);

  const pmremGenerator = new PMREMGenerator(renderer);
  // scene.environment = pmremGenerator.fromScene(
  //   new RoomEnvironment(),
  //   0.4
  // ).texture;

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
