<template>
  <table class="tablatarifas" cellpadding="0" cellspacing="0" border="0">
    <thead>
      <tr>
        <th></th>
        <th><span>Cliente</span> A</th>
        <th><span>Cliente</span> B</th>
        <th><span>Cliente</span> C</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <TableTR />
    </tbody>
  </table>
</template>
<script>
import TableTR from "./TableTR.vue";
export default {
  name: "Table",
  components: {
    TableTR,
  },
};
</script>
<style>
table.tablatarifas {
  margin-top: 2rem;
}
table.tablatarifas tbody {
  font-size: 3em;
}
table.tablatarifas tbody td:before {
  content: "$";
  color: #999;
}
table.tablatarifas td {
  text-align: right;
  padding: 0.1em;
}
table.tablatarifas > thead th {
  background: #ddd;
  padding: 1em;
  text-align: left;
  width: 33% !important;
}
table.tablatarifas > tfoot td {
  text-align: left;
  vertical-align: top;
}
table.tablatarifas > thead th,
table.tablatarifas > tfoot td,
table.tablatarifas > tbody td {
  box-shadow: -1px 0px 0 0 #fff;
  padding: 2rem;
}
table.tablatarifas > tbody td {
  padding-top: 0;
}

table.tablatarifas {
  margin-bottom: 3rem;
  margin-top: -2.41rem;
}
table.tablatarifas > tbody > tr {
  background: #ddd;
}
table.tablatarifas > tbody > tr:nth-of-type(even) {
  background: #eee;
}
table.tablatarifas > thead > tr > th,
table.tablatarifas > thead > tr > td {
  margin: 0;
}
table.tablatarifas > thead > tr > th {
  background-color: #fff;
  color: #999;
  font-weight: 500;
  text-transform: uppercase;
}
table.tablatarifas > thead > tr > th:not(:first-of-type) {
  width: 90px;
}

table.tablatarifas > tbody > tr > td:first-child {
  text-align: left;
}

table.tablatarifas > tbody > tr > td {
  text-align: right;
}

table.tablatarifas > tbody > tr > td,
table.tablatarifas > thead > tr > th {
  height: 1.5em;
  line-height: 1.5em;
  padding: 0.8em;
}
table.tablatarifas > tbody > tr > td:nth-of-type(1) span {
  font-size: 0.8em;
  display: inline-block;
  color: #666;
}

p.table_ref {
  color: #ccc;
  font-size: 0.9em;
  margin-bottom: 3em;
  display: block;
}
p.table_ref > span {
  color: #ff8811;
}

/* clean up table */
table.tablatarifas {
  width: 100%;
}
</style>
