<template>
  <section
    class="vh-100 bg-image"
    style="
      background-image: url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp');
    "
  >
    <div class="mask d-flex align-items-center h-100 gradient-custom-3">
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-9 col-lg-7 col-xl-6">
            <div class="card" style="border-radius: 15px">
              <div class="card-body p-5">
                <h2 class="text-uppercase text-center mb-5">Log-in</h2>
                <Form @submit="login">
                  <!-- Email input -->
                  <div data-mdb-input-init class="form-outline mb-4">
                    <Field
                      name="email"
                      type="email"
                      id="form2Example1"
                      class="form-control"
                      v-model="username"
                      :rule="emailRule"
                    />
                    <ErrorMessage name="email" />
                    <label class="form-label" for="form2Example1">User</label>
                  </div>

                  <!-- Password input -->
                  <div data-mdb-input-init class="form-outline mb-4">
                    <Field
                      type="password"
                      name="password"
                      id="form2Example2"
                      class="form-control"
                      v-model="password"
                      :rule="passwordRule"
                    />
                    <ErrorMessage  name="password" />
                    <label class="form-label" for="form2Example2"
                      >Password</label
                    >
                  </div>

                  <!-- Submit button -->
                  <button
                    type="submit"
                    data-mdb-button-init
                    data-mdb-ripple-init
                    class="btn btn-primary btn-block mb-4"
                  >
                    Sign in
                  </button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as Yup from "yup";
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      password: "",
      emailRule: Yup.string().email().required(),
      passwordRule: Yup.string().min(6).required(),
    };
  },
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  methods: {
    async login() {
      try {
        const { data } = await axios.post("http://172.23.128.69:3000/login", {
          username: this.username,
          password: this.password,
        });
        console.log("Login succssful", data);
        if (data.pass == "true") {
          this.$router.push("/");
        } else {
          this.$router.push("/login");
        }
      } catch (error) {
        console("get failed:", error);
      }
    },
  },
};
</script>

<style></style>
