<script setup>
import Navbar from "@/components/Navbar.vue";

</script>

<template>
  <div class="bghlp">
  <main>
    <Navbar />
    <div>
      <h2 style="color: white">Butuh Bantuan?</h2><hr><br><h3>Tulis dikolom yg ada di bawah ini</h3>
      <input id="bantuan" placeholder="Need help? write in this column" class="form-control" type="search"/>
      <button class="btn btn-outline-success" type="submit">Kirim</button>
    </div>
  </main>
  </div>
</template>

<style>
#bantuan{
  width: 70%;
}
h3{
  color: white;
  font-family: Bahnschrift;
}

.bghlp{
  background: url("../assets/bgprof.webp");
  height: 600px;
}

</style>