import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="flex flex-row justify-around max-x-[1200px] text-lg font-medium">
      <ul className="space-y-2">
        <strong className="block mb-2">Помощь</strong>
        <li className="cursor-pointer hover:opacity-70 transition-opacity">
          <Link href="/questionPage">Статус заказа</Link>
        </li>
        <li className="cursor-pointer hover:opacity-70 transition-opacity">
          <Link href="/questionPage">Часто задаваемые вопросы</Link>
        </li>
        <li className="cursor-pointer hover:opacity-70 transition-opacity">
          <Link href="/questionPage">Обработка заказа</Link>
        </li>
        <li className="cursor-pointer hover:opacity-70 transition-opacity">
          <Link href="/questionPage">Как сделать возврат</Link>
        </li>
        <li className="cursor-pointer hover:opacity-70 transition-opacity">
          <Link href="/questionPage">Доставка</Link>
        </li>
      </ul>

      <ul className="space-y-2">
        <strong className="block mb-2">Компания</strong>
        <li className="cursor-pointer hover:opacity-70 transition-opacity">
          <Link href="/aboutUs">О нас</Link>
        </li>
        <li className="cursor-pointer hover:opacity-70 transition-opacity">
          <Link href="/aboutUs">Работайте с нами</Link>
        </li>
      </ul>

      <div className="flex flex-col gap-y-6">
        <div>
          <strong className="block mb-2">Наше приложение</strong>
          <div className="flex flex-row gap-3">
            <img
              src="/images/ios.png"
              alt="iOS"
              className="h-10 w-auto cursor-pointer"
            />
            <img
              src="/images/android.png"
              alt="Android"
              className="h-10 w-auto cursor-pointer"
            />
          </div>
        </div>

        <div>
          <strong className="block mb-2">Способ оплаты</strong>
          <div className="flex flex-row gap-4">
            <img src="/images/visa.svg" alt="VISA" className="cursor-pointer" />
            <img
              src="/images/mastercard.svg"
              alt="MasterCard"
              className="cursor-pointer"
            />
            <img src="/images/amex.svg" alt="Amex" className="cursor-pointer" />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <strong className="block mb-2">Подпишитесь на нас</strong>
          <div className="flex flex-row gap-4">
            <div
              className="bg-gray-200 rounded-full p-3 w-12 h-12 cursor-pointer 
                  hover:bg-gradient-to-tr hover:from-yellow-400 
                  hover:via-pink-500 hover:to-purple-600
                  flex items-center justify-center transition-all"
            >
              <Instagram className="w-6 h-6 text-gray-700 hover:text-white" />
            </div>

            <div
              className="bg-gray-200 rounded-full p-3 w-12 h-12 cursor-pointer 
                  hover:bg-blue-500 flex items-center justify-center transition-all"
            >
              <Facebook className="w-6 h-6 text-gray-700 hover:text-white" />
            </div>

            <div
              className="bg-gray-200 rounded-full p-3 w-12 h-12 cursor-pointer 
                  hover:bg-sky-400 flex items-center justify-center transition-all"
            >
              <Twitter className="w-6 h-6 text-gray-700 hover:text-white" />
            </div>

            <div
              className="bg-gray-200 rounded-full p-3 w-12 h-12 cursor-pointer 
                  hover:bg-red-500 flex items-center justify-center transition-all"
            >
              <Youtube className="w-6 h-6 text-gray-700 hover:text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
