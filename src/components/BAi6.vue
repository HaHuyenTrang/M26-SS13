<template>
 <div>
    <v-alert
        v-if="show"
        text="Bạn có chắc chăn muốn xóa tài khoản này không?"
        title="Xác nhận"
      ></v-alert>
  
 </div>
</template>

<script setup>
import { ref } from 'vue';

const show = ref(true)
</script>

<style></style>
