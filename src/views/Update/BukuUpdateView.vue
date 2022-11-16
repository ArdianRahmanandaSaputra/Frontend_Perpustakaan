
<template>
  <Sidebar />
  <div class="container-fluid">
    <div class="mt-3">
      <h2>Form Update Buku</h2>
      <form @submit.prevent="editbuku">
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
      status: "",

      id:this.$route.params.id
    };
  },
  methods: {
    editbuku() {
      axios
      .put("http://127.0.0.1:8000/api/buku/"+this.id, {
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
  mounted(){
    axios
    .get ("http://127.0.0.1:8000/api/bukushow/"+this.id)
    .then(res => {
      this.judul_buku = res.data.judul_buku
      this.jenis_buku = res.data.jenis_buku
      this.pengarang = res.data.pengarang
      this.penerbit = res.data.penerbit
      this.thn_terbit = res.data.thn_terbit
      this.status = res.data.status
    })
  },
};
</script>