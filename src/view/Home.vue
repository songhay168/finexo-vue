<template>
  <div class="hero_area">
    <div class="hero_bg_box">
      <div class="bg_img_box">
        <img src= "/images/hero-bg.png" alt="" />
      </div>
    </div>
    <hero />
  </div>
  <service />
  <about />
  <choose />
  <team />
  <client />
</template>

<script>
import About from "../components/about.vue";
import Choose from "../components/choose.vue";
import Client from "../components/client.vue";
import Hero from "../components/hero.vue";
import Service from "../components/service.vue";
import Team from "../components/team.vue";
export default {
  components: {
    Hero,
    Service,
    About,
    Choose,
    Team,
    Client,
  },
  data(){
  }
};
</script>

<style></style>
