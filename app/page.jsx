import fs from "node:fs";
import path from "node:path";
import Script from "next/script";

function readLandingPage() {
  const source = fs.readFileSync(path.join(process.cwd(), "index.html"), "utf8");
  const mainMotifSvg = fs.readFileSync(
    path.join(process.cwd(), "public", "assets", "namengine-main-motif.svg"),
    "utf8"
  );
  const bodyMatch = source.match(/<body>([\s\S]*?)<script>/);
  const scriptMatch = source.match(/<script>([\s\S]*?)<\/script>\s*<\/body>/);
  const body = bodyMatch
    ? bodyMatch[1]
        .trim()
        .replaceAll(
          '<img src="assets/namengine-main-motif.svg" alt="" aria-hidden="true">',
          mainMotifSvg
        )
        .replaceAll(
          '<img class="sample-motif" src="assets/namengine-main-motif.svg" alt="" aria-hidden="true">',
          `<div class="sample-motif" aria-hidden="true">${mainMotifSvg}</div>`
        )
    : "";

  return {
    body,
    script: scriptMatch ? scriptMatch[1].trim() : "",
  };
}

export default function Page() {
  const page = readLandingPage();

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: page.body }} />
      <Script id="landing-page-interactions" strategy="afterInteractive">
        {page.script}
      </Script>
    </>
  );
}
