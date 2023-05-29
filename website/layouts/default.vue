<template>
  <div id="page-container">
    <header>
      <slot name="header">
        <Header />
      </slot>
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <slot name="footer">
        <Footer />
      </slot>
    </footer>
  </div>
</template>

<style>
#page-container {
  display: flex;
  flex-direction: column;

  padding: 0px 50px;
}

html,
body {
  max-width: 100%;
  overflow-x: hidden;
}

/* 2xl */
@media only screen and (max-width: 1536px) {
}

/* xl */
@media only screen and (max-width: 1280px) {
}

/* lg */
@media only screen and (max-width: 1024px) {
}

/* md */
@media only screen and (max-width: 768px) {
}

/* sm */
@media only screen and (max-width: 640px) {
  #page-container {
    padding: 0px 15px;
  }
}
</style>

<script setup lang="ts">
import Footer from "~/components/layout/Footer.vue";
import Header from "~/components/layout/Header.vue";
</script>
