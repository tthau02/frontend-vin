import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useState } from "react";

export default function ButtonFavorite() {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className={`absolute top-2 right-2 h-8 w-8 rounded-full ${
          isFavorite ? "text-red-500" : "text-white"
        } transition-transform hover:scale-120 cursor-pointer`}
        onClick={() => setIsFavorite(!isFavorite)}
      >
        <Heart
          className="h-5 w-5 size-3"
          fill={isFavorite ? "currentColor" : "none"}
        />
      </Button>
    </>
  );
}
