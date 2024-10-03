<template>
    <div>
      <v-btn @click="handleclick">click me </v-btn>
      <v-combobox
        v-model="city"
        label="Thành phố"
        :items="[
          'Hà Nội',
          'Sơn La',
          'Phú Thọ',
          'Thái Bình',
          'Đà Nẵng',
          'Yên Bái',
        ]"
      ></v-combobox>
      <h3>thành phố: {{ city }}</h3>
      <v-sheet class="mx-auto" width="300">
      <v-form @submit.prevent>
        <v-text-field
          v-model="firstName"
          :rules="rules"
          label="First name"
        ></v-text-field>
        <v-btn class="mt-2" type="submit" block>Submit</v-btn>
      </v-form>
    </v-sheet>
    <h3>first name: {{ firstName }}</h3>

    </div>
  </template>
  
  <script setup>
  import { reactive, ref } from "vue";

  const firstName = ref("");
  const rules = reactive([
    (value) => {
      if (value) return true;
  
      return "You must enter a first name.";
    },
  ]);
  const city = ref("");
  const handleclick = () => {
    console.log("clicked");
  };
  </script>
  
  <style></style>
  