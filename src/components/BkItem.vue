<template>

  <div v-show="!hidden" v-if="currentBk.index < 4 || isOpenFolder"
    class="bk-item"
    v-on:click="actionClickBk(currentBk.url, $event)"
  >
    {{ getTitleShort(currentBk.url) }}

</div>

</template>

<script>


  export default {
    props:  ['currentBk', 'hidden', 'isOpenFolder'],

    data: () => ({

    }),
    methods: {
      getTitleShort(url) {
        //const text = url.match(/:\/\/.*\.\w{1,3}\//)[0].slice(3,-1)
        const start = url.search(/:\/\//)+3
        const temp = url.substring(start)
        const end = temp.search(/\./)
        return temp.substring(0, end)
      },
      actionClickBk(url, event) {
          event.preventDefault();
          window.open(url).focus();
      }      
    },
    beforeMount: function () {
    //console.log(this.$props)
      //console.log(this.currentBk)
    }    
  }
</script>

<style>
.bk-item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    height: var(--heght-bk); 
    /* border: 1px solid #216BA3; */
    border-radius: 5px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);    
    margin: 2px;
    background: #216BA3;
    overflow: hidden;
    cursor: pointer;
    color: white;
    font-size: 15px;
    /* vertical-align: middle; */
}
</style>
