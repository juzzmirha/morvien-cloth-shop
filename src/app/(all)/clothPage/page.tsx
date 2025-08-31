"use client";

import { useEffect } from "react";
import { useAction } from "@/hooks/useAction";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import Link from "next/link";
import { Header, Footer } from "@/components";

export default function ClothPage() {
  const { products, loading, error } = useTypedSelector(
    (state) => state.product
  );

  const { FetchProduct } = useAction();

  useEffect(() => {
    FetchProduct();
  }, []);

  return (
    <div>
      <div className="p-6">
        <Header variant="black" />
      </div>
      <hr className="border-t border-gray-300 border-[1px] mt-6" />

      <main className="max-w-[1200px] mx-auto mt-4">
        <h1 className="text-center text-2xl font-bold mb-6">Новинки</h1>

        {loading && <p className="text-center">Загрузка...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        <div className="grid grid-cols-4 gap-6 justify-items-center">
          {products.map((item) => (
            <Link
              key={item.id}
              href={`/clothPage/${item.id}`}
              className="w-[280px] border p-4 shadow-sm flex flex-col cursor-pointer
      transition duration-300 hover:border-black hover:shadow-md"
            >
              <div className="w-full h-[350px] bg-gray-100 rounded overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-between flex-1 mt-3">
                <div>
                  <h2 className="font-semibold text-lg">{item.title}</h2>
                  <p className="text-sm text-gray-600">
                    {item.description.length > 50
                      ? item.description.slice(0, 50) + "..."
                      : item.description}
                  </p>
                </div>
                <p className="font-medium mt-2">Цена: {item.price} ₸</p>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <hr className="border-t border-gray-300 border-[1px] mt-6" />
      <div className="p-6 bg-white">
        <Footer />
      </div>
    </div>
  );
}
