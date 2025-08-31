"use client";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useAction } from "@/hooks/useAction";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { Header, Footer } from "@/components";
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

export default function ClothById() {
  const { id } = useParams();
  const { FetchProductById } = useAction();
  const { loading, error, selectedProduct } = useTypedSelector(
    (state) => state.product
  );

  useEffect(() => {
    if (id) {
      FetchProductById(Number(id));
    }
  }, [id]);

  if (loading) return <div className="p-6">Loading...</div>;
  if (error) return <div className="p-6 text-red-500">{error}</div>;
  if (!selectedProduct) return <div className="p-6">No product found</div>;

  return (
    <div>
      <div className="p-6">
        <Header variant="black" />
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-10 px-6 md:px-16">
        <div className="flex justify-center md:justify-start">
          <img
            src={selectedProduct.image}
            alt={selectedProduct.title}
            className="h-[500px] md:h-[600px] object-cover rounded-xl shadow-sm"
          />
        </div>

        <div className="w-full max-w-md flex flex-col gap-6">
          <div>
            <h1 className="text-3xl font-semibold">{selectedProduct.title}</h1>
            <p className="text-2xl mt-2 font-medium text-gray-700">
              ${selectedProduct.price}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Category: {selectedProduct.category}
            </p>
          </div>

          <div className="w-full">
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
                Product Description
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-gray-600">
                <p>{selectedProduct.description}</p>
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
