import { db, TablaCrm } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(TablaCrm).values([
    { calle: "Calle Pintor Sorolla", vendedor: "Toni", noticias: 2 },
    { calle: "Calle Casalet", vendedor: "Nacho", noticias: 2 },
  ]);
}
