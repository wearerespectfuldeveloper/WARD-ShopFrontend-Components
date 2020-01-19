import axios from 'axios';



export const state = () => ({
  editor_component_list: [
    // Heading - { idx: 0, type: 'Header', text: "제목입니다", level: 1 }
    // Paragraph - { idx: 0, type: 'Paragraph' text: "텍스트입니다" }
    // Image - { idx: 0, type: 'Image', url: "http://images.ward-study.com/cat.jpg", caption: "이미지 설명", withBorder: false, withBackground: false, stretched: false }
  ]
});

export const getters = {
  
}

export const mutations = {
  // 아직 여기 안함
  getProductDetailComponents (state, { components }) {
    state.editor_component_list = components;
  },
  createProductDetailComponents (state, { created_component }) {
    state.editor_component_list.push(created_component);
  },
  updateProductDetailComponents (state, { updated_component }) {
    const target_index = state.all_products.findIndex(x => {
      if (x.id === updated_component.id) {
        return x;
      }
    });
    state.editor_component_list.splice(target_index, 1, updated_component);
  },
  deleteProductDetailComponents (state, { deleted_component }) {
    const target_index = state.all_products.findIndex(x => {
      if (x.id === deleted_component.id) {
        return x;
      }
    });
    state.editor_component_list.splice(target_index, 1);
  }
}

export const actions = {
  getProductDetailComponents ({ commit }, { request_url }) {
    axios.get(`${request_url || process.env.BASE_URL}/components`)
    .then(components => {
      commit('getProductDetailComponents', { components });
    })
    .catch(err => {
      commit('setNotification', { message: "상품 정보 조회 실패", is_success: false });
    });
  },
  // find는 쓸일 없을 것 같은데
  createProductDetailComponents ({ commit }, { request_url, component_obj }) {
    axios.post(`${request_url || process.env.BASE_URL}/components/create`, component_obj)
      .then(result => {
        if (result) {
          commit('createProductDetailComponents', { component_obj });
        }
      })
      .catch(err => {
        commit('setNotification', { message: "상품 정보 생성 실패", is_success: false });
      });
  },
  updateProductDetailComponent ({ commit }, { request_url, updated_component_obj }) {
    axios.put(`${request_url || process.env.BASE_URL}/products`, updated_component_obj)
      .then(result => {
        if (result) {
          commit('updateProductDetailComponent', { updated_component_obj })
        }
      })
      .catch(err => {
        commit('setNotification', { message: "상품 정보 갱신 실패", is_success: false });
      })
  },
  deleteProductDetailComponent ({ commit }, { request_url, target_component_idx }) {
    axios.put(`${request_url || process.env.BASE_URL}/products/${target_component_idx}`)
      .then(result => {
        if (result) {
          commit('deleteProductDetailComponent', { idx: target_component_idx });
        }
      })
      .catch(err => {
        commit('setNotification', { message: "상품 정보 삭제 실패", is_success: false });
      })
  },
}