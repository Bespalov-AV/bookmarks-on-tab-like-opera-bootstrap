<template>
<div>
    <div 
      class="title" 
      v-on:click="setOpenFolder($event)"
      v-click-outside="onClickOutside"
    >
      {{ title }}
    </div>
    <BkOpenFolder 
      v-if="openFolder"
      v-on:click="setOpenFolder($event)"
      :bkChildren = bkFolder
      :title = title
    />    
  <div class="bk-contener" :class = classFolder>
    <div v-for="currentBk of bkFolder"
        :key="currentBk.id"
        
        >
        <BkFolder v-if="currentBk.children"
          :bkChildren = currentBk.children
          :title = currentBk.title 
          :index = currentBk.index 
        >
        </BkFolder>

        <BkItem v-else
          :currentBk = currentBk
        >
        </BkItem> 
    </div>
  </div>
</div>
</template>

<script>
import BkItem from './BkItem.vue'
import BkFolder from './BkFolder.vue'
import BkOpenFolder from './BkOpenFolder.vue'

  export default {
    props:  ['bkFolder', 'title'],
    components: {BkItem, BkFolder, BkOpenFolder}, 
    data: () => ({
      openFolder: false,
      classFolder: ""
    }),
    methods: {
      log(param) {
        console.log(param)
      },
      setOpenFolder(event) {
        // this.openFolder = !this.openFolder
        // console.log(this.openFolder)
        this.classFolder = (this.classFolder.length > 0) ? "" : "classFolder" 
      },
      onClickOutside (e, el) {
        if (e.target != el) {
          this.openFolder = false
        }
      }      
    },
  }
</script>

<style>
.bk-contener {
    display: flex;
    flex-wrap: wrap;
    /* border: 1px solid #333; */
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 5px;
    margin-right: 5px;
    width: 200px;
    height: 140px;
    overflow: hidden;
}
.title {
    display: block;
    cursor: pointer;
    width: 100%;
    text-align: center;
}
.classFolder {
  width: 100%;
  height: 100%;
}
</style>
