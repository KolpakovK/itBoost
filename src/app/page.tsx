import { InputForm } from "@/components/login/login_form"

export default function Home() {
    return (
        <div className="min-h-screen grid grid-cols-2 gap-6">
            <div className="min-h-full flex flex-col gap-12 justify-between p-6 lg:px-32 lg:py-12">

                <img src="/assets/ITBoost_Logo.svg" alt="Primary logo" className="h-12 w-fit"/>

                <InputForm></InputForm>

                <div className="flex flex-col gap-1 lg:w-2/3">
                <p className="text-sm text-gray-500">Користуючись цим сервісом ви погоджуєтесь на <a href="#" className="text-violet-500">назва сторінки</a></p>
                    <hr />
                    <p className="text-sm text-gray-500">Забули пароль? Скористайтесь <a href="#" className="text-violet-500">формою відновлення паролю</a> і отримайте новий на вашу пошту.</p>
                </div>

            </div>

            <div className="min-h-full">
                <img src="https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg" alt="Desk image" className="h-full w-full object-cover" />
            </div>
        </div>
    )
}