<template>
  <div v-if="bookmarks" class="flex-contener">
    <div class="contener">
      <div v-for="bkFolder of bookmarks" :key="bkFolder.id">
        <BkContener
          v-if="bkFolder.children"
          :key="bkFolder.id"
          :bkFolder="bkFolder.children"
          :title="bkFolder.title"
        ></BkContener>

        <div
          v-else
          class="title"
          v-on:click="setOpenFolder"
          v-on:close="closeModal"
          v-b-modal.modal-center
        >{{ bkFolder.title }}</div>
        <div class="bk-contener">
          <BkItem :currentBk="bkFolder" :isModal="true"></BkItem>
        </div>
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
        console.log("bookmarks tree -> " + bookmarkTree);
        console.log(bookmarkTree);
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
.contener {
  display: flex;
  flex-direction: row;
  justify-content: start;
  flex-wrap: wrap;
  width: 1400px;
  min-height: 800px;
  /* border: 1px solid blue; */
}
</style>