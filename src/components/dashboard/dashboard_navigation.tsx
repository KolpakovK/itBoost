"use client"

import * as React from "react"
import Link from "next/link"

import { CalendarFold, GraduationCap, BookCheck, UserCog, LogOut } from "lucide-react"

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"


import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
    DropdownMenuSeparator
} from "@/components/ui/dropdown-menu"

export function AvatarNavigation() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Мій акаунт</DropdownMenuLabel>
                <DropdownMenuItem asChild>
                    <a href="#" className=" text-sm text-gray-900 flex items-center gap-2"><UserCog className=" size-4"/> Налаштування</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <a href="#" className=" text-sm text-gray-900 flex items-center gap-2"><LogOut className=" size-4"/> Вийти</a>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}


export function DashboardNavigation() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                {/* DASHBOARD */}
                <NavigationMenuItem>
                    <Link href="/dashboard" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Головна
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                {/* SCHEDULE */}
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Навчання</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <div className="grid grid-cols-2 gap-2 w-[500px] p-2 bg-white">

                            <NavigationMenuLink asChild>
                                <a href="#" className="flex flex-col justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded row-span-2">
                                    <CalendarFold className=" size-12" />
                                    <div className="flex flex-col">
                                        <p className=" font-semibold text-base text-gray-900">Графік заннять</p>
                                        <p className=" text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    </div>
                                </a>
                            </NavigationMenuLink>

                            <NavigationMenuLink asChild>
                                <a href="#" className="flex flex-col p-3 bg-white hover:bg-gray-100 rounded">
                                    <GraduationCap />
                                    <p className=" font-semibold text-sm text-gray-900">Оцінки</p>
                                    <p className=" text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </a>
                            </NavigationMenuLink>

                            <NavigationMenuLink asChild>
                                <a href="#" className="flex flex-col p-3 bg-white hover:bg-gray-100 rounded">
                                    <BookCheck />
                                    <p className=" font-semibold text-sm text-gray-900">Відвідування</p>
                                    <p className=" text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </a>
                            </NavigationMenuLink>
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                {/* LESSONS */}
                <NavigationMenuItem>
                    <Link href="/docs" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Домашні завдання
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                {/* MATERIALS */}
                <NavigationMenuItem>
                    <Link href="/docs" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Матеріали уроків
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export function MobileNavigation() {
    return(
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Навігація</DropdownMenuLabel>
                <DropdownMenuItem asChild>
                    <a href="/dashboard" className=" text-sm text-gray-900 flex items-center gap-2">Головна</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <a href="#" className=" text-sm text-gray-900 flex items-center gap-2">Графік навчання</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <a href="#" className=" text-sm text-gray-900 flex items-center gap-2">Оцінки</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <a href="#" className=" text-sm text-gray-900 flex items-center gap-2">Відвідування</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <a href="#" className=" text-sm text-gray-900 flex items-center gap-2">Домашні завдання</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <a href="#" className=" text-sm text-gray-900 flex items-center gap-2">Матеріали уроків</a>
                </DropdownMenuItem>
                <DropdownMenuSeparator/>
                <DropdownMenuLabel>Мій акаунт</DropdownMenuLabel>
                <DropdownMenuItem asChild>
                    <a href="#" className=" text-sm text-gray-900 flex items-center gap-2"><UserCog className=" size-4"/> Налаштування</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <a href="#" className=" text-sm text-gray-900 flex items-center gap-2"><LogOut className=" size-4"/> Вийти</a>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}


export function DashboardFullNavigation() {
    return(
        <div className="flex gap-8 h-12 px-8 justify-between lg:justify-start items-center border-b border-gray-200 bg-white">

            <div className="flex items-center gap-4 h-full pr-4 border-r border-gray-200">
                <img src="/assets/ITBoost_Logo.svg" alt="Primary logo" className="h-8 w-fit"/>
            </div>

            <div className="flex-1 items-center hidden lg:flex">
                <DashboardNavigation/>
            </div>

            <div className="hidden lg:block">
                <AvatarNavigation/>
            </div>


            <div className="block lg:hidden">
                <MobileNavigation/>
            </div>

        </div>
    )
}