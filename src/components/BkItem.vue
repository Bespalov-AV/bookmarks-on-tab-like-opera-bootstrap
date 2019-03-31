<template>

  <div v-show="!hidden"
    class="bk-item"
  >
    {{ currentBk.index }}
    {{ currentBk.title }}

</div>

</template>

<script>


  export default {
    props:  ['currentBk', 'hidden'],

    data: () => ({

    }),
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
