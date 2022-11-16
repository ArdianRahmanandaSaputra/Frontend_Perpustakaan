<template>
  <Sidebar />
  <div class="container-fluid">
    <div class="mt-3">
      <h2>Dashboard</h2>
      <div class="mt-3">
        <div class="row">
          <div class="col-xl-4 col-sm-6 mb-3">
            <div class="card text-white bg-primary o-hidden h-100">
              <div class="card-body">
                <div class="mr-5">
                  <i class="far fa-users"></i> Anggota: 100
                </div>
              </div>
              <RouterLink class="nav-link" to="/anggota"
                ><a href="" class="btn btn-primary">
                  Detail <i class="fa fa-arrow-right"></i
                ></a>
              </RouterLink>
            </div>
          </div>
          <div class="col-xl-4 col-sm-6 mb-3">
            <div class="card text-white bg-success o-hidden h-100">
              <div class="card-body">
                <div class="mr-5"><i class="far fa-books"></i> Buku: 100</div>
              </div>
              <RouterLink class="nav-link" to="/buku"
                ><a href="" class="btn btn-success">
                  Detail <i class="fa fa-arrow-right"></i
                ></a>
              </RouterLink>
            </div>
          </div>
          <div class="col-xl-4 col-sm-6 mb-3">
            <div class="card text-white bg-danger o-hidden h-100">
              <div class="card-body">
                <div class="mr-5">
                  <i class="far fa-book-open"></i> Peminjaman: 23
                </div>
              </div>
              <RouterLink class="nav-link" to="/peminjaman"
                ><a href="" class="btn btn-danger">
                  Detail <i class="fa fa-arrow-right"></i
                ></a>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Sidebar from "../../components/Sidebar.vue";
export default {
  name: "Home",
  components: { Sidebar },
};
</script>
