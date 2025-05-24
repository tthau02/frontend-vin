import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useMobile } from "@/hooks/useMobile";
// import ClientSearch from "@/components/common/ClientSearch";
import { Menu, User, Search } from "lucide-react";

export default function ClientHeader() {
  const isMobile = useMobile();

  return (
    <header className="sticky top-0 z-50 w-full bg-gray-100">
      <div className="max-w-[1550px] m-auto flex h-18 items-center justify-between px-3 md:px-6">
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
            Vinaside
          </span>
        </Link>

        <div className="bg-white rounded-full shadow-2xl border border-gray-300 flex items-center h-12 p-1">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer">
            <div className="flex-shrink-0">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
              >
                <path
                  d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 22V12H15V22"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-sm font-medium hover:text-gray-600">
              Địa điểm bất kỳ
            </span>
          </div>

          <div className="h-2/3 w-px bg-gray-300"></div>

          <div className="px-4 py-2 cursor-pointer">
            <span className="text-sm font-medium hover:text-gray-600">
              Thời gian bất kỳ
            </span>
          </div>

          <div className="h-2/3 w-px bg-gray-300"></div>

          <div className="px-4 py-2  cursor-pointer">
            <span className="text-sm font-medium hover:text-gray-600">
              Thêm khách
            </span>
          </div>

          <Button
            size="icon"
            className="ml-auto text-white rounded-full bg-rose-500 hover:bg-rose-600 h-8 w-8"
          >
            <Search className="h-5 w-5" />
            <span className="sr-only">Tìm kiếm</span>
          </Button>
        </div>
        {/* User Menu */}
        <div className="flex items-center">
          {!isMobile && (
            <Button
              variant="ghost"
              className="hidden rounded-full text-sm font-medium md:flex"
            >
              Trở thành host
            </Button>
          )}
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button
                variant="outline"
                className="flex gap-2 rounded-full border-gray-200 px-4 py-2"
              >
                <Menu className="h-5 w-5" />
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-56 p-3 mt-1 border-none shadow-2xl rounded-2xl bg-white"
            >
              <DropdownMenuItem>
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
