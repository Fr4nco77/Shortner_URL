import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { ArrowRight } from "lucide-react";

export default function Top({
  title,
  description,
  image,
  alt,
  to,
}: {
  title: any;
  description: string;
  image: string;
  alt: string;
  to: string;
}) {
  return (
    <div
      className={`flex w-full flex-col items-center justify-center`}
    >
      <section className="relative w-full xl:max-w-[1170px]">
        <div className="mt-[88px] w-full pt-16 lg:min-h-[630px] lg:w-[calc(66.66667%-1.875rem)] lg:pb-16 lg:pt-28">
          <div className="mx-[10px] flex flex-col px-[10px] md:mx-[15px] md:px-[15px]">
            <h1 className="mb-2 text-[36px] font-bold leading-[110%] text-[#031f39] md:text-[48px] lg:text-[60px]">
              {title}
            </h1>
            <p className="my-[17px] pr-[30px] text-[18px] font-normal leading-[160%] text-[#031f39] md:text-[22px]">
              {description}
            </p>
            <Link
              href={to}
              className={`${buttonVariants({ variant: "custom_solid" })} mb-4 md:mt-4 md:h-14 md:max-w-64 md:rounded-[18px]`}
            >
              Get started for free{" "}
              <ArrowRight className="ml-2 font-bold text-primary-foreground" />
            </Link>
          </div>
        </div>
        <Image
        src={image}
        width={1780}
        height={1360}
        alt={alt}
        className="hiden absolute w-[40%] top-[30%] right-0 lg:block xl:w-[53%] xl:top-[22%] xl:right-[-12%]"
      />
      </section>
      <Image
        src={image}
        width={1780}
        height={1360}
        alt={alt}
        className="mb-10 h-auto w-full lg:hidden"
      />
    </div>
  );
}
