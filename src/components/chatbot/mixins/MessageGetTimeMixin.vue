<script>
export default {
  methods: {
    getTime(){
      const time = new Date();
      const hours = time.getHours();
      const minutes = time.getMinutes();
      return (hours <= 9 ? `0${hours}` : hours) + ':' + (minutes <= 9 ? `0${minutes}` : minutes) ;
    },
  }
}
</script>