import Image from "next/image";
import Link from "next/link";
import View_Mobil from "./view_mobil";
import View_Desktop from "./view_desktop";

export default function Navbar() {
  return (
    <nav className="absolute w-full px-[10px] md:px-[15px]">
      <div className="mx-auto flex w-full items-center justify-between px-2 pb-3.5 pt-5 xl:max-w-[1170px] xl:px-6">
        <div className="max-w-[130px] lg:w-full xl:max-w-[167px]">
          <Link href="/">
            <Image
              src="/bitly_logo.svg"
              width={100}
              height={50}
              alt="logo"
              priority
            />
          </Link>
        </div>
        <View_Mobil />
        <View_Desktop />
      </div>
    </nav>
  );
}
