<template>
    <div class="bubble-background" @click="click" :style="
      `width:${width};height:${height};
      background-color:${background_color};
      ${left};${top};margin:${margin};
      border-style:${border};`"
    >
      <img class="bubble-avatar" :src="avatar" alt="">
    </div>
</template>

<script>
const getUrl = window.location;
const baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];

export default {
  data(){
    return {
    }
  },
  props:{
    position: { type: String, default: 'top-left' },
    width: { type: String, default: '40px' },
    height: { type:String, default: '40px' },
    margin:  { type:String, default: '1px' },
    background_color:  { type:String, default: 'lightblue' },
    avatar:  { type:String, default: `${baseUrl}/img/bot-logo.png` },
    border:  { type:String, default: 'none' }
  },
  computed: {
    left() {
      let pos = this.position.split('-')[1]
      switch (pos) {
        case 'left':
          return 'left:0px'
        case 'right':
          return 'right:0px'
        default:
          return 'left:0px';
      }
    },
    top() {
      let pos = this.position.split('-')[0]
      switch (pos) {
        case 'top':
          return 'top:0px'
        case 'bottom':
          return 'bottom:0px'
        default:
          return 'top:0px';
      }
    }
  },
  methods: {
    click(){
     this.$emit('bubble_click')
    }
  }
}
</script>

<style scoped>
  .bubble-background {
    position: fixed;
    z-index: 10;
    border-radius: 50%;
    border-width: 1px;
    box-shadow: 2px 2px 5px lightgray;
  }

  .bubble-avatar {
    object-fit: fill;
    width:100%;
    height:100%;
  }
</style>