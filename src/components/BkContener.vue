<template>
  <div>
    <div
      class="title"
      v-on:click="setOpenFolder"
      v-on:close="closeModal"
      v-b-modal.modal-center
    >{{ title }}</div>
    <div class="bk-contener">
      <div v-for="currentBk of bkFolder" :key="currentBk.id">
        <BkFolder
          v-if="currentBk.children"
          :bkChildren="currentBk.children"
          :title="currentBk.title"
          :index="currentBk.index"
          :isModal="false"
        ></BkFolder>

        <BkItem v-else :currentBk="currentBk" :isModal="false"></BkItem>
      </div>

      <BkModal
        v-if="openFolder"
        :isModal="openFolder"
        v-on:close="closeModal"
        :bkChildren="bkFolder"
        :title="title"
      />
    </div>
  </div>
</template>

<script>
import BkItem from "./BkItem.vue";
import BkFolder from "./BkFolder.vue";
import BkModal from "./BkModal.vue";

export default {
  props: ["bkFolder", "title"],
  components: { BkItem, BkFolder, BkModal },
  data: () => ({
    openFolder: false
  }),
  methods: {
    setOpenFolder() {
      this.openFolder = !this.openFolder;
    },
    closeModal() {
      this.openFolder = false;
    }
  }
};
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
  height: 140;
  overflow: hidden;
}
.title {
  display: block;
  cursor: pointer;
  width: 100%;
  text-align: center;
}
</style>
