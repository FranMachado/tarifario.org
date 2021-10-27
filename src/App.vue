<template>
  <div>
    <Header />
    <Crumbs />
    <div class="wrap">
      <LatNav />
      <Contenido :ratesTree="ratesTree" />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Crumbs from "./components/Crumbs.vue";
import LatNav from "./components/LatNav.vue";
import Contenido from "./components/Contenido.vue";

export default {
  name: "App",
  components: {
    Header,
    Crumbs,
    Contenido,
    LatNav,
  },
  setup() {
    const RatesTree = [
      {
        categoryName: `Category`,
        categoryId:1,
        categoryDescription: `Desc category`,
        categoryParentId: null,
        categoryChilds: [],
        rates: [
          {
            title: `Rate`,
            a: 10,
            b: 15,
            c: 50,
          },
        ],
      },
    ];
    return { RatesTree };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* setup */
html,
body {
  height: 100%;
  overflow-x: hidden;
}
a {
  text-decoration: underline;
  color: inherit;
}
div,
p,
h1,
h2,
h3,
h4,
ol,
ul,
form {
  overflow: auto;
}
body,
div,
ol,
ul,
li {
  display: block;
  padding: 0;
  margin: 0;
}
h1,
h2,
h3 {
  text-transform: uppercase;
  padding: 0;
  margin: 0;
}

header a {
  text-decoration: none;
}

body {
  font-size: 16px;
}
body,
form * {
  font-family: "zignasubset", Arial, Helvetica, sans-serif;
  font-weight: 400;
}

.wrap {
  max-width: 1480px;
  width: calc(100% - 10em);
  margin: 0 auto;
  padding: 0 1em;
  position: relative;
}

#main {
  padding-top: 2rem;
  overflow: initial;
}
@media all and (max-width: 1090px) {
  header p {
    display: none;
  }
}

@media all and (max-width: 1024px) {
  header > .wrap {
    padding: 1em inherit;
  }
  header h1,
  header p {
    display: block;
    line-height: 1.5em;
    margin-left: 0;
  }
  header p {
    display: none;
  }

  header aside.botonera-social a {
    font-size: 1.3em;
    padding: 0.5em;
  }
}

@media all and (max-width: 900px) {
  #main {
    padding-top: 1rem;
  }
  #lateral,
  #contenido {
    float: none;
    width: 100%;
  }
  #lateral > nav {
    padding: 1rem 0;
  }
  #lateral > nav > h3 {
    margin: 0;
  }
  #lateral > nav > ol > li {
    display: inline-block;
    margin-right: 1.5rem;
  }
  #lateral {
    padding-right: 0;
  }
}
@media all and (max-width: 750px) {
  table > tbody > tr > td > span {
    display: none !important;
  }
  .add-ico-share span {
    display: none;
  }
}
@media all and (max-width: 600px) {
  header h1 {
    font-size: 2rem;
  }
  header aside.botonera-social ol li ol {
    display: none;
  }
  header aside.botonera-social ol li:hover ol {
    display: inline-block;
  }
  header aside.botonera-social ol li:hover span {
    float: right;
  }
  .wrap {
    width: calc(100% - 2em);
  }
}
@media all and (max-width: 500px) {
  table > thead > tr > th > span {
    display: none !important;
  }
  table {
    font-size: 0.85em;
  }
}
@media print {
  html,
  body {
    height: auto;
    font-size: 10px;
  }
  .noprint {
    display: none;
  }
  a {
    text-decoration: none;
  }
}
</style>
