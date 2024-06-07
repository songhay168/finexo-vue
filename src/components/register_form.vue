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
                <h2 class="text-uppercase text-center mb-5">
                  Create an account
                </h2>

                <Form @submit="getRegister">
                  <div class="form-outline mb-4">
                    <Field
                      type="name"
                      name="name"
                      v-model="name"
                      :rules="nameRule"
                    />
                    <ErrorMessage name="name" />
                    <label class="form-label" for="form3Example1cg"
                      >Your Name</label
                    >
                  </div>

                  <div data-mdb-input-init class="form-outline mb-4">
                    <Field
                      type="email"
                      name="email"
                      v-model="email"
                      :rules="emailRule"
                    />
                    <ErrorMessage name="email" />
                    <label class="form-label" for="form3Example3cg"
                      >Your Email</label
                    >
                  </div>

                  <div data-mdb-input-init class="form-outline mb-4">
                    <Field
                      type="password"
                      name="password"
                      v-model="password"
                      :rules="passwordRule"
                    />
                    <ErrorMessage name="password" />
                    <label class="form-label" for="form3Example4cg"
                      >Password</label
                    >
                  </div>

                  <div data-mdb-input-init class="form-outline mb-4">
                    <Field
                      type="password"
                      name="password-confirm"
                      v-model="repeate_pass"
                      :rules="passwordreRule"
                    />
                    <ErrorMessage class="error" name="password-confirm" />
                    <label class="form-label" for="form3Example4cdg"
                      >Repeat your password</label
                    >
                  </div>
                  <div data-mdb-input-init class="form-outline mb-4">
                    <input
                      type="file"
                      @change="handleFile"
                      ref="uploadFile"
                      multiple
                    />
                  </div>

                  <div class="form-check d-flex justify-content-center mb-5">
                    <Field
                      as="my-checkbox"
                      name="terms"
                      type="checkbox"
                      :value="false"
                    />
                    <label class="form-check-label" for="form2Example3g">
                      I agree all statements in
                      <a href="#!" class="text-body"><u>Terms of service</u></a>
                    </label>
                    <ErrorMessage name="terms" />
                  </div>

                  <div class="d-flex justify-content-center">
                    <button
                      class="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                    >
                      Register
                    </button>
                  </div>

                  <p class="text-center text-muted mt-5 mb-0">
                    Have already an account?
                    <a href="#!" class="fw-bold text-body"><u>Login here</u></a>
                  </p>
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
import { useStore } from '@/store/store.js'
import { mapActions, mapState } from 'pinia'
import { Form, Field, ErrorMessage } from "vee-validate";
import * as Yup from "yup";
import axios from "axios";
export default {
  computed:{
    ...mapState(useStore, ['register']),
  },
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      repeate_pass: "",
      agree: "",
      files: [],
      selectedFile: null,
      validExtensions: ["jpg", "jpeg", "png", "gif"],
      maxSize: 2 * 1024 * 1024, // 2 MB
      nameRule: Yup.string().required(),
      emailRule: Yup.string().email().required(),
      passwordRule: Yup.string().min(6).required(),
    };
  },
  methods: {
    ...mapActions(useStore,['getRegister']),
    // async getRegister() {
    //   const api = "http://172.23.128.93:3000/register";
    //   const data = await axios.post(api, {
    //     name: this.name,
    //     email: this.email,
    //     password: this.password,
    //     repeate_pass: this.repeate_pass,
    //     agree: this.agree,
    //   });

    //   console.log(data);
    //   this.handleSubmit();
    // },
    handleFile(event) {
      //const file = event.target.files[0];
      const myList = [...event.target.files];
      console.log(myList);
      myList.forEach((file) => {
        if (file) {
          const fileExtension = file.name.split(".").pop().toLowerCase();
          if (!this.validExtensions.includes(fileExtension)) {
            alert(`${file.name} not allow`);
            this.$refs.uploadFile.value = "";
          }
          if (file.size > this.maxSize) {
            alert(`${file.name} file size must be <= 2MB`);
            this.$refs.uploadFile.value = "";
          }
        }
        this.files.push(file);
      });
      //console.log(file)
    },

    async handleSubmit() {
      const formData = new FormData();
      //formData.append("files", this.files);
      for (let i = 0; i < this.files.length; i++) {
        formData.append("files", this.files[i]);
      }
      const { data } = axios.post(
        "http://172.23.128.93:3000/upload-multiple",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(data);
      // }).then(response => {
      //   console.log('File uploaded successfully:', response.file);
      // })
      // .catch(error => {
      //   console.error('Error uploading file:', error);
      // });
    },
  },
};
</script>

<style>
.error {
  color: red;
}
</style>
