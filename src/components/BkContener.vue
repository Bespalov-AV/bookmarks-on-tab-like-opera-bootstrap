<template>
  <div>
    <b-card
      title = ''
      style="width: 200px; height: 200px;"
      class="m-1"
    >
      <div
        v-for = "bkItem of currentBk.children"
        :key = bkItem.id
        :currentBk = bkItem
      >      
        <BkFolder v-if="bkItem.children"
        :currentBk = bkItem.children
        >
        </BkFolder>

        <BkItem v-if="!bkItem.children"
        :currentBk = bkItem
        >
        </BkItem> 

      </div>
      <b-card-text>
        {{currentBk.title}}
      </b-card-text>

    </b-card>
  </div>
</template>

<script>
import BkItem from './BkItem.vue'
import BkFolder from './BkFolder.vue'

  export default {
    props:  ['currentBk'],
    components: {BkItem, BkFolder}, 
    data: () => ({
    }),
    beforeMount: function () {
    //console.log(this.$props)
      console.log(this.currentBk)
    }
  }
</script>

<style>
.BkItem {
  margin-bottom: 20px;
}
</style>
