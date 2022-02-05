<template>
    <div class="chat-area" :class="animation_class" v-show="visible" :style="
        `width:${width}; height: ${height};
        ${left};${top};margin:${margin};`"
    >
        <div class="chat-title">{{title}}</div>
        <div class="chat-content" v-chat-scroll>
            <template>
              <Message v-for="msg in chat" :key="msg.id" :message="msg">
              </Message>
            </template>
        </div>
        <div class="chat-input">
            <input class="text" type="text" v-on:keypress.enter="send" v-model="text_input" ref="textMsg">
            <button class="button" @click="send">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" transform="rotate(90)">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>      
            </button>
        </div>
    </div>
</template>

<script>
import MessageTime from './mixins/MessageGetTimeMixin.vue';
import Message from './ChatMessageComponent.vue'
import engine from '../../engines/dialogflow.js';
// import engine from '../../engines/qnamaker';
//import engine from '../../engines/pbah_bot';
//import engine from '../../engines/pbah_api_bot';

export default {
  mixins: [MessageTime],
  components: {
    Message
  },
  props: {
    position: { type: String, default: 'top-left' },
    width: { type: String, default: '240px' },
    height: { type: String, default: '400px' },
    margin:  { type:String, default: '1px' },
    bubbleHeight: { type:String, default: '0px' },
    title: { type:String, default: 'Título' }
  },
  data(){
    return {
        visible: false,
        content: '',
        text_input: '',
        text_response: '',
        chat: [],
        welcome_message: {
          text: "Seja bem vindo(a). Estou aqui para ajudar. Digite sua pergunta",
          user: "bot",
          time: this.getTime()
        },
        current: 0,
        animation_class: 'scale-in-ver-bottom'
    }
  },
  methods: {
    setVisible( isVisible ){
      const timeOut = 500;
      if (isVisible) {
        this.animation_class = 'scale-in-ver-bottom';
        this.visible = isVisible;
        setTimeout( () => this.$refs.textMsg.focus(), timeOut);
      } else {
        this.animation_class = 'scale-out-ver-bottom';
        setTimeout( () => this.visible = isVisible, timeOut);
      }
    },
    send(){
      if (this.text_input.length != 0) {
          this.chat.push({
            id: ++this.current,
            text: this.text_input,
            user: "you",
            time: this.getTime()
          })
          this.receive(this.text_input)
          this.text_input = ""
        }
      this.$refs.textMsg.focus();
    },
    async receive(question){
      const responses = await engine.receive(question);
      console.log(responses);
      responses.forEach(response => {
        const { type, text, html, options, callback, payload } = response;
        this.chat.push({ 
          id: ++this.current,
          user: "bot",
          time: this.getTime(),
          type,
          text,
          html,
          options,
          callback,
          payload
        });
      });
    },
    setWelcomeMessage(message){
      if (!message){
        message = this.welcome_message
      }
      message.id = ++this.current
      this.chat.push(message);
    },
    pushChatMessage(message) {
      this.chat.push( {
        id: ++this.current,
        ...message
      })
    }
  },
  computed: {
    currentMessage(){
      return this.chat[this.current]
    },
     left() {
      let pos = this.position.split('-')[1]
      switch (pos) {
        case 'left':
          return `left:0px`
        case 'right':
          return `right:0px`
        default:
          return `left:0px`;
      }
    },
    top() {
      let pos = this.position.split('-')[0]
      switch (pos) {
        case 'top':
          return `top:${this.bubbleHeight}`
        case 'bottom':
          return `bottom:${this.bubbleHeight}`
        default:
          return `top:${this.bubbleHeight}`;
      }
    }
  },
  mounted(){
    this.setWelcomeMessage();
  },
}
</script>

<style scoped>
    .chat-area {
        position: fixed;
        z-index: 10;
        background-color: gray;
        display: flex;
        flex-direction: column;
        border-style: solid;
        border-width: 1px;
        border-top-right-radius: 15px;
        border-top-left-radius: 15px;
        box-shadow: 2px 2px 5px lightgray;
    }

    .chat-title{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: lightblue;
        height: 10%;
        border-top-right-radius: 15px;
        border-top-left-radius: 15px;
    }

    .chat-content{
        background-color: white;
        height: 80%;
        overflow-y: scroll;
        display: flex;
        flex-direction: column;
    }

    .chat-content .my-input {
        text-align: left;
        color: green;
    }

    .chat-content .the-response {
        text-align: right;
        color: blue;
    }

.chat-input{
        background-color: greenyellow;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 10%;
        padding: 4px;
    }

    .chat-input .text{
        width: 80%;
    }

    .chat-input .button{
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
</style>