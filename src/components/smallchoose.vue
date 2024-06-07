<template>
  <div>
    <div class="why_container">
      <div class="box" v-for="(choose, index) in chooses" :key="index">
        <div class="img-box">
          <img :src="choose.locat" alt="" />
        </div>
        <div class="detail-box">
          <h5>{{ choose.title }}</h5>
          <p>
            {{ choose.content }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from '@/store/store'
import { mapState } from 'pinia'
export default {
  computed:{
    ...mapState(useStore, ['chooses']),
  },
  data() {
    return {
      // chooses: [
      //   {
      //     title: "Expert Management",
      //     locat: "images/choose/w1.png",
      //     content:
      //       "Incidunt odit rerum tenetur alias architecto asperiores omniscumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus",
      //   },
      //   {
      //     title: "Secure Investment",
      //     locat: "images/choose/w2.png",
      //     content:
      //       "Incidunt odit rerum tenetur alias architecto asperiores omniscumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus",
      //   },
      //   {
      //     title: "Instant Trading",
      //     locat: "images/choose/w3.png",
      //     content:
      //       "Incidunt odit rerum tenetur alias architecto asperiores omniscumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus",
      //   },
      //   {
      //     title: "Happy Customers",
      //     locat: "images/choose/w4.png",
      //     content:
      //       "Incidunt odit rerum tenetur alias architecto asperiores omniscumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus",
      //   },
      // ],
    };
  },
};
</script>

<style></style>
