<template>
  <div id="header-container">
    <a id="logo-link" href="/"> SP </a>
    <div id="header-alert-container">
      <div class="header-alert-emoji">
        {{ result.HeaderAlert.emojiLeft }}
      </div>
      <div id="header-alert-text">
        {{ result.HeaderAlert.alert }}
      </div>
      <div class="header-alert-emoji">
        {{ result.HeaderAlert.emojiRight }}
      </div>
    </div>
    <div id="header-links-container">
      <a class="header-link" href="/#projects">projects</a>
      <a class="header-link" href="/#about">about</a>
      <a class="header-link" href="/#skills">skills</a>
    </div>
    <a class="header-link" href="mailto:samuel-poulin@outlook.com"
      >contact me</a
    >
  </div>
</template>

<style>
#header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 100px;
  width: 100%;
}

#logo-link {
  color: #000000;
  text-decoration: none;
  font-family: Inter;
  font-weight: 700;
  font-size: 20px;
}

#header-alert-container {
  display: flex;
  align-items: center;

  gap: 10px;
}

.header-alert-emoji {
  font-size: 32px;
}

#header-alert-text {
  font-family: Inter;
  font-weight: 400;
  font-size: 20px;
}

#header-links-container {
  display: flex;

  gap: 50px;
}

.header-link {
  color: #000000;
  font-family: Inter;
  font-weight: 400;
  font-size: 20px;
}
</style>

<script setup lang="ts">
const HeaderQuery = gql`
  query {
    HeaderAlert {
      emojiLeft
      alert
      emojiRight
    }
  }
`;

const { result } = useQuery(HeaderQuery);
</script>
