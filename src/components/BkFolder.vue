<template>
  <div v-click-outside="onClickOutside">
    <div v-if="index < 4 || isOpenFolder" v-on:click="setOpenFolder" class="bk-folder">{{ title }}</div>

    <BkOpenFolder v-if="openFolder" v-on:click="setOpenFolder($event)" :bkChildren="bkChildren"/>
  </div>
</template>

<script>
import BkOpenFolder from "./BkOpenFolder.vue";

export default {
  name: "BkFolder",
  props: ["bkChildren", "title", "index", "isOpenFolder"],
  components: { BkOpenFolder },
  //components: { BkOpenFolder: () => import("./BkOpenFolder.vue") },

  data: () => ({
    openFolder: false
    //isThisOpenFolder: false
  }),
  methods: {
    setOpenFolder(event) {
      this.openFolder = !this.openFolder;
      //this.isThisOpenFolder = true
    },
    onClickOutside(e, el) {
      // if (e.target != el) {
      //   this.openFolder = false;
      //this.isThisOpenFolder = false
      //}
    }
  }
};
</script>

<style>
.bk-folder {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: var(--heght-bk);
  border: 1px solid #216ba3;
  border-radius: 5px;
  /* box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);     */
  margin: 2px;
  background: #888;
  overflow: hidden;
  cursor: pointer;
  color: white;
  font-size: 15px;
  /* vertical-align: middle; */
}
</style>
