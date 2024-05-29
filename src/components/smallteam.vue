<template>
  <div>
    <div class="team_container">
      <div class="row">
        <div class="col-lg-3 col-sm-6" v-for="(team, index) in teams" :key="index">
          <div class="box">
            <div class="img-box">
              <img :src="team.locat" class="img1" alt="" />
            </div>
            <div class="detail-box">
              <h5>{{team.name}}</h5>
              <p>{{team.position}}</p>
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teams: [
        {
          name: "Joseph Brown",
          locat: "images/team/team-1.jpg",
          position: "Marketing Head",
        },
        {
          name: "Nancy White",
          locat: "images/team/team-2.jpg",
          position: "Marketing Head",
        },
        {
          name: "Earl Martinez",
          locat: "images/team/team-3.jpg",
          position: "Marketing Head",
        },
        {
          name: "Josephine Allard",
          locat: "images/team/team-4.jpg",
          position: "Marketing Head",
        },
      ],
    };
  },
};
</script>

<style></style>
