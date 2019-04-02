<template>
<div>

  <div v-if="index < 4"
    v-on:click="setOpenFolder"
    class="bk-folder">
    {{ title }}
  </div>

  <BkOpenFolder 
    v-if="openFolder"
    v-on:click="setOpenFolder($event)"
    :bkChildren = bkChildren
  />

  </div>
</template>

<script>
import BkOpenFolder from './BkOpenFolder.vue'

  export default {
    props:  ['bkChildren', 'title', 'index'],
    components: {BkOpenFolder}, 

    data: () => ({
      openFolder: false
    }),
    methods: {
      setOpenFolder(event) {
        this.openFolder = !this.openFolder
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
