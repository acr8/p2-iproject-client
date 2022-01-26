<template>
  <div>

  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'TransactionPage',
  computed: {
    ...mapState(['midtransUrl'])
  },
  created() {
    window.location.href = this.midtransUrl
  }
}
</script>

<style>

</style>