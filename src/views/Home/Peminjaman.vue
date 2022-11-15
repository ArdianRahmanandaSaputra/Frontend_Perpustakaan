<template>
  <Sidebar />
  <div class="container-fluid">
    <div class="mt-3">
      <div class="row">
        <div class="col-md-6">
          <RouterLink class="nav-link" to="/createpeminjaman"
            ><a href="" class="btn btn-primary"
              ><i class="far fa-plus"> Tambah Pinjaman</i></a
            ></RouterLink
          >
        </div>
        <div class="col-md-6">
          <div class="d-flex justify-content-end">
            <a v-on:click="logout()" class="btn btn-secondary"
                    ><i class="far fa-sign-out-alt"> Logout</i>
                  </a>
          </div>
        </div>
      </div><br />
      <table class="table table-bordered table-striped">
        <thead>
          <tr>
            <th scope="col">Judul Buku</th>
            <th scope="col">ID Anggota</th>
            <th scope="col">Tanggal Pinjam</th>
            <th scope="col">Tanggal Kembali</th>
            <th scope="col">Status</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(pinjaman, index) in pinjam" :key="index">
            <td>{{ pinjaman.judul_buku }}</td>
            <td>{{ pinjaman.id_anggota }}</td>
            <td>{{ pinjaman.tanggal_pinjam }}</td>
            <td>{{ pinjaman.tanggal_kembali }}</td>
            <td>{{ pinjaman.status }}</td>
            <td>
              <div class="row">
                <div class="col-md-3">
                  <a v-on:click="kembali(pinjaman.id)" class="btn btn-info"
                    ><i class="far fa-book-reader"></i>
                  </a>
                </div>
                <div class="col-md-3">
                  <a v-on:click="ubah(pinjaman.id)" class="btn btn-warning"
                    ><i class="far fa-edit"></i>
                  </a>
                </div>
                <div class="col-md-3">
                  <a v-on:click="hapus(pinjaman.id)" class="btn btn-danger"
                    ><i class="far fa-trash-alt"></i>
                  </a>
                </div>
              </div>
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
      pinjam: "",
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
        .then((res) => (this.pinjam = res.data))
        .catch((e) => console.log(e));
    },
    logout(){
      if (confirm("Yakin Ingin Keluar??")) {
      axios
      .get(`http://127.0.0.1:8000/api/logout`)
      .then((res) => {
        localStorage.removeItem('loggedin')
        localStorage.removeItem('token')
        return this.$router.push('/')})
      }
    },
    ubah(id) {
      return this.$router.push("/UpdatePeminjaman/" + id);
    },
    kembali(id) {
      return this.$router.push("/Formpengembalian/" + id);
    },
  },
  mounted() {
    axios
      .get("http://127.0.0.1:8000/api/pinjam")
      .then((res) => (this.pinjam = res.data))
      .catch((e) => console.log(e));
  },
  components: { Sidebar },
};
</script>