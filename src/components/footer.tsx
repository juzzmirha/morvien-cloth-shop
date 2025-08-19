import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="flex flex-row justify-around max-x-[1200px]">
      <ul className="space-y-2">
        <strong className="block mb-2">
          <Link href="/questionPage">Помощь</Link>
        </strong>
        <li className="cursor-pointer hover:opacity-70 transition-opacity">
          Статус заказа
        </li>
        <li className="cursor-pointer hover:opacity-70 transition-opacity">
          Часто задаваемые вопросы
        </li>
        <li className="cursor-pointer hover:opacity-70 transition-opacity">
          Обработка заказа
        </li>
        <li className="cursor-pointer hover:opacity-70 transition-opacity">
          Как сделать возврат
        </li>
        <li className="cursor-pointer hover:opacity-70 transition-opacity">
          Доставка
        </li>
      </ul>

      <ul className="space-y-2">
        <strong className="block mb-2">Компания</strong>
        <li className="cursor-pointer hover:opacity-70 transition-opacity">
          О нас
        </li>
        <li className="cursor-pointer hover:opacity-70 transition-opacity">
          Работайте с нами
        </li>
      </ul>

      <div className="flex flex-col gap-y-6">
        <div>
          <strong className="block mb-2">Наше приложение</strong>
          <div className="flex flex-row gap-3">
            <img
              src="./images/ios.png"
              alt="iOS"
              className="h-10 w-auto cursor-pointer"
            />
            <img
              src="./images/android.png"
              alt="Android"
              className="h-10 w-auto cursor-pointer"
            />
          </div>
        </div>

        <div>
          <span className="block mb-2">Способ оплаты</span>
          <div className="flex flex-row gap-4">
            <img src="./images/visa.svg" alt="" />
            <img src="./images/mastercard.svg" alt="" />
            <img src="./images/amex.svg" alt="" />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <span>Подпишитесь на нас!</span>
          <div className="flex flex-row gap-4">
            <Instagram className="bg-gray-200 rounded-full p-3 w-10 h-10 cursor-pointer" />
            <Facebook className="bg-gray-200 rounded-full p-3 w-10 h-10 cursor-pointer" />
            <Twitter className="bg-gray-200 rounded-full p-3 w-10 h-10 cursor-pointer" />
            <Youtube className="bg-gray-200 rounded-full p-3 w-10 h-10 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}
