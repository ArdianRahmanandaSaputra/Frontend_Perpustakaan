<template>
  <Sidebar />
  <div class="container-fluid">
    <div class="mt-3">
      <div class="row">
        <div class="col-md-6">
          <RouterLink class="nav-link" to="/createbuku"
            ><a href="" class="btn btn-primary"
              ><i class="far fa-plus"> Tambah Buku</i></a
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
      </div>
      <br />
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
          <tr v-for="(buku, index) in buku" :key="index">
            <td>{{ buku.judul_buku }}</td>
            <td>{{ buku.jenis_buku }}</td>
            <td>{{ buku.pengarang }}</td>
            <td>{{ buku.penerbit }}</td>
            <td>{{ buku.status }}</td>
            <td>
              <div class="row">
                <div class="col-md-4">
                  <a v-on:click="ubah(buku.id)" class="btn btn-warning"
                    ><i class="far fa-edit"></i>
                  </a>
                </div>
                <div class="col-md-4">
                  <a v-on:click="hapus(buku.id)" class="btn btn-danger"
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
  name: "Buku",
  components: { Sidebar },
  data() {
    return {
      buku: "",
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
    logout() {
      if (confirm("Yakin Ingin Keluar??")) {
        axios.get(`http://127.0.0.1:8000/api/logout`).then((res) => {
          localStorage.removeItem("loggedin");
          localStorage.removeItem("token");
          return this.$router.push("/");
        });
      }
    },
    ubah(id) {
      return this.$router.push("/UpdateBuku/" + id);
    },
    tampilData() {
      axios
        .get("http://127.0.0.1:8000/api/buku")
        .then((res) => (this.buku = res.data))
        .catch((e) => console.log(e));
    },
    refreshData() {
      axios
        .get("http://127.0.0.1:8000/api/buku")
        .then((res) => {
          this.buku = res.data;
        })
        .catch((e) => console.log(e));
    },
  },
  mounted() {
    this.refreshData();
  },
};
</script>
  