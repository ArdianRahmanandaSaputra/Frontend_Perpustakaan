<template>
  <Sidebar />
  <div class="container-fluid">
    <div class="mt-3">
      <RouterLink class="nav-link" to="/createbuku"
        ><a href="" class="btn btn-primary"
          ><i class="far fa-plus"> Tambah Buku</i></a
        ></RouterLink
      ><br />
      <table class="table table-bordered table-striped">
        <thead>
          <tr>
            <th scope="col">Judul Buku</th>
            <th scope="col">Jenis Buku</th>
            <th scope="col">Pengarang</th>
            <th scope="col">Penerbit</th>
            <th scope="col">Status</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(buku, index) in covid" :key="index">
            <td>{{ buku.judul_buku }}</td>
            <td>{{ buku.jenis_buku }}</td>
            <td>{{ buku.pengarang }}</td>
            <td>{{ buku.penerbit }}</td>
            <td>{{ buku.status }}</td>
            <td>
              <button v-on:click="hapus(buku.kode_buku)" class="btn btn-danger">
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
  name: "Buku",
  components: { Sidebar },
  data() {
    return {
      covid: "",
    };
  },

  methods: {
    hapus(id) {
      if (confirm("Yakin Untuk Menghapus??")) {
        axios
          .get(`http://127.0.0.1:8000/api/buku/${id}`)
          .then(this.tampilData())
          .catch((e) => console.log(e));
      }
    },
    tampilData() {
      axios
        .get("http://127.0.0.1:8000/api/buku")
        .then((res) => (this.covid = res.data))
        .catch((e) => console.log(e));
    },
    refreshData() {
      axios
        .get("http://127.0.0.1:8000/api/buku")
        .then((res) => {
          this.covid = res.data;
        })
        .catch((e) => console.log(e));
    },
  },
  mounted() {
    this.refreshData();
  },
};
</script>
  