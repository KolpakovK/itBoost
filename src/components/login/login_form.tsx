"use client"

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

const FormSchema = z.object({
  username: z.string().min(5, {
    message: "Ім'я користувача не може бути менше ніж 5 символів.",
  }),
  password: z.string()
}).required(
  {
    username: true,
    password: true,
  }
)

export function InputForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      password: ""
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
  }

  return (
    <div className="lg:w-2/3 flex flex-col gap-8">

        <div className="flex flex-col gap-0">
            <p className=" text-gray-500 text-lg font-light">Увійдіть до кабінету щоб розпочати роботу</p>
            <h1 className=" text-gray-950 text-[64px] font-bold leading-tight font-display">Навчальна платформа <span className="text-violet-500">ITBoost</span></h1> 
        </div>

        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-4">
                    <FormField control={form.control} name="username" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Логін</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormDescription>
                                Використовуйте логін котрий вам дала адміністрація закладу
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}/>

                    <FormField control={form.control} name="password" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Пароль</FormLabel>
                            <FormControl>
                                <Input type="password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}/>
                </div>

                <Button type="submit" className="w-full">Увійти</Button>
            </form>
        </Form>
    </div>
  )
}
