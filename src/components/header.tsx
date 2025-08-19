"use client";

import Link from "next/link";
import { Menu, User, Handbag } from "lucide-react";
import clsx from "clsx";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface HeaderProps {
  variant?: "black" | "white";
}

export default function Header({ variant = "white" }: HeaderProps) {
  const textColor = variant === "black" ? "text-black" : "text-white";
  const hoverColor =
    variant === "black"
      ? "hover:text-white hover:bg-black"
      : "hover:text-black hover:bg-white";

  return (
    <header
      className={clsx("flex flex-row items-center justify-between", textColor)}
    >
      <div className="flex flex-row items-center gap-[15px]">
        <Sheet>
          <SheetTrigger
            className={clsx(
              "border px-6 py-2 rounded-xl flex flex-row items-center cursor-pointer transition-colors duration-300",
              hoverColor
            )}
          >
            <Menu /> Menu
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle className="mb-2">Коллекции</SheetTitle>
              <ul className="space-y-1 mb-4">
                <li>
                  <Link
                    href="/clothPage"
                    className="cursor-pointer hover:opacity-70 transition-opacity"
                  >
                    Лето
                  </Link>
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
            <span
              className={clsx(
                "absolute left-0 bottom-0 w-0 h-[2px] transition-all duration-200 group-hover:w-full",
                variant === "black" ? "bg-black" : "bg-white"
              )}
            ></span>
          </a>
          <a href="" className="relative group">
            Для женщин
            <span
              className={clsx(
                "absolute left-0 bottom-0 w-0 h-[2px] transition-all duration-200 group-hover:w-full",
                variant === "black" ? "bg-black" : "bg-white"
              )}
            ></span>
          </a>
        </div>
      </div>

      <div
        className={clsx(
          "font-bold text-4xl tracking-wide cursor-pointer",
          textColor
        )}
      >
        <Link href="/">MORVIEN</Link>
      </div>

      <div
        className={clsx(
          "flex items-center gap-3 p-2 border rounded-lg",
          textColor
        )}
      >
        <input
          type="text"
          placeholder="Поиск..."
          className="flex-1 outline-none border-none bg-transparent"
        />
        <User className="w-5 h-5 cursor-pointer" />
        <Handbag className="w-5 h-5 cursor-pointer" />
      </div>
    </header>
  );
}
