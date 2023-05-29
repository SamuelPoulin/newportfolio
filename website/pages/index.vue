<template>
  <BagelCanvas />

  <div v-for="post in data.posts">
    <div>{{ post.title }}</div>
    <div>{{ post.content }}</div>
  </div>
</template>

<script setup lang="ts">

useHead({
  title: "Samuel Poulin",
  meta: [{ name: "description", content: "Software Engineering graduate based in Montréal." }],
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
