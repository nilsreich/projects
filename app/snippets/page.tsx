"use client";
import { Sandpack } from "@codesandbox/sandpack-react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
  } from "@/components/ui/breadcrumb";

export default function Snippets() {
  return (
    <div className="max-w-screen-2xl mx-auto p-4 flex flex-col gap-4 ">
         <div>
 <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/snippets">Snippets</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="text-2xl">Playground</div>
 </div>
      <Sandpack
        theme="dark"
        template="react"
        options={{
          showLineNumbers: false, // default - true
          showInlineErrors: true, // default - false
          wrapContent: true, // default - false
          editorHeight: 680, // default - 300
          editorWidthPercentage: 60, // default - 50
        }}
      />
    </div>
  );
}
