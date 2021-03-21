const ChatApp = {
  data() {
    return {
      inputMessage: "",
      messages: [
        "hello world",
        "some other message"
      ]
    }
  },
  mounted() {
    if (localStorage.messages) {
      this.messages = JSON.parse(localStorage.messages);
    }
  },
  methods: {
    addMessage() {
      this.messages.unshift(this.inputMessage)
      localStorage.messages = JSON.stringify(this.messages)

      this.inputMessage = ""
    },
    deleteMessage(id) {
      this.messages.splice(id, 1)
      localStorage.messages = JSON.stringify(this.messages)
      return
    }
  }
}

Vue.createApp(ChatApp).mount('#app')