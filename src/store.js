import Vue from 'vue';
import Vuex from 'vuex';
// import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    infoPage:[],
    cartItems:[],
    items: [
      {
      id:0,
        img: require('@/assets/1.png'),
        title: 'T-shirt',
        price: 20,
        color: 'Blue',
        type: 'T-shirt'
      }, {
        id:1,
        img: require('@/assets/2.png'),
        title: 'Sweat Brodé BDS',
        price: 45,
        color: 'Blue',
        type: 'Sweat'
      }, {
        id:2,
        img: require('@/assets/3.png'),
        title: 'Jogging BDS',
        price: 30,
        color: 'blue',
        type: 'Jogging'
      }, {
        id:3,
        img: require('@/assets/1.png'),
        title: 'T-shirt',
        price: 20,
        color: 'Blue',
        type: 'T-shirt'
      }, {
        id:4,
        img: require('@/assets/2.png'),
        title: 'Sweat Brodé BDS',
        price: 45,
        color: 'Blue',
        type: 'Sweat'
      }, {
        id:5,
        img: require('@/assets/3.png'),
        title: 'Jogging BDS',
        price: 30,
        color: 'blue',
        type: 'Jogging'
      }, {
        id:6,
        img: require('@/assets/1.png'),
        title: 'T-shirt',
        price: 20,
        color: 'Blue',
        type: 'T-shirt'
      }, {
        id:7,
        img: require('@/assets/2.png'),
        title: 'Sweat Brodé BDS',
        price: 45,
        color: 'Blue',
        type: 'Sweat'
      },
      {
        id:8,
        img: require('@/assets/3.png'),
        title: 'Jogging BDS',
        price: 30,
        color: 'blue',
        type: 'Jogging'
      },
      {
        id:9,
        img: require('@/assets/1.png'),
        title: 'T-shirt',
        price: 20,
        color: 'Blue',
        type: 'T-shirt'
      },
      {
        id:10,
        img: require('@/assets/2.png'),
        title: 'Sweat Brodé BDS',
        price: 45,
        color: 'Blue',
        type: 'Sweat'
      },
      {
        id:11,
        img: require('@/assets/3.png'),
        title: 'Jogging BDS',
        price: 30,
        color: 'blue',
        type: 'Jogging'
      },
      {
        id:12,
        img: require('@/assets/1.png'),
        title: 'T-shirt',
        price: 20,
        color: 'Blue',
        type: 'T-shirt'
      },
      {
        id:13,
        img: require('@/assets/2.png'),
        title: 'Sweat Brodé BDS',
        price: 45,
        color: 'Blue',
        type: 'Sweat'
      },
      {
        id:14,
        img: require('@/assets/3.png'),
        title: 'Jogging BDS',
        price: 30,
        color: 'blue',
        type: 'Jogging'
      }
    ]
  },
  // plugins: [createPersistedState()],
  getters: {
    itemsNumber(state){  // Cart Component
      return state.cartItems.length
    },
    totalPrice(state) { // Cart Component
      if (state.cartItems.length != 0){
       return state.cartItems.reduce((a, b) => {
         return (b.price == null ) ? a : a + b.price
       }, 0)
      }
    },
    infoLength(state) { // Info Component
      if(state.infoPage.length > 0) {
        return state.infoPage.splice(0, 1)
      }
    }
  },
  mutations: {
    inCart(state, n) { // Cart Component
      return state.cartItems.push(n)
    },
    outCart(state, n) { // Cart Component
      let index = state.cartItems.findIndex(x => x.id === n)
      return state.cartItems.splice(index, 1)
    },
    addtoInfo(state, n) { // Info Component
       return state.infoPage.push(n)
    }
  },
})
