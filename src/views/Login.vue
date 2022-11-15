<script setup>
import axios from "axios";
</script>

<template>
  <div class="login-box">
    <h1>Login</h1>
    <div class="kotak_login">
      <form @submit.prevent="login">
        <div class="textbox">
          <i class="fa fa-user" aria-hidden="true"></i>
          <input
            type="text"
            name="email"
            placeholder="Email..."
            required="required"
            autofocus
            autocomplete="off"
            v-model="user.email"
          /><br />
        </div>
        <div class="textbox">
          <i class="fa fa-lock" aria-hidden="true"></i>
          <input
            type="password"
            name="password"
            class="form_login"
            placeholder="Password..."
            required="required"
            v-model="user.password"
          /><br />
        </div>
        <input class="btn" type="submit" name="submit" value="Sign in" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: "ardian@gmail.com",
        password: "123",
      },
      loggedin: localStorage.getItem("loggedin"),
    };
  },
  methods: {
    login() {
      if (this.user.email && this.user.password) {
        axios
          .post("http://127.0.0.1:8000/api/login", {
            email: this.user.email,
            password: this.user.password,
          })
          .then((res) => {
            if (res.data.success) {
              localStorage.setItem("loggedin", "true");
              localStorage.setItem("token", res.data.token);
              this.loggedin = true;
              return this.$router.push("/Home");
            }
          });
      }
    },
  },
};
</script>

<style scoped>
.login-box {
  width: 280px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: blue;
}
.login-box h1 {
  float: left;
  font-size: 40px;
  margin-bottom: 50px;
  border-bottom: 6px solid #4caf50;
  padding: 13px 0;
}
.textbox {
  width: 100%;
  overflow: hidden;
  font-size: 20px;
  padding: 8px 0;
  margin: 8px 0;
  border-bottom: 1px solid #4caf50;
}
.textbox i {
  width: 26px;
  float: left;
  text-align: center;
}
.textbox input {
  border: none;
  outline: none;
  background: none;
  color: blue;
  font-size: 18px;
  width: 80%;
  float: left;
  margin: 0 10px;
}
.btn {
  width: 100%;
  background: none;
  border: 2px solid #4caf50;
  color: blue;
  font-size: 18px;
  cursor: pointer;
  margin: 12px 0;
}
</style>