<template>
 <v-app-bar class="neon" > 
   
   <v-img style="padding:30px" max-height="100"
          src="../assets/logo.png"> </v-img>
 
 </v-app-bar>
<v-bottom-navigation
    class="neon"
    horizontal
    color="primary"
  >
    <v-btn>
     <router-link style="text-decoration:none" to="/DayAstro">
      <h4>Astro of the Day</h4>


     </router-link>
    </v-btn>

    <v-btn>
     <router-link style="text-decoration:none" to="/RamdonAstro">
      <h4>Ramdon Astro</h4>

     
      </router-link>
    </v-btn>

    <v-btn>
     <router-link style="text-decoration:none" to="/MonthAstro">
      <h4>Week Astro</h4>

     
      </router-link>
    </v-btn>

   
  </v-bottom-navigation>
</template>

<script>
  export default {
    // data: () => ({ value: 1 }),
  }
</script>

<style>

</style>