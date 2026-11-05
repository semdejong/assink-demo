import Link from "next/link";
import { content } from "@/content";
import { Chapter } from "@/components/site/Parts";

export default function NotFound() {
  return (
    <Chapter
      kicker="Zoek"
      title="Deze pagina bestaat niet"
      lede="De inhoud die u zoekt staat niet in dit staalboek. De hoofdstukken hieronder wel."
      color="#7a4a2a"
      ink="#f3ece0"
      fan="-5deg"
    >
      <ul className="catalogue">
        <li style={{ ["--swatch" as string]: "#211c17" }}>
          <Link href="/">Begin</Link>
        </li>
        {content.nav.map((item) => (
          <li key={item.href} style={{ ["--swatch" as string]: item.color }}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
        <li style={{ ["--swatch" as string]: "#2f4a3a" }}>
          <Link href="/mvo">MVO</Link>
        </li>
      </ul>
    </Chapter>
  );
}
