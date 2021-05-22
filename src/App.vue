<template>
  <!-- Start section home -->
  <div id="all">
  <div id="home">
    <!-- Navigation -->
    <nav class="navbar navbar-expand-md navbar-dark fixed-top">
      <a class="navbar-brand" href="#">
        <img src="assets/logo.png" alt="LOGO" />
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a href="#home" class="nav-link">Strona główna</a>
          </li>
          <li class="nav-item">
            <a href="#course" class="nav-link">Kurs</a>
          </li>
          <li class="nav-item">
            <a href="#features" class="nav-link">Możliwosci</a>
          </li>
          <li class="nav-item">
            <a href="#resources" class="nav-link">Zasoby</a>
          </li>
          <li class="nav-item">
            <a href="#clients" class="nav-link">Klienci</a>
          </li>
          <li class="nav-item">
            <a href="#contact" class="nav-link">Kontakt</a>
          </li>
        </ul>
      </div>
    </nav>
    <!--End navigation-->
    <div class="landing">
      <div class="home-wrap">
        <div class="home-inner"></div>
      </div>
    </div>
    <div class="text-center caption">
      <h1>First Vue Project with enhanced frontend</h1>
      <h3>Project with enhanced backend will be created in the close future</h3>
      <a class="btn btn-outline-dark btn-lg" href="#course">Ask for more!</a>
    </div>
  </div>

  <!-- End section home -->
  <!-- Start section course -->
  <div id="course">
    <div class="col-12 text-center">
      <p>See more about FreeeBSD - the famous Unix distribution</p>
      <a class="btn btn-secondary btn-md"
         href="https://en.wikipedia.org/wiki/FreeBSD" target="_blank">
        Redirect to page about FreeBSD
      </a>
    </div>
  </div>
    <!-- Start section features -->
    <div id="features">
      <div class="jumbotron text-center">
        <h2>Best opportunities to learn about the following:</h2>
        <ul class="features-list">
          <li>Creating HTML/CSS layouts</li>
          <li>UX/UI design</li>
          <li>Mastering JavaScript</li>
          <li>Learning Vue, Angular and React in the latest version</li>
          <li>Master the administrative aspects of the Unix-like system family</li>
        </ul>
        <hr class="line">
      </div>
    </div>
    <!-- End section FEATURES -->
    <!-- Start section resources -->
    <div id="resources">
      <div class="jumbotron">
        <div class="narrow">
          <div class="col-12">
            <h3 class="heading text-center">Resources:</h3>
          </div>

          <div class="row text-center">
            <div class="col-md-4">
              <div class="resource">
                <i class="fab fa-html5 fa-6x"></i>
                <h3>Cecha 1 </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit beatae odit a natus doloremque, fugit ducimus nobis? Harum enim, quo officia, atque totam nulla optio quisquam placeat dignissimos labore incidunt?</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="resource">
                <i class="fab fa-css3 fa-6x"></i>
                <h3>Cecha 2 </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit beatae odit a natus doloremque, fugit ducimus nobis? Harum enim, quo officia, atque totam nulla optio quisquam placeat dignissimos labore incidunt?</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="resource">
                <i class="fab fa-js-square fa-6x"></i>
                <h3>Cecha 3 </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit beatae odit a natus doloremque, fugit ducimus nobis? Harum enim, quo officia, atque totam nulla optio quisquam placeat dignissimos labore incidunt?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End section resources -->



  </div>
</template>

<script>

export default {
  name: 'App',


}
</script>

<style>
/* General rules */
/* ... */
body {
  overflow-x: hidden;
  background-color: lightgray;

}

/* Navigation */
.navbar {
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 0.1rem;
  background-color: rgba(0, 0, 0, 0.5) !important;
  font-weight: bold;
}

.navbar-brand img {
  height: 1.8rem;
}
.navbar-nav li {
  padding-right: 0.6rem;
}

.navbar-dark .navbar-nav .nav-link {
  color: white;
  padding-top: 0.6rem;
}

.navbar-dark .navbar-nav .nav-link:hover {
  color: lime;
}

/* Landing */

.home-inner {
  background-image: url(assets/Slider.jpg);
  background-size: contain;
}

.caption {
  width: 100%;
  max-width: 100%;
  position: absolute;
  top: 40%;
  color: black;
  z-index: 1;
  text-transform: uppercase;
}

.caption h1 {
  font-size: 1.8rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  padding-bottom: 1rem;
  color: lightgray;
}

.caption h3 {
  padding-bottom: 1rem;
  color: darkgray;
}

/* Course */
#course {
  background-color: lightgray;
}

/* Features */
.jumbotron {
  color: black;
  padding-bottom: 0;
  margin-bottom: 0;
}

.features-list {
  list-style: none;
}

.jumbotron .line {
  margin-bottom: 0;
}

/* Clients */

.client {
  border-radius: 50%;
  width: 80%;
  max-width: 80%;
}

.blockquote {
  max-width: 70%;
  margin: 0 auto;
}

/* Footer */
footer, footer a {
  background-color: lightgray;
  color: white;

}

footer img {
  height: 2rem;
  margin: 1.5rem 0;
}

footer a:hover, footer p, footer h3{
  color: black;
}

/* Own @media rules */
@media only screen and(max-width: 768px) {
  .client {
    width: 50%;
    max-width: 30vw;
  }
}

/*--- Extra Bootstrap Column Padding --*/
[class*="col-"] {
  padding: 1rem;
}

/*--- Bootstrap Mobile Gutter Fix --*/
.row, .container-fluid {
  margin-left: 0px!important;
  margin-right: 0px!important;
}

/*--- Fix for Fixed Navbar jumping on scroll --*/
.fixed-top  {
  -webkit-backface-visibility: hidden;
}

/*--- Fixed Landing Page Section --*/
.landing {
  position: relative;
  width: 100%;
  height: 100vh;
  display: table;
  z-index: -1;
}
.home-wrap {
  clip: rect(0, auto, auto, 0);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.home-inner {
  position: fixed;
  display: table;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  will-change: transform;
}

/*--- iOS Fixed Background Image --*/
.fixed-background {
  position: relative;
  width: 100%;
}
.fixed-wrap {
  clip: rect(0, auto, auto, 0);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -999!important;
}
.fixed {
  position: fixed;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  will-change: transform;
}

.test {
  width: 350px;
  height: 320px;
  background-color: yellow;
}

</style>