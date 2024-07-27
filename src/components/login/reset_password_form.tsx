"use client"

import { useState } from "react"


import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

import { Terminal } from "lucide-react"

const FormSchema = z.object({
    mail: z
    .string()
    .min(5, { message: "This field has to be filled." })
    .email("This is not a valid email.")
}).required(
    {
        mail: true,
    }
)

export function ResetPasswordForm() {

    const [formStatus, setFormStatus] = useState(false);
    const [submittedMail, setSubmittedMail] = useState("");

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            mail: "",
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        })

        setFormStatus(true);
        setSubmittedMail(data.mail);
    }

    return (
        <div className="flex flex-col gap-8">

            <div className="flex flex-col gap-0">
                <p className=" text-gray-500 text-sm lg:text-lg font-light">Забули пароль?</p>
                <h1 className=" text-gray-950 text-3xl lg:text-4xl font-bold leading-tight font-display">Скористайтесь формою для отримання паролю!</h1>
            </div>

            {!formStatus && (
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="space-y-4">
                            <FormField control={form.control} name="mail" render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Пошта</FormLabel>
                                    <FormControl>
                                        <Input type="email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                        </div>

                        <Button type="submit" className="w-full">Відновити пароль</Button>
                    </form>
                </Form>
            )}

            {formStatus && (
                <Alert>
                    <Terminal className="h-4 w-4" />
                    <AlertTitle>Heads up!</AlertTitle>
                    <AlertDescription>
                        <span className=" font-bold">{submittedMail}</span>
                        You can add components and dependencies to your app using the cli.
                    </AlertDescription>
                </Alert>
            )}
        </div>
    )
}
