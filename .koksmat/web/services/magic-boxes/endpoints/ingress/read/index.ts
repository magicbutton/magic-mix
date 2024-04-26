"use server";
/*
Parameters

*/
/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/
import { run } from "@/koksmat/magicservices";
import { ShowCodeFragment } from "@/services/ShowCodeFragment";
import { Ingress } from "@/services/magic-mix/models/ingress";
/**
 * Read a single item
 * 
 * id - The id of the item

 * @returns
 * 
 * Ingress
 */
export default async function call(transactionId: string, id: int) {
  console.log("magic-mix.ingress", "read");

  return run<Ingress>(
    "magic-mix.ingress",
    ["read", id],
    transactionId,
    600,
    transactionId
  );
}
