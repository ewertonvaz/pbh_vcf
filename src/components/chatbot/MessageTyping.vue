<template>
    <div class="msg-default chat-message chat-typing">
        <div class="typing">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
        </div>
    </div>
<!--     <div class="chat-bubble">
        <div class="typing">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
        </div>
    </div> -->
</template>

<script>
export default {
  props: {
      time_out: {
        type: Number,
        default: 0
      }
  },
  mounted() { 
    if( this.time_out > 0 ){
       setTimeout( ()=> this.$emit('timeout'), this.time_out * 1000)
    }
  }
}
</script>

<style scoped>
.chat-bubble {
  background-color:#E6F8F1;
  padding:16px 28px;
  -webkit-border-radius: 20px;
  -webkit-border-bottom-left-radius: 2px;
  -moz-border-radius: 20px;
  -moz-border-radius-bottomleft: 2px;
  border-radius: 20px;
  border-bottom-left-radius: 2px;
  display:inline-block;
}
.chat-typing {
   width: 5%;
}

.typing {
  align-items: center;
  display: flex;
  height: 17px;
}
.typing .dot {
  animation: mercuryTypingAnimation 1.8s infinite ease-in-out;
  /*background-color: #6CAD96 ; /* rgba(20,105,69,.7); */
  background-color: black;
  border-radius: 50%;
  height: 4px;
  margin-right: 4px;
  vertical-align: middle;
  width: 4px;
  display: inline-block;
}
.typing .dot:nth-child(1) {
  animation-delay: 200ms;
}
.typing .dot:nth-child(2) {
  animation-delay: 300ms;
}
.typing .dot:nth-child(3) {
  animation-delay: 400ms;
}
.typing .dot:last-child {
  margin-right: 0;
}

@keyframes mercuryTypingAnimation {
  0% {
    transform: translateY(0px);
    /* background-color:#6CAD96; /* rgba(20,105,69,.7); */
  }
  28% {
    transform: translateY(-7px);
    /* background-color:#9ECAB9; /* rgba(20,105,69,.4); */
  }
  44% {
    transform: translateY(0px);
    /* background-color: #B5D9CB; /* rgba(20,105,69,.2); */
  }
}
</style>
