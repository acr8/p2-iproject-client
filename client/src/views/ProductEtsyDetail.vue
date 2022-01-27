<template>
  <div>
<Navbar></Navbar>
<div class="mt-80 mx-auto w-screen flex justify-center content-center">
<div class="flex items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl">
    <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" :src="productEtsyDetail.results[0].Images[0].url_570xN" alt="">
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-left text-xl font-bold tracking-tight text-gray-900 dark:text-white">{{productEtsyDetail.results[0].title}}</h5>
        <p class="mb-3 text-left font-normal text-gray-700 dark:text-gray-400">{{productEtsyDetail.results[0].description}}</p>
        <p class="mb-3 text-left font-normal text-gray-700 dark:text-gray-400">Price: ${{productEtsyDetail.results[0].price}}</p>
    </div>
</div>

</div>
</div>


  
</template>

<script>
import { mapState, mapActions } from "vuex";
import Navbar from "../components/Navbar.vue";
export default {
  name: 'ProductEtsyDetail',
   components: {
    Navbar
  },
  computed: {
    ...mapState(['productEtsyDetail'])
  },
  methods: {
    fetchProductEtsyDetail() {
      this.$store.dispatch("fetchProductEtsyById", this.$route.params.id)
    }
  },
  created() {
    this.fetchProductEtsyDetail()
  }
}
</script>

<style>

</style>