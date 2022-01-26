<template>
  <div class="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
      
  <!-- nav -->
  <Navbar></Navbar>
  <section
    class="w-full mx-auto bg-nordic-gray-light flex mt-24 pt-12 md:pt-0 md:items-center bg-cover bg-right rounded-lg"
    style="max-width:1700px; height: 32rem; background-image: url('https://images.unsplash.com/photo-1561715276-a2d087060f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');">

    <div class="container mx-auto">

      <div class="flex flex-col w-full lg:w-1/2 justify-center items-start  px-6 tracking-wide">
        <h1 class="text-white text-4xl my-4 font-bold">Welcome to Get Market!</h1>
        <p class="text-gray-100 text-xl inline-block no-underline border-gray-600 leading-relaxed ">Get The Stuff You
          Want!</p>
      </div>
    </div>
  </section>

  <section class="bg-white py-8">
    <div class="container mx-auto flex items-center flex-wrap pt-4 pb-12">
      <nav id="store" class="w-full z-30 top-0 px-6 py-1">
        <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
          <div class="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl ">
            Products
          </div>
          <div class="flex items-center" id="store-nav-content">
            <!-- <span>
              <div class="relative inline-flex mx-4">
                <svg class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 412 232">
                  <path
                    d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                    fill="#648299" fill-rule="nonzero" />
                </svg>
                <select v-model="category"
                  class="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
                  <option  v-for="category in categories" :key="category.id" :value="category">{{category}}</option>
                </select>
              </div>
            </span>
            <span @click.prevent="getProductsByCategory"
            class="pl-3 inline-block no-underline hover:text-black">
              <svg class="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24">
                <path
                  d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z" />
              </svg>
            </span> -->
          </div>
        </div>
      </nav>
        <ProductCard
       v-for="product in products"
        :key="product.id"
        :product="product"
      ></ProductCard>

      <ProductCardEtsy
       v-for="productEtsy in productsEtsy.results"
        :key="productEtsy.id"
        :productEtsy="productEtsy"
      ></ProductCardEtsy>
      <!-- <div v-if="productsByCategory.length === 0">
      <ProductCard
       v-for="product in products"
        :key="product.id"
        :product="product"
      ></ProductCard>
      </div>
      <div v-if="productsByCategory.length !== 0">
      <ProductCard
       v-for="product in productsByCategory"
        :key="product.id"
        :product="product"
      ></ProductCard>
      </div>
      <div v-if="productsByCategory.length === 0">
      <ProductCardEtsy
       v-for="productEtsy in productsEtsy.results"
        :key="productEtsy.id"
        :productEtsy="productEtsy"
      ></ProductCardEtsy>
      </div> -->


    </div>
  </section>

  <footer class="container mx-auto bg-white py-8 border-t border-gray-400">

  </footer>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import ProductCard from "../components/ProductCard.vue";
import ProductCardEtsy from "../components/ProductCardEtsy.vue";
import Navbar from "../components/Navbar.vue";

export default {
  name: "HomePage",
  components: {
    ProductCard,
    ProductCardEtsy,
    Navbar
  },
  data() {
    return {
      category : ''
    }
  },
  computed: {
    ...mapState(["products", "productsEtsy", "categories", "productsByCategory"]),
  },
  methods: {
    ...mapActions(["fetchProducts", "fetchProductsEtsy", "fetchCategory"]),
    getProductsByCategory() {
      this.$store.dispatch("fetchProductsByCategory", this.category);
    }
  },
  created() {
    this.fetchProducts(),
    this.fetchProductsEtsy(),
    this.fetchCategory(),
    this.getProductsByCategory()
  }
}
</script>

<style>
  .work-sans {
    font-family: 'Work Sans', sans-serif;
  }

  #menu-toggle:checked+#menu {
    display: block;
  }

  .hover\:grow {
    transition: all 0.3s;
    transform: scale(1);
  }

  .hover\:grow:hover {
    transform: scale(1.02);
  }
</style>