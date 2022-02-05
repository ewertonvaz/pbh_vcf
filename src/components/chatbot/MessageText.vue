<template>
  <div>
    <div v-if="message.html" v-html="message.html" />
    <div v-else>{{message.text}}</div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>

</style>