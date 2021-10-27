<template>
  <section id="main" class="wrap">
    <div>
      <nav id="crumbs"><a href="./">Inicio</a>/</nav>
    </div>
  </section>
</template>
<script>
export default {
  name: "Crumbs",
};
</script>

<style lang="css">
#crumbs {
  padding-bottom: 4rem;
  font-size: 0.9em;
  color: #666;
  display: block;
  float: left;
}
#crumbs a {
  padding: 0.5rem;
  display: inline-block;
}
</style>
