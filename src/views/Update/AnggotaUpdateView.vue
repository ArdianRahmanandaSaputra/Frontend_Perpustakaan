
<template>
  <Sidebar />
  <div class="container-fluid">
    <div class="mt-3">
      <h2>Form Update Anggota</h2>
      <form @submit.prevent="editanggota">
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
          readonly
        ></base-input>
        <br />
        <button class="btn btn-primary">
          <i class="far fa-save"> Submit</i>
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
      status: "",
      id: this.$route.params.id,
    };
  },
  methods: {
    editanggota() {
      axios
        .put("http://127.0.0.1:8000/api/anggota/" + this.id, {
          nama: this.nama,
          alamat: this.alamat,
          telp: this.telp,
          status: this.status,
        })
        .then(() => this.$router.push("/Anggota"))

        .catch((response) => console.log(response));
    },
  },
  mounted() {
    axios
      .get("http://127.0.0.1:8000/api/anggotashow/" + this.id)
      .then((res) => {
        this.nama = res.data.nama;
        this.alamat = res.data.alamat;
        this.telp = res.data.telp;
        this.status = res.data.status;
      });
  },
};
</script>