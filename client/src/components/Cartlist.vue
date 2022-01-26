<template>
  <tr>
    <td class="p-4 px-6 text-center whitespace-nowrap">{{cart.productName}}</td>
    <td class="p-4 px-6 text-center whitespace-nowrap">$ {{cart.price}}</td>
    <td class="p-4 px-6 text-center whitespace-nowrap">
      <button @click.prevent="deleteListing(cart.id)"
      class="px-2 py-0 text-red-100 bg-red-600 rounded">x</button>
    </td>
  </tr>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: "Cartlist",
  props: ["cart"],
  methods: {
    ...mapActions(["fetchCart"]),
    async deleteListing(id) {
      await this.$store.dispatch("deleteCart", id)
      this.fetchCart()
    }
  }
};
</script>

<style></style>
