<template>
     
      <div class="text-center"  >
      <v-pagination
      class="page"
        v-model="page"
        :length="4"
        rounded="circle"
      ></v-pagination>
  
      <v-pagination
      class="page"
        v-model="page"
        :length="4"
        rounded="0"
      ></v-pagination>
    </div>
  </template>

<script>
  export default {
    data () {
      return {
        page: 1,
      }
    },
  }
</script>

<style>
.page{
    color: pink;
}
.text-center{
    color: rgb(248, 146, 163);
}
</style>