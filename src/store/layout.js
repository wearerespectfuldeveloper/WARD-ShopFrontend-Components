export const state = () => ({
  notification_list: [
    // {message: "", color: "", is_success: true or false }
  ]
})

export const getters = {
  notification_color (state) {
    state.notification_list.map(item => {
      if (item.is_success === true) {
        item.color = 'green';
      } else {
        item.color = 'red';
      }
      return item;
    })
  }
}

export const mutations = {
  setNotification (state, { message }) {
    state.notification.message = message
  }
}
