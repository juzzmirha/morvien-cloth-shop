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
  SheetFooter,
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
              "text-lg border px-6 py-2 rounded-xl flex flex-row items-center cursor-pointer transition-colors duration-300",
              hoverColor
            )}
          >
            <Menu /> Menu
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <div className="flex flex-row justify-between p-4">
                <div>
                  <SheetTitle className="text-xl">Коллекции</SheetTitle>
                  <ul className="mb-4 text-lg">
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

                  <SheetTitle className="text-xl">Новинки</SheetTitle>
                  <ul className="text-lg">
                    <li className="cursor-pointer hover:opacity-70 transition-opacity">
                      Футболки
                    </li>
                    <li className="cursor-pointer hover:opacity-70 transition-opacity">
                      Рубашки
                    </li>
                    <li className="cursor-pointer hover:opacity-70 transition-opacity">
                      Брюки
                    </li>
                    <li className="cursor-pointer hover:opacity-70 transition-opacity">
                      Джинсы
                    </li>
                    <li className="cursor-pointer hover:opacity-70 transition-opacity">
                      Толстовки
                    </li>
                    <li className="cursor-pointer hover:opacity-70 transition-opacity">
                      Куртки
                    </li>
                    <li className="cursor-pointer hover:opacity-70 transition-opacity">
                      Обувь
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-4 ml-6">
                  <div className="flex flex-col items-center text-center">
                    <img
                      src="/clothIMG/yankees.jpg"
                      alt="yankees"
                      className="w-32 h-40 object-cover rounded-lg shadow-sm cursor-pointer"
                    />
                    <h1 className="mt-2 text-lg font-medium">ETW</h1>
                  </div>
                  <div className="flex flex-col items-center">
                    <img
                      src="/clothIMG/newCloth.jpg"
                      alt="new cloth"
                      className="w-32 h-40 object-cover rounded-lg shadow-sm cursor-pointer"
                    />
                    <h1 className="mt-2 text-lg font-medium">Новинки</h1>
                  </div>
                </div>
              </div>
            </SheetHeader>
            <SheetFooter className="bg-[#e5e5e5] text-md">
              <ul className="flex flex-row items-center gap-3 text-md text-gray-700">
                <li className="cursor-pointer hover:underline hover:opacity-80 transition">
                  Часто задаваемые вопросы
                </li>
                <li className="cursor-pointer hover:underline hover:opacity-80 transition">
                  Статус заказа
                </li>
                <li className="cursor-pointer hover:underline hover:opacity-80 transition">
                  Магазины
                </li>
              </ul>
            </SheetFooter>
          </SheetContent>
        </Sheet>

        <div className="flex gap-[7.5px] text-lg">
          <a href="/clothPage" className="relative group">
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
          "flex items-center gap-3 p-2 border rounded-lg text-lg",
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
