"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "react-router-dom";
import ButtonFavorite from "@/components/common/ButtonFavorite";

export default function HomePage() {
  const scrollContainerRef1 = React.useRef<HTMLDivElement>(null);
  const scrollContainerRef2 = React.useRef<HTMLDivElement>(null);

  const scroll = (
    ref: React.RefObject<HTMLDivElement | null>,
    direction: "left" | "right"
  ) => {
    if (!ref.current) return;
    const scrollAmount = 340;
    if (direction === "left") {
      ref.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      ref.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* First Section */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <NavLink to={""} className="text-xl font-bold">
            Còn phòng tại Huyện Văn Giang vào cuối tuần này ›
          </NavLink>
          <div className="flex gap-2">
            <Button
              size="icon"
              className="rounded-full bg-gray-100 cursor-pointer"
              onClick={() => scroll(scrollContainerRef1, "left")}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              className="rounded-full bg-gray-100 cursor-pointer"
              onClick={() => scroll(scrollContainerRef1, "right")}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div
          ref={scrollContainerRef1}
          className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {vanGiangProperties.map((property, index) => (
            <PropertyCard key={index} property={property} />
          ))}
        </div>
      </div>

      {/* Second Section */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Nơi lưu trú tại Quận 1 ›</h2>
          <div className="flex gap-2">
            <Button
              size="icon"
              className="rounded-full bg-gray-100 cursor-pointer"
              onClick={() => scroll(scrollContainerRef2, "left")}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              className="rounded-full bg-gray-100 cursor-pointer"
              onClick={() => scroll(scrollContainerRef2, "right")}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div
          ref={scrollContainerRef2}
          className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {district1Properties.map((property, index) => (
            <PropertyCard key={index} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
}

interface Property {
  id: string;
  name: string;
  price: string;
  nights: number;
  rating: number;
  image: string;
  isFavorite: boolean;
}

function PropertyCard({ property }: { property: Property }) {
  return (
    <Card className="min-w-[280px] max-w-[280px] overflow-hidden border-none shadow-none">
      <div className="relative">
        <img
          src={property.image}
          alt={property.name}
          className="h-[250px] w-full object-cover rounded-2xl cursor-pointer"
        />
        <ButtonFavorite />
        <Badge className="absolute top-3 left-3 bg-gray-100 text-black font-normal">
          Được khách yêu thích
        </Badge>
      </div>
      <CardContent className="p-2">
        <div className="flex justify-between items-center gap-2">
          <h3 className="font-medium text-sm truncate">{property.name}</h3>
          <div className="flex items-center gap-1 text-sm">
            <span>★</span>
            <span>{property.rating.toFixed(property.rating % 1 ? 2 : 1)}</span>
          </div>
        </div>
        <div className="text-[16px] text-gray-500">
          <p>Chủ nhà: Quốc bảo</p>
          <p className="truncate">Pinehill Tu Hieu Hue Homestay </p>
        </div>
        <div className="text-[16px] text-gray-800 mt-1.5">
          {property.price} cho {property.nights} đêm
        </div>
      </CardContent>
    </Card>
  );
}

// Sample data for Van Giang properties
const vanGiangProperties: Property[] = [
  {
    id: "1",
    name: "Căn hộ tại Văn Giang",
    price: "₫1.130.739",
    nights: 2,
    rating: 5.0,
    image: "https://picsum.photos/300/200?random=1",
    isFavorite: false,
  },
  {
    id: "2",
    name: "Căn hộ tại Văn Giang",
    price: "₫1.261.022",
    nights: 2,
    rating: 5.0,
    image: "https://picsum.photos/300/200?random=2",
    isFavorite: false,
  },
  {
    id: "3",
    name: "Căn hộ tại tt. Văn Giang",
    price: "₫1.531.460",
    nights: 2,
    rating: 5.0,
    image: "https://picsum.photos/300/200?random=3",
    isFavorite: false,
  },
  {
    id: "4",
    name: "Căn hộ chung cư cao cấp tại Văn Giang",
    price: "₫1.300.600",
    nights: 2,
    rating: 4.88,
    image: "https://picsum.photos/300/200?random=4",
    isFavorite: false,
  },
  {
    id: "5",
    name: "Căn hộ tại Xuân Quan",
    price: "₫1.478.493",
    nights: 2,
    rating: 5.0,
    image: "https://picsum.photos/300/200?random=5",
    isFavorite: false,
  },
  {
    id: "6",
    name: "Căn hộ tại Văn Giang",
    price: "₫1.261.644",
    nights: 2,
    rating: 4.94,
    image: "https://picsum.photos/300/200?random=6",
    isFavorite: false,
  },
  {
    id: "7",
    name: "Phòng tại Văn Giang",
    price: "₫1.474.401",
    nights: 2,
    rating: 5.0,
    image: "https://picsum.photos/300/200?random=7",
    isFavorite: false,
  },
];

// Sample data for District 1 properties
const district1Properties: Property[] = [
  {
    id: "8",
    name: "Căn hộ tại Thành phố Hồ Chí Minh",
    price: "₫884.412",
    nights: 2,
    rating: 5.0,
    image: "https://picsum.photos/300/200?random=8",
    isFavorite: false,
  },
  {
    id: "9",
    name: "Phòng tại Đa Kao",
    price: "₫113.783",
    nights: 2,
    rating: 5.0,
    image: "https://picsum.photos/300/200?random=9",
    isFavorite: false,
  },
  {
    id: "10",
    name: "Căn hộ khách sạn tại Nguyễn Cư Trinh",
    price: "₫836.164",
    nights: 2,
    rating: 5.0,
    image: "https://picsum.photos/300/200?random=10",
    isFavorite: false,
  },
  {
    id: "11",
    name: "Phòng tại Thành phố Hồ Chí Minh",
    price: "₫1.304.308",
    nights: 2,
    rating: 5.0,
    image: "https://picsum.photos/300/200?random=11",
    isFavorite: false,
  },
  {
    id: "12",
    name: "Phòng tại Thành phố Hồ Chí Minh",
    price: "₫1.538.629",
    nights: 2,
    rating: 4.85,
    image: "https://picsum.photos/300/200?random=12",
    isFavorite: false,
  },
  {
    id: "13",
    name: "Phòng tại Thành phố Hồ Chí Minh",
    price: "₫1.024.777",
    nights: 2,
    rating: 4.92,
    image: "https://picsum.photos/300/200?random=13",
    isFavorite: false,
  },
  {
    id: "14",
    name: "Căn hộ tại Thành phố Hồ Chí Minh",
    price: "₫1.025.925",
    nights: 2,
    rating: 4.81,
    image: "https://picsum.photos/300/200?random=14",
    isFavorite: false,
  },
];
