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
import { Mapper } from "@/services/magic-mix/models/mapper";
/**
 * Delete an existing item
 * 
 * id - The id of the item

 * @returns
 * 
 * Mapper
 */
export default async function call(transactionId: string ,id: int) {
  console.log( "magic-mix.mapper", "delete");

  return run<Mapper>(
    "magic-mix.mapper",
    ["delete" , id],
    transactionId,
    600,
    transactionId
  );
}

