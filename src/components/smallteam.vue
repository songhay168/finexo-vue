<template>
  <div>
    <div class="team_container">
      <div class="row">
        <div
          class="col-lg-3 col-sm-6"
          v-for="(user, index) in users"
          :key="index"
        >
          <div class="box">
            <!-- <div class="img-box">
              <img :src="team.locat" class="img1" alt="" />
            </div> -->
            <div class="detail-box">
              <h5>{{ user.name }}</h5>
              <p>{{ user.email }}</p>
              <p>{{ user.job }}</p>
            </div>
            <div class="social_box">
              <a href="#">
                <i class="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="#">
                <i class="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="#">
                <i class="fa fa-linkedin" aria-hidden="true"></i>
              </a>
              <a href="#">
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </a>
              <a href="#">
                <i class="fa fa-youtube-play" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
        <slot name="new_slot"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from '@/store/store.js'
import { mapActions, mapState } from 'pinia'
export default {
  computed:{
    ...mapState(useStore, ['users']),
  },
  async mounted() {
    await this.fetchUser();
    console.log(this.users)
  },
  methods:{
    ...mapActions(useStore,['fetchUser'])
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
  // data() {
  //   return {
  //     teams: [
  //       {
  //         name: "Joseph Brown",
  //         locat: "images/team/team-1.jpg",
  //         position: "Marketing Head",
  //         quote: "tomorrow is tomorrow",
  //       },
  //       {
  //         name: "Nancy White",
  //         locat: "images/team/team-2.jpg",
  //         position: "Marketing Head",
  //         quote: "tomorrow is tomorrow",
  //       },
  //       {
  //         name: "Earl Martinez",
  //         locat: "images/team/team-3.jpg",
  //         position: "Marketing Head",
  //         quote: "tomorrow is tomorrow",
  //       },
  //       {
  //         name: "Josephine Allard",
  //         locat: "images/team/team-4.jpg",
  //         position: "Marketing Head",
  //         quote: "Today is Today",
  //       },
  //     ],
  //   };
  // },

</script>

<style></style>
