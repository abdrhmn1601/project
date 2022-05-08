<script setup>
import Navbar from "@/components/Navbar.vue";

</script>

<template>

    <Navbar />
  <div class="container">
    <main class="content">
      <section class="hero">

        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
              <img src="../assets/gambr1.jpg" class="d-block w-100" alt="...">
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p style="color: white">junior developer.</p>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img src="../assets/gbr4.jpg" class="d-block w-100" alt="...">
              <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p style="color: white">Senior Developer.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="../assets/gbr2.jpg" class="d-block w-100" alt="...">
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p style="color: white">Developer Expert.</p>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div class="hero-content">
          <h1 style="color: black">Profesi</h1><br><h2 style="text-align: left">Junior developer</h2><br>
          <p style="color: black">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consectetur earum eligendi error optio. At minima neque officiis, praesentium sit tempora. Accusamus amet consectetur cum ipsa nobis quaerat quod sed soluta. Adipisci amet asperiores consequatur cupiditate dicta doloribus dolorum earum enim error fugiat fugit id incidunt iste libero maiores, molestias neque nesciunt nihil nisi obcaecati officia pariatur porro quae quas quasi qui quos recusandae reiciendis repellat soluta totam ullam voluptas voluptatem. Aliquid beatae dignissimos exercitationem quam quidem quos vel! Ad eligendi explicabo inventore ipsa laboriosam maxime minima, non perspiciatis placeat quaerat quidem, quisquam quod reiciendis repellendus tenetur? Neque, quasi, quis.</p>
          <a href="profile" class="btn btn-outline-primary">Profile Saya</a>
        </div>
      </section>
    </main>
  </div>
  <hr/>
  <footer>
    <p class="foot">Copyright &copy; 2022 Abdul Rahman.</p>
  </footer>
</template>

<style>
h5{
  color: brown;
}
.foot{
   text-align: center;
 }
</style>
