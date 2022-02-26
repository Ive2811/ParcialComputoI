<template>
<div id="root">
   <b-alert show variant="primary"><h1>Lista de perros.</h1></b-alert>
    

  <div class="container">   
    <div class="card-group mt-3">

        <div class="card-body">
           <b-card-group deck> 
            <b-card bg-variant="success bg-opacity-25" 
            title="Ranger" 
            style="max-width: 20rem;"
            border-variant="success"
            header="Mascota 1"
            header-bg-variant="success"
            header-text-variant="white"
            align="center" 
            img-src="https://i.imgur.com/owLUtvH.png" img-top><br>
            <b-button @click="showMessage" variant ="outline-success">Ver más</b-button>
            </b-card>
           </b-card-group>
           </div>  

        <div class="card-body">
           <b-card-group deck> 
            <b-card bg-variant="primary bg-opacity-25"
            title="Kira" 
            style="max-width: 20rem;"
            border-variant="primary"
            header="Mascota 2"
            header-bg-variant="primary"
            header-text-variant="white"
            align="center" 
            img-src= "https://i.imgur.com/cnfRtOh.png" ><br>
            <b-button @click="showMessage1" variant ="outline-primary">Ver más</b-button>
            </b-card>
           </b-card-group>
           </div>      

       <div class="card-body">
           <b-card-group deck> 
            <b-card bg-variant="danger bg-opacity-25"
            title="Bruno" 
            style="max-width: 20rem;"
            border-variant="danger"
            header="Mascota 3"
            header-bg-variant="danger"
            header-text-variant="white"
            align="center" 
            img-src="https://i.imgur.com/bgeDF7i.png" img-top><br>
            <b-button @click="showMessage2" variant ="outline-danger">Ver más</b-button>
            </b-card>
           </b-card-group>
           </div>       
        
          <div class="card-body">
           <b-card-group deck> 
            <b-card bg-variant="dark bg-opacity-25"
            title="Kiara" 
            style="max-width: 20rem;"
            border-variant="dark"
            header="Mascota 4"
            header-bg-variant="dark"
            header-text-variant="white"
            align="center" 
            img-src="https://i.imgur.com/gWVu6a8.png" img-top><br>
            <b-button @click="showMessage3" variant ="outline-dark">Ver más</b-button>
            </b-card>
           </b-card-group>
           </div>    

          <div class="card-body">
           <b-card-group deck> 
            <b-card bg-variant="secondary bg-opacity-25"
            title="Bonnie" 
            style="max-width: 20rem;"
            border-variant="secondary"
            header="Mascota 5"
            header-bg-variant="secondary"
            header-text-variant="white"
            align="center" 
            img-src="https://i.imgur.com/76lOH0k.png" img-top><br>
            <b-button @click="showMessage4" variant ="outline-secondary">Ver más</b-button>
            </b-card>
           </b-card-group>
           </div> 

           <div class="card-body">
           <b-card-group deck> 
            <b-card bg-variant="success bg-opacity-25"
            title="Bobby" 
            style="max-width: 20rem;"
            border-variant="success"
            header="Mascota 6"
            header-bg-variant="success"
            header-text-variant="white"
            align="center" 
            img-src="https://i.imgur.com/8z7OnyS.png" img-top><br>
            <b-button @click="showMessage5" variant ="outline-success">Ver más</b-button>
            </b-card>
           </b-card-group>
           </div> 

      </div>          
    </div>
  </div>  
</template>


<script>
export default {
  data() {
    return {
        event:"click"
      }
    },
    methods:{
      showMessage(){
        alert("Nombre: Ranger, Edad: 5 meses, Raza: Beagle , vacunas aplicadas: 1")
      },

      showMessage1(){
        alert("Nombre: Kira, Edad: 1 año 3 meses, Raza: Corgi Galés, vacunas aplicadas: 3")
      },

      showMessage2(){
        alert("Nombre: Bruno, Edad: 7 meses, Raza: Border Collie, vacunas aplicadas: 1")
      },

      showMessage3(){
        alert("Nombre: Kiara, Edad: 4 años, Raza: Rottweiler, vacunas aplicadas: 6")
      },

      showMessage4(){
        alert("Nombre: Bonnie, Edad: 3 años, Raza: Golden Retriever, Vacunas aplicadas: 5")
      },

      showMessage5(){
        alert("Nombre: Bobby, Edad: 1 año, Raza: Carlino, Vacunas aplicadas: 2")
      },
    }
  }
</script>

<style>

#root{
background-color: rgb(241, 177, 241);
}
</style>