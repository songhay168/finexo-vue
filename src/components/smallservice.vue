<template>
  <div>
    <div class="row">
      <div class="col-md-4" v-for="(img, index) in imgs" :key="index">
        <div class="box">
          <div class="img-box">
            <img :src="img.locat" alt="" />
          </div>
          <div class="detail-box">
            <h5>{{ img.title }}</h5>
            <p>
              {{ img.content }}
            </p>
            <a href=""> Read More </a>
          </div>
        </div>
      </div>
    </div>
    <div class="btn-box">
      <a href=""> View All </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs: [
        {
          title: "CURRENCY WALLET",
          locat: "/images/service_img/s1.png",
          content:
            "fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using",
        },
        {
          title: "SECURITY STORAGE",
          locat: "/images/service_img/s2.png",
          content:
            "fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using",
        },
        {
          title: "EXPERT SUPPORT",
          locat: "/images/service_img/s3.png",
          content:
            "fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using",
        },
      ],
    };
  },
};
</script>

<style></style>
