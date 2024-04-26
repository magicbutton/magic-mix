"use client";
/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/
import NamespaceUpdate from "@/services/magic-mix/endpoints/namespace/update/webcomponent";
import { VsCodeEdittoolbar } from "@/app/magic/components/VsCodeEdittoolbar";

export default function TestNamespaceUpdate() {
  return (
    <div>
      <VsCodeEdittoolbar
        filePath={"app/magic/services/magic-mix/namespace/update/page.tsx"}
      />
      <NamespaceUpdate />
    </div>
  );
}
