import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogOverlay,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export default function ButtonWishlist() {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleButtonClick = () => {
    setIsFavorite(!isFavorite);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("New favorite list created");
    setIsPopupOpen(false);
  };

  return (
    <>
      <style>
        {`
          @keyframes slideInFromTop {
            from {
              transform: translateY(-50%);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `}
      </style>
      <Button
        variant="ghost"
        size="icon"
        className={`absolute top-2 right-2 h-8 w-8 rounded-full ${
          isFavorite ? "text-red-500" : "text-white"
        } transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer`}
        onClick={handleButtonClick}
      >
        <Heart
          className="h-5 w-5 size-3 transition-colors duration-300"
          fill={isFavorite ? "currentColor" : "none"}
        />
      </Button>

      <Dialog open={isPopupOpen} onOpenChange={setIsPopupOpen}>
        <DialogOverlay
          className="transition-opacity duration-300"
          onClick={handleClosePopup}
        />
        <DialogContent className="sm:max-w-[425px] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl animate-[slideInFromTop_0.3s_ease-out]">
          <DialogHeader>
            <DialogTitle>Tạo danh sách yêu thích mới</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              placeholder="Tên danh sách"
              className="w-full transition-all duration-200 focus:ring-red-200"
            />
            <div className="flex justify-end gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={handleClosePopup}
                className="transition-colors duration-200 hover:bg-gray-100 cursor-pointer"
              >
                Hủy
              </Button>
              <Button
                type="submit"
                className="transition-colors duration-200 bg-black text-white hover:bg-gray-800 cursor-pointer"
              >
                Tạo
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
