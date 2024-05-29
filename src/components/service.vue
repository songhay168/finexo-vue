<template>
  <div>
    <section class="service_section layout_padding">
      <div class="service_container">
        <div class="container">
          <div class="heading_container heading_center">
            <h2>Our <span>Services</span></h2>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration
            </p>
          </div>
          <smallservice />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import smallservice from "./smallservice.vue";

export default {
  components: { smallservice },
};
</script>

<style></style>
