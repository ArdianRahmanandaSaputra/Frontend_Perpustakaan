
<template>
  <Sidebar />
  <div class="container-fluid">
    <div class="mt-3">
      <h2>Form Input Buku</h2>
      <form @submit.prevent="submitBuku">
        <base-input
          type="text"
          v-model.trim="judul_buku"
          label="Judul Buku"
          placeholder="Judul Buku"
        ></base-input>
        <label for="">Jenis Buku</label>
        <select
          name="jenis_buku"
          @change="onChange($event)"
          class="form-select form-control"
        >
        <option value="">---- Pilih Status ----</Option>
          <option value="Ilmu Pengetahuan">Ilmu Pengetahuan</option>
          <option value="Novel">Novel</option>
          <option value="Kartun">Kartun</option>
          <option value="Lainnya">Lainnya</option>
        </select>
        <base-input
          type="text"
          v-model.trim="pengarang"
          label="Pengarang"
          placeholder="Pengarang"
        ></base-input>
        <base-input
          type="text"
          v-model.trim="penerbit"
          label="Penerbit"
          placeholder="Penerbit"
        ></base-input>
        <base-input
          type="number"
          v-model="thn_terbit"
          label="Tahun Terbit"
          placeholder="Tahun Terbit"
        ></base-input>
        <br />
        <button class="btn btn-primary"><i class="far fa-save"> Submit</i></button>
      </form>
    </div>
  </div>
</template>
  
  <script>
import axios from "axios";
import Sidebar from "../../components/Sidebar.vue";

export default {
  name: "CreateBook",
  components: { Sidebar },
  data() {
    return {
      judul_buku: "",
      onChange(e) {
        this.jenis_buku = e.target.value;
      },
      pengarang: "",
      penerbit: "",
      thn_terbit: "",
      status: "Ada"
    };
  },
  methods: {
    submitBuku() {
      axios
        .post("http://127.0.0.1:8000/api/buku/", {
          judul_buku: this.judul_buku,
          jenis_buku: this.jenis_buku,
          pengarang: this.pengarang,
          penerbit: this.penerbit,
          thn_terbit: this.thn_terbit,
          status: this.status,
        })
        .then(() => this.$router.push("/Buku"))

        .catch((response) => console.log(response));
    },
  },
};
</script>