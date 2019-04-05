<template>

  <div 
    
    class="bk-item"
    :style="getClassColor"
    v-on:click="actionClickBk(currentBk.url, $event)"
  >
    {{ getTitleShort(currentBk.url) }}
    <!-- {{ currentBk.title }} -->

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
        url = url.replace(/http:\/\//g,"")
        url = url.replace(/https:\/\//g,"")
        url = url.replace(/www./g,"")

        //const start = url.search(/:\/\//)
        //const temp = url.substring(0)
        const end = url.search(/\//)
        return url.substring(0, end)
      },
      actionClickBk(url, event) {
          event.preventDefault();
          window.open(url).focus();
      },   
    },
    computed: {
      getClassColor: () => {
        const colorInd = Math.round(Math.random()*10)
        const className= `backgroundColor: var(--bg-color${colorInd})`
        return className
      }  
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
    /* box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);     */
    margin: 2px;
    background: #216BA3;
    overflow: hidden;
    cursor: pointer;
    color: white;
    font-size: 11px;
    /* vertical-align: middle; */
}
</style>
