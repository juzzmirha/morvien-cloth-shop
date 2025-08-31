"use client";

import { Header, Footer } from "@/components";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function QuestionPage() {
  return (
    <>
      <div className="p-6">
        <Header variant="black" />
      </div>

      <main className="max-w-[1200px] mx-auto my-6">
        <h1 className="text-center text-4xl font-bold mb-6">Справка</h1>

        <div className="flex justify-center items-center w-full">
          <input
            type="text"
            placeholder="ЧЕМ МЫ МОЖЕМ ВАМ ПОМОЧЬ?"
            className="w-full max-w-[600px] text-center border-0 border-b border-black outline-none placeholder:text-black placeholder:uppercase tracking-wide py-2"
          />
        </div>
        <div className="mt-10 max-w-[800px] mx-auto text-4xl">
          <Accordion type="single" collapsible className="w-full text-2xl">
            <AccordionItem value="item-1">
              <AccordionTrigger>Статус заказа</AccordionTrigger>
              <AccordionContent>
                Вы можете проверить статус вашего заказа в личном кабинете или
                через письмо-подтверждение, отправленное на вашу почту.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Часто задаваемые вопросы</AccordionTrigger>
              <AccordionContent>
                Здесь мы собрали ответы на самые распространенные вопросы наших
                клиентов. Если вы не нашли ответ, пожалуйста свяжитесь с нами.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Обработка заказа</AccordionTrigger>
              <AccordionContent>
                Обычно обработка заказа занимает от 1 до 2 рабочих дней. В
                пиковые периоды это время может быть немного дольше.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Как сделать возврат</AccordionTrigger>
              <AccordionContent>
                Для возврата товара заполните форму возврата на сайте или
                обратитесь в ближайший магазин Morvien в течение 14 дней.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>Доставка</AccordionTrigger>
              <AccordionContent>
                Доставка осуществляется курьерской службой и занимает 3–7 дней в
                зависимости от вашего региона.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <hr className="border-t border-gray-300 border-[1px] my-6 w-screen -mx-[calc((100vw-100%)/2)]" />

        <div className="text-center max-w-[800px] mx-auto">
          <h1 className="text-2xl mb-6">
            Часто задаваемые вопросы об изделиях, возврате и доставке
          </h1>
          <p className="mb-4">
            Morvien постоянно ищет новые пути, чтобы повышать уровень
            удовлетворенности процессом покупки для всех клиентов. Поэтому,
            чтобы облегчить и упростить процесс покупки на нашем сайте, мы
            собрали ответы на самые популярные вопросы.
          </p>

          <Link href="" className="font-bold underline">
            see more
          </Link>
        </div>
      </main>

      <hr className="border-t border-gray-300 border-[1px] my-6" />
      <Footer />
    </>
  );
}
