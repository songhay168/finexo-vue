import { defineStore } from "pinia";
import axios from "axios";

export const useStore = defineStore("store", {
  state: () => ({
    chooses: [
      {
        title: "Expert Management",
        locat: "images/choose/w1.png",
        content:
          "Incidunt odit rerum tenetur alias architecto asperiores omniscumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus",
      },
      {
        title: "Secure Investment",
        locat: "images/choose/w2.png",
        content:
          "Incidunt odit rerum tenetur alias architecto asperiores omniscumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus",
      },
      {
        title: "Instant Trading",
        locat: "images/choose/w3.png",
        content:
          "Incidunt odit rerum tenetur alias architecto asperiores omniscumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus",
      },
      {
        title: "Happy Customers",
        locat: "images/choose/w4.png",
        content:
          "Incidunt odit rerum tenetur alias architecto asperiores omniscumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus",
      },
    ],
    users: [],
    usersLogin:[],
    register:{}
  }),
  actions: {
    async fetchUser() {
      // const api = await axios.get("http://172.23.128.253:3000/users")
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/users`);
      this.users = data;
    },
    async userLogin() {
    //   const api = "http://172.23.128.253:3000/login";
      const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/login`, {
        username: this.username,
        password: this.password,
      });
      console.log(data)
    },
    async getRegister(name,email,password,repeate_pass,agree) {
      const api = `${import.meta.env.VITE_API_URL}/register`;
      const {data} = await axios.post(api, {
        name: name,
        email: email,
        password: password,
        repeate_pass: repeate_pass,
        agree: agree,
      });
      this.register = data

      console.log(this.register);
      // this.handleSubmit();
    },
  },
});
