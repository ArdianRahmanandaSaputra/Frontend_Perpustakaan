<template>
  <Sidebar />
  <div class="container-fluid">
    <div class="mt-3">
      <RouterLink class="nav-link" to="/createpeminjaman"
        ><a href="" class="btn btn-primary"
          ><i class="far fa-plus"> Tambah Pinjaman</i></a
        ></RouterLink
      ><br />
      <table class="table table-bordered table-striped">
        <thead>
          <tr>
            <th scope="col">Judul Buku</th>
            <th scope="col">Tanggal Pinjam</th>
            <th scope="col">Tanggal Kembali</th>
            <th scope="col">Status</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(pinjaman, index) in covid" :key="index">
            <td>{{ pinjaman.judul_buku }}</td>
            <td>{{ pinjaman.tanggal_pinjam }}</td>
            <td>{{ pinjaman.tanggal_kembali }}</td>
            <td>{{ pinjaman.status }}</td>
            <td>
              <button
                v-on:click="hapus(pinjaman.id_pinjaman)"
                class="btn btn-danger"
              >
                <i class="far fa-trash"> Delete</i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
  
  <script>
import axios from "axios";
import Sidebar from "../../components/Sidebar.vue";
export default {
  name: "Peminjaman",
  data() {
    return {
      covid: "",
    };
  },
  methods: {
    hapus(id) {
      if (confirm("Yakin Untuk Menghapus??")) {
        axios
          .get(`http://127.0.0.1:8000/api/pinjam/${id}`)
          .then(this.tampilData())
          .catch((e) => console.log(e));
      }
    },
    tampilData() {
      axios
        .get("http://127.0.0.1:8000/api/pinjam")
        .then((res) => (this.covid = res.data))
        .catch((e) => console.log(e));
    },
  },
  mounted() {
    axios
      .get("http://127.0.0.1:8000/api/pinjam")
      .then((res) => (this.covid = res.data))
      .catch((e) => console.log(e));
  },
  components: { Sidebar },
};
</script>