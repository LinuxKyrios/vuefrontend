<template>
  <!-- Start section home -->
  <div id="home">
    <!-- Navigation -->
    <nav class="navbar mavbar-expand-md navar-dark fixed-top">
      <a class="navbar-brand" href="#">
        <img src="assets/LOGO.jpg" alt="LOGO"/>
      </a>
      <button class="navbar-toogler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a href="#home" class="nav-link">Stona główna</a>
          </li>
          <li class="nav-item">
            <a href="#distros" class="nav-link">Dystrybucje</a>
          </li>
          <li class="nav-item">
            <a href="#features" class="nav-link">Możliwości</a>
          </li>
          <li class="nav-item">
            <a href="#resources" class="nav-link">Zasoby</a>
          </li>
          <li class="nav-item">
            <a href="#bootstrap" class="nav-link">Bootstrap</a>
          </li>
          <li class="nav-item">
            <a href="#contact" class="nav-link">Kontakt</a>
          </li>
        </ul>
      </div>
    </nav>
    <!--End navigation-->
    <div class="landing">
      <div class="come-wrap">
        <div class="home-inner"></div>
      </div>
    </div>
    <div class="text-center caption">
      <h1>First Vue Project with enhanced frontend</h1>
      <h3>Project with enhanced backend will be created in the close future</h3>
      <a class="btn btn-outline-dark btn-lg" href="#resource">Load for more!</a>
    </div>
  </div>
<!-- End home section -->
</template>

<script>

export default {
  name: 'App',


}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
