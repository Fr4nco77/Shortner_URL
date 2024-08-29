import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AlignJustify } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import Card from "./card";
import Separator from "./separator";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import ListItem from "./listItem";

export default function View_Mobil() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="mx-1 h-[30px] w-[30px] lg:hidden" />
      </SheetTrigger>
      <SheetContent className="max-h-screen overflow-y-auto">
        <SheetHeader>
          <Link href="/">
            <Image
              src="/bitly_logo.svg"
              width={100}
              height={50}
              alt="logo"
              priority
            />
          </Link>
          {/* Estas lineas evitan que salte un error del componente dialog usado por sheet */}
          <SheetTitle>
            <VisuallyHidden>Menu</VisuallyHidden>
          </SheetTitle>
          <SheetDescription>
            <VisuallyHidden>Navigate in the page</VisuallyHidden>
          </SheetDescription>
          {/* P/D: No renderizan nada */}
          <div className="flex items-center gap-2">
            <Link
              href="/sing_in"
              className={`${buttonVariants({ variant: "custom_outline", size: "sm" })} hidden sm:inline-flex`}
            >
              Log in
            </Link>
            <Link
              href="/pricing"
              className={buttonVariants({
                variant: "custom_solid",
                size: "sm",
              })}
            >
              {" "}
              Sign up Free
            </Link>
          </div>
        </SheetHeader>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-[20px] font-semibold leading-6 text-[#1d1f21]">
              Platform
            </AccordionTrigger>
            <AccordionContent className="w-full">
              <Separator category="PRODUCTS" />
              <div className="flex w-full flex-wrap justify-between">
                <Card
                  title="Shortner URL"
                  description="Customize, share and track links"
                  icon="LinkIcon"
                  path="/products/shortner_url"
                />
                <Card
                  title="QR Codes"
                  description="Dynamic solutions to fit every business need"
                  icon="QrCode"
                  path="/products/qr_codes"
                />
                <Card
                  title="Analytics"
                  description="A central place to track and analyze performance of all short links and QR Codes"
                  icon="ChartNoAxesCombined"
                  path="/products/analytics"
                />
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-[20px] font-semibold leading-6 text-[#1d1f21]">
              Solutions
            </AccordionTrigger>
            <AccordionContent className="flex w-full flex-wrap justify-between">
              <Separator category="BY INDUSTRY" />
              <ul className="flex w-full flex-wrap justify-between">
                <ListItem title="Retail" path="" />
                <ListItem title="Consumer Packaged Goods" path="" />
                <ListItem title="Hospitality" path="" />
                <ListItem title="Media & Entertainment" path="" />
                <ListItem title="Technology Software & Hardware" path="" />
                <ListItem title="Healthcare" path="" />
                <ListItem title="Insurance" path="" />
                <ListItem title="Financial Services" path="" />
                <ListItem title="Professional Services" path="" />
                <ListItem title="Education" path="" />
              </ul>
              <div className="w-full md:max-w-[336px]">
                <Separator category="BY TEAM" />
                <ul className="flex w-full flex-wrap justify-between">
                  <ListItem title="Developers" path="" />
                  <ListItem title="Marketing" path="" />
                  <ListItem title="Customer Service" path="" />
                </ul>
              </div>
              <div className="w-full md:max-w-[336px]">
                <Separator category="BY BUSINESS" />
                <ul className="flex w-full flex-wrap justify-between">
                  <ListItem title="Small Business" path="" />
                  <ListItem title="Midmarket" path="" />
                  <ListItem title="Enterprise" path="" />
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
          <div className="w-full border-b border-[#e2e8f0] py-4 text-[20px] font-semibold leading-6 text-[#1d1f21] hover:underline">
            <Link href="">Pricing</Link>
          </div>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-[20px] font-semibold leading-6 text-[#1d1f21]">
              Resources
            </AccordionTrigger>
            <AccordionContent className="w-full">
              <Separator category="LEARN MORE" />
              <div className="flex w-full flex-wrap justify-between">
                <Card
                  title="Blog"
                  description="Get the latest trends, tips, and best practices"
                  icon="Newspaper"
                  path="/blog"
                />
                <Card
                  title="API & Documentation"
                  description="Learn how to use our API."
                  icon="Braces"
                  path="/docs"
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </SheetContent>
    </Sheet>
  );
}
