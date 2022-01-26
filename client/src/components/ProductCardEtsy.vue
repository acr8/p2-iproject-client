<template>
      <div class="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
        <div>
          
            <img class="hover:grow hover:shadow-lg w-80 object-fit h-80"
            :src="productEtsy.Images[0].url_570xN">
         
          <div class="pt-3 flex items-center justify-between">
            <p class="text-left truncate">{{productEtsy.title}}</p>
            <i v-if="isLoggedIn" class="fas fa-shopping-cart text-gray-500 hover:text-black cursor-pointer mx-2 text-lg"></i>
          </div>
          <p class="pt-1 text-gray-900 text-left">${{productEtsy.price}}</p>
        </div>
      </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: 'ProductCardEtsy',
  props: ["productEtsy"],
   computed: {
    ...mapState(["isLoggedIn"])
  },
 
}
</script>

<style>

</style>