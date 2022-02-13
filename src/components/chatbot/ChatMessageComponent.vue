<template>
  <div class="msg-default" :class="className">
    <div class="chat-message" :class="className">
      <template>
        <MessageText :message="message" />
      </template>
      <template>
        <MessageOptions v-if="message.type=='menu' && message.options.length > 0" :options="message.options" @clickOption="clickOption"/>
      </template>
      <template>
        <MessageImage v-if="message.type=='image'" :imgUrl="message.url" />
      </template>
      <template>
        <MessageAudio v-if="message.type=='audio'" :audioUrl="message.url" :audioFormat="message.format"/>
      </template>
    </div>
    <div class="chat-info">as {{message.time}} usuário: {{message.user}}</div>
  </div>
</template>

<script>
import MessageTime from './mixins/MessageGetTimeMixin.vue';
import MessageText from './MessageText.vue';
import MessageOptions from './MessageOptions.vue';
import MessageImage from './MessageImage.vue';
import MessageAudio from './MessageAudio.vue';

export default {
  mixins: [MessageTime],
  components: { MessageText, MessageOptions, MessageImage, MessageAudio },
    props: {
      message: {
        type: Object,
        default: () => {
            let message = { 
              text: "Receba nossas boas vindas!",
              user: "bot",
              time: null
            }
            return message
        }
      }
    },
    methods:{
      async clickOption(option, callback, payload = null){
        this.message.text = `Você escolheu <<${option}>>`;
        if (this.message.html) {
          this.message.html = `Você escolheu <strong/>${option}</strong>`;
        }
        this.message.time = this.getTime();
        if (callback) {
          const result = await callback(payload);
          const callBackMsg =  result instanceof Array ? result[0] : result;
          this.$parent.pushChatMessage( {
            user: "bot",
            time: this.getTime(),
            ...callBackMsg
          })
        }
      },
    },
    computed:{
      className(){
        return this.message.user === "you" ? "msg-you" : "msg-other"
      }
    }
}
</script>

<style>
 .chat-message{
    padding: 8px;
    text-align: left;
    font-size: 0.8rem;
    border: 1px solid black;
    border-radius: 10px 10px 10px 0px;
    max-width: 85%;
 }

 .chat-message.msg-you{
    color: darkgreen;
    background-color: lightblue;
    border: 1px solid blue;
    border-radius: 10px 10px 0px 10px;
 }

  .msg-default{
    margin: 4px 4px 8px 4px;
    display: flex;
    flex-direction: column;
 }
 .msg-other{
    align-items: flex-start;
 }
 .msg-you{
    align-items: flex-end;
 }

 .chat-info{
    margin: 0px;
    padding: 0px;
    text-align: right;
    font-size: 0.6rem;
 }
</style>