<script setup>
import Navbar from "@/components/Navbar.vue";

</script>

<template>
  <Navbar/>
  <body>
  <div class="bodi">
    <div class="kanvas">
  <img src="../assets/abd.jpg" class="rounded-circle img-thumbnail" alt="my poto" width="125" height="125" style="display: block; margin: auto">
  <h2 class="n1">Abdul Rahman</h2>
      <h5 class="h5">12050117089</h5>
      <hr>

  <p id="p1" class="p1">
    Saya adalah mahasiswa semester 4 kelas B teknik informatika
    <br/>di Universitas Islam Negri Sultan Syarif Kasim Riau.<br> Ini adalah web saya yang saya buat pada saat semester 4 sebagai tugas<br>Matakuliah Pemrogramman Web
  </p>
  <br><br><br><br><br><br><br><br><br><br><br>
  <hr>
    </div>
  </div>
  </body>
  <footer>
    <p class="foot">Copyright &copy; 2022 Abdul Rahman.</p>
  </footer>


</template>

<style>
.h5{
  text-align: center;
}
.n1{
  text-align: center;
}
.p1{
  text-align: center;
}
.kanvas{
  background: linear-gradient(white, lightseagreen);
  border-radius: 10px;
  width: 60%;
  margin-left: auto;
  margin-right: auto;

}
.bodi{
  background-image: url("../assets/bgprof.webp");
  padding: 30px;
}

</style>