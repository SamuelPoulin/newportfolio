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
  Scene,
  WebGLRenderer,
  Color,
  PerspectiveCamera,
  AnimationMixer,
  Clock,
} from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

import { useWindowSize } from "@vueuse/core";

const starsCanvas = ref(null);
const { width, height } = useWindowSize();

let clock: Clock;
let camera: PerspectiveCamera;
let scene: Scene;
let loader: GLTFLoader;
let dracoLoader: DRACOLoader;
let mixers: Ref<AnimationMixer[]> = ref([]);
let renderer: WebGLRenderer;

onMounted(() => {
  if (!starsCanvas.value) return;

  clock = new Clock();

  camera = new PerspectiveCamera(45, width.value / height.value, 1, 1000);
  camera.position.z = 500;

  scene = new Scene();
  scene.background = new Color(0xf0f0f0);

  loader = new GLTFLoader();
  dracoLoader = new DRACOLoader();

  dracoLoader.setDecoderPath("draco/");
  loader.setDRACOLoader(dracoLoader);

  loader.load("models/star.glb", (gltf) => {
    const mixer = new AnimationMixer(gltf.scene);

    for (let animation of gltf.animations) {
      mixer.clipAction(animation).play();
    }

    for (let i = -5; i < 5; ++i) {
      for (let j = -5; j < 5; ++j) {
        const clone = gltf.scene.clone();

        const cloneMixer = new AnimationMixer(clone);

        for (let animation of gltf.animations) {
          cloneMixer.clipAction(animation).play();
        }

        clone.position.x = i * 100;
        clone.position.y = j * 100;

        scene.add(clone);

        mixers.value.push(cloneMixer);
      }
    }
  });

  renderer = new WebGLRenderer({ canvas: starsCanvas.value, antialias: true });
  renderer.setSize(width.value, height.value);
  renderer.render(scene, camera);

  const animate = () => {
    const deltaTime = clock.getDelta();

    for (let mixer of mixers.value) {
      mixer.update(deltaTime);
    }

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };

  animate();
});
</script>
