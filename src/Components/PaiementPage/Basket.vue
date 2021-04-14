<template>
  <div class="checkout">
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-9">
          <h4>Checkout</h4>

          <div
            v-if="this.cartContent.length === 0"
            class="text-center font-italic"
          >
            Your cart is empty, try to Add stuff.
          </div>

          <div class="row" v-for="thing in cartContent" v-bind:key="thing.id">
            <div class="col4 col-xl-4 col-lg-4 col-md-4 col-sm-4">
              <img :src="thing.img" style="width: 90px" />
            </div>
            <div class="col6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <h4>{{ thing.title }}</h4>
              <h6>{{ thing.price }}€</h6>
            </div>
            <div class="col2 col-xl-2 col-lg-2 col-md-2 col-sm-2 pt-4">
              <span class="remove-btn" @click="removeThing(thing.id)">X</span>
            </div>
          </div>
        </div>
        <div
          class="row justify-content-between"
          style="padding: 10px 10px 10px 10px"
          v-if="this.cartPrice != undefined"
        >
          <div class="flex-column pl-3">
            <h4>Total :  </h4>
          </div>
          <div class="flex-column pr-3">
            <h4>{{ cartPrice }}€</h4>
          </div>
           <div>
            <router-link class="pl-5" to="/checkout">
              <button type="button" class="btn btn-danger">Validez</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Cart",
  data() {
    return {
      cClass: "cart",
      modalClass: "modal off",
    };
  },
  computed: {
    cartContent() {
      return this.$store.state.cartItems;
    },
    cartPrice() {
      return this.$store.getters.totalPrice;
    },
  },
  methods:{
   removeThing(id){
      this.$store.commit('outCart',id)
    }
  }
};
</script>

