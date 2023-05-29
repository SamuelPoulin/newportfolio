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
            <button id="landing-button" v-on:click="showBagel = !showBagel">
              {{ showBagel ? "the city of bagels" : "Montréal" }}
            </button>
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
      <a id="projects" />
      <h2 class="section-title"># previous work</h2>
    </div>
    <div id="projects-list">
      <div class="project-container" v-for="project of result.Projects.docs">
        <nuxt-img class="project-picture" :src="project.picture.url" />
        <div class="project-informations">
          <h3 class="project-name">
            {{ project.name }}
          </h3>
          <div class="project-description">{{ project.description }}</div>
          <div class="project-description">
            <span>Built with </span>
            <span>
              {{ project.skills.map((skill) => skill.name).join(", ") }}.
            </span>
          </div>
        </div>
        <div class="project-links">
          <a
            class="project-link"
            v-if="project.url"
            :href="project.url"
            target="_blank"
            >Visit</a
          >
          <a
            class="project-link"
            v-if="project.githubUrl"
            :href="project.githubUrl"
            target="_blank"
            >GitHub</a
          >
        </div>
      </div>
    </div>
  </div>

  <div id="about-container">
    <div class="section-title-container">
      <a id="about" />
      <h2 class="section-title"># about me</h2>
    </div>
  </div>

  <div id="skills-container">
    <div class="section-title-container">
      <a id="skills" />
      <h2 class="section-title"># things I picked up along the way</h2>
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
  user-select: none;
  font-family: Inter;
  font-weight: 700;
  font-size: 112px;
}

.landing-description {
  margin: 0;

  user-select: none;
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
  user-select: none;
  font-family: Inter;
  font-weight: 500;
  font-size: 40px;
}

#projects-container {
  display: flex;
  flex-direction: column;

  padding-top: 175px;
}

#projects-list {
  display: flex;

  gap: 50px;
}

.project-container {
  display: flex;
  flex-direction: column;

  gap: 10px;
  width: 300px;
}

.project-informations {
  display: flex;
  flex-direction: column;

  gap: 15px;
  height: 250px;
}

.project-links {
  display: flex;

  gap: 20px;
}

.project-link {
  color: #000000;
  font-family: Inter;
  font-weight: 400;
  font-size: 20px;
}

.project-name {
  margin: 0;

  font-family: Inter;
  font-weight: 500;
  font-size: 32px;
}

.project-description {
  font-family: Inter;
  font-weight: 400;
  font-size: 20px;
}

#about-container {
  display: flex;

  padding-top: 100px;
}

#skills-container {
  display: flex;

  padding-top: 100px;
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

const LandingPageQuery = gql`
  query {
    LandingPageDescription {
      description
    }
    Projects {
      docs {
        name
        description
        picture {
          url
        }
        githubUrl
        url
        skills {
          name
        }
      }
    }
  }
`;

const { result } = useQuery(LandingPageQuery);
</script>
