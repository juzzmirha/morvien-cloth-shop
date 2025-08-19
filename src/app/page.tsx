import Image from "next/image";
import LoginPage from "./auth/login-page/page";
import Header from "@/components/header";
import Footer from "@/components/footer";

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

      <div className="p-6 text-center max-w-[1250px] mx-auto">
        Новинки
        <img
          src="./images/news.jpg"
          alt="New cloth"
          className="cursor-pointer"
        />
      </div>

      <hr className="border-t border-gray-300 border-[1px]" />
      <div className="p-6">
        <Footer />
      </div>
    </div>
  );
}
