<template>
  <StarsCanvas />

  <div v-for="post in data.posts">
    <div>{{ post.title }}</div>
    <div>{{ post.content }}</div>
  </div>
</template>

<script setup lang="ts">
import StarsCanvas from "~/components/StarsCanvas.vue";

useHead({
  title: "Samuel Poulin",
  meta: [{ name: "description", content: "B. Eng. in Software Engineering." }],
});

const data = {
  posts: [
    {
      title: "about me ~",
      content: "Lorem ipsum",
    },
    {
      title: "previous work ~",
      content: "Lorem ipsum",
    },
  ],
};
</script>
