import axios from 'axios';

export const state = () => ({
  all_products: null,
  found_products: null,
});

export const getters = {
  
}

export const mutations = {
  getProducts (state, { products }) {
    state.all_products = products;
  },
  findProducts (state, { products }) {
    state.found_products = products;
  },
  createProduct (state, { product }) {
    state.all_products.push(product)
  },
  updateProduct (state, { product }) {
    const target_index = state.all_products.findIndex(x => {
      if (x.id === product.id) {
        return x;
      }
    });
    state.all_products.splice(target_index, 1, product);
  },
  deleteProduct (state, { product }) {
    const target_index = state.all_products.findIndex(x => {
      if (x.id === product.id) {
        return x;
      }
      state.all_products.splice(target_index, 1);
    });
  }
}

export const actions = {
  getProducts ({ commit }, { request_url }) {
    axios.get(`${request_url || process.env.BASE_URL}/products`)
      .then(products => {
        commit('getProducts', { products });
      })
      .catch(err => {
        commit('setNotification', { message: "상품 조회 실패", is_success: false });
      })
  },
  findProductById({ commit }, { request_url, idx }) {
    axios.get(`${request_url || process.env.BASE_URL}/products/${idx}`)
      .then(products => {
        commit('findProducts', { products });
      })
      .catch(err => {
        commit('setNotification', { message: "상품 검색 실패", is_success: false });
      })
  },
  createProduct({ commit }, { request_url, title, desc, image_url, price }) {
    axios.post(`${request_url || process.env.BASE_URL}/products/create`, {
      title: title,
      desc: desc,
      imageUrl: image_url,
      price: price
    })
      .then(result => {
        const product = result;
        if (product) {
          commit('createProduct', { product })
        }
      })
      .catch(err => {
        commit('setNotification', { message: "상품 생성 실패", is_success: false });
      })
  },
  updateProduct({ commit }, { request_url, idx, title, desc, image_url, price }) {
    axios.put(`${request_url || process.env.BASE_URL}/products`, {
      idx: idx,
      title: title,
      desc: desc,
      imageUrl: image_url,
      price: price
    })
      .then(result => {
        const product = result;
        if (product) {
          commit('updateProduct', { product })
        }
      })
      .catch(err => {
        commit('setNotification', { message: "상품 갱신 실패", is_success: false });
      })
  },
  deleteProduct({ commit }, { request_url}) {
    axios.delete(`${request_url || process.env.BASE_URL}/products/${idx}`)
      .then(result => {
        const product = result;
        if (product) {
          commit('deleteProduct', { product })
        }
      })
      .catch(err => {
        commit('setNotification', { message: "상품 삭제 실패", is_success: false });

      })
  }
}