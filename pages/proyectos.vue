<template>
  <div class="container">
    <h1>
			Proyectos
		</h1>
  </div>
</template>

<script>
  export default {
    methods: {
      openProyect(name){
        window.open(`http://${name}`);
        // alert('HII!!');
      }
    }
  }
</script>