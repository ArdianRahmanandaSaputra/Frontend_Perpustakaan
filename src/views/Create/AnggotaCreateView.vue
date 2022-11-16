
<template>
  <Sidebar />
  <div class="container-fluid">
    <div class="mt-3">
      <h2>Form Input Anggota</h2>
      <form @submit.prevent="submitAnggota">
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
        <br />
        <label for="">Status</label>
        <select
          name="status"
          @change="onChange($event)"
          class="form-select form-control"
        >
          <Option value="">---- Pilih Status ----</Option>
          <option value="Siswa/Mahasiswa">Siswa/Mahasiswa</option>
          <option value="Guru/Dosen">Guru/Dosen</option>
          <option value="Lainnya">Lainnya</option>
        </select>
        <br />
        <button class="btn btn-primary">
          <i class="fal fa-save"> Submit</i>
        </button>
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
      onChange(e) {
        this.status = e.target.value;
      },
    };
  },
  methods: {
    submitAnggota() {
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