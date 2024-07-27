import React from "react";
import Link from "next/link"
import { Button } from "../ui/button";

import { ArrowLeft } from "lucide-react";

interface LoginNavInterface{
    location?:string,
}

export const LoginNav: React.FC<LoginNavInterface> = ({ location }) => {
    return(
        <div>
            {location && (
                <div className="flex gap-2 items-center">
                    <Button variant="outline" size="icon" asChild>
                        <Link href="/"><ArrowLeft/></Link>
                    </Button>
                    <p className="text-lg font-semibold text-gray-800">{location}</p>
                </div>
            )}

            {!location && (
                <img src="/assets/ITBoost_Logo.svg" alt="Primary logo" className="h-12 w-fit"/>
            )}
            
        </div>
    )
}