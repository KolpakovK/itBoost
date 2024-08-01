import * as React from "react"
import { format } from 'date-fns';

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

import { Badge } from "@/components/ui/badge"


interface ScheduleSimpleItemInterface{
    image?:string,
    short_name:string,
    name:string,
    teacher:string,
    date:Date,
}

export const ScheduleSimpleItem:React.FC<ScheduleSimpleItemInterface> = ({image="",short_name,name,teacher,date}) => {
    return (
        <div className="flex gap-2 pb-2 items-center p-2 bg-white hover:bg-gray-100 duration-150 rounded">

            <Avatar>
                <AvatarImage src={image} alt="@shadcn" />
                <AvatarFallback>{short_name}</AvatarFallback>
            </Avatar>

            <div className="flex flex-col flex-1">
                <p className="text-base text-gray-950 font-bold">{name}</p>
                <p className="text-sm text-gray-600">{teacher}</p>
            </div>

            <div className="flex gap-2">
                <Badge>{format(date, 'dd/MM/yyyy')}</Badge>
                <Badge variant="outline">{format(date, 'kk:mm')}</Badge>
            </div>

        </div>
    )
}



interface GroupScheduleItemsIterface{
    items:ScheduleSimpleItemInterface[]
}

export const GroupScheduleItems:React.FC<GroupScheduleItemsIterface> = ({items}) => {

    function groupByDay(data:ScheduleSimpleItemInterface[]) {
        const groupedData:any = {};
      
        data.forEach(item => {
          const dateKey = format(item.date, 'dd/MM/yyyy'); // Format date as a string for key
      
          if (!groupedData[dateKey]) {
            groupedData[dateKey] = [];
          }
      
          groupedData[dateKey].push(item);
        });
      
        return groupedData;
    }

    const mappedItems = groupByDay(items);

    return (
        <div>

            <code>
                {JSON.stringify(Object.keys(mappedItems), null, 2)}
            </code>

            {Object.keys(mappedItems).map((keyName,index) => (
                <li>kek</li>
            ))}

        </div>
    )
}