import { useState } from "react";
import { Link } from "react-router-dom";
import { CalendarIcon, Globe, Menu, Search, User } from "lucide-react";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";
import { cn } from "@/lib/utils";
import { useMobile } from "../../../hooks/useMobile";

export default function ClientHeader() {
  const isMobile = useMobile();
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="text-rose-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-8 w-8"
            >
              <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
              <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
            </svg>
          </div>
          <span className="hidden text-xl font-bold md:inline-block">
            airbnb
          </span>
        </Link>

        {/* Search Bar - Desktop */}
        <div className="hidden md:block">
          <div className="relative flex items-center rounded-full border shadow-sm">
            <Button
              variant="ghost"
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium",
                activeFilter === "location" && "bg-gray-100"
              )}
              onClick={() => {
                if (activeFilter === "location") {
                  setActiveFilter(null);
                } else {
                  setActiveFilter("location");
                }
              }}
            >
              Anywhere
            </Button>
            <div className="h-4 w-px bg-gray-300" />
            <Button
              variant="ghost"
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium",
                activeFilter === "date" && "bg-gray-100"
              )}
              onClick={() =>
                setActiveFilter(activeFilter === "date" ? null : "date")
              }
            >
              Any week
            </Button>
            <div className="h-4 w-px bg-gray-300" />
            <Button
              variant="ghost"
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium text-gray-500",
                activeFilter === "guests" && "bg-gray-100"
              )}
              onClick={() =>
                setActiveFilter(activeFilter === "guests" ? null : "guests")
              }
            >
              Add guests
            </Button>
            <Button
              size="icon"
              className="ml-2 rounded-full bg-rose-500 hover:bg-rose-600"
            >
              <Search className="h-4 w-4 text-white" />
              <span className="sr-only">Search</span>
            </Button>
          </div>

          {/* Filter Popovers */}
          {activeFilter === "location" && (
            <div className="absolute left-1/2 mt-2 w-80 -translate-x-1/2 rounded-lg border bg-white p-4 shadow-lg">
              <div className="space-y-2">
                <h3 className="font-medium">Popular destinations</h3>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="ghost" className="justify-start">
                    New York
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    London
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    Paris
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    Tokyo
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    Barcelona
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    Rome
                  </Button>
                </div>
              </div>
            </div>
          )}

          {activeFilter === "date" && (
            <div className="absolute left-1/2 mt-2 w-auto -translate-x-1/2 rounded-lg border bg-white p-4 shadow-lg">
              <div className="flex items-center gap-2">
                <CalendarIcon className="h-5 w-5 text-gray-500" />
                <span>Select dates</span>
              </div>
              <div className="mt-2 grid grid-cols-2 gap-4">
                <div>
                  <div className="mb-1 text-sm font-medium">Check in</div>
                  <Button variant="outline" className="w-full justify-start">
                    Add date
                  </Button>
                </div>
                <div>
                  <div className="mb-1 text-sm font-medium">Check out</div>
                  <Button variant="outline" className="w-full justify-start">
                    Add date
                  </Button>
                </div>
              </div>
            </div>
          )}

          {activeFilter === "guests" && (
            <div className="absolute left-1/2 mt-2 w-80 -translate-x-1/2 rounded-lg border bg-white p-4 shadow-lg">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Adults</div>
                    <div className="text-sm text-gray-500">
                      Ages 13 or above
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 rounded-full"
                    >
                      -
                    </Button>
                    <span>0</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 rounded-full"
                    >
                      +
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Children</div>
                    <div className="text-sm text-gray-500">Ages 2-12</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 rounded-full"
                    >
                      -
                    </Button>
                    <span>0</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 rounded-full"
                    >
                      +
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Infants</div>
                    <div className="text-sm text-gray-500">Under 2</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 rounded-full"
                    >
                      -
                    </Button>
                    <span>0</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 rounded-full"
                    >
                      +
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Search Bar - Mobile */}
        <div className="flex md:hidden">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="flex items-center gap-2 rounded-full border shadow-sm"
              >
                <Search className="h-4 w-4" />
                <div className="flex flex-col items-start">
                  <span className="text-sm font-medium">Anywhere</span>
                  <span className="text-xs text-gray-500">
                    Any week · Add guests
                  </span>
                </div>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">Where to?</h3>
                  <Input placeholder="Search destinations" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">When?</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" className="justify-start">
                      Check in
                    </Button>
                    <Button variant="outline" className="justify-start">
                      Check out
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">Who?</h3>
                  <Button variant="outline" className="w-full justify-start">
                    Add guests
                  </Button>
                </div>
                <Button className="w-full bg-rose-500 hover:bg-rose-600">
                  Search
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        {/* User Menu */}
        <div className="flex items-center gap-4">
          {!isMobile && (
            <Button
              variant="ghost"
              className="hidden rounded-full text-sm font-medium md:flex"
            >
              Airbnb your home
            </Button>
          )}

          <Button
            variant="ghost"
            size="icon"
            className="hidden rounded-full md:flex"
          >
            <Globe className="h-5 w-5" />
            <span className="sr-only">Language</span>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="flex gap-2 rounded-full border px-3 py-1.5"
              >
                <Menu className="h-5 w-5" />
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem className="font-medium">
                <Link to="/login" className="w-full">
                  Sign up
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/login" className="w-full">
                  Log in
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Airbnb your home</DropdownMenuItem>
              <DropdownMenuItem>Host an experience</DropdownMenuItem>
              <DropdownMenuItem>Help</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
