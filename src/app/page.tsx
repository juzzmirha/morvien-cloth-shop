import LoginPage from "./auth/login-page/page";
import { Header, Footer } from "@/components/widgets";

export default function Home() {
  return (
    <div>
      <div className="relative">
        <img
          src="./images/background.jpg"
          alt=""
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 p-6">
          <Header variant="white" />
        </div>
      </div>
      <hr className="border-t border-gray-300 border-[1px]" />

      <div className="p-6 text-center font-medium text-xl max-w-[1250px] mx-auto">
        <h1 className="my-2">Новинки</h1>
        <img
          src="./images/news2.jpg"
          alt="New cloth"
          className="cursor-pointer"
        />
      </div>
      <hr className="border-t border-gray-300 border-[1px]" />

      <div className="flex flex-col items-center text-center max-w-xl mx-auto py-12 px-6 gap-4">
        <h1 className="text-2xl font-semibold">
          КЛЮЧЕВЫЕ МОДЕЛИ СЕЗОНА MORVIEN В НАШЕЙ НОВОСТНОЙ РАССЫЛКЕ!
        </h1>
        <p className="text-gray-600 text-lg">
          Узнавай обо всех трендах, коллаборациях и эксклюзивных предложениях!
        </p>

        <div className="flex flex-col w-full max-w-md gap-2 mt-4">
          <input
            type="email"
            placeholder="Введите email..."
            className="flex-1 outline-none border border-gray-300 px-3 py-3 rounded-2xl transition"
          />
          <button className="bg-black px-6 py-2 rounded-full text-white font-medium hover:bg-gray-800 transition cursor-pointer">
            Я в тренде
          </button>
        </div>

        <a
          href="#"
          className="text-lg text-gray-400 hover:text-black hover:underline mt-2 transition"
        >
          Я хочу отказаться от подписки
        </a>
      </div>

      <hr className="border-t border-gray-300 border-[1px]" />
      <div className="p-6 bg-white">
        <Footer />
      </div>
    </div>
  );
}
