<template>
  <header>
    <div class="seccionTop">
    </div>
    <div class="wrap">
      <h1>
        <a href="./"><span>Tarifario</span> <span>2021</span></a>
      </h1>
      <p>Aranceles de Diseño, Argentina, 2021</p>
    </div>
    <MainNav />
  </header>
</template>

<script>
  import MainNav from './MainNav.vue'

  export default {
    name: 'Header',
    components: {
      MainNav
    }
  }
</script>

<style lang="css">
  /* header */
header > .seccionTop {
	border-top:3px solid #D86C00; 
	border-bottom:1px solid #DDD;
	padding:0.7rem 0;
	font-size:0.8rem;
	color:#666
}
header > .seccionTop a { color:#000}

header h1 { font-size:2.5em; font-weight:200;}
header h1 > a > span { display:block; float:left}
header h1 > a >  span:nth-of-type(2) { color:#868686;}
header h1,
header p { display:inline-block; line-height:8rem; margin:0; text-transform:uppercase; color:#D86C00;}
header p { font-weight:400; font-size:1.2rem; margin-left:2rem}

header nav { background:#D86C00;  font-size:1.1rem}
header nav * {line-height:3rem;}
header nav a {text-transform: uppercase; text-decoration:none; color:#FFB164; margin-right:1em; position:relative}
header nav a, header nav form { display:block; float:left}
header nav a:hover { color:#FF8811}
header nav form { float:right}
header nav form * { display:block; float:left; border:none}
header nav form input { background-color:#FF8811; padding:1px 1rem; text-transform:uppercase; width:15rem}
header nav form button { background-color:transparent; color:#FFF; font-size:1.5rem; width:3rem; text-align:center}
header nav form input::-webkit-input-placeholder {color:#AD5700;}
header nav form input:-moz-placeholder {color:#AD5700;opacity:  1;}
header nav form input::-moz-placeholder {color:#AD5700;opacity:  1;}
header nav form input:-ms-input-placeholder { color:#AD5700; opacity:  1;}

header aside.botonera-social ol,
header aside.botonera-social ol li { display:block; float:left; overflow:visible; background:#FFF}
header aside.botonera-social ol li ol { margin-left:0.5rem;}
header aside.botonera-social { position: absolute; top:calc(50% - 0.6em); right:1em;}
header aside.botonera-social span.add-ico-share:before { content:"\e7d5"; margin-right:0.5rem; color:#FF8811}
header aside.botonera-social ol li a,
header aside.botonera-social ol li span.add-ico-share { padding:0.5em; text-decoration:none; font-size:1.2em;}
header aside.botonera-social ol li span.add-ico-share { font-size:1em}
</style>