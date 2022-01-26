<template>
      <div class="container p-8 mx-auto mt-12 bg-white">
      <div class="w-full overflow-x-auto">
        <div class="my-2">
          <h3 class="text-xl font-bold tracking-wider">Shopping Cart 3 item</h3>
        </div>
        <table class="w-full shadow-inner">
          <thead>
            <tr class="bg-gray-100">
              <th class="px-6 py-3 font-bold whitespace-nowrap">Product</th>
              <th class="px-6 py-3 font-bold whitespace-nowrap">Price</th>
              <th class="px-6 py-3 font-bold whitespace-nowrap">Remove</th>
            </tr>
          </thead>
          <tbody>
            <Cartlist
            v-for="cart in carts"
            :key='cart.id'
            :cart="cart"
            ></Cartlist>
          </tbody>
        </table>
        <div class="flex justify-end mt-4 space-x-2">
          <button @click.prevent="toHome"
            class="px-6 py-3 text-sm text-gray-800 bg-gray-200 hover:bg-gray-400 rounded-full">
            Back to home
          </button>
          <button @click="midTrans"
            class="px-6 py-3 text-sm text-white bg-indigo-500 hover:bg-indigo-600 rounded-full">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Cartlist from "../components/Cartlist.vue";
export default {
  name: "CartPage",
  components: {
    Cartlist
  },
  data() {
    return {
      cartData: {
        name:'name',
        price: '150'
      }
    }
  },
  computed: {
    ...mapState(["carts"]),
  },
  methods: {
    ...mapActions(["fetchCart"]),
    toHome() {
      this.$router.push({name: "Home"})
    },
    async midTrans() {
      await this.$store.dispatch('postTransaction', this.cartData)
      await this.$store.dispatch("clearCart");
      this.$router.push({name: "Transaction"})
    }
  },
  created() {
    this.fetchCart()
  }
}
</script>

<style>

</style>