<template>
  <div>
    <!-- Modal Component -->
    <b-modal id="modal-center" centered v-on:hide="hide">
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
    </b-modal>
  </div>
</template>        

<script>
import BkItem from "./BkItem.vue";

export default {
  props: ["bkChildren", "title"],
  components: { BkItem, BkFolder: () => import("./BkFolder.vue") },
  data: () => ({
    openFolder: true
  }),
  methods: {
    hide() {
      this.$emit("close");
      console.log("hide");
    },
    log(param) {
      console.log(param);
    },
    setCloseFolder() {
      this.openFolder = !this.openFolder;
    },
    close(event) {
      this.$emit("close");
    },
    update() {
      console.log(this.bkChildren);
    }
  }
};
</script>

<style scoped>
.bk-open-folder {
  display: flex;
  flex-wrap: wrap;
  /* height: var(--heght-bk); */
  flex-direction: row;

  background: var(--bg-body);
  border-radius: 5px;
}
.title {
  display: block;
  cursor: pointer;
}
</style>
