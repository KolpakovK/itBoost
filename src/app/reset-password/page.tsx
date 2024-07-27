import { LoginNav } from "@/components/login/login_misc"
import { ResetPasswordForm } from "@/components/login/reset_password_form"

export default function Page(){
    return(
        <div className="min-h-full flex flex-col gap-8 p-6 lg:px-32 lg:py-12">

            <LoginNav location="Відновлення паролю"/>

            <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="lg:col-start-2">
                    <ResetPasswordForm/>
                </div>
            </div>

        </div>
    )
}