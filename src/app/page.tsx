import { LoginNav } from "@/components/login/login_misc"
import { InputForm } from "@/components/login/login_form"

export default function Home() {
    return (
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="min-h-full flex flex-col gap-12 justify-between p-6 lg:px-32 lg:py-12">

                <LoginNav/>

                <div className="flex flex-col gap-4">
                    <InputForm/>
                    <p className="text-sm text-gray-500 lg:w-2/3">Забули пароль? Скористайтесь <a href="/reset-password" className="text-violet-500">формою відновлення паролю</a> і отримайте новий на вашу пошту.</p>
                </div>

                <div className="flex flex-col gap-1 lg:w-2/3 pb-12 lg:pb-0">
                    <hr />
                    <p className="text-sm text-gray-500">Користуючись цим сервісом ви погоджуєтесь на <a href="/legal" className="text-violet-500">політику конфіндеціальності і використання кукі.</a></p>
                </div>

            </div>

            <div className="min-h-full hidden lg:block">
                <img src="https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg" alt="Desk image" className="h-full w-full object-cover" />
            </div>
        </div>
    )
}