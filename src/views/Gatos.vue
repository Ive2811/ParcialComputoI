<template>
<div>
   <b-alert show variant="success"><header-title title="Lista de Gatos"/></b-alert>
    
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

<body>
  <div class="container">   
    <div class="card-group mt-3">

      <div class="card text-center border-info">
        <div class="card-body">
          <h4 class="card-title">Tormenta</h4>
          <p class="card-text"> </p>
           <b-card-group deck> 
           <b-card title="" 
            style="max-width: 20rem;"
            border-variant="primary"
            header="Mascota 1"
            header-bg-variant="warning"
            header-text-variant="white"
            align="center"
              img-src="https://static2.ideal.es/www/multimedia/201912/12/media/cortadas/gato-kudF-U9092925495329B-624x385@Ideal.jpg" img-alt="Image" img-top>
                 <br>
           <br>
           <br>
            <b-button @click="showMessage3" variant ="outline-warning">Ver más</b-button>
            </b-card>
           </b-card-group>
        </div>
      </div>          

        <div class="card text-center border-info">
        <div class="card-body">
          <h4 class="card-title">Micio</h4>
          <p class="card-text"> </p>
           <b-card-group deck> 
           <b-card title="" 
            style="max-width: 20rem;"
            border-variant="primary"
             header="Mascota 2"
            header-bg-variant="warning"
            header-text-variant="white"
            align="center"
            img-src="https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/5b2b8f8e5bafe87a7d3c986b/gato-peludo-jardin_0.jpg" img-alt="Image" img-top>
           <br>
           <br>
              <b-button @click="showMessage2" variant ="outline-warning">Ver más</b-button>
            </b-card>
           </b-card-group>
     
        </div>
      </div>          
        
        
        <div class="card text-center border-info">
        <div class="card-body">
          <h4 class="card-title">Sammy</h4>
          <p class="card-text"> </p>
           <b-card-group deck> 
           <b-card title="" 
            style="max-width: 20rem;"
            border-variant="primary"
             header="Mascota 3"
            header-bg-variant="warning"
            header-text-variant="white"
            align="center"
               img-src="data:image/jpeg;base64,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" img-alt="Image" img-top>
               <br>
                <br>
             <b-button @click="showMessage" variant ="outline-warning">Ver más</b-button>
            </b-card>
           </b-card-group>
        </div>
      </div>
        
        <div class="card text-center border-info">
        <div class="card-body">
          <h4 class="card-title">Kitty</h4>
          <p class="card-text"> </p>
           <b-card-group deck> 
           <b-card title="" 
            style="max-width: 20rem;"
            border-variant="primary"
             header="Mascota 4"
            header-bg-variant="warning"
            header-text-variant="white"
            align="center"
            img-src="https://www.japonalternativo.com/wp-content/uploads/2020/07/nombres-de-mascotas-en-japones-y-su-significado.jpg" img-alt="Image" img-top>
          <br>
          <br>
          <br>
             <b-button @click="showMessage1" variant ="outline-warning">Ver más</b-button>
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
  data() {
    return {
        event:"click"
      }
    },
    methods:{
      showMessage(){
        alert("Nombre: Sammy, Edad: 1 año  Raza: Bengali" )
      },

      showMessage1(){
        alert("Nombre: Kitty, Edad: 7 meses, Raza: Gato Japones Bobtail")
      },

      showMessage2(){
        alert("Nombre: Micio, Edad: 9 meses, Raza: Bengali")
      },
       showMessage3(){
        alert("Nombre: Tormenta, Edad: 11 meses, Raza: Siames")
      }

    }
  }
</script>

  
