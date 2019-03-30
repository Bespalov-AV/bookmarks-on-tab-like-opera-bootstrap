<template>
  <div>
      <p> First Cpmponent</p>
    <b-card
      title = ''
            style="max-width: 20rem;"
      class="mb-2"
    >

      <b-card-text>
        {{bk.title}}
        {{massage}}
      </b-card-text>

      <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>
  </div>

</template>

<script>
import BkItem from './BkItem.vue'

  export default {
    props:  ['bk', 'massage'],
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
