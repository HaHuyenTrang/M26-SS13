<template>
    <!-- Form thêm mới nhân viên -->
    <div class="overlay">
      <form class="form" @submit.prevent="handleSubmit">
        <div class="d-flex justify-content-between align-items-center">
          <h4>Chỉnh sửa nhân viên</h4>
          <i class="fa-solid fa-xmark" @click="handleClose"></i>
        </div>
        <div>
          <label class="form-label" for="userName">Họ và tên</label>
          <input
            id="userName"
            type="text"
            class="form-control"
            v-model="employee.name"
          />
          <div class="form-text error" v-if="nameErr">{{ nameErr }}</div>
        </div>
        <div>
          <label class="form-label" for="dateOfBirth">Ngày sinh</label>
          <input
            id="dateOfBirth"
            type="date"
            class="form-control"
            v-model="employee.dateOfBirth"
          />
        </div>
        <div class="form-text error" v-if="dateOfBirthErr">
          {{ dateOfBirthErr }}
        </div>
        <div>
          <label class="form-label" for="email">Email</label>
          <input
            id="email"
            type="text"
            class="form-control"
            v-model="employee.email"
          />
        </div>
        <div class="form-text error" v-if="emailErr">
          {{ emailErr }}
        </div>
        <div>
          <label class="form-label" for="address">Địa chỉ</label>
          <textarea
            class="form-control"
            id="address"
            rows="3"
            v-model="employee.address"
          ></textarea>
        </div>
        <div>
          <button class="w-100 btn btn-primary">Thêm mới</button>
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
  import { reactive, ref } from "vue";
  import { validateEmail } from "@/utils/validateData";
  
  const { listEmployee } = defineProps(["listEmployee"]);
  
  // // lay tu localStogare
  // const employees = reactive(JSON.parse(localStorage.getItem("emloyees")) || []);
  const emit = defineEmits("onClose");
  //  ham ban emit
  const handleClose = () => {
    emit("onClose");
  };
  
  const employee = reactive({
    id: Math.floor(Math.random() * 10000000),
    name: "",
    dateOfBirth: "",
    email: "",
    address: "",
    status: true,
  });
  
  const nameErr = ref("");
  const dateOfBirthErr = ref("");
  const emailErr = ref("");
  
  const currentTime = () => {
    const today = new Date();
    const day = today.getDate().toString().padStart(2, 0);
    const month = (today.getMonth() + 1).toString().padStart(2, 0);
    const year = today.getFullYear();
  
    return `${year}-${month}-${day}`;
  };
  
  const handleSubmit = () => {
    if (!employee.name) {
      nameErr.value = "Họ và tên không được để trống.";
      return;
    } else {
      nameErr.value = "";
    }
    if (employee.dateOfBirth > currentTime()) {
      dateOfBirthErr.value = "Ngày sinh không được lớn hơn ngày hiện tại.";
      return;
    } else {
      dateOfBirthErr.value = "";
    }
    if (!employee.email) {
      emailErr.value = "Email không được để trống.";
      return;
    } else {if (!validateEmail(employee.email)) {
      emailErr.value = "Email không đúng định lệ.";
    } else {
      emailErr.value = "";
    }
  }
  if (
    employee.name &&
    employee.email &&
    validateEmail(employee.email) &&
    employee.dateOfBirth <= currentTime()
  ) {
    // push doi tuong emloyee vao mang
    listEmployee.push(employee);
    // luu du lieu len localStorage
    localStorage.setItem("employee", JSON.stringify(listEmployee));
    // dong form
    handleClose();
  }
};
</script>

<style></style>