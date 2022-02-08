<template>
  <div id="chat-app">
    <ChatBot 
      position="bottom-right"
      title="Um chat bot simples"
    />
  </div>
</template>

<script>
import ChatBot from './components/chatbot/ChatBot.vue'

export default {
  name: 'ChatApp',
  components: {
    ChatBot
  }
}
</script>

<style>
#chat-app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
