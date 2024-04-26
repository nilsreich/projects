"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const projects = [
  { id: 1, name: "Project 1", description: "This is project 1" },
  { id: 2, name: "Project 2", description: "This is project 2" },
  { id: 3, name: "Project 3", description: "This is project 3" },
  { id: 4, name: "Project 4", description: "This is project 4" },
  { id: 5, name: "Project 5", description: "This is project 5" },
  { id: 6, name: "Project 6", description: "This is project 6" },
  { id: 7, name: "Project 7", description: "This is project 7" },
  { id: 8, name: "Project 8", description: "This is project 8" },
  { id: 9, name: "Project 9", description: "This is project 9" },
];

export default function Projects() {
  return (
    <div className="max-w-screen-2xl mx-auto p-4 flex flex-col gap-4 ">
      <div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/projects">Projects</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="text-2xl">Overview</div>
      </div>
      <div className="w-full h-80 border rounded bg-foreground"></div>
      <form className="flex gap-4 justify-end">
        <Input type="text" placeholder="Search for a project" />
        <Button>Search</Button>
      </form>
      <div className="grid grid-cols-3 gap-4">
        {projects.map((project) => (
          <Link
            key={project.id}
            className="p-4 border rounded"
            href={`/projects/${project.name}`}
          >
            <div className="text-lg">{project.name}</div>
            <div>{project.description}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
