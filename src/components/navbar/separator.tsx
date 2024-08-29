export default function Separator({ category }: { category: string }) {
  return (
    <div className="mb-4 mt-5 w-full border-b border-[#d6d2c9] pb-2 text-[16px] font-semibold leading-4 text-[#6c6965]">
      {category}
    </div>
  );
}
