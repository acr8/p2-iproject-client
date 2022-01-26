<template>
<div>
<Navbar></Navbar>
<div class="mt-32  ">
  <img 
   :src="productDetail.image" alt="" width="300">
</div>
<div>
  name: {{productDetail.title}}
</div>
<div>
  description: {{productDetail.description}}
</div>
<div>
  price: {{productDetail.price}}
</div>

</div>
  

</template>

<script>
import { mapState, mapActions } from "vuex";
import Navbar from "../components/Navbar.vue";
export default {
  name: "ProductDetailPage",
  components: {
    Navbar
  },
  computed: {
    ...mapState(['productDetail'])
  },
  methods: {
    fetchProductDetail() {
      this.$store.dispatch("fetchProductById", this.$route.params.id)
    }
  },
  created() {
    this.fetchProductDetail()
  }
}
</script>

<style>

</style>