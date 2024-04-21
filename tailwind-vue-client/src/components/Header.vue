<template>
    <div class="w-full pb-5 justify-center items-center gap-[15px] flex flex-col">
        <NavBar />

        <Intro />
        
      </div>
  </template>
  
<script  type="text/javascript">
    import NavBar from "./NavBar.vue";
    import Intro from "./Intro.vue";
    export default {
        name: "Header",
        components: {
            NavBar,
            Intro
        },
    };
</script>