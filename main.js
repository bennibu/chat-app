const app = Vue.createApp({
  data() {
    return {
      inputMessage: "",
      messages: [
        "hello world",
        "some other message"
      ]
    }
  },
  methods: {
    addMessage() {
      this.messages.push(this.inputMessage)

      this.inputMessage = ""
    },
    deleteMessage(id) {
      this.messages.splice(id, 1)
      return
    }
  }
})