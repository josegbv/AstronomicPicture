<template>
   <h1 class="mt-7 mb-7" style="text-align:center">Astro Per Week</h1>
    <v-container>
      <v-row> 
        <v-col cols="6" xs="4" sm="6" md="4" lg="4" xl="3" v-for="astroRepeat in Month" :key="astroRepeat.url"> 
          <astro :astro="astroRepeat"/>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core';
import {useStore} from "vuex";
import Astro from '../components/Astro.vue'


export default {
  components: {Astro },

  setup(){
    const store = useStore();

    onMounted(()=>{
      store.dispatch("getAstroMonth")
    });

    const Month = computed(()=>{{
        return store.state.astro
    }})

    console.log(Month, "este es el astro por mes")

    return {Month}
  }

}
</script>

<style>

</style>