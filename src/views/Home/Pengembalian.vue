<template>
  <Sidebar />
  <div class="container-fluid">
    <div class="mt-3">
      <div class="row">
        <div class="col-md-6">
          <h2>Pengembalian Buku</h2>
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
            <th scope="col">Tanggal Kembali</th>
            <th scope="col">Tanggal Kembali Sebenarnya</th>
            <th scope="col">Denda</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(kembali, index) in kembali" :key="index">
            <td>{{ kembali.judul_buku }}</td>
            <td>{{ kembali.id_anggota }}</td>
            <td>{{ kembali.tanggal_kembali }}</td>
            <td>{{ kembali.tanggal_kembali_sebenarnya }}</td>
            <td>{{ kembali.denda }}</td>
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
  name: "Pengembalian",
  components: { Sidebar },
  data() {
    return {
      kembali: "",
    };
  },
  mounted() {
    axios
      .get("http://127.0.0.1:8000/api/kembali")
      .then((res) => (this.kembali = res.data))
      .catch((e) => console.log(e));
  },
};
</script>