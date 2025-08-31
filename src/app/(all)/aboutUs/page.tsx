"use-client";

import { Header, Footer } from "@/components";
import { Shirt, Star, Check, Signature } from "lucide-react";
export default function AboutUs() {
  return (
    <>
      <div>
        <div className="p-6">
          <Header variant="black" />
        </div>
        <hr className="border-t border-gray-300 border-[1px] my-6 w-screen -mx-[calc((100vw-100%)/2)]" />

        <div className="flex flex-row justify-between max-w-[1200px] mx-auto px-4 py-12 gap-6">
          <h1 className="text-4xl font-bold tracking-wide text-gray-900">
            ABOUT US
          </h1>
          <p className="text-lg leading-relaxed text-gray-600 max-w-[800px] text-justify">
            Morvien — это магазин, который объединяет классику, casual и
            streetwear в едином стиле. Мы верим, что одежда должна подчеркивать
            индивидуальность и оставаться удобной каждый день. В наших
            коллекциях вы найдете универсальные вещи для учебы, работы, прогулок
            и вечеров в городе. Мы уделяем внимание деталям, качеству тканей и
            современному дизайну, чтобы каждая вещь служила долго и смотрелась
            стильно. <span className="font-medium text-gray-800">Morvien</span>{" "}
            — это про комфорт, тренды и уверенность в себе.
          </p>
        </div>
        <hr className="border-t border-gray-300 border-[1px] my-6 w-screen -mx-[calc((100vw-100%)/2)]" />

        <div className="text-center">
          <h1 className="text-3xl font-medium">VALUES</h1>
          <div className="flex flex-row items-center justify-center gap-12 max-w-[1000px] mx-auto py-20">
            {[
              { icon: <Check />, label: "Качество" },
              { icon: <Star />, label: "Стиль" },
              { icon: <Shirt />, label: "Комфорт" },
              { icon: <Signature />, label: "Уверенность" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center group"
              >
                <div
                  className="bg-gray-200 rounded-full p-16 flex items-center justify-center 
                transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:shadow-xl cursor-pointer"
                >
                  <span className="text-6xl text-gray-800">{item.icon}</span>
                </div>
                <p
                  className="mt-4 font-medium text-gray-900 text-lg relative 
                    after:content-[''] after:block after:h-[2px] after:w-0 after:bg-gray-800 
                    after:transition-all after:duration-300 group-hover:after:w-full"
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <hr className="border-t border-gray-300 border-[1px] my-6 w-screen -mx-[calc((100vw-100%)/2)]" />

        <div className="p-6">
          <Footer />
        </div>
      </div>
    </>
  );
}
