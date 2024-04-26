import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { TvIcon } from "lucide-react";
import Link from "next/link";

export default function Project({ params }: { params: { slug: string } }) {
  return (
    <div className="max-w-screen-2xl mx-auto p-4 flex flex-col gap-4 ">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/projects">Overview</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbPage>{params.slug}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <main className="flex-1">
        <section className=" py-12 md:py-24 lg:py-32">
          <div className=" container grid gap-6 grid-cols-1 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className=" flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Streamline Your Workflow with Acme App
                </h1>
                <p className="max-w-[600px] text-neutral-500 md:text-xl dark:text-neutral-400">
                  Acme App is a powerful tool that helps you and your team
                  collaborate more efficiently, automate repetitive tasks, and
                  focus on what matters most.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-neutral-900 px-8 text-sm font-medium text-neutral-50 shadow transition-colors hover:bg-neutral-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90 dark:focus-visible:ring-neutral-300"
                  href="#"
                >
                  Get Started
                </Link>
              </div>
            </div>
            <img
              alt="Acme App"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              height="550"
              src="/placeholder.svg"
              width="550"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-neutral-100 dark:bg-neutral-900">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Key Features of Acme App
                </h2>
                <p className="max-w-[900px] text-neutral-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-neutral-400">
                  Acme App is designed to streamline your workflow and boost
                  your team's productivity.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  <TvIcon className="h-8 w-8 text-neutral-500 dark:text-neutral-400" />
                  <h3 className="text-lg font-bold">Collaboration</h3>
                </div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  Streamline your team's collaboration with built-in tools for
                  communication and project management.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  <TvIcon className="h-8 w-8 text-neutral-500 dark:text-neutral-400" />
                  <h3 className="text-lg font-bold">Automation</h3>
                </div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  Automate repetitive tasks and workflows to save time and
                  increase efficiency.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  <TvIcon className="h-8 w-8 text-neutral-500 dark:text-neutral-400" />
                  <h3 className="text-lg font-bold">Scalability</h3>
                </div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  Scale your app seamlessly as your business grows, without
                  worrying about infrastructure.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  <TvIcon className="h-8 w-8 text-neutral-500 dark:text-neutral-400" />
                  <h3 className="text-lg font-bold">Analytics</h3>
                </div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  Gain valuable insights into your app's performance with
                  comprehensive analytics.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  <TvIcon className="h-8 w-8 text-neutral-500 dark:text-neutral-400" />
                  <h3 className="text-lg font-bold">Security</h3>
                </div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  Protect your data with industry-leading security features and
                  compliance standards.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  <TvIcon className="h-8 w-8 text-neutral-500 dark:text-neutral-400" />
                  <h3 className="text-lg font-bold">Integrations</h3>
                </div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  Seamlessly integrate Acme App with your existing tools and
                  workflows.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-4 px-4 md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Experience the Power of Acme App
              </h2>
              <p className="max-w-[600px] text-neutral-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-neutral-400">
                Acme App is designed to help you and your team work smarter, not
                harder. Try it today and see the difference it can make.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-neutral-900 px-8 text-sm font-medium text-neutral-50 shadow transition-colors hover:bg-neutral-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90 dark:focus-visible:ring-neutral-300"
                href="#"
              >
                Get Started
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
