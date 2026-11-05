import Link from "next/link";

export default function NotFound() {
  return (
    <article className="measure" data-section="niet-gevonden">
      <p className="kicker">Ontbreekt</p>
      <h1>Deze pagina bestaat niet</h1>
      <p className="lede">De inhoud die u zoekt staat niet in dit staalboek.</p>
      <div className="cta-row">
        <Link href="/" className="btn btn-primary">
          Naar het begin
        </Link>
      </div>
    </article>
  );
}
