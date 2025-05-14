import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  ChevronRight,
  MapPin,
  MinusCircle,
  PlusCircle,
  Search,
} from "lucide-react";
import { format, addDays } from "date-fns";
import { vi } from "date-fns/locale";

export default function ClientSearch() {
  const [activeSection, setActiveSection] = useState<
    "location" | "date" | "guests" | null
  >(null);
  const [location, setLocation] = useState("");
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [month, setMonth] = useState<Date>(new Date(2025, 4, 1)); // May 2025

  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const totalGuests = adults + children;

  const handleIncrement = (type: "adults" | "children" | "infants") => {
    if (type === "adults") setAdults((prev) => prev + 1);
    if (type === "children") setChildren((prev) => prev + 1);
    if (type === "infants") setInfants((prev) => prev + 1);
  };

  const handleDecrement = (type: "adults" | "children" | "infants") => {
    if (type === "adults") setAdults((prev) => (prev > 0 ? prev - 1 : 0));
    if (type === "children") setChildren((prev) => (prev > 0 ? prev - 1 : 0));
    if (type === "infants") setInfants((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleSearch = () => {
    // Implement search functionality
    console.log({ location, date, guests: totalGuests, infants });
    setActiveSection(null);
  };

  // Suggested locations
  const suggestedLocations = [
    {
      name: "Thành phố Hồ Chí Minh, Thành phố Hồ Chí Minh",
      description: "Có các thắng cảnh như Chợ Bến Thành",
      icon: "🏙️",
      color: "bg-blue-100",
    },
    {
      name: "Đà Lạt, Lâm Đồng",
      description: "Phù hợp cho người yêu thiên nhiên",
      icon: "🏔️",
      color: "bg-red-100",
    },
    {
      name: "Bangkok, Thái Lan",
      description: "Có cuộc sống về đêm náo nhiệt",
      icon: "🏯",
      color: "bg-green-100",
    },
    {
      name: "Thành phố Huế, Thừa Thiên-Huế",
      description: "Có kiến trúc ấn tượng",
      icon: "🏛️",
      color: "bg-red-100",
    },
    {
      name: "Đà Nẵng, Đà Nẵng",
      description: "Thích hợp cho kỳ nghỉ hè",
      icon: "🏝️",
      color: "bg-green-100",
    },
    {
      name: "Melbourne, Úc",
      description: "Có ẩm thực đỉnh cao",
      icon: "🏰",
      color: "bg-pink-100",
    },
  ];

  // Get today's date and format it
  const today = new Date();
  const todayFormatted = format(today, "d 'thg' M", { locale: vi });

  // Get tomorrow's date and format it
  const tomorrow = addDays(today, 1);
  const tomorrowFormatted = format(tomorrow, "d 'thg' M", { locale: vi });

  // Get weekend dates (Friday to Sunday)
  const dayOfWeek = today.getDay();
  const daysToFriday =
    dayOfWeek === 5 ? 0 : dayOfWeek === 6 ? 6 : 5 - dayOfWeek;
  const friday = addDays(today, daysToFriday);
  const sunday = addDays(friday, 2);
  const weekendFormatted = `${format(friday, "d", { locale: vi })}–${format(
    sunday,
    "d 'thg' M",
    { locale: vi }
  )}`;

  return (
    <div className="relative">
      {/* Main search bar container with proper rounded border */}
      <div className="flex h-16 w-full max-w-[850px] items-center rounded-full border border-gray-300 bg-white shadow-sm hover:shadow-md md:w-auto overflow-hidden">
        {/* Location Section */}
        <Popover
          open={activeSection === "location"}
          onOpenChange={(open) => setActiveSection(open ? "location" : null)}
        >
          <PopoverTrigger asChild>
            <div
              className="flex h-full w-[300px] flex-1 cursor-pointer items-center px-6 py-2 rounded-full hover:bg-gray-200 transition-all"
              onClick={() => setActiveSection("location")}
            >
              <div className="flex flex-col">
                <span className="text-sm font-medium">Địa điểm</span>
                <span className="text-sm text-gray-500">
                  {location || "Tìm kiếm điểm đến"}
                </span>
              </div>
            </div>
          </PopoverTrigger>
          <PopoverContent
            className="w-[400px] p-0 border-none mt-3 rounded-2xl shadow-2xl"
            align="start"
          >
            <div className="p-4">
              <div className="mb-4">
                <div className="flex items-center gap-3 rounded-full bg-gray-100 p-3">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Tìm kiếm điểm đến"
                    className="w-full bg-transparent border-none p-0 outline-none"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-2">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100`}
                  >
                    <span className="text-lg">📍</span>
                  </div>
                  <div>
                    <div className="font-medium">Lân cận</div>
                    <div className="text-sm text-muted-foreground">
                      Tìm xung quanh bạn
                    </div>
                  </div>
                </div>

                <div className="text-sm font-medium mb-2">
                  Điểm đến được đề xuất
                </div>

                <div className="space-y-4">
                  {suggestedLocations.map((loc, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-1 rounded-md"
                      onClick={() => {
                        setLocation(loc.name);
                        setActiveSection(null);
                      }}
                    >
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-lg ${loc.color}`}
                      >
                        <span className="text-lg">{loc.icon}</span>
                      </div>
                      <div>
                        <div className="font-medium">{loc.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {loc.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>

        {/* Vertical border */}
        <div className="h-2/3 w-px bg-gray-300"></div>

        {/* Date Section */}
        <Popover
          open={activeSection === "date"}
          onOpenChange={(open) => setActiveSection(open ? "date" : null)}
        >
          <PopoverTrigger asChild>
            <div
              className="flex h-full w-[200px] flex-1 cursor-pointer items-center px-6 py-2 rounded-full hover:bg-gray-200 transition-all"
              onClick={() => setActiveSection("date")}
            >
              <div className="flex flex-col">
                <span className="text-sm font-medium">Ngày</span>
                <span className="text-sm text-gray-500">
                  {date
                    ? format(date, "dd MMM yyyy", { locale: vi })
                    : "Thêm ngày"}
                </span>
              </div>
            </div>
          </PopoverTrigger>
          <PopoverContent
            className="w-[650px] ml-[110px] p-1 mt-3 border-none shadow-2xl rounded-2xl"
            align="center"
          >
            <div className="flex">
              {/* Quick selection options */}
              <div className="w-[250px] p-4 space-y-4">
                <div
                  className="cursor-pointer rounded-xl p-4 border border-gray-300 hover:border-gray-500 transition-all"
                  onClick={() => {
                    setDate(today);
                    setActiveSection(null);
                  }}
                >
                  <div className="font-medium text-base">Hôm nay</div>
                  <div className="text-gray-500">{todayFormatted}</div>
                </div>

                <div
                  className="cursor-pointer rounded-xl border border-gray-300 p-4 hover:border-gray-500 transition-all"
                  onClick={() => {
                    setDate(tomorrow);
                    setActiveSection(null);
                  }}
                >
                  <div className="font-medium text-base">Ngày mai</div>
                  <div className="text-gray-500">{tomorrowFormatted}</div>
                </div>

                <div
                  className="cursor-pointer rounded-xl  p-4 border border-gray-300 hover:border-gray-500 transition-all"
                  onClick={() => {
                    setDate(friday);
                    setActiveSection(null);
                  }}
                >
                  <div className="font-medium text-base">Cuối tuần này</div>
                  <div className="text-gray-500">{weekendFormatted}</div>
                </div>
              </div>

              {/* Calendar */}
              <div className="flex-1 p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-lg font-medium">Tháng 5 năm 2025</div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full"
                      onClick={() => {
                        const prevMonth = new Date(month);
                        prevMonth.setMonth(prevMonth.getMonth() - 1);
                        setMonth(prevMonth);
                      }}
                    >
                      <ChevronRight className="h-5 w-5 rotate-180" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full"
                      onClick={() => {
                        const nextMonth = new Date(month);
                        nextMonth.setMonth(nextMonth.getMonth() + 1);
                        setMonth(nextMonth);
                      }}
                    >
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </div>
                </div>

                <div className="custom-calendar">
                  <div className="grid grid-cols-7 gap-1 text-center mb-2">
                    <div className="text-sm font-medium">T2</div>
                    <div className="text-sm font-medium">T3</div>
                    <div className="text-sm font-medium">T4</div>
                    <div className="text-sm font-medium">T5</div>
                    <div className="text-sm font-medium">T6</div>
                    <div className="text-sm font-medium">T7</div>
                    <div className="text-sm font-medium">CN</div>
                  </div>

                  <div className="grid grid-cols-7 gap-1 text-center">
                    {/* First week with empty cells */}
                    <div className="h-10 w-10"></div>
                    <div className="h-10 w-10"></div>
                    <div className="h-10 w-10"></div>
                    <div className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer">
                      1
                    </div>
                    <div className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer">
                      2
                    </div>
                    <div className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer">
                      3
                    </div>
                    <div className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer">
                      4
                    </div>

                    {/* Second week */}
                    <div className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer">
                      5
                    </div>
                    <div className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer">
                      6
                    </div>
                    <div className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer">
                      7
                    </div>
                    <div className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer">
                      8
                    </div>
                    <div className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer">
                      9
                    </div>
                    <div className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer">
                      10
                    </div>
                    <div className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer">
                      11
                    </div>

                    {/* Third week */}
                    <div className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer">
                      12
                    </div>
                    <div className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer">
                      13
                    </div>
                    <div className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer font-medium">
                      14
                    </div>
                    <div className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer font-medium">
                      15
                    </div>
                    <div className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer">
                      16
                    </div>
                    <div className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer">
                      17
                    </div>
                    <div className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer">
                      18
                    </div>

                    {/* Fourth week */}
                    <div className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer">
                      19
                    </div>
                    <div className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer">
                      20
                    </div>
                    <div className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer">
                      21
                    </div>
                    <div className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer">
                      22
                    </div>
                    <div className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer">
                      23
                    </div>
                    <div className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer">
                      24
                    </div>
                    <div className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer">
                      25
                    </div>

                    {/* Fifth week */}
                    <div className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer">
                      26
                    </div>
                    <div className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer">
                      27
                    </div>
                    <div className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer">
                      28
                    </div>
                    <div className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer">
                      29
                    </div>
                    <div className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer">
                      30
                    </div>
                    <div className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer">
                      31
                    </div>
                    <div className="h-10 w-10"></div>
                  </div>
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>

        {/* Vertical border */}
        <div className="h-2/3 w-px bg-gray-300"></div>

        {/* Guests Section */}
        <Popover
          open={activeSection === "guests"}
          onOpenChange={(open) => setActiveSection(open ? "guests" : null)}
        >
          <PopoverTrigger asChild>
            <div
              className="flex h-full flex-1 cursor-pointer items-center px-6 py-2 rounded-full hover:bg-gray-200 transition-all"
              onClick={() => setActiveSection("guests")}
            >
              <div className="flex flex-col w-[100px]">
                <span className="text-sm font-medium">Khách</span>
                <span className="text-sm text-gray-500">
                  {totalGuests > 0
                    ? `${totalGuests} khách${
                        infants > 0 ? `, ${infants} em bé` : ""
                      }`
                    : "Thêm khách"}
                </span>
              </div>
              {/* Search Button */}
              <Button
                className="h-12 m-2 rounded-full bg-rose-500 px-6 text-white hover:bg-rose-600"
                onClick={handleSearch}
              >
                <Search className="h-5 w-5" />
                <span className="ml-2 hidden md:inline-block">Tìm kiếm</span>
              </Button>
            </div>
          </PopoverTrigger>
          <PopoverContent
            className="w-100 border-none mt-3 rounded-2xl shadow-2x"
            align="end"
          >
            <div className="space-y-4 p-1">
              <div className="flex items-center justify-between py-3">
                <div>
                  <div className="font-medium">Người lớn</div>
                  <div className="text-sm text-muted-foreground">
                    Từ 13 tuổi trở lên
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 rounded-full p-0"
                    onClick={() => handleDecrement("adults")}
                    disabled={adults === 0}
                  >
                    <MinusCircle className="h-4 w-4" />
                  </Button>
                  <span>{adults}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 rounded-full p-0"
                    onClick={() => handleIncrement("adults")}
                  >
                    <PlusCircle className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="border-t"></div>

              <div className="flex items-center justify-between py-3">
                <div>
                  <div className="font-medium">Trẻ em</div>
                  <div className="text-sm text-muted-foreground">
                    Độ tuổi 2–12
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 rounded-full p-0"
                    onClick={() => handleDecrement("children")}
                    disabled={children === 0}
                  >
                    <MinusCircle className="h-4 w-4" />
                  </Button>
                  <span>{children}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 rounded-full p-0"
                    onClick={() => handleIncrement("children")}
                  >
                    <PlusCircle className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="border-t"></div>

              <div className="flex items-center justify-between py-3">
                <div>
                  <div className="font-medium">Em bé</div>
                  <div className="text-sm text-muted-foreground">
                    Dưới 2 tuổi
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 rounded-full p-0"
                    onClick={() => handleDecrement("infants")}
                    disabled={infants === 0}
                  >
                    <MinusCircle className="h-4 w-4" />
                  </Button>
                  <span>{infants}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 rounded-full p-0"
                    onClick={() => handleIncrement("infants")}
                  >
                    <PlusCircle className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
