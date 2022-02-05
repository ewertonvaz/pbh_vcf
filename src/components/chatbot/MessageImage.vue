<template>
  <div>
    <span title="Clique na imagem para fazer download"><a :href="imgUrl" target="_blank"><img :src="imgUrl" alt=""></a></span>
  </div>
</template>

<script>
export default {
  props: {
    imgUrl: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
  img {
    max-width: 100%;
  }
</style>