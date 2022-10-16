<template>
  <Sidebar />
  <div class="container-fluid">
    <div class="mt-3">
      <RouterLink class="nav-link" to="/createanggota"
        ><a href="" class="btn btn-primary"
          ><i class="far fa-plus"> Tambah Anggota</i></a
        ></RouterLink
      ><br />
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
          <tr v-for="(anggota, index) in covid" :key="index">
            <td>{{ anggota.nama }}</td>
            <td>{{ anggota.alamat }}</td>
            <td>{{ anggota.telp }}</td>
            <td>{{ anggota.status }}</td>
            <td>{{ anggota.terdaftar }}</td>
            <td>
              <a v-on:click="hapus(anggota.id_anggota)" class="btn btn-danger"
                ><i class="far fa-trash"> Delete</i>
              </a>
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
      covid: "",
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
    tampilData() {
      axios
        .get("http://127.0.0.1:8000/api/anggota")
        .then((res) => (this.covid = res.data))
        .catch((e) => console.log(e));
    },
  },
  mounted() {

    $(document).ready(function(){
        $('#tabel-data').DataTable();
    });

    axios
      .get("http://127.0.0.1:8000/api/anggota")
      .then((res) => (this.covid = res.data))
      .catch((e) => console.log(e));
  },
  components: { Sidebar },
};
</script>