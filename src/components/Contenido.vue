<template>
  <section id="contenido">
    {{RatesTree}}
    <section>
      <h2><span>Diseño audiovisual</span></h2>
      <section>
        <h3><span>Audio</span></h3>
        <Table/>
      </section>
    </section>
    <section>
      <h2><span>Diseño Gráfico</span></h2>
      <section>
        <h3><span>Diseño de producto</span></h3>
        <section>
          <h4><span>Merchandising</span></h4>
            <Table/>
        </section>
      </section>

      <section>
        <h3><span>Editorial</span></h3>
        <section>
          <h4><span>Piezas editoriales</span></h4>
          <Table/>
        </section>
      </section>

      <section>
        <h3><span>Identidad</span></h3>
        <section>
          <h4><span>Corporativa</span></h4>
          <Table/>
        </section>
        <section>
          <h4><span>Otros servicios de identidad</span></h4>
          <Table/>
        </section>
        <section>
          <h4><span>Señalética</span></h4>
          <Table/>
        </section>
      </section>

      <section>
        <h3><span>Ilustración</span></h3>
        <section>
          <h4><span>A mano alzada</span></h4>
          <Table/>
        </section>
        <section>
          <h4><span>Ilustración 3d</span></h4>
          <Table/>
        </section>
      </section>

      <section>
        <h3><span>Multimedia</span></h3>
        <Table/>
        <section>
          <h4><span>Multimedia 3d</span></h4>
          <Table/>
        </section>
        <section>
          <h4><span>Otros servicios multimedia</span></h4>
          <Table/>
        </section>
        <section>
          <h4><span>Video</span></h4>
          <Table/>
        </section>
      </section>

      <section>
        <h3><span>Papelería</span></h3>
        <section>
          <h4><span>Básica</span></h4>
         <Table/>
        </section>
        <section>
          <h4><span>Comercial</span></h4>
         <Table/>
        </section>
        <section>
          <h4><span>Comunicación</span></h4>
          <Table/>
        </section>
      </section>

      <section>
        <h3><span>Publicidad</span></h3>
        <section>
          <h4><span>Cartelería</span></h4>
          <Table/>
        </section>
        <section>
          <h4><span>Editorial</span></h4>
          <Table/>
        </section>
        <section>
          <h4><span>Folleteria</span></h4>
          <Table/>
        </section>
        <section></section>
      </section>

      <section>
        <h3><span>Tarifas por hora</span></h3>
        <Table/>
      </section>

      <section>
        <h3><span>Web</span></h3>
        <section>
          <h4><span>Banners</span></h4>
          <Table/>
        </section>
        <section>
          <h4><span>Diseño y maquetación</span></h4>
          <Table/>
        </section>
        <section>
          <h4><span>Flash</span></h4>
          <Table/>
        </section>
        <section>
          <h4><span>Otros servicios web</span></h4>
          <Table/>
        </section>
      </section>
    </section>
    <section>
      <h2><span>Marketing</span></h2>
      <section>
        <h3><span>Identidad</span></h3>
        <section>
          <h4><span>Corporativa</span></h4>
          <Table/>
        </section>
      </section>

      <section>
        <h3><span>Redacción</span></h3>
        <Table/>
      </section>

      <section>
        <h3><span>Redes sociales</span></h3>
        <Table/>
      </section>
    </section>
    <section>
      <h2><span>Programación</span></h2>
      <section>
        <h3><span>Web</span></h3>
        <Table/>
      </section>
    </section>
  </section>
</template>
<script>
import Table from './Table.vue'
export default {
  name: "Contenido",
  components: {
      Table
  },
  props: {
    RatesTree: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="css">
#contenido {
  width: calc(100% - 24rem);
  display: block;
  float: right;
}
#contenido section p {
  display: inline;
}
#contenido h2,
#contenido h3,
#contenido h4,
#contenido section h2 {
  margin: 0;
  padding: 0;
  color: #999;
  font-weight: 500;
  line-height: 1.7em;
}
#contenido > section > h2 {
  font-size: 1.5rem;
}
#contenido > section > section > h3 {
  font-size: 1.3rem;
}
#contenido > section > section > section > h4 {
  font-size: 1rem;
}
</style>
