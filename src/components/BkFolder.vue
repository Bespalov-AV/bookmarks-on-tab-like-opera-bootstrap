<template>
  <div>
    <div v-if="index < 4 || isOpenFolder" v-on:click="showModal" class="bk-folder">{{ title }}></div>

    <BkModal v-if="openFolder" :bkChildren="bkChildren" v-on:close="closeModal"/>
  </div>
</template>

<script>
import BkModal from "./BkModal.vue";

export default {
  props: ["bkChildren", "title", "index", "isOpenFolder"],
  components: { BkModal },

  data: () => ({
    openFolder: false
  }),
  methods: {
    showModal() {
      this.openFolder = true;
    },
    closeModal() {
      this.openFolder = false;
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
