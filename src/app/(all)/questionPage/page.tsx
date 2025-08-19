import Footer from "@/components/footer";
import Header from "@/components/header";
import Link from "next/link";

export default function QuestionPage() {
  return (
    <>
      <div className="p-6">
        <Header variant="black" />
      </div>

      <main className="max-w-[1200px] mx-auto my-6">
        <h1 className="text-center text-2xl font-bold mb-6">
          Тебе нужна помощь?
        </h1>

        <hr className="border-t border-gray-300 border-[1px] my-6 w-screen -mx-[calc((100vw-100%)/2)]" />
        <div className="text-center max-w-[800px] mx-auto">
          <h1 className="text-2xl mb-6">
            Часто задаваемые вопросы об изделиях, возврате и доставке
          </h1>
          <p>
            Pull & Bear постоянно ищет новые пути, чтобы повышать уровень
            удовлетворенности процессом покупки для всех клиентов. Поэтому,
            чтобы облегчить и упростить процесс покупки на нашем
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
