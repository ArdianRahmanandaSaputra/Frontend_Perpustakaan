
<template>
  <Sidebar />
  <div class="container-fluid">
    <div class="mt-3">
      <form @submit.prevent="editpeminjaman">
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
        ></base-input>
        <base-input
          type="text"
          v-model.trim="id_anggota"
          label="ID Anggota"
          placeholder="ID Anggota"
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
  name: "PinjamView",
  components: { Sidebar },
  data() {
    return {
      no_transaksi: "",
      judul_buku: "",
      id_anggota: "",
      tanggal_pinjam: "",
      tanggal_kembali: "",
      status: "Pinjam",

      id: this.$route.params.id,
    };
  },
  methods: {
    editpeminjaman() {
      axios
        .put("http://127.0.0.1:8000/api/pinjam/" + this.id, {
          no_transaksi: this.no_transaksi,
          judul_buku: this.judul_buku,
          id_anggota: this.id_anggota,
        })
        .then(() => this.$router.push("/Peminjaman"))

        .catch((response) => console.log(response));
    },
  },
  mounted() {
    axios
      .get("http://127.0.0.1:8000/api/pinjamshow/" + this.id)
      .then((res) => {
        this.no_transaksi = res.data.no_transaksi;
        this.judul_buku = res.data.judul_buku;
        this.id_anggota = res.data.id_anggota;
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
      m.getUTCFullYear() + "/" + (m.getUTCMonth() + 1) + "/" + m.getUTCDate();
    this.tanggal_pinjam = dateString;
    let harikembali = m.setDate(m.getDate() + 7);
    harikembali = new Date(harikembali);
    let strdate =
      harikembali.getUTCFullYear() +
      "/" +
      (harikembali.getUTCMonth() + 1) +
      "/" +
      harikembali.getUTCDate();
    this.tanggal_kembali = strdate;
  },
};
</script>