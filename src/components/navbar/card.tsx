import Link from "next/link";
import Icon  from "@/lib/dinamicIcons";

export default function Card({
  icon,
  title,
  description,
  path,
}: {
  icon: any;
  title: string;
  description: string;
  path: string;
}) {
  
  return (
    <Link href={path} className="w-full md:max-w-[338.5px]">
      <div
        className="relative mb-3 w-full rounded-md p-0 px-4 hover:bg-[#eeeae3] lg:mb-0"
      >
        <div className="absolute left-2 top-2 flex h-9 w-9 items-center justify-center rounded-sm bg-[#f7f4ee]">
          {Icon({
            name: icon,
            className: `w-max text-[#031f39]`,
          })}
        </div>
        <div className="flex flex-col py-2 pl-[42px] pr-4 text-left text-[16px] font-semibold text-[#031f39]">
          {title}
          <span
            className="text-[16px] font-normal leading-5 text-[#777570]"
          >
            {description}
          </span>
        </div>
      </div>
    </Link>
  );
}
