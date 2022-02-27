<template>
<div>
   <b-alert show variant="success"><header-title title="Lista de Conejos"/></b-alert>
    
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

<body>
  <div class="container">   
    <div class="card-group mt-3">

<!-- Conejo1 -->
      <div class="card text-center border-info">
        <div class="card-body">
          <h4 class="card-title">Vini</h4>
          <p class="card-text"> </p>
           <b-card-group deck> 
           <b-card title="" 
            style="max-width: 20rem;"
            border-variant="primary"
            header="Mascota 1"
            header-bg-variant="warning"
            header-text-variant="white"
            align="center"
              img-src="https://estaticos.muyinteresante.es/media/cache/1000x_thumb/uploads/images/gallery/5a78284c5bafe8d78ef9ec50/belier-blanco-y-gris_0.jpg" img-alt="Image" img-top>
                 <br>
           <br>
           <br>
            <b-button @click="showMessage" variant ="outline-warning">Ver más</b-button>
            </b-card>
           </b-card-group>
        </div>
      </div>          

<!-- Conejo2 -->
        <div class="card text-center border-info">
        <div class="card-body">
          <h4 class="card-title">Vili</h4>
          <p class="card-text"> </p>
           <b-card-group deck> 
           <b-card title="" 
            style="max-width: 20rem;"
            border-variant="primary"
             header="Mascota 2"
            header-bg-variant="warning"
            header-text-variant="white"
            align="center"
            img-src="http://www.conejos.wiki/Imagenes/orejas-del-conejo-mini-lop.jpg" img-alt="Image" img-top>
           <br>
           <br>
              <b-button @click="showMessage1" variant ="outline-warning">Ver más</b-button>
            </b-card>
           </b-card-group>
     
        </div>
      </div>          
        
        <!-- conejo3 -->
        <div class="card text-center border-info">
        <div class="card-body">
          <h4 class="card-title">Pili</h4>
          <p class="card-text"> </p>
           <b-card-group deck> 
           <b-card title="" 
            style="max-width: 20rem;"
            border-variant="primary"
             header="Mascota 3"
            header-bg-variant="warning"
            header-text-variant="white"
            align="center"
               img-src="https://t1.ea.ltmcdn.com/es/razas/8/2/8/conejo-jersey-wooly_828_0_600.jpg" img-alt="Image" img-top>
               <br>
                <br>
             <b-button @click="showMessage2" variant ="outline-warning">Ver más</b-button>
            </b-card>
           </b-card-group>
        </div>
      </div>
        
        <!-- conejo4 -->
        <div class="card text-center border-info">
        <div class="card-body">
          <h4 class="card-title">Vanili</h4>
          <p class="card-text"> </p>
           <b-card-group deck> 
           <b-card title="" 
            style="max-width: 20rem;"
            border-variant="primary"
             header="Mascota 4"
            header-bg-variant="warning"
            header-text-variant="white"
            align="center"
            img-src="https://www.mundoconejitos.com/wp-content/uploads/2020/07/conejo-enano-raza-blanco-de-hotot.jpeg" img-alt="Image" img-top>
          <br>
          <br>
          <br>
             <b-button @click="showMessage3" variant ="outline-warning">Ver más</b-button>
          </b-card>
           </b-card-group>
  
        
        </div>
      </div>          
    </div>
  </div>  
</body>
  </div>

</template>
<script>

export default {
  name:'Conejos',
  data() {
    return {
        event:"click"
      }
    },
    methods:{
      showMessage(){
        alert("Nombre: Vini,  Edad: 2 año,  Raza: Belier holandés" )
      },

      showMessage1(){
        alert("Nombre: Vili,  Edad: 7 meses, Raza: Mini Lop")
      },

      showMessage2(){
        alert("Nombre: Pili,  Edad: 1 año, Raza: Jersey Wooly")
      },
       showMessage3(){
        alert("Nombre: Vanili,  Edad: 3 año, Raza: Enano hotot")
      }

    }
  }
</script>
