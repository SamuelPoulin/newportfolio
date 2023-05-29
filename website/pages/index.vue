<template>
  <div id="landing-container">
    <div id="landing-infos-container">
      <div id="landing-intro">
        <h1 id="landing-name">SAMUEL POULIN</h1>
        <h2 class="landing-description">
          {{ result.LandingPageDescription.description }}
        </h2>
        <div id="landing-city-container">
          <h2 class="landing-description">based in</h2>
          <div id="landing-city">
            <button id="landing-button" v-on:click="showBagel = !showBagel">{{ showBagel ? "the city of bagels" : "Montréal" }}</button>
            <MontrealLogo />
          </div>
        </div>
      </div>
      <div id="landing-links">
        <a
          class="landing-link"
          href="/files/POULIN_SAMUEL_EN_RESUME.pdf"
          download="POULIN_SAMUEL_EN_RESUME.pdf"
          >Resume</a
        >
        <a
          class="landing-link"
          href="https://linkedin.com/in/samuel-poulin"
          target="_blank"
          >LinkedIn</a
        >
        <a
          class="landing-link"
          href="https://github.com/samuelpoulin"
          target="_blank"
          >Github</a
        >
      </div>
    </div>
    <div id="landing-bagel-container">
    <BagelCanvas v-if="showBagel" />
    </div>
  </div>

  <div id="projects-container">
    <div class="section-title-container">
      <h2 class="section-title"># previous work</h2>
    </div>
  </div>

</template>

<style>
#landing-container {
  display: flex;
}

#landing-infos-container {
  display: flex;
  flex-direction: column;

  padding: 100px 0px 0px;
  gap: 175px;
}

#landing-name {
  margin: 0;

  white-space: nowrap;
  font-family: Inter;
  font-weight: 700;
  font-size: 112px;
}

.landing-description {
  margin: 0;
   
  font-family: Inter;
  font-weight: 500;
  font-size: 40px;
}

#landing-city-container {
  display: flex;

  gap: 10px;
}

#landing-city {
  display: flex;
  align-items: center;

  gap: 10px;
}

#landing-button {
  border: none;
  background: none;
  text-decoration-line: underline;
  font-family: Inter;
  font-weight: 500;
  font-size: 40px;
  cursor: pointer;
}

#landing-links {
  display: flex;

  gap: 25px;
}

.landing-link {
  color: #000000;
  font-family: Inter;
  font-weight: 500;
  font-size: 20px;
}

#landing-bagel-container {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
}

.section-title-container {
  display: flex;
  align-items: center;

  height: 100px;
}

.section-title {
  font-family: Inter;
  font-weight: 500;
  font-size: 40px;
}

#projects-container {
  display: flex;

  padding-top: 175px;
}
</style>

<script setup lang="ts">
import MontrealLogo from "~/components/shared/MontrealLogo.vue";

useHead({
  title: "Samuel Poulin",
  meta: [
    {
      name: "description",
      content: "Software Engineering graduate based in Montréal.",
    },
  ],
});

const showBagel = ref(false);

const LandingPageDescriptionQuery = gql`
  query {
    LandingPageDescription {
      description
    }
  }
`;

const { result } = useQuery(LandingPageDescriptionQuery);

</script>
