<template>
  <div
    class="bk-item"
    v-if="currentBk.index < 4 || isModal"
    :style="getClassColor"
    v-on:click="actionClickBk(currentBk.url, $event)"
  >{{ cutTitle(currentBk.title)}}</div>
</template>

<script>
export default {
  props: ["currentBk", "hidden", "isModal"],

  data: () => ({}),
  beforeUpdate() {
    console.log(1);
  },
  beforeMount() {
    console.log(2);
  },
  methods: {
    getTitleShort(url) {
      //const text = url.match(/:\/\/.*\.\w{1,3}\//)[0].slice(3,-1)
      url = url.replace(/http:\/\//g, "");
      url = url.replace(/https:\/\//g, "");
      url = url.replace(/www./g, "");

      //const start = url.search(/:\/\//)
      //const temp = url.substring(0)
      const end = url.search(/\//);
      return url.substring(0, end);
    },
    actionClickBk(url, event) {
      event.preventDefault();
      window.open(url, "_self");
      //window.location = url;
    },
    cutTitle(title) {
      return title.substring(0, 40);
    }
  },
  computed: {
    getClassColor: () => {
      const colorInd = Math.round(Math.random() * 10);
      const className = `backgroundColor: var(--bg-color${colorInd})`;
      return className;
    }
  }
};
</script>

<style>
.bk-item {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 90px;
  height: var(--heght-bk);
  /* border: 1px solid #216ba3; */
  border-radius: 5px;
  /* box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);     */
  margin: 2px;
  background: #216ba3;
  overflow: hidden;
  cursor: pointer;
  color: white;
  font-size: 11px;
  /* vertical-align: middle; */
}
</style>
