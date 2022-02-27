<template>
      <div>
  <b-navbar type="blue" variant="dark">
    <b-navbar-nav>
      <b-nav-item to ="/">Home</b-nav-item>
      <b-nav-item to ="/about">About</b-nav-item>
      <b-nav-item to ="/inicio">Inicio</b-nav-item>
      <b-nav-item to ="/perros">Perros</b-nav-item>
      <b-nav-item to ="/gatos">Gatos</b-nav-item>
       <b-nav-item to ="/conejos">Conejos</b-nav-item>
       <b-nav-item to ="/loros">Loros</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
    <router-view/>
    </div>
</template>
<script>

export default{
    name:'Navigation'
        
    }
</script>
