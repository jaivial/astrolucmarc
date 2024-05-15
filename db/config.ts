import { defineDb, defineTable, column } from "astro:db";

// https://astro.build/db/config

const TablaCrm = defineTable({
  columns: {
    // Una cadena de texto.
    calle: column.text(),
    // Un valor entero.
    vendedor: column.text(),
    // Un valor verdadero o falso.
    noticias: column.number(),
  },
});

export default defineDb({
  tables: { TablaCrm },
});
