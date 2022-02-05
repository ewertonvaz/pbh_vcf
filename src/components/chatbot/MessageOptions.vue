<template>
  <div v-if="!selection" :class="optionsClass">
    <button class="option-button" v-for="(option, optKey) in options" :key="optKey" @click.prevent="clickOption(option)">{{option.text}}</button>
  </div>
</template>

<script>
export default {
  props:{
    options: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      selection : null
    }
  },
  methods:{
    clickOption(option){
      this.selection = option.text;
      this.$emit('clickOption', option.text, option.callback, option.payload);
    }
  },
  computed: {
    optionsClass() {
      if (this.options.length <= 10) {
        return 'short-menu';
      } else {
        return 'long-menu';
      }
    }
  }
}
</script>

<style scoped>
.option-button{
  text-align: center;
  text-transform: uppercase;
  border: none;
  background-color: #4d84ab;
  color: #f8f8f8;
  cursor: pointer;
}

.long-menu {
  margin-top: 2px;
}

.long-menu .option-button{
  margin-right: 2px;
  margin-bottom: 2px;
  padding: 4px;
  border-radius: 4px;
}

.short-menu {
  display: flex;
  flex-direction: column;
  margin-top: 2px;
}

.short-menu .option-button{
  margin-bottom: 2px;
  padding: 4px;
  border-radius: 0px;
}
</style>