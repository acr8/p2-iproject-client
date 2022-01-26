<template>
    <nav class="bg-red-500 p-2 mt-0 fixed w-full z-10 top-0">
    <div class="container mx-auto flex flex-wrap items-center">
      <div class="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
        <div class="text-white no-underline hover:text-white hover:no-underline">
          <span  class="text-2xl pl-2 cursor-pointer">Get Market</span>
        </div>
      </div>
      <div class="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
        <ul class="list-reset flex justify-between flex-1 md:flex-none items-center">
          <li v-if="isLoggedIn" class="mr-3">
            <span class="inline-block py-2 px-1 text-white no-underline">Welcome {{currentUser.username}}!</span>
          </li>
          <li v-if="!isLoggedIn" class="mr-3">
            <span class="inline-block py-2 px-4 text-white no-underline">Welcome Guest!</span>
          </li>
          <li v-if="!isLoggedIn" @click.prevent="toLogin" class="mr-3">
            <span class="inline-block py-2 px-4 text-gray-100 hover:text-white no-underline cursor-pointer"
              >Login</span>
          </li>
          <li v-if="!isLoggedIn" @click.prevent="toRegister" class="mr-3">
            <span class="inline-block py-2 px-4 text-gray-100 hover:text-white no-underline cursor-pointer"
              >Register</span>
          </li>

          <li v-if="isLoggedIn" @click.prevent="toCart" class="mr-3">
            <span class="inline-block py-2 px-4 text-gray-100 hover:text-white no-underline cursor-pointer"
              >Cart</span>
          </li>
          
          <li v-if="isLoggedIn" @click.prevent="logout" class="mr-3">
            <span class="inline-block py-2 px-4 text-gray-100 hover:text-white no-underline cursor-pointer"
              >Logout</span>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: 'Navbar',
  data() {
    return {
      currentUser: {
        username: "",
        email: "",
      },
    }
  },
  computed: {
    ...mapState(["isLoggedIn"])
  },
  methods: {
    toRegister() {
      this.$router.push({name: "Register"})
    },
    toLogin() {
      this.$router.push({name: "Login"})
    },
    logout() {
      localStorage.clear();
      this.$store.commit("MUTATE_ISLOGGEDIN", false)
      this.$router.push({name: "Home"})
    },
     toCart() {
      this.$router.push({name: "Cart"})
    },
    
  },
  created() {
    if(localStorage.access_token) {
       this.$store.commit("MUTATE_ISLOGGEDIN", true),
        this.currentUser = {
          username: localStorage.getItem("username"),
          email: localStorage.getItem("email"),
        }
          
    }
  }
  
}
</script>

<style>

</style>