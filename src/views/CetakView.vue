
<template>
  <div class="container-fluid" ref="document">
    <div class="mt-3">
      <div id="element-to-convert">
        <h5>Kartu Anggota Perpustakaan Insani</h5>
        <base-input
          type="text"
          v-model.trim="id"
          label="ID Anggota"
          placeholder="ID Anggota"
          readonly
        ></base-input>
        <base-input
          type="text"
          v-model.trim="nama"
          label="Nama Anggota"
          placeholder="Nama Anggota"
        ></base-input>
        <base-input
          type="text"
          v-model.trim="status"
          label="Status"
          placeholder="Status"
          readonly
        ></base-input>
        <base-input
          type="text"
          v-model.trim="terdaftar"
          label="Terdaftar"
          placeholder="Terdaftar"
          readonly
        ></base-input>
        <p style="color: red">Kartu Anggota Harap Disimpan Dengan Baik</p>
      </div>
      <div class="row">
        <div class="col-md-2">
          <button @click="exportToPDF" class="btn btn-primary">
            Export to PDF
          </button>
        </div>
        <div class="col-md-1">
          <RouterLink to="/Anggota"
            ><a href="" class="btn btn-danger">Kembali</a></RouterLink
          >
        </div>
      </div>
    </div>
  </div>
</template>
    
    <script>
import axios from "axios";
import html2pdf from "html2pdf.js";

export default {
  name: "CetakView",
  data() {
    return {
      id: "",
      nama: "",
      status: "",
      terdaftar: "",
      id: this.$route.params.id,
    };
  },
  methods: {
    exportToPDF() {
      html2pdf(document.getElementById("element-to-convert"), {
        filename: this.id,
        margin: 2,
      });
    },
  },
  mounted() {
    axios
      .get("http://127.0.0.1:8000/api/anggotashow/" + this.id)
      .then((res) => {
        this.id = res.data.id;
        this.nama = res.data.nama;
        this.status = res.data.status;
        this.terdaftar = res.data.terdaftar;
      });
  },
};
</script>
