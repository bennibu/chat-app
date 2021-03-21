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
    onSubmit() {
      this.messages.push(this.inputMessage)

      this.inputMessage = ""
    }
  }
})