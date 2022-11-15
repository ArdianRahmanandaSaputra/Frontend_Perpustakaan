<template>
  <Sidebar />
  <div class="container-fluid">
    <div class="mt-3">
      <div class="row">
        <div class="col-md-6">
          <RouterLink class="nav-link" to="/createanggota"
            ><a href="" class="btn btn-primary"
              ><i class="far fa-plus"> Tambah Anggota</i></a
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
      <table class="table table-bordered table-striped" id="tabelanggota">
        <thead>
          <tr>
            <th scope="col">Nama Anggota</th>
            <th scope="col">Alamat</th>
            <th scope="col">Telpon</th>
            <th scope="col">Status</th>
            <th scope="col">Registrasi</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(anggota, index) in anggota" :key="index">
            <td>{{ anggota.nama }}</td>
            <td>{{ anggota.alamat }}</td>
            <td>{{ anggota.telp }}</td>
            <td>{{ anggota.status }}</td>
            <td>{{ anggota.terdaftar }}</td>
            <td>
              <div class="row">
                <div class="col-md-3">
                  <a v-on:click="cetak(anggota.id)" class="btn btn-info"
                    ><i class="far fa-print"></i>
                  </a>
                </div>
                <div class="col-md-3">
                  <a v-on:click="ubah(anggota.id)" class="btn btn-warning"
                    ><i class="far fa-edit"></i>
                  </a>
                </div>
                <div class="col-md-3">
                  <a v-on:click="hapus(anggota.id)" class="btn btn-danger"
                    ><i class="far fa-trash"></i>
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
  name: "User",
  data() {
    return {
      anggota: "",
    };
  },

  methods: {
    hapus(id) {
      if (confirm("Yakin Untuk Menghapus??")) {
        axios
          .get(`http://127.0.0.1:8000/api/anggota/${id}`)
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
      return this.$router.push("/UpdateAnggota/" + id);
    },
    cetak(id) {
      return this.$router.push("/CetakView/" + id);
    },
    tampilData() {
      axios
        .get("http://127.0.0.1:8000/api/anggota")
        .then((res) => (this.anggota = res.data))
        .catch((e) => console.log(e));
    },
  },
  mounted() {
    // $("#tabelanggota").DataTable();
    axios
      .get("http://127.0.0.1:8000/api/anggota")
      .then((res) => (this.anggota = res.data))
      .catch((e) => console.log(e));
  },
  components: { Sidebar },
};
</script>