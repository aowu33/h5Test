<template>
  <div class="home">
    <Button type="primary" @click="loginHandle">login</Button>
  </div>
</template>

<script>
import { Button } from "vant";
// import axios from "axios";
// import  apiStore  from "../api/api";
export default {
  name: "Home",
  components: {
    Button,
  },

  data() {
    return {
      formData: {
        name: "name",
        pwd: "wwwwww",
      },
    };
  },
  methods: {
    loginHandle: function () {
      // console.log(axios.request(),'axios');
      // axios.request().catch((res) => console.log(res));
    },
  },
};
</script>

<style>
.content {
  padding: 16px 16px 160px;
}
</style>
