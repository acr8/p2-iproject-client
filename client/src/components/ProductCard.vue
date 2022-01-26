<template>
      <div class="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
        <div>
          
            <img @click.prevent="getProductDetail(product.id)" class="hover:grow hover:shadow-lg w-80 object-fit h-80"
            :src="product.image">
         
          <div class="pt-3 flex items-center justify-between">
            <p class="text-left truncate">{{product.title}}</p>
            <i v-if="isLoggedIn" 
            @click.prevent="addToCart(product.id)"
            class="fas fa-shopping-cart text-gray-500 hover:text-black cursor-pointer mx-2 text-lg"></i>
          </div>
          <p class="pt-1 text-gray-900 text-left">${{product.price}}</p>
        </div>
      </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: 'ProductCard',
  props: ["product"],
  computed: {
    ...mapState(["isLoggedIn"])
  },
  methods: {
    async addToCart(id) {
      await this.$store.dispatch("postCart", id)
    },
      getProductDetail(id) {
      this.$router.push(`product/${id}`);

      this.$store.dispatch("fetchProductById", id);

    },
  }
  
}
</script>

<style>

</style>