<template>
   <div class="w-full flex flex-wrap">

    <!-- Login Section -->
    <div class="w-full md:w-1/2 flex flex-col" style="background-color: #ffffff;">

      <div
        class="flex justify-center md:justify-start pt-1 left-9 md:pl-12 md:-mb-24 absolute hover:scale-105 transition duration-700 ease-in-out cursor-pointer">
        <img
          src="https://cdn.discordapp.com/attachments/414438038358196234/935229824455282808/Get_Market-logos_main.png"
          width="750px">
      </div>

      <div class="flex flex-col justify-center md:justify-start my-auto pt-4 md:pt-32 px-8 md:px-24 lg:px-32">
        <p class="text-left text-4xl font-bold text-gray-700 pt-6 pb-2">Welcome back!</p>
        <p class="text-left text-xl text-gray-700">Sign in here!</p>

        <form @submit.prevent="formLogin" class="flex flex-col pt-3 md:pt-6">

          <div class="flex flex-col">
            <label for="email" class="text-xl font-bold mb-1" style="color: rgb(255, 38, 0);">Email</label>
            <input type="text" v-model="loginData.email" placeholder="your@email.com"
              class="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-red-400 focus:shadow-outline border-gray-400 hover:border-red-400 transition ease-in-out duration-200">
          </div>

          <div class="flex flex-col pt-4">
            <label for="password" class="text-xl font-bold mb-1" style="color: rgb(255, 38, 0);">Password</label>
            <input type="password" v-model="loginData.password" placeholder="Password"
              class="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline border-gray-400 hover:border-red-400 transition ease-in-out duration-200">
          </div>

          <button type="submit"
            class="rounded-full bg-red-500 text-white font-bold text-lg hover:bg-red-700 p-2 mt-8 transition ease-in-out duration-200 cursor-pointer">
            Login
          </button>

        </form>

        <div class="text-center pt-10 pb-6">
          <p>Don't have an account? <span @click="toRegister" class="underline font-semibold cursor-pointer hover:text-red-700">Register
              here.</span></p>
        </div>

        <div class="text-center pb-4">
          <p>Or Sign In with Google</p>
        </div>

        <div>
          <GoogleLogin 
          :params="params"
          :onSuccess="onSuccess"
            class="bg-gray-300 flex items-center justify-center w-full px-4 py-3 text-sm text-black text-gray-700 border border-gray-300 rounded-full hover:border-gray-600 focus:border-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="w-4 h-4 mr-2"
              viewBox="0 0 48 48">
              <defs>
                <path id="a"
                  d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" />
              </defs>
              <clipPath id="b">
                <use xlink:href="#a" overflow="visible" />
              </clipPath>
              <path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
              <path clip-path="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" />
              <path clip-path="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" />
              <path clip-path="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" />
            </svg>Google
          </GoogleLogin>

          <div class="text-center pt-10 pb-6">
            <p>Back to <span @click.prevent="toHome" class="underline font-semibold cursor-pointer hover:text-red-700">home</span></p>
          </div>
        </div>
      </div>
    </div>

    <!-- Image Section -->
    <div class="w-1/2 shadow-2xl">
      <img class="object-cover w-full h-screen hidden md:block"
        src="https://images.unsplash.com/photo-1573855619003-97b4799dcd8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80">
    </div>
  </div>
</template>

<script>
import GoogleLogin from "vue-google-login";
export default {
  name: "LoginPage",
  components: {
    GoogleLogin
  },
  data() {
    return {
      loginData: {
        email: "",
        password: "",
      },
      params: {
        client_id: "199910436713-vf3a8iki4hadh9e1i1ghro1omj65jboh.apps.googleusercontent.com"
      }
    }
  },
  methods: {
    toHome() {
      this.$router.push({name: "Home"})
    },
    async onSuccess(userData) {
      await this.$store.dispatch("googleSignIn", userData);
       if(localStorage.getItem("access_token")) {
        this.$router.push({name: "Home"})
      } 
    },
    async formLogin() {
      await this.$store.dispatch("doLogin", this.loginData);
      if(localStorage.getItem("access_token")) {
      this.$router.push({name: "Home"})
      } 
    },
      toRegister() {
      this.$router.push({name: "Register"})
    },
  }
 

}
</script>

<style>

</style>