<template>
  <div>
    <canvas ref="bagelCanvas" id="bagel-canvas" />
  </div>
</template>

<style>
#bagel-canvas {
  display: flex;

  width: 100vw;
  height: 100vh;

  cursor: pointer;
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
  Vector3,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const bagelCanvas = ref(null);
let shouldLerp = ref(true);

let light: Light;
let controls: OrbitControls;
let camera: PerspectiveCamera;
let scene: Scene;
let loader: GLTFLoader;
let dracoLoader: DRACOLoader;
let renderer: WebGLRenderer;

onMounted(() => {
  if (!bagelCanvas.value) return;

  camera = new PerspectiveCamera(45, 1, 1, 1000);
  camera.position.z = 1000;

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

  renderer = new WebGLRenderer({
    canvas: bagelCanvas.value,
    antialias: true,
    alpha: true,
  });
  renderer.setSize(500, 500);

  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.update();

  const animate = () => {
    requestAnimationFrame(animate);

    controls.update();

    if (Math.floor(camera.position.z) === 25) {
      shouldLerp.value = false;
    }

    if (shouldLerp.value) {
      camera.position.lerp(
        new Vector3(camera.position.x, camera.position.y, 15),
        0.1
      );
    }

    renderer.render(scene, camera);
  };

  animate();
});
</script>
