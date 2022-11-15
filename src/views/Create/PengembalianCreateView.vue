
<template>
  <Sidebar />
  <div class="container-fluid">
    <div class="mt-3">
      <form @submit.prevent="submitkembali">
        <base-input
          type="text"
          v-model.trim="no_transaksi"
          label="No. Transaksi"
          placeholder="No. Transaksi"
          readonly
        ></base-input>
        <base-input
          type="text"
          v-model.trim="judul_buku"
          label="Judul Buku"
          placeholder="Judul Buku"
          readonly
        ></base-input>
        <base-input
          type="text"
          v-model.trim="id_anggota"
          label="ID Anggota"
          placeholder="ID Anggota"
          readonly
        ></base-input>
        <base-input type="text" v-model.trim="tanggal_kembali"></base-input>
        <base-input
          type="text"
          v-model.trim="tanggal_kembali_sebenarnya"
        ></base-input>
        <base-input type="text" v-model.trim="denda"></base-input>
        <br />
        <button class="btn btn-primary">
          <i class="far fa-save"> Submit</i>
        </button>
      </form>
    </div>
  </div>
</template>
  
  <script>
import { parse } from "@babel/parser";
import axios from "axios";
import Sidebar from "../../components/Sidebar.vue";

export default {
  name: "PengembalianCreateView",
  components: { Sidebar },
  data() {
    return {
      no_transaksi: "",
      judul_buku: "",
      id_anggota: "",
      tanggal_kembali: "",
      tanggal_kembali_sebenarnya: "",
      denda: "",
      id: this.$route.params.id,
    };
  },
  methods: {
    submitkembali() {
      axios
        .post("http://127.0.0.1:8000/api/kembali/", {
          no_transaksi: this.no_transaksi,
          judul_buku: this.judul_buku,
          id_anggota: this.id_anggota,
          tanggal_kembali: this.tanggal_kembali,
          tanggal_kembali_sebenarnya: this.tanggal_kembali_sebenarnya,
          denda: this.denda,
        })
        .then(() => this.$router.push("/pengembalian"))

        .catch((response) => console.log(response));
    },
  },
  mounted() {
    axios.get("http://127.0.0.1:8000/api/pinjamshow/" + this.id).then((res) => {
      this.no_transaksi = res.data.no_transaksi;
      this.judul_buku = res.data.judul_buku;
      this.id_anggota = res.data.id_anggota;
      this.tanggal_kembali = res.data.tanggal_kembali;

      let timestamp = Date.parse(this.tanggal_kembali_sebenarnya);
      let telat = new Date(timestamp);
      let saiki = new Date(Date.parse(this.tanggal_kembali));

      const diffTime = Math.abs(telat - saiki);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      this.denda = diffDays * 10000;
    });

    var m = new Date();
    var notrans =
      m.getUTCFullYear() +
      "" +
      (m.getUTCMonth() + 1) +
      "" +
      m.getUTCDate() +
      "" +
      m.getUTCHours() +
      "" +
      m.getUTCMinutes() +
      "" +
      m.getUTCSeconds();
    this.no_transaksi = notrans;

    var dateString =
      m.getUTCFullYear() + "-" + (m.getUTCMonth() + 1) + "-" + m.getUTCDate();
    this.tanggal_kembali_sebenarnya = dateString;
  },
};
</script>