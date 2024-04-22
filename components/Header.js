import Image from "next/image";
import Headeritem from "./Headeritem";
import Link from "next/link";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center">
      <Image
        className="object-contain bg-black-900"
        src="/logo.png"
        width={100}
        height={100}
      />
      <div className="flex flex-grow justify-evenly max-w-2xl h-auto">
        <Link href={"/"}>
          <Headeritem title="HOME" Icon={HomeIcon} />
        </Link>
        <Headeritem title="Trending" Icon={LightningBoltIcon} />
        <Headeritem title="Werified" Icon={BadgeCheckIcon} />
        <Headeritem title="Collections" Icon={CollectionIcon} />
        <Headeritem title="Search" Icon={SearchIcon} />
        <Headeritem title="Accaunt" Icon={UserIcon} />
      </div>
    </header>
  );
}
