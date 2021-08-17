import { createStore } from 'vuex'

export default createStore({
  state: {
    astro:[],
    RamdonAstro:[],
    WeekAstro:[]
  },
  mutations: {
    setAstro(state, payload){
      state.astro = payload
    },
    setAstroPerMonth(state, payload){
      state.WeekAstro= payload
    },
    setAstroRamdon(state, payload){
      state.RamdonAstro = payload
    },
   
  },
  actions: {
    async getAstro({commit}){
      try {
        const res = await fetch("https://api.nasa.gov/planetary/apod?api_key=rFV0Np08b2EiXuwyVQbQx3GmNLS6b82yvLZuvBJj&date=");
        const data = await res.json();
        commit("setAstro", data); 
      } catch (error) {
          console.log(error)
      }
    }, 

    async getAstroMonth({commit}, startDate){
        try {
          let fechaActual = new Date();
          let month = fechaActual.getMonth() + 1;
          let day = fechaActual.getDate();
      
          if(month < 10){
            month = '0' + month;
           }
      
          if(day < 10){
            day = "0" + day
          }

          let EndDate = `${fechaActual.getFullYear()}-${month}-${day}`;
          let StartDate = `${fechaActual.getFullYear()}-${month}-${day - 7}`
          const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=rFV0Np08b2EiXuwyVQbQx3GmNLS6b82yvLZuvBJj&start_date=${StartDate}&end_date=${EndDate}`);
          const data = await res.json();
          commit("setAstroPerMonth", data)
        } catch (error) {
          console.log(error)
        }
    },

    async getRamdonAstro({commit}){
        try {
          const res = await fetch("https://api.nasa.gov/planetary/apod?api_key=rFV0Np08b2EiXuwyVQbQx3GmNLS6b82yvLZuvBJj&count=1");
          const data = await res.json();
          commit("setAstroRamdon",  data[0]);
          
        } catch (error) {
          console.log(error)
        }
    }
  },
  modules: {
  }
})
