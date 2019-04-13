<template>
  <div v-if="openFolder" v-on:click="setCloseFolder">
    <div class="title">{{ title }}</div>
    <div class="bk-open-folder">
      <div v-for="currentBk of bkChildren" :key="currentBk.id">
        <BkFolder
          v-if="currentBk.children"
          :bkFolder="currentBk.children"
          :title="currentBk.title "
          :isOpenFolder="true"
        ></BkFolder>

        <BkItem v-else :currentBk="currentBk" :isOpenFolder="true"></BkItem>
      </div>
    </div>
  </div>
</template>

<script>
import BkItem from "./BkItem.vue";
import BkFolder from "./BkFolder.vue";

export default {
  props: ["bkChildren", "title"],
  components: { BkItem, BkFolder },
  data: () => ({
    openFolder: true
  }),
  methods: {
    log(param) {
      console.log(param);
    },
    setCloseFolder() {
      this.openFolder = !this.openFolder;
    },
    update() {
      console.log(this.bkChildren);
    }
  }
};
</script>

<style>
.bk-open-folder {
  position: fixed;
  display: flex;
  flex-wrap: wrap;
  width: 400px;
  /* height: var(--heght-bk); */
  flex-direction: row;
  border: 1px solid #888;
  background: var(--bg-body);
  border-radius: 5px;
  z-index: 100;
}
.title {
  display: block;
  cursor: pointer;
}
</style>
