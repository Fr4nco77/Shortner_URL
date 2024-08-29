import Link from "next/link";

export default function ListItem({
  title,
  path,
}: {
  title: string;
  path: string;
}) {
  return (
    <li className="mb-3 h-8 w-full rounded-md text-left text-[16px] font-semibold text-[#031f39] hover:bg-[#eeeae3] md:max-w-[336px]">
      <Link href={path} className="w-full">
        <div className="w-full py-2 pl-2 pr-4">{title}</div>
      </Link>
    </li>
  );
}
