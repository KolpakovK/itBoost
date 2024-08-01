import { DashboardFullNavigation } from "@/components/dashboard/dashboard_navigation"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { GroupScheduleItems } from "@/components/dashboard/dashboard_misc"


import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Alert,
    AlertDescription,
    AlertTitle
} from "@/components/ui/alert"

import { GraduationCap, ArrowRight, BadgeCheck, NotebookTabs, Terminal } from "lucide-react"


export default function Page(){
    return(
        <div className="min-h-screen flex flex-col gap-6 bg-gradient-to-b from-gray-50 to-white">

            <DashboardFullNavigation/>

            <div className="flex flex-col gap-0 px-8">
                <p className=" text-lg font-light text-gray-600">Раді вас тут бачити!</p>
                <h1 className=" text-3xl lg:text-4xl font-bold text-gray-950">Панель студента</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6 px-8">

                <Card>
                    <CardHeader>
                        <div className="flex gap-4 items-center">
                            <div className="size-16 flex items-center justify-center bg-green-500 rounded-lg">
                                <GraduationCap className=" text-white"/>
                            </div>
                            <div className="flex flex-col gap-1">
                                <CardDescription>Середній бал</CardDescription>
                                <CardTitle><span className="text-3xl lg:text-4xl">8.75</span> <span className="text-lg font-normal text-gray-600">/12</span></CardTitle>
                            </div>
                        </div>
                    </CardHeader>
                    <CardFooter className="flex flex-col gap-2">
                        <Separator />
                        <Button className="w-full flex justify-between" variant="link">Перейти до оцінок <ArrowRight/></Button>
                    </CardFooter>
                </Card>

                <Card>
                    <CardHeader>
                        <div className="flex gap-4 items-center">
                            <div className="size-16 flex items-center justify-center bg-orange-500 rounded-lg">
                                <BadgeCheck className=" text-white"/>
                            </div>
                            <div className="flex flex-col gap-1">
                                <CardDescription>Відвідування заннять</CardDescription>
                                <CardTitle><span className="text-3xl lg:text-4xl">10</span> <span className="text-lg font-normal text-gray-600">/10</span></CardTitle>
                            </div>
                        </div>
                    </CardHeader>
                    <CardFooter className="flex flex-col gap-2">
                        <Separator />
                        <Button className="w-full flex justify-between" variant="link">Переглянути графік відвидуваннь <ArrowRight/></Button>
                    </CardFooter>
                </Card>

                <Card>
                    <CardHeader>
                        <div className="flex gap-4 items-center">
                            <div className="size-16 flex items-center justify-center bg-violet-500 rounded-lg">
                                <NotebookTabs className=" text-white"/>
                            </div>
                            <div className="flex flex-col gap-1">
                                <CardDescription>Домашніх завдань</CardDescription>
                                <CardTitle><span className="text-3xl lg:text-4xl">3</span></CardTitle>
                            </div>
                        </div>
                    </CardHeader>
                    <CardFooter className="flex flex-col gap-2">
                        <Separator />
                        <Button className="w-full flex justify-between" variant="link">Перейти к завданням <ArrowRight/></Button>
                    </CardFooter>
                </Card>

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 px-8 flex-1">

                <Card className="lg:col-span-2 max-h-[550px] overflow-hidden flex flex-col">
                    <CardHeader>
                        <CardDescription>Заняття на два тижні</CardDescription>
                        <CardTitle>Графік заннять</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 overflow-y-auto">
                        <div className="flex flex-col gap-2">
                            <GroupScheduleItems items={[
                                {
                                    name: "Lesson",
                                    teacher: "Teachers name",
                                    short_name: "CN",
                                    date: new Date(2017, 0, 1)
                                },
                                {
                                    name: "Lesson",
                                    teacher: "Teachers name",
                                    short_name: "CN",
                                    date: new Date(2017, 0, 2)
                                },
                                {
                                    name: "Lesson",
                                    teacher: "Teachers name",
                                    short_name: "CN",
                                    date: new Date(2017, 0, 2)
                                },
                                {
                                    name: "Lesson",
                                    teacher: "Teachers name",
                                    short_name: "CN",
                                    date: new Date()
                                }
                            ]}/>
                        </div>
                    </CardContent>
                </Card>

                <Card className="lg:col-span-1 max-h-[550px] overflow-hidden flex flex-col">
                    <CardHeader>
                        <CardDescription>Новини</CardDescription>
                        <CardTitle>Дізнайтесь про івенти та новини ITBoost!</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 overflow-y-auto">
                        <div className="flex flex-col gap-2">
                            <Alert>
                                <Terminal className="h-4 w-4" />
                                <AlertTitle>Дана функція у розробці!</AlertTitle>
                                <AlertDescription> 
                                    Вибачте, але дана частина сервісу зараз знаходиться у розробці. В найближчему майбутньому ми вас сповищемо коли вона буде реалізована.
                                </AlertDescription>
                            </Alert>
                        </div>
                    </CardContent>
                </Card>

            </div>

        </div>
    )
}