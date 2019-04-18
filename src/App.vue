<template>
  <div v-if="bookmarks" class="flex-contener">
    <div class="main-contener">
      <div v-for="bkFolder of bookmarks" :key="bkFolder.id">
        <BkContener
          v-if="bkFolder.children"
          :key="bkFolder.id"
          :bkFolder="bkFolder.children"
          :title="bkFolder.title"
        />

        <template v-else>
          <div
            class="title"
            v-on:click="setOpenFolder"
            v-on:close="closeModal"
            v-b-modal.modal-center
          >{{ bkFolder.title }}</div>

          <div class="bk-contener">
            <BkItem :currentBk="bkFolder" :isModal="true"/>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import BkContener from "./components/BkContener.vue";
import BkItem from "./components/BkItem.vue";

export default {
  name: "App",
  components: { BkContener, BkItem },
  data() {
    return {
      bookmarks: null
    };
  },
  created() {
    this.getBookmarks();
  },
  methods: {
    getBookmarks() {
      if (chrome && chrome.permissions) {
        this.getBookmarksFromChrome();
      } else {
        this.getBookmarksFromFile();
      }
    },
    getBookmarksFromFile() {
      const bk = import("./bookmarks.js");
      bk.then(res => {
        this.bookmarks = res.bk.children;
      });
    },
    getBookmarksFromChrome() {
      chrome.bookmarks.getTree(bookmarkTree => {
        this.bookmarks = bookmarkTree[0].children[0].children;
        //bkContener.textContent= JSON.stringify(startTreeNodes[0].children[0].children[0])
      });
    },
    getBookmarksFromChromeSub() {
      chrome.bookmarks.getSubTree(startNode, startTreeNodes => {});
    }
  }
};
</script>

<style>
.flex-contener {
  display: flex;
  justify-content: center;
  justify-items: center;
  /* border: 1px solid red; */
}
.main-contener {
  display: flex;
  flex-direction: row;
  justify-content: start;
  flex-wrap: wrap;
  width: 1400px;
  min-height: 800px;
  /* border: 1px solid blue; */
}
</style>