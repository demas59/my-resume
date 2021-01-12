<template>
  <div class="menu">
    <div class="d-flex justify-content-center text-white">
      <img class="img-menu" src="../assets/profil.jpg" alt="profil.jpg" />
    </div>
    <div class="container">
      <h1>{{ $t('contact') }}</h1>
      <div class="contact-data">
        <div class="row">
          <i class="col-1 material-icons">phone</i>
          <span class="col-11">{{ profil.contact.tel }}</span>
        </div>
        <div class="row">
          <i class="col-1 material-icons">email</i>
          <span class="col-11">{{ profil.contact.email }}</span>
        </div>
        <div class="row">
          <i class="col-1 material-icons">room</i>
          <span class="col-11">{{ profil.contact.adresse }}</span>
        </div>
      </div>
    </div>
    <div class="container">
      <h1>{{ $t('langues') }}</h1>
      <div class="langues-data">
        <div class="row">
          <div class="slidecontainer">
            <input
              type="range"
              min="1"
              max="100"
              value="50"
              class="slider"
              id="myRange"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    profil() {
      console.log(this.$store.state.profil)
      return this.$store.state.profil
    },
  },
}
</script>

<style scoped>
.row {
  color: white;
}

h1 {
  text-decoration: underline;
  color: white;
}

.menu {
  width: 100%;
  background-color: black;
}

.img-menu {
  width: 50%;
  height: auto;
  margin-top: 5px;
  margin-left: auto;
  margin-right: auto;
}

.slidecontainer {
  width: 100%; /* Width of the outside container */
}

/* The slider itself */
.slider {
  -webkit-appearance: none; /* Override default CSS styles */
  appearance: none;
  width: 100%; /* Full-width */
  height: 25px; /* Specified height */
  background: #d3d3d3; /* Grey background */
  outline: none; /* Remove outline */
  opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
  -webkit-transition: 0.2s; /* 0.2 seconds transition on hover */
  transition: opacity 0.2s;
}

/* Mouse-over effects */
.slider:hover {
  opacity: 1; /* Fully shown on mouse-over */
}

/* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
.slider::-webkit-slider-thumb {
  -webkit-appearance: none; /* Override default look */
  appearance: none;
  width: 25px; /* Set a specific slider handle width */
  height: 25px; /* Slider handle height */
  background: #4caf50; /* Green background */
  cursor: pointer; /* Cursor on hover */
}

.slider::-moz-range-thumb {
  width: 25px; /* Set a specific slider handle width */
  height: 25px; /* Slider handle height */
  background: #4caf50; /* Green background */
  cursor: pointer; /* Cursor on hover */
}
</style>
