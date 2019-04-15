<template>
  <v-dialog max-width="500px">
    <v-card>
      <v-card-title>{{ title }}</v-card-title>
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
      <v-card-actions>
        <v-btn color="primary" flat @click="setCloseFolder">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import BkItem from "./BkItem.vue";

export default {
  props: ["bkChildren", "title"],
  components: { BkItem, BkFolder: () => import("./BkFolder.vue") },
  data: () => ({}),
  methods: {
    log(param) {
      console.log(param);
    },
    setCloseFolder() {
      //this.openFolder = !this.openFolder;
      this.$emit("closeModal");
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

<style >
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

.btn {
  padding: 8px 16px;
  border-radius: 3px;
  font-size: 14px;
  cursor: pointer;
}
</style>
