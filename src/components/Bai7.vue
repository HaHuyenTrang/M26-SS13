<template>
  <div class="text-center pa-4">
    <v-btn @click="dialog = true">Xác nhận </v-btn>

    <v-dialog v-model="dialog" width="auto">
      <v-card
        max-width="400"
        prepend-icon="mdi-update"
        text="Bạn có xác nhận làm mới dữ liệu không? Nếu có dữ liệu sẽ được cập nhật"
        title="Xác nhận"
      >
        <template v-slot:actions>
          <v-btn class="ms-auto" text="xác nhận" @click="dialog = false"></v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style></style>
