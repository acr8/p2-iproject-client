import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    productsEtsy: [],
    carts: [],
    isLoggedIn: false,
    isRegisterPage: false,
    url: "http://localhost:3000",
    midtransUrl: '',
    categories: [],
    productsByCategory:[],
    productDetail: [],
  },
  mutations: {
    MUTATE_MIDTRANSURL(state, payload) {
      state.midtransUrl = payload
    },
    MUTATE_PRODUCTS(state, payload) {
      state.products = payload;
    },
    MUTATE_PRODUCTSETSY(state, payload) {
      state.productsEtsy = payload;
    },
    MUTATE_ISLOGGEDIN(state, payload) {
      state.isLoggedIn = payload
    },
    MUTATE_ISREGISTERPAGE(state, payload) {
      state.isRegisterPage = payload
    },
    MUTATE_CART(state, payload) {
      state.carts = payload
    },
    MUTATE_CATEGORY(state, payload) {
      state.categories = payload
    },
    MUTATE_CLEAR_CART(state,  payload) {
      state.carts = []
    },
    MUTATE_PRODUCTSBYCATEGORY(state, payload) {
      state.productsByCategory = payload
    },
    MUTATE_PRODUCTDETAIL(state, payload) {
      state.productDetail = payload
    }
  },
  actions: {
    async postCart(context, payload) {
      try {
        const response = await axios({
          method: 'POST',
          url: `${context.state.url}/cart/${payload}`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        })
        console.log(response.data.message);
      } catch (err) {
        console.log(err);
      }
    },

    async postTransaction(context, payload) {
      try {
        const data = {
          name: payload.name,
          price: payload.price
        }
        const response = await axios({
          method: 'POST',
          url: `${context.state.url}/transaction`,
          data: data
        })
        context.commit("MUTATE_MIDTRANSURL", response.data);
     
      } catch (err) {
        console.log(err);
      }
    },
    async fetchProductsByCategory(context, payload) {
      try {
        const response = await axios({
          method: 'GET',
          url: `${context.state.url}/products/category/${payload}`
        })
        context.commit("MUTATE_PRODUCTSBYCATEGORY", response.data);
      } catch (err) {
        console.log(err);
      }
    },
    async fetchProductById(context, payload) {
      try {
        const response = await axios({
          method: 'GET',
          url: `${context.state.url}/products/${payload}`
        })
        context.commit("MUTATE_PRODUCTDETAIL", response.data)
      }catch(err) {
        console.log(err);
      }
    },

    async fetchCart(context) {
      try {
        const response = await axios({
          method: "GET",
          url: `${context.state.url}/cart`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        context.commit("MUTATE_CART", response.data);
      } catch (err) {
        console.log(err);
      }
    },
    async deleteCart(context, payload) {
      try {
        const response = await axios({
          method: 'delete',
          url: `${context.state.url}/cart/${payload}`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          }
        })
      } catch (err) {
        console.log(err);
      }
    },
    async fetchProducts(context, payload) {
      try {
        const result = await axios({
          method: "GET",
          url: `${context.state.url}/products`,
        });
       
        context.commit("MUTATE_PRODUCTS", result.data);

      } catch (err) {
        console.log(err);
      }
    },
    async fetchProductsEtsy(context, payload) {
      try {
        const result = await axios({
          method: "GET",
          url: `${context.state.url}/productsEtsy`,
        });
        
        context.commit("MUTATE_PRODUCTSETSY", result.data);

      } catch (err) {
        console.log(err);
      }
    },
    async fetchCategory(context, payload) {
      try {
        const result = await axios({
          method: "GET",
          url: `${context.state.url}/products/categories`
        })
        context.commit("MUTATE_CATEGORY", result.data);
      } catch (err) {
        console.log(err);
      }
    },

    async doLogin(context, payload) {
      try {
        const loginData = {
          email: payload.email,
          password: payload.password,
        };
        const response = await axios({
          method: "POST",
          url: `${context.state.url}/login`,
          data: loginData,
        });
        localStorage.setItem("access_token", response.data.access_token);
        localStorage.setItem("username", response.data.username);
        localStorage.setItem("email", response.data.email);
        context.commit("MUTATE_ISLOGGEDIN", true);
       
      } catch (err) {
        console.log(err);
        
      }
    },
    async googleSignIn(context, payload) {
      try {
        const response = await axios({
          method: "POST",
          url: `${context.state.url}/googleSignIn`,
          data: { token: payload.getAuthResponse().id_token },
        });
        console.log(response.data);
        localStorage.setItem("access_token", response.data.access_token);
        localStorage.setItem("username", response.data.username);
        localStorage.setItem("email", response.data.email);
        context.commit("MUTATE_ISLOGGEDIN", true);
      } catch (err) {
        console.log(err);
      }
    },

    async doRegister(context, payload) {
      try {
        const registerData = {
          username: payload.username,
          email: payload.email,
          password: payload.password,
        };

        const response = await axios({
          method: "POST",
          url: `${context.state.url}/register`,
          data: registerData,
        });
        context.commit("MUTATE_ISREGISTERPAGE", true)
      
      } catch (err) {
        context.commit("MUTATE_ISREGISTERPAGE", false)
      }
    },
    async clearCart(context, payload) {
      try {
        context.commit("MUTATE_CLEAR_CART")
      } catch (err) {
        console.log(err);
      }
    }

  },
  modules: {
  }
})
