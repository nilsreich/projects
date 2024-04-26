import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="max-w-screen-2xl mx-auto p-4 flex gap-4 ">
      <div className="grow">
        <div className="max-w-[100ch] flex flex-col gap-2 border-b pb-12">
          <div className="text-muted-foreground text-sm font-mono">
            26/04/24
          </div>
          <div className="text-3xl">React 19 or nextjs?</div>
          <div className="flex gap-2">
            <Badge>React</Badge>
            <Badge>Nextjs</Badge>
            <Badge>SWR</Badge>
            <Badge>Opinion</Badge>
          </div>
          <div className="leading-7">
            Die beliebte JavaScript-Bibliothek für Benutzeroberflächen React ist
            eine deklarative, effiziente und flexible JavaScript-Bibliothek zur
            Erstellung von Benutzeroberflächen. Entwickelt von Facebook und
            erstmals im Jahr 2013 veröffentlicht, hat React schnell an
            Popularität gewonnen und ist heute eines der führenden Tools für
            Frontend-Entwickler. In diesem Artikel werden wir untersuchen, was
            React so besonders macht, wie es verwendet wird, und einen Blick auf
            einige seiner Kernkonzepte werfen. Was ist React? React ist eine
            Bibliothek, die speziell für das Bauen von interaktiven, reaktiven
            Benutzeroberflächen in Web- und Mobile-Apps konzipiert wurde. Anders
            als traditionelle MVC-Frameworks (Model-View-Controller), die
            versuchen, das gesamte Frontend einer Anwendung zu steuern,
            konzentriert sich React nur auf die Darstellungsschicht - die View.
          </div>
          <div>
            <Button variant={"link"} className="m-0 p-0 underline -mt-4">
              Read more
            </Button>
          </div>
        </div>
        <div className="max-w-[100ch] flex flex-col gap-2 border-b pb-12">
          <div className="text-muted-foreground text-sm font-mono">
            26/04/24
          </div>
          <div className="text-3xl">its to hard</div>
          <div className="flex gap-2">
            <Badge>React</Badge>
            <Badge>Nextjs</Badge>
            <Badge>SWR</Badge>
            <Badge>Opinion</Badge>
          </div>
          <div className="leading-7">
            Die beliebte JavaScript-Bibliothek für Benutzeroberflächen React ist
            eine deklarative, effiziente und flexible JavaScript-Bibliothek zur
            Erstellung von Benutzeroberflächen. Entwickelt von Facebook und
            erstmals im Jahr 2013 veröffentlicht, hat React schnell an
            Popularität gewonnen und ist heute eines der führenden Tools für
            Frontend-Entwickler. In diesem Artikel werden wir untersuchen, was
            React so besonders macht, wie es verwendet wird, und einen Blick auf
            einige seiner Kernkonzepte werfen. Was ist React? React ist eine
            Bibliothek, die speziell für das Bauen von interaktiven, reaktiven
            Benutzeroberflächen in Web- und Mobile-Apps konzipiert wurde. Anders
            als traditionelle MVC-Frameworks (Model-View-Controller), die
            versuchen, das gesamte Frontend einer Anwendung zu steuern,
            konzentriert sich React nur auf die Darstellungsschicht - die View.
          </div>
          <div>
            <Button variant={"link"} className="m-0 p-0 underline -mt-4">
              Read more
            </Button>
          </div>
        </div>
        <div className="max-w-[100ch] flex flex-col gap-2 border-b pb-12">
          <div className="text-muted-foreground text-sm font-mono">
            26/04/24
          </div>
          <div className="text-3xl">Svelte doesnt work</div>
          <div className="flex gap-2">
            <Badge>SWR</Badge>
            <Badge>Opinion</Badge>
          </div>
          <div className="leading-7">
            Die beliebte JavaScript-Bibliothek für Benutzeroberflächen React ist
            eine deklarative, effiziente und flexible JavaScript-Bibliothek zur
            Erstellung von Benutzeroberflächen. Entwickelt von Facebook und
            erstmals im Jahr 2013 veröffentlicht, hat React schnell an
            Popularität gewonnen und ist heute eines der führenden Tools für
            Frontend-Entwickler. In diesem Artikel werden wir untersuchen, was
            React so besonders macht, wie es verwendet wird, und einen Blick auf
            einige seiner Kernkonzepte werfen. Was ist React? React ist eine
            Bibliothek, die speziell für das Bauen von interaktiven, reaktiven
            Benutzeroberflächen in Web- und Mobile-Apps konzipiert wurde. Anders
            als traditionelle MVC-Frameworks (Model-View-Controller), die
            versuchen, das gesamte Frontend einer Anwendung zu steuern,
            konzentriert sich React nur auf die Darstellungsschicht - die View.
          </div>
          <div>
            <Button variant={"link"} className="m-0 p-0 underline -mt-4">
              Read more
            </Button>
          </div>
        </div>
      </div>
      <div className="">
        <div className="text-xl">Popular Tags</div>
        <div className=" flex flex-col gap-4 mt-4">
          <Badge variant={"outline"}>React</Badge>
          <Badge variant={"outline"}>Nextjs</Badge>
          <Badge variant={"outline"}>SWR</Badge>
          <Badge variant={"outline"}>Opinion</Badge>
          <Badge variant={"outline"}>React</Badge>
          <Badge variant={"outline"}>Nextjs</Badge>
          <Badge variant={"outline"}>SWR</Badge>
          <Badge variant={"outline"}>Opinion</Badge>
          <Badge variant={"outline"}>React</Badge>
          <Badge variant={"outline"}>Nextjs</Badge>
          <Badge variant={"outline"}>SWR</Badge>
          <Badge variant={"outline"}>Opinion</Badge>
        </div>
      </div>
    </div>
  );
}
