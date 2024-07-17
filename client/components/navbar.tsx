import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bookmark, Search, ShoppingCart } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default function Navbar() {
  return (
    <div
      className={
        "absolute w-full flex justify-between items-center p-4 border-b border-black"
      }
    >
      <div className={" space-x-4 items-center"}>
        {/*TODO: Create NavigationMenu FOR EACH category*/}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              {/* TODO: CATEGORY.TITLE*/}
              <NavigationMenuTrigger>Category</NavigationMenuTrigger>{" "}
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Category Name
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Category description
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/" title="Another category">
                    Another Category description
                  </ListItem>
                  <ListItem href="/" title="Even more categories">
                    Even more categories description
                  </ListItem>
                  <ListItem href="/" title="...">
                    ...
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className={"text-2xl font-light"}>DEMO</div>
      <div className={"flex space-x-4 items-center"}>
        <Link href={"/"}>
          <Search />
        </Link>
        <Link href={"/"}>
          <Bookmark />
        </Link>
        <Link href={"/"}>
          <ShoppingCart />
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar className={" border border-gray-300 hover: outline-none"}>
              <AvatarImage src="https://github.com/lptrk.png" />
              <AvatarFallback>LP</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"/user/settings"}>Settings</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
