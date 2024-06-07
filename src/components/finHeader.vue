<template>
  <div class="bg">
    <!-- header section strats -->
    <header class="header_section">
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg custom_nav-container">
          <a class="navbar-brand" href="index.html">
            <span> Finexo </span>
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class=""> </span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li class="nav-item" :class="{ active: $route.path == '/' }">
                <router-link to="/" class="nav-link">Home</router-link>
              </li>
              <li class="nav-item" :class="{ active: $route.path == '/about' }">
                <router-link to="/about" class="nav-link">About</router-link>
              </li>
              <li
                class="nav-item"
                :class="{ active: $route.path == '/servies' }"
              >
                <router-link to="/servies" class="nav-link"
                  >Service</router-link
                >
              </li>
              <li class="nav-item" :class="{ active: $route.path == '/whyus' }">
                <router-link to="/whyus" class="nav-link">Why Us</router-link>
              </li>
              <li
                class="nav-item"
                :class="{ active: $route.path == '/teamus' }"
              >
                <router-link to="/teamus" class="nav-link">Team</router-link>
              </li>
              <li
                class="nav-item"
                :class="{ active: $route.path == '/register' }"
              >
                <router-link to="/register" class="nav-link"
                  >Register</router-link
                >
              </li>
              <li class="nav-item" :class="{ active: $route.path == '/login' }">
                <router-link to="/login" class="nav-link">Login</router-link>
              </li>
              <li class="nav-item active">
                <button @click="changeLang">Change</button>
              </li>
              <form class="form-inline">
                <button class="btn my-2 my-sm-0 nav_search-btn" type="submit">
                  <i class="fa fa-search" aria-hidden="true"></i>
                </button>
              </form>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  methods: {
    changeLang() {
      if (this.$i18n.locale == "en") {
        this.$i18n.locale = "km";
      } else {
        this.$i18n.locale = "en";
      }
    },
  },
};
</script>

<style>
.bg {
  background-color: #170d5a;
}
</style>
