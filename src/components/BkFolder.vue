<template>
<b-button variant="outline-primary" class="card">{{ currentBk.title }}</b-button>
</template>

<script>
  export default {
    props:  ['currentBk'],

    data: () => ({
    })
  }
</script>

<style>
.card {
  width: 50px; 
  height: 50px;


}
</style>
