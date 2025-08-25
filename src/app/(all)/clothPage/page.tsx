import Footer from "@/components/footer";
import Header from "@/components/header";
import { mockClothes } from "@/mockData/clothData";

export default function ClothPage() {
  return (
    <div>
      <div className="p-6">
        <Header variant="black" />
      </div>

      <main className="max-w-[1200px] mx-auto">
        <h1 className="text-center text-2xl font-bold mb-6">Новинки</h1>

        <div className="grid grid-cols-4 gap-6 justify-items-center">
          {mockClothes.tshirts.map((item) => (
            <div
              key={item.id}
              className="w-[280px] border  p-4 shadow-sm flex flex-col cursor-pointer
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
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
                <p className="font-medium mt-2">Цена: {item.price} ₸</p>
              </div>
            </div>
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
