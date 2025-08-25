"use client";
import Header from "@/components/header";
import { Heart } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Footer from "@/components/footer";

export default function ClothById() {
  return (
    <div>
      <div className="p-6">
        <Header variant="black" />
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-10 px-6 md:px-16">
        <div className="flex justify-center md:justify-start">
          <img
            src="/clothIMG/first.jpg"
            alt="Product"
            className="h-[500px] md:h-[600px] object-cover rounded-xl shadow-sm"
          />
        </div>

        <div className="w-full max-w-md flex flex-col gap-6">
          <div>
            <h1 className="text-3xl font-semibold">Джинсовая куртка</h1>
            <p className="text-2xl mt-2 font-medium text-gray-700">
              KZT 22.990,00
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Model 184 cm tall and size M
            </p>
          </div>

          <div className="w-full">
            <div className="flex justify-between text-lg mb-2">
              <a href="#" className="underline text-black">
                See measurements
              </a>
              <a href="#" className="underline text-blue-600">
                Find my size
              </a>
            </div>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="s">S</SelectItem>
                <SelectItem value="m">M</SelectItem>
                <SelectItem value="l">L</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-3">
            <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-8 rounded-full font-medium transition cursor-pointer">
              Add to my basket
            </button>
            <button className="bg-white border border-gray-300 rounded-full p-3 hover:bg-gray-100 transition cursor-pointer">
              <Heart className="hover:text-red-600 hover:fill-red-500 transition" />
            </button>
          </div>

          <Accordion
            type="single"
            collapsible
            className="w-full mt-4 border-t border-gray-200"
            defaultValue="item-1"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-medium">
                Product Information
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-gray-600">
                <div className="flex flex-col gap-4">
                  <p>
                    Our flagship product combines cutting-edge technology with
                    sleek design. Built with premium materials, it offers
                    unparalleled performance and reliability.
                  </p>
                  <p>
                    Key features include advanced processing capabilities, and
                    an intuitive user interface designed for both beginners and
                    experts.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-medium">
                Состав и уход
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-gray-600">
                <div className="flex flex-col gap-4">
                  <p>
                    Состав <br />
                    ВНЕШНЯЯ ЧАСТЬ 100% ХЛОПОК
                  </p>
                  <p>
                    Уход <br />
                    Машинная стирка при макс. 40ºC короткий отжим. Отбеливать
                    запрещено. Гладить при макс. 110ºC. Не подвергать химчистке.
                    Машинная сушка при сниженной температуре.
                  </p>{" "}
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-medium">
                Return Policy
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-gray-600">
                <div className="flex flex-col gap-4">
                  <p>
                    We stand behind our products with a comprehensive 30-day
                    return policy. If you&apos;re not completely satisfied,
                    simply return the item in its original condition.
                  </p>
                  <p>
                    Our hassle-free return process includes free return shipping
                    and full refunds processed within 48 hours of receiving the
                    returned item.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <hr className="border-t border-gray-300 border-[1px] mt-6" />
      <div className="p-6 bg-white">
        <Footer />
      </div>
    </div>
  );
}
