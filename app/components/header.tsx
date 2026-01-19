import Image from "next/image";
import { Atma } from "next/font/google";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
const atma = Atma({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-atma",
});

export default function Header() {
  return (
    <div
      className="w-full bg-[#ca9cf4] border-b-[10px] border-[#8a2be2] flex justify-between items-center px-4 py-2"
      style={atma.style}
    >
      <Link
        href="https://henry.games"
        className="flex items-center justify-center bg-[#ca9cf4] border-[6px] border-[#8a2be2] p-2 rounded hover:scale-[1.05] transition-transform"
      >
        <FontAwesomeIcon icon={faGamepad} />
      </Link>

      <Link href="/" className="flex items-center justify-center gap-2">
        <Image src="/icon.png" width={80} height={80} alt="Henry Games Logo" />
        <h1 className="text-lg" style={atma.style}>
          HENRY GAMES BLOG
        </h1>
      </Link>

      {/* Right empty spacer to keep center aligned */}
      <div className="w-10" />
    </div>
  );
}
