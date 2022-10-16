
<template>
  <Sidebar />
  <div class="container-fluid">
    <div class="mt-3">
      <form @submit.prevent="submitBuku">
        <base-input
          type="text"
          v-model.trim="nama"
          label="Nama Anggota"
          placeholder="Nama Anggota"
        ></base-input>
        <base-input
          type="text"
          v-model.trim="alamat"
          label="Alamat"
          placeholder="Alamat"
        ></base-input>
        <base-input
          type="text"
          v-model.trim="telp"
          label="No. Telepon"
          placeholder="No. Telepon"
        ></base-input>
        <base-input
          type="text"
          v-model.trim="status"
          label="Status"
          placeholder="Status"
        ></base-input>
        <br>
        <button class="btn btn-primary"><i class="far fa-save"> Submit</i></button>
      </form>
    </div>
  </div>
</template>
  
  <script>
import axios from "axios";
import Sidebar from "../../components/Sidebar.vue";

export default {
  name: "CreateAnggota",
  components: { Sidebar },
  data() {
    return {
      nama: "",
      alamat: "",
      telp: "",
      status: "",
    };
  },
  methods: {
    submitBuku() {
      axios
        .post("http://127.0.0.1:8000/api/anggota/", {
          nama: this.nama,
          alamat: this.alamat,
          telp: this.telp,
          status: this.status,
        })
        .then(() => this.$router.push("/Anggota"))

        .catch((response) => console.log(response));
    },
  },
};
</script>