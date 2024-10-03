<template>
    <div>
     
      <v-combobox
        v-model="city"
        label="Email"
        :items="[
          'trang2005@gmail.com',
          'chau123@gmail.com',
       
        ]"
      ></v-combobox>
      <h3>email: {{ city }}</h3>
    </div>
  </template>
  
  <script setup>
  import {  ref } from "vue";

  const city = ref("");

  </script>
  
  <style></style>
  