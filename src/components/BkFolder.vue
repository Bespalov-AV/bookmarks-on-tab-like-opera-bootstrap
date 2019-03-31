<template>
<div>

  <BkOpenFolder 
    v-if="openFolder"
    v-on:click="setOpenFolder"
    :bkFolder = bkFolder
  />

  <div v-else
    v-on:click="setOpenFolder"
    class="bk-folder">
    {{ title }}
  </div>


  <!-- <BkItem v-else
    :currentBk = currentBk
    :hidden = true
  >
  </BkItem>  -->

  </div>
</template>

<script>
import BkItem from './BkItem.vue'
import BkOpenFolder from './BkOpenFolder.vue'

  export default {
    props:  ['bkFolder', 'title'],
    components: {BkItem, BkOpenFolder}, 

    data: () => ({
      openFolder: false
    }),
    methods: {
      setOpenFolder() {
        this.openFolder= !this.openFolder
      }
    }
  }
</script>

<style>
.bk-folder {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    height: var(--heght-bk); 
    border: 1px solid #216BA3;
    border-radius: 5px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);    
    margin: 2px;
    background: #888;
    overflow: hidden;
    cursor: pointer;
    color: white;
    font-size: 15px;
    /* vertical-align: middle; */
}
</style>
