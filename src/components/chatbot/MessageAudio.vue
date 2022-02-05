<template>
  <div class="sound-message">
    <svg  class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
    </svg>
    <audio autoplay>
      <source :src="audioUrl" :type="`audio/${audioFormat}`">
      O seu browser não suporta o player de audio.
    </audio>
  </div>
</template>

<script>
export default {
 props: {
    audioUrl: {
      type: String,
      required: true
    },
    audioFormat: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.sound-message {
  width: 25px;
}

</style>