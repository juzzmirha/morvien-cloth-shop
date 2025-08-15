import { Menu, User, Handbag } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
  return (
    <header className="flex flex-row items-center justify-between text-white">
      <div className="flex flex-row items-center gap-[15px]">
        <Sheet>
          <SheetTrigger className="border px-6 py-2 rounded-lg flex flex-row items-center cursor-pointer hover:bg-white hover:text-black transition-colors duration-300">
            <Menu /> Menu
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle className="mb-2">Коллекции</SheetTitle>
              <ul className="space-y-1 mb-4">
                <li className="cursor-pointer hover:opacity-70 transition-opacity">
                  Лето
                </li>
                <li className="cursor-pointer hover:opacity-70 transition-opacity">
                  Зима
                </li>
              </ul>

              <SheetTitle className="mb-2">Новинки</SheetTitle>
              <ul className="space-y-1">
                <li className="cursor-pointer hover:opacity-70 transition-opacity">
                  Футболки
                </li>
                <li className="cursor-pointer hover:opacity-70 transition-opacity">
                  Джинсы
                </li>
                <li className="cursor-pointer hover:opacity-70 transition-opacity">
                  Брюки
                </li>
                <li className="cursor-pointer hover:opacity-70 transition-opacity">
                  Толстовки
                </li>
                <li className="cursor-pointer hover:opacity-70 transition-opacity">
                  Рубашки
                </li>
                <li className="cursor-pointer hover:opacity-70 transition-opacity">
                  Куртки
                </li>
                <li className="cursor-pointer hover:opacity-70 transition-opacity">
                  Обувь
                </li>
              </ul>
            </SheetHeader>
          </SheetContent>
        </Sheet>

        <div className="flex gap-[7.5px]">
          <a href="" className="relative group">
            Для мужчин
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-200 group-hover:w-full"></span>
          </a>
          <a href="" className="relative group">
            Для женщин
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-200 group-hover:w-full"></span>
          </a>
        </div>
      </div>

      <div className="text-white font-bold text-4xl tracking-wide cursor-pointer">
        MORVIEN
      </div>

      <div className="flex items-center gap-3 p-2 border rounded-lg">
        <input
          type="text"
          placeholder="Поиск..."
          className="flex-1 outline-none border-none"
        />
        <User className="w-5 h-5 cursor-pointer" />
        <Handbag className="w-5 h-5 cursor-pointer" />
      </div>
    </header>
  );
}
