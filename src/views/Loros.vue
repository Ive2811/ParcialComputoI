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
          <h4 class="card-title">Pepe</h4>
          <p class="card-text"> Ultima visita fue: 20/02/22</p>
           <b-card-group deck> 
           <b-card title=""
            style="max-width: 20rem;"
             border-variant="primary"
              header="Mascota 1"
              header-bg-variant="primary"
               header-text-variant="white"
                align="center"
              img-src="https://img.freepik.com/foto-gratis/close-up-hermosa-ave-cockatiel-nymphicus-hollandicus-sobre-fondo-verde-cacatuoidea_106094-335.jpg" img-alt="Image" img-top>
                 <br>
           <br>
           <br>
            <b-button @click="showMessage3" variant ="outline-danger">Ver más</b-button>
            </b-card>
           </b-card-group>
        </div>
      </div>          

        <div class="card text-center border-info">
        <div class="card-body">
          <h4 class="card-title">Kiwi</h4>
          <p class="card-text"> Ultima visita fue: 16/02/22</p>
           <b-card-group deck> 
           <b-card title="" 
            style="max-width: 20rem;"
            border-variant="primary"
            header="Mascota 2"
            header-bg-variant="danger"
            header-text-variant="white"
            align="center"
            img-src="https://demascotas.info/wp-content/uploads/2019/01/budgie-2202031_640.jpg" img-alt="Image" img-top>
           <br>
           <br>
              <b-button @click="showMessage2" variant ="outline-warning">Ver más</b-button>
            </b-card>
           </b-card-group>
     
        </div>
      </div>          
        
        
        <div class="card text-center border-info">
        <div class="card-body">
          <h4 class="card-title">Zimba</h4>
          <p class="card-text"> Ultima visita fue: 26/02/22</p>
           <b-card-group deck> 
           <b-card title="" 
            style="max-width: 20rem;"
            border-variant="primary"
           header="Mascota 3"
            header-bg-variant="success"
            header-text-variant="white"
            align="center"
               img-src="https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/05/08173934/bolivia-guacamayos-animales-extincion-8.jpg" img-alt="Image" img-top>
               <br>
                <br>
             <b-button @click="showMessage" variant ="outline-success">Ver más</b-button>
            </b-card>
           </b-card-group>
        </div>
      </div>
        
        <div class="card text-center border-info">
        <div class="card-body">
          <h4 class="card-title">Blue</h4>
          <p class="card-text">Ultima visita fue: 02/02/22 </p>
           <b-card-group deck> 
           <b-card title="" 
            style="max-width: 20rem;"
            border-variant="primary"
            header="Mascota 4"
            header-bg-variant="warning"
            header-text-variant="white"
            align="center"
            img-src="https://cdn.pixabay.com/photo/2020/09/04/14/15/hyacinth-macaw-5544113_960_720.jpg" img-alt="Image" img-top>
          <br>
          <br>
          
             <b-button @click="showMessage1" variant ="outline-primary">Ver más</b-button>
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
      showMessage3(){
        alert("Nombre: Pepe , Edad: 1 año, Raza: Cacatuoidea, Colores: Blanco con amarillo" )
      },

      showMessage2(){
        alert("Nombre: Kiwi , Edad: 5 meses, Raza: Periquito australiano, Colores: multicolor")
      },

      showMessage(){
        alert("Nombre: Zimba, Edad: 9 meses, Raza: Guacamayos, colores: multicolor")
      },
       showMessage1(){
        alert("Nombre: Blue, Edad: 11 meses, Raza: Guacamayo Jacinto, colores: azul con negro")
      }

    }
  }
</script>

  
