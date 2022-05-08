<template>
  <Navbar/>
  <div class="bgkir">
    <h2 style="color: white">Kirim Masukan Kepada Developer</h2><hr>

  <div>
    <h1>Contact Me</h1>
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="@gmail.com">
    </div>
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">Ketik Masukan Anda</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="ketik di sini..."></textarea>
    </div>
  </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  name: "KirimMasukan",
  components: { Navbar }
};
</script>
<style>
.form-label{
  color: white;
}
.bgkir{
  background: url("../assets/bgprof.webp");
  height: 600px;
}
h2{
  color: white;
}
hr{
  border: 10px;
  height: 1000px;
  background-image: linear-gradient(to right, white, blue);
}
</style>