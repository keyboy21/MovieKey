import Image from "next/image";
import Headeritem from "./Headeritem";
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
    <header className='flex flex-col sm:flex-row m-5 justify-between items-center'>
      <div className='flex flex-grow justify-evenly max-w-2xl h-auto'>
        <Headeritem title="HOME" Icon={HomeIcon} />
        <Headeritem title="Trending" Icon={LightningBoltIcon} />
        <Headeritem title="Werified" Icon={BadgeCheckIcon} />
        <Headeritem title="Collections" Icon={CollectionIcon} />
        <Headeritem title="Search" Icon={SearchIcon} />
        <Headeritem title="Accaunt" Icon={UserIcon} />
      </div>
      <Image
        className="object-contain bg-black-900"
        src="/ba2570f3ee5543af9aa726a266e3095a.png"
        width={200}
        height={100}
      />
    </header>
  );
}
