import Link from "next/link";
import { buttonVariants } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Separator from "./separator";
import Card from "./card";
import ListItem from "./listItem";

export default function View_Desktop() {
  return (
    <div className="hidden w-full items-center justify-between lg:flex">
      <NavigationMenu className="px-[30px]">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Platform</NavigationMenuTrigger>
            <NavigationMenuContent>
              <Separator category="PRODUCTS" />
              <div className="flex w-[700px] flex-wrap justify-between xl:w-[750px]">
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
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
            <NavigationMenuContent>
              <Separator category="BY INDUSTRY" />
              <ul className="flex w-[700px] flex-wrap justify-between xl:w-[750px]">
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
              <div className="flex w-[700px] flex-wrap justify-between xl:w-[750px]">
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
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/pricing" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Pricing
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
            <NavigationMenuContent>
              <Separator category="LEARN MORE" />
              <div className="flex w-[700px] flex-wrap justify-between xl:w-[750px]">
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
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex items-center gap-3">
        <Link
          href="/sing_in"
          className={`${buttonVariants({ variant: "custom_outline", size: "sm" })} ml-[6px]`}
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
    </div>
  );
}
