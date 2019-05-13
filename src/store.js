import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    cart: []
  },
  mutations: {
    addProduct(state, product) {
      product.slug = slugify(product.name);
      state.products.push(product);
    },
    deleteProduct(state, index) {
      // let deleted = state.products[index]
      // alert('deleted ' +  deleted.name + ' (slug: ' + deleted.slug + ')')
      state.products.splice(index, 1);
    },
    addToCart(state, productToAdd) {
      const index = state.cart.findIndex(
        itemInCart => itemInCart.product.slug === productToAdd.product.slug
      )

      // Product not yet in cart
      if (index === -1) {
        // state.cart = [...state.cart, productToAdd]
        productToAdd.quantity = 1
        state.cart.push(productToAdd)
      }
      // Already exists, increment quantity
      else {
        state.cart[index].quantity += 1
      }
    }
  },
  actions: {},
  getters: {
    products: state => state.products,
    cart: state => state.cart
  },
});

const slugify = str => {
  str = str || ''
  const a =
    'àáäâèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;άαβγδεέζήηθιίϊΐκλμνξοόπρσςτυϋύΰφχψωώ'
  const b =
    'aaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------aavgdeeziitiiiiklmnxooprsstyyyyfhpoo'
  const p = new RegExp(a.split('').join('|'), 'g')

  return str
    .toString()
    .trim()
    .toLowerCase()
    .replace(/ου/g, 'ou')
    .replace(/ευ/g, 'eu')
    .replace(/θ/g, 'th')
    .replace(/ψ/g, 'ps')
    .replace(/\//g, '-')
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special chars
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
};
