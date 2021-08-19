<template>
  <v-app>
    <v-main>
      <router-view/>
      <nav-buttom/>
    </v-main>
  </v-app>
</template>

<script>
import navButtom from './components/navButtom.vue'
export default {
  components: { navButtom },
  name: 'App',
}
</script>

<style>
  body{
font-family: 'Poiret One', cursive;
  }

.v-main__wrap{
  background-color: black;
  background-image: url("assets/fondoAstro.jpg");
  background-repeat:  repeat;
}

.v-card-actions {
    padding: 0rem!important; 
    min-height: 0px!important;
   
}

h1, h4{
  color:white;
}

.neon{
  box-shadow: 0 0 40px #03f;
  background-color:black
}

.v-bottom-navigation .v-btn {
    background-color: black;
    opacity: 1!important;
}

span{
   color:white
}


.brillant{
font: normal 1.2em/normal "Poiret One", sans-serif;
text-shadow: 0 0 10px rgba(255,255,255,1) , 0 0 20px rgba(255,255,255,1) , 0 0 30px rgba(255,255,255,1) , 0 0 40px #ff00de , 0 0 70px #ff00de , 0 0 80px #ff00de , 0 0 100px #ff00de ;
}

.imageGrid{
  height: 500px;
  width: auto;
}

@media screen and (max-width: 500px) {
  .brillant{
    font: normal 0.6em/normal "Poiret One", sans-serif;
  }
  .imageGrid{
  height: 200px;
  width: 400px;
}
}

.v-main {
    padding: 64px 0px 56px!important;
}

.gradientPurple{
  background-image: linear-gradient(225deg, #ee7aff 0, #a060ff 25%, #4d42d4 50%, #002597 75%, #000b61 100%);
}


@import url('https://fonts.googleapis.com/css2?family=Poiret+One&display=swap');



</style>
