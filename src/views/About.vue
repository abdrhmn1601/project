
<script setup>
import Navbar from "@/components/Navbar.vue";

</script>

<template >
  <div class="bg">
  <main>
    <Navbar />
    <div>
      <article>
        <h1>About this web</h1><hr>
        <h7 style="color: white" >
          Hi, saya adalah seorang web developer,
          Saat ini sedang belajar membuat web.<br/>
          Saya memang masih baru dalam web development, karena itu
          saya tidak akan pernah berhenti belajar.<br/>
          Saya ingin menguasai bahasa HTML, CSS, dan Javascript.
          <br><br><br>
          video referensi youtube.
        </h7><br><br>
            <a href="https://youtu.be/LkR-9Z1sle8" class="btn btn-light text-center">Tonton Video Youtube</a>
      </article>
    </div>
  </main>
  </div>
</template>
<style>
.bg{
  background: url("../assets/bgprof.webp");
  height: 600px;
}
h1{
  color: white;
}
</style>