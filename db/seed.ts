import { db, TablaCrm } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(TablaCrm).values([
    { authorId: 1, body: "Espero que te guste Astro DB!" },
    { authorId: 2, body: "Disfruta!" },
  ]);
}
