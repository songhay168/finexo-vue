<template>
  <fin-header/>
  <router-view></router-view>
  <info />
  <Footer/>
</template>

<script>
import finHeader from './components/finHeader.vue';
import Footer from './components/footer.vue';
import Info from './components/info.vue';
export default {
  components: { finHeader, Info, Footer },
  name: "App",
};
</script>
<style>
.bg{
  color: black;
}
</style>
