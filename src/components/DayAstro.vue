<template>
 <v-container>
  <h1 class="mt-7 mb-7" style="text-align:center">Apod Of The Day</h1>
 
  <astro :astro="Dayastro"/>
 </v-container>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core';
import {useStore} from "vuex"
import Astro from '../components/Astro.vue';
export default {
  components: { Astro },

    setup(){
         const store = useStore();
         onMounted(()=>{
            store.dispatch("getAstro");
         })

         const Dayastro = computed(()=>{
            return  store.state.astro
            
        }) 
       console.log(Dayastro, "este es astro hoy")

        return {Dayastro};
    }
}
</script>

<style>

</style>