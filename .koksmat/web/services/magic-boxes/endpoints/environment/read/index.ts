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
import { Environment } from "@/services/magic-mix/models/environment";
/**
 * Read a single item
 * 
 * id - The id of the item

 * @returns
 * 
 * Environment
 */
export default async function call(transactionId: string, id: int) {
  console.log("magic-mix.environment", "read");

  return run<Environment>(
    "magic-mix.environment",
    ["read", id],
    transactionId,
    600,
    transactionId
  );
}
