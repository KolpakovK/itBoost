import { LoginNav } from "@/components/login/login_misc"

export default function Page(){
    return(
        <div className="min-h-full flex flex-col gap-8 p-6 lg:px-32 lg:py-12">

            <LoginNav location="Політики використання даних"/>

            <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="flex flex-col gap-12 lg:col-start-2">
                    <div className="flex flex-col gap-0">
                        <p className=" text-gray-500 text-sm lg:text-lg font-light">Політики використання даних</p>
                        <h1 className=" text-gray-950 text-3xl lg:text-4xl font-bold leading-tight font-display">Політика конфіденційності, сумісна з <span className="text-violet-500">GDPR</span></h1>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h2 className="text-lg font-bold text-gray-950">A. Вступ</h2>
                        <ol>
                            <li className="text-gray-600">Конфіденційність користувачів нашого веб-сайту має велике значення для нас, і ми докладаємо всіх зусиль для забезпечення її захисту. Дані правила пояснюють, як ми використовуємо вашу персональну інформацію.</li>
                            <li className="text-gray-600">Погоджуючись із використанням файлів-cookie при першому відвіданні нашого веб-сайту, відповідно до положень даних Правил, ви надаєте нам дозвіл на використання файлів-cookie при кожному вашому наступному візиті.</li>
                        </ol>
                    </div>
                </div>
            </div>

        </div>
    )
}