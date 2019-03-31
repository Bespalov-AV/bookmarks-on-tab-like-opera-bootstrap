<template>
  <div>
    <b-card
      title = ''
      style="width: 200px; height: 200px;"
      class="m-1"
    >

      <b-card-text>
        {{currentBk.title}}
      </b-card-text>

    </b-card>
  </div>

</template>

<script>
import BkItem from './BkItem.vue'

  export default {
    props:  ['currentBk'],
    components: {
    BkItem
  }, 
    data: () => ({
    }),
    beforeMount: function () {
  
      console.log(this.$props)
  
}
  }
</script>

<style>
.BkItem {
  margin-bottom: 20px;
}
</style>
