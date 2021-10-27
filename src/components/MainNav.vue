<template>
  <nav>
    <div class="wrap">
      <a href="./">Inicio</a>
      <a href="./consultas-q">Consultas o Sugerencias</a>
      <form action="./" method="get" class="noprint">
        <input type="text" name="b" placeholder="Buscar tarifas para ..." />
        <button type="submit"></button>
      </form>
    </div>
  </nav>
</template>
<script>
export default {
  name: "MainNav",
};
</script>
